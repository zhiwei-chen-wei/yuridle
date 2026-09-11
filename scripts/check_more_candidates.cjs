const fs = require('fs');
const content = fs.readFileSync('src/data/yuriSeries.ts', 'utf8').toLowerCase();

const candidates = [
  'shino to ren',
  'destroy it all and love me in hell',
  'bad thinking diary',
  'not so shoujo love story',
  'please bully me, miss villainess',
  'night owls & summer skies',
  'kill me now',
  'opium',
  'baili jin',
  'my food seems to be very cute',
  'semelparous',
  'taming grace',
  'her lies',
  'salvation',
  'greenhouse'
];

candidates.forEach(c => {
  console.log(`${c}: ${content.includes(c.toLowerCase()) ? 'EXISTS' : 'MISSING'}`);
});
