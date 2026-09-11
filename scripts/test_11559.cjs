fetch('https://media.kitsu.app/anime/poster_images/11559/large.jpg')
  .then(r => console.log('11559 status:', r.status))
  .catch(e => console.log('11559 err:', e));
