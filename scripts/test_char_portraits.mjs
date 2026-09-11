// Test Yuripedia pageimages for characters
const charNames = [
  'Haruka_Tenoh',
  'Michiru_Kaioh',
  'Shizuru_Fujino',
  'Natsuki_Kuga',
  'Satou_Matsuzaka',
  'Hotaru_Mizushina',
  'Eli_Ayase',
  'Nozomi_Tojo',
  'Hime_Shiraki',
  'Mitsuki_Yano',
  'Kou_Yagami',
  'Rin_Toyama',
  'Sumika_Murasame',
  'Ushio_Kazama',
  'Anne_(Manaria_Friends)',
  'Grea'
];

async function checkChars() {
  for (const name of charNames) {
    try {
      const url = `https://yuri.fandom.com/api.php?action=query&titles=${name}&prop=pageimages&format=json&pithumbsize=400`;
      const res = await fetch(url);
      const data = await res.json();
      const page = Object.values(data.query?.pages || {})[0];
      const thumb = page?.thumbnail?.source;
      console.log(name, '->', thumb ? thumb.slice(0, 80) + '...' : 'NONE');
    } catch (e) {
      console.error(name, e.message);
    }
  }
}

checkChars();
