const OFFLINE_AUDIO_CACHE = 'kudupray-quran-audio-v1';
const AUDIO_ORIGIN = 'https://cdn.islamic.network';
const AUDIO_PATH = '/quran/audio/';

self.addEventListener('install', event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin !== AUDIO_ORIGIN || !url.pathname.startsWith(AUDIO_PATH)) return;
  event.respondWith((async () => {
    const cache = await caches.open(OFFLINE_AUDIO_CACHE);
    return (await cache.match(event.request, { ignoreVary: true })) || fetch(event.request);
  })());
});
