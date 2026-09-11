import fs from 'fs';

const EXTRA_4 = [
  {
    seriesId: 'sakura-trick',
    seriesTitle: 'Sakura Trick',
    emojis: ['🌸', '💋', '🏫', '🎀'],
    clues: [
      'A secret kiss shared in the empty classroom behind closed doors',
      'Two best friends worried about drifting apart when entering high school',
      'Pink cherry blossom petals fluttering across blushing confessions',
      'The iconic romantic comedy between Haruka Takayama and Yuu Sonoda'
    ]
  },
  {
    seriesId: 'asagao-to-kase-san',
    seriesTitle: 'Kase-san and Morning Glories',
    emojis: ['🌱', '🏃‍♀️', '🌺', '🥪'],
    clues: [
      'Tending to the green morning glory sprouts by the school flower bed',
      'The sprint ace track and field star wearing sneakers and ribbons',
      'Sharing bento sandwiches on the windy school rooftop',
      'The sweet blossoming romance between shy Yamada and athletic Kase-san'
    ]
  },
  {
    seriesId: 'new-game',
    seriesTitle: 'New Game!',
    emojis: ['🎮', '🏢', '🎨', '💼'],
    clues: [
      'Game development company Eagle Jump crafting Fairies Story 3',
      'Overtime development nights sleeping on office sofas in pantyhose',
      '3D character modeler Aoba learning the ropes from art director Kou',
      'Late night coffee runs, cute business suits, and warm corporate camaraderie'
    ]
  },
  {
    seriesId: 'miss-kobayashis-dragon-maid',
    seriesTitle: "Miss Kobayashi's Dragon Maid",
    emojis: ['🐉', '🧹', '🥩', '👓'],
    clues: [
      'A divine chaos dragon taking up residence as a domestic live-in maid',
      'Cleaning apartments, doing laundry with dragon magic, and shopping in Tokyo',
      'Insistently attempting to feed roasted tail meat to her beloved master',
      'Warm, chaotic domestic life with weary software engineer Kobayashi'
    ]
  }
];

const content = fs.readFileSync('src/data/yuriEmojis.ts', 'utf8');
const endIdx = content.lastIndexOf(']');

function formatRiddle(r) {
  return `  {
    seriesId: ${JSON.stringify(r.seriesId)},
    seriesTitle: ${JSON.stringify(r.seriesTitle)},
    emojis: [${r.emojis.map(e => JSON.stringify(e)).join(', ')}],
    clues: [
${r.clues.map(c => `      ${JSON.stringify(c)}`).join(',\n')}
    ]
  }`;
}

const newEntriesString = ',\n' + EXTRA_4.map(formatRiddle).join(',\n');
const updatedContent = content.slice(0, endIdx) + newEntriesString + '\n' + content.slice(endIdx);

fs.writeFileSync('src/data/yuriEmojis.ts', updatedContent, 'utf8');

const finalCount = [...updatedContent.matchAll(/seriesId:\s*['"]([^'"]+)['"]/g)].length;
console.log('Total emoji riddles now:', finalCount);
