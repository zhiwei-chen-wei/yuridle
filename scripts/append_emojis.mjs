import fs from 'fs';

const NEW_RIDDLES = [
  {
    seriesId: 'revue-starlight',
    seriesTitle: 'Revue Starlight',
    emojis: ['🦒', '⚔️', '👑', '🗼'],
    clues: [
      'A mysterious talking Giraffe overseeing theatrical underground duels',
      'Fierce sword and dagger revues where shining stage buttons are cut',
      'The glorious crown and mantle awarded to Position Zero',
      'Childhood promise under the Tokyo Tower to shine on the Starlight stage'
    ]
  },
  {
    seriesId: 'simoun',
    seriesTitle: 'Simoun',
    emojis: ['🛸', '💋', '🛩️', '✝️'],
    clues: [
      'Two-seater airships powered by helical motors and ancient sacred engines',
      'The ritual kiss between Sibyllae required to activate navigation',
      'A theocratic nation at war where all girls are born female until choosing a gender at 17',
      'The sacred Tempus Spatium emerald flight prayer Ri Maajon'
    ]
  },
  {
    seriesId: 'kashimashi',
    seriesTitle: 'Kashimashi: Girl Meets Girl',
    emojis: ['👽', '🌸', '📻', '👭'],
    clues: [
      'An alien spacecraft crash on Mount Kashimayama causing a sudden rebirth',
      'Biological transformation into a girl after an extraterrestrial resurrection',
      'Amateur ham radio equipment and mountain flower gardens',
      'A nostalgic, tender love triangle between two childhood friends'
    ]
  },
  {
    seriesId: 'strawberry-panic',
    seriesTitle: 'Strawberry Panic!',
    emojis: ['🍓', '⛪', '🐴', '🍵'],
    clues: [
      'Three prestigious all-girls academies united atop Astraea Hill',
      'The Gothic St. Miator cathedral and shared grand library',
      'Shizuma Hanazono\'s white horse riding and aristocratic presence',
      'Afternoon greenhouse tea parties and the crowning of the sole Étoile'
    ]
  },
  {
    seriesId: 'vampire-in-the-garden',
    seriesTitle: 'Vampire in the Garden',
    emojis: ['🧛‍♀️', '❄️', '🎵', '🏰'],
    clues: [
      'A vampire queen who abandoned bloodshed for the beauty of music',
      'A snowy trek beyond the human militarized walled city',
      'A nostalgic music box melody sung in harmony across species',
      'A search for the legendary Eden sanctuary where humans and vampires live in peace'
    ]
  },
  {
    seriesId: 'adachi-and-shimamura',
    seriesTitle: 'Adachi and Shimamura',
    emojis: ['🏓', '🍩', '🛸', '🎒'],
    clues: [
      'Skipping high school classes to play table tennis on the second floor of the gym',
      'Sharing sweet snacks and donuts on cold winter train platforms',
      'A self-proclaimed astronaut girl wandering the streets in a space suit',
      'A yearning, possessive romance blooming from quiet truancy'
    ]
  },
  {
    seriesId: 'watamote',
    seriesTitle: 'No Matter How I Look at It, It\'s You Guys\' Fault I\'m Not Popular!',
    emojis: ['🎮', '🐼', '😵', '🏫'],
    clues: [
      'Countless hours spent playing otome dating simulators and voice dramas',
      'Dark eyebags, unkempt hair, and severe social anxiety panic attacks',
      'Awkward high school attempts to become popular with classmates',
      'Unintentionally surrounded by a colorful circle of eccentric schoolgirls'
    ]
  },
  {
    seriesId: 'flip-flappers',
    seriesTitle: 'Flip Flappers',
    emojis: ['🌀', '🛹', '🌈', '🐇'],
    clues: [
      'Jumping through dimensional portals into the vibrant realm of Pure Illusion',
      'Riding a floating hoverboard through candy-coated and sci-fi landscapes',
      'Magical girl transformations bursting with rainbow color spectrums',
      'A robotic companion and a search for mystical amorphous fragments'
    ]
  },
  {
    seriesId: 'princess-principal',
    seriesTitle: 'Princess Principal',
    emojis: ['🕵️‍♀️', '🎩', '☁️', '🇬🇧'],
    clues: [
      'Undercover teenage spies masquerading as Queen\'s Mayfair Academy students',
      'Victorian steampunk London divided by the monumental London Wall',
      'Cavorite gravity-defying spheres manipulated during daring heists',
      'The undercover promise between Ange and the Royal Princess to change the kingdom'
    ]
  },
  {
    seriesId: 'izetta',
    seriesTitle: 'Izetta: The Last Witch',
    emojis: ['🧙‍♀️', '🔫', '✈️', '🏰'],
    clues: [
      'The Last Witch carrying an enchanted anti-tank rifle through the clouds',
      'Defending the alpine principality of Eylstadt during alternate World War II',
      'Dodging enemy fighter planes with telekinetically hurled ancient lances',
      'Unshakable loyalty and devotion to Princess Finé'
    ]
  },
  {
    seriesId: 'cross-ange',
    seriesTitle: 'Cross Ange: Rondo of Angel and Dragon',
    emojis: ['🐉', '🏍️', '⛓️', '💍'],
    clues: [
      'Outcast "Norma" women stripped of royalty and exiled to an island fortress',
      'Transformable Para-mail mecha fighting savage DRAGON invaders',
      'Princess Angelise learning bitter survival alongside fierce comrades',
      'Overthrowing a false god to create a world where women rule their own destiny'
    ]
  },
  {
    seriesId: 'kakegurui',
    seriesTitle: 'Kakegurui – Compulsive Gambler',
    emojis: ['🎲', '🃏', '💅', '🐍'],
    clues: [
      'Hyakkaou Private Academy governed by high-stakes gambling syndicates',
      'Decks of poker cards, Russian roulette, and life-plan debts',
      'Red painted nails and ecstatic thrills of absolute financial risk',
      'Compulsive gambler Yumeko Jabami unraveling the student council'
    ]
  },
  {
    seriesId: 'senran-kagura',
    seriesTitle: 'Senran Kagura',
    emojis: ['🥷', '📜', '🍥', '🌸'],
    clues: [
      'Modern teenage kunoichi training in secret shinobi academies',
      'Sacred ninjutsu scrolls granting elemental transformation powers',
      'Shinobi secret arts bursting clothes and unleashing fierce martial bonds',
      'Fierce sisterhood between rivals from Hanzo Academy and Hebijo'
    ]
  },
  {
    seriesId: 'yuuki-yuuna',
    seriesTitle: 'Yuki Yuna is a Hero',
    emojis: ['🌸', '📱', '🧚', '🕊️'],
    clues: [
      'Hero Club junior high school girls receiving divine smartphone alerts',
      'Spiritual fairies offering mystical barriers against Vertex invaders',
      'Mankai blooming forms demanding devastating physical bodily sacrifices',
      'Protecting the sacred divine tree Shinju to safeguard humanity\'s final refuge'
    ]
  },
  {
    seriesId: 'assault-lily-bouquet',
    seriesTitle: 'Assault Lily: Bouquet',
    emojis: ['🌸', '🗡️', '🛡️', '🎓'],
    clues: [
      'Teenage "Lilies" wielding transformable CHARM science-magic weapons',
      'Defending humanity against the mysterious colossal monsters called Huge',
      'Garden academies like Yurigaoka where senpai and kouhai form Schutzengel pacts',
      'Riri Hitotsuyanagi striving to stand alongside her admired savior Yuyu'
    ]
  },
  {
    seriesId: 'valkyrie-drive-mermaid',
    seriesTitle: 'Valkyrie Drive: Mermaid',
    emojis: ['⚔️', '💋', '🏝️', '💥'],
    clues: [
      'Artificial island Mermaid where girls infected with the Armed Virus are quarantined',
      'An intimate, passionate kiss triggering weapon transformation into divine blades',
      'Extravagant combat fueled by ecstatic emotional resonance and physical arousal',
      'Mirei and Mamori uncovering the dark conspiracies behind the quarantine islands'
    ]
  },
  {
    seriesId: 'ange-vierge',
    seriesTitle: 'Ange Vierge',
    emojis: ['🎴', '🌌', '🔮', '👭'],
    clues: [
      'Five converging alternate worlds facing an existential collapse',
      'The isolated Seiran Academy on the Pacific Ocean training gifted "Progress" girls',
      'Exceed abilities powered by deep soul linkages between paired partners',
      'Card battle powers manifested into dazzling elemental combat'
    ]
  },
  {
    seriesId: 'strike-witches',
    seriesTitle: 'Strike Witches',
    emojis: ['✈️', '🧙‍♀️', '🐾', '🛡️'],
    clues: [
      'Witches equipping leg-mounted engine propeller Striker Units to fly',
      'Sprouting cute animal ears and tails when channeling defensive magic shields',
      'The 501st Joint Fighter Wing taking to the European skies against the Neuroi',
      'Yoshika Miyafuji\'s immense healing power and unwavering aerial courage'
    ]
  },
  {
    seriesId: 'top-wo-nerae-gunbuster',
    seriesTitle: 'Gunbuster',
    emojis: ['🚀', '🤖', '🌌', '🦾'],
    clues: [
      'Piloting top-secret Buster Machines across relativistic interstellar space',
      'Time dilation separating soldiers from centuries of Earth history',
      'The Inazuma Kick shattering space monster armadas at the galactic core',
      'Enduring ten thousand years in the darkness of space to return to welcoming lights'
    ]
  },
  {
    seriesId: 'granbelm',
    seriesTitle: 'Granbelm',
    emojis: ['🌕', '🧙‍♀️', '🤖', '🪄'],
    clues: [
      'The magical world of Magiaconatus opening under the crimson full moon',
      'Piloting Armanox giant mecha powered by inherited bloodline sorcery',
      'The tragic tournament where defeated participants are erased from human memory',
      'Mangetsu and Shingetsu confronting the truth behind their magical existence'
    ]
  },
  {
    seriesId: 'whispering-you-a-love-song',
    seriesTitle: 'Whispering You a Love Song',
    emojis: ['🎸', '🎤', '🐱', '🎵'],
    clues: [
      'An electric guitar performance at the high school club orientation opening ceremony',
      'Lead singer of SSGIRLS singing acoustic melodies on the windy school rooftop',
      'A stray cat keychain gift marking a sweet confession',
      'Navigating the gap between "love as a fan" and "love as a romantic partner"'
    ]
  },
  {
    seriesId: 'please-bully-me-miss-villainess',
    seriesTitle: 'Please Bully Me, Miss Villainess!',
    emojis: ['🦹‍♀️', '📜', '🍰', '💍'],
    clues: [
      'Reincarnated as a villainess forced to bully the heroine by an authoritative system',
      'System penalty warnings turning into hilarious excuses to feed and pamper Elsa',
      'Delicious strawberry shortcakes and secret tea meetings',
      'A devoted heroine who falls head-over-heels in love with her "cruel" bully'
    ]
  }
];

const content = fs.readFileSync('src/data/yuriEmojis.ts', 'utf8');
const endIdx = content.lastIndexOf(']');

if (endIdx === -1) {
  console.error('Could not find closing bracket in yuriEmojis.ts');
  process.exit(1);
}

// Filter existing seriesIds
const existingIds = [...content.matchAll(/seriesId:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Existing emoji riddles:', existingIds.length);

const toAdd = NEW_RIDDLES.filter(r => !existingIds.includes(r.seriesId));
console.log('Riddles to add:', toAdd.length);

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

const newEntriesString = ',\n' + toAdd.map(formatRiddle).join(',\n');
const updatedContent = content.slice(0, endIdx) + newEntriesString + '\n' + content.slice(endIdx);

fs.writeFileSync('src/data/yuriEmojis.ts', updatedContent, 'utf8');
console.log('Successfully updated src/data/yuriEmojis.ts!');

const finalCount = [...updatedContent.matchAll(/seriesId:\s*['"]([^'"]+)['"]/g)].length;
console.log('Total emoji riddles now:', finalCount);
