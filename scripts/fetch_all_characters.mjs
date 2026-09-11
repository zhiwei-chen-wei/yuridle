import fs from 'fs';

const charsCode = fs.readFileSync('./src/data/yuriCharacters.ts', 'utf-8');

const regex = /id:\s*'([^']+)',\s*name:\s*'([^']+)'/g;
let m;
const charList = [];
while ((m = regex.exec(charsCode)) !== null) {
  charList.push({ id: m[1], name: m[2] });
}

console.log(`Found ${charList.length} characters.`);

async function fetchChar(item) {
  const queryNames = [
    item.name,
    item.name.replace(/\s*\([^)]*\)/, ''), // e.g. "Yuuko Yoshida (Shamiko)" -> "Yuuko Yoshida"
    item.name.split(' ')[0],
    item.name.split(' ').reverse().join(' ')
  ];

  for (const n of queryNames) {
    try {
      const res = await fetch(`https://kitsu.io/api/edge/characters?filter[name]=${encodeURIComponent(n)}&page[limit]=1`);
      const d = await res.json();
      if (d.data && d.data[0]) {
        const img = d.data[0].attributes?.image?.original || d.data[0].attributes?.image?.medium;
        if (img) {
          return { id: item.id, name: item.name, matched: d.data[0].attributes.canonicalName, avatar: img };
        }
      }
    } catch {
      // continue
    }
  }
  return { id: item.id, name: item.name, avatar: null };
}

async function run() {
  const map = {};
  for (let i = 0; i < charList.length; i++) {
    const item = charList[i];
    console.log(`[${i+1}/${charList.length}] Fetching for ${item.name}...`);
    const r = await fetchChar(item);
    map[item.id] = r.avatar;
    console.log(`  -> ${r.matched || 'NOT FOUND'}: ${r.avatar}`);
    await new Promise(r => setTimeout(r, 400));
  }
  fs.writeFileSync('./scripts/characters_result.json', JSON.stringify(map, null, 2));
  console.log('Saved to ./scripts/characters_result.json');
}

run();
