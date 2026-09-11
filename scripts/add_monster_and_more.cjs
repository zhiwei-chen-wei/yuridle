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

// -----------------------------------------------------------------
// 1. yuriSeries.ts
// -----------------------------------------------------------------
const series = parseTs('src/data/yuriSeries.ts');

const updatedSeries = series.map(s => {
  if (s.id === 'a-monster-wants-to-eat-me' || s.id === 'this-monster-wants-to-eat-me') {
    return {
      id: "this-monster-wants-to-eat-me",
      title: "This Monster Wants to Eat Me",
      romaji: "Watashi o Tabetai, Hitodenashi",
      nativeTitle: "私を喰べたい、ひとでなし",
      medium: "Manga",
      releaseYear: 2020,
      origin: "Japan",
      setting: "Supernatural",
      tropes: [
        "Enemies to Lovers",
        "Opposites Attract",
        "Slow Burn"
      ],
      tone: "Dark/Psychological",
      status: "Ongoing",
      synopsis: "In a quiet seaside town, traumatized high schooler Hinako yearns for death. She is approached by Shiori, a beautiful mermaid monster who promises to devour Hinako when she reaches emotional maturity, fiercely protecting her until then.",
      famousQuote: "I will keep you safe from every other demon, until the day you ripen enough for me to devour you whole.",
      coverImage: "https://media.kitsu.app/manga/poster_images/60098/large.jpg",
      pairing: "Hinako Yaotori x Shiori Oomi",
      aliases: [
        "This Monster Wants to Eat Me",
        "A Monster Wants to Eat Me",
        "Watashi o Tabetai",
        "Watashi o Tabetai, Hitodenashi",
        "Sai Naekawa",
        "Mermaid Yuri",
        "Hitodenashi",
        "WataTabe"
      ]
    };
  }
  return s;
});

const newSeriesToAdd = [
  {
    id: "shino-to-ren",
    title: "Shino to Ren",
    romaji: "Shino to Ren",
    nativeTitle: "しのとれん",
    medium: "Manga",
    releaseYear: 2020,
    origin: "Japan",
    setting: "High School",
    tropes: [
      "Opposites Attract",
      "Roommates",
      "Slow Burn"
    ],
    tone: "Sweet/Fluff",
    status: "Completed",
    synopsis: "Quiet and diligent Shino finds her neat, structured lifestyle turned upside-down when the cheerful and carefree Ren moves in, initiating an adorable cohabitation romance.",
    famousQuote: "Living together with you turned every mundane evening into something I look forward to.",
    coverImage: "https://media.kitsu.app/manga/69573/poster_image/large-6fa66104c9f923f1d430a85fde980fec.jpeg",
    pairing: "Shino x Ren",
    aliases: [
      "Shino to Ren",
      "Shino and Ren",
      "Inui Sekihiko",
      "しのとれん",
      "Shino Ren"
    ]
  },
  {
    id: "destroy-it-all-and-love-me-in-hell",
    title: "Destroy It All And Love Me In Hell",
    romaji: "Subete wo Kowashite Jigoku de Aishite",
    nativeTitle: "すべてを壊して地獄で愛して",
    medium: "Manga",
    releaseYear: 2023,
    origin: "Japan",
    setting: "High School",
    tropes: [
      "Enemies to Lovers",
      "Opposites Attract"
    ],
    tone: "Dark/Psychological",
    status: "Ongoing",
    synopsis: "Model student Nao is blackmailed and tormented by the rebellious Kurumi, spiraling into a chaotic, venomous, and mutually obsessive psychological entanglement.",
    famousQuote: "If we're going to hell anyway, let's drag each other all the way down together.",
    coverImage: "https://media.kitsu.app/manga/67511/poster_image/large-92942335c1eaf991464e6ef07938f1c6.jpeg",
    pairing: "Nao x Kurumi",
    aliases: [
      "Destroy It All And Love Me In Hell",
      "Subete wo Kowashite",
      "Zenbu Kowashite Jigoku de Ai Shite",
      "Jigoku de Aishite",
      "Ryoko"
    ]
  },
  {
    id: "night-owls-and-summer-skies",
    title: "Night Owls & Summer Skies",
    romaji: "Night Owls & Summer Skies",
    nativeTitle: "Night Owls & Summer Skies",
    medium: "Manhwa/Webtoon",
    releaseYear: 2022,
    origin: "Western",
    setting: "High School",
    tropes: [
      "Opposites Attract",
      "Slow Burn"
    ],
    tone: "Sweet/Fluff",
    status: "Completed",
    synopsis: "Sent to summer camp against her will, cynical teen Emma meets confident camp counselor Vivian, discovering self-acceptance and a tender summer romance under the stars.",
    famousQuote: "Maybe getting lost out here wasn't a mistake after all, Vivian.",
    coverImage: "https://media.kitsu.app/manga/64974/poster_image/large-47cd0853eae81bca26c033f1acd9fa93.jpeg",
    pairing: "Emma x Vivian",
    aliases: [
      "Night Owls",
      "Night Owls and Summer Skies",
      "Emma and Vivian",
      "Webtoon Night Owls"
    ]
  },
  {
    id: "my-food-seems-to-be-very-cute",
    title: "My Food Seems To Be Very Cute",
    romaji: "Wo De Shiwu Kan Qilai Hen Keai",
    nativeTitle: "我的食物看起来很可爱",
    medium: "Manhua",
    releaseYear: 2020,
    origin: "China",
    setting: "Fantasy/Magic",
    tropes: [
      "Master & Servant",
      "Opposites Attract"
    ],
    tone: "Sweet/Fluff",
    status: "Ongoing",
    synopsis: "A sweet vampire princess named Maria awakens to find a wolf-girl named Xiao Lan, who she thinks of as a delicious snack, only to end up pampering and adoring her instead.",
    famousQuote: "You're supposed to be my emergency food supply, so why are you so cute?!",
    coverImage: "https://media.kitsu.app/manga/poster_images/59761/large.jpg",
    pairing: "Maria x Xiao Lan",
    aliases: [
      "My Food Looks Very Cute",
      "My Food Seems To Be Very Cute",
      "Vampire and Werewolf",
      "Xiao Lan Maria"
    ]
  }
];

newSeriesToAdd.forEach(ns => {
  if (!updatedSeries.some(s => s.id === ns.id)) {
    updatedSeries.push(ns);
  }
});

writeTs('src/data/yuriSeries.ts', 'YURI_SERIES', 'YuriSeries', updatedSeries);

// -----------------------------------------------------------------
// 2. yuriCharacters.ts
// -----------------------------------------------------------------
const chars = parseTs('src/data/yuriCharacters.ts');

const newCharsToAdd = [
  {
    id: "hinako-yaotori",
    name: "Hinako Yaotori",
    nativeName: "八百歳 比名子",
    seriesId: "this-monster-wants-to-eat-me",
    seriesTitle: "This Monster Wants to Eat Me",
    role: "Protagonist",
    hairColor: "Brown",
    archetype: "Kuudere",
    debutYear: 2020,
    quote: "I want to be eaten by someone who truly desires me... that is the only way I can find peace.",
    avatar: "https://media.kitsu.app/manga/poster_images/60098/large.jpg",
    pairingWith: "Shiori Oomi",
    aliases: ["Hinako", "Yaotori", "Hinako Yaotori"]
  },
  {
    id: "shiori-oomi",
    name: "Shiori Oomi",
    nativeName: "近江 汐莉",
    seriesId: "this-monster-wants-to-eat-me",
    seriesTitle: "This Monster Wants to Eat Me",
    role: "Love Interest",
    hairColor: "Blue/Silver",
    archetype: "Yandere",
    debutYear: 2020,
    quote: "Your scent is so sweet, Hinako... you belong to me, and I won't let any other monster touch a single hair on your head.",
    avatar: "https://media.kitsu.app/manga/poster_images/60098/large.jpg",
    pairingWith: "Hinako Yaotori",
    aliases: ["Shiori", "Oomi", "Shiori Oomi", "Mermaid"]
  },
  {
    id: "shino",
    name: "Shino",
    nativeName: "しの",
    seriesId: "shino-to-ren",
    seriesTitle: "Shino to Ren",
    role: "Protagonist",
    hairColor: "Black",
    archetype: "Kuudere",
    debutYear: 2020,
    quote: "I was used to being on my own, but having Ren around makes this house feel like home.",
    avatar: "https://media.kitsu.app/manga/69573/poster_image/large-6fa66104c9f923f1d430a85fde980fec.jpeg",
    pairingWith: "Ren",
    aliases: ["Shino"]
  },
  {
    id: "ren",
    name: "Ren",
    nativeName: "れん",
    seriesId: "shino-to-ren",
    seriesTitle: "Shino to Ren",
    role: "Love Interest",
    hairColor: "Blonde",
    archetype: "Genki",
    debutYear: 2020,
    quote: "Shino-chan is so cute when she tries to act all serious! Let's eat dinner together!",
    avatar: "https://media.kitsu.app/manga/69573/poster_image/large-6fa66104c9f923f1d430a85fde980fec.jpeg",
    pairingWith: "Shino",
    aliases: ["Ren", "Ren-chan"]
  },
  {
    id: "nao-destroy",
    name: "Nao",
    nativeName: "直",
    seriesId: "destroy-it-all-and-love-me-in-hell",
    seriesTitle: "Destroy It All And Love Me In Hell",
    role: "Protagonist",
    hairColor: "Black",
    archetype: "Flustered Sweetheart",
    debutYear: 2023,
    quote: "I thought my life was perfectly on track, until Kurumi ripped off my mask.",
    avatar: "https://media.kitsu.app/manga/67511/poster_image/large-92942335c1eaf991464e6ef07938f1c6.jpeg",
    pairingWith: "Kurumi",
    aliases: ["Nao"]
  },
  {
    id: "kurumi-destroy",
    name: "Kurumi",
    nativeName: "くるみ",
    seriesId: "destroy-it-all-and-love-me-in-hell",
    seriesTitle: "Destroy It All And Love Me In Hell",
    role: "Love Interest",
    hairColor: "Blonde",
    archetype: "Yandere",
    debutYear: 2023,
    quote: "Look at me, Nao. You can never go back to being that perfect honor student ever again.",
    avatar: "https://media.kitsu.app/manga/67511/poster_image/large-92942335c1eaf991464e6ef07938f1c6.jpeg",
    pairingWith: "Nao",
    aliases: ["Kurumi"]
  },
  {
    id: "emma-night-owls",
    name: "Emma",
    nativeName: "Emma",
    seriesId: "night-owls-and-summer-skies",
    seriesTitle: "Night Owls & Summer Skies",
    role: "Protagonist",
    hairColor: "Brown",
    archetype: "Tsundere",
    debutYear: 2022,
    quote: "I thought this summer camp would be pure torture, but then Vivian showed up.",
    avatar: "https://media.kitsu.app/manga/64974/poster_image/large-47cd0853eae81bca26c033f1acd9fa93.jpeg",
    pairingWith: "Vivian",
    aliases: ["Emma"]
  },
  {
    id: "vivian-night-owls",
    name: "Vivian",
    nativeName: "Vivian",
    seriesId: "night-owls-and-summer-skies",
    seriesTitle: "Night Owls & Summer Skies",
    role: "Love Interest",
    hairColor: "Black",
    archetype: "Deredere",
    debutYear: 2022,
    quote: "You don't have to keep everyone at arm's length, Emma. I'm right here.",
    avatar: "https://media.kitsu.app/manga/64974/poster_image/large-47cd0853eae81bca26c033f1acd9fa93.jpeg",
    pairingWith: "Emma",
    aliases: ["Vivian"]
  },
  {
    id: "maria-vampire",
    name: "Maria",
    nativeName: "玛利亚",
    seriesId: "my-food-seems-to-be-very-cute",
    seriesTitle: "My Food Seems To Be Very Cute",
    role: "Protagonist",
    hairColor: "Blonde",
    archetype: "Ojou-sama",
    debutYear: 2020,
    quote: "I am a fearsome vampire noble! Stop patting my head and let me bite you properly!",
    avatar: "https://media.kitsu.app/manga/poster_images/59761/large.jpg",
    pairingWith: "Xiao Lan",
    aliases: ["Maria", "Vampire Maria"]
  },
  {
    id: "xiao-lan-wolf",
    name: "Xiao Lan",
    nativeName: "小狼",
    seriesId: "my-food-seems-to-be-very-cute",
    seriesTitle: "My Food Seems To Be Very Cute",
    role: "Love Interest",
    hairColor: "Brown",
    archetype: "Genki",
    debutYear: 2020,
    quote: "Maria-sama! Does your bite hurt? If it feeds you, you can bite me as much as you like!",
    avatar: "https://media.kitsu.app/manga/poster_images/59761/large.jpg",
    pairingWith: "Maria",
    aliases: ["Xiao Lan", "Wolf Lan"]
  }
];

newCharsToAdd.forEach(nc => {
  if (!chars.some(c => c.id === nc.id)) {
    chars.push(nc);
  }
});

writeTs('src/data/yuriCharacters.ts', 'YURI_CHARACTERS', 'YuriCharacter', chars);

// -----------------------------------------------------------------
// 3. yuriShips.ts
// -----------------------------------------------------------------
const ships = parseTs('src/data/yuriShips.ts');

const newShipsToAdd = [
  {
    id: "hinako-shiori",
    shipName: "HinaShio",
    japaneseName: "ひなしお",
    seriesId: "this-monster-wants-to-eat-me",
    seriesTitle: "This Monster Wants to Eat Me",
    characters: ["Hinako Yaotori", "Shiori Oomi"],
    avatars: [
      "https://media.kitsu.app/manga/poster_images/60098/large.jpg",
      "https://media.kitsu.app/manga/poster_images/60098/large.jpg"
    ],
    dynamics: ["Predator & Prey", "Devoted Protector", "Dark Psychological"],
    isCanon: true,
    description: "The haunting, bittersweet bond between a death-seeking girl and the mermaid monster who guards her life only to consume her."
  },
  {
    id: "shino-ren",
    shipName: "ShinoRen",
    japaneseName: "しのれん",
    seriesId: "shino-to-ren",
    seriesTitle: "Shino to Ren",
    characters: ["Shino", "Ren"],
    avatars: [
      "https://media.kitsu.app/manga/69573/poster_image/large-6fa66104c9f923f1d430a85fde980fec.jpeg",
      "https://media.kitsu.app/manga/69573/poster_image/large-6fa66104c9f923f1d430a85fde980fec.jpeg"
    ],
    dynamics: ["Roommates", "Opposites Attract", "Domestic Fluff"],
    isCanon: true,
    description: "The cozy, sweet domestic bond between studious Shino and bubbly Ren as they navigate shared apartment living."
  },
  {
    id: "nao-kurumi",
    shipName: "NaoKuru",
    japaneseName: "なおくる",
    seriesId: "destroy-it-all-and-love-me-in-hell",
    seriesTitle: "Destroy It All And Love Me In Hell",
    characters: ["Nao", "Kurumi"],
    avatars: [
      "https://media.kitsu.app/manga/67511/poster_image/large-92942335c1eaf991464e6ef07938f1c6.jpeg",
      "https://media.kitsu.app/manga/67511/poster_image/large-92942335c1eaf991464e6ef07938f1c6.jpeg"
    ],
    dynamics: ["Enemies to Lovers", "Toxic Codependency", "Dark Obsession"],
    isCanon: true,
    description: "A destructive, electrifying high school relationship built on secrets, emotional ruin, and irresistible obsession."
  },
  {
    id: "emma-vivian",
    shipName: "Emmi",
    japaneseName: "エマ×ヴィヴィアン",
    seriesId: "night-owls-and-summer-skies",
    seriesTitle: "Night Owls & Summer Skies",
    characters: ["Emma", "Vivian"],
    avatars: [
      "https://media.kitsu.app/manga/64974/poster_image/large-47cd0853eae81bca26c033f1acd9fa93.jpeg",
      "https://media.kitsu.app/manga/64974/poster_image/large-47cd0853eae81bca26c033f1acd9fa93.jpeg"
    ],
    dynamics: ["Camp Counselor & Camper", "Opposites Attract", "Slow Burn"],
    isCanon: true,
    description: "The heartwarming, stargazing summer romance between defensive Emma and radiant counselor Vivian."
  },
  {
    id: "maria-lan",
    shipName: "MariaLan",
    japaneseName: "玛利亚×小狼",
    seriesId: "my-food-seems-to-be-very-cute",
    seriesTitle: "My Food Seems To Be Very Cute",
    characters: ["Maria", "Xiao Lan"],
    avatars: [
      "https://media.kitsu.app/manga/poster_images/59761/large.jpg",
      "https://media.kitsu.app/manga/poster_images/59761/large.jpg"
    ],
    dynamics: ["Master & Servant", "Vampire & Werewolf", "Adorable Fluff"],
    isCanon: true,
    description: "The delightfully sweet fantasy romance between a noble vampire girl and her devoted wolf-girl companion."
  }
];

newShipsToAdd.forEach(ns => {
  if (!ships.some(s => s.id === ns.id)) {
    ships.push(ns);
  }
});

writeTs('src/data/yuriShips.ts', 'YURI_SHIPS', 'YuriShip', ships);

// -----------------------------------------------------------------
// 4. yuriEmojis.ts
// -----------------------------------------------------------------
const emojis = parseTs('src/data/yuriEmojis.ts');

const newEmojisToAdd = [
  {
    seriesId: "this-monster-wants-to-eat-me",
    seriesTitle: "This Monster Wants to Eat Me",
    emojis: ["🌊", "🧜‍♀️", "🩹", "🍽️"],
    clues: ["Seaside Town", "Mermaid Monster", "Death Wish", "Devour Promise"]
  },
  {
    seriesId: "shino-to-ren",
    seriesTitle: "Shino to Ren",
    emojis: ["🏠", "🍱", "🛋️", "👭"],
    clues: ["Cohabitation", "Opposites Attract", "Shared Meals", "Shino & Ren"]
  },
  {
    seriesId: "destroy-it-all-and-love-me-in-hell",
    seriesTitle: "Destroy It All And Love Me In Hell",
    emojis: ["🔥", "🖤", "🏫", "⚡"],
    clues: ["Blackmail Secret", "Toxic Romance", "Model Student", "Descent to Hell"]
  },
  {
    seriesId: "night-owls-and-summer-skies",
    seriesTitle: "Night Owls & Summer Skies",
    emojis: ["🏕️", "🌌", "🦉", "🌲"],
    clues: ["Summer Camp", "Stargazing", "Camp Counselor", "Emma & Vivian"]
  },
  {
    seriesId: "my-food-seems-to-be-very-cute",
    seriesTitle: "My Food Seems To Be Very Cute",
    emojis: ["🧛‍♀️", "🐺", "🍖", "💖"],
    clues: ["Vampire Noble", "Wolf Girl", "Emergency Food", "Maria & Xiao Lan"]
  }
];

newEmojisToAdd.forEach(ne => {
  if (!emojis.some(e => e.seriesId === ne.seriesId)) {
    emojis.push(ne);
  }
});

writeTs('src/data/yuriEmojis.ts', 'YURI_EMOJIS', 'YuriEmojiRiddle', emojis);

console.log("Successfully added This Monster Wants to Eat Me, Shino to Ren, and more!");
