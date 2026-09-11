async function searchMangaDex(title) {
  try {
    const res = await fetch(`https://api.mangadex.org/manga?title=${encodeURIComponent(title)}&limit=3&includes[]=cover_art`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const json = await res.json();
    if (json.data && json.data.length > 0) {
      for (const m of json.data) {
        const coverRel = m.relationships?.find(r => r.type === 'cover_art');
        const fileName = coverRel?.attributes?.fileName;
        const coverUrl = fileName ? `https://uploads.mangadex.org/covers/${m.id}/${fileName}.512.jpg` : null;
        console.log(`[MD] "${title}" -> id: ${m.id}, title: ${m.attributes.title.en || Object.values(m.attributes.title)[0]}, cover: ${coverUrl}`);
      }
    } else {
      console.log(`[MD] "${title}" -> not found`);
    }
  } catch (e) {
    console.log(`[MD] "${title}" error:`, e.message);
  }
}

async function searchKitsu(title) {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(title)}&page[limit]=2`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const json = await res.json();
    if (json.data && json.data.length > 0) {
      json.data.forEach(d => {
        console.log(`[Kitsu] "${title}" -> id: ${d.id}, title: ${d.attributes.canonicalTitle}, cover: ${d.attributes.posterImage?.large}`);
      });
    } else {
      console.log(`[Kitsu] "${title}" -> not found`);
    }
  } catch (e) {
    console.log(`[Kitsu] "${title}" error:`, e.message);
  }
}

async function run() {
  await searchMangaDex('Shino to Ren');
  await searchMangaDex('しのとれん');
  await searchMangaDex('Destroy It All And Love Me In Hell');
  await searchMangaDex('Subete wo Kowashite Jigoku de Aishite');
  await searchMangaDex('Night Owls & Summer Skies');
  await searchMangaDex('My Food Seems To Be Very Cute');
  await searchMangaDex('Kill Me Now');
  await searchKitsu('Shino to Ren');
  await searchKitsu('Watashi o Tabetai, Hitodenashi');
}

run();
