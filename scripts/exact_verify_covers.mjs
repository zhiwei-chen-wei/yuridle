import fs from 'fs';

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

const idRegex = /(?:id|"id"):\s*['"]([^'"]+)['"]/g;
const coverRegex = /(?:coverImage|"coverImage"):\s*['"]([^'"]+)['"]/g;

const ids = [...content.matchAll(idRegex)].map(m => m[1]);
const covers = [...content.matchAll(coverRegex)].map(m => m[1]);

console.log(`Checking all ${ids.length} covers...`);

async function run() {
  const failed = [];
  const batchSize = 10;
  for (let i = 0; i < ids.length; i += batchSize) {
    const batchIds = ids.slice(i, i + batchSize);
    const batchCovers = covers.slice(i, i + batchSize);
    await Promise.all(batchIds.map(async (id, idx) => {
      const url = batchCovers[idx];
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
            'Range': 'bytes=0-50'
          }
        });
        if (!res.ok && res.status !== 206 && res.status !== 304) {
          console.error(`[FAIL] ${id} (${res.status}): ${url}`);
          failed.push({ id, url, status: res.status });
        }
      } catch (e) {
        console.error(`[ERR] ${id}: ${e.message}`);
        failed.push({ id, url, error: e.message });
      }
    }));
  }

  console.log(`\nResults: ${ids.length - failed.length}/${ids.length} passed!`);
  if (failed.length > 0) {
    console.log('Failed count:', failed.length);
  }
}

run();
