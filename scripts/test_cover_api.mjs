// Test script to fetch real covers for Yuri titles
import fs from 'fs';

async function getMangaDexCover(title) {
  try {
    const url = `https://api.mangadex.org/manga?title=${encodeURIComponent(title)}&limit=3&includes[]=cover_art`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Yuridle-App/1.0' } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.data || data.data.length === 0) return null;
    
    // Find matching manga
    for (const manga of data.data) {
      const coverRel = manga.relationships?.find(r => r.type === 'cover_art');
      if (coverRel && coverRel.attributes?.fileName) {
        return {
          id: manga.id,
          title: Object.values(manga.attributes.title)[0],
          cover: `https://uploads.mangadex.org/covers/${manga.id}/${coverRel.attributes.fileName}.512.jpg`
        };
      }
    }
  } catch (e) {
    // ignore
  }
  return null;
}

async function getKitsuCover(title, type = 'anime') {
  try {
    const url = `https://kitsu.io/api/edge/${type}?filter[text]=${encodeURIComponent(title)}&page[limit]=3`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.data || data.data.length === 0) return null;
    const item = data.data[0];
    const poster = item.attributes?.posterImage?.large || item.attributes?.posterImage?.original;
    if (poster) {
      return {
        canonicalTitle: item.attributes.canonicalTitle,
        cover: poster
      };
    }
  } catch (e) {
    // ignore
  }
  return null;
}

async function test() {
  console.log('Testing MangaDex & Kitsu...');
  const md1 = await getMangaDexCover('Nettai-gyo wa Yuki ni Kogareru');
  console.log('Tropical Fish (MangaDex):', md1);
  const k1 = await getKitsuCover('Watashi no Yuri wa Oshigoto Desu', 'anime');
  console.log('Yuri is my Job (Kitsu):', k1);
  const md2 = await getMangaDexCover('Kimi ga Shinu Made Koi wo Shitai');
  console.log('Kimi ga Shinu Made (MangaDex):', md2);
  const md3 = await getMangaDexCover('Fluttering Feelings');
  console.log('Fluttering Feelings (MangaDex):', md3);
}

test();
