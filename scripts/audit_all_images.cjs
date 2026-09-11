const fs = require('fs');

function parseTs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  const jsonStr = content.slice(start, end + 1);
  return eval(jsonStr);
}

const series = parseTs('src/data/yuriSeries.ts');
const chars = parseTs('src/data/yuriCharacters.ts');
const ships = parseTs('src/data/yuriShips.ts');

const allUrls = new Map();

series.forEach(s => {
  if (s.coverImage) allUrls.set(s.coverImage, { type: 'seriesCover', id: s.id, url: s.coverImage });
});

chars.forEach(c => {
  if (c.avatar) allUrls.set(c.avatar, { type: 'charAvatar', id: c.id, url: c.avatar });
});

ships.forEach(s => {
  if (s.avatars) {
    s.avatars.forEach((a, idx) => {
      if (a) allUrls.set(a, { type: `shipAvatar_${idx}`, id: s.id, url: a });
    });
  }
});

console.log(`Total unique image URLs to test: ${allUrls.size}`);

async function testAll() {
  const list = Array.from(allUrls.values());
  const broken = [];
  const statusCounts = {};

  const BATCH_SIZE = 30;
  for (let i = 0; i < list.length; i += BATCH_SIZE) {
    const batch = list.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async item => {
      try {
        const res = await fetch(item.url, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          },
          signal: AbortSignal.timeout(7000)
        });
        statusCounts[res.status] = (statusCounts[res.status] || 0) + 1;
        if (res.status !== 200 && res.status !== 304 && res.status !== 206) {
          broken.push({ ...item, status: res.status });
          console.log(`[FAIL ${res.status}] ${item.type} [${item.id}]: ${item.url}`);
        }
      } catch (e) {
        statusCounts['ERR'] = (statusCounts['ERR'] || 0) + 1;
        broken.push({ ...item, status: 'ERR', error: e.message });
        console.log(`[ERR] ${item.type} [${item.id}]: ${item.url} -> ${e.message}`);
      }
    }));
    console.log(`Progress: ${Math.min(i + BATCH_SIZE, list.length)}/${list.length} checked (Broken so far: ${broken.length})`);
  }

  console.log('\nStatus counts:', statusCounts);
  console.log(`Total broken: ${broken.length}/${list.length}`);
  fs.writeFileSync('scripts/broken_images_report.json', JSON.stringify(broken, null, 2));
}

testAll();
