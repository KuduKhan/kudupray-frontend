const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');

test('rapid reading-size clicks use the target, not the animated font size', () => {
  const root = { style: {} }, display = {}, decrease = {}, increase = {};
  const stored = new Map();
  const context = {
    window: { getComputedStyle: () => ({ fontSize: '15px' }) },
    document: { documentElement: root, getElementById: () => display,
      querySelector: selector => selector.includes('Decrease') ? decrease : increase, querySelectorAll: () => [] },
    kuduStorage: { setItem: (key, value) => stored.set(key, value) },
    refreshSettingsSummary() {}, requestAnimationFrame: callback => callback(),
  };
  vm.runInNewContext(runtime.slice(runtime.indexOf('function syncTextSizeControls()'), runtime.indexOf('window.changeLanguage =')), context);
  vm.runInNewContext('syncTextSizeControls()', context);
  assert.equal(display.innerText, '94%');
  for (let index = 0; index < 3; index++) context.window.adjustTextSize(1);
  assert.equal(root.style.fontSize, '18px');
  assert.equal(display.innerText, '113%');
  context.window.adjustTextSize(-1);
  assert.equal(root.style.fontSize, '17px');
  for (let index = 0; index < 30; index++) context.window.adjustTextSize(1);
  assert.equal(root.style.fontSize, '24px');
  assert.equal(increase.disabled, true);
  for (let index = 0; index < 30; index++) context.window.adjustTextSize(-1);
  assert.equal(root.style.fontSize, '12px');
  assert.equal(decrease.disabled, true);
  assert.equal(stored.get('kudu_size'), 12);
});
