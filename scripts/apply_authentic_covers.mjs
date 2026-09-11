import fs from 'fs';

const SERIES_COVERS = {
  'bloom-into-you': 'https://media.kitsu.app/manga/poster_images/36107/large.jpg',
  'citrus': 'https://media.kitsu.app/manga/poster_images/7727/large.jpg',
  'whispering-you-a-love-song': 'https://media.kitsu.app/manga/poster_images/55421/large.jpg',
  'magirevo': 'https://media.kitsu.app/manga/poster_images/58411/large.jpg',
  'im-in-love-with-the-villainess': 'https://media.kitsu.app/manga/poster_images/57391/large.jpg',
  'the-guy-she-was-interested-in': 'https://media.kitsu.app/manga/63232/poster_image/large-993a3e47289be1bd7b7dd0d1a9edea39.jpeg',
  'adachi-and-shimamura': 'https://media.kitsu.app/anime/poster_images/42342/large.jpg',
  'witch-from-mercury': 'https://media.kitsu.app/anime/45217/poster_image/large-b9851ba27827876261d83154bdb00d8f.jpeg',
  'lycoris-recoil': 'https://media.kitsu.app/anime/45705/poster_image/large-cc78d70c11671d2e76ce9f4cf6fa7e66.jpeg',
  'asagao-to-kase-san': 'https://media.kitsu.app/manga/poster_images/17116/large.jpg',
  'madoka-magica': 'https://media.kitsu.app/anime/poster_images/5851/large.jpg',
  'strawberry-panic': 'https://media.kitsu.app/anime/poster_images/757/large.jpg',
  'girl-friends': 'https://media.kitsu.app/manga/poster_images/6670/large.jpg',
  'mage-and-demon-queen': 'https://media.kitsu.app/manga/poster_images/53978/large.jpg',
  'please-bully-me-miss-villainess': 'https://media.kitsu.app/manga/61631/poster_image/large-fd71a022edd48570bac1962b8431842b.jpeg',
  'what-does-the-fox-say': 'https://media.kitsu.app/manga/poster_images/39295/large.jpg',
  'cant-defy-the-lonely-girl': 'https://uploads.mangadex.org/covers/d7576e72-0301-4ed3-9137-722ed768bfda/e37f95d8-a42f-4df5-a623-d99266a60f76.jpg',
  'aoi-hana': 'https://media.kitsu.app/anime/poster_images/4379/large.jpg',
  'yuri-kuma-arashi': 'https://media.kitsu.app/anime/poster_images/8774/large.jpg',
  'sakura-trick': 'https://media.kitsu.app/anime/poster_images/7936/large.jpg',
  'otherside-picnic': 'https://media.kitsu.app/anime/poster_images/43088/large.jpg',
  'pulse': 'https://media.kitsu.app/manga/poster_images/39296/large.jpg',
  'tamen-de-gushi': 'https://media.kitsu.app/manga/poster_images/35886/large.jpg',
  'bad-thinking-diary': 'https://uploads.mangadex.org/covers/3ed82c63-c018-4f6a-a5ff-d5a71a08d5dc/f5287cbc-7160-485b-82d3-09317c9a0e74.png',
  'princess-principal': 'https://media.kitsu.app/anime/poster_images/13261/large.jpg',
  'flip-flappers': 'https://media.kitsu.app/anime/poster_images/11997/large.jpg',
  'machikado-mazoku': 'https://media.kitsu.app/anime/poster_images/42137/large.jpg',
  'miss-kobayashis-dragon-maid': 'https://media.kitsu.app/anime/poster_images/12243/large.jpg',
  'revue-starlight': 'https://media.kitsu.app/anime/poster_images/40995/large.jpg',
  'symphogear': 'https://media.kitsu.app/anime/poster_images/6573/large.jpg',
  'yuruyuri': 'https://media.kitsu.app/anime/poster_images/6211/large.jpg',
  'how-do-we-relationship': 'https://media.kitsu.app/manga/poster_images/53983/large.jpg',
  'doughnuts-under-a-crescent-moon': 'https://media.kitsu.app/manga/poster_images/55971/large.jpg',
  'goodbye-my-rose-garden': 'https://media.kitsu.app/manga/poster_images/56074/large.jpg',
  'hana-ni-arashi': 'https://media.kitsu.app/manga/poster_images/16431/large.jpg',
  'she-is-still-cute-today': 'https://media.kitsu.app/manga/poster_images/55405/large.jpg',
  'vexations-of-a-shut-in-vampire': 'https://media.kitsu.app/anime/46781/poster_image/large-2fba640d21098485292c303f83ca51a4.jpeg',
  'roll-over-and-die': 'https://media.kitsu.app/manga/55271/poster_image/large-a7d92b34edab43af8a44d97fa7e1fb37.jpeg',
  'failed-princesses': 'https://media.kitsu.app/manga/poster_images/54247/large.jpg',
  'semelparous': 'https://media.kitsu.app/manga/poster_images/57315/large.jpg',
  'still-sick': 'https://media.kitsu.app/manga/poster_images/55059/large.jpg',
  'catch-these-hands': 'https://media.kitsu.app/manga/poster_images/54207/large.jpg',
  'an-easy-introduction-to-love-triangles': 'https://media.kitsu.app/manga/poster_images/57015/large.jpg',
  'my-food-looks-very-cute': 'https://media.kitsu.app/manga/poster_images/59761/large.jpg',
  'handsome-girl-and-sheltered-girl': 'https://media.kitsu.app/manga/poster_images/56758/large.jpg',
  'if-i-could-reach-you': 'https://media.kitsu.app/manga/poster_images/39291/large.jpg',
  'kiss-and-white-lily': 'https://media.kitsu.app/manga/poster_images/26601/large.jpg',
  'not-so-shoujo-love-story': 'https://media.kitsu.app/manga/poster_images/57617/large.jpg',
  'bocchi-the-rock': 'https://media.kitsu.app/anime/poster_images/44589/large.jpg',
  'vampire-in-the-garden': 'https://media.kitsu.app/anime/42188/poster_image/large-3c3022aa8145c9f1d0f45bdecfeebb57.jpeg'
};

const CHARACTER_AVATARS = {
  'yuu-koito': 'https://media.kitsu.app/character/86045/image/7588b845a2297f51f57addc5b3a592d2.jpg',
  'touko-nanami': 'https://media.kitsu.app/character/81099/image/e1a245b4b1936f7a4d8327007dafc893.jpg',
  'yuzu-aihara': 'https://media.kitsu.app/characters/images/48981/original.jpg',
  'mei-aihara': 'https://media.kitsu.app/characters/images/48980/original.jpg',
  'himari-kino': 'https://media.kitsu.app/manga/poster_images/55421/large.jpg',
  'yori-asanagi': 'https://media.kitsu.app/manga/poster_images/55421/large.jpg',
  'anisphia-wynn-palettia': 'https://media.kitsu.app/characters/images/24632/original.jpg',
  'euphyllia-magenta': 'https://media.kitsu.app/characters/images/46364/original.jpg',
  'rae-taylor': 'https://media.kitsu.app/characters/images/70250/original.jpg',
  'claire-francois': 'https://media.kitsu.app/characters/images/14185/original.jpg',
  'chisato-nishikigi': 'https://media.kitsu.app/characters/images/35993/original.jpg',
  'takina-inoue': 'https://media.kitsu.app/characters/images/80617/original.jpg',
  'suletta-mercury': 'https://media.kitsu.app/characters/images/15876/original.jpg',
  'miorine-rembran': 'https://media.kitsu.app/characters/images/51191/original.jpg',
  'homura-akemi': 'https://media.kitsu.app/characters/images/32961/original.jpg',
  'madoka-kaname': 'https://media.kitsu.app/characters/images/32962/original.jpg',
  'sakura-adachi': 'https://media.kitsu.app/characters/images/81056/original.jpg',
  'hougetsu-shimamura': 'https://media.kitsu.app/characters/images/78285/original.jpg',
  'mitsuki-koga': 'https://media.kitsu.app/manga/63232/poster_image/large-993a3e47289be1bd7b7dd0d1a9edea39.jpeg',
  'aya-oosawa': 'https://media.kitsu.app/manga/63232/poster_image/large-993a3e47289be1bd7b7dd0d1a9edea39.jpeg',
  'malori-crow': 'https://media.kitsu.app/manga/poster_images/53978/large.jpg',
  'queen-velverosa': 'https://media.kitsu.app/manga/poster_images/53978/large.jpg',
  'shizuma-hanazono': 'https://media.kitsu.app/characters/images/10886/original.jpg',
  'nagisa-aoi': 'https://media.kitsu.app/characters/images/10885/original.jpg',
  'shamiko': 'https://media.kitsu.app/anime/poster_images/42137/large.jpg',
  'momo-chiyoda': 'https://media.kitsu.app/anime/poster_images/42137/large.jpg',
  'tohru': 'https://media.kitsu.app/characters/images/40273/original.png',
  'hitori-gotoh': 'https://media.kitsu.app/characters/images/70728/original.jpg',
  'kita-ikuyo': 'https://media.kitsu.app/characters/images/82671/original.jpg'
};

// 1. Update yuriSeries.ts
let seriesFile = fs.readFileSync('./src/data/yuriSeries.ts', 'utf-8');
for (const [id, url] of Object.entries(SERIES_COVERS)) {
  // Replace coverImage for this id
  const pattern = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?coverImage:\\s*)'[^']+'`, 'm');
  if (pattern.test(seriesFile)) {
    seriesFile = seriesFile.replace(pattern, `$1'${url}'`);
    console.log(`Updated series cover: ${id}`);
  } else {
    console.warn(`Could not find series id: ${id}`);
  }
}
fs.writeFileSync('./src/data/yuriSeries.ts', seriesFile);

// 2. Update yuriCharacters.ts
let charFile = fs.readFileSync('./src/data/yuriCharacters.ts', 'utf-8');
for (const [id, url] of Object.entries(CHARACTER_AVATARS)) {
  const pattern = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?avatar:\\s*)'[^']+'`, 'm');
  if (pattern.test(charFile)) {
    charFile = charFile.replace(pattern, `$1'${url}'`);
    console.log(`Updated character avatar: ${id}`);
  } else {
    console.warn(`Could not find character id: ${id}`);
  }
}
fs.writeFileSync('./src/data/yuriCharacters.ts', charFile);

console.log('All authentic anime/manga/LN covers and character avatars successfully applied!');
