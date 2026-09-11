async function search() {
  const queries = ['Hitodenashi', 'Watashi o Tabetai', 'Sai Naekawa', 'Tabetai'];
  for (const q of queries) {
    const res = await fetch(`https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(q)}&page[limit]=5`);
    const json = await res.json();
    console.log(`=== Query: ${q} ===`);
    json.data?.forEach(d => {
      console.log(d.id, d.attributes.canonicalTitle, d.attributes.posterImage?.large);
    });
  }
}
search();
