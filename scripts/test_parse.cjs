const fs = require('fs');
const https = require('https');

// Extract all series
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

// Parse series objects using regex or eval
// Since it's TS array export, let's parse via regex or regex blocks
const seriesBlocks = content.split(/\{\s*id:/).slice(1);
const seriesList = [];

// Alternatively, let's extract each series object cleanly
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?romaji["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?coverImage["']?:\s*['"]([^'"]+)['"][\s\S]*?})/g;

let m;
while ((m = regex.exec(content)) !== null) {
  seriesList.push({
    id: m[1],
    title: m[2],
    romaji: m[3],
    cover: m[4]
  });
}

console.log("Parsed " + seriesList.length + " series from yuriSeries.ts");

// Also let's check if there are series with different property order
if (seriesList.length < 231) {
  // Let's do a more robust parse
  const allIds = [...content.matchAll(/["']?id["']?:\s*['"]([^'"]+)['"]/g)].map(x => x[1]);
  console.log("Found " + allIds.length + " total IDs");
}
