const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');
const section = (start, end) => runtime.slice(runtime.indexOf(start), runtime.indexOf(end));
const counts = JSON.parse(runtime.match(/QURAN_SURAH_AYAH_COUNTS = Object.freeze\((\[.*?\])\)/)[1]);
const reciter = { identifier: 'test', label: 'Test', bitrate: 128 };
function harness({ quota = false, fetchError = false, persistent = false } = {}) {
  const entries = new Map();
  const messages = [];
  let fetches = 0;
  const summary = {};
  Object.defineProperty(summary, 'textContent', { get: () => messages.at(-1) || '', set: value => messages.push(value) });
  const panel = { querySelectorAll: () => [], querySelector: () => null };
  const cache = { keys: async () => [...entries.keys()].map(url => ({ url })), match: async key => entries.get(key.url || key),
    put: async (key, value) => { if (quota) throw new DOMException('Full', 'QuotaExceededError'); entries.set(key, value); },
    delete: async key => entries.delete(key.url || key) };
  const ctx = vm.createContext({ AbortController, DOMException, Response, setTimeout, clearTimeout,
    QURAN_OFFLINE_TOTAL_AYAHS: 3, QURAN_OFFLINE_AUDIO_CACHE: 'audio', QURAN_READER_AUDIO_ROOT: 'https://audio.test',
    QURAN_READER_RECITERS: [reciter], window: { caches: { open: async () => cache } },
    navigator: { storage: { persist: async () => persistent } },
    document: { getElementById: id => id === 'quran-offline-download-summary' ? summary : id === 'quran-offline-download-picker' ? panel : null },
    getQuranReaderTranslation: () => ({ edition: 'en.asad' }), prepareQuranOfflineShell: async () => {}, getQuranOfflineSurah: async () => {},
    fetch: async () => { fetches++; if (fetchError) throw new Error('Offline'); return new Response('audio', { headers: { 'content-type': 'audio/mpeg' } }); }
  });
  vm.runInContext(section('const quranOfflineDownload =', 'function initQuranOfflineDownloadPicker'), ctx);
  return { ctx, entries, messages, fetches: () => fetches, run: code => vm.runInContext(code, ctx) };
}

test('fallback covers all 114 surahs, 6236 ayahs, and final Juz labels', () => {
  assert.equal(counts.length, 114);
  assert.equal(counts.reduce((a, b) => a + b, 0), 6236);
  assert.deepEqual(counts.slice(86, 92), [19, 26, 30, 20, 15, 21]);
  const ctx = vm.createContext({ QURAN_SURAH_AYAH_COUNTS: counts });
  vm.runInContext(section('const QURAN_JUZ_STARTS =', 'const QURAN_READER_TRANSLATIONS =') + section('function getQuranReaderSurahJuzLabel', 'function renderQuranSurahPickerList'), ctx);
  for (const [number, label] of [[1, 'Juz 1'], [2, 'Juz 1–3'], [78, 'Juz 30'], [113, 'Juz 30'], [114, 'Juz 30']]) {
    assert.equal(vm.runInContext(`getQuranReaderSurahJuzLabel({number:${number}})`, ctx), label);
  }
});
test('quota failure survives final status refresh', async () => {
  const h = harness({ quota: true }); await h.run('downloadQuranOfflineRecitation("test")');
  await new Promise(r => setImmediate(r));
  assert.match(h.messages.at(-1), /storage is full/);
  assert.equal(h.run('quranOfflineDownload.controller'), null);
});
test('resume skips saved audio and reports best-effort persistence', async () => {
  const h = harness();
  h.entries.set('https://audio.test/128/test/1.mp3', new Response('saved'));
  await h.run('downloadQuranOfflineRecitation("test")');
  await new Promise(r => setImmediate(r));
  assert.equal(h.fetches(), 2);
  assert.equal(h.entries.size, 3);
  assert.match(h.messages.at(-1), /3 of 3/);
  assert.match(h.messages.at(-1), /best-effort/);
});
test('failed downloads remain incomplete and preserve retry guidance', async () => {
  const h = harness({ fetchError: true }); await h.run('downloadQuranOfflineRecitation("test")');
  await new Promise(r => setImmediate(r));
  assert.equal(h.entries.size, 0); assert.match(h.messages.at(-1), /3 will retry/);
});
test('remove and export cannot race an active download', async () => {
  const h = harness(); h.entries.set('https://audio.test/128/test/1.mp3', new Response('saved'));
  h.run('quranOfflineDownload.controller = new AbortController()');
  await h.run('deleteQuranOfflineRecitation("test")');
  assert.equal(h.entries.size, 1);
  let picked = false; h.ctx.window.showDirectoryPicker = async () => { picked = true; };
  await h.run('exportQuranOfflineRecitation("test")'); assert.equal(picked, false);
});
test('partial export closes failed writes and releases its operation lock', async () => {
  const h = harness(); h.entries.set('https://audio.test/128/test/1.mp3', new Response('saved'));
  let aborted = false;
  const folder = { getDirectoryHandle: async () => folder, getFileHandle: async () => ({ createWritable: async () => ({ write: async () => { throw new Error('Disk full'); }, abort: async () => { aborted = true; } }) }) };
  h.ctx.window.showDirectoryPicker = async () => folder;
  await h.run('exportQuranOfflineRecitation("test")');
  assert.equal(aborted, true); assert.equal(h.run('quranOfflineDownload.busy'), false);
  assert.match(h.messages.at(-1), /Export stopped after 0 files/);
});
test('reader data survives a fresh runtime with network unavailable', async () => {
  const entries = new Map();
  const payload = { data: Array.from({ length: 3 }, () => ({ number: 1, ayahs: Array.from({ length: 7 }, (_, i) => ({ number: i + 1 })) })) };
  const context = offline => vm.createContext({ AbortController, Response, setTimeout, clearTimeout,
    QURAN_READER_API_ROOT: 'https://api.test', QURAN_OFFLINE_DATA_CACHE: 'data', QURAN_SURAH_AYAH_COUNTS: counts,
    window: { caches: { open: async () => ({ match: async key => entries.get(key)?.clone(), put: async (key, value) => entries.set(key, value) }) } },
    fetch: async () => { if (offline) throw new Error('Offline'); return Response.json(payload); } });
  const source = section('async function getQuranOfflineSurah', '\nfunction init()');
  const first = context(false); vm.runInContext(source, first); await vm.runInContext('getQuranOfflineSurah(1,"en.asad",{required:true})', first);
  const reopened = context(true); vm.runInContext(source, reopened);
  assert.deepEqual(await vm.runInContext('getQuranOfflineSurah(1,"en.asad")', reopened), payload);
  await assert.rejects(vm.runInContext('getQuranOfflineSurah(1,"sw.barwani")', reopened), /Offline/);
});

const sw = fs.readFileSync('public/kudupray-offline-audio-sw.js', 'utf8');
function workerContext(extra = {}) {
  const listeners = {};
  const ctx = vm.createContext({ URL, Headers, Response, self: { location: { origin: 'https://app.test' }, addEventListener: (name, fn) => { listeners[name] = fn; } }, ...extra });
  vm.runInContext(sw, ctx); return { ctx, listeners };
}
test('offline audio supports seeking, suffix ranges, and invalid ranges', async () => {
  const { ctx } = workerContext();
  for (const [range, status, body] of [['bytes=2-4', 206, '234'], ['bytes=-2', 206, '89'], ['bytes=99-', 416, ''], ['bytes=-0', 416, '']]) {
    ctx.request = new Request('https://audio.test', { headers: { range } }); ctx.response = new Response('0123456789');
    const response = await vm.runInContext('cachedAudioResponse(request,response)', ctx);
    assert.equal(response.status, status); assert.equal(await response.text(), body);
  }
});
test('shell preparation saves required scripts before committing the document', async () => {
  const writes = [];
  const { ctx } = workerContext({ caches: { open: async () => ({ put: async url => writes.push(url) }) }, fetch: async url => url.endsWith('/') ? new Response('<script src="/_next/static/chunks/app.js"></script>', { headers: { 'content-type': 'text/html' } }) : new Response('script') });
  await vm.runInContext('prepareOfflineShell()', ctx);
  assert.equal(writes.at(-1), 'https://app.test/');
  assert.ok(writes.includes('https://app.test/_next/static/chunks/app.js'));
});
test('failed shell preparation keeps the prior offline document', async () => {
  const writes = [];
  const { ctx } = workerContext({ caches: { open: async () => ({ put: async url => writes.push(url) }) }, fetch: async url => url.endsWith('/') ? new Response('<script src="/_next/static/chunks/missing.js"></script>', { headers: { 'content-type': 'text/html' } }) : new Response('', { status: 404 }) });
  await assert.rejects(vm.runInContext('prepareOfflineShell()', ctx));
  assert.equal(writes.includes('https://app.test/'), false);
});
test('failed offline service preparation prevents misleading audio downloads', async () => {
  const h = harness(); h.ctx.prepareQuranOfflineShell = async () => { throw new Error('Service unavailable'); };
  await h.run('downloadQuranOfflineRecitation("test")');
  assert.equal(h.fetches(), 0); assert.match(h.messages.at(-1), /Service unavailable/);
});
test('pause during reader preparation retains existing audio and releases the download', async () => {
  const h = harness(); h.entries.set('https://audio.test/128/test/1.mp3', new Response('saved'));
  h.ctx.getQuranOfflineSurah = async () => h.run('quranOfflineDownload.controller.abort()');
  await h.run('downloadQuranOfflineRecitation("test")');
  assert.equal(h.fetches(), 0); assert.equal(h.entries.size, 1);
  assert.equal(h.run('quranOfflineDownload.controller'), null); assert.match(h.messages.at(-1), /paused/);
});
