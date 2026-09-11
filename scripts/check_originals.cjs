const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const ids = ['revolutionary-girl-utena', 'maria-watches-over-us', 'love-live-sip', 'akebi-chan', 'yuuki-yuuna'];
ids.forEach(id => {
  const re = new RegExp(`["']?id["']?:\\s*['"]${id}['"][\\s\\S]*?["']?coverImage["']?:\\s*['"]([^'"]+)['"]`);
  const m = re.exec(content);
  console.log(id, "->", m ? m[1] : "NOT FOUND");
});
