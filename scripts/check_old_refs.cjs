const fs = require('fs');

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?releaseYear["']?:\s*(\d+)[\s\S]*?})/g;

let m;
const series = [];
while ((m = regex.exec(content)) !== null) {
  series.push({ id: m[1], title: m[2], year: parseInt(m[3], 10) });
}

const under2000Ids = new Set(series.filter(s => s.year < 2000).map(s => s.id));
const under2010Ids = new Set(series.filter(s => s.year < 2010).map(s => s.id));

function checkRefs(filename, idField, seriesSet) {
  const text = fs.readFileSync(filename, 'utf8');
  const hits = [];
  for (const id of seriesSet) {
    const re = new RegExp(`["']?${idField}["']?:\\s*['"]${id}['"]`, 'g');
    const count = (text.match(re) || []).length;
    if (count > 0) hits.push({ id, count });
  }
  return hits;
}

console.log("=== Under 2000 References ===");
console.log("Characters:", checkRefs('src/data/yuriCharacters.ts', 'seriesId', under2000Ids));
console.log("Ships:", checkRefs('src/data/yuriShips.ts', 'seriesId', under2000Ids));
console.log("Songs:", checkRefs('src/data/yuriSongs.ts', 'seriesId', under2000Ids));
console.log("Emojis:", checkRefs('src/data/yuriEmojis.ts', 'seriesId', under2000Ids));

console.log("\n=== Under 2010 References ===");
console.log("Characters:", checkRefs('src/data/yuriCharacters.ts', 'seriesId', under2010Ids).length, "series have characters");
console.log("Ships:", checkRefs('src/data/yuriShips.ts', 'seriesId', under2010Ids).length, "series have ships");
console.log("Songs:", checkRefs('src/data/yuriSongs.ts', 'seriesId', under2010Ids).length, "series have songs");
console.log("Emojis:", checkRefs('src/data/yuriEmojis.ts', 'seriesId', under2010Ids).length, "series have emojis");
