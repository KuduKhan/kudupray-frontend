const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const source = fs.readFileSync('lib/share-snapshot.js', 'utf8');
const start = source.indexOf('function fitSnapshotFont(');
const end = source.indexOf('\nfunction loadImage(', start);
const context = vm.createContext({});
vm.runInContext(source.slice(start, end), context);

test('snapshot footer font fitting terminates for narrow mobile cards with a weighted font', () => {
  for (const [text, initial, minimum] of [['Your daily worship companion', 26, 20], ['kudupray.vercel.app', 22, 18]]) {
    let measurements = 0;
    const canvasContext = {
      font: '',
      measureText(value) {
        assert.ok(++measurements <= initial - minimum + 1, 'font fitting must make progress');
        const size = Number(this.font.match(/(\d+)px/)[1]);
        return { width: value.length * size };
      }
    };
    assert.equal(context.fitSnapshotFont(canvasContext, text, 80, initial, minimum), minimum);
    assert.equal(canvasContext.font, `600 ${minimum}px sans-serif`);
    assert.equal(context.fitSnapshotFont(canvasContext, text, 2000, initial, minimum), initial);
  }
});
