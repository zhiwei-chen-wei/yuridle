import fs from 'fs';

const content = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const avatarRegex = /avatar:\s*['"]([^'"]+)['"]/g;
const nameRegex = /name:\s*['"]([^'"]+)['"]/g;
const avatars = [...content.matchAll(avatarRegex)].map(m => m[1]);
const names = [...content.matchAll(nameRegex)].map(m => m[1]);

console.log(`Checking all ${avatars.length} character portraits...`);

async function check() {
  let failed = 0;
  for (let i = 0; i < avatars.length; i++) {
    const url = avatars[i];
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.status >= 400) {
        console.error(`[FAIL] ${names[i]} (${res.status}): ${url}`);
        failed++;
      }
    } catch (e) {
      console.error(`[ERROR] ${names[i]}: ${e.message}`);
      failed++;
    }
    await new Promise(r => setTimeout(r, 40));
  }
  console.log(`Avatar check complete! Total: ${avatars.length}, Failed: ${failed}`);
}

check();
