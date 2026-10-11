const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');

function setup() {
  const pending = [], timers = new Map();
  let timerId = 0;
  const ctx = {
    AbortController, prayerFetchController: null,
    elements: { loader: { style: {} }, timetable: {}, locName: {} },
    console: { warn() {}, error() { throw new Error('Expected request failures must not trigger the development error overlay'); } },
    setTimeout: callback => { timers.set(++timerId, callback); return timerId; },
    clearTimeout: id => timers.delete(id),
    fetch: (_url, { signal }) => new Promise((resolve, reject) => {
      pending.push({ resolve, reject, signal });
      signal.addEventListener('abort', () => reject(Object.assign(new Error('Aborted'), { name: 'AbortError' })), { once: true });
    })
  };
  vm.createContext(ctx);
  const start = runtime.indexOf('async function fetchAPI(url) {');
  vm.runInContext(runtime.slice(start, runtime.indexOf('function renderTimetable(t)', start)), ctx);
  return { ctx, pending, timers };
}

test('a stalled prayer request stops loading and clears its timer', async () => {
  const { ctx, timers } = setup();
  const request = ctx.fetchAPI('https://example.test/stalled');
  [...timers.values()][0]();
  await request;
  assert.equal(ctx.elements.loader.className, 'error-message');
  assert.match(ctx.elements.loader.innerHTML, /took too long/);
  assert.equal(ctx.elements.locName.innerText, 'Choose location');
  assert.equal(timers.size, 0);
});

test('changing location cancels the old request without replacing the new loading state', async () => {
  const { ctx, pending, timers } = setup();
  const oldRequest = ctx.fetchAPI('https://example.test/old');
  const newRequest = ctx.fetchAPI('https://example.test/new');
  await oldRequest;
  assert.equal(pending[0].signal.aborted, true);
  assert.equal(ctx.elements.loader.className, 'loading-message');
  assert.equal(timers.size, 1);
  pending[1].reject(new Error('Connection unavailable'));
  await newRequest;
  assert.equal(ctx.elements.loader.className, 'error-message');
  assert.equal(timers.size, 0);
});
