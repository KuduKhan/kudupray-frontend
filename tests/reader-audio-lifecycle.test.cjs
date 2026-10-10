const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');

test('changing reciters preserves playback after the standby player becomes active', () => {
  let update;
  const ctx = {
    window: {}, QURAN_READER_RECITERS: [{ identifier: 'new-voice' }], quranReaderState: {},
    getQuranReaderActiveAudio: () => ({ paused: false, ended: false }),
    document: { getElementById: () => ({ paused: true }) },
    clearQuranDownload() {}, updateQuranReaderAudioMeta() {}, setQuranReaderStatus() {},
    kuduStorage: { setItem() {} }, updateQuranReaderAudio: options => { update = options; }
  };
  const start = runtime.indexOf('window.selectQuranReaderReciter =');
  vm.runInNewContext(runtime.slice(start, runtime.indexOf('window.playQuranReaderAyah =', start)), ctx);
  ctx.window.selectQuranReaderReciter('new-voice');
  assert.equal(update.play, true);
  assert.equal(ctx.quranReaderState.reciter, 'new-voice');
});

test('audio binding registers one visibility listener even when binding is called again', () => {
  const listeners = [];
  const audio = { addEventListener() {} };
  const ctx = { quranReaderState: {}, document: { getElementById: () => audio, addEventListener: name => listeners.push(name) }, bindQuranPlayer() {} };
  const start = runtime.indexOf('function bindQuranReaderAudio()');
  vm.runInNewContext(runtime.slice(start, runtime.indexOf('function renderQuranReaderSurah(', start)), ctx);
  ctx.bindQuranReaderAudio();
  ctx.bindQuranReaderAudio();
  assert.deepEqual(listeners, ['visibilitychange']);
});

test('wake-lock requests are deduplicated and a late response is released after pausing', async () => {
  let resolve, requests = 0, releases = 0;
  const audio = { paused: false, ended: false };
  const ctx = {
    quranReaderState: {}, document: { visibilityState: 'visible' }, getQuranReaderActiveAudio: () => audio,
    navigator: { wakeLock: { request: () => { requests++; return new Promise(done => { resolve = done; }); } } }
  };
  const start = runtime.indexOf('async function requestQuranWakeLock(');
  vm.runInNewContext(runtime.slice(start, runtime.indexOf('function bindQuranReaderAudio()', start)), ctx);
  const first = ctx.requestQuranWakeLock();
  await ctx.requestQuranWakeLock();
  assert.equal(requests, 1);
  audio.paused = true;
  resolve({ release: async () => { releases++; }, addEventListener() {} });
  await first;
  assert.equal(releases, 1);
  assert.equal(ctx.quranReaderState.wakeLockPending, false);
  assert.equal(ctx.quranReaderState.wakeLock, undefined);
});
