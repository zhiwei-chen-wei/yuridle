const urls = [
  'https://uploads.mangadex.org/covers/48863213-086b-4dfb-8103-8e279b8e5f5d/134f74fa-dfa3-4842-9071-e99e6fe4fccd.jpg',
  'https://media.kitsu.app/manga/69573/poster_image/large-6fa66104c9f923f1d430a85fde980fec.jpeg',
  'https://media.kitsu.app/manga/67511/poster_image/large-92942335c1eaf991464e6ef07938f1c6.jpeg',
  'https://media.kitsu.app/manga/64974/poster_image/large-47cd0853eae81bca26c033f1acd9fa93.jpeg',
  'https://media.kitsu.app/manga/poster_images/59761/large.jpg'
];

async function check() {
  for (const u of urls) {
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log(res.status, u);
    } catch (e) {
      console.log('ERR', u, e.message);
    }
  }
}
check();
