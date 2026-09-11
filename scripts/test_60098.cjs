fetch('https://media.kitsu.app/manga/poster_images/60098/large.jpg')
  .then(r => console.log('60098 status:', r.status))
  .catch(e => console.log('err:', e.message));
