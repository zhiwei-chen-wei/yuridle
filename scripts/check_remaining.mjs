// Quick query for remaining titles
async function checkRemaining() {
  const tests = [
    { name: 'Shoujo Sect', url: 'https://api.mangadex.org/manga?title=Shoujo%20Sect&includes[]=cover_art' },
    { name: 'Hen Hiroya Oku', url: 'https://api.mangadex.org/manga?title=HEN&includes[]=cover_art' },
    { name: 'Hitsuji Hime', url: 'https://api.mangadex.org/manga?title=Hitsuji%20Hime%20no%20Ookami-san&includes[]=cover_art' },
    { name: 'Serenade Keum Kavi', url: 'https://api.mangadex.org/manga?title=Serenade&authors[]=Keum%20Kavi&includes[]=cover_art' },
    { name: 'Show me your bust', url: 'https://api.mangadex.org/manga?title=Show%20Me%20Your%20Bust&includes[]=cover_art' }
  ];

  for (const t of tests) {
    try {
      const res = await fetch(t.url, { headers: { 'User-Agent': 'Yuridle-Fix/1.0' } });
      const data = await res.json();
      console.log(`=== ${t.name} ===`);
      if (data.data) {
        data.data.forEach(m => {
          const c = m.relationships?.find(r => r.type === 'cover_art');
          console.log(m.id, Object.values(m.attributes.title)[0], c ? `https://uploads.mangadex.org/covers/${m.id}/${c.attributes?.fileName}.512.jpg` : 'no cover');
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
}

checkRemaining();
