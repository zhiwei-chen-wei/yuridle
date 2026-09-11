const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"])/g;
let m;
const list = [];
while ((m = regex.exec(content)) !== null) {
  list.push({ id: m[1], title: m[2] });
}

console.log("Total entries in yuriSeries.ts:", list.length);

const byTitle = {};
list.forEach((item, idx) => {
  const norm = item.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!byTitle[norm]) byTitle[norm] = [];
  byTitle[norm].push({ idx, id: item.id, title: item.title });
});

for (const [key, items] of Object.entries(byTitle)) {
  if (items.length > 1) {
    console.log("DUPLICATE TITLE:", key, items);
  }
}
