import fs from 'fs';

let content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

// Replace "medium": "Manhwa" or 'medium': 'Manhwa' with 'Manhwa/Webtoon'
content = content.replace(/medium:\s*['"]Manhwa['"]/g, "medium: 'Manhwa/Webtoon'");
content = content.replace(/medium:\s*['"]Webtoon['"]/g, "medium: 'Manhwa/Webtoon'");

// Replace setting: 'College/University' with 'College/Adult'
content = content.replace(/setting:\s*['"]College\/University['"]/g, "setting: 'College/Adult'");

// Replace setting: 'Historical/Period' with 'Historical'
content = content.replace(/setting:\s*['"]Historical\/Period['"]/g, "setting: 'Historical'");

fs.writeFileSync('src/data/yuriSeries.ts', content, 'utf8');
console.log('Normalized yuriSeries.ts!');
