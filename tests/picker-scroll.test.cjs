const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');

test('dropdown keyboard navigation scrolls only its own list', () => {
  const ctx = {};
  const start = runtime.indexOf('function focusPickerOption(');
  vm.runInNewContext(runtime.slice(start, runtime.indexOf('function renderQuranSurahPickerList', start)), ctx);
  let focus;
  const list = { scrollTop: 200, getBoundingClientRect: () => ({ top: 100, bottom: 300 }) };
  const option = { focus: settings => { focus = settings; }, getBoundingClientRect: () => ({ top: 330, bottom: 370 }) };
  ctx.focusPickerOption(option, list);
  assert.equal(focus.preventScroll, true);
  assert.equal(list.scrollTop, 270);
  option.getBoundingClientRect = () => ({ top: 80, bottom: 120 });
  ctx.focusPickerOption(option, list);
  assert.equal(list.scrollTop, 250);
});

test('rebuilding surah choices preserves scroll and focused choice; search starts at the top', () => {
  const options = [];
  function node() {
    return { dataset: {}, setAttribute() {}, append() {}, addEventListener() {}, focus(settings) { assert.equal(settings.preventScroll, true); focused = this; } };
  }
  let focused;
  const list = {
    scrollTop: 1800,
    contains: () => true,
    replaceChildren() { options.length = 0; this.scrollTop = 0; },
    append(option) { options.push(option); },
    querySelector: () => options.find(option => option.dataset.surah === '78')
  };
  const ctx = {
    document: { activeElement: { dataset: { surah: '78' } }, createElement: node, getElementById: id => id === 'quran-surah-list' ? list : id === 'quran-surah-search' ? { value: '' } : {} },
    quranReaderState: { surahNumber: 78, catalog: [{ number: 78, englishName: 'An-Naba', numberOfAyahs: 40 }] },
    QURAN_SURAH_AYAH_COUNTS: [], getQuranReaderSurahJuzLabel: () => '',
    formatQuranReaderSurah: surah => surah.englishName, setQuranSurahNumberBadge() {}
  };
  const start = runtime.indexOf('function renderQuranSurahPickerList(');
  vm.runInNewContext(runtime.slice(start, runtime.indexOf('function initQuranSurahPicker()', start)), ctx);
  ctx.renderQuranSurahPickerList();
  assert.equal(list.scrollTop, 1800);
  assert.equal(focused.dataset.surah, '78');
  focused = null;
  ctx.renderQuranSurahPickerList({ resetScroll: true });
  assert.equal(list.scrollTop, 0);
  assert.equal(focused, null);
});
