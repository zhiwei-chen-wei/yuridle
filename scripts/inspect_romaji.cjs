const fs = require('fs');

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const series = eval(content.slice(content.indexOf('['), content.lastIndexOf(']') + 1));

console.log('Total series:', series.length);
let diffCount = 0;
let sameCount = 0;

series.forEach((s, idx) => {
  if (s.romaji && s.romaji.toLowerCase() !== s.title.toLowerCase()) {
    diffCount++;
    if (diffCount <= 15) {
      console.log(`${diffCount}. "${s.title}" -> Romaji: "${s.romaji}"`);
    }
  } else {
    sameCount++;
  }
});

console.log(`\nDistinct Romaji: ${diffCount}`);
console.log(`Identical Romaji / English: ${sameCount}`);
