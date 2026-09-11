import fs from 'fs';
import { newSeriesDefs } from './new_series_defs.mjs';

async function fetchCover(item) {
  // 1. Try Kitsu with designated type (anime or manga)
  try {
    const kitsuType = item.kitsuType || 'manga';
    const q = item.searchQuery || item.romaji || item.title;
    const url = `https://kitsu.io/api/edge/${kitsuType}?filter[text]=${encodeURIComponent(q)}&page[limit]=3`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data.data && data.data.length > 0) {
        for (const candidate of data.data) {
          const poster = candidate.attributes?.posterImage?.large || candidate.attributes?.posterImage?.original;
          const title = candidate.attributes?.canonicalTitle || '';
          if (poster) {
            console.log(`[Kitsu ${kitsuType}] ${item.id} -> ${title}`);
            return { cover: poster, foundTitle: title, source: 'kitsu' };
          }
        }
      }
    }
  } catch (err) {
    // ignore
  }

  // 2. Try MangaDex for manga/manhwa/manhua/webtoon
  try {
    const mdQuery = item.romaji || item.title;
    const url = `https://api.mangadex.org/manga?title=${encodeURIComponent(mdQuery)}&limit=3&includes[]=cover_art`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Yuridle-App/1.0' } });
    if (res.ok) {
      const data = await res.json();
      if (data.data && data.data.length > 0) {
        for (const m of data.data) {
          const coverRel = m.relationships?.find(r => r.type === 'cover_art');
          if (coverRel && coverRel.attributes?.fileName) {
            const cover = `https://uploads.mangadex.org/covers/${m.id}/${coverRel.attributes.fileName}.512.jpg`;
            console.log(`[MangaDex] ${item.id} -> ${Object.values(m.attributes?.title || {})[0]}`);
            return { cover, foundTitle: Object.values(m.attributes?.title || {})[0], source: 'mangadex' };
          }
        }
      }
    }
  } catch (err) {
    // ignore
  }

  return null;
}

async function run() {
  console.log(`Processing ${newSeriesDefs.length} series...`);
  const finalSeries = [];
  const missing = [];

  for (let i = 0; i < newSeriesDefs.length; i++) {
    const def = newSeriesDefs[i];
    const result = await fetchCover(def);
    if (result && result.cover) {
      const { kitsuType, searchQuery, ...cleanDef } = def;
      finalSeries.push({
        ...cleanDef,
        coverImage: result.cover
      });
    } else {
      console.log(`[MISSING] ${def.id} (${def.title})`);
      missing.push(def);
    }
    await new Promise(r => setTimeout(r, 350));
  }

  console.log(`\nSuccessfully fetched: ${finalSeries.length}/${newSeriesDefs.length}`);
  if (missing.length > 0) {
    console.log(`Missing count: ${missing.length}`);
    fs.writeFileSync('./scripts/missing_series.json', JSON.stringify(missing, null, 2));
  }

  fs.writeFileSync('./scripts/fetched_new_series.json', JSON.stringify(finalSeries, null, 2));
  console.log('Saved to scripts/fetched_new_series.json');
}

run();
