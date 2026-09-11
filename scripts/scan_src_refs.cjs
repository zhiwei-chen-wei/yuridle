const fs = require('fs');
const path = require('path');

const replacedIds = [
  'dirty-pair', 'top-wo-nerae-gunbuster', 'dear-brother', 'revolutionary-girl-utena', 'utena',
  'noir', 'princess-tutu', 'haibane-renmei', 'kiddy-grade', 'strawberry-panic',
  'aoi-hana', 'maria-watches-over-us', 'maria-sama', 'kannazuki-no-miko', 'mai-hime',
  'madlax', 'ichigo-mashimaro', 'girl-friends', 'simoun', 'kashimashi',
  'gunjou', 'blue-drop', 'el-cazador', 'poor-poor-lips', 'candy-boy',
  'octave', 'mnemosyne', 'kanamemo', 'sasameki-koto'
];

function scan(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) scan(full);
    else if (f.name.endsWith('.ts') || f.name.endsWith('.tsx') || f.name.endsWith('.json')) {
      const txt = fs.readFileSync(full, 'utf8');
      for (const id of replacedIds) {
        if (txt.includes(id)) {
          console.log(`Found ${id} in ${full}`);
        }
      }
    }
  }
}
scan('src');
