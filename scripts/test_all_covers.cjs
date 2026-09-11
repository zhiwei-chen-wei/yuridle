const https = require('https');
const fs = require('fs');

const text = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /['"]?id['"]?:\s*['"]([^'"]+)['"][\s\S]*?['"]?coverImage['"]?:\s*['"]([^'"]+)['"]/g;
let m;
const seriesCovers = [];
while ((m = regex.exec(text)) !== null) {
  seriesCovers.push({ id: m[1], cover: m[2] });
}

async function testUrl(s) {
  return new Promise((resolve) => {
    https.get(s.cover, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ id: s.id, url: s.cover, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ id: s.id, url: s.cover, status: 'ERR: ' + e.message });
    });
  });
}

(async () => {
  console.log(`Checking all ${seriesCovers.length} covers...`);
  const broken = [];
  for (let i = 0; i < seriesCovers.length; i++) {
    const r = await testUrl(seriesCovers[i]);
    if (r.status !== 200) {
      console.log(`FAILED [${r.status}]: ${r.id} -> ${r.url}`);
      broken.push(r);
    }
  }
  console.log(`Scan complete. Found ${broken.length} broken covers out of ${seriesCovers.length}.`);
  fs.writeFileSync('scripts/broken_covers.json', JSON.stringify(broken, null, 2), 'utf8');
})();
