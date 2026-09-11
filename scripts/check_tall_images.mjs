import fs from 'fs';

const content = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const avatarRegex = /avatar:\s*['"]([^'"]+)['"]/g;
const nameRegex = /name:\s*['"]([^'"]+)['"]/g;
const avatars = [...content.matchAll(avatarRegex)].map(m => m[1]);
const names = [...content.matchAll(nameRegex)].map(m => m[1]);

async function getDimensions(url) {
  try {
    const res = await fetch(url, { headers: { 'Range': 'bytes=0-4096' } });
    const buf = Buffer.from(await res.arrayBuffer());
    
    // PNG check
    if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504E47) {
      const width = buf.readUInt32BE(16);
      const height = buf.readUInt32BE(20);
      return { width, height, ratio: height / width, type: 'png' };
    }
    // JPEG check
    let offset = 2;
    while (offset < buf.length - 8) {
      if (buf[offset] !== 0xFF) break;
      const marker = buf[offset + 1];
      if (marker === 0xC0 || marker === 0xC2) {
        const height = buf.readUInt16BE(offset + 5);
        const width = buf.readUInt16BE(offset + 7);
        return { width, height, ratio: height / width, type: 'jpeg' };
      }
      const len = buf.readUInt16BE(offset + 2);
      offset += 2 + len;
    }
  } catch(e) {}
  return null;
}

async function run() {
  console.log(`Checking ${avatars.length} character images...`);
  const tallImages = [];
  for (let i = 0; i < avatars.length; i++) {
    const dim = await getDimensions(avatars[i]);
    if (dim) {
      if (dim.ratio > 1.25) {
        tallImages.push({ 
          index: i,
          name: names[i], 
          ratio: dim.ratio.toFixed(2), 
          width: dim.width, 
          height: dim.height, 
          url: avatars[i] 
        });
      }
    }
    await new Promise(r => setTimeout(r, 20));
  }
  console.log(`Found ${tallImages.length} tall/full-body images!`);
  fs.writeFileSync('scripts/tall_images.json', JSON.stringify(tallImages, null, 2));
  tallImages.forEach(t => console.log(`  ${t.name} (${t.ratio}) -> ${t.width}x${t.height}`));
}

run();
