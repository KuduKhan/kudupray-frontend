const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');
function setup(navigator, canonical = 'http://localhost:3000/') {
  const context = { URL, navigator, window: { isSecureContext: true },
    document: { querySelector: () => ({ href: canonical }) }, fallbackCopy: () => false };
  vm.createContext(context);
  vm.runInContext(runtime.slice(runtime.indexOf('function getKuduPrayPublicUrl()'), runtime.indexOf('window.startSupportAction =')), context);
  return context;
}
test('shared app messages carry KuduPray identity and a public URL, including localhost and native builds', async () => {
  let payload;
  const c = setup({ share: async data => { payload = data; } });
  const result = await vm.runInContext('shareKuduPray(getKuduPrayShareData())', c);
  assert.equal(result, 'shared');
  assert.match(payload.title, /KuduPray/);
  assert.match(payload.text, /Qur’an/);
  assert.equal(payload.url, 'https://kudupray.vercel.app/');
  assert.equal(vm.runInContext('getKuduPrayPublicUrl()', setup({}, 'capacitor://localhost')), payload.url);
});
test('share fallback copies the title, description, and clean public link', async () => {
  let copied;
  const c = setup({ clipboard: { writeText: async text => { copied = text; } } }, 'https://kudupray.vercel.app/?private=value#tab-settings');
  assert.equal(await vm.runInContext('shareKuduPray(getKuduPrayShareData())', c), 'copied');
  assert.match(copied, /KuduPray · Your daily worship companion/);
  assert.match(copied, /https:\/\/kudupray.vercel.app\/$/);
  assert.doesNotMatch(copied, /private=value/);
});
test('cancelling a share does not copy and rapid duplicate requests open one share sheet', async () => {
  let calls = 0, copied = 0, finish;
  const c = setup({ share: () => { calls++; return new Promise((_, reject) => { finish = reject; }); },
    clipboard: { writeText: async () => { copied++; } } });
  const first = vm.runInContext('shareKuduPray(getKuduPrayShareData())', c);
  assert.equal(await vm.runInContext('shareKuduPray(getKuduPrayShareData())', c), 'busy');
  finish({ name: 'AbortError' });
  assert.equal(await first, 'cancelled');
  assert.equal(calls, 1);
  assert.equal(copied, 0);
});

test('ayah share messages and copied text exclude embedded action menus and number badges', () => {
  const node = (text, controls = '') => ({
    textContent: text + controls,
    cloneNode() {
      let removed = false;
      return {
        querySelectorAll: () => controls ? [{ remove() { removed = true; } }] : [],
        get textContent() { return text + (removed ? '' : controls); }
      };
    }
  });
  const nodes = {
    '.quran-reader-arabic': node('بسم الله', '١'),
    '.quran-reader-transliteration': node('Bismillaah'),
    '.quran-reader-translation': node('In the name of God.', 'CopyShareAdd to favourites')
  };
  const card = { querySelector: selector => nodes[selector] };
  let shared, copied;
  const ctx = {
    window: {
      openKuduPraySnapshot: (_card, data) => { shared = data; return Promise.resolve(); },
      copyDua: text => { copied = text; }
    },
    document: { querySelector: () => card },
    quranReaderState: { ayahs: [{ numberInSurah: 1 }] },
    getQuranReaderSurah: () => ({ englishName: 'Al-Faatiha' }),
    getKuduPrayPublicUrl: () => 'https://kudupray.vercel.app/',
    closeDuaOptions() {}
  };
  vm.createContext(ctx);
  const start = runtime.indexOf('function getQuranReaderShareText(');
  const end = runtime.indexOf('\nasync function loadQuranReaderSurah(', start);
  vm.runInContext(runtime.slice(start, end), ctx);
  ctx.window.quranReaderAyahAction('share-image', 1, 0);
  ctx.window.quranReaderAyahAction('copy', 1, 0);
  for (const text of [shared.text, copied]) {
    assert.match(text, /In the name of God\./);
    assert.match(text, /Al-Faatiha 1:1/);
    assert.doesNotMatch(text, /Copy|ShareAdd|favourites|١/);
  }
  assert.match(shared.text, /Shared from KuduPray/);
  assert.equal(nodes['.quran-reader-translation'].textContent, 'In the name of God.CopyShareAdd to favourites');
});
