import fs from 'fs';

const content = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const newChars = JSON.parse(fs.readFileSync('scripts/verified_new_characters.json', 'utf8'));

// Extract existing characters code array or parse
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not locate array brackets in yuriCharacters.ts');
  process.exit(1);
}

// Check for duplicate IDs
const existingIds = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Existing character count:', existingIds.length);

const toAdd = newChars.filter(c => !existingIds.includes(c.id));
console.log('Characters to add:', toAdd.length);

// Format the new entries as TS
function formatChar(c) {
  return `  {
    id: ${JSON.stringify(c.id)},
    name: ${JSON.stringify(c.name)},
    nativeName: ${JSON.stringify(c.nativeName)},
    seriesId: ${JSON.stringify(c.seriesId)},
    seriesTitle: ${JSON.stringify(c.seriesTitle)},
    role: ${JSON.stringify(c.role)},
    hairColor: ${JSON.stringify(c.hairColor)},
    archetype: ${JSON.stringify(c.archetype)},
    debutYear: ${c.debutYear},
    quote: ${JSON.stringify(c.quote)},
    avatar: ${JSON.stringify(c.avatar)},
    pairingWith: ${JSON.stringify(c.pairingWith)},
    aliases: ${JSON.stringify(c.aliases)}
  }`;
}

const newEntriesString = ',\n' + toAdd.map(formatChar).join(',\n');

// Insert before the closing bracket
const updatedContent = content.slice(0, endIdx) + newEntriesString + '\n' + content.slice(endIdx);

fs.writeFileSync('src/data/yuriCharacters.ts', updatedContent, 'utf8');
console.log('Successfully updated src/data/yuriCharacters.ts!');

// Count final
const finalIds = [...updatedContent.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Final unique characters in yuriCharacters.ts:', new Set(finalIds).size);
