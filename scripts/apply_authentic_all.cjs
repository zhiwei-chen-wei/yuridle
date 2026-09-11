const fs = require('fs');

const fixes = {
  'aoi-hana': 'https://media.kitsu.app/anime/poster_images/4454/large.jpg',
  'sakura-trick': 'https://media.kitsu.app/anime/poster_images/7978/large.jpg',
  'otherside-picnic': 'https://media.kitsu.app/anime/poster_images/43042/large.jpg',
  'yuri-kuma-arashi': 'https://media.kitsu.app/anime/poster_images/8738/large.jpg',
  'yuruyuri': 'https://media.kitsu.app/anime/poster_images/6205/large.jpg',
  'symphogear': 'https://media.kitsu.app/anime/poster_images/6587/large.jpg',
  'revue-starlight': 'https://media.kitsu.app/anime/poster_images/14174/large.jpg',
  'bocchi-the-rock': 'https://media.kitsu.app/anime/44196/poster_image/large-04fc7c066e52d4d2b9d0217b383597bb.jpeg',
  'madoka-magica': 'https://media.kitsu.app/anime/poster_images/5853/large.jpg',
  'yuru-camp': 'https://media.kitsu.app/anime/poster_images/13480/large.jpg',
  'fuzoroi-no-renri': 'https://media.kitsu.app/manga/poster_images/58127/large.jpg',
  'wataten': 'https://media.kitsu.app/anime/poster_images/41403/large.jpg',
  'k-on': 'https://media.kitsu.app/anime/poster_images/4240/large.jpg',
  'she-loves-to-cook-and-she-loves-to-eat': 'https://media.kitsu.app/manga/62100/poster_image/large-9bf4feb3a4d3534dc951257f5a3696b3.jpeg',
  'her-tale-of-shim-chong': 'https://media.kitsu.app/manga/poster_images/55179/large.jpg',
  'utena': 'https://media.kitsu.app/anime/poster_images/403/large.jpg',
  'maria-sama': 'https://media.kitsu.app/anime/poster_images/7815/large.jpg',
  'love-live': 'https://media.kitsu.app/anime/poster_images/7203/large.jpg',
  'akebis-sailor-uniform': 'https://media.kitsu.app/anime/44210/poster_image/large-f2797a9b791ff0f444e2d43ea763a225.jpeg',
  'yuki-yuna': 'https://media.kitsu.app/anime/poster_images/8638/large.jpg'
};

let content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

let replacedCount = 0;
for (const [id, newCover] of Object.entries(fixes)) {
  // Matches either:
  // "id": "aoi-hana", ... "coverImage": "..."
  // or: id: 'aoi-hana', ... coverImage: '...'
  const blockRegex = new RegExp(`(["']?id["']?:\\s*['"]${id}['"][\\s\\S]*?["']?coverImage["']?:\\s*['"])([^'"]+)(['"])`);
  const match = blockRegex.exec(content);
  if (match) {
    console.log(`Patching ${id}:`);
    console.log(`  OLD: ${match[2]}`);
    console.log(`  NEW: ${newCover}`);
    content = content.replace(blockRegex, `$1${newCover}$3`);
    replacedCount++;
  } else {
    console.log(`NOT FOUND: ${id}`);
  }
}

console.log(`Total replaced: ${replacedCount} / ${Object.keys(fixes).length}`);
fs.writeFileSync('src/data/yuriSeries.ts', content, 'utf8');
