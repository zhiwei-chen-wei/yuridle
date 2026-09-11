const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8');

const queries = [
  'amayo', 'rainy night',
  'kobushi', 'catch these hands',
  'asumi',
  'ikemen kanojo', 'sheltered girl',
  'straight girl trap',
  'relationship guidelines',
  'night owls',
  'soulmate',
  'shino to ren'
];

queries.forEach(q => {
  const found = content.toLowerCase().includes(q.toLowerCase());
  console.log(`${q}: ${found ? 'FOUND' : 'NOT found'}`);
});
