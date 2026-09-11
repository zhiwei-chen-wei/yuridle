const fs = require('fs');
const path = require('path');

const map = JSON.parse(fs.readFileSync(path.join(__dirname, 'song_audio_map.json'), 'utf8'));
const filePath = path.join(__dirname, '../src/data/yuriSongs.ts');

let content = fs.readFileSync(filePath, 'utf8');
const start = content.indexOf('[');
const end = content.lastIndexOf(']');
let songs = eval(content.slice(start, end + 1));

console.log('Read', songs.length, 'songs from yuriSongs.ts');

songs = songs.map(s => {
  if (s.id === 'tenshi-ni-fureta-yo') {
    s.songTitle = 'NO, Thank You!';
    s.japaneseTitle = 'NO, Thank You!';
    s.type = 'ED';
    s.lyricsSnippet = 'White board に走り書きの明日の予告 / Jotting tomorrow\'s promises across the whiteboard...';
    s.trivia = 'K-ON!!\'s legendary second ending theme showcasing the girls as a powerful, edgy rock band.';
  } else if (s.id === 'guitar-loneliness') {
    s.songTitle = 'Distortion!!';
    s.japaneseTitle = 'Distortion!!';
    s.type = 'ED';
    s.lyricsSnippet = 'ディストーション、鳴り響いて / Distortion, echoing through the night...';
    s.trivia = 'Bocchi the Rock!\'s energetic, fan-favorite ending theme performed by Kessoku Band.';
  } else if (s.id === 'haruhikage') {
    s.songTitle = 'Shiori';
    s.japaneseTitle = '栞';
    s.type = 'ED';
    s.lyricsSnippet = '栞を挟んだページの先を、もう一度めくるように / Like turning once more to the page marked by a bookmark...';
    s.trivia = 'BanG Dream! It\'s MyGO!!!!!\'s poignant and emotional ending theme.';
  } else if (s.id === 'mayoiuta') {
    s.songTitle = 'Hitoshizuku';
    s.japaneseTitle = '壱雫空';
    s.type = 'OP';
    s.lyricsSnippet = '雨降る街で傘も差さずに、駆け出したんだ / In the rain-soaked streets without an umbrella, I broke into a run...';
    s.trivia = 'BanG Dream! It\'s MyGO!!!!!\'s hard-hitting rock opening theme.';
  }

  const audio = map[s.id];
  if (!audio) {
    console.error('MISSING AUDIO FOR:', s.id);
  }
  return {
    ...s,
    audioUrl: audio || undefined
  };
});

const header = "import { YuriSong } from '../types/yuri';\n\nexport const YURI_SONGS: YuriSong[] = ";
const newContent = header + JSON.stringify(songs, null, 2) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('Successfully injected audioUrl into all ' + songs.length + ' songs in yuriSongs.ts!');
