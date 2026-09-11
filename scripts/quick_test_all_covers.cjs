const fs = require('fs');

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?coverImage["']?:\s*['"]([^'"]+)['"])/g;
let m;
const seriesCovers = [];
while ((m = regex.exec(content)) !== null) {
  seriesCovers.push({ id: m[1], title: m[2], cover: m[3] });
}

async function testOne(s) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch(s.cover, { signal: controller.signal, headers: { 'User-Agent': 'Mozilla/5.0' } });
    clearTimeout(t);
    return { id: s.id, status: res.status, url: s.cover };
  } catch(e) {
    clearTimeout(t);
    return { id: s.id, status: 'ERR: ' + e.message, url: s.cover };
  }
}

async function run() {
  console.log(`Testing all ${seriesCovers.length} covers concurrently...`);
  const results = [];
  const broken = [];

  for (let i = 0; i < seriesCovers.length; i += 20) {
    const batch = seriesCovers.slice(i, i + 20);
    const batchResults = await Promise.all(batch.map(testOne));
    for (const r of batchResults) {
      if (r.status !== 200) {
        console.log(`BROKEN: [${r.status}] ${r.id} -> ${r.url}`);
        broken.push(r);
      }
    }
  }

  console.log(`Scan complete! Tested ${seriesCovers.length} covers. Broken: ${broken.length}`);
  fs.writeFileSync('scripts/broken_covers.json', JSON.stringify(broken, null, 2), 'utf8');
}

run();
