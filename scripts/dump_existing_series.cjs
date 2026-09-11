const fs = require('fs');

const seriesText = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const list = [];
const matches = [...seriesText.matchAll(/['"]?id['"]?:\s*['"]([^'"]+)['"],\s*['"]?title['"]?:\s*['"]([^'"]+)['"]/g)];
for (const m of matches) {
  list.push({ id: m[1], title: m[2] });
}
console.log('Total extracted:', list.length);
fs.writeFileSync('scripts/existing_series.json', JSON.stringify(list, null, 2), 'utf8');
