const fs = require('fs');

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

const targetIds = [
  'aoi-hana',
  'sakura-trick',
  'otherside-picnic',
  'yuri-kuma-arashi',
  'yuruyuri',
  'symphogear',
  'revue-starlight',
  'bocchi-the-rock',
  'madoka-magica',
  'yuru-camp',
  'fuzoroi-no-renri',
  'wataten',
  'k-on',
  'she-loves-to-cook-and-she-loves-to-eat',
  'her-tale-of-shim-chong',
  'utena',
  'maria-sama',
  'love-live',
  'akebis-sailor-uniform',
  'yuki-yuna'
];

async function verifyPatched() {
  console.log(`Verifying all 20 patched series in yuriSeries.ts...\n`);
  for (const id of targetIds) {
    const re = new RegExp(`["']?id["']?:\\s*['"]${id}['"][\\s\\S]*?["']?title["']?:\\s*['"]([^'"]+)['"][\\s\\S]*?["']?coverImage["']?:\\s*['"]([^'"]+)['"]`);
    const m = re.exec(content);
    if (!m) {
      console.log(`ERROR: ${id} not found in yuriSeries.ts`);
      continue;
    }
    const ourTitle = m[1];
    const coverUrl = m[2];

    const match = coverUrl.match(/media\.kitsu\.app\/(anime|manga)\/(?:poster_images\/)?(\d+)/) ||
                  coverUrl.match(/media\.kitsu\.app\/(anime|manga)\/(\d+)\/poster_image/);
    
    if (!match) {
      console.log(`${id} => Non-Kitsu URL: ${coverUrl}`);
      continue;
    }

    try {
      const res = await fetch(`https://kitsu.io/api/edge/${match[1]}/${match[2]}`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const json = await res.json();
      const kTitle = json.data?.attributes?.canonicalTitle;
      console.log(`[VERIFIED] ${id.padEnd(25)} | App: "${ourTitle}" => Kitsu: "${kTitle}" (${match[1]} ID ${match[2]})`);
    } catch(e) {
      console.log(`[ERR] ${id}: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 120));
  }
}

verifyPatched();
