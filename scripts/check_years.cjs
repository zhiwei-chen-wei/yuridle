const fs = require('fs');

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?releaseYear["']?:\s*(\d+)[\s\S]*?})/g;

let m;
const series = [];
while ((m = regex.exec(content)) !== null) {
  series.push({ id: m[1], title: m[2], year: parseInt(m[3], 10) });
}

console.log(`Total series parsed: ${series.length}`);

const under2000 = series.filter(s => s.year < 2000);
const between2000and2009 = series.filter(s => s.year >= 2000 && s.year < 2010);
const year2010plus = series.filter(s => s.year >= 2010);

console.log(`Release years breakdown:`);
console.log(`Under 2000 (< 2000): ${under2000.length}`);
under2000.forEach(s => console.log(`  - [${s.year}] ${s.id} (${s.title})`));

console.log(`\nBetween 2000 and 2009 (2000-2009): ${between2000and2009.length}`);
between2000and2009.forEach(s => console.log(`  - [${s.year}] ${s.id} (${s.title})`));

console.log(`\n2010 and later (2010+): ${year2010plus.length}`);
