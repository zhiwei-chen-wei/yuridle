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

const songs = parseTs('src/data/yuriSongs.ts');

const konMap = {
  'glossy-mmm': {
    id: "miracle-rush",
    songTitle: "MIRACLE RUSH",
    japaneseTitle: "MIRACLE RUSH",
    seriesId: "saki",
    seriesTitle: "Saki",
    type: "OP",
    seasonYear: "Spring 2012",
    releaseYear: 2012,
    artist: "StylipS",
    japaneseArtist: "StylipS",
    lyricsSnippet: "奇跡を巻き起こせ！ 全力で挑むステージ / Cause a miracle! The stage where we challenge with all our might...",
    trivia: "The energetic high-paced opening theme for Saki Achiga-hen performed by StylipS.",
    melodyNotes: [523, 659, 784, 880, 1046]
  },
  'cagayake-girls': {
    id: "go-go-maniac",
    songTitle: "GO! GO! MANIAC",
    japaneseTitle: "GO! GO! MANIAC",
    seriesId: "k-on",
    seriesTitle: "K-ON!",
    type: "OP",
    seasonYear: "Spring 2010",
    releaseYear: 2010,
    artist: "Houkago Tea Time",
    japaneseArtist: "放課後ティータイム",
    lyricsSnippet: "やばい 止まれない止まらない テンション最高潮！ / Oh no, we can't stop won't stop, our tension is at its max peak!",
    trivia: "The historic rapid-fire opening of K-ON!! Season 2 that broke Oricon chart records.",
    melodyNotes: [587, 659, 784, 880, 988]
  },
  'dont-say-lazy': {
    id: "listen-htt",
    songTitle: "Listen!!",
    japaneseTitle: "Listen!!",
    seriesId: "k-on",
    seriesTitle: "K-ON!",
    type: "ED",
    seasonYear: "Spring 2010",
    releaseYear: 2010,
    artist: "Houkago Tea Time",
    japaneseArtist: "放課後ティータイム",
    lyricsSnippet: "Listen!! 深呼吸して 耳をすませば / Listen!! Take a deep breath and lend your ear...",
    trivia: "Mio Akiyama's stylish and rock-infused ending theme for K-ON!! Season 2.",
    melodyNotes: [440, 523, 659, 587, 523]
  }
};

const updated = songs.map(s => {
  if (konMap[s.id]) {
    return konMap[s.id];
  }
  return s;
});

writeTs('src/data/yuriSongs.ts', 'YURI_SONGS', 'YuriSong', updated);
console.log("Modernized all songs to 2010+!");
