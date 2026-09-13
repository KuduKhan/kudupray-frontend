import fs from 'node:fs';
import sharp from 'sharp';

const input = process.argv[2];
if (!input) throw new Error('Usage: node scripts/extract-brand-assets.mjs path/to/logo.png');
const outputDir = 'public/brand';
fs.mkdirSync(outputDir, { recursive: true });

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = data.slice(i, i + 3);
  if (r < 12 && g < 12 && b < 12) data[i + 3] = 0;
}

const image = () => sharp(data, { raw: info });
const lockup = `${outputDir}/kudupray-lockup.png`;
await image().png().toFile(lockup);
await sharp(lockup).extract({ left: 340, top: 35, width: 760, height: 675 }).png().toFile(`${outputDir}/kudupray-emblem.png`);
await sharp(lockup).extract({ left: 130, top: 715, width: 1190, height: 315 }).png().toFile(`${outputDir}/kudupray-wordmark.png`);
console.log('Created transparent KuduPray lockup, emblem, and wordmark assets.');
