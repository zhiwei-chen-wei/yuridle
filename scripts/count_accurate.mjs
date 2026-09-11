import fs from 'fs';

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

const idRegex = /(?:id|"id"):\s*['"]([^'"]+)['"]/g;
const coverRegex = /(?:coverImage|"coverImage"):\s*['"]([^'"]+)['"]/g;

const ids = [...content.matchAll(idRegex)].map(m => m[1]);
const covers = [...content.matchAll(coverRegex)].map(m => m[1]);

console.log('Total unique IDs:', new Set(ids).size);
console.log('Total IDs matched:', ids.length);
console.log('Total covers matched:', covers.length);
