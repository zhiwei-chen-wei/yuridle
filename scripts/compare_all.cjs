const fs = require('fs');

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?romaji["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?coverImage["']?:\s*['"]([^'"]+)['"][\s\S]*?})/g;

let m;
const seriesList = [];
while ((m = regex.exec(content)) !== null) {
  seriesList.push({
    id: m[1],
    title: m[2],
    romaji: m[3],
    cover: m[4]
  });
}

async function verifyAllPairs() {
  const verifiedList = [];
  for (let i = 0; i < seriesList.length; i += 10) {
    const batch = seriesList.slice(i, i + 10);
    await Promise.all(batch.map(async (s) => {
      const match = s.cover.match(/media\.kitsu\.app\/(anime|manga)\/(?:poster_images\/)?(\d+)/) ||
                    s.cover.match(/media\.kitsu\.app\/(anime|manga)\/(\d+)\/poster_image/);
      if (!match) {
        verifiedList.push({ id: s.id, ourTitle: s.title, kitsuTitle: '[EXTERNAL/MANGADEX]' });
        return;
      }
      try {
        const res = await fetch(`https://kitsu.io/api/edge/${match[1]}/${match[2]}`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const json = await res.json();
        const kTitle = json.data?.attributes?.canonicalTitle || 'NOT FOUND';
        verifiedList.push({ id: s.id, ourTitle: s.title, kitsuTitle: kTitle, match: match[1] + '/' + match[2] });
      } catch (e) {
        verifiedList.push({ id: s.id, ourTitle: s.title, kitsuTitle: 'FETCH ERROR' });
      }
    }));
    await new Promise(r => setTimeout(r, 100));
  }

  fs.writeFileSync('scripts/all_titles_comparison.json', JSON.stringify(verifiedList, null, 2), 'utf8');
  console.log(`Saved ${verifiedList.length} comparisons to scripts/all_titles_comparison.json`);
}

verifyAllPairs();
