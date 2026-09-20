const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');
const storageSource = runtime.slice(runtime.indexOf('const kuduStorage ='), runtime.indexOf('// === DATA:'));

test('settings work when browser storage access is denied', () => {
  const window = Object.defineProperty({}, 'localStorage', { get() { throw new Error('SecurityError'); } });
  const storage = vm.runInNewContext(`${storageSource}\nkuduStorage`, { window });
  assert.equal(storage.getItem('language'), null);
  storage.setItem('language', 'sw');
  assert.equal(storage.getItem('language'), 'sw');
  storage.removeItem('language');
  assert.equal(storage.getItem('language'), null);
});

test('failed writes and removals do not restore stale stored preferences', () => {
  const values = new Map([['language', 'en']]);
  let blocked = true;
  const storage = vm.runInNewContext(`${storageSource}\nkuduStorage`, { window: { localStorage: {
    getItem: key => values.get(key) ?? null,
    setItem(key, value) { if (blocked) throw new Error('QuotaExceededError'); values.set(key, value); },
    removeItem(key) { if (blocked) throw new Error('SecurityError'); values.delete(key); },
  } } });
  storage.setItem('language', 'sw');
  assert.equal(storage.getItem('language'), 'sw');
  storage.removeItem('language');
  assert.equal(storage.getItem('language'), null);
  blocked = false;
  storage.setItem('language', 'fr');
  assert.equal(values.get('language'), 'fr');
  storage.removeItem('language');
  assert.equal(values.has('language'), false);
});
