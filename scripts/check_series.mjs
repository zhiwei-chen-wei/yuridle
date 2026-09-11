import fs from 'fs';

const txt = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /["']?id["']?:\s*["']([^"']+)["']/g;
const ids = [];
let match;
while ((match = regex.exec(txt)) !== null) {
  ids.push(match[1]);
}

console.log('Count:', ids.length, 'Unique:', new Set(ids).size);
console.log(JSON.stringify(ids));
