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

const songs = parseTsArray('src/data/yuriSongs.ts');
const emojis = parseTsArray('src/data/yuriEmojis.ts');

const affectedSongs = songs.filter(s => replacedIds.includes(s.seriesId));
const affectedEmojis = emojis.filter(e => replacedIds.includes(e.seriesId));

console.log(`Affected songs: ${affectedSongs.length}`);
affectedSongs.forEach(s => console.log(`  Song: [${s.id}] "${s.songTitle}" (Series: ${s.seriesId})`));

console.log(`\nAffected emojis: ${affectedEmojis.length}`);
affectedEmojis.forEach(e => console.log(`  Emoji: [${e.id}] (Series: ${e.seriesId})`));
