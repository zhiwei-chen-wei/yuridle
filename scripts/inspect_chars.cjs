const fs = require('fs');
const replacedIds = [
  'dirty-pair', 'top-wo-nerae-gunbuster', 'dear-brother', 'revolutionary-girl-utena', 'utena',
  'noir', 'princess-tutu', 'haibane-renmei', 'kiddy-grade', 'strawberry-panic',
  'aoi-hana', 'maria-watches-over-us', 'maria-sama', 'kannazuki-no-miko', 'mai-hime',
  'madlax', 'ichigo-mashimaro', 'girl-friends', 'simoun', 'kashimashi',
  'gunjou', 'blue-drop', 'el-cazador', 'poor-poor-lips', 'candy-boy',
  'octave', 'mnemosyne', 'kanamemo', 'sasameki-koto'
];

const content = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const chars = eval(content.slice(start, end + 1));

const affected = chars.filter(c => replacedIds.includes(c.seriesId));
console.log(JSON.stringify(affected.map(c => ({ id: c.id, name: c.name, seriesId: c.seriesId, avatar: c.avatar })), null, 2));
