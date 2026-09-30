const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');
const source = runtime.slice(runtime.indexOf('function parsePrayerTime('), runtime.indexOf('function setNext('));
function context() {
  const ctx = { Date, elements: { nextLabel: {}, nextTime: {}, countdown: {} }, document: { querySelectorAll: () => [], getElementById: () => null }, setNext: (...args) => { ctx.selection = args; } };
  vm.createContext(ctx);
  vm.runInContext(source, ctx);
  return ctx;
}
test('prayer countdown tolerates missing timings and rejects invalid clock times', () => {
  const ctx = context();
  for (const time of ['24:00', '12:60', 'unavailable']) assert.equal(ctx.parsePrayerTime(time), null);
  ctx.calcNextPrayer(null);
  assert.equal(ctx.nextEvent, null);
  assert.equal(ctx.elements.countdown.textContent, '--:--:--');
  ctx.calcNextPrayer({ Dhuhr: '12:00' });
  assert.equal(ctx.selection[1], 'Dhuhr');
  assert.ok(Number.isFinite(ctx.selection[2].getTime()));
});
test('unavailable sun data clears previously displayed location values', () => {
  const nodes = Object.fromEntries(['alarm-sun-phase', 'alarm-sun-now-time', 'alarm-sunrise-time', 'alarm-sunset-time'].map(id => [id, { textContent: 'old value', removeAttribute() {} }]));
  const panel = { dataset: {}, setAttribute() {}, style: { removeProperty() {} } };
  const ctx = { currentTimings: null, currentSunCoordinates: null, parseSolarMinutes: () => null, document: { getElementById: id => id === 'alarm-solar-position' ? panel : nodes[id] } };
  vm.createContext(ctx);
  vm.runInContext(runtime.slice(runtime.indexOf('function updateSolarPosition('), runtime.indexOf('function getSelectedAdhan(')), ctx);
  ctx.updateSolarPosition();
  assert.equal(panel.dataset.phase, 'unavailable');
  assert.equal(nodes['alarm-sun-now-time'].textContent, '—');
  assert.equal(nodes['alarm-sunrise-time'].textContent, '—');
  assert.equal(nodes['alarm-sunset-time'].textContent, '—');
});
