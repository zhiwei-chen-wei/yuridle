async function fixMisses() {
  const fixes = [
    { id: 'girl-friends', query: 'manga?filter[text]=Girl%20Friends%20Morinaga' },
    { id: 'bad-thinking-diary', query: 'manga?filter[text]=Bad%20Thinking%20Diary' },
    { id: 'princess-principal', query: 'anime?filter[text]=Princess%20Principal' },
    { id: 'flip-flappers', query: 'anime?filter[text]=Flip%20Flappers' },
    { id: 'machikado-mazoku', query: 'anime?filter[text]=Machikado%20Mazoku' },
    { id: 'miss-kobayashis-dragon-maid', query: 'anime?filter[text]=Kobayashi-san%20Chi%20no%20Maid' },
    { id: 'vampire-in-the-garden', query: 'anime?filter[text]=Vampire%20in%20the%20Garden' },
    { id: 'witch-from-mercury', query: 'anime?filter[text]=Suisei%20no%20Majo' }
  ];

  for (const f of fixes) {
    const res = await fetch(`https://kitsu.io/api/edge/${f.query}&page[limit]=1`);
    const data = await res.json();
    if (data.data && data.data[0]) {
      const item = data.data[0];
      const poster = item.attributes?.posterImage?.large || item.attributes?.posterImage?.original;
      console.log(`FIXED: ${f.id} -> ${item.attributes.canonicalTitle} (${poster})`);
    } else {
      console.log(`FAILED FIX: ${f.id}`);
    }
  }
}
fixMisses();
