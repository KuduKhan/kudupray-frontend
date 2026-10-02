const { test } = require('node:test');
const assert = require('node:assert/strict');
test('Zakat uses all eligible net wealth and requires nisab and hawl', async () => {
  const { calculateZakat } = await import('../lib/zakat.mjs');
  const base = { assets: [10000, 5000], liabilities: 3000, nisab: 12000, hawl: true };
  assert.equal(calculateZakat(base).estimate, 300);
  assert.equal(calculateZakat(base).status, 'due');
  assert.equal(calculateZakat({ ...base, hawl: false }).status, 'hawl-unconfirmed');
  assert.equal(calculateZakat({ ...base, nisab: 12001 }).estimate, 0);
  assert.equal(calculateZakat({ ...base, nisab: '' }).status, 'missing-nisab');
  assert.equal(calculateZakat({ ...base, assets: [-1] }).status, 'invalid');
  assert.equal(calculateZakat({ ...base, assets: [Infinity] }).status, 'invalid');
  assert.equal(calculateZakat({ ...base, liabilities: 20000 }).net, 0);
});
