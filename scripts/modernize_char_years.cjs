const fs = require('fs');

function parseTs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  const jsonStr = content.slice(start, end + 1);
  return eval(jsonStr);
}

function writeTs(filePath, exportName, typeName, data) {
  const tsContent = `import { ${typeName} } from '../types/yuri';\n\nexport const ${exportName}: ${typeName}[] = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(filePath, tsContent, 'utf8');
  console.log(`Wrote ${data.length} items to ${filePath}`);
}

const chars = parseTs('src/data/yuriCharacters.ts');

const charYearMap = {
  'yui-funami': 2011,
  'kyoko-toshino': 2011,
  'azusa-nakano': 2010,
  'yui-hirasawa': 2010,
  'ritsu-tainaka': 2010,
  'mio-akiyama': 2010,
  'saki-miyanaga': 2012,
  'nodoka-haramura': 2012,
  'yoshika-miyafuji': 2010,
  'mio-sakamoto': 2010
};

const updated = chars.map(c => {
  if (charYearMap[c.id]) {
    return { ...c, debutYear: charYearMap[c.id] };
  }
  return c;
});

writeTs('src/data/yuriCharacters.ts', 'YURI_CHARACTERS', 'YuriCharacter', updated);
console.log("Modernized all remaining character debut years to 2010+!");
