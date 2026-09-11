const fs = require('fs');

const text = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /['"]?id['"]?:\s*['"]([^'"]+)['"][\s\S]*?['"]?coverImage['"]?:\s*['"]([^'"]+)['"]/g;
let m;
const seriesCovers = [];
while ((m = regex.exec(text)) !== null) {
  seriesCovers.push({ id: m[1], cover: m[2] });
}

console.log('Total series with covers:', seriesCovers.length);

const targets = ['stardust-telepath', 'jellyfish-cant-swim-in-the-night', 'girls-band-cry', 'fuzoroi-no-renri', 'yuru-camp', 'she-loves-to-cook-and-she-loves-to-eat', 'her-tale-of-shim-chong'];
for (const t of targets) {
  const found = seriesCovers.find(s => s.id === t);
  console.log(t, '->', found ? found.cover : 'NOT FOUND');
}
