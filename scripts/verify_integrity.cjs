const fs = require('fs');

// We can compile or inspect TS files
const seriesText = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const charText = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const shipText = fs.readFileSync('src/data/yuriShips.ts', 'utf8');
const songText = fs.readFileSync('src/data/yuriSongs.ts', 'utf8');
const emojiText = fs.readFileSync('src/data/yuriEmojis.ts', 'utf8');

// Check unique IDs
function checkUniqueIds(name, text, pattern) {
  const ids = [...text.matchAll(pattern)].map(m => m[1]);
  const counts = {};
  const dups = [];
  for (const id of ids) {
    counts[id] = (counts[id] || 0) + 1;
    if (counts[id] === 2) dups.push(id);
  }
  console.log(`${name}: total IDs = ${ids.length}, duplicates = ${dups.length ? dups.join(', ') : 'none'}`);
  return ids;
}

const seriesIds = checkUniqueIds('Series', seriesText, /['"]?id['"]?:\s*['"]([^'"]+)['"]/g);
const charIds = checkUniqueIds('Characters', charText, /['"]?id['"]?:\s*['"]([^'"]+)['"]/g);
const shipIds = checkUniqueIds('Ships', shipText, /['"]?id['"]?:\s*['"]([^'"]+)['"]/g);
const songIds = checkUniqueIds('Songs', songText, /['"]?id['"]?:\s*['"]([^'"]+)['"]/g);
const emojiSeriesIds = [...emojiText.matchAll(/['"]?seriesId['"]?:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log(`Emojis: total riddles = ${emojiSeriesIds.length}`);

// Check that seriesId referenced in chars, ships, songs, emojis all exist in seriesIds
const sSet = new Set(seriesIds);
function checkOrphans(name, text) {
  const refIds = [...text.matchAll(/['"]?seriesId['"]?:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  const missing = refIds.filter(id => !sSet.has(id));
  console.log(`${name}: missing series references = ${[...new Set(missing)].join(', ') || 'none'}`);
}

checkOrphans('Characters', charText);
checkOrphans('Ships', shipText);
checkOrphans('Songs', songText);
checkOrphans('Emojis', emojiText);

