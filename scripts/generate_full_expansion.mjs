import fs from 'fs';

// Read existing 75 series from yuriSeries.ts
const existingTs = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

// Parse the existing array
// The file has export const yuriSeries: YuriSeries[] = [ ... ];
// We can extract JSON-like structures or evaluate
// Check for YURI_SERIES
const matchExisting = existingTs.match(/export const YURI_SERIES:\s*YuriSeries\[\]\s*=\s*(\[[\s\S]*\]);?\s*$/);
if (!matchExisting) {
  console.error('Could not find YURI_SERIES array in yuriSeries.ts');
  process.exit(1);
}

// Read fetched new series
const fetchedRaw = JSON.parse(fs.readFileSync('scripts/fetched_new_series.json', 'utf8'));

// Filter out bad/mismatched entries
const removeIds = new Set([
  'shoujo-sect',
  'hen-yuri',
  'show-me-your-bust',
  'sheep-princess',
  'serenade-manhwa',
  'green-tea-bitch'
]);

const cleanedFetched = fetchedRaw.filter(item => !removeIds.has(item.id));

// Fix specific covers
const coverFixes = {
  'new-game': 'https://media.kitsu.app/anime/poster_images/11467/large.jpg',
  'opium-gl': 'https://uploads.mangadex.org/covers/fabf4151-4b52-4e6b-ac85-f4979b5d2120/6943ba87-cfd5-4bb9-ad32-ce60041a7954.jpg.512.jpg',
  'always-human': 'https://uploads.mangadex.org/covers/3a97a0d0-2ebe-4bc5-91c5-87097823d0ae/71d0c681-ec9a-4e23-afdd-b86c8ad84ac4.jpg.512.jpg',
  'lily-yy': 'https://uploads.mangadex.org/covers/19daf6ef-6d95-46e5-9e1a-f4e5b655902f/2fc5e9cb-0464-4f4e-a7d9-85d86a93d7c4.png.512.jpg',
  'white-angels-have-no-wings': 'https://uploads.mangadex.org/covers/f9b3de2c-5398-4d51-a4f9-bbad25834c3c/41f34cc2-112f-435a-8ea7-28e5625bc27c.jpg.512.jpg',
  'ghosts-of-greywoods': 'https://uploads.mangadex.org/covers/45e775a8-b9b8-4554-9ad3-e5135a602cda/67b8635e-0747-4e3c-8004-0fe1c1211742.jpg.512.jpg',
  'sadistic-beauty-side-b': 'https://uploads.mangadex.org/covers/6b23785e-6051-4fc2-bd18-099cbcc7fcba/87b72bc9-c28b-43cb-be49-9a52b8115195.jpg.512.jpg',
  'nevermore-webtoon': 'https://static.wikia.nocookie.net/yuripedia/images/f/ff/Nevermore_%28cover%29.jpg/revision/latest/scale-to-width-down/320?cb=20260301052538'
};

for (const item of cleanedFetched) {
  if (coverFixes[item.id]) {
    item.coverImage = coverFixes[item.id];
  }
}

// Additional verified iconic titles to add
const extraTitles = [
  {
    id: 'sasameki-koto',
    title: 'Whispered Words',
    romaji: 'Sasameki Koto',
    nativeTitle: 'ささめきこと',
    medium: 'Anime',
    releaseYear: 2009,
    origin: 'Japan',
    setting: 'High School',
    tropes: ['Opposites Attract', 'Childhood Friends', 'Slow Burn'],
    tone: 'Sweet/Fluff',
    status: 'Completed',
    synopsis: 'Tall and athletic Sumika Murasame is secretly head-over-heels in love with her gentle classmate Ushio Kazama. The painful irony: Ushio loves cute, petite girls and regards Sumika strictly as her cool best friend.',
    famousQuote: 'I love you more than anyone, but I hide my confession behind a smile so I never lose you.',
    coverImage: 'https://media.kitsu.app/anime/poster_images/4473/large.jpg',
    pairing: 'Sumika Murasame x Ushio Kazama',
    aliases: ['Sasameki Koto', 'Whispered Words', 'Sumika Ushio', 'Takashi Ikeda']
  },
  {
    id: 'manaria-friends',
    title: 'Mysteria Friends',
    romaji: 'Manaria Friends',
    nativeTitle: 'マナリアフレンズ',
    medium: 'Anime',
    releaseYear: 2019,
    origin: 'Japan',
    setting: 'Fantasy/Magic',
    tropes: ['Royalty & Commoner', 'Opposites Attract'],
    tone: 'Sweet/Fluff',
    status: 'Completed',
    synopsis: 'At the prestigious Mysteria Academy, students of human, deity, and demon lineage learn magic in harmony. Human princess Anne and half-dragon princess Grea develop an exquisitely tender, deeply intimate companionship.',
    famousQuote: 'Your wings and tail are the most beautiful sight in all of Mysteria, Grea.',
    coverImage: 'https://media.kitsu.app/anime/poster_images/11354/large.jpg',
    pairing: 'Anne x Grea',
    aliases: ['Manaria Friends', 'Mysteria Friends', 'Anne Grea', 'Cygames']
  },
  {
    id: 'saki',
    title: 'Saki',
    romaji: 'Saki',
    nativeTitle: '咲-Saki-',
    medium: 'Anime',
    releaseYear: 2009,
    origin: 'Japan',
    setting: 'High School',
    tropes: ['Opposites Attract', 'Childhood Friends'],
    tone: 'Action/Adventure',
    status: 'Ongoing',
    synopsis: 'Ritz Kobayashi\'s high-octane mahjong epic: Saki Miyanaga possesses the superhuman ability to manipulate tiles to finish at +/-0 score. Recruited by Nodoka Haramura, their deep bond propels Kiyosumi High toward national glory.',
    famousQuote: 'Playing mahjong with you is the greatest joy I have ever known, Nodoka-chan.',
    coverImage: 'https://media.kitsu.app/anime/poster_images/4235/large.jpg',
    pairing: 'Saki Miyanaga x Nodoka Haramura',
    aliases: ['Saki', 'Kiyosumi', 'Nodoka Haramura', 'Ritz Kobayashi']
  },
  {
    id: 'yuuki-yuuna',
    title: 'Yuki Yuna is a Hero',
    romaji: 'Yuuki Yuuna wa Yuusha de Aru',
    nativeTitle: '結城友奈は勇者である',
    medium: 'Anime',
    releaseYear: 2014,
    origin: 'Japan',
    setting: 'Fantasy/Magic',
    tropes: ['Childhood Friends', 'Opposites Attract'],
    tone: 'Dark/Psychological',
    status: 'Completed',
    synopsis: 'Middle schoolers in the Sanshu Hero Club transform with fairy powers to defend humanity from the Vertex. The emotional and eternal bond between cheerful Yuuna and wheelchair-bound Mimori Tougou anchors the entire universe.',
    famousQuote: 'Even if the world commands us to sacrifice, I will never let go of Tougou-san!',
    coverImage: 'https://media.kitsu.app/anime/poster_images/8638/large.jpg',
    pairing: 'Yuuna Yuuki x Mimori Tougou',
    aliases: ['YuYuYu', 'Yuki Yuna is a Hero', 'Yuuna Tougou', 'Studio Gokumi']
  },
  {
    id: 'strike-witches',
    title: 'Strike Witches',
    romaji: 'Strike Witches',
    nativeTitle: 'ストライクウィッチーズ',
    medium: 'Anime',
    releaseYear: 2008,
    origin: 'Japan',
    setting: 'Sci-Fi/Mecha',
    tropes: ['Senpai & Kouhai', 'Opposites Attract'],
    tone: 'Action/Adventure',
    status: 'Completed',
    synopsis: 'In an alternate 1944 Earth under siege by alien Neuroi, teenage girls with magical power don mechanical Striker Units. Rookie Yoshika Miyafuji forms fierce, loving attachments to stoic commander Mio Sakamoto and British wingmate Lynette.',
    famousQuote: 'I will use my magic to heal and protect everyone I cherish in the skies!',
    coverImage: 'https://media.kitsu.app/anime/poster_images/3179/large.jpg',
    pairing: 'Yoshika Miyafuji x Mio Sakamoto / Lynette Bishop',
    aliases: ['Strike Witches', 'Yoshika', 'Lynette Bishop', 'Gonzo']
  },
  {
    id: 'vividred-operation',
    title: 'Vividred Operation',
    romaji: 'Vividred Operation',
    nativeTitle: 'ビビッドレッド・オペレーション',
    medium: 'Anime',
    releaseYear: 2013,
    origin: 'Japan',
    setting: 'Sci-Fi/Mecha',
    tropes: ['Enemies to Lovers', 'Opposites Attract'],
    tone: 'Action/Adventure',
    status: 'Completed',
    synopsis: 'To protect the revolutionary Manifestation Engine island from Alien Alone attackers, energetic Akane Isshiki fuses with her magical warrior friends via passionate docking kisses, culminating in her redemption of lone rival Rei Kuroki.',
    famousQuote: 'Docking complete! Friendship and love power our universe!',
    coverImage: 'https://media.kitsu.app/anime/poster_images/7108/large.jpg',
    pairing: 'Akane Isshiki x Rei Kuroki',
    aliases: ['Vividred Operation', 'Akane Rei', 'A-1 Pictures']
  },
  {
    id: 'yuyushiki',
    title: 'Yuyushiki',
    romaji: 'Yuyushiki',
    nativeTitle: 'ゆゆ式',
    medium: 'Anime',
    releaseYear: 2013,
    origin: 'Japan',
    setting: 'High School',
    tropes: ['Childhood Friends', 'Opposites Attract'],
    tone: 'Sweet/Fluff',
    status: 'Completed',
    synopsis: 'Yuzuko, Yukari, and Yui spend their days after school in the Data Processing Club using internet search engines to look up silly questions, sharing effortless banter, gentle touch, and delightful high school companionship.',
    famousQuote: 'Let\'s look up random trivia on the internet together forever!',
    coverImage: 'https://media.kitsu.app/anime/poster_images/7338/large.jpg',
    pairing: 'Yuzuko Nonohara x Yui Ichii x Yukari Hinata',
    aliases: ['Yuyushiki', 'Kinema Citrus', 'Yuzuko Yui Yukari']
  },
  {
    id: 'otome-no-teikoku',
    title: 'Otome no Teikoku (Maiden Empire)',
    romaji: 'Otome no Teikoku',
    nativeTitle: 'オトメの帝国',
    medium: 'Manga',
    releaseYear: 2010,
    origin: 'Japan',
    setting: 'High School',
    tropes: ['Opposites Attract', 'Childhood Friends', 'Senpai & Kouhai'],
    tone: 'Sweet/Fluff',
    status: 'Ongoing',
    synopsis: 'Torajirou Kishi\'s sprawling high school girls anthology: An all-girls academy teeming with dozens of charming pairs experiencing sweet first kisses, fierce crushes, locker room intimate secrets, and tender romance.',
    famousQuote: 'In this empire of maiden blossoms, every girl has someone who makes her heart skip.',
    coverImage: 'https://media.kitsu.app/manga/poster_images/15034/large.jpg',
    pairing: 'Ai x Chie / Haruka x Miyu',
    aliases: ['Otome no Teikoku', 'Maiden Empire', 'Torajirou Kishi']
  },
  {
    id: 'poor-poor-lips',
    title: 'Poor Poor Lips',
    romaji: 'Poor Poor Lips',
    nativeTitle: 'プあプあリップス',
    medium: 'Manga',
    releaseYear: 2007,
    origin: 'Japan',
    setting: 'Workplace',
    tropes: ['Royalty & Commoner', 'Master & Servant', 'Opposites Attract'],
    tone: 'Comedy',
    status: 'Completed',
    synopsis: 'Hayako Gotoh\'s classic workplace 4-koma: Penniless and perpetually starving girl Nako is hired as a clerk by Ren, a wealthy, glamorous lesbian gemologist who runs a boutique jewelry shop and shamelessly showers Nako with love.',
    famousQuote: 'You may be penniless, Nako, but your smile is worth more than all the jewels in my vault!',
    coverImage: 'https://media.kitsu.app/manga/poster_images/22008/large.jpg',
    pairing: 'Ren Otsuka x Nako Morimoto',
    aliases: ['Poor Poor Lips', 'Hayako Gotoh', 'Ren Nako']
  },
  {
    id: 'uma-musume',
    title: 'Uma Musume: Pretty Derby',
    romaji: 'Uma Musume: Pretty Derby',
    nativeTitle: 'ウマ娘 プリティーダービー',
    medium: 'Anime',
    releaseYear: 2018,
    origin: 'Japan',
    setting: 'High School',
    tropes: ['Opposites Attract', 'Enemies to Lovers', 'Childhood Friends'],
    tone: 'Action/Adventure',
    status: 'Ongoing',
    synopsis: 'Horse-girls blessed with superhuman running speed and fluffy ears train at Tracen Academy to compete in national derbies. Season 2 delivers legendary emotional heights with the destined rivalry and bond between Tokai Teio and Mejiro McQueen.',
    famousQuote: 'I will run on the racetrack again, McQueen, because you are waiting for me at the finish line!',
    coverImage: 'https://media.kitsu.app/anime/poster_images/13485/large.jpg',
    pairing: 'Tokai Teio x Mejiro McQueen / Special Week x Silence Suzuka',
    aliases: ['Uma Musume', 'Pretty Derby', 'Teio McQueen', 'SpeSuzu', 'Cygames']
  }
];

// Combine all new entries
const allNewSeries = [...cleanedFetched, ...extraTitles];
console.log(`Cleaned fetched: ${cleanedFetched.length}, Extras: ${extraTitles.length}, Total new: ${allNewSeries.length}`);

// Write JSON for assembly
fs.writeFileSync('scripts/all_new_series_verified.json', JSON.stringify(allNewSeries, null, 2));
console.log('Saved scripts/all_new_series_verified.json');
