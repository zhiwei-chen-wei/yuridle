const https = require('https');

const urls = {
  'stardust-telepath': 'https://media.kitsu.app/anime/46601/poster_image/large-c7f30650b2b1da509dd25e4f534fea4a.jpeg',
  'jellyfish-cant-swim-in-the-night': 'https://media.kitsu.app/anime/47233/poster_image/large-b4cf1ec48d885cef74ff3bd42b091912.jpeg',
  'girls-band-cry': 'https://media.kitsu.app/anime/47356/poster_image/large-bb630e16555cc0ca38179854b501a61e.jpeg'
};

async function test(name, u) {
  return new Promise((resolve) => {
    https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      console.log(`${name}: ${res.statusCode}`);
      resolve();
    });
  });
}

(async () => {
  for (const [name, u] of Object.entries(urls)) {
    await test(name, u);
  }
})();
