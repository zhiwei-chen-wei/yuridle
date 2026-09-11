const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('sailor-moon-s')) {
    console.log(`Line ${i + 1}: ${l}`);
  }
});
