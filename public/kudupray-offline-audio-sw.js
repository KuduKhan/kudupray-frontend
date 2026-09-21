const OFFLINE_AUDIO_CACHE = 'kudupray-quran-audio-v1';
const OFFLINE_SHELL_CACHE = 'kudupray-shell-v2';
const AUDIO_ORIGIN = 'https://cdn.islamic.network';
const AUDIO_PATH = '/quran/audio/';

// Commit the document last: a failed refresh must not replace a usable shell
// with a document whose scripts have not been saved yet.
let preparingShell;
function prepareOfflineShell() {
  if (preparingShell) return preparingShell;
  preparingShell = (async () => {
    const cache = await caches.open(OFFLINE_SHELL_CACHE);
    const home = new URL('/', self.location.origin).href;
    const response = await fetch(home, { cache: 'reload' });
    if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) {
      throw new Error('The app could not be saved. Reconnect and retry.');
    }
    const html = await response.clone().text();
    const assets = new Set([new URL('/kudupray-runtime.js', home).href]);
    for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
      const url = new URL(match[1].replaceAll('&amp;', '&'), home);
      if (url.origin === self.location.origin && url.pathname.startsWith('/_next/static/')) assets.add(url.href);
    }
    if (assets.size < 2) throw new Error('The app scripts could not be identified. Reload online and retry.');
    for (const url of assets) {
      const asset = await fetch(url, { cache: 'reload' });
      if (!asset.ok) throw new Error('An app file could not be saved. Reconnect and retry.');
      await cache.put(url, asset);
    }
    await cache.put(home, response);
  })().finally(() => { preparingShell = null; });
  return preparingShell;
}

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('message', event => {
  if (event.data?.type !== 'PREPARE_OFFLINE') return;
  event.waitUntil(prepareOfflineShell().then(
    () => event.ports[0]?.postMessage({ ok: true }),
    error => event.ports[0]?.postMessage({ ok: false, error: error.message })
  ));
});

// Audio elements request byte ranges when seeking, including after an offline restart.
async function cachedAudioResponse(request, response) {
  const range = request.headers.get('range');
  if (!range) return response;
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  const blob = await response.blob();
  const size = blob.size;
  let start = match?.[1] ? Number(match[1]) : Math.max(0, size - Number(match?.[2]));
  let end = match?.[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (!match || (!match[1] && !match[2]) || start > end || start >= size) {
    return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
  }
  const headers = new Headers(response.headers);
  headers.delete('content-encoding');
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  headers.set('Accept-Ranges', 'bytes');
  return new Response(blob.slice(start, end + 1), { status: 206, headers });
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin === AUDIO_ORIGIN && url.pathname.startsWith(AUDIO_PATH)) {
    event.respondWith((async () => {
      let saved;
      try {
        const cache = await caches.open(OFFLINE_AUDIO_CACHE);
        saved = await cache.match(request.url, { ignoreVary: true });
      } catch { /* Streaming still works if browser storage is blocked. */ }
      return saved ? cachedAudioResponse(request, saved) : fetch(request);
    })());
    return;
  }
  if (url.origin !== self.location.origin) return;
  if (request.mode === 'navigate' && url.pathname === '/') {
    event.respondWith((async () => {
      try { return await fetch(request); }
      catch (error) {
        const cache = await caches.open(OFFLINE_SHELL_CACHE);
        const saved = await cache.match(new URL('/', self.location.origin).href);
        if (saved) return saved;
        throw error;
      }
    })());
  } else if (url.pathname.startsWith('/_next/static/') || url.pathname === '/kudupray-runtime.js') {
    event.respondWith((async () => {
      // Network first for the unversioned runtime so later deployments are visible.
      try { return await fetch(request); }
      catch (error) {
        const cache = await caches.open(OFFLINE_SHELL_CACHE);
        const saved = await cache.match(request.url);
        if (saved) return saved;
        throw error;
      }
    })());
  }
});
