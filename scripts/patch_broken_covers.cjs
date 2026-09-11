const fs = require('fs');

let content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

content = content.replace(
  'https://media.kitsu.app/anime/poster_images/46487/large.jpg',
  'https://media.kitsu.app/anime/46601/poster_image/large-c7f30650b2b1da509dd25e4f534fea4a.jpeg'
);

content = content.replace(
  'https://media.kitsu.app/anime/poster_images/47043/large.jpg',
  'https://media.kitsu.app/anime/47233/poster_image/large-b4cf1ec48d885cef74ff3bd42b091912.jpeg'
);

content = content.replace(
  'https://media.kitsu.app/anime/poster_images/46887/large.jpg',
  'https://media.kitsu.app/anime/47356/poster_image/large-bb630e16555cc0ca38179854b501a61e.jpeg'
);

fs.writeFileSync('src/data/yuriSeries.ts', content, 'utf8');
console.log('Successfully updated 3 broken covers in src/data/yuriSeries.ts');
