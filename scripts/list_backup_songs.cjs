const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSongs.ts.bak', 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
const songs = eval(content.slice(start, end + 1));
console.log('Total songs in backup:', songs.length);
console.log('Song IDs in backup:');
console.log(songs.map(s => s.id).join(', '));
