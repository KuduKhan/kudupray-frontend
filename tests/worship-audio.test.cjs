const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const modulePromise = import('../public/worship-audio.mjs');
function setup(manifest = {}) {
  const audios = [], timers = new Map(), messages = [], spoken = [];
  let id = 0;
  class Audio extends EventTarget {
    constructor() { super(); audios.push(this); }
    play() { this.dispatchEvent(new Event('playing')); return Promise.resolve(); }
    pause() { this.paused = true; }
    removeAttribute() { this.src = ''; }
    load() {}
  }
  const env = {
    Audio, CustomEvent: class {}, dispatchEvent() {},
    fetch: async () => ({ ok: true, json: async () => manifest }),
    setTimeout: callback => { timers.set(++id, callback); return id; }, clearTimeout: id => timers.delete(id),
    showToast: text => messages.push(text),
    SpeechSynthesisUtterance: class { constructor(text) { this.text = text; } },
    speechSynthesis: { getVoices: () => [{ lang: 'ar-SA' }], speak(u) { spoken.push(u); u.onstart(); }, cancel() { this.cancelled = true; } }
  };
  const button = () => {
    const label = {}, status = {};
    return { dataset: {}, isConnected: true, attrs: {}, parentElement: { querySelector: () => status }, querySelector: selector => selector === '[data-audio-label]' ? label : null, setAttribute(name, value) { this.attrs[name] = value; }, label, status };
  };
  return { env, audios, timers, messages, spoken, button };
}
test('one shared player stops the previous recording and ignores its late end event', async () => {
  const { createWorshipAudioPlayer } = await modulePromise;
  const f = setup({ one: { text: 'one', urls: ['/one.mp3'], label: 'Recorded' }, two: { text: 'two', urls: ['/two.mp3'], label: 'Recorded' } });
  const player = createWorshipAudioPlayer(f.env), first = f.button(), second = f.button();
  await player.toggle({ key: 'one', text: 'one', button: first });
  await player.toggle({ key: 'two', text: 'two', button: second });
  assert.equal(f.audios[0].paused, true);
  f.audios[0].dispatchEvent(new Event('ended'));
  assert.equal(second.dataset.state, 'playing');
  await player.toggle({ key: 'two', text: 'two', button: second });
  assert.equal(second.dataset.state, 'idle');
  assert.equal(f.audios[1].paused, true);
});
test('cancelling catalogue preparation prevents late playback', async () => {
  const { createWorshipAudioPlayer } = await modulePromise;
  const f = setup(); let resolve;
  f.env.fetch = () => new Promise(done => resolve = done);
  const player = createWorshipAudioPlayer(f.env), button = f.button();
  const pending = player.toggle({ key: 'one', text: 'one', button });
  await player.toggle({ key: 'one', text: 'one', button });
  resolve({ ok: true, json: async () => ({ one: { text: 'one', urls: ['/one.mp3'] } }) });
  await pending;
  assert.equal(f.audios.length, 0);
  assert.equal(button.dataset.state, 'idle');
});
test('mismatched recording text uses a labelled Arabic voice, never an English fallback', async () => {
  const { createWorshipAudioPlayer } = await modulePromise;
  const f = setup({ one: { text: 'different text', urls: ['/wrong.mp3'] } }), button = f.button();
  const player = createWorshipAudioPlayer(f.env);
  await player.toggle({ key: 'one', text: 'selected Arabic', button });
  assert.equal(f.audios.length, 0);
  assert.equal(f.spoken[0].text, 'selected Arabic');
  assert.equal(button.status.textContent, 'Arabic device voice');
  player.stop();
  f.env.speechSynthesis.getVoices = () => [{ lang: 'en-US' }];
  await player.toggle({ key: 'two', text: 'other Arabic', button });
  assert.equal(f.spoken.length, 1);
  assert.match(f.messages[0], /No Arabic device voice/);
  assert.equal(button.dataset.state, 'idle');
});
test('multi-ayah playback follows the range and resets controls on a media error', async () => {
  const { createWorshipAudioPlayer } = await modulePromise;
  const f = setup({ one: { text: 'one', urls: ['/first.mp3', '/second.mp3'], label: 'Full ayahs' } }), button = f.button();
  const player = createWorshipAudioPlayer(f.env);
  await player.toggle({ key: 'one', text: 'one', button });
  f.audios[0].dispatchEvent(new Event('ended'));
  assert.equal(f.audios[0].src, '/second.mp3');
  f.audios[0].dispatchEvent(new Event('error'));
  assert.equal(button.dataset.state, 'idle');
  assert.equal(button.attrs['aria-pressed'], 'false');
  assert.match(f.messages[0], /could not load/);
});
test('published recording map still refers to the exact displayed text', () => {
  const source = fs.readFileSync('public/kudupray-runtime.js', 'utf8'), ctx = vm.createContext({});
  const start = source.indexOf('const duas =');
  vm.runInContext(source.slice(start, source.indexOf('// ===', start + 5)) + ';this.list=duas', ctx);
  const dhikrStart = source.indexOf('const TASBIH_PHRASES');
  vm.runInContext(source.slice(dhikrStart, source.indexOf('const DEEN_QUIZ', dhikrStart)) + ';this.details=TASBIH_DETAILS', ctx);
  const manifest = JSON.parse(fs.readFileSync('public/worship-audio.json'));
  for (const [key, clip] of Object.entries(manifest)) {
    assert.equal(clip.text, key.startsWith('dua:') ? ctx.list[Number(key.slice(4))].ar : ctx.details[key.slice(6)].arabic);
    assert.ok(clip.urls.length > 0);
    assert.ok(clip.urls.every(url => /^https:\/\/(audio\.opendua\.org|everyayah\.com)\//.test(url)));
  }
});

test('a stalled recording times out and leaves the Listen control usable', async () => {
  const { createWorshipAudioPlayer } = await modulePromise;
  const f = setup({ one: { text: 'one', urls: ['/stalled.mp3'] } }), button = f.button();
  f.env.Audio.prototype.play = () => Promise.resolve();
  const player = createWorshipAudioPlayer(f.env);
  await player.toggle({ key: 'one', text: 'one', button });
  assert.equal(button.dataset.state, 'loading');
  [...f.timers.values()][0]();
  assert.equal(button.dataset.state, 'idle');
  assert.equal(button.attrs['aria-busy'], 'false');
  assert.match(f.messages[0], /timed out/);
});
