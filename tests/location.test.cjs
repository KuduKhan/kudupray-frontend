const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function setup() {
  const fixes = [], requests = [];
  const ctx = {
    currentLocation: null, locationRequestToken: 0, locationNameController: null,
    AbortController, URLSearchParams, setTimeout, clearTimeout,
    fetch: async () => { throw new Error('Offline'); },
    elements: { locName: {}, locDisplay: { setAttribute() {} }, locInputContainer: { style: { display: 'none' } }, manualLocInput: { value: '' }, qiblaStatus: {} },
    navigator: { geolocation: { getCurrentPosition(success, fail, options) { fixes.push({ success, fail, options }); } } },
    kuduStorage: { setItem() {} }, fetchTimingsByCoords: (lat, lng) => requests.push({ lat, lng }),
    fetchTimingsByCity() {}, updateQibla() {}, toggleLocationInput() {}, showToast() {}, alert() {}
  };
  vm.createContext(ctx);
  const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');
  const start = runtime.indexOf('function saveManualLocation()');
  vm.runInContext(runtime.slice(start, runtime.indexOf('// === QIBLA FINDER ===', start)), ctx);
  return { ctx, fixes, requests };
}
test('location keeps a friendly display and exposes exact coordinates in its details', () => {
  const { ctx, fixes, requests } = setup();
  ctx.triggerAutoLocation();
  assert.equal(fixes[0].options.enableHighAccuracy, true);
  assert.equal(fixes[0].options.maximumAge, 0);
  fixes[0].success({ coords: { latitude: -4.043477, longitude: 39.668206, accuracy: 8 }, timestamp: 1 });
  assert.equal(requests[0].lat, -4.043477);
  assert.equal(ctx.elements.locName.innerText, 'Current location');
  assert.match(ctx.elements.locDisplay.title, /Accuracy ±8 m/);
  assert.match(ctx.elements.locDisplay.title, /-4\.04348, 39\.66821/);
});

test('fresh device coordinates resolve to a locality name without changing the prayer point', async () => {
  const { ctx } = setup();
  const point = { type: 'auto', lat: -4.043477, lng: 39.668206, accuracy: 8 };
  ctx.currentLocation = point;
  ctx.fetch = async url => {
    assert.match(url, /latitude=-4\.043477/);
    return { ok: true, json: async () => ({ lookupSource: 'reverseGeocoding', locality: 'Nyali', city: 'Mombasa', countryName: 'Kenya' }) };
  };
  await ctx.resolveCurrentLocationName(point);
  assert.equal(ctx.elements.locName.innerText, 'Nyali');
  assert.match(ctx.elements.locDisplay.title, /Mombasa, Kenya/);
  assert.equal(point.lat, -4.043477);
  assert.equal(point.lng, 39.668206);
});

test('place lookup ignores saved points, stale responses and IP-based estimates', async () => {
  const { ctx } = setup();
  let calls = 0, complete;
  ctx.fetch = () => { calls++; return new Promise(resolve => { complete = resolve; }); };
  const point = { type: 'auto', lat: -4, lng: 39, saved: true };
  ctx.currentLocation = point;
  await ctx.resolveCurrentLocationName(point);
  assert.equal(calls, 0);
  point.saved = false;
  const request = ctx.resolveCurrentLocationName(point);
  ctx.currentLocation = { type: 'coordinates', lat: -1, lng: 36 };
  complete({ ok: true, json: async () => ({ locality: 'Wrong place' }) });
  await request;
  assert.equal(point.placeName, undefined);
  ctx.currentLocation = point;
  ctx.fetch = async () => ({ ok: true, json: async () => ({ lookupSource: 'ipGeolocation', locality: 'Wrong place' }) });
  await ctx.resolveCurrentLocationName(point);
  assert.equal(point.placeName, undefined);
});
test('a manual coordinate choice cannot be overwritten by an older device-location request', () => {
  const { ctx, fixes, requests } = setup();
  ctx.triggerAutoLocation();
  ctx.elements.manualLocInput.value = '-1.292065, 36.821946';
  ctx.saveManualLocation();
  fixes[0].success({ coords: { latitude: 21.4225, longitude: 39.8262, accuracy: 20 } });
  assert.equal(ctx.currentLocation.type, 'coordinates');
  assert.equal(ctx.currentLocation.lat, -1.292065);
  assert.equal(requests.length, 1);
  assert.equal(ctx.validLocationCoordinates(91, 0), false);
});
test('permission failure keeps saved coordinates and labels defaults honestly', () => {
  const { ctx, fixes, requests } = setup();
  ctx.currentLocation = { type: 'auto', lat: -1, lng: 36, accuracy: 2000 };
  ctx.triggerAutoLocation({ preserveExisting: true });
  fixes[0].fail({ code: 1 });
  assert.equal(ctx.currentLocation.lat, -1);
  assert.equal(ctx.elements.locName.innerText, 'Saved location');
  assert.equal(requests.length, 0);
  ctx.currentLocation = null;
  ctx.triggerAutoLocation();
  fixes[1].fail({ code: 1 });
  assert.equal(ctx.elements.locName.innerText, 'Makkah · default location');
  assert.equal(ctx.currentLocation.type, 'default');
});
