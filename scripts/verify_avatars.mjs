import fs from 'fs';

const content = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const idRegex = /(?:id|"id"):\s*['"]([^'"]+)['"]/g;
const avatarRegex = /(?:avatar|"avatar"):\s*['"]([^'"]+)['"]/g;

const ids = [...content.matchAll(idRegex)].map(m => m[1]);
const avatars = [...content.matchAll(avatarRegex)].map(m => m[1]);

console.log(`Checking ${ids.length} character avatars...`);

async function run() {
  const failed = [];
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const url = avatars[i];
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Range': 'bytes=0-50'
        }
      });
      if (!res.ok && res.status !== 206 && res.status !== 304) {
        console.error(`[FAIL] ${id} (${res.status}): ${url}`);
        failed.push({ id, url, status: res.status });
      }
    } catch (e) {
      console.error(`[ERR] ${id}: ${e.message}`);
      failed.push({ id, url, error: e.message });
    }
  }

  console.log(`\nResults: ${ids.length - failed.length}/${ids.length} character avatars passed!`);
}

run();
