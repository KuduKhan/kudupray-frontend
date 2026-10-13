// One player shared by dua cards and the dhikr counter. Recordings load on demand.
export function createWorshipAudioPlayer(env = window) {
  let active = null, revision = 0, manifestPromise;
  env.speechSynthesis?.getVoices();
  const setState = (item, state, note = '') => {
    if (!item?.button?.isConnected) return;
    item.button.dataset.state = state;
    item.button.setAttribute('aria-pressed', String(state !== 'idle'));
    item.button.setAttribute('aria-busy', String(state === 'loading'));
    item.button.querySelector('[data-audio-label]').textContent = state === 'loading' ? 'Cancel' : state === 'playing' ? 'Stop' : 'Listen';
    item.button.querySelector('svg path')?.setAttribute('d', state === 'playing' ? 'M7 5h10v14H7z' : 'm8 4 12 8-12 8z');
    const status = item.button.parentElement.querySelector('[data-audio-status]');
    if (status) status.textContent = note;
  };
  function stop() {
    revision++;
    const old = active;
    active = null;
    if (old?.timer) env.clearTimeout(old.timer);
    if (old?.audio) { old.audio.pause(); old.audio.removeAttribute('src'); old.audio.load(); }
    if (old?.utterance) env.speechSynthesis?.cancel();
    setState(old, 'idle');
  }
  async function loadManifest() {
    if (!manifestPromise) manifestPromise = env.fetch('/worship-audio.json', { signal: AbortSignal.timeout(8000) })
      .then(response => { if (!response.ok) throw new Error('Audio catalogue unavailable'); return response.json(); })
      .catch(error => { manifestPromise = null; throw error; });
    return manifestPromise;
  }
  async function toggle({ key, text, button }) {
    if (active?.key === key) { stop(); return; }
    stop();
    const token = revision;
    const item = active = { key, text, button };
    setState(item, 'loading');
    const current = () => active === item && revision === token && button.isConnected;
    const fail = message => { if (!current()) return; stop(); env.showToast?.(message); };
    try {
      const manifest = await loadManifest();
      if (!current()) return;
      const clip = manifest[key]?.text === text ? manifest[key] : null;
      env.dispatchEvent(new env.CustomEvent('worship-audio-start'));
      if (clip) {
        const audio = item.audio = new env.Audio();
        audio.preload = 'none';
        let position = 0;
        const playTrack = () => {
          env.clearTimeout(item.timer);
          item.timer = env.setTimeout(() => fail('Audio loading timed out. Please try again.'), 15000);
          audio.src = clip.urls[position];
          audio.play().catch(() => fail('Audio could not start. Tap Listen to try again.'));
        };
        audio.addEventListener('playing', () => {
          if (!current()) return;
          env.clearTimeout(item.timer);
          setState(item, 'playing', clip.label);
        });
        audio.addEventListener('ended', () => { if (!current()) return; if (++position < clip.urls.length) playTrack(); else stop(); });
        audio.addEventListener('error', () => fail('This recording could not load. Check your connection and try again.'));
        playTrack();
      } else {
        if (env.speechSynthesis && !env.speechSynthesis.getVoices().length) {
          await new Promise(resolve => {
            const done = () => { env.clearTimeout(timer); env.speechSynthesis.removeEventListener('voiceschanged', done); resolve(); };
            const timer = env.setTimeout(done, 1200);
            env.speechSynthesis.addEventListener('voiceschanged', done, { once: true });
          });
          if (!current()) return;
        }
        const voice = env.speechSynthesis?.getVoices().find(voice => /^ar(?:-|_)/i.test(voice.lang));
        if (!voice || !env.SpeechSynthesisUtterance) { fail('No Arabic device voice is available for this text on your device.'); return; }
        const utterance = item.utterance = new env.SpeechSynthesisUtterance(text);
        utterance.lang = voice.lang;
        utterance.voice = voice;
        utterance.rate = .8;
        utterance.onstart = () => { if (current()) { env.clearTimeout(item.timer); setState(item, 'playing', 'Arabic device voice'); } };
        utterance.onend = () => { if (current()) stop(); };
        utterance.onerror = () => fail('Your device could not read this text. Please try again.');
        item.timer = env.setTimeout(() => fail('Your Arabic device voice did not start. Please try again.'), 8000);
        setState(item, 'loading', 'Arabic device voice');
        env.speechSynthesis.speak(utterance);
      }
    } catch { fail('Audio is unavailable right now. Please try again.'); }
  }
  return { toggle, stop };
}
