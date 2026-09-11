import fs from 'fs';

const content = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const idRegex = /(?:id|"id"):\s*['"]([^'"]+)['"]/g;
const ids = [...content.matchAll(idRegex)].map(m => m[1]);
console.log('Characters count:', ids.length, 'Unique:', new Set(ids).size);
console.log(ids);
