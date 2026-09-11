const fs = require('fs');

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

function clean(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function titlesMatch(ourTitle, ourRomaji, kitsuTitle, kitsuTitlesObj) {
  const cTitle = clean(ourTitle);
  const cRomaji = clean(ourRomaji);
  
  const allKitsu = [
    kitsuTitle,
    ...(kitsuTitlesObj ? Object.values(kitsuTitlesObj) : [])
  ].filter(Boolean).map(clean);

  for (const k of allKitsu) {
    if (!k) continue;
    if (k === cTitle || k === cRomaji) return true;
    if (k.length >= 4 && (cTitle.includes(k) || k.includes(cTitle))) return true;
    if (k.length >= 4 && (cRomaji.includes(k) || k.includes(cRomaji))) return true;
  }
  return false;
}

async function fetchWithTimeout(url, timeoutMs = 4000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    clearTimeout(id);
    if (!res.ok) return { status: res.status, data: null };
    const json = await res.json();
    return { status: res.status, data: json };
  } catch (err) {
    clearTimeout(id);
    return { status: 'ERR', error: err.message };
  }
}

async function main() {
  console.log(`Auditing ${seriesList.length} series...`);
  const mismatches = [];
  const verified = [];

  // Batch process 5 at a time
  for (let i = 0; i < seriesList.length; i += 5) {
    const batch = seriesList.slice(i, i + 5);
    await Promise.all(batch.map(async (s) => {
      const match = s.cover.match(/media\.kitsu\.app\/(anime|manga)\/(?:poster_images\/)?(\d+)/) ||
                    s.cover.match(/media\.kitsu\.app\/(anime|manga)\/(\d+)\/poster_image/);
      
      if (!match) {
        // MangaDex or external CDN
        verified.push({ id: s.id, type: 'external', cover: s.cover });
        return;
      }

      const type = match[1];
      const kitsuId = match[2];

      const res = await fetchWithTimeout(`https://kitsu.io/api/edge/${type}/${kitsuId}`);
      if (!res.data || !res.data.data) {
        console.log(`[API ERROR ${res.status}] ${s.id} (ID ${kitsuId})`);
        mismatches.push({
          id: s.id,
          title: s.title,
          romaji: s.romaji,
          medium: s.medium,
          currentCover: s.cover,
          reason: 'API_ERROR_OR_NOT_FOUND',
          kitsuId,
          type
        });
        return;
      }

      const attr = res.data.data.attributes;
      const kTitle = attr.canonicalTitle || '';
      const kTitles = attr.titles || {};

      if (!titlesMatch(s.title, s.romaji, kTitle, kTitles)) {
        console.log(`MISMATCH: "${s.title}" (${s.id}) != Kitsu "${kTitle}" (${type} ID ${kitsuId})`);
        mismatches.push({
          id: s.id,
          title: s.title,
          romaji: s.romaji,
          medium: s.medium,
          currentCover: s.cover,
          reason: 'TITLE_MISMATCH',
          kitsuId,
          type,
          actualKitsuTitle: kTitle
        });
      } else {
        verified.push({ id: s.id, type: 'kitsu', title: kTitle });
      }
    }));
    // small pause
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`\nAudit Complete!`);
  console.log(`Verified Correct: ${verified.length}`);
  console.log(`Mismatches Found: ${mismatches.length}`);
  fs.writeFileSync('scripts/mismatched_report.json', JSON.stringify(mismatches, null, 2), 'utf8');
}

main();
