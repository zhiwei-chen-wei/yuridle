const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSongs.ts', 'utf8');
const songs = eval(content.slice(content.indexOf('['), content.lastIndexOf(']') + 1));

const under2010 = songs.filter(s => s.releaseYear < 2010);
console.log(`Total songs: ${songs.length}`);
console.log(`Songs releaseYear < 2010: ${under2010.length}`);
if (under2010.length > 0) {
  under2010.forEach(s => console.log(`- [${s.releaseYear}] ${s.id} (${s.songTitle})`));
}
