const https = require('https');

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

(async () => {
  const titles = [
    'Hoshikuzu Telepath',
    'Yoru no Kurage wa Oyogenai',
    'Girls Band Cry'
  ];
  for (const t of titles) {
    const data = await fetchJson(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(t)}&page[limit]=2`);
    if (data && data.data) {
      for (const item of data.data) {
        console.log(`${t} -> ${item.attributes.canonicalTitle}:`, item.attributes.posterImage ? item.attributes.posterImage.large : 'no img');
      }
    }
  }

  // Also query Fandom Wikia for backup
  const w1 = await fetchJson('https://yuripedia.fandom.com/api.php?action=query&titles=Hoshikuzu_Telepath|Yoru_no_Kurage_wa_Oyogenai|Girls_Band_Cry&prop=pageimages&format=json&pithumbsize=500');
  console.log('Yuripedia wiki:', JSON.stringify(w1, null, 2));
})();
