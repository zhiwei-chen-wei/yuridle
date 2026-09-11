const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?coverImage["']?:\s*['"]([^'"]+)['"])/g;
let m;
let i = 0;
while ((m = regex.exec(content)) !== null) {
  i++;
  if (i >= 60 && i <= 80) {
    console.log(`${i}: ${m[1]} -> ${m[3]}`);
  }
}
