const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');
const series = eval(content.slice(content.indexOf('['), content.lastIndexOf(']') + 1));

const domains = {};
series.forEach(s => {
  try {
    const u = new URL(s.coverImage);
    domains[u.hostname] = (domains[u.hostname] || 0) + 1;
  } catch (e) {
    domains['invalid'] = (domains['invalid'] || 0) + 1;
  }
});
console.log('Cover domains:', domains);
