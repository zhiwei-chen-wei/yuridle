import fs from 'fs';

const titlesToFetch = [
  { id: 'yuri-is-my-job', q: 'Watashi no Yuri wa Oshigoto Desu' },
  { id: 'sailor-moon', q: 'Bishoujo Senshi Sailor Moon' },
  { id: 'mai-hime', q: 'Mai-HiME' },
  { id: 'happy-sugar-life', q: 'Happy Sugar Life' },
  { id: 'netsuzou-trap', q: 'Netsuzou Trap -NTR-' },
  { id: 'mygo', q: 'BanG Dream! It\'s MyGO!!!!!' },
  { id: 'bang-dream', q: 'BanG Dream!' },
  { id: 'love-live', q: 'Love Live! School Idol Project' },
  { id: 'love-live-sunshine', q: 'Love Live! Sunshine!!' },
  { id: 'love-live-nijigasaki', q: 'Love Live! Nijigasaki' },
  { id: 'tropical-fish', q: 'Nettai-gyo wa Yuki ni Kogareru' },
  { id: 'kashimashi', q: 'Kashimashi: Girl Meets Girl' },
  { id: 'our-teachers-are-dating', q: 'Hayama-sensei to Terano-sensei' },
  { id: 'tadokoro-san', q: 'Tadokoro-san' },
  { id: 'school-zone-girls', q: 'School Zone Ningiyau' },
  { id: 'vampeerz', q: 'Vampeerz' },
  { id: 'cheerful-amnesia', q: 'Akarui Kioku Soushitsu' },
  { id: 'after-hours', q: 'After Hours Nishio' },
  { id: 'even-though-were-adults', q: 'Otona ni Nattemo' },
  { id: 'hero-san', q: 'Hero-san to Moto Onna Kanbu-san' },
  { id: 'oppai-ga-suki', q: 'Sekai de Ichiban Oppai ga Suki' },
  { id: 'hino-san-no-baka', q: 'Hino-san no Baka' },
  { id: 'sheep-princess', q: 'Hitsuji Hime no Ookami' },
  { id: 'run-away-with-me-girl', q: 'Kakeochi Girl' },
  { id: 'akebis-sailor-uniform', q: 'Akebi-chan no Sailor Fuku' },
  { id: 'candy-boy', q: 'Candy Boy' },
  { id: 'kuttsukiboshi', q: 'Kuttsukiboshi' },
  { id: 'sono-hanabira', q: 'Sono Hanabira ni Kuchizuke wo' },
  { id: 'qualia-the-purple', q: 'Murasakiiro no Qualia' },
  { id: 'vtuber-legend', q: 'VTuber Legend' },
  { id: 'train-to-the-end', q: 'Shuumatsu Train Doko e Iku' },
  { id: 'inugami-nekoyama', q: 'Inugami-san to Nekoyama-san' },
  { id: 'octave', q: 'Octave Akiyama' },
  { id: 'prism-yuri', q: 'Prism Higashiyama' },
  { id: 'gunjou', q: 'Gunjou Ching Nakamura' },
  { id: 'blue-drop', q: 'Blue Drop: Tenshi-tachi' },
  { id: 'mnemosyne', q: 'Mnemosyne no Musume-tachi' },
  { id: 'noir', q: 'Noir Bee Train' },
  { id: 'el-cazador', q: 'El Cazador de la Bruja' },
  { id: 'madlax', q: 'Madlax' },
  { id: 'kakegurui', q: 'Kakegurui' },
  { id: 'cross-ange', q: 'Cross Ange: Rondo of Angel' },
  { id: 'valkyrie-drive', q: 'Valkyrie Drive: Mermaid' },
  { id: 'assault-lily', q: 'Assault Lily: Bouquet' },
  { id: 'granbelm', q: 'Granbelm' },
  { id: 'slow-loop', q: 'Slow Loop' },
  { id: 'asteroid-in-love', q: 'Koisuru Asteroid' },
  { id: 'kiniro-mosaic', q: 'Kin-iro Mosaic' },
  { id: 'gochuumon', q: 'Gochuumon wa Usagi Desu ka' },
  { id: 'non-non-biyori', q: 'Non Non Biyori' },
  { id: 'comic-girls', q: 'Comic Girls' },
  { id: 'new-game', q: 'New Game!' },
  { id: 'fluttering-feelings', q: 'Fluttering Feelings' },
  { id: 'lily-love', q: 'Lily Love Ratana Satis' },
  { id: 'moonlight-garden', q: 'Moonlight Garden' },
  { id: 'ring-my-bell', q: 'Ring My Bell Yeonji' },
  { id: 'sora-haena', q: 'Sora & Haena' },
  { id: 'opium-gl', q: 'Opium Aji' },
  { id: 'nevermore', q: 'Nevermore Kit Trace' },
  { id: 'always-human', q: 'Always Human' },
  { id: 'soulmate-gl', q: 'Soulmate Ke Ran Bing' }
];

async function runFetch() {
  const result = {};
  for (const item of titlesToFetch) {
    let found = false;
    for (const type of ['anime', 'manga']) {
      try {
        const url = `https://kitsu.io/api/edge/${type}?filter[text]=${encodeURIComponent(item.q)}&page[limit]=1`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.data && data.data[0]) {
          const poster = data.data[0].attributes?.posterImage?.large || data.data[0].attributes?.posterImage?.original;
          if (poster) {
            result[item.id] = poster;
            console.log(`[OK] ${item.id} -> ${data.data[0].attributes.canonicalTitle}`);
            found = true;
            break;
          }
        }
      } catch {
        // continue
      }
    }
    if (!found) {
      console.log(`[FAIL] ${item.id}`);
    }
    await new Promise(r => setTimeout(r, 350));
  }
  fs.writeFileSync('./scripts/fetched_mega_covers.json', JSON.stringify(result, null, 2));
  console.log('Saved covers to fetched_mega_covers.json');
}

runFetch();
