const fs = require('fs');

['yuriCharacters.ts', 'yuriEmojis.ts', 'yuriShips.ts', 'yuriSongs.ts'].forEach(f => {
  const txt = fs.readFileSync('src/data/' + f, 'utf8');
  const lines = txt.split('\n');
  lines.forEach((l, i) => {
    if (l.includes("'utena'") || l.includes('"utena"')) {
      console.log(`${f}:${i + 1} ${l.trim()}`);
    }
  });
});
