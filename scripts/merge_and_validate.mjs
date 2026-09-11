import fs from 'fs';

// Read all_new_series_verified.json
const newSeries = JSON.parse(fs.readFileSync('scripts/all_new_series_verified.json', 'utf8'));

// Read existing yuriSeries.ts
const existingContent = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

// Extract existing IDs
const idRegex = /["']?id["']?:\s*["']([^"']+)["']/g;
const existingIds = new Set();
let match;
while ((match = idRegex.exec(existingContent)) !== null) {
  existingIds.add(match[1]);
}

console.log(`Found ${existingIds.size} existing series IDs.`);

// Check for duplicates
const uniqueNew = [];
for (const s of newSeries) {
  if (existingIds.has(s.id)) {
    console.warn(`[DUPLICATE ID SKIPPED] ${s.id}`);
  } else {
    existingIds.add(s.id);
    uniqueNew.push(s);
  }
}

console.log(`Adding ${uniqueNew.length} unique new series.`);
console.log(`Total series will be: ${existingIds.size}`);

// Format uniqueNew as TypeScript objects
function formatSeries(item) {
  return `  {
    id: ${JSON.stringify(item.id)},
    title: ${JSON.stringify(item.title)},
    romaji: ${JSON.stringify(item.romaji)},
    nativeTitle: ${JSON.stringify(item.nativeTitle)},
    medium: ${JSON.stringify(item.medium)},
    releaseYear: ${item.releaseYear},
    origin: ${JSON.stringify(item.origin)},
    setting: ${JSON.stringify(item.setting)},
    tropes: ${JSON.stringify(item.tropes)},
    tone: ${JSON.stringify(item.tone)},
    status: ${JSON.stringify(item.status)},
    synopsis: ${JSON.stringify(item.synopsis)},
    famousQuote: ${JSON.stringify(item.famousQuote)},
    coverImage: ${JSON.stringify(item.coverImage)},
    pairing: ${JSON.stringify(item.pairing)},
    aliases: ${JSON.stringify(item.aliases)}
  }`;
}

const formattedNew = uniqueNew.map(formatSeries).join(',\n');

// Find the last closing bracket of YURI_SERIES in yuriSeries.ts
const lastBracketIndex = existingContent.lastIndexOf('];');
if (lastBracketIndex === -1) {
  console.error('Could not find closing bracket ];');
  process.exit(1);
}

// Check if there's a comma before ];
const beforeBracket = existingContent.slice(0, lastBracketIndex).trimEnd();
const needsComma = !beforeBracket.endsWith(',');

const updatedContent = `${beforeBracket}${needsComma ? ',' : ''}\n${formattedNew}\n];\n`;

fs.writeFileSync('src/data/yuriSeries.ts', updatedContent, 'utf8');
console.log('Successfully updated src/data/yuriSeries.ts!');
