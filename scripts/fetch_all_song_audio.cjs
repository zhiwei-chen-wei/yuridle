const fs = require('fs');

const content = fs.readFileSync('src/data/yuriSongs.ts', 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const songs = eval(content.slice(start, end + 1));

console.log('Starting concurrent audio search for ' + songs.length + ' songs...');

const searchOverrides = {
  'kimi-no-gin-no-niwa': { anime: 'Mahou Shoujo Madoka★Magica Movie 3: Hangyaku no Monogatari', song: 'Kimi no Gin no Niwa' },
  'tenbin-fragtime': { anime: 'Fragtime', song: 'fragile' },
  'irodori-jelee': { anime: 'Yoru no Kurage wa Oyogenai', song: 'Irodori' },
  'zattou-bokura-no-machi': { anime: 'Girls Band Cry', song: 'Zattou, Bokura no Machi' },
  'tenshi-ni-fureta-yo': { anime: 'K-On!!', song: 'Tenshi ni Fureta yo!' },
  'go-go-maniac': { anime: 'K-On!!', song: 'GO! GO! MANIAC' },
  'listen-htt': { anime: 'K-On!!', song: 'Listen!!' },
  'soushou-innocent': { anime: 'Akuma no Riddle', song: 'Soushou Innocent' },
  'dream-solister': { anime: 'Hibike! Euphonium', song: 'DREAM SOLISTER' },
  'eternal-eternity': { anime: 'Bishoujo Senshi Sailor Moon Crystal Season III', song: 'eternal eternity' },
  'ten-to-sen': { anime: 'Hoshikuzu Telepath', song: 'Ten to Sen' },
  'kimi-ni-furete': { anime: 'Yagate Kimi ni Naru', song: 'Kimi ni Furete' },
  'hectopascal': { anime: 'Yagate Kimi ni Naru', song: 'hectopascal' },
  'shukufuku': { anime: 'Kidou Senshi Gundam: Suisei no Majo', song: 'Shukufuku' },
  'red-birthmark': { anime: 'Kidou Senshi Gundam: Suisei no Majo Season 2', song: 'Red:birthmark' },
  'alive-lycoris': { anime: 'Lycoris Recoil', song: 'ALIVE' },
  'hana-no-tou': { anime: 'Lycoris Recoil', song: 'Hana no Tou' },
  'seishun-complex': { anime: 'Bocchi the Rock!', song: 'Seishun Complex' },
  'guitar-loneliness': { anime: 'Bocchi the Rock!', song: 'Guitar to Kodoku to Aoi Hoshi' },
  'haruhikage': { anime: "BanG Dream! It's MyGO!!!!!", song: 'Haruhikage' },
  'mayoiuta': { anime: "BanG Dream! It's MyGO!!!!!", song: 'Mayoiuta' },
  'connect-madoka': { anime: 'Mahou Shoujo Madoka★Magica', song: 'Connect' },
  'magia-madoka': { anime: 'Mahou Shoujo Madoka★Magica', song: 'Magia' },
  'azalea-citrus': { anime: 'Citrus', song: 'Azalea' },
  'arc-en-ciel': { anime: 'Tensei Oujo to Tensai Reijou no Mahou Kakumei', song: 'Only for you' },
  'raise-your-hands': { anime: 'Watashi no Oshi wa Akuyaku Reijou.', song: 'Raise Y/Our Hands!!' },
  'follow-your-arrows': { anime: 'Sasayaku You ni Koi o Utau', song: 'Follow your arrows' },
  'hoshi-to-hana': { anime: 'Yuuki Yuuna wa Yuusha de Aru', song: 'Hoshi to Hana' },
  'won3chu-kissme': { anime: 'Sakura Trick', song: 'Won(*3*)Chu KissMe!' },
  'kimi-ni-aeta-hi': { anime: 'Adachi to Shimamura', song: 'Kimi ni Aeta Hi' },
  'kimi-no-tonari-de-adachi': { anime: 'Adachi to Shimamura', song: 'Kimi no Tonari de' },
  'red-liberation': { anime: 'Hikikomari Kyuuketsuki no Monmon', song: 'Red Liberation' },
  'himitsu-no-melody': { anime: 'Watashi no Yuri wa Oshigoto Desu!', song: 'Himitsu Melody' },
  'hoshi-no-dialogue': { anime: 'Shoujo☆Kageki Revue Starlight', song: 'Hoshi no Dialogue' },
  'machikado-tangent': { anime: 'Machikado Mazoku', song: 'Machikado Tangent' },
  'serendipity-flip': { anime: 'Flip Flappers', song: 'Serendipity' },
  'flip-flappers-ed': { anime: 'Flip Flappers', song: 'FLIP FLAP FLIP FLAP' },
  'kokoro-ni-tsubomi': { anime: 'Konohana Kitan', song: 'Kokoro ni Tsubomi' },
  'hana-wa-odori-ya-iroha-ni-ho': { anime: 'Hanayamata', song: 'Hana wa Odori ya Iroha ni ho' },
  'yuriyurararara': { anime: 'Yuru Yuri', song: 'Yuriyurarararayuruyuri Daijiken' },
  'asu-e-no-tobira': { anime: 'Asagao to Kase-san.', song: 'Asu e no Tobira' },
  'asagao-kase': { anime: 'Asagao to Kase-san.', song: 'Asagao' },
  'umapyoi-densetsu': { anime: 'Uma Musume: Pretty Derby', song: 'Umapyoi Densetsu' },
  'snow-halation': { anime: 'Love Live! School Idol Project 2nd Season', song: 'Snow halation' },
  'synchrogazer': { anime: 'Senki Zesshou Symphogear', song: 'Synchrogazer' },
  'one-room-sugar-life': { anime: 'Happy Sugar Life', song: 'One Room Sugar Life' },
  'aozora-no-rhapsody': { anime: 'Kobayashi-san Chi no Maid Dragon', song: 'Aozora no Rhapsody' },
  'other-side-of-wall': { anime: 'Princess Principal', song: 'The Other Side of the Wall' },
  'ano-mori-de-matteru': { anime: 'Yuri Kuma Arashi', song: 'Ano Mori de Matteru' },
  'cross-ange-op1': { anime: 'Cross Ange: Tenshi to Ryuu no Rondo', song: 'Kindan no Resistance' },
  'valkyrie-drive-op': { anime: 'Valkyrie Drive: Mermaid', song: 'Overdrive' },
  'memories-comic-girls': { anime: 'Comic Girls', song: 'Memories' },
  'spicy-piece': { anime: 'Release the Spyce', song: 'Supaatto! Spy & Spice' },
  'blue-bud-netsuzou': { anime: 'Netsuzou TRAP', song: 'Blue Bud Boy' },
  'deal-with-the-devil': { anime: 'Kakegurui', song: 'Deal with the devil' },
  'starlog-illya': { anime: 'Fate/kaleid liner Prisma☆Illya', song: 'starlog' },
  'guruguru-dj': { anime: 'D4DJ First Mix', song: 'Guruguru DJ TURN!!' },
  'dreamriser': { anime: 'Girls & Panzer', song: 'DreamRiser' },
  'hoshi-no-tabibito': { anime: 'Kageki Shoujo!!', song: 'Hoshi no Tabibito' },
  'venus-line': { anime: "Birdie Wing: Golf Girls' Story", song: 'Venus Line' },
  'my-dream-girls': { anime: 'Mahou Shoujo ni Akogarete', song: 'My dream girls' }
};

async function searchSong(song) {
  const override = searchOverrides[song.id];
  const qList = [];
  if (override?.anime) qList.push(override.anime);
  if (override?.song) qList.push(override.song);
  qList.push(song.seriesTitle);
  const cleanSongTitle = song.songTitle.replace(/[\(\*\)].*/g, '').trim();
  qList.push(cleanSongTitle);

  for (const q of qList) {
    try {
      const searchUrl = 'https://api.animethemes.moe/search?q=' + encodeURIComponent(q);
      const res = await fetch(searchUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: AbortSignal.timeout(6000)
      });
      const data = await res.json();
      const animes = data.search?.anime || [];

      for (const a of animes.slice(0, 3)) {
        const fullUrl = 'https://api.animethemes.moe/anime/' + a.slug + '?include=animethemes.animethemeentries.videos.audio,animethemes.song';
        const fullRes = await fetch(fullUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          signal: AbortSignal.timeout(6000)
        });
        const fullData = await fullRes.json();

        for (const t of fullData.anime?.animethemes || []) {
          const sTitle = (t.song?.title || '').toLowerCase();
          const targetTitle = (override?.song || cleanSongTitle).toLowerCase();
          const tType = t.slug.replace(/[0-9]/g, '');

          const isTitleMatch = sTitle.includes(targetTitle) || targetTitle.includes(sTitle) || 
                               (song.japaneseTitle && sTitle.includes(song.japaneseTitle.toLowerCase()));
          
          if (isTitleMatch || (override?.anime && (tType === song.type || fullData.anime?.animethemes?.length === 1))) {
            const entry = t.animethemeentries?.[0];
            const video = entry?.videos?.[0];
            const audioLink = video?.audio?.link || video?.link;
            if (audioLink) {
              return {
                id: song.id,
                songTitle: song.songTitle,
                matchedAnime: a.name,
                matchedSong: t.song?.title,
                audioUrl: audioLink
              };
            }
          }
        }
      }
    } catch (e) {}
  }
  return null;
}

async function runAll() {
  const results = {};
  const missing = [];

  const BATCH_SIZE = 5;
  for (let i = 0; i < songs.length; i += BATCH_SIZE) {
    const batch = songs.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async s => {
      const match = await searchSong(s);
      if (match) {
        results[s.id] = match.audioUrl;
        console.log(`[OK] ${s.id} -> ${match.audioUrl}`);
      } else {
        missing.push(s);
        console.log(`[MISSING] ${s.id} (${s.songTitle})`);
      }
    }));
    console.log(`Progress: ${Math.min(i + BATCH_SIZE, songs.length)}/${songs.length} (Matched: ${Object.keys(results).length})`);
  }

  console.log('\nFinal: ' + Object.keys(results).length + ' / ' + songs.length + ' matched.');
  fs.writeFileSync('scripts/song_audio_map.json', JSON.stringify(results, null, 2));
  fs.writeFileSync('scripts/song_audio_missing.json', JSON.stringify(missing, null, 2));
}

runAll();
