const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?coverImage["']?:\s*['"]([^'"]+)['"])/g;
let m;
const nonKitsu = [];
while ((m = regex.exec(content)) !== null) {
  if (!m[3].includes('media.kitsu.app')) {
    nonKitsu.push({ id: m[1], title: m[2], cover: m[3] });
  }
}
console.log("Non-Kitsu covers:", nonKitsu.length);
nonKitsu.forEach(x => console.log(x.id, "->", x.title, "->", x.cover));
