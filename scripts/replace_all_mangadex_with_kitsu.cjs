const fs = require('fs');

const kitsuReplacements = JSON.parse(fs.readFileSync('scripts/kitsu_replacements.json', 'utf8'));
const urlMap = {};
kitsuReplacements.forEach(r => {
  urlMap[r.id] = r.kitsuUrl;
});

function parseTs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  const jsonStr = content.slice(start, end + 1);
  return eval(jsonStr);
}

function writeTs(filePath, exportName, typeName, data) {
  const tsContent = `import { ${typeName} } from '../types/yuri';\n\nexport const ${exportName}: ${typeName}[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, tsContent, 'utf8');
  console.log(`Wrote ${data.length} items to ${filePath}`);
}

// 1. Update yuriSeries.ts
const series = parseTs('src/data/yuriSeries.ts');
const updatedSeries = series.map(s => {
  if (urlMap[s.id]) {
    return { ...s, coverImage: urlMap[s.id] };
  }
  return s;
});
writeTs('src/data/yuriSeries.ts', 'YURI_SERIES', 'YuriSeries', updatedSeries);

// 2. Update yuriCharacters.ts
const chars = parseTs('src/data/yuriCharacters.ts');
const updatedChars = chars.map(c => {
  if (urlMap[c.seriesId] && c.avatar.includes('mangadex.org')) {
    return { ...c, avatar: urlMap[c.seriesId] };
  }
  return c;
});
writeTs('src/data/yuriCharacters.ts', 'YURI_CHARACTERS', 'YuriCharacter', updatedChars);

// 3. Update yuriShips.ts
const ships = parseTs('src/data/yuriShips.ts');
const updatedShips = ships.map(s => {
  if (urlMap[s.seriesId]) {
    const newAvatars = s.avatars.map(a => a.includes('mangadex.org') ? urlMap[s.seriesId] : a);
    return { ...s, avatars: newAvatars };
  }
  return s;
});
writeTs('src/data/yuriShips.ts', 'YURI_SHIPS', 'YuriShip', updatedShips);

console.log("Replaced all MangaDex URLs with reliable Kitsu CDN URLs!");
