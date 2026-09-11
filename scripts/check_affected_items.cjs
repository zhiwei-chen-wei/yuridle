const fs = require('fs');
const replacedIds = [
  'dirty-pair', 'top-wo-nerae-gunbuster', 'dear-brother', 'revolutionary-girl-utena', 'utena',
  'noir', 'princess-tutu', 'haibane-renmei', 'kiddy-grade', 'strawberry-panic',
  'aoi-hana', 'maria-watches-over-us', 'maria-sama', 'kannazuki-no-miko', 'mai-hime',
  'madlax', 'ichigo-mashimaro', 'girl-friends', 'simoun', 'kashimashi',
  'gunjou', 'blue-drop', 'el-cazador', 'poor-poor-lips', 'candy-boy',
  'octave', 'mnemosyne', 'kanamemo', 'sasameki-koto'
];

function parseTsArray(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  const jsonStr = content.slice(start, end + 1);
  return eval(jsonStr);
}

const chars = parseTsArray('src/data/yuriCharacters.ts');
const ships = parseTsArray('src/data/yuriShips.ts');

const affectedChars = chars.filter(c => replacedIds.includes(c.seriesId));
const affectedShips = ships.filter(s => replacedIds.includes(s.seriesId));

console.log(`Affected characters: ${affectedChars.length}`);
affectedChars.forEach(c => console.log(`  Char: [${c.id}] ${c.name} (Series: ${c.seriesId})`));

console.log(`\nAffected ships: ${affectedShips.length}`);
affectedShips.forEach(s => console.log(`  Ship: [${s.id}] ${s.shipName} (Series: ${s.seriesId})`));
