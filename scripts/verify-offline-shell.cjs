// Exercises the service worker against the actual production output without a browser.
// Run after npm run build; real-device playback remains a separate release check.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const origin = 'https://kudupray.test';
const stores = new Map();
const handlers = {};
let offline = false;
const html = fs.readFileSync('.next/server/app/index.html', 'utf8');
const ctx = vm.createContext({ URL, Headers, Response,
  self: { location: { origin }, addEventListener: (event, handler) => { handlers[event] = handler; } },
  caches: { open: async name => {
    if (!stores.has(name)) stores.set(name, new Map());
    const store = stores.get(name);
    return { put: async (key, response) => store.set(key, response.clone()), match: async key => store.get(key)?.clone() };
  } },
  fetch: async input => {
    if (offline) throw new TypeError('Offline');
    const path = new URL(input.url || input).pathname;
    if (path === '/') return new Response(html, { headers: { 'content-type': 'text/html' } });
    return new Response(fs.readFileSync(path.startsWith('/_next/') ? `.next/${path.slice(7)}` : `public${path}`));
  }
});
vm.runInContext(fs.readFileSync('public/kudupray-offline-audio-sw.js', 'utf8'), ctx);
(async () => {
  await vm.runInContext('prepareOfflineShell()', ctx);
  const shell = stores.get('kudupray-shell-v2');
  assert.ok(shell.size > 2);
  offline = true;
  for (const url of shell.keys()) {
    let result;
    handlers.fetch({ request: { method: 'GET', url, mode: url === `${origin}/` ? 'navigate' : 'cors' }, respondWith: p => { result = p; } });
    const response = await result;
    assert.equal(response.status, 200, url);
    assert.ok((await response.text()).length > 0, url);
  }
  console.log(`PASS: production document and ${shell.size - 1} required assets served with network unavailable.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
