import fs from 'fs';

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /id:\s*['"]([^'"]+)['"][\s\S]*?coverImage:\s*['"]([^'"]+)['"]/g;

const entries = [];
let match;
while ((match = regex.exec(content)) !== null) {
  entries.push({ id: match[1], url: match[2] });
}

console.log(`Verifying ${entries.length} series covers...`);

async function testUrl(entry) {
  try {
    const res = await fetch(entry.url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Range': 'bytes=0-100' // only fetch first few bytes for speed
      }
    });
    if (res.ok || res.status === 206 || res.status === 304) {
      return { id: entry.id, ok: true, status: res.status };
    }
    return { id: entry.id, ok: false, status: res.status, url: entry.url };
  } catch (err) {
    return { id: entry.id, ok: false, error: err.message, url: entry.url };
  }
}

async function run() {
  const batchSize = 10;
  const failed = [];
  
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(testUrl));
    for (const r of results) {
      if (!r.ok) {
        console.error(`[FAIL] ${r.id}: HTTP ${r.status || r.error} -> ${r.url}`);
        failed.push(r);
      }
    }
  }

  console.log(`\nVerification complete!`);
  console.log(`Passed: ${entries.length - failed.length}/${entries.length}`);
  if (failed.length > 0) {
    console.log(`Failed: ${failed.length}`);
    fs.writeFileSync('scripts/failed_covers.json', JSON.stringify(failed, null, 2));
  }
}

run();
