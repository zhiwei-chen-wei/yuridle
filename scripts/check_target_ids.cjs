const fs = require('fs');
const series = eval(fs.readFileSync('src/data/yuriSeries.ts', 'utf8').replace(/import[\s\S]*?=\s*/, ''));
console.log('Adachi series:', series.filter(s => s.title.toLowerCase().includes('adachi') || s.id.includes('adachi')).map(s => ({ id: s.id, title: s.title })));
console.log('Mercury series:', series.filter(s => s.title.toLowerCase().includes('mercury') || s.id.includes('mercury')).map(s => ({ id: s.id, title: s.title })));
