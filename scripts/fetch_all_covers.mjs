import fs from 'fs';

// Read all series from source
const yuriSeriesCode = fs.readFileSync('./src/data/yuriSeries.ts', 'utf-8');

// Extract IDs and titles
const regex = /id:\s*'([^']+)',\s*title:\s*(?:'([^']+)'|"([^']+)"),\s*romaji:\s*'([^']+)'/g;
let match;
const seriesList = [];

while ((match = regex.exec(yuriSeriesCode)) !== null) {
  seriesList.push({
    id: match[1],
    title: match[2] || match[3],
    romaji: match[4]
  });
}

console.log(`Found ${seriesList.length} series to fetch covers for.`);

async function fetchCover(item) {
  const queryTerms = [item.title, item.romaji];
  
  for (const term of queryTerms) {
    for (const type of ['manga', 'anime']) {
      try {
        const url = `https://kitsu.io/api/edge/${type}?filter[text]=${encodeURIComponent(term)}&page[limit]=1`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.data && data.data[0]) {
          const poster = data.data[0].attributes?.posterImage?.large || 
                         data.data[0].attributes?.posterImage?.original || 
                         data.data[0].attributes?.posterImage?.medium;
          if (poster) {
            return {
              id: item.id,
              title: item.title,
              matched: data.data[0].attributes.canonicalTitle,
              coverImage: poster
            };
          }
        }
      } catch (err) {
        // continue
      }
    }
  }

  return { id: item.id, title: item.title, coverImage: null };
}

async function run() {
  const results = {};
  for (let i = 0; i < seriesList.length; i++) {
    const item = seriesList[i];
    console.log(`[${i + 1}/${seriesList.length}] Fetching for: ${item.title}...`);
    const res = await fetchCover(item);
    results[item.id] = res.coverImage;
    console.log(`  -> ${res.matched || 'NOT FOUND'} : ${res.coverImage}`);
    // gentle rate limit
    await new Promise(r => setTimeout(r, 400));
  }

  fs.writeFileSync('./scripts/covers_result.json', JSON.stringify(results, null, 2));
  console.log('Finished! Saved to ./scripts/covers_result.json');
}

run();
