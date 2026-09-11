const fs = require('fs');
const files = ['src/data/yuriCharacters.ts', 'src/data/yuriShips.ts', 'src/data/yuriSongs.ts', 'src/data/yuriEmojis.ts'];
const pairs = [
  ['utena', 'revolutionary-girl-utena'],
  ['maria-sama', 'maria-watches-over-us'],
  ['love-live', 'love-live-sip'],
  ['akebi-chan', 'akebis-sailor-uniform'],
  ['yuki-yuna', 'yuuki-yuuna'],
  ['she-loves-to-cook-and-she-loves-to-eat', 'she-loves-to-cook-she-loves-to-eat'],
  ['her-tale-of-shim-chong', 'her-tale-of-shim-cheong']
];

for (const [id1, id2] of pairs) {
  console.log(`\nChecking [${id1}] vs [${id2}]:`);
  for (const f of files) {
    const text = fs.readFileSync(f, 'utf8');
    const c1 = (text.match(new RegExp(`["']${id1}["']`, 'g')) || []).length;
    const c2 = (text.match(new RegExp(`["']${id2}["']`, 'g')) || []).length;
    if (c1 > 0 || c2 > 0) {
      console.log(`  ${f}: ${id1} (${c1}) vs ${id2} (${c2})`);
    }
  }
}
