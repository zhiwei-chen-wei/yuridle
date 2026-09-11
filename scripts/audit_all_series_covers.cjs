const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const regex = /{\s*(?:["']?id["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?title["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?romaji["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?medium["']?:\s*['"]([^'"]+)['"][\s\S]*?["']?coverImage["']?:\s*['"]([^'"]+)['"][\s\S]*?})/g;

let m;
const seriesList = [];
while ((m = regex.exec(content)) !== null) {
  seriesList.push({
    id: m[1],
    title: m[2],
    romaji: m[3],
    medium: m[4],
    cover: m[5]
  });
}

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

function clean(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isMatch(ourTitle, ourRomaji, kitsuTitle, kitsuTitlesObj) {
  const cOurTitle = clean(ourTitle);
  const cOurRomaji = clean(ourRomaji);
  
  const allKitsu = [
    kitsuTitle,
    ...(kitsuTitlesObj ? Object.values(kitsuTitlesObj) : [])
  ].filter(Boolean).map(clean);

  for (const k of allKitsu) {
    if (!k) continue;
    if (k === cOurTitle || k === cOurRomaji) return true;
    if (k.length > 5 && (cOurTitle.includes(k) || k.includes(cOurTitle))) return true;
    if (k.length > 5 && (cOurRomaji.includes(k) || k.includes(cOurRomaji))) return true;
  }
  return false;
}

async function audit() {
  console.log(`Starting audit on ${seriesList.length} series...`);
  const mismatches = [];
  const correct = [];

  for (let i = 0; i < seriesList.length; i++) {
    const s = seriesList[i];
    const kitsuMatch = s.cover.match(/media\.kitsu\.app\/(anime|manga)\/(?:poster_images\/)?(\d+)/) ||
                       s.cover.match(/media\.kitsu\.app\/(anime|manga)\/(\d+)\/poster_image/);
    
    if (!kitsuMatch) {
      // MangaDex or external
      console.log(`[EXTERNAL] ${s.id} -> ${s.cover}`);
      continue;
    }

    const type = kitsuMatch[1];
    const kitsuId = kitsuMatch[2];

    const json = await fetchJson(`https://kitsu.io/api/edge/${type}/${kitsuId}`);
    const attr = json?.data?.attributes;
    const kitsuTitle = attr?.canonicalTitle || '';
    const kitsuTitles = attr?.titles || {};

    if (!isMatch(s.title, s.romaji, kitsuTitle, kitsuTitles)) {
      console.log(`MISMATCH [${i+1}/${seriesList.length}] ${s.id} ("${s.title}") != Kitsu "${kitsuTitle}" (Kitsu ID ${kitsuId})`);
      mismatches.push({
        seriesId: s.id,
        title: s.title,
        romaji: s.romaji,
        medium: s.medium,
        currentCover: s.cover,
        kitsuType: type,
        kitsuId,
        kitsuTitle
      });
    } else {
      correct.push(s.id);
    }

    // small delay to prevent rate limits
    await new Promise(r => setTimeout(r, 80));
  }

  console.log(`\nAudit finished! Correct: ${correct.length}, Mismatched: ${mismatches.length}`);
  fs.writeFileSync('scripts/mismatched_covers.json', JSON.stringify(mismatches, null, 2), 'utf8');
}

audit();
