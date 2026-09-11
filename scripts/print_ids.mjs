import fs from 'fs';
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const idRegex = /(?:id|"id"):\s*['"]([^'"]+)['"]/g;
const titleRegex = /(?:title|"title"):\s*['"]([^'"]+)['"]/g;
const ids = [...content.matchAll(idRegex)].map(m => m[1]);
const titles = [...content.matchAll(titleRegex)].map(m => m[1]);

const mapping = ids.map((id, i) => `${id} => ${titles[i]}`);
fs.writeFileSync('scripts/series_mapping.json', JSON.stringify(mapping, null, 2));
console.log('Written ' + mapping.length + ' series mapping.');
