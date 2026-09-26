const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const runtime = fs.readFileSync('public/kudupray-runtime.js', 'utf8');
const closeSource = runtime.slice(runtime.indexOf('window.closeQuranReader ='), runtime.indexOf('window.selectQuranReaderSurah ='));

for (const minimized of [false, true]) {
  test(`closing the reader cleans up playback and its mount (minimized=${minimized})`, () => {
    const bodyClasses = new Set(minimized ? ['quran-reader-minimized'] : []);
    const playerClasses = new Set(minimized ? ['quran-reader-mini-player'] : []);
    const mount = { appendChild(node) { node.parentNode = this; } };
    const player = { classList: { remove: name => playerClasses.delete(name) }, parentNode: minimized ? {} : mount };
    const calls = [];
    const homeButton = {};
    const context = {
      window: { nav: (page, button) => { assert.equal(button, homeButton); calls.push(page); } },
      document: {
        body: { classList: { remove: name => bodyClasses.delete(name) } },
        querySelector: selector => selector.includes('mini-player') ? (minimized ? player : null) : homeButton,
        getElementById: () => mount,
      },
      quranDownload: { intent: 1, controller: { abort: () => calls.push('abort') } },
      quranReaderState: { standbyAudio: { pause: () => calls.push('standby-paused') } },
      getQuranReaderActiveAudio: () => ({ pause: () => calls.push('paused') }),
      setQuranReaderTriggerState: value => assert.equal(value, false),
    };
    for (const name of ['closeQuranSpeedPicker', 'closeQuranSurahPicker', 'closeQuranReciterPicker', 'closeQuranReaderPreferencePickers', 'closeQuranReaderDownloadMenu', 'closeQuranReaderMoreMenu']) context[name] = () => calls.push(name);
    vm.runInNewContext(closeSource, context);
    context.window.closeQuranReader();
    assert.equal(player.parentNode, mount);
    assert.equal(playerClasses.has('quran-reader-mini-player'), false);
    assert.equal(bodyClasses.has('quran-reader-minimized'), false);
    assert.equal(context.quranDownload.intent, 2);
    for (const expected of ['abort', 'paused', 'standby-paused', 'home', 'closeQuranSurahPicker', 'closeQuranReciterPicker']) assert.ok(calls.includes(expected));
  });
}
