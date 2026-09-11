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
// Step 2: yuriCharacters.ts
// ----------------------------------------------------
const chars = parseTs('src/data/yuriCharacters.ts');

const charReplacements = {
  // Gunbuster -> Kageki Shojo!!
  'noriko-takaya': {
    id: "sarasa-watanabe",
    name: "Sarasa Watanabe",
    nativeName: "渡辺 さらさ",
    seriesId: "kageki-shojo",
    seriesTitle: "Kageki Shojo!!",
    role: "Protagonist",
    hairColor: "Blonde",
    archetype: "Genki",
    debutYear: 2021,
    quote: "I'm going to become the top star of Kouka! I want to play Oscar on the grand stage!",
    avatar: "https://media.kitsu.app/characters/images/33501/original.jpg",
    pairingWith: "Ai Narata",
    aliases: ["Sarasa", "Oscar", "Watanabe"]
  },
  'kazumi-amano': {
    id: "ai-narata",
    name: "Ai Narata",
    nativeName: "奈良田 愛",
    seriesId: "kageki-shojo",
    seriesTitle: "Kageki Shojo!!",
    role: "Love Interest",
    hairColor: "Black",
    archetype: "Kuudere",
    debutYear: 2021,
    quote: "I hated people, but Sarasa was the first person who saw through my walls without fear.",
    avatar: "https://media.kitsu.app/characters/images/36599/original.jpg",
    pairingWith: "Sarasa Watanabe",
    aliases: ["Ai", "Narata", "Ai-chan"]
  },

  // Utena -> Shimeji Simulation
  'utena-tenjou': {
    id: "shijima-tsukishima",
    name: "Shijima Tsukishima",
    nativeName: "月島 しじま",
    seriesId: "shimeji-simulation",
    seriesTitle: "Shimeji Simulation",
    role: "Protagonist",
    hairColor: "Brown",
    archetype: "Kuudere",
    debutYear: 2019,
    quote: "Mushrooms sprouted from my head, but meeting Majime made the world outside my closet feel worth exploring.",
    avatar: "https://media.kitsu.app/manga/poster_images/54303/large.jpg",
    pairingWith: "Majime Yamashita",
    aliases: ["Shijima", "Tsukishima"]
  },
  'anthy-himemiya': {
    id: "majime-yamashita",
    name: "Majime Yamashita",
    nativeName: "山下 まじめ",
    seriesId: "shimeji-simulation",
    seriesTitle: "Shimeji Simulation",
    role: "Love Interest",
    hairColor: "Pink",
    archetype: "Genki",
    debutYear: 2019,
    quote: "With a fried egg on my head and mushrooms on yours, we make the perfect breakfast together!",
    avatar: "https://media.kitsu.app/manga/poster_images/54303/large.jpg",
    pairingWith: "Shijima Tsukishima",
    aliases: ["Majime", "Yamashita"]
  },

  // Princess Tutu -> A Joyful Life
  'ahiru-tutu': {
    id: "da-kyeong",
    name: "Da-kyeong",
    nativeName: "다경",
    seriesId: "a-joyful-life",
    seriesTitle: "A Joyful Life",
    role: "Protagonist",
    hairColor: "Brown",
    archetype: "Genki",
    debutYear: 2018,
    quote: "I thought my past would always hold me down, until Seon-hwa showed me I deserve genuine happiness.",
    avatar: "https://uploads.mangadex.org/covers/215e3ced-247e-4f34-8e1a-27b60ffef8ac/d75851aa-7307-485d-aafb-a434e02326fe.jpg.512.jpg",
    pairingWith: "Seon-hwa",
    aliases: ["Dakyeong", "Da-kyeong"]
  },
  'rue-tutu': {
    id: "seon-hwa",
    name: "Seon-hwa",
    nativeName: "선화",
    seriesId: "a-joyful-life",
    seriesTitle: "A Joyful Life",
    role: "Love Interest",
    hairColor: "Black",
    archetype: "Kuudere",
    debutYear: 2018,
    quote: "No matter how dark things seem, I'll always be here to hold your hand.",
    avatar: "https://uploads.mangadex.org/covers/215e3ced-247e-4f34-8e1a-27b60ffef8ac/d75851aa-7307-485d-aafb-a434e02326fe.jpg.512.jpg",
    pairingWith: "Da-kyeong",
    aliases: ["Seonhwa", "Seon-hwa"]
  },

  // Strawberry Panic -> My Girlfriend's Not Here Today
  'shizuma-hanazono': {
    id: "yuni-jinbo",
    name: "Yuni Jinbo",
    nativeName: "神保 優良",
    seriesId: "my-girlfriends-not-here-today",
    seriesTitle: "My Girlfriend's Not Here Today",
    role: "Protagonist",
    hairColor: "Black",
    archetype: "Flustered Sweetheart",
    debutYear: 2021,
    quote: "My girlfriend is always so busy... so when Nanase held me, I couldn't pull away.",
    avatar: "https://uploads.mangadex.org/covers/af5f2646-cddd-4c4c-b652-96577ed89647/3848315f-7230-46dc-8b95-00625d9d7f27.jpg.512.jpg",
    pairingWith: "Nanase Maekawa",
    aliases: ["Yuni", "Jinbo"]
  },
  'nagisa-aoi': {
    id: "nanase-maekawa",
    name: "Nanase Maekawa",
    nativeName: "前川 七瀬",
    seriesId: "my-girlfriends-not-here-today",
    seriesTitle: "My Girlfriend's Not Here Today",
    role: "Love Interest",
    hairColor: "Blonde",
    archetype: "Genki",
    debutYear: 2021,
    quote: "If your girlfriend doesn't appreciate you, why shouldn't you be with me instead?",
    avatar: "https://uploads.mangadex.org/covers/af5f2646-cddd-4c4c-b652-96577ed89647/3848315f-7230-46dc-8b95-00625d9d7f27.jpg.512.jpg",
    pairingWith: "Yuni Jinbo",
    aliases: ["Nanase", "Maekawa"]
  },

  // Aoi Hana -> Show Me Your Bust
  'fumi-manjoume': {
    id: "jiho-bust",
    name: "Jiho",
    nativeName: "지호",
    seriesId: "show-me-your-bust",
    seriesTitle: "Show Me Your Bust",
    role: "Protagonist",
    hairColor: "Brown",
    archetype: "Deredere",
    debutYear: 2021,
    quote: "Designing the best fit is my passion, but working alongside Woori made me realize what I truly desire.",
    avatar: "https://uploads.mangadex.org/covers/73965527-b393-4f65-9bc3-2439ec44935a/2eb7463e-40e3-4306-ba38-6df573d5e68d.png.512.jpg",
    pairingWith: "Woori",
    aliases: ["Jiho"]
  },
  'akira-okudaira': {
    id: "woori-bust",
    name: "Woori",
    nativeName: "우리",
    seriesId: "show-me-your-bust",
    seriesTitle: "Show Me Your Bust",
    role: "Love Interest",
    hairColor: "Black",
    archetype: "Tsundere",
    debutYear: 2021,
    quote: "I thought you were just an annoying rival, but now I can't keep my eyes off you.",
    avatar: "https://uploads.mangadex.org/covers/73965527-b393-4f65-9bc3-2439ec44935a/2eb7463e-40e3-4306-ba38-6df573d5e68d.png.512.jpg",
    pairingWith: "Jiho",
    aliases: ["Woori"]
  },

  // Maria-sama -> Hello, Melancholic!
  'sachiko-ogasawara': {
    id: "asuka-minato",
    name: "Asuka Minato",
    nativeName: "湊 あすか",
    seriesId: "hello-melancholic",
    seriesTitle: "Hello, Melancholic!",
    role: "Protagonist",
    hairColor: "Black",
    archetype: "Kuudere",
    debutYear: 2019,
    quote: "I tried so hard to hide my height and my trombone, but Saki's music brought me back to the light.",
    avatar: "https://uploads.mangadex.org/covers/153fa167-9a08-4e67-a82d-c36affddd36c/b8a34ec8-132a-4ab9-8641-e8604b2f56e1.jpg.512.jpg",
    pairingWith: "Saki Tone",
    aliases: ["Asuka", "Minato"]
  },
  'yumi-fukuzawa': {
    id: "saki-tone",
    name: "Saki Tone",
    nativeName: "刀祢 咲",
    seriesId: "hello-melancholic",
    seriesTitle: "Hello, Melancholic!",
    role: "Love Interest",
    hairColor: "Blonde",
    archetype: "Genki",
    debutYear: 2019,
    quote: "Asuka-senpai's trombone sounds so gentle and honest! Please play a duet with me again!",
    avatar: "https://uploads.mangadex.org/covers/153fa167-9a08-4e67-a82d-c36affddd36c/b8a34ec8-132a-4ab9-8641-e8604b2f56e1.jpg.512.jpg",
    pairingWith: "Asuka Minato",
    aliases: ["Saki", "Tone"]
  },

  // Kannazuki no Miko -> The Sheep Princess in Wolf's Clothing
  'himeko-kurusugawa': {
    id: "momo-sheep",
    name: "Momo",
    nativeName: "モモ",
    seriesId: "sheep-princess",
    seriesTitle: "The Sheep Princess in Wolf's Clothing",
    role: "Protagonist",
    hairColor: "Pink",
    archetype: "Flustered Sweetheart",
    debutYear: 2020,
    quote: "Even if you're a wolf, Aki, you're the gentlest and most caring person in the entire palace.",
    avatar: "https://uploads.mangadex.org/covers/7dc8bfc9-876b-4c34-b6e7-4560438095bf/072ed91b-88b1-4e9f-ba1d-936cf21f3265.png.512.jpg",
    pairingWith: "Aki",
    aliases: ["Momo", "Princess Momo"]
  },
  'chikane-himemiya': {
    id: "aki-wolf",
    name: "Aki",
    nativeName: "アキ",
    seriesId: "sheep-princess",
    seriesTitle: "The Sheep Princess in Wolf's Clothing",
    role: "Love Interest",
    hairColor: "Black",
    archetype: "Kuudere",
    debutYear: 2020,
    quote: "My claws and fangs exist only to defend the princess. My heart has belonged to you from the start.",
    avatar: "https://uploads.mangadex.org/covers/7dc8bfc9-876b-4c34-b6e7-4560438095bf/072ed91b-88b1-4e9f-ba1d-936cf21f3265.png.512.jpg",
    pairingWith: "Momo",
    aliases: ["Aki", "Wolf Aki"]
  },

  // Mai-HiME -> Superwomen in Love!
  'shizuru-fujino': {
    id: "honey-trap",
    name: "Honey Trap",
    nativeName: "ハニートラップ",
    seriesId: "superwomen-in-love",
    seriesTitle: "Superwomen in Love! Honey Trap and Rapid Rabbit",
    role: "Protagonist",
    hairColor: "Purple",
    archetype: "Ojou-sama",
    debutYear: 2020,
    quote: "I resigned from evil because Rapid Rabbit's righteous passion completely stole my heart!",
    avatar: "https://uploads.mangadex.org/covers/724dd143-c35c-478a-9cd8-fa8b58eca714/275be978-020f-49bc-8e00-2e831d3a9d3a.jpg.512.jpg",
    pairingWith: "Rapid Rabbit",
    aliases: ["Honey Trap", "Honey-san"]
  },
  'natsuki-kuga': {
    id: "rapid-rabbit",
    name: "Rapid Rabbit",
    nativeName: "ラピッドラビット",
    seriesId: "superwomen-in-love",
    seriesTitle: "Superwomen in Love! Honey Trap and Rapid Rabbit",
    role: "Love Interest",
    hairColor: "Red",
    archetype: "Genki",
    debutYear: 2020,
    quote: "Why is an evil syndicate executive following me around and blushing all the time?!",
    avatar: "https://uploads.mangadex.org/covers/724dd143-c35c-478a-9cd8-fa8b58eca714/275be978-020f-49bc-8e00-2e831d3a9d3a.jpg.512.jpg",
    pairingWith: "Honey Trap",
    aliases: ["Rapid Rabbit", "Hayate"]
  },

  // Girl Friends -> Green Tea Bitch
  'akiko-oohashi': {
    id: "lin-luo",
    name: "Lin Luo",
    nativeName: "林洛",
    seriesId: "green-tea-bitch",
    seriesTitle: "Green Tea Bitch",
    role: "Protagonist",
    hairColor: "Black",
    archetype: "Tsundere",
    debutYear: 2020,
    quote: "I thought I was a master at pretending to be sweet, until Zhang Xinyue totally outplayed me!",
    avatar: "https://uploads.mangadex.org/covers/69cac3f9-23cf-4a64-b83b-ad22f9e09669/1d376704-8919-4541-a4d9-880c1f499da2.jpg.512.jpg",
    pairingWith: "Zhang Xinyue",
    aliases: ["Lin Luo", "Luo Luo"]
  },
  'mari-kumakura': {
    id: "zhang-xinyue",
    name: "Zhang Xinyue",
    nativeName: "张馨月",
    seriesId: "green-tea-bitch",
    seriesTitle: "Green Tea Bitch",
    role: "Love Interest",
    hairColor: "Brown",
    archetype: "Deredere",
    debutYear: 2020,
    quote: "You think you can play games with me, Lin Luo? You're already trapped in my net.",
    avatar: "https://uploads.mangadex.org/covers/69cac3f9-23cf-4a64-b83b-ad22f9e09669/1d376704-8919-4541-a4d9-880c1f499da2.jpg.512.jpg",
    pairingWith: "Lin Luo",
    aliases: ["Zhang Xinyue", "Xinyue"]
  },

  // Simoun -> I Love Your Cruddy...
  'neviril': {
    id: "saya-kitanai",
    name: "Saya",
    nativeName: "さや",
    seriesId: "kitanai-kimi",
    seriesTitle: "I Love Your Cruddy...",
    role: "Protagonist",
    hairColor: "Black",
    archetype: "Kuudere",
    debutYear: 2019,
    quote: "In this suffocating classroom, the only time I feel truly alive is when Hinako hurts me.",
    avatar: "https://media.kitsu.app/manga/poster_images/49472/large.jpg",
    pairingWith: "Hinako",
    aliases: ["Saya", "Saya-chan"]
  },
  'aer': {
    id: "hinako-kitanai",
    name: "Hinako",
    nativeName: "ひなこ",
    seriesId: "kitanai-kimi",
    seriesTitle: "I Love Your Cruddy...",
    role: "Love Interest",
    hairColor: "Blonde",
    archetype: "Yandere",
    debutYear: 2019,
    quote: "You're all mine, Saya. Don't look at anyone else, never let anyone else touch your shame.",
    avatar: "https://media.kitsu.app/manga/poster_images/49472/large.jpg",
    pairingWith: "Saya",
    aliases: ["Hinako", "Hina"]
  },

  // Kashimashi -> The Two of Them Are Pretty Much Like This
  'hazumu-osaragi': {
    id: "hinata-futari",
    name: "Hinata",
    nativeName: "ひなた",
    seriesId: "futari-monologue",
    seriesTitle: "The Two of Them Are Pretty Much Like This",
    role: "Protagonist",
    hairColor: "Brown",
    archetype: "Flustered Sweetheart",
    debutYear: 2017,
    quote: "Mikage used to be my sweet childhood friend, but now she looks like a terrifying gyaru! How do I talk to her?!",
    avatar: "https://uploads.mangadex.org/covers/1de44b9c-29b2-4c21-b4f7-baaa36cebef9/255656d0-ca06-407c-aa1d-ffc713a49fb5.jpg.512.jpg",
    pairingWith: "Mikage",
    aliases: ["Hinata", "Hina"]
  },
  'yasuna-kamiizumi': {
    id: "mikage-futari",
    name: "Mikage",
    nativeName: "みかげ",
    seriesId: "futari-monologue",
    seriesTitle: "The Two of Them Are Pretty Much Like This",
    role: "Love Interest",
    hairColor: "Black",
    archetype: "Kuudere",
    debutYear: 2017,
    quote: "I put on this tough gyaru makeup hoping she'd notice me, but she's trembling in fear! What do I do?!",
    avatar: "https://uploads.mangadex.org/covers/1de44b9c-29b2-4c21-b4f7-baaa36cebef9/255656d0-ca06-407c-aa1d-ffc713a49fb5.jpg.512.jpg",
    pairingWith: "Hinata",
    aliases: ["Mikage", "Mikage-chan"]
  },

  // Candy Boy -> Gundam: Vanadis Heart
  'yukino-sakurai': {
    id: "kiyashu-vanadis",
    name: "Kiyashu",
    nativeName: "キヤシュ",
    seriesId: "vanadis-heart",
    seriesTitle: "Mobile Suit Gundam: The Witch from Mercury - Vanadis Heart",
    role: "Protagonist",
    hairColor: "Brown",
    archetype: "Kuudere",
    debutYear: 2023,
    quote: "I pilot the Lfrith Jiu not for revenge, but to protect the tomorrow we believe in.",
    avatar: "https://uploads.mangadex.org/covers/ddd44276-89d1-4b8c-89e6-f5ea24e44079/aca50bd4-5e25-4dd8-8291-7ca52ba58bb9.jpg.512.jpg",
    pairingWith: "Vayuela",
    aliases: ["Kiyashu"]
  },
  'kanade-sakurai': {
    id: "vayuela-vanadis",
    name: "Vayuela",
    nativeName: "ヴァユエラ",
    seriesId: "vanadis-heart",
    seriesTitle: "Mobile Suit Gundam: The Witch from Mercury - Vanadis Heart",
    role: "Love Interest",
    hairColor: "Blonde",
    archetype: "Prince-type",
    debutYear: 2023,
    quote: "The Earth sphere is full of shadows, but standing with you, I see the sunrise.",
    avatar: "https://uploads.mangadex.org/covers/ddd44276-89d1-4b8c-89e6-f5ea24e44079/aca50bd4-5e25-4dd8-8291-7ca52ba58bb9.jpg.512.jpg",
    pairingWith: "Kiyashu",
    aliases: ["Vayuela"]
  },

  // Sasameki Koto -> Serenade
  'sumika-murasame': {
    id: "yoo-jin-serenade",
    name: "Yoo-jin",
    nativeName: "유진",
    seriesId: "serenade",
    seriesTitle: "Serenade",
    role: "Protagonist",
    hairColor: "Brown",
    archetype: "Tsundere",
    debutYear: 2018,
    quote: "Every note I practice in the empty music hall is an echo of my unsaid confession to Hye-ji.",
    avatar: "https://media.kitsu.app/anime/poster_images/13261/large.jpg",
    pairingWith: "Hye-ji",
    aliases: ["Yoojin", "Yoo-jin"]
  },
  'ushio-kazama': {
    id: "hye-ji-serenade",
    name: "Hye-ji",
    nativeName: "혜지",
    seriesId: "serenade",
    seriesTitle: "Serenade",
    role: "Love Interest",
    hairColor: "Black",
    archetype: "Deredere",
    debutYear: 2018,
    quote: "Your music has always spoken to my soul in ways words never could.",
    avatar: "https://media.kitsu.app/anime/poster_images/13261/large.jpg",
    pairingWith: "Yoo-jin",
    aliases: ["Hyeji", "Hye-ji"]
  }
};

const updatedChars = chars.map(c => {
  if (charReplacements[c.id]) {
    return charReplacements[c.id];
  }
  // Haruka & Michiru (sailor-moon-s -> Sailor Moon Crystal: Season III)
  if (c.seriesId === 'sailor-moon-s') {
    return {
      ...c,
      seriesTitle: "Sailor Moon Crystal: Season III",
      debutYear: 2016
    };
  }
  return c;
});

writeTs('src/data/yuriCharacters.ts', 'YURI_CHARACTERS', 'YuriCharacter', updatedChars);

// ----------------------------------------------------
// Step 3: yuriShips.ts
// ----------------------------------------------------
const ships = parseTs('src/data/yuriShips.ts');

const shipReplacements = {
  // Gunbuster -> Kageki Shojo!!
  'noriko-kazumi': {
    id: "sarasa-ai",
    shipName: "SaraAi",
    japaneseName: "さら愛",
    seriesId: "kageki-shojo",
    seriesTitle: "Kageki Shojo!!",
    characters: ["Sarasa Watanabe", "Ai Narata"],
    avatars: [
      "https://media.kitsu.app/characters/images/33501/original.jpg",
      "https://media.kitsu.app/characters/images/36599/original.jpg"
    ],
    dynamics: ["Genki & Kuudere", "Theater Partners", "Roommates"],
    isCanon: false,
    description: "The theatrical and deeply affectionate partnership between exuberant aspiring top star Sarasa and withdrawn former idol Ai."
  },

  // Utena -> Shimeji Simulation
  'utenanthy': {
    id: "shijima-majime",
    shipName: "ShijiMaji",
    japaneseName: "しじまじ",
    seriesId: "shimeji-simulation",
    seriesTitle: "Shimeji Simulation",
    characters: ["Shijima Tsukishima", "Majime Yamashita"],
    avatars: [
      "https://media.kitsu.app/manga/poster_images/54303/large.jpg",
      "https://media.kitsu.app/manga/poster_images/54303/large.jpg"
    ],
    dynamics: ["Quiet Bond", "Surreal Companions", "Opposites Attract"],
    isCanon: true,
    description: "The eccentric, existential bond between mushroom-headed Shijima and sunny, fried-egg-wearing Majime as they explore their changing universe."
  },

  // Tutu -> A Joyful Life
  'ahiru-rue': {
    id: "dakyeong-seonhwa",
    shipName: "DaSeon",
    japaneseName: "ダギョン×ソンファ",
    seriesId: "a-joyful-life",
    seriesTitle: "A Joyful Life",
    characters: ["Da-kyeong", "Seon-hwa"],
    avatars: [
      "https://uploads.mangadex.org/covers/215e3ced-247e-4f34-8e1a-27b60ffef8ac/d75851aa-7307-485d-aafb-a434e02326fe.jpg.512.jpg",
      "https://uploads.mangadex.org/covers/215e3ced-247e-4f34-8e1a-27b60ffef8ac/d75851aa-7307-485d-aafb-a434e02326fe.jpg.512.jpg"
    ],
    dynamics: ["Slow Burn", "Healing Trauma", "Opposites Attract"],
    isCanon: true,
    description: "An emotional, slow-burn relationship exploring psychological healing and tenderness between Da-kyeong and Seon-hwa."
  },

  // Strawberry Panic -> My Girlfriend's Not Here Today
  'shiznat': {
    id: "yuni-nanase",
    shipName: "YuniNana",
    japaneseName: "ゆになな",
    seriesId: "my-girlfriends-not-here-today",
    seriesTitle: "My Girlfriend's Not Here Today",
    characters: ["Yuni Jinbo", "Nanase Maekawa"],
    avatars: [
      "https://uploads.mangadex.org/covers/af5f2646-cddd-4c4c-b652-96577ed89647/3848315f-7230-46dc-8b95-00625d9d7f27.jpg.512.jpg",
      "https://uploads.mangadex.org/covers/af5f2646-cddd-4c4c-b652-96577ed89647/3848315f-7230-46dc-8b95-00625d9d7f27.jpg.512.jpg"
    ],
    dynamics: ["Secret Affair", "Intense Attraction", "Drama/Angst"],
    isCanon: true,
    description: "A forbidden and passionate secret connection between high schoolers Yuni and Nanase filled with guilt and magnetic allure."
  },

  // Aoi Hana -> Show Me Your Bust
  'fumi-akira': {
    id: "jiho-woori",
    shipName: "JiWoori",
    japaneseName: "ジホ×ウリ",
    seriesId: "show-me-your-bust",
    seriesTitle: "Show Me Your Bust",
    characters: ["Jiho", "Woori"],
    avatars: [
      "https://uploads.mangadex.org/covers/73965527-b393-4f65-9bc3-2439ec44935a/2eb7463e-40e3-4306-ba38-6df573d5e68d.png.512.jpg",
      "https://uploads.mangadex.org/covers/73965527-b393-4f65-9bc3-2439ec44935a/2eb7463e-40e3-4306-ba38-6df573d5e68d.png.512.jpg"
    ],
    dynamics: ["Enemies to Lovers", "Workplace Rivals", "Spicy Comedy"],
    isCanon: true,
    description: "The hilarious and heated rivalry-turned-romance between lingerie design team partners Jiho and Woori."
  },

  // Maria-sama -> Hello, Melancholic!
  'sachiyumi': {
    id: "asuka-saki",
    shipName: "AsuSaki",
    japaneseName: "あす咲",
    seriesId: "hello-melancholic",
    seriesTitle: "Hello, Melancholic!",
    characters: ["Asuka Minato", "Saki Tone"],
    avatars: [
      "https://uploads.mangadex.org/covers/153fa167-9a08-4e67-a82d-c36affddd36c/b8a34ec8-132a-4ab9-8641-e8604b2f56e1.jpg.512.jpg",
      "https://uploads.mangadex.org/covers/153fa167-9a08-4e67-a82d-c36affddd36c/b8a34ec8-132a-4ab9-8641-e8604b2f56e1.jpg.512.jpg"
    ],
    dynamics: ["Senpai & Kouhai", "Music Duet", "Height Difference"],
    isCanon: true,
    description: "The sweet, melodic romance between towering trombone player Asuka and petite, energetic flutist Saki."
  },

  // Kannazuki no Miko -> The Sheep Princess in Wolf's Clothing
  'chikahime': {
    id: "momo-aki",
    shipName: "MomoAki",
    japaneseName: "モモアキ",
    seriesId: "sheep-princess",
    seriesTitle: "The Sheep Princess in Wolf's Clothing",
    characters: ["Momo", "Aki"],
    avatars: [
      "https://uploads.mangadex.org/covers/7dc8bfc9-876b-4c34-b6e7-4560438095bf/072ed91b-88b1-4e9f-ba1d-936cf21f3265.png.512.jpg",
      "https://uploads.mangadex.org/covers/7dc8bfc9-876b-4c34-b6e7-4560438095bf/072ed91b-88b1-4e9f-ba1d-936cf21f3265.png.512.jpg"
    ],
    dynamics: ["Master & Servant", "Predator & Prey Fairytale", "Devoted Protector"],
    isCanon: true,
    description: "The heartwarming fantasy bond between the shy sheep princess Momo and her fiercely loyal wolf maid-knight Aki."
  },

  // Mai-HiME -> Superwomen in Love!
  'shiznatmai': {
    id: "honey-rabbit",
    shipName: "HoneyRabbit",
    japaneseName: "ハニラビ",
    seriesId: "superwomen-in-love",
    seriesTitle: "Superwomen in Love! Honey Trap and Rapid Rabbit",
    characters: ["Honey Trap", "Rapid Rabbit"],
    avatars: [
      "https://uploads.mangadex.org/covers/724dd143-c35c-478a-9cd8-fa8b58eca714/275be978-020f-49bc-8e00-2e831d3a9d3a.jpg.512.jpg",
      "https://uploads.mangadex.org/covers/724dd143-c35c-478a-9cd8-fa8b58eca714/275be978-020f-49bc-8e00-2e831d3a9d3a.jpg.512.jpg"
    ],
    dynamics: ["Hero & Villain", "Enemies to Lovers", "Tokusatsu Parody"],
    isCanon: true,
    description: "The hilarious and adorable comic love story of an evil syndicate general defecting to shower affection on the superhero who conquered her heart."
  },

  // Mai-HiME duplicate -> I Love Amy
  'shizuru-natsuki': {
    id: "bibi-amy",
    shipName: "BibiAmy",
    japaneseName: "ビビ×エイミー",
    seriesId: "i-love-amy",
    seriesTitle: "I Love Amy",
    characters: ["Bibi", "Amy"],
    avatars: [
      "https://uploads.mangadex.org/covers/52ab10b8-d539-4839-9b31-7937fb08c813/47b42779-8412-423a-95fe-80da1271f2be.jpg.512.jpg",
      "https://uploads.mangadex.org/covers/52ab10b8-d539-4839-9b31-7937fb08c813/47b42779-8412-423a-95fe-80da1271f2be.jpg.512.jpg"
    ],
    dynamics: ["Obsessive & Pure", "Dark Psychological", "Slow Burn"],
    isCanon: true,
    description: "The gripping, chaotic psychological relationship between manipulative Bibi and gentle, compassionate Amy."
  },

  // Girl Friends -> Green Tea Bitch
  'mariakko': {
    id: "luo-xinyue",
    shipName: "LuoXinyue",
    japaneseName: "洛月",
    seriesId: "green-tea-bitch",
    seriesTitle: "Green Tea Bitch",
    characters: ["Lin Luo", "Zhang Xinyue"],
    avatars: [
      "https://uploads.mangadex.org/covers/69cac3f9-23cf-4a64-b83b-ad22f9e09669/1d376704-8919-4541-a4d9-880c1f499da2.jpg.512.jpg",
      "https://uploads.mangadex.org/covers/69cac3f9-23cf-4a64-b83b-ad22f9e09669/1d376704-8919-4541-a4d9-880c1f499da2.jpg.512.jpg"
    ],
    dynamics: ["Scheming Rivals", "Fake Dating", "Enemies to Lovers"],
    isCanon: true,
    description: "Two clever campus beauties trying to out-maneuver each other, only to fall deeply into genuine romantic affection."
  },

  // Simoun -> I Love Your Cruddy...
  'aernevi': {
    id: "saya-hinako",
    shipName: "SayaHina",
    japaneseName: "さやひな",
    seriesId: "kitanai-kimi",
    seriesTitle: "I Love Your Cruddy...",
    characters: ["Saya", "Hinako"],
    avatars: [
      "https://media.kitsu.app/manga/poster_images/49472/large.jpg",
      "https://media.kitsu.app/manga/poster_images/49472/large.jpg"
    ],
    dynamics: ["Dark Obsession", "Toxic Codependency", "Secret Shame"],
    isCanon: true,
    description: "An intense, twisted psychological codependency between two middle schoolers trapped in destructive mutual obsession."
  },

  // Kashimashi -> The Two of Them Are Pretty Much Like This
  'hazumu-yasuna': {
    id: "hinata-mikage",
    shipName: "HinaMika",
    japaneseName: "ひなみか",
    seriesId: "futari-monologue",
    seriesTitle: "The Two of Them Are Pretty Much Like This",
    characters: ["Hinata", "Mikage"],
    avatars: [
      "https://uploads.mangadex.org/covers/1de44b9c-29b2-4c21-b4f7-baaa36cebef9/255656d0-ca06-407c-aa1d-ffc713a49fb5.jpg.512.jpg",
      "https://uploads.mangadex.org/covers/1de44b9c-29b2-4c21-b4f7-baaa36cebef9/255656d0-ca06-407c-aa1d-ffc713a49fb5.jpg.512.jpg"
    ],
    dynamics: ["Childhood Friends", "Overthinking Comedians", "Opposites Attract"],
    isCanon: true,
    description: "The hilarious mutual misunderstandings of high school girls Hinata and Mikage who both desperately want to be close friends again."
  },

  // Candy Boy -> Gundam: Vanadis Heart
  'yukino-kanade': {
    id: "kiyashu-vayuela",
    shipName: "KiyaVayu",
    japaneseName: "キヤヴァユ",
    seriesId: "vanadis-heart",
    seriesTitle: "Mobile Suit Gundam: The Witch from Mercury - Vanadis Heart",
    characters: ["Kiyashu", "Vayuela"],
    avatars: [
      "https://uploads.mangadex.org/covers/ddd44276-89d1-4b8c-89e6-f5ea24e44079/aca50bd4-5e25-4dd8-8291-7ca52ba58bb9.jpg.512.jpg",
      "https://uploads.mangadex.org/covers/ddd44276-89d1-4b8c-89e6-f5ea24e44079/aca50bd4-5e25-4dd8-8291-7ca52ba58bb9.jpg.512.jpg"
    ],
    dynamics: ["Mecha Pilots", "Master & Servant", "Trust and Devotion"],
    isCanon: true,
    description: "The solemn, battlefield-tested bond of Gundam pilot Kiyashu and her commander Vayuela across post-Vanadis Earth."
  },

  // Sasameki Koto -> Serenade
  'sumika-ushio': {
    id: "yoojin-hyeji",
    shipName: "YooHye",
    japaneseName: "ユジヘジ",
    seriesId: "serenade",
    seriesTitle: "Serenade",
    characters: ["Yoo-jin", "Hye-ji"],
    avatars: [
      "https://media.kitsu.app/anime/poster_images/13261/large.jpg",
      "https://media.kitsu.app/anime/poster_images/13261/large.jpg"
    ],
    dynamics: ["Pianists", "Unrequited to Mutual", "College Melancholy"],
    isCanon: true,
    description: "The evocative, bittersweet musical connection between classical pianists Yoo-jin and Hye-ji."
  }
};

const updatedShips = ships.map(s => {
  if (shipReplacements[s.id]) {
    return shipReplacements[s.id];
  }
  // HaruMichi -> Sailor Moon Crystal: Season III
  if (s.seriesId === 'sailor-moon-s') {
    return {
      ...s,
      seriesTitle: "Sailor Moon Crystal: Season III"
    };
  }
  return s;
});

writeTs('src/data/yuriShips.ts', 'YURI_SHIPS', 'YuriShip', updatedShips);
console.log("Updated yuriCharacters.ts and yuriShips.ts successfully!");
