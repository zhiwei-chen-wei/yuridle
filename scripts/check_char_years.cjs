const fs = require('fs');
const content = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const chars = eval(content.slice(content.indexOf('['), content.lastIndexOf(']') + 1));

const under2010 = chars.filter(c => c.debutYear < 2010);
console.log(`Total characters: ${chars.length}`);
console.log(`Characters debut < 2010: ${under2010.length}`);
if (under2010.length > 0) {
  under2010.forEach(c => console.log(`- [${c.debutYear}] ${c.id} (${c.name}) from ${c.seriesId}`));
}
