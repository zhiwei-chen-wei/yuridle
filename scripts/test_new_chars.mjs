// Script to test authentic avatars for 50 new characters
import fs from 'fs';

const characterCandidates = [
  { id: 'sayaka-saeki', wiki: 'yuri', title: 'Sayaka_Saeki' },
  { id: 'matsuri-mizusawa', wiki: 'yuri', title: 'Matsuri_Mizusawa' },
  { id: 'harumi-taniguchi', wiki: 'yuri', title: 'Harumi_Taniguchi' },
  { id: 'ryo-yamada', wiki: 'bocchi-the-rock', title: 'Ryo_Yamada' },
  { id: 'nijika-ijichi', wiki: 'bocchi-the-rock', title: 'Nijika_Ijichi' },
  { id: 'chuchu', wiki: 'gundam', title: 'Chuatury_Panlunch' },
  { id: 'nika-nanaura', wiki: 'gundam', title: 'Nika_Nanaura' },
  { id: 'soyo-nagasaki', wiki: 'bandori', title: 'Nagasaki_Soyo' },
  { id: 'taki-shiina', wiki: 'bandori', title: 'Shiina_Taki' },
  { id: 'sakiko-togawa', wiki: 'bandori', title: 'Togawa_Sakiko' },
  { id: 'nico-yazawa', wiki: 'love-live', title: 'Nico_Yazawa' },
  { id: 'maki-nishikino', wiki: 'love-live', title: 'Maki_Nishikino' },
  { id: 'umi-sonoda', wiki: 'love-live', title: 'Umi_Sonoda' },
  { id: 'kotori-minami', wiki: 'love-live', title: 'Kotori_Minami' },
  { id: 'chika-takami', wiki: 'love-live', title: 'Chika_Takami' },
  { id: 'riko-sakurauchi', wiki: 'love-live', title: 'Riko_Sakurauchi' },
  { id: 'kanan-matsuura', wiki: 'love-live', title: 'Kanan_Matsuura' },
  { id: 'dia-kurosawa', wiki: 'love-live', title: 'Dia_Kurosawa' },
  { id: 'yuu-takasaki', wiki: 'love-live', title: 'Yuu_Takasaki' },
  { id: 'ayumu-uehara', wiki: 'love-live', title: 'Ayumu_Uehara' },
  { id: 'setsuna-yuki', wiki: 'love-live', title: 'Setsuna_Yuki' },
  { id: 'aki-mizuguchi', wiki: 'yuri', title: 'Aki_Mizuguchi' },
  { id: 'shiho-izumi', wiki: 'yuri', title: 'Shiho_Izumi' },
  { id: 'villhaze', wiki: 'yuri', title: 'Villhaze' },
  { id: 'mai-koshiba', wiki: 'yuri', title: 'Mai_Koshiba' },
  { id: 'sumika-chibana', wiki: 'yuri', title: 'Sumika_Chibana' },
  { id: 'kanoko-mamiya', wiki: 'yuri', title: 'Kanoko_Mamiya' },
  { id: 'konatsu-amano', wiki: 'yuri', title: 'Konatsu_Amano' },
  { id: 'koyuki-honami', wiki: 'yuri', title: 'Koyuki_Honami' },
  { id: 'saki-miyanaga', wiki: 'yuri', title: 'Saki_Miyanaga' },
  { id: 'nodoka-haramura', wiki: 'yuri', title: 'Nodoka_Haramura' },
  { id: 'yuuna-yuuki', wiki: 'yuri', title: 'Yuki_Yuna' },
  { id: 'mimori-tougou', wiki: 'yuri', title: 'Mimori_Togo' },
  { id: 'yoshika-miyafuji', wiki: 'yuri', title: 'Yoshika_Miyafuji' },
  { id: 'mio-sakamoto', wiki: 'yuri', title: 'Mio_Sakamoto' },
  { id: 'tokai-teio', wiki: 'yuri', title: 'Tokai_Teio' },
  { id: 'mejiro-mcqueen', wiki: 'yuri', title: 'Mejiro_McQueen' },
  { id: 'special-week', wiki: 'yuri', title: 'Special_Week' },
  { id: 'silence-suzuka', wiki: 'yuri', title: 'Silence_Suzuka' },
  { id: 'sun-jing', wiki: 'yuri', title: 'Sun_Jing' },
  { id: 'qiu-tong', wiki: 'yuri', title: 'Qiu_Tong' },
  { id: 'evangeline', wiki: 'yuri', title: 'Evangeline' },
  { id: 'elsa', wiki: 'yuri', title: 'Elsa' },
  { id: 'sung-sumin', wiki: 'yuri', title: 'Sung_Sumin' },
  { id: 'baek-seju', wiki: 'yuri', title: 'Baek_Seju' }
];

async function checkAll() {
  const results = {};
  for (const c of characterCandidates) {
    let domain = 'yuri.fandom.com';
    if (c.wiki === 'bocchi-the-rock') domain = 'bocchi-the-rock.fandom.com';
    else if (c.wiki === 'gundam') domain = 'gundam.fandom.com';
    else if (c.wiki === 'bandori') domain = 'bandori.fandom.com';
    else if (c.wiki === 'love-live') domain = 'love-live.fandom.com';

    try {
      const url = `https://${domain}/api.php?action=query&titles=${encodeURIComponent(c.title)}&prop=pageimages&format=json&pithumbsize=400`;
      const res = await fetch(url);
      const data = await res.json();
      const page = Object.values(data.query?.pages || {})[0];
      const thumb = page?.thumbnail?.source;
      if (thumb) {
        results[c.id] = thumb;
        console.log(`[OK] ${c.id}: ${thumb.slice(0, 60)}...`);
      } else {
        console.log(`[MISSING] ${c.id} on ${domain}`);
      }
    } catch (e) {
      console.error(c.id, e.message);
    }
    await new Promise(r => setTimeout(r, 200));
  }

  fs.writeFileSync('scripts/fetched_new_chars.json', JSON.stringify(results, null, 2));
  console.log(`Finished checking. Total found: ${Object.keys(results).length}`);
}

checkAll();
