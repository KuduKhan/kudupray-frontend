const fs = require('fs');
const vm = require('vm');
const assert = require('assert/strict');
const html = fs.readFileSync('public/kudupray-runtime.js', 'utf8');
for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) new Function(match[1]);
const codeStart = html.indexOf('const quranDownload =');
const codeEnd = html.indexOf('function getQuranReaderActiveAudio()');
assert.notEqual(codeStart, -1, 'Qur\u2019an download state was not found in the runtime.');
assert.notEqual(codeEnd, -1, 'Qur\u2019an audio accessor was not found in the runtime.');
const code = html.slice(codeStart, codeEnd);
let completed = 0, calls = 0, fail = false, plays = 0, source = '', statuses = [];
const audio = { dataset: {}, paused: false, readyState: 4, currentTime: 0, duration: 10, playbackRate: 1,
    buffered: { length: 1, start: () => 0, end: () => 10 },
    pause() {}, getAttribute() { return source; }, ended: false, async play() { plays++; } };
const state = { surahNumber: 1, activeAyahIndex: 0, ayahs: Array.from({length:7}, (_,i)=>({number:i+1})) };
const context = vm.createContext({
    AbortController, DOMException, setTimeout, clearTimeout,
    URL: { createObjectURL: b => `blob:${b.id}`, revokeObjectURL() {} },
    QURAN_READER_AUDIO_ROOT: 'https://audio.test', quranReaderState: state,
    getQuranReaderReciter: () => ({identifier:'reciter',bitrate:128}),
    setQuranReaderStatus: s => statuses.push(s), syncQuranPlayer() {},
    getQuranReaderActiveAudio: () => audio,
    updateQuranReaderAudio: () => {
        audio.dataset.ayahNumber = String(state.ayahs[state.activeAyahIndex].number);
        audio.dataset.reciter = 'reciter';
        source = `https://audio.test/128/reciter/${audio.dataset.ayahNumber}.mp3`;
    },
    fetch: async (url, {signal}) => {
        calls++;
        await new Promise(r=>setTimeout(r, 2));
        if (signal.aborted) throw new DOMException('Aborted','AbortError');
        const id = Number(url.match(/(\d+)\.mp3$/)[1]);
        if (fail && id === 7) throw new Error('Offline');
        completed++;
        return {ok:true, blob:async()=>({id,size:10,type:'audio/mpeg'})};
    }
});
vm.runInContext(code, context);
const run = s => vm.runInContext(s,context);
(async()=>{
    await run('startQuranDownloadedPlayback()');
    assert.equal(plays,1); assert.equal(completed,0);
    assert.match(run('getQuranReaderAyahAudioUrl({number:7})'),/^https:/);
    await run('quranDownload.promise');
    assert.equal(calls,7);
    assert.equal(run('getQuranReaderAyahAudioUrl({number:7})'),'blob:7');
    await run('startQuranDownloadedPlayback()'); assert.equal(calls,7); assert.equal(plays,2);
    run('clearQuranDownload()'); completed=0; fail=true;
    await run('startQuranDownloadedPlayback()');
    assert.equal(plays,3); assert.equal(completed,0);
    await run('quranDownload.promise').catch(()=>{});
    assert.equal(run('quranDownload.ready'),false);
    assert.match(statuses.at(-1), /^Preparing audio in the background/);
    const beforeRetry=calls; fail=false;
    const missing=7-run('quranDownload.urls.size');
    await run('startQuranDownloadedPlayback()'); await run('quranDownload.promise');
    assert.equal(calls-beforeRetry,missing); assert.equal(plays,4);
    run('clearQuranDownload()'); completed=0;
    await run('startQuranDownloadedPlayback()');
    const pending=run('quranDownload.promise');
    run('clearQuranDownload()'); await pending.catch(()=>{});
    assert.equal(plays,5); assert.equal(run('quranDownload.urls.size'),0);
    audio.readyState=2;
    const beforeStall=calls;
    await run('startQuranDownloadedPlayback()');
    assert.equal(plays,6); assert.equal(calls,beforeStall);
    audio.readyState=4;
    await run('quranDownload.promise');
    assert.equal(calls-beforeStall,7);
    console.log('PASS: syntax; immediate playback; streaming fallback; cached replay; background failure isolation; retry; cancellation; downloads yield to buffering and resume after recovery.');
})().catch(e=>{console.error(e);process.exitCode=1;});

