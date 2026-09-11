import fs from 'fs';

const itemsToFix = [
  { id: 'new-game', title: 'NEW GAME!', type: 'anime' },
  { id: 'shoujo-sect', title: 'Shoujo Sect', type: 'anime' },
  { id: 'hen-yuri', title: 'HEN', type: 'anime' },
  { id: 'sheep-princess', title: 'The Sheep Princess in Wolf\'s Clothing', mdTitle: 'Hitsuji Hime no Ookami-san' },
  { id: 'opium-gl', title: 'Opium', mdTitle: 'Opium' },
  { id: 'always-human', title: 'Always Human', mdTitle: 'Always Human' },
  { id: 'lily-yy', title: 'Lily (Yy)', mdTitle: 'Lily' },
  { id: 'white-angels-have-no-wings', title: 'White Angels Have No Wings', mdTitle: 'White Angels Have No Wings' },
  { id: 'serenade-manhwa', title: 'Serenade', mdTitle: 'Serenade' },
  { id: 'ghosts-of-greywoods', title: 'Ghosts of Greywoods', mdTitle: 'Ghosts of Greywoods' },
  { id: 'sadistic-beauty-side-b', title: 'Sadistic Beauty: Side Story B', mdTitle: 'Sadistic Beauty: Side Story B' },
  { id: 'show-me-your-bust', title: 'Show Me Your Bust', mdTitle: 'Show Me Your Bust' },
  { id: 'green-tea-bitch', title: 'Green Tea Bitch', mdTitle: 'Green Tea Bitch' }
];

async function checkKitsu(q, type) {
  try {
    const url = `https://kitsu.io/api/edge/${type}?filter[text]=${encodeURIComponent(q)}&page[limit]=5`;
    const res = await fetch(url);
    const data = await res.json();
    return data.data?.map(d => ({
      title: d.attributes?.canonicalTitle,
      cover: d.attributes?.posterImage?.large || d.attributes?.posterImage?.original
    }));
  } catch (e) {
    return null;
  }
}

async function checkMangaDex(q) {
  try {
    const url = `https://api.mangadex.org/manga?title=${encodeURIComponent(q)}&limit=5&includes[]=cover_art`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Yuridle-Fix/1.0' } });
    const data = await res.json();
    if (!data.data) return null;
    return data.data.map(m => {
      const cov = m.relationships?.find(r => r.type === 'cover_art');
      const title = Object.values(m.attributes?.title || {})[0];
      return {
        id: m.id,
        title,
        cover: cov?.attributes?.fileName ? `https://uploads.mangadex.org/covers/${m.id}/${cov.attributes.fileName}.512.jpg` : null
      };
    });
  } catch (e) {
    return null;
  }
}

async function run() {
  for (const item of itemsToFix) {
    console.log(`\n=== Testing ${item.id} ===`);
    if (item.type) {
      const k = await checkKitsu(item.title, item.type);
      console.log('Kitsu:', k?.slice(0, 3));
    }
    if (item.mdTitle) {
      const md = await checkMangaDex(item.mdTitle);
      console.log('MangaDex:', md?.slice(0, 3));
    }
    await new Promise(r => setTimeout(r, 400));
  }
}

run();
