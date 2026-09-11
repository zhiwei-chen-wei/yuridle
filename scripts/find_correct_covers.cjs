const searchList = [
  { id: 'aoi-hana', text: 'Aoi Hana', type: 'anime' },
  { id: 'sakura-trick', text: 'Sakura Trick', type: 'anime' },
  { id: 'otherside-picnic', text: 'Urasekai Picnic', type: 'anime' },
  { id: 'yuri-kuma-arashi', text: 'Yuri Kuma Arashi', type: 'anime' },
  { id: 'yuruyuri', text: 'Yuru Yuri', type: 'anime' },
  { id: 'symphogear', text: 'Senki Zesshou Symphogear', type: 'anime' },
  { id: 'revue-starlight', text: 'Revue Starlight', type: 'anime' },
  { id: 'bocchi-the-rock', text: 'Bocchi the Rock', type: 'anime' },
  { id: 'madoka-magica', text: 'Madoka Magica', type: 'anime' },
  { id: 'yuru-camp', text: 'Yuru Camp', type: 'anime' },
  { id: 'fuzoroi-no-renri', text: 'Fuzoroi no Renri', type: 'manga' },
  { id: 'wataten', text: 'Watashi ni Tenshi ga Maiorita', type: 'anime' },
  { id: 'k-on', text: 'K-ON!', type: 'anime' }
];

async function findCorrect() {
  for (const s of searchList) {
    const url = `https://kitsu.io/api/edge/${s.type}?filter[text]=${encodeURIComponent(s.text)}&page[limit]=3`;
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const json = await res.json();
      console.log(`\n=== ${s.id} (${s.text}) ===`);
      for (const item of (json.data || [])) {
        console.log(`ID: ${item.id} | ${item.attributes.canonicalTitle} | Poster: ${item.attributes.posterImage?.large}`);
      }
    } catch (e) {
      console.log(s.id, 'Error:', e.message);
    }
  }
}

findCorrect();
