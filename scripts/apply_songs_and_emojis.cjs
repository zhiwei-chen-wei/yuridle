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

// ----------------------------------------------------
// Step 4: yuriSongs.ts
// ----------------------------------------------------
const songs = parseTs('src/data/yuriSongs.ts.bak');

const songReplacements = {
  'utsukushikereba': {
    id: "hikari-no-senritsu",
    songTitle: "Hikari no Senritsu",
    japaneseTitle: "光の旋律",
    seriesId: "so-ra-no-wo-to",
    seriesTitle: "Sound of the Sky",
    type: "OP",
    seasonYear: "Winter 2010",
    releaseYear: 2010,
    artist: "Kalafina",
    japaneseArtist: "Kalafina",
    lyricsSnippet: "まだ誰も知らない世界へ / To a world that nobody knows yet...",
    trivia: "Kalafina's whimsical and folk-infused opening song for Sound of the Sky composed by Yuki Kajiura.",
    melodyNotes: [523, 587, 659, 784, 880]
  },
  'pastel-pure': {
    id: "kimi-no-tonari-de-adachi",
    songTitle: "Kimi no Tonari de",
    japaneseTitle: "キミのとなりで",
    seriesId: "adachi-and-shimamura",
    seriesTitle: "Adachi and Shimamura",
    type: "ED",
    seasonYear: "Fall 2020",
    releaseYear: 2020,
    artist: "Akari Kito",
    japaneseArtist: "鬼頭明里",
    lyricsSnippet: "君の隣で笑っていたい / I want to be laughing right next to you...",
    trivia: "The gentle, sentimental ending song for Adachi and Shimamura sung by Adachi's voice actress Akari Kito.",
    melodyNotes: [440, 494, 523, 587, 659]
  },
  're-sublimity': {
    id: "soushou-innocent",
    songTitle: "Soushou Innocent",
    japaneseTitle: "創傷イノセンス",
    seriesId: "akuma-no-riddle",
    seriesTitle: "Riddle Story of Devil",
    type: "OP",
    seasonYear: "Spring 2014",
    releaseYear: 2014,
    artist: "Maaya Uchida",
    japaneseArtist: "内田真礼",
    lyricsSnippet: "守るべきものがあるなら どんな痛みさえ恐れない / If there is something worth protecting, I won't fear any pain...",
    trivia: "Maaya Uchida's fierce, high-octane rock debut serving as the opening theme of Riddle Story of Devil.",
    melodyNotes: [587, 659, 698, 784, 880]
  },
  'agony': {
    id: "dream-solister",
    songTitle: "DREAM SOLISTER",
    japaneseTitle: "DREAM SOLISTER",
    seriesId: "hibike-euphonium",
    seriesTitle: "Sound! Euphonium",
    type: "OP",
    seasonYear: "Spring 2015",
    releaseYear: 2015,
    artist: "TRUE",
    japaneseArtist: "TRUE",
    lyricsSnippet: "響け！ 生まれたての夢つかまえて / Resound! Catch hold of that newly born dream...",
    trivia: "The triumphant, brass-heavy opening theme that launched Kyoto Animation's Sound! Euphonium.",
    melodyNotes: [523, 659, 784, 880, 1046]
  },
  'rinbu-revolution': {
    id: "ten-to-sen",
    songTitle: "Ten to Sen",
    japaneseTitle: "点と線",
    seriesId: "stardust-telepath",
    seriesTitle: "Stardust Telepath",
    type: "OP",
    seasonYear: "Fall 2023",
    releaseYear: 2023,
    artist: "Miku Ito",
    japaneseArtist: "伊藤美来",
    lyricsSnippet: "夜空に描く点と線 繋がる軌道 / Connecting dots and lines drawn across the midnight sky...",
    trivia: "The glittering, cosmic opening theme by Miku Ito capturing Umika and Yuu's rocket-building journey.",
    melodyNotes: [523, 587, 659, 784, 880]
  },
  'shoujo-meiro': {
    id: "hoshi-to-hana",
    songTitle: "Hoshi to Hana",
    japaneseTitle: "ホシトハナ",
    seriesId: "yuuki-yuuna",
    seriesTitle: "Yuki Yuna is a Hero",
    type: "OP",
    seasonYear: "Fall 2014",
    releaseYear: 2014,
    artist: "Sanshuu Middle School Hero Club",
    japaneseArtist: "讃州中学勇者部",
    lyricsSnippet: "私たちは歩き出す 勇気の足音響かせて / We take our steps forward, letting the sound of our courage echo...",
    trivia: "The stirring, emotional anthem sung by the core voice cast of Yuki Yuna is a Hero.",
    melodyNotes: [440, 523, 659, 587, 523]
  },
  'aoi-hana-op': {
    id: "kokoro-ni-tsubomi",
    songTitle: "Kokoro ni Tsubomi",
    japaneseTitle: "ココロニツボミ",
    seriesId: "konohana-kitan",
    seriesTitle: "Konohana Kitan",
    type: "OP",
    seasonYear: "Fall 2017",
    releaseYear: 2017,
    artist: "eufonius",
    japaneseArtist: "eufonius",
    lyricsSnippet: "ふわり舞い散る花びら 包まれてゆく / Gently fluttering flower petals surround us in warm light...",
    trivia: "The ethereal, tranquil opening theme by eufonius welcoming viewers to the Konohanatei spirit inn.",
    melodyNotes: [494, 523, 587, 659, 784]
  },
  'kanashii-hodo-aoku': {
    id: "hana-wa-odori-ya-iroha-ni-ho",
    songTitle: "Hana wa Odori ya Iroha ni ho",
    japaneseTitle: "花ハ踊レヤいろはにほ",
    seriesId: "hanayamata",
    seriesTitle: "Hanayamata",
    type: "OP",
    seasonYear: "Summer 2014",
    releaseYear: 2014,
    artist: "Team Hanayamata",
    japaneseArtist: "チーム“ハナヤマタ”",
    lyricsSnippet: "パッとパッと咲かせましょう 花ハ踊レヤいろはにほ / Let it burst into full bloom! Flowers dance merrily...",
    trivia: "The incredibly vibrant yosakoi festival theme featuring traditional instruments and exuberant singing.",
    melodyNotes: [523, 659, 784, 880, 1046]
  },
  'sasameki-ed': {
    id: "memories-comic-girls",
    songTitle: "Memories",
    japaneseTitle: "Memories",
    seriesId: "comic-girls",
    seriesTitle: "Comic Girls",
    type: "OP",
    seasonYear: "Spring 2018",
    releaseYear: 2018,
    artist: "Comic Girls",
    japaneseArtist: "こみっくがーるず",
    lyricsSnippet: "あばばばば！ 今日も原稿描きあげよう / Abababa! Let's finish up the manuscript together today...",
    trivia: "The adorable, lively opening song capturing Kaos-chan's frantic manga-drawing misadventures.",
    melodyNotes: [587, 659, 784, 880, 988]
  },
  'kashimashi-op': {
    id: "spicy-piece",
    songTitle: "Supaatto! Spy & Spice",
    japaneseTitle: "スパッと！スパイ&スパイス",
    seriesId: "release-the-spyce",
    seriesTitle: "Release the Spyce",
    type: "OP",
    seasonYear: "Fall 2018",
    releaseYear: 2018,
    artist: "Tsukikage",
    japaneseArtist: "ツキカゲ",
    lyricsSnippet: "スパッとキメて 守り抜くのよ / Strike with sharp precision to protect the ones we love...",
    trivia: "The high-tempo ninja-spy opening track performed by the Tsukikage heroine cast.",
    melodyNotes: [523, 587, 659, 698, 784]
  },
  'mai-hime-insert': {
    id: "blue-bud-netsuzou",
    songTitle: "Blue Bud Boy",
    japaneseTitle: "Blue Bud Boy",
    seriesId: "netsuzou-trap",
    seriesTitle: "Netsuzou Trap -NTR-",
    type: "OP",
    seasonYear: "Summer 2017",
    releaseYear: 2017,
    artist: "Haruka Toujou",
    japaneseArtist: "東城陽奏",
    lyricsSnippet: "歪んだ愛の形 隠せない嘘 / The shape of distorted love and the lies we can no longer hide...",
    trivia: "The edgy, dramatic rock track highlighting Yuma and Hotaru's secret relationship.",
    melodyNotes: [440, 523, 587, 659, 784]
  },
  'candy-boy-theme': {
    id: "deal-with-the-devil",
    songTitle: "Deal with the devil",
    japaneseTitle: "Deal with the devil",
    seriesId: "kakegurui",
    seriesTitle: "Kakegurui",
    type: "OP",
    seasonYear: "Summer 2017",
    releaseYear: 2017,
    artist: "Tia",
    japaneseArtist: "Tia",
    lyricsSnippet: "さあ、賭け狂いましょう / Come, let us gamble until our minds spin wildly out of control...",
    trivia: "The jazzy, eccentric opening anthem written and composed by ryo (supercell).",
    melodyNotes: [523, 659, 587, 523, 659]
  },
  'morning-grace': {
    id: "dreamriser",
    songTitle: "DreamRiser",
    japaneseTitle: "DreamRiser",
    seriesId: "girls-und-panzer",
    seriesTitle: "Girls und Panzer",
    type: "OP",
    seasonYear: "Fall 2012",
    releaseYear: 2012,
    artist: "ChouCho",
    japaneseArtist: "ChouCho",
    lyricsSnippet: "胸の奥で信じてる 夢の足音 / Deep in my chest, I believe in the footsteps of dreams...",
    trivia: "ChouCho's energetic, fan-favorite opening song heralding the tankery battles of Oarai Academy.",
    melodyNotes: [587, 659, 784, 880, 1046]
  },
  'active-heart-gunbuster': {
    id: "hoshi-no-tabibito",
    songTitle: "Hoshi no Tabibito",
    japaneseTitle: "星の旅人",
    seriesId: "kageki-shojo",
    seriesTitle: "Kageki Shojo!!",
    type: "ED",
    seasonYear: "Summer 2021",
    releaseYear: 2021,
    artist: "Sarasa Watanabe & Ai Narata",
    japaneseArtist: "渡辺さらさ(CV:千本木彩花)、奈良田愛(CV:花守ゆみり)",
    lyricsSnippet: "旅の途中で見つけた星 / A guiding star discovered midway through our journey...",
    trivia: "The grand, theatrical duet ending performed by Sayaka Senbongi and Yumiri Hanamori.",
    melodyNotes: [440, 523, 659, 587, 523]
  },
  'moonlight-densetsu': {
    id: "eternal-eternity",
    songTitle: "Eternal Eternity",
    japaneseTitle: "eternal eternity",
    seriesId: "sailor-moon-s",
    seriesTitle: "Sailor Moon Crystal: Season III",
    type: "ED",
    seasonYear: "Spring 2016",
    releaseYear: 2016,
    artist: "Sailor Uranus (Junko Minagawa) & Sailor Neptune (Sayaka Ohara)",
    japaneseArtist: "セーラーウラヌス(CV:皆川純子)×セーラーネプチューン(CV:大原さやか)",
    lyricsSnippet: "夜明けを待つ静寂の中で... / In the silence waiting for the dawn, we shall fight together...",
    trivia: "The romantic, impassioned duet ending theme of Sailor Moon Crystal Season III sung by Uranus and Neptune themselves.",
    melodyNotes: [440, 523, 659, 587, 523]
  }
};

const updatedSongs = songs.map(s => {
  if (songReplacements[s.id]) {
    return songReplacements[s.id];
  }
  return s;
});

writeTs('src/data/yuriSongs.ts', 'YURI_SONGS', 'YuriSong', updatedSongs);

// ----------------------------------------------------
// Step 5: yuriEmojis.ts
// ----------------------------------------------------
const emojis = parseTs('src/data/yuriEmojis.ts.bak');

const emojiReplacements = [
  {
    seriesId: "kageki-shojo",
    seriesTitle: "Kageki Shojo!!",
    emojis: ["🎭", "⭐", "🌹", "🩰"],
    clues: ["Kouka Academy", "Sarasa & Ai", "The Rose of Versailles", "Stage Actresses"]
  },
  {
    seriesId: "shimeji-simulation",
    seriesTitle: "Shimeji Simulation",
    emojis: ["🍄", "🍳", "🏫", "🌧️"],
    clues: ["Head Sprout", "Fried Egg", "Surreal High School", "Tsukumizu"]
  },
  {
    seriesId: "a-joyful-life",
    seriesTitle: "A Joyful Life",
    emojis: ["🏢", "💼", "☕", "🌧️"],
    clues: ["Office Life", "Past Trauma", "Korean Webtoon", "Da-kyeong & Seon-hwa"]
  },
  {
    seriesId: "my-girlfriends-not-here-today",
    seriesTitle: "My Girlfriend's Not Here Today",
    emojis: ["📱", "💔", "🤫", "👭"],
    clues: ["Cheating Drama", "Secret Messages", "Yuni & Nanase", "Gym Equipment Room"]
  },
  {
    seriesId: "hello-melancholic",
    seriesTitle: "Hello, Melancholic!",
    emojis: ["🎷", "🎺", "🎼", "👓"],
    clues: ["Trombone Player", "Flute Senpai", "Concert Band", "Asuka & Saki"]
  },
  {
    seriesId: "assault-lily-league",
    seriesTitle: "Assault Lily: League of Gardens - Full Bloom",
    emojis: ["⚔️", "🌸", "🛡️", "👭"],
    clues: ["Huge Weapons", "Garden Academy", "CHARM", "Riri & Yuyu"]
  },
  {
    seriesId: "sheep-princess",
    seriesTitle: "The Sheep Princess in Wolf's Clothing",
    emojis: ["🐑", "🐺", "👑", "🏰"],
    clues: ["Fluffy Sheep", "Wolf Maid", "Royal Palace", "Forbidden Love"]
  },
  {
    seriesId: "superwomen-in-love",
    seriesTitle: "Superwomen in Love! Honey Trap and Rapid Rabbit",
    emojis: ["🦸‍♀️", "🦹‍♀️", "⚡", "💖"],
    clues: ["Superhero & Villain", "Honey Trap", "Rapid Rabbit", "Tokusatsu Parody"]
  },
  {
    seriesId: "green-tea-bitch",
    seriesTitle: "Green Tea Bitch",
    emojis: ["🍵", "💄", "💅", "📱"],
    clues: ["Two-Faced Beauty", "High School Gossip", "Popular Girl", "Lin Luo"]
  },
  {
    seriesId: "kitanai-kimi",
    seriesTitle: "I Love Your Cruddy...",
    emojis: ["🩹", "💔", "🌧️", "🚬"],
    clues: ["Toxic Obsession", "Classroom Secret", "Dark Psychological", "Saya & Hinako"]
  },
  {
    seriesId: "futari-monologue",
    seriesTitle: "The Two of Them Are Pretty Much Like This",
    emojis: ["👭", "🛋️", "🍵", "📖"],
    clues: ["Reunited Friends", "Gyaru Makeover", "Overthinking Monologues", "Hinata & Mikage"]
  },
  {
    seriesId: "i-love-amy",
    seriesTitle: "I Love Amy",
    emojis: ["🎀", "🔪", "👭", "💌"],
    clues: ["Sociopath & Sweetheart", "American High School", "Secret Letters", "Bibi & Amy"]
  },
  {
    seriesId: "vanadis-heart",
    seriesTitle: "Mobile Suit Gundam: The Witch from Mercury - Vanadis Heart",
    emojis: ["🤖", "🚀", "🌌", "❤️"],
    clues: ["Gundam Spinoff", "Witch from Mercury", "Lfrith Jiu", "Kiyashu & Vayuela"]
  },
  {
    seriesId: "serenade",
    seriesTitle: "Serenade",
    emojis: ["🎹", "🎵", "💔", "☕"],
    clues: ["Piano Melody", "College Romance", "Unrequited Love", "Yoo-jin & Hye-ji"]
  },
  {
    seriesId: "everyday-lily",
    seriesTitle: "Everyday Lily",
    emojis: ["🌸", "🏫", "💬", "👭"],
    clues: ["Campus Life", "College Roommates", "Relatable Banter", "Hanna & Nayoung"]
  }
];

const pre2010SeriesIds = [
  'top-wo-nerae-gunbuster', 'revolutionary-girl-utena', 'princess-tutu', 'strawberry-panic',
  'maria-watches-over-us', 'kannazuki-no-miko', 'mai-hime', 'girl-friends',
  'simoun', 'kashimashi', 'candy-boy', 'sasameki-koto'
];

let repIndex = 0;
const updatedEmojis = emojis.map(e => {
  if (pre2010SeriesIds.includes(e.seriesId)) {
    const replacement = emojiReplacements[repIndex++];
    return replacement || e;
  }
  if (e.seriesId === 'sailor-moon-s') {
    return {
      seriesId: "sailor-moon-s",
      seriesTitle: "Sailor Moon Crystal: Season III",
      emojis: ["🌙", "🎻", "🪐", "⚔️"],
      clues: ["Outer Senshi", "Violin & Talisman", "Haruka & Michiru", "Space Sword"]
    };
  }
  return e;
});

writeTs('src/data/yuriEmojis.ts', 'YURI_EMOJIS', 'YuriEmojiRiddle', updatedEmojis);
console.log("Updated yuriSongs.ts and yuriEmojis.ts successfully!");
