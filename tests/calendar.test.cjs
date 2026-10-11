const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function calendar() {
  const targets = new Map();
  const timers = new Map();
  let timerId = 0;
  const document = {
    activeElement: null,
    getElementById(id) {
      if (!targets.has(id)) targets.set(id, {
        dataset: {}, innerHTML: '', textContent: '',
        contains: () => false, querySelector: () => null
      });
      return targets.get(id);
    }
  };
  const ctx = {
    document, window: {}, Intl, Date, Map, AbortController,
    kuduStorage: { getItem: () => null },
    setTimeout(fn) { timers.set(++timerId, fn); return timerId; },
    clearTimeout(id) { timers.delete(id); },
    fetch: (_url, { signal }) => new Promise((_resolve, reject) => {
      signal.addEventListener('abort', () => reject(new Error('Aborted')), { once: true });
    }),
    islamicCalendarCursor: new Date(2026, 1, 1),
    islamicCalendarSelectedDate: new Date(2026, 1, 1),
    islamicCalendarActiveData: new Map(),
    islamicCalendarMemoryCache: new Map(),
    islamicCalendarLoadToken: 0, islamicCalendarController: null
  };
  vm.createContext(ctx);
  const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');
  const start = runtime.indexOf('const ISLAMIC_CALENDAR_EVENTS =');
  vm.runInContext(runtime.slice(start, runtime.indexOf('function initScrollAwareChrome()', start)), ctx);
  ctx.selectIslamicCalendarDate = ctx.window.selectIslamicCalendarDate;
  return { ctx, document, timers };
}

test('calendar uses only required weeks, exposes selection and supports arrow navigation', () => {
  const { ctx, document } = calendar();
  ctx.renderIslamicCalendar();
  const grid = document.getElementById('islamic-calendar-grid');
  assert.equal((grid.innerHTML.match(/class="calendar-day/g) || []).length, 28);
  assert.equal((grid.innerHTML.match(/tabindex="0"/g) || []).length, 1);
  assert.match(grid.innerHTML, /aria-pressed="true"/);
  let prevented = false;
  grid.onkeydown({ key: 'ArrowDown', target: { closest: () => ({ dataset: { date: '2026-02-01' } }) }, preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(ctx.calendarDateKey(ctx.islamicCalendarSelectedDate), '2026-02-08');
  ctx.islamicCalendarCursor = new Date(2026, 7, 1);
  ctx.renderIslamicCalendar();
  assert.equal((grid.innerHTML.match(/class="calendar-day/g) || []).length, 42);
});

test('occasion list selects dates and a stalled calendar request falls back without loading forever', async () => {
  const { ctx, document, timers } = calendar();
  ctx.islamicCalendarActiveData.set('2026-02-01', { day: 1, month: 9, year: 1447, monthName: 'Ramadan', label: '1 Ramadan 1447 AH' });
  ctx.renderIslamicCalendar();
  assert.match(document.getElementById('calendar-month-events').innerHTML, /<button[^>]*onclick="selectIslamicCalendarDate\('2026-02-01'\)"/);
  const pending = ctx.loadIslamicCalendarMonth();
  assert.equal(document.getElementById('calendar-data-status').dataset.state, 'loading');
  [...timers.values()][0]();
  await pending;
  assert.equal(document.getElementById('calendar-data-status').dataset.state, 'fallback');
  assert.equal(timers.size, 0);
});
