async function search() {
  const res = await fetch('https://kitsu.io/api/edge/anime?filter[text]=Sailor%20Moon%20Crystal');
  const json = await res.json();
  json.data.forEach(d => {
    console.log(d.id, d.attributes.canonicalTitle, d.attributes.startDate, d.attributes.posterImage && d.attributes.posterImage.large);
  });
}
search();
