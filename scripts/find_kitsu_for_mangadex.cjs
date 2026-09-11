const fs = require('fs');

const series = eval(fs.readFileSync('src/data/yuriSeries.ts', 'utf8').replace(/import[\s\S]*?=\s*/, ''));

const mdSeries = series.filter(s => s.coverImage && s.coverImage.includes('mangadex.org'));
console.log(`Found ${mdSeries.length} series with MangaDex covers:`);

async function searchKitsuForSeries(s) {
  const query = s.title.replace(/!/g, '').replace(/:/g, '');
  try {
    const res = await fetch(`https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(query)}&page[limit]=2`);
    const json = await res.json();
    if (json.data && json.data.length > 0) {
      const match = json.data[0];
      console.log(`FOUND: "${s.id}" -> Kitsu ${match.id} ("${match.attributes.canonicalTitle}"): ${match.attributes.posterImage?.large}`);
      return { id: s.id, kitsuUrl: match.attributes.posterImage?.large, kitsuTitle: match.attributes.canonicalTitle };
    }
  } catch (e) {
    // ignore
  }
  // Try romaji
  if (s.romaji) {
    try {
      const res = await fetch(`https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(s.romaji)}&page[limit]=2`);
      const json = await res.json();
      if (json.data && json.data.length > 0) {
        const match = json.data[0];
        console.log(`FOUND (romaji): "${s.id}" -> Kitsu ${match.id} ("${match.attributes.canonicalTitle}"): ${match.attributes.posterImage?.large}`);
        return { id: s.id, kitsuUrl: match.attributes.posterImage?.large, kitsuTitle: match.attributes.canonicalTitle };
      }
    } catch (e) {}
  }
  console.log(`NOT FOUND: "${s.id}" ("${s.title}")`);
  return null;
}

async function run() {
  const results = [];
  for (const s of mdSeries) {
    const res = await searchKitsuForSeries(s);
    if (res && res.kitsuUrl) results.push(res);
  }
  console.log(`\nFound Kitsu covers for ${results.length}/${mdSeries.length} series.`);
  fs.writeFileSync('scripts/kitsu_replacements.json', JSON.stringify(results, null, 2));
}

run();
