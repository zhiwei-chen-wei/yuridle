/**
 * Fixed Daily Target Schedule (Immune to code updates and dataset changes)
 * Ensures today's and all scheduled days' guessing games NEVER change
 * when new characters, series, or bug fixes are added.
 */

export interface DailyScheduleEntry {
  classicId: string;
  characterId: string;
  coverId: string;
  quoteId: string;
  emojiId: string;
  shipId: string;
  silhouetteId: string;
  songId: string;
}

export const DAILY_SCHEDULE: Record<number, DailyScheduleEntry> = {
  "1": {
    "classicId": "otome-no-teikoku",
    "characterId": "nanase-natsume",
    "coverId": "kageki-shojo",
    "quoteId": "madoka-kaname",
    "emojiId": "everyday-lily",
    "shipId": "nao-kurumi",
    "silhouetteId": "misaki-okusawa",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "2": {
    "classicId": "our-wonderful-days",
    "characterId": "mafuyu-tsurezure",
    "coverId": "saeki-sayaka",
    "quoteId": "aya-maruyama",
    "emojiId": "watanare",
    "shipId": "nijiryo",
    "silhouetteId": "maria-cadenzavna-eve",
    "songId": "asagao-kase"
  },
  "3": {
    "classicId": "symphogear",
    "characterId": "nozomi-kasaki",
    "coverId": "re-stage-dream-days",
    "quoteId": "konomi-fujiwara",
    "emojiId": "love-doctor",
    "shipId": "lunan-yexing",
    "silhouetteId": "mayumi-kodama",
    "songId": "cross-ange-op1"
  },
  "4": {
    "classicId": "murcielago",
    "characterId": "shino",
    "coverId": "valkyrie-drive",
    "quoteId": "umika-konohoshi",
    "emojiId": "vampire-in-the-garden",
    "shipId": "nanaki-kanade",
    "silhouetteId": "hanayo-koizumi",
    "songId": "sacred-world"
  },
  "5": {
    "classicId": "netsuzou-trap",
    "characterId": "arisa-ichigaya",
    "coverId": "cant-defy-the-lonely-girl",
    "quoteId": "honey-trap",
    "emojiId": "birdie-wing",
    "shipId": "kumiko-reina",
    "silhouetteId": "yumeko-jabami",
    "songId": "serendipity-flip"
  },
  "6": {
    "classicId": "symphogear",
    "characterId": "iroha-sakayori",
    "coverId": "yuuki-yuuna",
    "quoteId": "airi-sezaki",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "saya-hinako",
    "silhouetteId": "lu-nan",
    "songId": "ten-to-sen"
  },
  "7": {
    "classicId": "baili-jin",
    "characterId": "aoba-suzukaze",
    "coverId": "pulse",
    "quoteId": "nyamu-yuutenji",
    "emojiId": "everyday-lily",
    "shipId": "rinnade",
    "silhouetteId": "jung-era",
    "songId": "umapyoi-densetsu"
  },
  "8": {
    "classicId": "our-wonderful-days",
    "characterId": "soyo-nagasaki",
    "coverId": "lily-love-2",
    "quoteId": "yui-yamada",
    "emojiId": "girls-band-cry",
    "shipId": "cocona-papika",
    "silhouetteId": "harumi-taniguchi",
    "songId": "asagao-kase"
  },
  "9": {
    "classicId": "not-so-shoujo-love-story",
    "characterId": "mai-oduka",
    "coverId": "the-moon-on-a-rainy-night",
    "quoteId": "yuzu-konohana",
    "emojiId": "fluttering-feelings",
    "shipId": "fuu-mashi",
    "silhouetteId": "hibiki-sugawa",
    "songId": "one-room-sugar-life"
  },
  "10": {
    "classicId": "kiss-and-white-lily",
    "characterId": "ayaka-shiraishi",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "satou-matsuzaka",
    "emojiId": "bloom-into-you",
    "shipId": "nomokasu",
    "silhouetteId": "kita-ikuyo",
    "songId": "won3chu-kissme"
  },
  "11": {
    "classicId": "love-live-sunshine",
    "characterId": "hinata-hoshino",
    "coverId": "kuttsukiboshi",
    "quoteId": "lee-yeowool",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "mizore-nozomi",
    "silhouetteId": "annabel-lee",
    "songId": "haruhikage"
  },
  "12": {
    "classicId": "tropical-fish",
    "characterId": "haruka-tenoh",
    "coverId": "kitanai-kimi",
    "quoteId": "madam-baek",
    "emojiId": "yuri-is-my-job",
    "shipId": "nina-hina",
    "silhouetteId": "atori-mizutori",
    "songId": "guruguru-dj"
  },
  "13": {
    "classicId": "magirevo",
    "characterId": "homura-akemi",
    "coverId": "witch-from-mercury",
    "quoteId": "michiru-kaioh",
    "emojiId": "bang-dream-pico",
    "shipId": "mashiruri",
    "silhouetteId": "suzu-suzukaze",
    "songId": "miracle-rush"
  },
  "14": {
    "classicId": "hanayamata",
    "characterId": "nana-daiba",
    "coverId": "izetta",
    "quoteId": "ai-narata",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "shino-ren",
    "silhouetteId": "aya-maruyama",
    "songId": "magia-madoka"
  },
  "15": {
    "classicId": "lapis-relights",
    "characterId": "lee-yeowool",
    "coverId": "blooming-sequence",
    "quoteId": "rin-touyama",
    "emojiId": "anemone-is-in-heat",
    "shipId": "chuchunika",
    "silhouetteId": "haruka-takayama",
    "songId": "tenshi-ni-fureta-yo"
  },
  "16": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "natori-ryoko",
    "coverId": "happy-sugar-life",
    "quoteId": "michiru-kaioh",
    "emojiId": "akebi-chan",
    "shipId": "teiomcqueen",
    "silhouetteId": "kita-ikuyo",
    "songId": "kimama-na-tenshi-tachi"
  },
  "17": {
    "classicId": "the-third-party",
    "characterId": "aya-maruyama",
    "coverId": "brave-witches",
    "quoteId": "yuri-tamura",
    "emojiId": "yuri-is-my-job",
    "shipId": "luo-xinyue",
    "silhouetteId": "mel-pulse",
    "songId": "raise-your-hands"
  },
  "18": {
    "classicId": "long-awaited-feelings",
    "characterId": "eve",
    "coverId": "fed-up-office-lady-villainess",
    "quoteId": "yuna-yuki",
    "emojiId": "i-love-amy",
    "shipId": "shimbaek",
    "silhouetteId": "yuu-yuutani",
    "songId": "soushou-innocent"
  },
  "19": {
    "classicId": "tamen-de-gushi",
    "characterId": "eli-ayase",
    "coverId": "yuruyuri",
    "quoteId": "claudine-saijo",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "utekiwi",
    "silhouetteId": "soyo-nagasaki",
    "songId": "eternal-eternity"
  },
  "20": {
    "classicId": "whispering-you-a-love-song",
    "characterId": "nana-daiba",
    "coverId": "asagao-to-kase-san",
    "quoteId": "renako-amaori",
    "emojiId": "moonlight-garden",
    "shipId": "kumiko-reina",
    "silhouetteId": "uika-misumi",
    "songId": "my-dream-girls"
  },
  "21": {
    "classicId": "tari-tari",
    "characterId": "yoo-jin-serenade",
    "coverId": "houkago-teibou-nisshi",
    "quoteId": "vayuela-vanadis",
    "emojiId": "hello-melancholic",
    "shipId": "nao-kurumi",
    "silhouetteId": "kaoru-seta",
    "songId": "machikado-tangent"
  },
  "22": {
    "classicId": "prisma-illya",
    "characterId": "subaru-awa",
    "coverId": "mygo",
    "quoteId": "sarasa-watanabe",
    "emojiId": "cross-ange",
    "shipId": "mamori-mirei",
    "silhouetteId": "hougetsu-shimamura",
    "songId": "shukufuku"
  },
  "23": {
    "classicId": "our-teachers-are-dating",
    "characterId": "umika-konohoshi",
    "coverId": "chou-kaguya-hime",
    "quoteId": "shiina-kakure",
    "emojiId": "bang-dream",
    "shipId": "tomo-rupa",
    "silhouetteId": "mutsumi-wakaba",
    "songId": "hikari-no-senritsu"
  },
  "24": {
    "classicId": "harukana-receive",
    "characterId": "mio-sakamoto",
    "coverId": "mygo",
    "quoteId": "kiyashu-vanadis",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "illya-miyu",
    "silhouetteId": "kaori-asaka",
    "songId": "hikari-no-senritsu"
  },
  "25": {
    "classicId": "pulse",
    "characterId": "mami-tomoe",
    "coverId": "utsushicha-damena-kao",
    "quoteId": "ginko-yurishiro",
    "emojiId": "new-game",
    "shipId": "saya-hinako",
    "silhouetteId": "kanan-matsuura",
    "songId": "guruguru-dj"
  },
  "26": {
    "classicId": "asteroid-in-love",
    "characterId": "mimi-mimily",
    "coverId": "regalia",
    "quoteId": "moca-aoba",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "mashiruri",
    "silhouetteId": "himari-kino",
    "songId": "go-go-maniac"
  },
  "27": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "ayumu-uehara",
    "coverId": "toji-no-miko",
    "quoteId": "mel-pulse",
    "emojiId": "happy-sugar-life",
    "shipId": "hinata-mikage",
    "silhouetteId": "special-week",
    "songId": "machikado-tangent"
  },
  "28": {
    "classicId": "always-human",
    "characterId": "mirei-shikishima",
    "coverId": "lapis-relights",
    "quoteId": "illyasviel-von-einzbern",
    "emojiId": "adachi-and-shimamura",
    "shipId": "morimura",
    "silhouetteId": "mitsuki-yano",
    "songId": "hectopascal"
  },
  "29": {
    "classicId": "akebi-chan",
    "characterId": "shino",
    "coverId": "brave-witches",
    "quoteId": "koyuki-honami",
    "emojiId": "our-wonderful-days",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "eve",
    "songId": "red-liberation"
  },
  "30": {
    "classicId": "symphogear",
    "characterId": "special-week",
    "coverId": "her-tale-of-shim-chong",
    "quoteId": "kotori-minami",
    "emojiId": "ring-my-bell",
    "shipId": "yoshimio",
    "silhouetteId": "hinata-hoshino",
    "songId": "kimi-no-gin-no-niwa"
  },
  "31": {
    "classicId": "chuunibyou",
    "characterId": "mel-pulse",
    "coverId": "toji-no-miko",
    "quoteId": "sumika-chibana",
    "emojiId": "bad-girl",
    "shipId": "shizukaori",
    "silhouetteId": "saki-miyanaga",
    "songId": "red-birthmark"
  },
  "32": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "queen-velverosa",
    "coverId": "assault-lily-fruits",
    "quoteId": "chisato-shirasagi",
    "emojiId": "ring-my-bell",
    "shipId": "nijiryo",
    "silhouetteId": "menou-virgin-road",
    "songId": "cross-ange-op1"
  },
  "33": {
    "classicId": "always-human",
    "characterId": "rin-shima",
    "coverId": "my-food-seems-to-be-very-cute",
    "quoteId": "umi-sonoda",
    "emojiId": "new-game",
    "shipId": "norae-seola",
    "silhouetteId": "yumeko-jabami",
    "songId": "raise-your-hands"
  },
  "34": {
    "classicId": "uma-musume",
    "characterId": "mitsuki-yano",
    "coverId": "bocchi-the-rock",
    "quoteId": "mami-tomoe",
    "emojiId": "valkyrie-drive",
    "shipId": "karehika",
    "silhouetteId": "nanaki-fujishiro",
    "songId": "won3chu-kissme"
  },
  "35": {
    "classicId": "cheerful-amnesia",
    "characterId": "misa-utsushicha",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "akari-tokitoh",
    "emojiId": "always-human",
    "shipId": "renamai",
    "silhouetteId": "hinako-yaotose",
    "songId": "dream-solister"
  },
  "36": {
    "classicId": "liz-to-aoi-tori",
    "characterId": "noa-himesaka",
    "coverId": "anne-happy",
    "quoteId": "noa-himesaka",
    "emojiId": "ange-vierge",
    "shipId": "teiomcqueen",
    "silhouetteId": "yuu-sonoda",
    "songId": "azalea-citrus"
  },
  "37": {
    "classicId": "assault-lily-league",
    "characterId": "chisato-nishikigi",
    "coverId": "vanadis-heart",
    "quoteId": "chris-yukine",
    "emojiId": "everyday-lily",
    "shipId": "komavill",
    "silhouetteId": "yuu-akeuchi",
    "songId": "sacred-world"
  },
  "38": {
    "classicId": "selection-project",
    "characterId": "nika-nanaura",
    "coverId": "valkyrie-drive",
    "quoteId": "yuu-koito",
    "emojiId": "new-game",
    "shipId": "era-yoonsung",
    "silhouetteId": "kou-yagami",
    "songId": "tenbin-fragtime"
  },
  "39": {
    "classicId": "the-third-party",
    "characterId": "kaori-asaka",
    "coverId": "kitanai-kimi",
    "quoteId": "mikage-futari",
    "emojiId": "nevermore-webtoon",
    "shipId": "shizukaori",
    "silhouetteId": "maria-cadenzavna-eve",
    "songId": "one-room-sugar-life"
  },
  "40": {
    "classicId": "brave-witches",
    "characterId": "da-kyeong",
    "coverId": "vividred-operation",
    "quoteId": "tomoko-kuroki",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "shino-ren",
    "silhouetteId": "haruka-tenoh",
    "songId": "miracle-rush"
  },
  "41": {
    "classicId": "sora-haena",
    "characterId": "kasuga-totoko",
    "coverId": "sailor-moon-s",
    "quoteId": "sayaka-miki",
    "emojiId": "lycoris-recoil",
    "shipId": "nao-kurumi",
    "silhouetteId": "kaori-asaka",
    "songId": "red-liberation"
  },
  "42": {
    "classicId": "mikagura-gakuen",
    "characterId": "seon-hwa",
    "coverId": "hibike-euphonium",
    "quoteId": "harumi-taniguchi",
    "emojiId": "stardust-telepath",
    "shipId": "nanajun",
    "silhouetteId": "momo-sheep",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "43": {
    "classicId": "non-non-biyori",
    "characterId": "maya-tendo",
    "coverId": "lily-yy",
    "quoteId": "shino",
    "emojiId": "d4dj",
    "shipId": "mary-yumeko",
    "silhouetteId": "kaguya-cosmic",
    "songId": "go-go-maniac"
  },
  "44": {
    "classicId": "my-food-seems-to-be-very-cute",
    "characterId": "miyu-edelfelt",
    "coverId": "manaria-friends",
    "quoteId": "sayo-hikawa",
    "emojiId": "assault-lily",
    "shipId": "teiomcqueen",
    "silhouetteId": "mutsumi-wakaba",
    "songId": "ten-to-sen"
  },
  "45": {
    "classicId": "re-stage-dream-days",
    "characterId": "rin-umineko",
    "coverId": "assault-lily-league",
    "quoteId": "honey-trap",
    "emojiId": "k-on",
    "shipId": "chisataki",
    "silhouetteId": "anne-manaria",
    "songId": "other-side-of-wall"
  },
  "46": {
    "classicId": "mygo",
    "characterId": "kyoko-sakura",
    "coverId": "sono-hanabira",
    "quoteId": "kurumi-yoshizawa",
    "emojiId": "watamote",
    "shipId": "anonsoyo",
    "silhouetteId": "makoto-shimizu",
    "songId": "alive-lycoris"
  },
  "47": {
    "classicId": "wixoss",
    "characterId": "nico-yazawa",
    "coverId": "assault-lily-fruits",
    "quoteId": "claudine-saijo",
    "emojiId": "bang-dream",
    "shipId": "futakao",
    "silhouetteId": "makoto-shimizu",
    "songId": "memories-comic-girls"
  },
  "48": {
    "classicId": "girls-und-panzer",
    "characterId": "sayo-hikawa",
    "coverId": "houkago-teibou-nisshi",
    "quoteId": "kim-norae",
    "emojiId": "ange-vierge",
    "shipId": "yuunamimori",
    "silhouetteId": "princess-fine",
    "songId": "deal-with-the-devil"
  },
  "49": {
    "classicId": "flip-flappers",
    "characterId": "miho-nishizumi",
    "coverId": "do-it-yourself",
    "quoteId": "sophie-twilight",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "nina-hina",
    "silhouetteId": "ai-narata",
    "songId": "shukufuku"
  },
  "50": {
    "classicId": "kill-me-now",
    "characterId": "yvonne-smollett",
    "coverId": "straight-girl-trap",
    "quoteId": "io-utsushicha",
    "emojiId": "manaria-friends",
    "shipId": "ninomomo",
    "silhouetteId": "sora-honda",
    "songId": "kimi-no-gin-no-niwa"
  },
  "51": {
    "classicId": "senran-kagura",
    "characterId": "momo-sheep",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "yori-asanagi",
    "emojiId": "princess-principal",
    "shipId": "mitsu",
    "silhouetteId": "ritsu-tainaka",
    "songId": "one-room-sugar-life"
  },
  "52": {
    "classicId": "high-school-fleet",
    "characterId": "lin-luxi",
    "coverId": "witch-from-mercury",
    "quoteId": "aki-wolf",
    "emojiId": "prisma-illya",
    "shipId": "morimura",
    "silhouetteId": "yuzu-konohana",
    "songId": "deal-with-the-devil"
  },
  "53": {
    "classicId": "kimi-ga-shinu-made",
    "characterId": "ayaka-shiraishi",
    "coverId": "hello-melancholic",
    "quoteId": "chris-yukine",
    "emojiId": "green-tea-bitch",
    "shipId": "jiho-woori",
    "silhouetteId": "kobayashi",
    "songId": "yuriyurararara"
  },
  "54": {
    "classicId": "not-so-shoujo-love-story",
    "characterId": "haruka-tenoh",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "tokaku-azuma",
    "emojiId": "girls-band-cry",
    "shipId": "miho-yukari",
    "silhouetteId": "hikari-kagura",
    "songId": "shiny-days"
  },
  "55": {
    "classicId": "tsubame-tip-off",
    "characterId": "special-week",
    "coverId": "hero-san",
    "quoteId": "malori-crow",
    "emojiId": "citrus",
    "shipId": "sumikanoko",
    "silhouetteId": "yuki-kyou-kano",
    "songId": "flip-flappers-ed"
  },
  "56": {
    "classicId": "show-by-rock",
    "characterId": "naoi-manaka",
    "coverId": "toji-no-miko",
    "quoteId": "mary-saotome",
    "emojiId": "stardust-telepath",
    "shipId": "eveaoi",
    "silhouetteId": "utena-hiiragi",
    "songId": "memories-comic-girls"
  },
  "57": {
    "classicId": "comic-girls",
    "characterId": "mitsuki-yano",
    "coverId": "catulus-syndrome",
    "quoteId": "mary-saotome",
    "emojiId": "netsuzou-trap",
    "shipId": "rinpana",
    "silhouetteId": "maho-akashi",
    "songId": "sakura-skip"
  },
  "58": {
    "classicId": "sailor-moon-s",
    "characterId": "tokaku-azuma",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "aya-oosawa",
    "emojiId": "netsuzou-trap",
    "shipId": "tokaku-haru",
    "silhouetteId": "kim-norae",
    "songId": "flip-flappers-ed"
  },
  "59": {
    "classicId": "goodbye-my-rose-garden",
    "characterId": "nodoka-haramura",
    "coverId": "madoka-magica",
    "quoteId": "miho-nishizumi",
    "emojiId": "citrus",
    "shipId": "ririyuyu",
    "silhouetteId": "konomi-fujiwara",
    "songId": "ten-to-sen"
  },
  "60": {
    "classicId": "gokujo",
    "characterId": "tsubasa-kazanari",
    "coverId": "granbelm",
    "quoteId": "umiri-yahata",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "hinako-asahi",
    "silhouetteId": "kobayashi",
    "songId": "arc-en-ciel"
  },
  "61": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "kiyashu-vanadis",
    "coverId": "tari-tari",
    "quoteId": "maria-vampire",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "mahikano",
    "silhouetteId": "seika-ijichi",
    "songId": "tenshi-ni-fureta-yo"
  },
  "62": {
    "classicId": "hanayamata",
    "characterId": "mafuyu-tsurezure",
    "coverId": "senran-kagura",
    "quoteId": "asahi-satou",
    "emojiId": "shimeji-simulation",
    "shipId": "tsubamaria",
    "silhouetteId": "kobayashi",
    "songId": "red-liberation"
  },
  "63": {
    "classicId": "i-married-my-best-friend",
    "characterId": "nyamu-yuutenji",
    "coverId": "long-awaited-feelings",
    "quoteId": "sumika-chibana",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "mitsu",
    "silhouetteId": "eli-ayase",
    "songId": "eternal-eternity"
  },
  "64": {
    "classicId": "asteroid-in-love",
    "characterId": "yuuna-matsubara",
    "coverId": "the-third-party",
    "quoteId": "hina-gbc",
    "emojiId": "watamote",
    "shipId": "chito-yuuri",
    "silhouetteId": "futaba-isurugi",
    "songId": "go-go-maniac"
  },
  "65": {
    "classicId": "gokujo",
    "characterId": "rinku-aimoto",
    "coverId": "amanchu",
    "quoteId": "madoka-kaname",
    "emojiId": "fluttering-feelings",
    "shipId": "hinatanoa",
    "silhouetteId": "sayo-hikawa",
    "songId": "himitsu-no-melody"
  },
  "66": {
    "classicId": "goodbye-my-rose-garden",
    "characterId": "kotori-minami",
    "coverId": "school-zone-girls",
    "quoteId": "subaru-awa",
    "emojiId": "tamen-de-gushi",
    "shipId": "nozoeli",
    "silhouetteId": "yuu-yuutani",
    "songId": "connect-madoka"
  },
  "67": {
    "classicId": "white-angels-have-no-wings",
    "characterId": "mamori-tokonome",
    "coverId": "love-doctor",
    "quoteId": "nanaki-fujishiro",
    "emojiId": "hana-ni-arashi",
    "shipId": "sayohina",
    "silhouetteId": "nika-nanaura",
    "songId": "raise-your-hands"
  },
  "68": {
    "classicId": "manaria-friends",
    "characterId": "utena-hiiragi",
    "coverId": "getting-to-know-grace",
    "quoteId": "hinata-futari",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "takitomo",
    "silhouetteId": "villhaze",
    "songId": "alive-lycoris"
  },
  "69": {
    "classicId": "comic-girls",
    "characterId": "mutsumi-wakaba",
    "coverId": "school-zone-girls",
    "quoteId": "kanoko-mamiya",
    "emojiId": "watamote",
    "shipId": "yuunamimori",
    "silhouetteId": "yuri-tamura",
    "songId": "machikado-tangent"
  },
  "70": {
    "classicId": "new-game",
    "characterId": "yumeko-jabami",
    "coverId": "netsuzou-trap",
    "quoteId": "kaoruko-hanayagi",
    "emojiId": "love-to-lie-angle",
    "shipId": "rinpana",
    "silhouetteId": "aki-wolf",
    "songId": "dreamriser"
  },
  "71": {
    "classicId": "dear-my-teacher",
    "characterId": "yuzu-aihara",
    "coverId": "i-love-amy",
    "quoteId": "kasumi-toyama",
    "emojiId": "how-do-we-relationship",
    "shipId": "kase-yamada",
    "silhouetteId": "yuu-sonoda",
    "songId": "serendipity-flip"
  },
  "72": {
    "classicId": "so-ra-no-wo-to",
    "characterId": "hina-hikawa",
    "coverId": "show-me-your-bust",
    "quoteId": "maki-nishikino",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "kagu-iro",
    "silhouetteId": "shizuku-hoshikawa",
    "songId": "sacred-world"
  },
  "73": {
    "classicId": "love-live-sunshine",
    "characterId": "special-week",
    "coverId": "birdie-wing",
    "quoteId": "maria-cadenzavna-eve",
    "emojiId": "how-do-we-relationship",
    "shipId": "kotoumi",
    "silhouetteId": "kiyashu-vanadis",
    "songId": "mayoiuta"
  },
  "74": {
    "classicId": "show-me-your-bust",
    "characterId": "mio-akiyama",
    "coverId": "fluttering-feelings",
    "quoteId": "grea",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "illya-miyu",
    "silhouetteId": "lapis-tenebrae",
    "songId": "sakura-skip"
  },
  "75": {
    "classicId": "our-wonderful-days",
    "characterId": "airi-sezaki",
    "coverId": "shimeji-simulation",
    "quoteId": "chika-takami",
    "emojiId": "always-human",
    "shipId": "yuu-atori",
    "silhouetteId": "nika-nanaura",
    "songId": "flip-flappers-ed"
  },
  "76": {
    "classicId": "magirevo",
    "characterId": "uika-misumi",
    "coverId": "kuttsukiboshi",
    "quoteId": "qiu-tong",
    "emojiId": "valkyrie-drive",
    "shipId": "makoto-akane",
    "silhouetteId": "hime-shiraki",
    "songId": "hoshi-no-dialogue"
  },
  "77": {
    "classicId": "sabagebu",
    "characterId": "saki-miyanaga",
    "coverId": "an-easy-introduction-to-love-triangles",
    "quoteId": "honey-trap",
    "emojiId": "vanadis-heart",
    "shipId": "konatsukoyuki",
    "silhouetteId": "mio-akiyama",
    "songId": "sacred-world"
  },
  "78": {
    "classicId": "tamen-de-gushi",
    "characterId": "mahiru-kouzuki",
    "coverId": "days-of-love-at-seagull-villa",
    "quoteId": "nijika-ijichi",
    "emojiId": "soulmate-gl",
    "shipId": "kase-yamada",
    "silhouetteId": "miku-kohinata",
    "songId": "red-liberation"
  },
  "79": {
    "classicId": "birdie-wing",
    "characterId": "aki-wolf",
    "coverId": "vampeerz",
    "quoteId": "chisato-shirasagi",
    "emojiId": "izetta",
    "shipId": "himemitsuki",
    "silhouetteId": "sora-honda",
    "songId": "kokoro-ni-tsubomi"
  },
  "80": {
    "classicId": "mikagura-gakuen",
    "characterId": "kim-norae",
    "coverId": "kin-iro-movie",
    "quoteId": "rinku-aimoto",
    "emojiId": "flip-flappers",
    "shipId": "aniseuphie",
    "silhouetteId": "haruka-takayama",
    "songId": "cross-ange-op1"
  },
  "81": {
    "classicId": "qualia-the-purple",
    "characterId": "suletta-mercury",
    "coverId": "granbelm",
    "quoteId": "baek-seola",
    "emojiId": "otherside-picnic",
    "shipId": "nina-hina",
    "silhouetteId": "akane-maekawa",
    "songId": "miracle-rush"
  },
  "82": {
    "classicId": "fragtime",
    "characterId": "queen-velverosa",
    "coverId": "this-monster-wants-to-eat-me",
    "quoteId": "mutsumi-wakaba",
    "emojiId": "otherside-picnic",
    "shipId": "anontomo",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "83": {
    "classicId": "assault-lily-fruits",
    "characterId": "nika-nanaura",
    "coverId": "granbelm",
    "quoteId": "yukina-minato",
    "emojiId": "netsuzou-trap",
    "shipId": "morimura",
    "silhouetteId": "kokoro-tsurumaki",
    "songId": "shukufuku"
  },
  "84": {
    "classicId": "im-in-love-with-the-villainess",
    "characterId": "kyoko-sakura",
    "coverId": "everyday-lily",
    "quoteId": "chidori-takamori",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "harumatsu",
    "silhouetteId": "shizuku-hoshikawa",
    "songId": "alive-lycoris"
  },
  "85": {
    "classicId": "futaribeya",
    "characterId": "aki-wolf",
    "coverId": "slow-loop",
    "quoteId": "yumeko-jabami",
    "emojiId": "serenade",
    "shipId": "ran-moca",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "kimi-ni-furete"
  },
  "86": {
    "classicId": "chuunibyou",
    "characterId": "nika-nanaura",
    "coverId": "futaribeya",
    "quoteId": "hinako-hanamura",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "hifumiaoba",
    "silhouetteId": "kyoko-toshino",
    "songId": "kimi-ni-furete"
  },
  "87": {
    "classicId": "gochuumon-wa-usagi",
    "characterId": "sayaka-miki",
    "coverId": "futari-monologue",
    "quoteId": "hinata-futari",
    "emojiId": "uma-musume",
    "shipId": "kagu-iro",
    "silhouetteId": "yachiyo-inugami",
    "songId": "hoshi-to-hana"
  },
  "88": {
    "classicId": "tari-tari",
    "characterId": "mejiro-mcqueen",
    "coverId": "show-by-rock",
    "quoteId": "haruka-takayama",
    "emojiId": "valkyrie-drive",
    "shipId": "mizore-nozomi",
    "silhouetteId": "mary-saotome",
    "songId": "dream-solister"
  },
  "89": {
    "classicId": "tropical-fish",
    "characterId": "anisphia-wynn-palettia",
    "coverId": "adachi-and-shimamura",
    "quoteId": "noa-himesaka",
    "emojiId": "happy-sugar-life",
    "shipId": "saki-mutsu",
    "silhouetteId": "mimi-mimily",
    "songId": "haruhikage"
  },
  "90": {
    "classicId": "hana-ni-arashi",
    "characterId": "anon-chihaya",
    "coverId": "shine-post",
    "quoteId": "saki-kindaichi",
    "emojiId": "a-joyful-life",
    "shipId": "sumikanoko",
    "silhouetteId": "rin-touyama",
    "songId": "kimi-ni-aeta-hi"
  },
  "91": {
    "classicId": "catch-these-hands",
    "characterId": "cocona",
    "coverId": "ring-my-bell",
    "quoteId": "jiho-bust",
    "emojiId": "mygo",
    "shipId": "sayohina",
    "silhouetteId": "yori-asanagi",
    "songId": "ano-mori-de-matteru"
  },
  "92": {
    "classicId": "blooming-sequence",
    "characterId": "ayumu-uehara",
    "coverId": "yuuki-yuuna",
    "quoteId": "satsuki-konohana",
    "emojiId": "nevermore-webtoon",
    "shipId": "luo-xinyue",
    "silhouetteId": "grea",
    "songId": "irodori-jelee"
  },
  "93": {
    "classicId": "kuzu-no-honkai",
    "characterId": "ange-cross-ange",
    "coverId": "the-third-party",
    "quoteId": "kurumi-yoshizawa",
    "emojiId": "lycoris-recoil",
    "shipId": "soratori",
    "silhouetteId": "subaru-awa",
    "songId": "guitar-loneliness"
  },
  "94": {
    "classicId": "kakegurui",
    "characterId": "honoka-kosaka",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "hinata-futari",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "mel-lynn",
    "silhouetteId": "ren",
    "songId": "red-liberation"
  },
  "95": {
    "classicId": "witch-from-mercury",
    "characterId": "moca-aoba",
    "coverId": "whispering-you-a-love-song",
    "quoteId": "reina-kousaka",
    "emojiId": "ring-my-bell",
    "shipId": "utekiwi",
    "silhouetteId": "noa-himesaka",
    "songId": "shiny-days"
  },
  "96": {
    "classicId": "getting-to-know-grace",
    "characterId": "lin-luxi",
    "coverId": "harukana-receive",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "our-wonderful-days",
    "shipId": "konatsukoyuki",
    "silhouetteId": "soyo-nagasaki",
    "songId": "dreamriser"
  },
  "97": {
    "classicId": "granbelm",
    "characterId": "yui-yamada",
    "coverId": "love-to-lie-angle",
    "quoteId": "illyasviel-von-einzbern",
    "emojiId": "assault-lily-league",
    "shipId": "kasu-arisa",
    "silhouetteId": "erika-kizaki",
    "songId": "sacred-world"
  },
  "98": {
    "classicId": "futari-monologue",
    "characterId": "noa-himesaka",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "chisato-nishikigi",
    "emojiId": "kageki-shojo",
    "shipId": "rinpana",
    "silhouetteId": "sakiko-togawa",
    "songId": "magia-madoka"
  },
  "99": {
    "classicId": "love-to-lie-angle",
    "characterId": "satsuki-konohana",
    "coverId": "bloom-into-you",
    "quoteId": "queen-velverosa",
    "emojiId": "assault-lily-league",
    "shipId": "hinako-shiori",
    "silhouetteId": "momo-sheep",
    "songId": "arc-en-ciel"
  },
  "100": {
    "classicId": "girls-und-panzer",
    "characterId": "anne-manaria",
    "coverId": "selection-project",
    "quoteId": "yu-takasaki",
    "emojiId": "yuru-camp",
    "shipId": "mayumi-rin",
    "silhouetteId": "yuzu-konohana",
    "songId": "magia-madoka"
  },
  "101": {
    "classicId": "love-live-hasunosora",
    "characterId": "ayaka-shiraishi",
    "coverId": "love-live-sip",
    "quoteId": "kasumi-toyama",
    "emojiId": "kitanai-kimi",
    "shipId": "yoshimio",
    "silhouetteId": "terakomari-gandesblood",
    "songId": "one-room-sugar-life"
  },
  "102": {
    "classicId": "kakegurui",
    "characterId": "shizuku-hoshikawa",
    "coverId": "uma-musume",
    "quoteId": "fuuko-taki",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "kasu-arisa",
    "silhouetteId": "satou-matsuzaka",
    "songId": "memories-comic-girls"
  },
  "103": {
    "classicId": "vampeerz",
    "characterId": "satou-matsuzaka",
    "coverId": "kiniro-mosaic",
    "quoteId": "miwa-inuzuka",
    "emojiId": "bang-dream",
    "shipId": "rinpana",
    "silhouetteId": "queen-velverosa",
    "songId": "snow-halation"
  },
  "104": {
    "classicId": "if-i-could-reach-you",
    "characterId": "umiri-yahata",
    "coverId": "my-food-looks-very-cute",
    "quoteId": "aoi-amawashi",
    "emojiId": "otherside-picnic",
    "shipId": "raeclaire",
    "silhouetteId": "nijika-ijichi",
    "songId": "cross-ange-op1"
  },
  "105": {
    "classicId": "asagao-to-kase-san",
    "characterId": "sophie-twilight",
    "coverId": "handsome-girl-and-sheltered-girl",
    "quoteId": "ayaka-sakurai",
    "emojiId": "nevermore-webtoon",
    "shipId": "chuchunika",
    "silhouetteId": "momoka-kawaragi",
    "songId": "snow-halation"
  },
  "106": {
    "classicId": "the-summer-you-were-there",
    "characterId": "anne-manaria",
    "coverId": "slow-loop",
    "quoteId": "takina-inoue",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "yuiazu",
    "silhouetteId": "homura-akemi",
    "songId": "kimama-na-tenshi-tachi"
  },
  "107": {
    "classicId": "hero-san",
    "characterId": "yoshika-miyafuji",
    "coverId": "sadistic-beauty-side-b",
    "quoteId": "homura-akemi",
    "emojiId": "mage-and-demon-queen",
    "shipId": "nomokasu",
    "silhouetteId": "erika-kizaki",
    "songId": "dream-solister"
  },
  "108": {
    "classicId": "inugami-nekoyama",
    "characterId": "yukari-akiyama",
    "coverId": "yuri-is-my-job",
    "quoteId": "mami-tomoe",
    "emojiId": "superwomen-in-love",
    "shipId": "kaseyamada",
    "silhouetteId": "anne-manaria",
    "songId": "sacred-world"
  },
  "109": {
    "classicId": "lycoris-recollect",
    "characterId": "dia-kurosawa",
    "coverId": "kiniro-mosaic",
    "quoteId": "miyu-edelfelt",
    "emojiId": "green-tea-bitch",
    "shipId": "rinku-maho",
    "silhouetteId": "saeko-tsutsumi",
    "songId": "other-side-of-wall"
  },
  "110": {
    "classicId": "netsuzou-trap",
    "characterId": "rinku-aimoto",
    "coverId": "strike-witches",
    "quoteId": "riri-hitotsuyanagi",
    "emojiId": "izetta",
    "shipId": "tohrubayashi",
    "silhouetteId": "hibiki-sugawa",
    "songId": "valkyrie-drive-op"
  },
  "111": {
    "classicId": "pulse",
    "characterId": "riko-sakurauchi",
    "coverId": "assault-lily-league",
    "quoteId": "nodoka-haramura",
    "emojiId": "adachi-and-shimamura",
    "shipId": "shijima-majime",
    "silhouetteId": "menou-virgin-road",
    "songId": "blue-bud-netsuzou"
  },
  "112": {
    "classicId": "wataten-movie",
    "characterId": "suletta-mercury",
    "coverId": "flip-flappers",
    "quoteId": "chidori-takamori",
    "emojiId": "sakura-trick",
    "shipId": "yoojin-hyeji",
    "silhouetteId": "kumiko-oumae",
    "songId": "synchrogazer"
  },
  "113": {
    "classicId": "ano-koro-no-aoi-hoshi",
    "characterId": "satou-matsuzaka",
    "coverId": "amanchu",
    "quoteId": "kureha-tsubaki",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "yuu-atori",
    "silhouetteId": "akane-maekawa",
    "songId": "blue-bud-netsuzou"
  },
  "114": {
    "classicId": "i-love-amy",
    "characterId": "tomori-takamatsu",
    "coverId": "flip-flappers",
    "quoteId": "maria-vampire",
    "emojiId": "tamen-de-gushi",
    "shipId": "kasu-arisa",
    "silhouetteId": "tomo-ebizuka",
    "songId": "cross-ange-op1"
  },
  "115": {
    "classicId": "ring-my-bell",
    "characterId": "rin-touyama",
    "coverId": "cross-ange",
    "quoteId": "misa-utsushicha",
    "emojiId": "citrus",
    "shipId": "ginkure",
    "silhouetteId": "yukina-minato",
    "songId": "sacred-world"
  },
  "116": {
    "classicId": "do-it-yourself",
    "characterId": "yumeko-jabami",
    "coverId": "ghosts-of-greywoods",
    "quoteId": "ren",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "maria-lan",
    "silhouetteId": "uika-misumi",
    "songId": "kimi-ni-furete"
  },
  "117": {
    "classicId": "princess-principal",
    "characterId": "chisato-shirasagi",
    "coverId": "this-monster-wants-to-eat-me",
    "quoteId": "silence-suzuka",
    "emojiId": "love-live-sip",
    "shipId": "emma-vivian",
    "silhouetteId": "tomoko-kuroki",
    "songId": "raise-your-hands"
  },
  "118": {
    "classicId": "citrus",
    "characterId": "rin-toyama",
    "coverId": "i-love-amy",
    "quoteId": "nyamu-yuutenji",
    "emojiId": "sakura-trick",
    "shipId": "hinatanoa",
    "silhouetteId": "kaguya-cosmic",
    "songId": "umapyoi-densetsu"
  },
  "119": {
    "classicId": "fluttering-feelings",
    "characterId": "sakiko-togawa",
    "coverId": "princess-connect-redive",
    "quoteId": "nico-yazawa",
    "emojiId": "sakura-trick",
    "shipId": "shino-ren",
    "silhouetteId": "nyamu-yuutenji",
    "songId": "valkyrie-drive-op"
  },
  "120": {
    "classicId": "chou-kaguya-hime",
    "characterId": "maho-akashi",
    "coverId": "dear-my-teacher",
    "quoteId": "da-kyeong",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "nozoeli",
    "silhouetteId": "aoi-amawashi",
    "songId": "starlog-illya"
  },
  "121": {
    "classicId": "roll-over-and-die",
    "characterId": "renako-amaori",
    "coverId": "catulus-syndrome",
    "quoteId": "nodoka-haramura",
    "emojiId": "sheep-princess",
    "shipId": "mahikano",
    "silhouetteId": "sun-jing",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "122": {
    "classicId": "girls-last-tour",
    "characterId": "tong-tong",
    "coverId": "yuri-seijin-naoko-san",
    "quoteId": "io-utsushicha",
    "emojiId": "manaria-friends",
    "shipId": "annabel-lenore",
    "silhouetteId": "kurumi-yoshizawa",
    "songId": "cross-ange-op1"
  },
  "123": {
    "classicId": "shimeji-simulation",
    "characterId": "kasuga-totoko",
    "coverId": "harukana-receive",
    "quoteId": "grea",
    "emojiId": "asagao-to-kase-san",
    "shipId": "hinako-shiori",
    "silhouetteId": "sakura-adachi",
    "songId": "guruguru-dj"
  },
  "124": {
    "classicId": "asumi-chan",
    "characterId": "ginko-yurishiro",
    "coverId": "bocchi-the-rock",
    "quoteId": "yoshika-miyafuji",
    "emojiId": "vampire-in-the-garden",
    "shipId": "yuutou",
    "silhouetteId": "mitsuki-koga",
    "songId": "raise-your-hands"
  },
  "125": {
    "classicId": "toji-no-miko",
    "characterId": "honey-trap",
    "coverId": "vtuber-legend",
    "quoteId": "rupa",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "nanajun",
    "silhouetteId": "mel-pulse",
    "songId": "kimi-ni-aeta-hi"
  },
  "126": {
    "classicId": "after-hours",
    "characterId": "yuu-sonoda",
    "coverId": "cross-ange",
    "quoteId": "hinata-futari",
    "emojiId": "the-summer-you-were-there",
    "shipId": "takitomo",
    "silhouetteId": "hina-gbc",
    "songId": "memories-comic-girls"
  },
  "127": {
    "classicId": "qualia-the-purple",
    "characterId": "grea",
    "coverId": "our-teachers-are-dating",
    "quoteId": "mai-oduka",
    "emojiId": "yuru-camp",
    "shipId": "takitomo",
    "silhouetteId": "tokai-teio",
    "songId": "haruhikage"
  },
  "128": {
    "classicId": "lapis-relights",
    "characterId": "arisa-ichigaya",
    "coverId": "harukana-receive",
    "quoteId": "silence-suzuka",
    "emojiId": "kakegurui",
    "shipId": "ange-hilda",
    "silhouetteId": "anon-chihaya",
    "songId": "azalea-citrus"
  },
  "129": {
    "classicId": "vividred-operation",
    "characterId": "rin-touyama",
    "coverId": "lily-yy",
    "quoteId": "lenore-nevermore",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "akebi-erika",
    "silhouetteId": "yuki-hanzomon",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "130": {
    "classicId": "inugami-nekoyama",
    "characterId": "nadeshiko-kagamihara",
    "coverId": "tsubame-tip-off",
    "quoteId": "umiri-yahata",
    "emojiId": "manaria-friends",
    "shipId": "shijima-majime",
    "silhouetteId": "tokai-teio",
    "songId": "red-birthmark"
  },
  "131": {
    "classicId": "girls-und-panzer",
    "characterId": "arisa-ichigaya",
    "coverId": "ange-vierge",
    "quoteId": "tomoka-kase",
    "emojiId": "mage-and-demon-queen",
    "shipId": "anne-grea",
    "silhouetteId": "anne-manaria",
    "songId": "hikari-no-senritsu"
  },
  "132": {
    "classicId": "run-away-with-me-girl",
    "characterId": "yachiyo-tsukimi",
    "coverId": "ms-vampire-who-lives-in-my-neighborhood",
    "quoteId": "izetta-witch",
    "emojiId": "sakura-trick",
    "shipId": "aniseuphie",
    "silhouetteId": "queen-velverosa",
    "songId": "dreamriser"
  },
  "133": {
    "classicId": "tropical-fish",
    "characterId": "chika-takami",
    "coverId": "vampeerz",
    "quoteId": "komichi-akebi",
    "emojiId": "asagao-to-kase-san",
    "shipId": "kase-yamada",
    "silhouetteId": "miwa-inuzuka",
    "songId": "kimama-na-tenshi-tachi"
  },
  "134": {
    "classicId": "magirevo",
    "characterId": "misa-utsushicha",
    "coverId": "blue-reflection-ray",
    "quoteId": "mami-tomoe",
    "emojiId": "new-game",
    "shipId": "sarasa-ai",
    "silhouetteId": "shizuku-hoshikawa",
    "songId": "ten-to-sen"
  },
  "135": {
    "classicId": "getting-to-know-grace",
    "characterId": "nyamu-yuutenji",
    "coverId": "hana-to-hina",
    "quoteId": "atori-mizutori",
    "emojiId": "valkyrie-drive",
    "shipId": "aya-chisato",
    "silhouetteId": "utena-hiiragi",
    "songId": "connect-madoka"
  },
  "136": {
    "classicId": "yuyushiki",
    "characterId": "kumiko-oumae",
    "coverId": "princess-connect-redive",
    "quoteId": "shino",
    "emojiId": "soulmate-gl",
    "shipId": "yuunamimori",
    "silhouetteId": "maki-nishikino",
    "songId": "hoshi-no-tabibito"
  },
  "137": {
    "classicId": "our-teachers-are-dating",
    "characterId": "anne-manaria",
    "coverId": "love-live-sip",
    "quoteId": "hilda-cross-ange",
    "emojiId": "kill-me-now",
    "shipId": "tokaku-haru",
    "silhouetteId": "nozomi-kasaki",
    "songId": "hana-no-tou"
  },
  "138": {
    "classicId": "vexations-of-a-shut-in-vampire",
    "characterId": "takina-inoue",
    "coverId": "seiyuu-radio",
    "quoteId": "ye-xing",
    "emojiId": "akebi-chan",
    "shipId": "kaoru-chisato",
    "silhouetteId": "kou-yagami",
    "songId": "my-dream-girls"
  },
  "139": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "vivian-night-owls",
    "coverId": "even-if-it-was-just-once",
    "quoteId": "ayaka-sakurai",
    "emojiId": "ring-my-bell",
    "shipId": "illya-miyu",
    "silhouetteId": "ayaka-shiraishi",
    "songId": "raise-your-hands"
  },
  "140": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "ajisai-sena",
    "coverId": "watamote",
    "quoteId": "ayaka-sakurai",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "uta-ayaka",
    "silhouetteId": "sayo-hikawa",
    "songId": "yuriyurararara"
  },
  "141": {
    "classicId": "our-wonderful-days",
    "characterId": "anon-chihaya",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "ren",
    "emojiId": "new-game",
    "shipId": "maria-lan",
    "silhouetteId": "jiho-bust",
    "songId": "valkyrie-drive-op"
  },
  "142": {
    "classicId": "revue-starlight",
    "characterId": "airi-sezaki",
    "coverId": "love-live-superstar",
    "quoteId": "subaru-awa",
    "emojiId": "cross-ange",
    "shipId": "mitsu",
    "silhouetteId": "satou-matsuzaka",
    "songId": "guruguru-dj"
  },
  "143": {
    "classicId": "whispering-you-a-love-song",
    "characterId": "junna-hoshimi",
    "coverId": "asumi-chan",
    "quoteId": "yui-yamada",
    "emojiId": "witch-from-mercury",
    "shipId": "haruyuu",
    "silhouetteId": "kyoko-toshino",
    "songId": "follow-your-arrows"
  },
  "144": {
    "classicId": "izetta",
    "characterId": "sarasa-watanabe",
    "coverId": "slow-loop",
    "quoteId": "princess-charlotte",
    "emojiId": "strike-witches",
    "shipId": "saya-hinako",
    "silhouetteId": "misaki-okusawa",
    "songId": "deal-with-the-devil"
  },
  "145": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "haru-ichinose",
    "coverId": "world-dai-star",
    "quoteId": "shino",
    "emojiId": "yuri-is-my-job",
    "shipId": "illya-miyu",
    "silhouetteId": "nina-iseri",
    "songId": "spicy-piece"
  },
  "146": {
    "classicId": "love-live-sunshine",
    "characterId": "hinako-hanamura",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "shiori-oomi",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "tsubamaria",
    "silhouetteId": "lin-luxi",
    "songId": "my-dream-girls"
  },
  "147": {
    "classicId": "lycoris-recollect",
    "characterId": "yuko-yoshida",
    "coverId": "the-guy-she-was-interested-in",
    "quoteId": "saki-kindaichi",
    "emojiId": "girls-band-cry",
    "shipId": "bocchiku",
    "silhouetteId": "tomori-takamatsu",
    "songId": "venus-line"
  },
  "148": {
    "classicId": "vampire-in-the-garden",
    "characterId": "mizore-yoroizuka",
    "coverId": "hanebado",
    "quoteId": "ange-le-carre",
    "emojiId": "bloom-into-you",
    "shipId": "nina-hina",
    "silhouetteId": "kureha-tsubaki",
    "songId": "kokoro-ni-tsubomi"
  },
  "149": {
    "classicId": "fluttering-feelings",
    "characterId": "chris-yukine",
    "coverId": "yuyushiki",
    "quoteId": "momo-vampire",
    "emojiId": "princess-principal",
    "shipId": "nomokasu",
    "silhouetteId": "maya-tendo",
    "songId": "serendipity-flip"
  },
  "150": {
    "classicId": "hina-logi",
    "characterId": "minato-asano",
    "coverId": "yuuki-yuuna",
    "quoteId": "kiyashu-vanadis",
    "emojiId": "lycoris-recoil",
    "shipId": "kikusei",
    "silhouetteId": "natori-ryoko",
    "songId": "synchrogazer"
  },
  "151": {
    "classicId": "hino-san-no-baka",
    "characterId": "suzu-nekoyama",
    "coverId": "beauty-and-the-beast-girl",
    "quoteId": "yuki-hanzomon",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "ange-hilda",
    "silhouetteId": "natori-ryoko",
    "songId": "umapyoi-densetsu"
  },
  "152": {
    "classicId": "girls-band-cry",
    "characterId": "special-week",
    "coverId": "gakkou-gurashi",
    "quoteId": "hina-gbc",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "himemitsuki",
    "silhouetteId": "kasuga-totoko",
    "songId": "zattou-bokura-no-machi"
  },
  "153": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "hina-gbc",
    "coverId": "urara-meirochou",
    "quoteId": "uika-misumi",
    "emojiId": "valkyrie-drive",
    "shipId": "menou-akari",
    "silhouetteId": "kureha-tsubaki",
    "songId": "miracle-rush"
  },
  "154": {
    "classicId": "kanojo-to-himitsu",
    "characterId": "hibiki-tachibana",
    "coverId": "tamen-de-gushi",
    "quoteId": "maya-tendo",
    "emojiId": "shimeji-simulation",
    "shipId": "annabel-lenore",
    "silhouetteId": "kasumi-toyama",
    "songId": "kimi-ni-aeta-hi"
  },
  "155": {
    "classicId": "catch-these-hands",
    "characterId": "shino",
    "coverId": "love-live-sip",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "soulmate-gl",
    "shipId": "anonsoyo",
    "silhouetteId": "azusa-nakano",
    "songId": "won3chu-kissme"
  },
  "156": {
    "classicId": "do-it-yourself",
    "characterId": "nomoto-yuki",
    "coverId": "tamako-market",
    "quoteId": "yuu-sonoda",
    "emojiId": "valkyrie-drive",
    "shipId": "illya-miyu",
    "silhouetteId": "chidori-takamori",
    "songId": "connect-madoka"
  },
  "157": {
    "classicId": "vampeerz",
    "characterId": "sayaka-miki",
    "coverId": "lycoris-recollect",
    "quoteId": "yoo-jin-serenade",
    "emojiId": "girls-last-tour",
    "shipId": "aniseuphie",
    "silhouetteId": "reina-kousaka",
    "songId": "guruguru-dj"
  },
  "158": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "misaki-okusawa",
    "coverId": "assault-lily",
    "quoteId": "yuna-yuki",
    "emojiId": "watamote",
    "shipId": "era-yoonsung",
    "silhouetteId": "arisa-ichigaya",
    "songId": "serendipity-flip"
  },
  "159": {
    "classicId": "wixoss",
    "characterId": "kokoro-tsurumaki",
    "coverId": "maria-holic",
    "quoteId": "hinata-futari",
    "emojiId": "soulmate-gl",
    "shipId": "komavill",
    "silhouetteId": "rin-touyama",
    "songId": "kokoro-ni-tsubomi"
  },
  "160": {
    "classicId": "girls-band-cry",
    "characterId": "kasuga-totoko",
    "coverId": "liz-to-aoi-tori",
    "quoteId": "aya-maruyama",
    "emojiId": "granbelm",
    "shipId": "himemitsuki",
    "silhouetteId": "aki-wolf",
    "songId": "hoshi-to-hana"
  },
  "161": {
    "classicId": "tamen-de-gushi",
    "characterId": "nadeshiko-kagamihara",
    "coverId": "catch-these-hands",
    "quoteId": "hifumi-takimoto",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "kasu-arisa",
    "silhouetteId": "hougetsu-shimamura",
    "songId": "raise-your-hands"
  },
  "162": {
    "classicId": "high-school-fleet",
    "characterId": "grea",
    "coverId": "my-cute-little-kitten",
    "quoteId": "ai-narata",
    "emojiId": "madoka-magica",
    "shipId": "anne-grea",
    "silhouetteId": "miho-nishizumi",
    "songId": "ten-to-sen"
  },
  "163": {
    "classicId": "im-in-love-with-the-villainess",
    "characterId": "mitsuki-koga",
    "coverId": "adachi-and-shimamura",
    "quoteId": "haru-ichinose",
    "emojiId": "tamen-de-gushi",
    "shipId": "teiomcqueen",
    "silhouetteId": "hibiki-tachibana",
    "songId": "tenshi-ni-fureta-yo"
  },
  "164": {
    "classicId": "anemone-is-in-heat",
    "characterId": "mel-pulse",
    "coverId": "girls-last-tour",
    "quoteId": "kikuri-hiroi",
    "emojiId": "kitanai-kimi",
    "shipId": "tomo-rupa",
    "silhouetteId": "lenore-nevermore",
    "songId": "listen-htt"
  },
  "165": {
    "classicId": "everyday-lily",
    "characterId": "sayo-hikawa",
    "coverId": "witch-from-mercury",
    "quoteId": "anon-chihaya",
    "emojiId": "new-game",
    "shipId": "harumichi",
    "silhouetteId": "saeko-tsutsumi",
    "songId": "zattou-bokura-no-machi"
  },
  "166": {
    "classicId": "bocchi-the-rock",
    "characterId": "ayaka-shiraishi",
    "coverId": "shino-to-ren",
    "quoteId": "maki-nishikino",
    "emojiId": "birdie-wing",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "himari-kino",
    "songId": "magia-madoka"
  },
  "167": {
    "classicId": "adachi-and-shimamura",
    "characterId": "nika-nanaura",
    "coverId": "kin-iro-movie",
    "quoteId": "mizore-yoroizuka",
    "emojiId": "princess-principal",
    "shipId": "anonsoyo",
    "silhouetteId": "mutsumi-wakaba",
    "songId": "ten-to-sen"
  },
  "168": {
    "classicId": "yuruyuri",
    "characterId": "satsuki-konohana",
    "coverId": "amanchu",
    "quoteId": "akari-tokitoh",
    "emojiId": "chou-kaguya-hime",
    "shipId": "ririyuyu",
    "silhouetteId": "satsuki-konohana",
    "songId": "haruhikage"
  },
  "169": {
    "classicId": "tari-tari",
    "characterId": "mikage-futari",
    "coverId": "love-doctor",
    "quoteId": "yuri-tamura",
    "emojiId": "happy-sugar-life",
    "shipId": "ginkure",
    "silhouetteId": "yuko-yoshida",
    "songId": "serendipity-flip"
  },
  "170": {
    "classicId": "urara-meirochou",
    "characterId": "sayo-hikawa",
    "coverId": "love-live-sip",
    "quoteId": "chito-glt",
    "emojiId": "netsuzou-trap",
    "shipId": "chidori-nanoha",
    "silhouetteId": "majime-yamashita",
    "songId": "yuriyurararara"
  },
  "171": {
    "classicId": "our-wonderful-days",
    "characterId": "maya-tendo",
    "coverId": "bloom-into-you",
    "quoteId": "tomo-ebizuka",
    "emojiId": "long-awaited-feelings",
    "shipId": "mahikano",
    "silhouetteId": "akari-tokitoh",
    "songId": "kokoro-ni-tsubomi"
  },
  "172": {
    "classicId": "her-tale-of-shim-chong",
    "characterId": "queen-velverosa",
    "coverId": "princess-connect-redive",
    "quoteId": "kyoko-toshino",
    "emojiId": "yuruyuri",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "utena-hiiragi",
    "songId": "flip-flappers-ed"
  },
  "173": {
    "classicId": "getting-to-know-grace",
    "characterId": "kureha-tsubaki",
    "coverId": "ring-my-bell",
    "quoteId": "mimori-togo",
    "emojiId": "yuri-is-my-job",
    "shipId": "sayohina",
    "silhouetteId": "erika-kizaki",
    "songId": "hoshi-no-dialogue"
  },
  "174": {
    "classicId": "flip-flappers",
    "characterId": "yuki-kyou-kano",
    "coverId": "lapis-relights",
    "quoteId": "tong-tong",
    "emojiId": "citrus",
    "shipId": "soyosaki",
    "silhouetteId": "reina-kousaka",
    "songId": "kimi-ni-furete"
  },
  "175": {
    "classicId": "liz-to-aoi-tori",
    "characterId": "kokoro-tsurumaki",
    "coverId": "kuttsukiboshi",
    "quoteId": "mafuyu-tsurezure",
    "emojiId": "asagao-to-kase-san",
    "shipId": "saki-mutsu",
    "silhouetteId": "mei-aihara",
    "songId": "starlog-illya"
  },
  "176": {
    "classicId": "our-wonderful-days",
    "characterId": "sayaka-miki",
    "coverId": "non-non-biyori",
    "quoteId": "hanabi-natsuno",
    "emojiId": "i-love-amy",
    "shipId": "menou-akari",
    "silhouetteId": "yukari-akiyama",
    "songId": "raise-your-hands"
  },
  "177": {
    "classicId": "hino-san-no-baka",
    "characterId": "menou-virgin-road",
    "coverId": "cant-defy-the-lonely-girl",
    "quoteId": "shiori-oomi",
    "emojiId": "watanare",
    "shipId": "misa-koko",
    "silhouetteId": "sorawo-kamikoshi",
    "songId": "shukufuku"
  },
  "178": {
    "classicId": "soulmate-gl",
    "characterId": "mio-sakamoto",
    "coverId": "she-loves-to-cook-and-she-loves-to-eat",
    "quoteId": "subaru-awa",
    "emojiId": "revue-starlight",
    "shipId": "kikusei",
    "silhouetteId": "maria-cadenzavna-eve",
    "songId": "red-liberation"
  },
  "179": {
    "classicId": "anne-happy",
    "characterId": "azusa-nakano",
    "coverId": "girls-und-panzer",
    "quoteId": "riri-hitotsuyanagi",
    "emojiId": "adachi-and-shimamura",
    "shipId": "misa-io",
    "silhouetteId": "han-juhee",
    "songId": "one-room-sugar-life"
  },
  "180": {
    "classicId": "shine-post",
    "characterId": "shiori-oomi",
    "coverId": "hello-melancholic",
    "quoteId": "kaoru-seta",
    "emojiId": "a-joyful-life",
    "shipId": "rinku-maho",
    "silhouetteId": "yuki-kyou-kano",
    "songId": "go-go-maniac"
  },
  "181": {
    "classicId": "handsome-girl-and-sheltered-girl",
    "characterId": "nanami-oda",
    "coverId": "my-food-seems-to-be-very-cute",
    "quoteId": "mitsuki-yano",
    "emojiId": "magirevo",
    "shipId": "misa-io",
    "silhouetteId": "yu-takasaki",
    "songId": "seishun-complex"
  },
  "182": {
    "classicId": "kiniro-mosaic",
    "characterId": "maria-vampire",
    "coverId": "asagao-to-kase-san",
    "quoteId": "illyasviel-von-einzbern",
    "emojiId": "mygo",
    "shipId": "yuni-nanase",
    "silhouetteId": "yuzu-aihara",
    "songId": "hana-no-tou"
  },
  "183": {
    "classicId": "ms-vampire-who-lives-in-my-neighborhood",
    "characterId": "soyo-nagasaki",
    "coverId": "mayonaka-punch",
    "quoteId": "nozomi-kasaki",
    "emojiId": "bang-dream-pico",
    "shipId": "utekiwi",
    "silhouetteId": "yuki-kyou-kano",
    "songId": "spicy-piece"
  },
  "184": {
    "classicId": "ano-koro-no-aoi-hoshi",
    "characterId": "kobayashi",
    "coverId": "wataten",
    "quoteId": "michiru-kaioh",
    "emojiId": "chou-kaguya-hime",
    "shipId": "soyosaki",
    "silhouetteId": "ran-mitake",
    "songId": "sacred-world"
  },
  "185": {
    "classicId": "princess-principal",
    "characterId": "airi-sezaki",
    "coverId": "crown-handler",
    "quoteId": "yvonne-smollett",
    "emojiId": "asagao-to-kase-san",
    "shipId": "raeclaire",
    "silhouetteId": "noa-himesaka",
    "songId": "alive-lycoris"
  },
  "186": {
    "classicId": "maria-holic",
    "characterId": "yukari-akiyama",
    "coverId": "girls-und-panzer",
    "quoteId": "chuchu",
    "emojiId": "cross-ange",
    "shipId": "sayakatouko",
    "silhouetteId": "uika-misumi",
    "songId": "shukufuku"
  },
  "187": {
    "classicId": "manaria-friends",
    "characterId": "kasumi-toyama",
    "coverId": "happy-sugar-life",
    "quoteId": "rin-hoshizora",
    "emojiId": "valkyrie-drive",
    "shipId": "hibimiku",
    "silhouetteId": "mamori-tokonome",
    "songId": "alive-lycoris"
  },
  "188": {
    "classicId": "watanare",
    "characterId": "junna-hoshimi",
    "coverId": "hello-melancholic",
    "quoteId": "erika-kizaki",
    "emojiId": "madoka-magica",
    "shipId": "teiomcqueen",
    "silhouetteId": "yuu-koito",
    "songId": "shukufuku"
  },
  "189": {
    "classicId": "sakura-trick",
    "characterId": "villhaze",
    "coverId": "new-game",
    "quoteId": "silence-suzuka",
    "emojiId": "mygo",
    "shipId": "shijima-majime",
    "silhouetteId": "cha-yoonsung",
    "songId": "other-side-of-wall"
  },
  "190": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "yuko-yoshida",
    "coverId": "kin-iro-movie",
    "quoteId": "shiina-kakure",
    "emojiId": "assault-lily",
    "shipId": "anontomo",
    "silhouetteId": "yui-yamada",
    "songId": "irodori-jelee"
  },
  "191": {
    "classicId": "houkago-teibou-nisshi",
    "characterId": "yoshika-miyafuji",
    "coverId": "hanebado",
    "quoteId": "natori-ryoko",
    "emojiId": "i-love-amy",
    "shipId": "shino-ren",
    "silhouetteId": "ye-xing",
    "songId": "kimi-ni-furete"
  },
  "192": {
    "classicId": "bocchi-the-rock",
    "characterId": "yori-asanagi",
    "coverId": "watanare",
    "quoteId": "koharu-tsurezure",
    "emojiId": "kakegurui",
    "shipId": "kotoumi",
    "silhouetteId": "annabel-lee",
    "songId": "synchrogazer"
  },
  "193": {
    "classicId": "tamayura",
    "characterId": "chisato-shirasagi",
    "coverId": "hello-melancholic",
    "quoteId": "rupa",
    "emojiId": "madoka-magica",
    "shipId": "sakinodoka",
    "silhouetteId": "kaoruko-hanayagi",
    "songId": "won3chu-kissme"
  },
  "194": {
    "classicId": "lily-love-2",
    "characterId": "sarasa-watanabe",
    "coverId": "baili-jin",
    "quoteId": "matsuri-mizusawa",
    "emojiId": "akebi-chan",
    "shipId": "mizore-nozomi",
    "silhouetteId": "kumiko-oumae",
    "songId": "alive-lycoris"
  },
  "195": {
    "classicId": "hanayamata",
    "characterId": "ai-narata",
    "coverId": "gakkou-gurashi",
    "quoteId": "emma-night-owls",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "rinnade",
    "silhouetteId": "yori-asanagi",
    "songId": "venus-line"
  },
  "196": {
    "classicId": "sabagebu",
    "characterId": "hime-shiraki",
    "coverId": "bad-girl",
    "quoteId": "yui-yamada",
    "emojiId": "asagao-to-kase-san",
    "shipId": "misa-koko",
    "silhouetteId": "qiu-tong",
    "songId": "kimama-na-tenshi-tachi"
  },
  "197": {
    "classicId": "citrus",
    "characterId": "yui-yamada",
    "coverId": "an-easy-introduction-to-love-triangles",
    "quoteId": "yui-funami",
    "emojiId": "anemone-is-in-heat",
    "shipId": "tsubamaria",
    "silhouetteId": "yori-asanagi",
    "songId": "kimi-ni-furete"
  },
  "198": {
    "classicId": "valkyrie-drive",
    "characterId": "karen-aijo",
    "coverId": "action-heroine-cheer-fruits",
    "quoteId": "yui-hirasawa",
    "emojiId": "otherside-picnic",
    "shipId": "yuutou",
    "silhouetteId": "madam-baek",
    "songId": "hoshi-no-tabibito"
  },
  "199": {
    "classicId": "yuruyuri",
    "characterId": "harumi-taniguchi",
    "coverId": "houkago-teibou-nisshi",
    "quoteId": "kiyashu-vanadis",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "morimura",
    "silhouetteId": "nana-daiba",
    "songId": "himitsu-no-melody"
  },
  "200": {
    "classicId": "hibike-euphonium",
    "characterId": "karen-aijo",
    "coverId": "d4dj",
    "quoteId": "da-kyeong",
    "emojiId": "moonlight-garden",
    "shipId": "himemitsuki",
    "silhouetteId": "eli-ayase",
    "songId": "kimi-no-gin-no-niwa"
  },
  "201": {
    "classicId": "happy-sugar-life",
    "characterId": "shizuku-hoshikawa",
    "coverId": "valkyrie-drive",
    "quoteId": "kaori-asaka",
    "emojiId": "kakegurui",
    "shipId": "anonsoyo",
    "silhouetteId": "sorawo-kamikoshi",
    "songId": "asagao-kase"
  },
  "202": {
    "classicId": "everyday-lily",
    "characterId": "momo-sheep",
    "coverId": "kimi-ga-shinu-made",
    "quoteId": "reina-kousaka",
    "emojiId": "uma-musume",
    "shipId": "kikusei",
    "silhouetteId": "aya-oosawa",
    "songId": "himitsu-no-melody"
  },
  "203": {
    "classicId": "hero-san",
    "characterId": "xiao-lan-wolf",
    "coverId": "our-teachers-are-dating",
    "quoteId": "rin-touyama",
    "emojiId": "girls-last-tour",
    "shipId": "nanami-yuuna",
    "silhouetteId": "natori-ryoko",
    "songId": "hectopascal"
  },
  "204": {
    "classicId": "serenade",
    "characterId": "satsuki-konohana",
    "coverId": "if-i-could-reach-you",
    "quoteId": "riko-sakurauchi",
    "emojiId": "ange-vierge",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "vayuela-vanadis",
    "songId": "shukufuku"
  },
  "205": {
    "classicId": "catulus-syndrome",
    "characterId": "grea",
    "coverId": "handsome-girl-and-sheltered-girl",
    "quoteId": "yuna-yuki",
    "emojiId": "sakura-trick",
    "shipId": "mashiruri",
    "silhouetteId": "yoshika-miyafuji",
    "songId": "tenbin-fragtime"
  },
  "206": {
    "classicId": "hina-logi",
    "characterId": "chidori-takamori",
    "coverId": "semelparous",
    "quoteId": "mashiro-komiyama",
    "emojiId": "citrus",
    "shipId": "morimura",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "flip-flappers-ed"
  },
  "207": {
    "classicId": "hello-melancholic",
    "characterId": "kanade-kurokawa",
    "coverId": "shino-to-ren",
    "quoteId": "nana-daiba",
    "emojiId": "fluttering-feelings",
    "shipId": "mayakuro",
    "silhouetteId": "yachiyo-tsukimi",
    "songId": "himitsu-no-melody"
  },
  "208": {
    "classicId": "world-dai-star",
    "characterId": "madam-baek",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "aoi-amawashi",
    "emojiId": "new-game",
    "shipId": "chuchunika",
    "silhouetteId": "kano-yamanouchi",
    "songId": "alive-lycoris"
  },
  "209": {
    "classicId": "shimeji-simulation",
    "characterId": "tae-hanazono",
    "coverId": "mayonaka-punch",
    "quoteId": "kanade-kurokawa",
    "emojiId": "long-awaited-feelings",
    "shipId": "himemitsuki",
    "silhouetteId": "anne-manaria",
    "songId": "alive-lycoris"
  },
  "210": {
    "classicId": "yama-no-susume",
    "characterId": "ange-cross-ange",
    "coverId": "fluttering-feelings",
    "quoteId": "kou-yagami",
    "emojiId": "sakura-trick",
    "shipId": "mary-yumeko",
    "silhouetteId": "kobayashi",
    "songId": "guitar-loneliness"
  },
  "211": {
    "classicId": "love-to-lie-angle",
    "characterId": "harumi-taniguchi",
    "coverId": "roll-over-and-die",
    "quoteId": "kyoko-toshino",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "anonsoyo",
    "silhouetteId": "shino",
    "songId": "tenshi-ni-fureta-yo"
  },
  "212": {
    "classicId": "kuzu-no-honkai",
    "characterId": "himari-kino",
    "coverId": "ring-my-bell",
    "quoteId": "yori-asanagi",
    "emojiId": "sakura-trick",
    "shipId": "luo-xinyue",
    "silhouetteId": "misa-utsushicha",
    "songId": "won3chu-kissme"
  },
  "213": {
    "classicId": "asagao-to-kase-san",
    "characterId": "yuki-kyou-kano",
    "coverId": "akuma-no-riddle",
    "quoteId": "momo-chiyoda",
    "emojiId": "anemone-is-in-heat",
    "shipId": "sayakatouko",
    "silhouetteId": "fuuko-taki",
    "songId": "miracle-rush"
  },
  "214": {
    "classicId": "yuruyuri",
    "characterId": "cocona",
    "coverId": "machikado-mazoku",
    "quoteId": "mel-pulse",
    "emojiId": "yuuki-yuuna",
    "shipId": "chikariko",
    "silhouetteId": "ginko-yurishiro",
    "songId": "one-room-sugar-life"
  },
  "215": {
    "classicId": "izetta",
    "characterId": "hinako-hanamura",
    "coverId": "stardust-telepath",
    "quoteId": "ginko-yurishiro",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "shino",
    "songId": "sakura-skip"
  },
  "216": {
    "classicId": "the-moon-on-a-rainy-night",
    "characterId": "makoto-shimizu",
    "coverId": "not-so-shoujo-love-story",
    "quoteId": "kikuri-hiroi",
    "emojiId": "asagao-to-kase-san",
    "shipId": "ginkure",
    "silhouetteId": "iroha-sakayori",
    "songId": "dream-solister"
  },
  "217": {
    "classicId": "magirevo",
    "characterId": "azusa-nakano",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "umi-sonoda",
    "emojiId": "hana-ni-arashi",
    "shipId": "chuchunika",
    "silhouetteId": "kanade-kurokawa",
    "songId": "synchrogazer"
  },
  "218": {
    "classicId": "shinsekai-yori",
    "characterId": "claudine-saijo",
    "coverId": "izetta",
    "quoteId": "suzu-nekoyama",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "shimbaek",
    "silhouetteId": "aya-maruyama",
    "songId": "kimi-ni-furete"
  },
  "219": {
    "classicId": "love-doctor",
    "characterId": "kotori-minami",
    "coverId": "citrus",
    "quoteId": "mimori-togo",
    "emojiId": "girls-band-cry",
    "shipId": "mashiruri",
    "silhouetteId": "subaru-awa",
    "songId": "yuriyurararara"
  },
  "220": {
    "classicId": "yuri-is-my-job",
    "characterId": "renako-amaori",
    "coverId": "goodbye-my-rose-garden",
    "quoteId": "makoto-shimizu",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "sayohina",
    "silhouetteId": "iroha-sakayori",
    "songId": "dreamriser"
  },
  "221": {
    "classicId": "sadistic-beauty-side-b",
    "characterId": "yuzu-aihara",
    "coverId": "bad-girl",
    "quoteId": "grea-manaria",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "kikusei",
    "silhouetteId": "kiwi-araga",
    "songId": "connect-madoka"
  },
  "222": {
    "classicId": "beauty-and-the-beast-girl",
    "characterId": "konomi-fujiwara",
    "coverId": "love-live-hasunosora",
    "quoteId": "chito-glt",
    "emojiId": "assault-lily",
    "shipId": "shimbaek",
    "silhouetteId": "han-juhee",
    "songId": "asagao-kase"
  },
  "223": {
    "classicId": "soulmate-gl",
    "characterId": "hinako-hanamura",
    "coverId": "kanojo-to-himitsu",
    "quoteId": "lin-luxi",
    "emojiId": "yuuki-yuuna",
    "shipId": "nozoeli",
    "silhouetteId": "hinako-hanamura",
    "songId": "kimama-na-tenshi-tachi"
  },
  "224": {
    "classicId": "love-live-nijigasaki",
    "characterId": "kou-yagami",
    "coverId": "happy-sugar-life",
    "quoteId": "arisa-ichigaya",
    "emojiId": "i-love-amy",
    "shipId": "tomoko-yuri",
    "silhouetteId": "asahi-satou",
    "songId": "other-side-of-wall"
  },
  "225": {
    "classicId": "asumi-chan",
    "characterId": "maki-nishikino",
    "coverId": "ange-vierge",
    "quoteId": "michiru-kaioh",
    "emojiId": "fluttering-feelings",
    "shipId": "hinatanoa",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "226": {
    "classicId": "love-doctor",
    "characterId": "aki-wolf",
    "coverId": "vividred-operation",
    "quoteId": "utena-hiiragi",
    "emojiId": "girls-last-tour",
    "shipId": "tohrubayashi",
    "silhouetteId": "tokaku-azuma",
    "songId": "asagao-kase"
  },
  "227": {
    "classicId": "sailor-moon-s",
    "characterId": "chisato-nishikigi",
    "coverId": "princess-connect-redive",
    "quoteId": "yuna-yuki",
    "emojiId": "a-joyful-life",
    "shipId": "kaseyamada",
    "silhouetteId": "emma-night-owls",
    "songId": "eternal-eternity"
  },
  "228": {
    "classicId": "green-tea-bitch",
    "characterId": "yumeko-jabami",
    "coverId": "happy-sugar-life",
    "quoteId": "lin-luxi",
    "emojiId": "shino-to-ren",
    "shipId": "haruyuu",
    "silhouetteId": "azusa-nakano",
    "songId": "aozora-no-rhapsody"
  },
  "229": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "eli-ayase",
    "coverId": "mikagura-gakuen",
    "quoteId": "shiori-oomi",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "mel-lynn",
    "silhouetteId": "raana-kaname",
    "songId": "dreamriser"
  },
  "230": {
    "classicId": "izetta",
    "characterId": "lapis-tenebrae",
    "coverId": "bang-dream-ave-mujica",
    "quoteId": "rae-taylor",
    "emojiId": "long-awaited-feelings",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "miwa-inuzuka",
    "songId": "miracle-rush"
  },
  "231": {
    "classicId": "watamote",
    "characterId": "momo-chiyoda",
    "coverId": "revue-starlight",
    "quoteId": "haru-ichinose",
    "emojiId": "kill-me-now",
    "shipId": "anontomo",
    "silhouetteId": "akari-tokitoh",
    "songId": "my-dream-girls"
  },
  "232": {
    "classicId": "asumi-chan",
    "characterId": "momo-vampire",
    "coverId": "kiniro-mosaic",
    "quoteId": "renako-amaori",
    "emojiId": "fragtime",
    "shipId": "haruyuu",
    "silhouetteId": "io-utsushicha",
    "songId": "red-liberation"
  },
  "233": {
    "classicId": "an-easy-introduction-to-love-triangles",
    "characterId": "kanoko-mamiya",
    "coverId": "vampire-in-the-garden",
    "quoteId": "yachiyo-tsukimi",
    "emojiId": "sailor-moon-s",
    "shipId": "mamori-mirei",
    "silhouetteId": "nagisa-ootsuki",
    "songId": "arc-en-ciel"
  },
  "234": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "ayaka-shiraishi",
    "coverId": "konohana-kitan",
    "quoteId": "raana-kaname",
    "emojiId": "otherside-picnic",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "naoi-manaka",
    "songId": "kimi-ni-aeta-hi"
  },
  "235": {
    "classicId": "my-food-seems-to-be-very-cute",
    "characterId": "ayumu-uehara",
    "coverId": "failed-princesses",
    "quoteId": "mutsumi-wakaba",
    "emojiId": "bang-dream",
    "shipId": "shino-ren",
    "silhouetteId": "chisato-nishikigi",
    "songId": "red-birthmark"
  },
  "236": {
    "classicId": "toji-no-miko",
    "characterId": "airi-sezaki",
    "coverId": "kitanai-kimi",
    "quoteId": "yumeko-jabami",
    "emojiId": "bang-dream",
    "shipId": "hibimiku",
    "silhouetteId": "umiri-yahata",
    "songId": "red-liberation"
  },
  "237": {
    "classicId": "tsubame-tip-off",
    "characterId": "lynn-pulse",
    "coverId": "bloom-into-you",
    "quoteId": "queen-velverosa",
    "emojiId": "sakura-trick",
    "shipId": "anne-grea",
    "silhouetteId": "nina-iseri",
    "songId": "dreamriser"
  },
  "238": {
    "classicId": "yuuki-yuuna",
    "characterId": "qiu-tong",
    "coverId": "toji-no-miko",
    "quoteId": "papika",
    "emojiId": "uma-musume",
    "shipId": "asuka-saki",
    "silhouetteId": "da-kyeong",
    "songId": "kimi-no-gin-no-niwa"
  },
  "239": {
    "classicId": "world-dai-star",
    "characterId": "nozomi-tojo",
    "coverId": "princess-principal",
    "quoteId": "aoi-amawashi",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "yuni-fuuko",
    "silhouetteId": "asahi-satou",
    "songId": "blue-bud-netsuzou"
  },
  "240": {
    "classicId": "maria-holic",
    "characterId": "kou-yagami",
    "coverId": "i-married-my-best-friend",
    "quoteId": "hime-shiraki",
    "emojiId": "bocchi-the-rock",
    "shipId": "morimura",
    "silhouetteId": "michiru-kaioh",
    "songId": "zattou-bokura-no-machi"
  },
  "241": {
    "classicId": "this-monster-wants-to-eat-me",
    "characterId": "kobayashi",
    "coverId": "cant-defy-the-lonely-girl",
    "quoteId": "tokaku-azuma",
    "emojiId": "izetta",
    "shipId": "kourin",
    "silhouetteId": "aoba-suzukaze",
    "songId": "miracle-rush"
  },
  "242": {
    "classicId": "the-summer-you-were-there",
    "characterId": "matsuri-mizusawa",
    "coverId": "dear-my-teacher",
    "quoteId": "rin-hoshizora",
    "emojiId": "sakura-trick",
    "shipId": "kaoru-chisato",
    "silhouetteId": "chuchu",
    "songId": "alive-lycoris"
  },
  "243": {
    "classicId": "show-me-your-bust",
    "characterId": "nozomi-kasaki",
    "coverId": "futari-monologue",
    "quoteId": "mami-tomoe",
    "emojiId": "mygo",
    "shipId": "utekiwi",
    "silhouetteId": "kano-yamanouchi",
    "songId": "tenbin-fragtime"
  },
  "244": {
    "classicId": "destroy-it-all-and-love-me-in-hell",
    "characterId": "cha-yoonsung",
    "coverId": "long-awaited-feelings",
    "quoteId": "madoka-kaname",
    "emojiId": "sailor-moon-s",
    "shipId": "kase-yamada",
    "silhouetteId": "kaoruko-hanayagi",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "245": {
    "classicId": "hero-san",
    "characterId": "saki-kindaichi",
    "coverId": "serenade",
    "quoteId": "madam-baek",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "momo-yuki",
    "silhouetteId": "matsuri-mizusawa",
    "songId": "go-go-maniac"
  },
  "246": {
    "classicId": "maria-holic",
    "characterId": "subaru-awa",
    "coverId": "catulus-syndrome",
    "quoteId": "chris-yukine",
    "emojiId": "girls-band-cry",
    "shipId": "futakao",
    "silhouetteId": "yvonne-smollett",
    "songId": "deal-with-the-devil"
  },
  "247": {
    "classicId": "my-sisters-best-friend",
    "characterId": "utada-uta",
    "coverId": "konohana-kitan",
    "quoteId": "ran-mitake",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "fuu-mashi",
    "silhouetteId": "satou-matsuzaka",
    "songId": "dream-solister"
  },
  "248": {
    "classicId": "watanare",
    "characterId": "kaguya-cosmic",
    "coverId": "sailor-moon-s",
    "quoteId": "yuu-koito",
    "emojiId": "bang-dream",
    "shipId": "izetta-fine",
    "silhouetteId": "arisa-ichigaya",
    "songId": "venus-line"
  },
  "249": {
    "classicId": "citrus",
    "characterId": "kasuga-totoko",
    "coverId": "anne-happy",
    "quoteId": "mio-sakamoto",
    "emojiId": "magirevo",
    "shipId": "misa-io",
    "silhouetteId": "kaoru-seta",
    "songId": "hikari-no-senritsu"
  },
  "250": {
    "classicId": "manaria-friends",
    "characterId": "lenore-nevermore",
    "coverId": "ano-koro-no-aoi-hoshi",
    "quoteId": "nijika-ijichi",
    "emojiId": "serenade",
    "shipId": "haruyuu",
    "silhouetteId": "iroha-sakayori",
    "songId": "azalea-citrus"
  },
  "251": {
    "classicId": "saeki-sayaka",
    "characterId": "sora-honda",
    "coverId": "lily-yy",
    "quoteId": "minato-asano",
    "emojiId": "new-game",
    "shipId": "malovel",
    "silhouetteId": "mitsuki-yano",
    "songId": "aozora-no-rhapsody"
  },
  "252": {
    "classicId": "relationship-guidelines",
    "characterId": "aya-maruyama",
    "coverId": "yuruyuri",
    "quoteId": "maya-tendo",
    "emojiId": "asagao-to-kase-san",
    "shipId": "utekiwi",
    "silhouetteId": "hilda-cross-ange",
    "songId": "kokoro-ni-tsubomi"
  },
  "253": {
    "classicId": "everyday-lily",
    "characterId": "kaoru-seta",
    "coverId": "harukana-receive",
    "quoteId": "touko-nanami",
    "emojiId": "stardust-telepath",
    "shipId": "nanami-yuuna",
    "silhouetteId": "baek-seola",
    "songId": "valkyrie-drive-op"
  },
  "254": {
    "classicId": "school-zone-girls",
    "characterId": "konatsu-amano",
    "coverId": "even-if-it-was-just-once",
    "quoteId": "akane-maekawa",
    "emojiId": "new-game",
    "shipId": "hanabi-konomi",
    "silhouetteId": "satsuki-konohana",
    "songId": "ano-mori-de-matteru"
  },
  "255": {
    "classicId": "yuri-kuma-arashi",
    "characterId": "kobayashi",
    "coverId": "tsubame-tip-off",
    "quoteId": "utena-hiiragi",
    "emojiId": "girls-last-tour",
    "shipId": "ninomomo",
    "silhouetteId": "madam-baek",
    "songId": "hoshi-to-hana"
  },
  "256": {
    "classicId": "love-live-hasunosora",
    "characterId": "lee-yeowool",
    "coverId": "school-zone-girls",
    "quoteId": "yuzu-aihara",
    "emojiId": "cross-ange",
    "shipId": "menou-akari",
    "silhouetteId": "anon-chihaya",
    "songId": "raise-your-hands"
  },
  "257": {
    "classicId": "new-game",
    "characterId": "utada-uta",
    "coverId": "maria-holic",
    "quoteId": "kasuga-totoko",
    "emojiId": "kageki-shojo",
    "shipId": "juhee-yeowool",
    "silhouetteId": "hibiki-sugawa",
    "songId": "yuriyurararara"
  },
  "258": {
    "classicId": "witch-from-mercury",
    "characterId": "mio-sakamoto",
    "coverId": "lycoris-recoil",
    "quoteId": "xiao-lan-wolf",
    "emojiId": "stardust-telepath",
    "shipId": "yukilisa",
    "silhouetteId": "xiao-lan-wolf",
    "songId": "guruguru-dj"
  },
  "259": {
    "classicId": "watanare",
    "characterId": "mayumi-kodama",
    "coverId": "love-live-nijigasaki",
    "quoteId": "koyuki-honami",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "kaseyamada",
    "silhouetteId": "kobayashi",
    "songId": "tenshi-ni-fureta-yo"
  },
  "260": {
    "classicId": "revue-starlight",
    "characterId": "madam-baek",
    "coverId": "yuuki-yuuna",
    "quoteId": "raana-kaname",
    "emojiId": "tamen-de-gushi",
    "shipId": "misa-io",
    "silhouetteId": "momo-sheep",
    "songId": "hana-no-tou"
  },
  "261": {
    "classicId": "netsuzou-trap",
    "characterId": "mamori-tokonome",
    "coverId": "nevermore-webtoon",
    "quoteId": "subaru-awa",
    "emojiId": "strike-witches",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "komichi-akebi",
    "songId": "dreamriser"
  },
  "262": {
    "classicId": "handsome-girl-and-sheltered-girl",
    "characterId": "yuna-yuki",
    "coverId": "kanojo-to-himitsu",
    "quoteId": "michiru-kaioh",
    "emojiId": "love-to-lie-angle",
    "shipId": "mamori-mirei",
    "silhouetteId": "io-utsushicha",
    "songId": "serendipity-flip"
  },
  "263": {
    "classicId": "wataten-movie",
    "characterId": "fuuko-taki",
    "coverId": "lycoris-recoil",
    "quoteId": "euphyllia-magenta",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "anonsoyo",
    "silhouetteId": "xiao-lan-wolf",
    "songId": "go-go-maniac"
  },
  "264": {
    "classicId": "blooming-sequence",
    "characterId": "airi-sezaki",
    "coverId": "hina-logi",
    "quoteId": "satou-matsuzaka",
    "emojiId": "new-game",
    "shipId": "shino-ren",
    "silhouetteId": "hinata-hoshino",
    "songId": "sacred-world"
  },
  "265": {
    "classicId": "akebi-chan",
    "characterId": "yui-funami",
    "coverId": "izetta",
    "quoteId": "xiao-lan-wolf",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "tsubamaria",
    "silhouetteId": "rin-touyama",
    "songId": "tenshi-ni-fureta-yo"
  },
  "266": {
    "classicId": "yuri-kuma-arashi",
    "characterId": "nozomi-kasaki",
    "coverId": "not-so-shoujo-love-story",
    "quoteId": "nika-nanaura",
    "emojiId": "k-on",
    "shipId": "haruyuu",
    "silhouetteId": "kiwi-araga",
    "songId": "listen-htt"
  },
  "267": {
    "classicId": "futari-monologue",
    "characterId": "futaba-isurugi",
    "coverId": "bad-thinking-diary",
    "quoteId": "hinako-yaotose",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "rinnade",
    "silhouetteId": "rupa",
    "songId": "azalea-citrus"
  },
  "268": {
    "classicId": "her-tale-of-shim-cheong",
    "characterId": "suletta-mercury",
    "coverId": "kimi-ga-shinu-made",
    "quoteId": "silence-suzuka",
    "emojiId": "madoka-magica",
    "shipId": "chito-yuuri",
    "silhouetteId": "hinako-yaotose",
    "songId": "azalea-citrus"
  },
  "269": {
    "classicId": "cant-defy-the-lonely-girl",
    "characterId": "renako-amaori",
    "coverId": "anemone-is-in-heat",
    "quoteId": "chika-takami",
    "emojiId": "sheep-princess",
    "shipId": "bocchiku",
    "silhouetteId": "jiho-bust",
    "songId": "won3chu-kissme"
  },
  "270": {
    "classicId": "her-tale-of-shim-chong",
    "characterId": "menou-virgin-road",
    "coverId": "ring-my-bell",
    "quoteId": "asahi-satou",
    "emojiId": "green-tea-bitch",
    "shipId": "juhee-yeowool",
    "silhouetteId": "izetta-witch",
    "songId": "magia-madoka"
  },
  "271": {
    "classicId": "failed-princesses",
    "characterId": "aya-maruyama",
    "coverId": "blue-reflection-ray",
    "quoteId": "subaru-awa",
    "emojiId": "new-game",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "nika-nanaura",
    "songId": "eternal-eternity"
  },
  "272": {
    "classicId": "bad-girl",
    "characterId": "asahi-satou",
    "coverId": "crown-handler",
    "quoteId": "sorawo-kamikoshi",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "sophie-akari",
    "silhouetteId": "miyu-edelfelt",
    "songId": "connect-madoka"
  },
  "273": {
    "classicId": "kakegurui",
    "characterId": "saki-kindaichi",
    "coverId": "a-joyful-life",
    "quoteId": "lin-luxi",
    "emojiId": "mage-and-demon-queen",
    "shipId": "aniseuphie",
    "silhouetteId": "rin-shima",
    "songId": "kimama-na-tenshi-tachi"
  },
  "274": {
    "classicId": "qualia-the-purple",
    "characterId": "honey-trap",
    "coverId": "green-tea-bitch",
    "quoteId": "naoi-manaka",
    "emojiId": "vampire-in-the-garden",
    "shipId": "rinpana",
    "silhouetteId": "misuzu-moritani",
    "songId": "guitar-loneliness"
  },
  "275": {
    "classicId": "our-teachers-are-dating",
    "characterId": "fuuko-taki",
    "coverId": "wataten",
    "quoteId": "renako-amaori",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "menou-akari",
    "silhouetteId": "mai-oduka",
    "songId": "azalea-citrus"
  },
  "276": {
    "classicId": "strike-witches",
    "characterId": "sorawo-kamikoshi",
    "coverId": "white-angels-have-no-wings",
    "quoteId": "hitori-gotoh",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "adachishima",
    "silhouetteId": "yuri-tamura",
    "songId": "haruhikage"
  },
  "277": {
    "classicId": "catulus-syndrome",
    "characterId": "hinako-yaotose",
    "coverId": "shimeji-simulation",
    "quoteId": "yuyu-shirai",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "chisataki",
    "silhouetteId": "ran-mitake",
    "songId": "hana-no-tou"
  },
  "278": {
    "classicId": "fed-up-office-lady-villainess",
    "characterId": "mitsuki-yano",
    "coverId": "non-non-biyori",
    "quoteId": "kita-ikuyo",
    "emojiId": "moonlight-garden",
    "shipId": "illya-miyu",
    "silhouetteId": "euphyllia-magenta",
    "songId": "alive-lycoris"
  },
  "279": {
    "classicId": "yuri-seijin-naoko-san",
    "characterId": "umiri-yahata",
    "coverId": "sekai-de-ichiban-oppai",
    "quoteId": "mashiro-kyou-kano",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "era-yoonsung",
    "silhouetteId": "asahi-satou",
    "songId": "synchrogazer"
  },
  "280": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "yui-hirasawa",
    "coverId": "vampire-in-the-garden",
    "quoteId": "lenore-nevermore",
    "emojiId": "mage-and-demon-queen",
    "shipId": "chito-yuuri",
    "silhouetteId": "nadeshiko-kagamihara",
    "songId": "haruhikage"
  },
  "281": {
    "classicId": "the-moon-on-a-rainy-night",
    "characterId": "mary-saotome",
    "coverId": "train-to-the-end",
    "quoteId": "kanoko-mamiya",
    "emojiId": "princess-principal",
    "shipId": "shizukaori",
    "silhouetteId": "mimori-togo",
    "songId": "raise-your-hands"
  },
  "282": {
    "classicId": "serenade",
    "characterId": "airi-sezaki",
    "coverId": "birdie-wing",
    "quoteId": "naoi-manaka",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "saya-hinako",
    "silhouetteId": "han-juhee",
    "songId": "hana-no-tou"
  },
  "283": {
    "classicId": "she-is-still-cute-today",
    "characterId": "seon-hwa",
    "coverId": "sadistic-beauty-side-b",
    "quoteId": "malori-crow",
    "emojiId": "manaria-friends",
    "shipId": "illya-miyu",
    "silhouetteId": "tokai-teio",
    "songId": "other-side-of-wall"
  },
  "284": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "chisato-shirasagi",
    "coverId": "chuunibyou",
    "quoteId": "tong-tong",
    "emojiId": "our-wonderful-days",
    "shipId": "aniseuphie",
    "silhouetteId": "erika-kizaki",
    "songId": "aozora-no-rhapsody"
  },
  "285": {
    "classicId": "our-wonderful-days",
    "characterId": "tomori-takamatsu",
    "coverId": "days-of-love-at-seagull-villa",
    "quoteId": "nina-iseri",
    "emojiId": "girls-last-tour",
    "shipId": "menou-akari",
    "silhouetteId": "kyoko-toshino",
    "songId": "one-room-sugar-life"
  },
  "286": {
    "classicId": "bloom-into-you",
    "characterId": "miyu-edelfelt",
    "coverId": "slow-loop",
    "quoteId": "noa-himesaka",
    "emojiId": "watanare",
    "shipId": "mayumi-rin",
    "silhouetteId": "nana-daiba",
    "songId": "zattou-bokura-no-machi"
  },
  "287": {
    "classicId": "hana-ni-arashi",
    "characterId": "nozomi-tojo",
    "coverId": "baili-jin",
    "quoteId": "papika",
    "emojiId": "chou-kaguya-hime",
    "shipId": "nanaki-kanade",
    "silhouetteId": "shiori-oomi",
    "songId": "dream-solister"
  },
  "288": {
    "classicId": "wataten-movie",
    "characterId": "silence-suzuka",
    "coverId": "yuru-camp",
    "quoteId": "miho-nishizumi",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "tomo-rupa",
    "silhouetteId": "saki-miyanaga",
    "songId": "hoshi-to-hana"
  },
  "289": {
    "classicId": "love-live-hasunosora",
    "characterId": "da-kyeong",
    "coverId": "stardust-telepath",
    "quoteId": "mutsumi-wakaba",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "kanadia",
    "silhouetteId": "seika-ijichi",
    "songId": "magia-madoka"
  },
  "290": {
    "classicId": "symphogear",
    "characterId": "haru-ichinose",
    "coverId": "whispering-you-a-love-song",
    "quoteId": "karen-aijo",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "uika-saki",
    "silhouetteId": "sayo-hikawa",
    "songId": "guitar-loneliness"
  },
  "291": {
    "classicId": "tropical-fish",
    "characterId": "aoba-suzukaze",
    "coverId": "sora-haena",
    "quoteId": "yukari-akiyama",
    "emojiId": "long-awaited-feelings",
    "shipId": "madohomu",
    "silhouetteId": "hinako-hanamura",
    "songId": "synchrogazer"
  },
  "292": {
    "classicId": "a-joyful-life",
    "characterId": "sora-honda",
    "coverId": "bloom-into-you",
    "quoteId": "asahi-satou",
    "emojiId": "bang-dream",
    "shipId": "emma-vivian",
    "silhouetteId": "yuu-yuutani",
    "songId": "guruguru-dj"
  },
  "293": {
    "classicId": "anemone-is-in-heat",
    "characterId": "chisato-nishikigi",
    "coverId": "tadokoro-san",
    "quoteId": "aoi-amawashi",
    "emojiId": "izetta",
    "shipId": "izetta-fine",
    "silhouetteId": "futaba-isurugi",
    "songId": "memories-comic-girls"
  },
  "294": {
    "classicId": "saki",
    "characterId": "yuu-yuutani",
    "coverId": "maria-holic",
    "quoteId": "sayaka-saeki",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "tomoko-yuri",
    "silhouetteId": "maria-vampire",
    "songId": "red-birthmark"
  },
  "295": {
    "classicId": "pulse",
    "characterId": "special-week",
    "coverId": "flip-flappers",
    "quoteId": "yuri-tamura",
    "emojiId": "watanare",
    "shipId": "makoto-akane",
    "silhouetteId": "fine-vampire",
    "songId": "hana-no-tou"
  },
  "296": {
    "classicId": "cross-ange",
    "characterId": "woori-bust",
    "coverId": "mygo",
    "quoteId": "malori-crow",
    "emojiId": "assault-lily",
    "shipId": "aniseuphie",
    "silhouetteId": "princess-charlotte",
    "songId": "himitsu-no-melody"
  },
  "297": {
    "classicId": "yuri-kuma-arashi",
    "characterId": "yvonne-smollett",
    "coverId": "princess-principal",
    "quoteId": "vivian-night-owls",
    "emojiId": "our-wonderful-days",
    "shipId": "sumikanoko",
    "silhouetteId": "hye-ji-serenade",
    "songId": "dream-solister"
  },
  "298": {
    "classicId": "a-joyful-life",
    "characterId": "terakomari-gandesblood",
    "coverId": "gushing-over-magical-girls",
    "quoteId": "hikari-kagura",
    "emojiId": "nevermore-webtoon",
    "shipId": "tomo-rupa",
    "silhouetteId": "kasuga-totoko",
    "songId": "won3chu-kissme"
  },
  "299": {
    "classicId": "hanayamata",
    "characterId": "toriko-nishina",
    "coverId": "doughnuts-under-a-crescent-moon",
    "quoteId": "kyoko-toshino",
    "emojiId": "prisma-illya",
    "shipId": "hinata-mikage",
    "silhouetteId": "kikuri-hiroi",
    "songId": "blue-bud-netsuzou"
  },
  "300": {
    "classicId": "amanchu",
    "characterId": "nanami-oda",
    "coverId": "yuri-seijin-naoko-san",
    "quoteId": "woori-bust",
    "emojiId": "ange-vierge",
    "shipId": "rinku-maho",
    "silhouetteId": "kaoru-seta",
    "songId": "red-birthmark"
  },
  "301": {
    "classicId": "ring-my-bell",
    "characterId": "hye-ji-serenade",
    "coverId": "she-loves-to-cook-and-she-loves-to-eat",
    "quoteId": "kyoko-toshino",
    "emojiId": "girls-last-tour",
    "shipId": "harumichi",
    "silhouetteId": "yuu-sonoda",
    "songId": "listen-htt"
  },
  "302": {
    "classicId": "the-moon-on-a-rainy-night",
    "characterId": "mitsuki-koga",
    "coverId": "tari-tari",
    "quoteId": "annabel-lee",
    "emojiId": "yuuki-yuuna",
    "shipId": "chisataki",
    "silhouetteId": "misaki-okusawa",
    "songId": "hectopascal"
  },
  "303": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "claudine-saijo",
    "coverId": "mygo",
    "quoteId": "terakomari-gandesblood",
    "emojiId": "watanare",
    "shipId": "haruyuu",
    "silhouetteId": "kobayashi",
    "songId": "kimama-na-tenshi-tachi"
  },
  "304": {
    "classicId": "anne-happy",
    "characterId": "sophie-twilight",
    "coverId": "futarigurashi",
    "quoteId": "tomori-takamatsu",
    "emojiId": "hello-melancholic",
    "shipId": "ryoko-lapis",
    "silhouetteId": "yui-hirasawa",
    "songId": "blue-bud-netsuzou"
  },
  "305": {
    "classicId": "release-the-spyce",
    "characterId": "tsubasa-kazanari",
    "coverId": "assault-lily-league",
    "quoteId": "aki-wolf",
    "emojiId": "yuruyuri",
    "shipId": "emma-vivian",
    "silhouetteId": "shamiko",
    "songId": "red-birthmark"
  },
  "306": {
    "classicId": "mage-and-demon-queen",
    "characterId": "hilda-cross-ange",
    "coverId": "mikagura-gakuen",
    "quoteId": "euphyllia-magenta",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "nina-hina",
    "silhouetteId": "tomo-ebizuka",
    "songId": "hoshi-no-tabibito"
  },
  "307": {
    "classicId": "sekai-de-ichiban-oppai",
    "characterId": "queen-velverosa",
    "coverId": "bad-thinking-diary",
    "quoteId": "nijika-ijichi",
    "emojiId": "bad-girl",
    "shipId": "yuutou",
    "silhouetteId": "chidori-takamori",
    "songId": "follow-your-arrows"
  },
  "308": {
    "classicId": "tari-tari",
    "characterId": "yuyu-shirai",
    "coverId": "kuttsukiboshi",
    "quoteId": "fine-vampire",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "hinako-asahi",
    "silhouetteId": "vayuela-vanadis",
    "songId": "spicy-piece"
  },
  "309": {
    "classicId": "chou-kaguya-hime",
    "characterId": "hitori-gotoh",
    "coverId": "citrus",
    "quoteId": "haru-ichinose",
    "emojiId": "assault-lily",
    "shipId": "haruyuu",
    "silhouetteId": "jung-era",
    "songId": "hoshi-to-hana"
  },
  "310": {
    "classicId": "crown-handler",
    "characterId": "izetta-witch",
    "coverId": "love-live-sip",
    "quoteId": "lenore-nevermore",
    "emojiId": "ange-vierge",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "hitori-gotoh",
    "songId": "follow-your-arrows"
  },
  "311": {
    "classicId": "green-tea-bitch",
    "characterId": "homura-akemi",
    "coverId": "vexations-of-a-shut-in-vampire",
    "quoteId": "setsuna-yuki",
    "emojiId": "netsuzou-trap",
    "shipId": "yuni-nanase",
    "silhouetteId": "yuyu-shirai",
    "songId": "spicy-piece"
  },
  "312": {
    "classicId": "im-in-love-with-the-villainess",
    "characterId": "saeko-tsutsumi",
    "coverId": "kill-me-now",
    "quoteId": "sora-honda",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "nana-yuki",
    "silhouetteId": "yvonne-smollett",
    "songId": "tenshi-ni-fureta-yo"
  },
  "313": {
    "classicId": "if-i-could-reach-you",
    "characterId": "hina-hikawa",
    "coverId": "gochuumon-wa-usagi",
    "quoteId": "momo-minamoto",
    "emojiId": "bocchi-the-rock",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "yui-funami",
    "songId": "aozora-no-rhapsody"
  },
  "314": {
    "classicId": "happy-sugar-life",
    "characterId": "mitsuki-yano",
    "coverId": "ange-vierge",
    "quoteId": "atori-mizutori",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "morimura",
    "silhouetteId": "fuuko-taki",
    "songId": "spicy-piece"
  },
  "315": {
    "classicId": "please-bully-me-miss-villainess",
    "characterId": "shino",
    "coverId": "manaria-friends",
    "quoteId": "yuuna-matsubara",
    "emojiId": "tamen-de-gushi",
    "shipId": "anne-grea",
    "silhouetteId": "mei-aihara",
    "songId": "cross-ange-op1"
  },
  "316": {
    "classicId": "vampire-in-the-garden",
    "characterId": "yuu-koito",
    "coverId": "the-guy-she-was-interested-in",
    "quoteId": "shizuku-hoshikawa",
    "emojiId": "superwomen-in-love",
    "shipId": "era-yoonsung",
    "silhouetteId": "harumi-taniguchi",
    "songId": "arc-en-ciel"
  },
  "317": {
    "classicId": "kuzu-no-honkai",
    "characterId": "kaori-asaka",
    "coverId": "lily-love-2",
    "quoteId": "yui-funami",
    "emojiId": "our-wonderful-days",
    "shipId": "uta-ayaka",
    "silhouetteId": "akane-maekawa",
    "songId": "zattou-bokura-no-machi"
  },
  "318": {
    "classicId": "tamayura",
    "characterId": "arisa-ichigaya",
    "coverId": "assault-lily-fruits",
    "quoteId": "momoka-kawaragi",
    "emojiId": "shino-to-ren",
    "shipId": "kagu-iro",
    "silhouetteId": "nagisa-ootsuki",
    "songId": "magia-madoka"
  },
  "319": {
    "classicId": "hibike-euphonium",
    "characterId": "kita-ikuyo",
    "coverId": "gochuumon-wa-usagi",
    "quoteId": "konatsu-amano",
    "emojiId": "mygo",
    "shipId": "norae-seola",
    "silhouetteId": "nozomi-kasaki",
    "songId": "aozora-no-rhapsody"
  },
  "320": {
    "classicId": "akebi-chan",
    "characterId": "kokoro-tsurumaki",
    "coverId": "bang-dream-pico",
    "quoteId": "sakura-adachi",
    "emojiId": "princess-principal",
    "shipId": "nozoeli",
    "silhouetteId": "kim-norae",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "321": {
    "classicId": "asteroid-in-love",
    "characterId": "fuuko-taki",
    "coverId": "mygo",
    "quoteId": "aya-oosawa",
    "emojiId": "vanadis-heart",
    "shipId": "kikusei",
    "silhouetteId": "satsuki-konohana",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "322": {
    "classicId": "revue-starlight",
    "characterId": "yuuri-glt",
    "coverId": "gushing-over-magical-girls",
    "quoteId": "miwa-inuzuka",
    "emojiId": "bloom-into-you",
    "shipId": "yuni-nanase",
    "silhouetteId": "shino",
    "songId": "guruguru-dj"
  },
  "323": {
    "classicId": "vexations-of-a-shut-in-vampire",
    "characterId": "kiwi-araga",
    "coverId": "granbelm",
    "quoteId": "riko-sakurauchi",
    "emojiId": "prisma-illya",
    "shipId": "tsubamaria",
    "silhouetteId": "sora-honda",
    "songId": "serendipity-flip"
  },
  "324": {
    "classicId": "semelparous",
    "characterId": "yukina-minato",
    "coverId": "inugami-nekoyama",
    "quoteId": "lenore-nevermore",
    "emojiId": "green-tea-bitch",
    "shipId": "momo-yuki",
    "silhouetteId": "satou-matsuzaka",
    "songId": "machikado-tangent"
  },
  "325": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "arisa-ichigaya",
    "coverId": "ms-vampire-who-lives-in-my-neighborhood",
    "quoteId": "lu-nan",
    "emojiId": "stardust-telepath",
    "shipId": "haruyuu",
    "silhouetteId": "nadeshiko-kagamihara",
    "songId": "azalea-citrus"
  },
  "326": {
    "classicId": "kitanai-kimi",
    "characterId": "queen-velverosa",
    "coverId": "flip-flappers",
    "quoteId": "hinako-yaotose",
    "emojiId": "asagao-to-kase-san",
    "shipId": "uika-saki",
    "silhouetteId": "aoba-suzukaze",
    "songId": "azalea-citrus"
  },
  "327": {
    "classicId": "days-of-love-at-seagull-villa",
    "characterId": "natori-ryoko",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "ajisai-sena",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "mashiruri",
    "silhouetteId": "papika",
    "songId": "sacred-world"
  },
  "328": {
    "classicId": "always-human",
    "characterId": "annabel-lee",
    "coverId": "kitanai-kimi",
    "quoteId": "nanaki-fujishiro",
    "emojiId": "strike-witches",
    "shipId": "hanabi-konomi",
    "silhouetteId": "misuzu-moritani",
    "songId": "ano-mori-de-matteru"
  },
  "329": {
    "classicId": "anemone-is-in-heat",
    "characterId": "chuchu",
    "coverId": "her-tale-of-shim-chong",
    "quoteId": "momo-sheep",
    "emojiId": "flip-flappers",
    "shipId": "eveaoi",
    "silhouetteId": "kureha-tsubaki",
    "songId": "venus-line"
  },
  "330": {
    "classicId": "vexations-of-a-shut-in-vampire",
    "characterId": "momo-vampire",
    "coverId": "anne-happy",
    "quoteId": "malori-crow",
    "emojiId": "moonlight-garden",
    "shipId": "yoojin-hyeji",
    "silhouetteId": "maria-cadenzavna-eve",
    "songId": "serendipity-flip"
  },
  "331": {
    "classicId": "roll-over-and-die",
    "characterId": "tomoka-kase",
    "coverId": "kanojo-to-himitsu",
    "quoteId": "hinata-hoshino",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "aya-chisato",
    "silhouetteId": "haruka-tenoh",
    "songId": "yuriyurararara"
  },
  "332": {
    "classicId": "bocchi-the-rock",
    "characterId": "uika-misumi",
    "coverId": "non-non-biyori",
    "quoteId": "moca-aoba",
    "emojiId": "the-summer-you-were-there",
    "shipId": "karehika",
    "silhouetteId": "silence-suzuka",
    "songId": "shiny-days"
  },
  "333": {
    "classicId": "love-to-lie-angle",
    "characterId": "malori-crow",
    "coverId": "girls-und-panzer",
    "quoteId": "lin-luxi",
    "emojiId": "kitanai-kimi",
    "shipId": "menou-akari",
    "silhouetteId": "tokaku-azuma",
    "songId": "valkyrie-drive-op"
  },
  "334": {
    "classicId": "our-wonderful-days",
    "characterId": "sayaka-miki",
    "coverId": "bang-dream-pico",
    "quoteId": "baek-seola",
    "emojiId": "a-joyful-life",
    "shipId": "kasu-arisa",
    "silhouetteId": "akane-maekawa",
    "songId": "blue-bud-netsuzou"
  },
  "335": {
    "classicId": "soulmate-gl",
    "characterId": "rin-shima",
    "coverId": "hino-san-no-baka",
    "quoteId": "kyoko-sakura",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "hinako-shiori",
    "silhouetteId": "momo-chiyoda",
    "songId": "arc-en-ciel"
  },
  "336": {
    "classicId": "tamayura",
    "characterId": "eli-ayase",
    "coverId": "hanebado",
    "quoteId": "aki-wolf",
    "emojiId": "moonlight-garden",
    "shipId": "nomokasu",
    "silhouetteId": "yuu-koito",
    "songId": "memories-comic-girls"
  },
  "337": {
    "classicId": "lily-yy",
    "characterId": "miwa-inuzuka",
    "coverId": "asteroid-in-love",
    "quoteId": "satou-matsuzaka",
    "emojiId": "yuruyuri",
    "shipId": "makoto-akane",
    "silhouetteId": "mirei-shikishima",
    "songId": "sacred-world"
  },
  "338": {
    "classicId": "kageki-shojo",
    "characterId": "hifumi-takimoto",
    "coverId": "saeki-sayaka",
    "quoteId": "harumi-taniguchi",
    "emojiId": "stardust-telepath",
    "shipId": "hinata-mikage",
    "silhouetteId": "rin-touyama",
    "songId": "raise-your-hands"
  },
  "339": {
    "classicId": "catch-these-hands",
    "characterId": "claire-francois",
    "coverId": "fuzoroi-no-renri",
    "quoteId": "iroha-sakayori",
    "emojiId": "green-tea-bitch",
    "shipId": "yuunamimori",
    "silhouetteId": "himari-kino",
    "songId": "hoshi-no-dialogue"
  },
  "340": {
    "classicId": "baili-jin",
    "characterId": "nadeshiko-kagamihara",
    "coverId": "mikagura-gakuen",
    "quoteId": "ayumu-uehara",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "saki-mutsu",
    "silhouetteId": "ryo-yamada",
    "songId": "azalea-citrus"
  },
  "341": {
    "classicId": "sheep-princess",
    "characterId": "taki-shiina",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "ran-mitake",
    "emojiId": "assault-lily",
    "shipId": "yoshimio",
    "silhouetteId": "michiru-kaioh",
    "songId": "follow-your-arrows"
  },
  "342": {
    "classicId": "watamote",
    "characterId": "malori-crow",
    "coverId": "sailor-moon-s",
    "quoteId": "satou-matsuzaka",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "meiyuzu",
    "silhouetteId": "io-utsushicha",
    "songId": "tenshi-ni-fureta-yo"
  },
  "343": {
    "classicId": "lapis-relights",
    "characterId": "mafuyu-tsurezure",
    "coverId": "our-wonderful-days",
    "quoteId": "fuuko-taki",
    "emojiId": "princess-principal",
    "shipId": "misa-io",
    "silhouetteId": "elsa-dorothy",
    "songId": "serendipity-flip"
  },
  "344": {
    "classicId": "symphogear",
    "characterId": "yu-takasaki",
    "coverId": "doughnuts-under-a-crescent-moon",
    "quoteId": "misuzu-moritani",
    "emojiId": "asagao-to-kase-san",
    "shipId": "tomoko-yuri",
    "silhouetteId": "jiho-bust",
    "songId": "ano-mori-de-matteru"
  },
  "345": {
    "classicId": "sadistic-beauty-side-b",
    "characterId": "miku-kohinata",
    "coverId": "magirevo",
    "quoteId": "tomoko-kuroki",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "nina-hina",
    "silhouetteId": "ayaka-sakurai",
    "songId": "kimi-ni-aeta-hi"
  },
  "346": {
    "classicId": "hanayamata",
    "characterId": "yui-funami",
    "coverId": "witch-from-mercury",
    "quoteId": "kaoruko-hanayagi",
    "emojiId": "mage-and-demon-queen",
    "shipId": "yukilisa",
    "silhouetteId": "ryo-yamada",
    "songId": "deal-with-the-devil"
  },
  "347": {
    "classicId": "otherside-picnic",
    "characterId": "io-utsushicha",
    "coverId": "girls-und-panzer",
    "quoteId": "honoka-kosaka",
    "emojiId": "futari-monologue",
    "shipId": "shimbaek",
    "silhouetteId": "rapid-rabbit",
    "songId": "miracle-rush"
  },
  "348": {
    "classicId": "after-hours",
    "characterId": "airi-sezaki",
    "coverId": "kitanai-kimi",
    "quoteId": "rin-toyama",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "kobayashi",
    "songId": "one-room-sugar-life"
  },
  "349": {
    "classicId": "symphogear",
    "characterId": "ye-xing",
    "coverId": "show-by-rock",
    "quoteId": "yoo-jin-serenade",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "menou-akari",
    "silhouetteId": "hanabi-natsuno",
    "songId": "hana-no-tou"
  },
  "350": {
    "classicId": "fuzoroi-no-renri",
    "characterId": "saeko-tsutsumi",
    "coverId": "hina-logi",
    "quoteId": "nika-nanaura",
    "emojiId": "watanare",
    "shipId": "soyosaki",
    "silhouetteId": "misa-utsushicha",
    "songId": "aozora-no-rhapsody"
  },
  "351": {
    "classicId": "an-easy-introduction-to-love-triangles",
    "characterId": "harumi-taniguchi",
    "coverId": "urara-meirochou",
    "quoteId": "yuyu-shirai",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "komavill",
    "silhouetteId": "riko-sakurauchi",
    "songId": "irodori-jelee"
  },
  "352": {
    "classicId": "my-food-seems-to-be-very-cute",
    "characterId": "michiru-kaioh",
    "coverId": "sono-hanabira",
    "quoteId": "mary-saotome",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "hinata-mikage",
    "silhouetteId": "mai-oduka",
    "songId": "go-go-maniac"
  },
  "353": {
    "classicId": "white-angels-have-no-wings",
    "characterId": "eve",
    "coverId": "lycoris-recollect",
    "quoteId": "junna-hoshimi",
    "emojiId": "stardust-telepath",
    "shipId": "konatsukoyuki",
    "silhouetteId": "menou-virgin-road",
    "songId": "tenbin-fragtime"
  },
  "354": {
    "classicId": "shino-to-ren",
    "characterId": "vivian-night-owls",
    "coverId": "girls-last-tour",
    "quoteId": "queen-velverosa",
    "emojiId": "bocchi-the-rock",
    "shipId": "yoojin-hyeji",
    "silhouetteId": "saki-miyanaga",
    "songId": "tenbin-fragtime"
  },
  "355": {
    "classicId": "green-tea-bitch",
    "characterId": "mitsuki-koga",
    "coverId": "assault-lily-league",
    "quoteId": "kaori-asaka",
    "emojiId": "fluttering-feelings",
    "shipId": "tomo-rupa",
    "silhouetteId": "yuna-yuki",
    "songId": "ano-mori-de-matteru"
  },
  "356": {
    "classicId": "houkago-teibou-nisshi",
    "characterId": "ayaka-sakurai",
    "coverId": "kageki-shojo",
    "quoteId": "soyo-nagasaki",
    "emojiId": "citrus",
    "shipId": "kagu-iro",
    "silhouetteId": "yuki-kyou-kano",
    "songId": "ten-to-sen"
  },
  "357": {
    "classicId": "wixoss",
    "characterId": "maria-vampire",
    "coverId": "whispering-you-a-love-song",
    "quoteId": "miku-kohinata",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "sophie-akari",
    "silhouetteId": "hye-ji-serenade",
    "songId": "umapyoi-densetsu"
  },
  "358": {
    "classicId": "train-to-the-end",
    "characterId": "misa-utsushicha",
    "coverId": "ring-my-bell",
    "quoteId": "nika-nanaura",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "hinata-mikage",
    "silhouetteId": "kanade-kurokawa",
    "songId": "tenshi-ni-fureta-yo"
  },
  "359": {
    "classicId": "hibike-euphonium",
    "characterId": "mamori-tokonome",
    "coverId": "her-tale-of-shim-chong",
    "quoteId": "yuu-yuutani",
    "emojiId": "sailor-moon-s",
    "shipId": "mamori-mirei",
    "silhouetteId": "mutsumi-wakaba",
    "songId": "listen-htt"
  },
  "360": {
    "classicId": "love-live-sip",
    "characterId": "saeko-tsutsumi",
    "coverId": "witch-from-mercury",
    "quoteId": "mutsumi-wakaba",
    "emojiId": "adachi-and-shimamura",
    "shipId": "chuchunika",
    "silhouetteId": "kumiko-oumae",
    "songId": "sacred-world"
  },
  "361": {
    "classicId": "manaria-friends",
    "characterId": "kyoko-toshino",
    "coverId": "hero-san",
    "quoteId": "riri-hitotsuyanagi",
    "emojiId": "ring-my-bell",
    "shipId": "uta-ayaka",
    "silhouetteId": "miorine-rembran",
    "songId": "raise-your-hands"
  },
  "362": {
    "classicId": "what-does-the-fox-say",
    "characterId": "kiyashu-vanadis",
    "coverId": "kin-iro-movie",
    "quoteId": "kanade-kurokawa",
    "emojiId": "asagao-to-kase-san",
    "shipId": "ange-hilda",
    "silhouetteId": "yuuna-matsubara",
    "songId": "raise-your-hands"
  },
  "363": {
    "classicId": "assault-lily-fruits",
    "characterId": "chisato-nishikigi",
    "coverId": "saeki-sayaka",
    "quoteId": "malori-crow",
    "emojiId": "prisma-illya",
    "shipId": "rinku-maho",
    "silhouetteId": "suzu-suzukaze",
    "songId": "hana-no-tou"
  },
  "364": {
    "classicId": "anne-happy",
    "characterId": "kanoko-mamiya",
    "coverId": "love-to-lie-angle",
    "quoteId": "yui-funami",
    "emojiId": "hana-ni-arashi",
    "shipId": "misa-io",
    "silhouetteId": "ayumu-uehara",
    "songId": "listen-htt"
  },
  "365": {
    "classicId": "bang-dream-ave-mujica",
    "characterId": "jiho-bust",
    "coverId": "she-is-still-cute-today",
    "quoteId": "ryo-yamada",
    "emojiId": "hello-melancholic",
    "shipId": "chito-yuuri",
    "silhouetteId": "tong-tong",
    "songId": "kimama-na-tenshi-tachi"
  },
  "366": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "rin-toyama",
    "coverId": "kitanai-kimi",
    "quoteId": "princess-charlotte",
    "emojiId": "kill-me-now",
    "shipId": "hinako-asahi",
    "silhouetteId": "queen-velverosa",
    "songId": "hoshi-to-hana"
  },
  "367": {
    "classicId": "dear-my-teacher",
    "characterId": "nanaki-fujishiro",
    "coverId": "bocchi-the-rock",
    "quoteId": "shino",
    "emojiId": "hello-melancholic",
    "shipId": "sayohina",
    "silhouetteId": "menou-virgin-road",
    "songId": "dream-solister"
  },
  "368": {
    "classicId": "watamote",
    "characterId": "hinako-yaotose",
    "coverId": "saki",
    "quoteId": "seon-hwa",
    "emojiId": "long-awaited-feelings",
    "shipId": "shijima-majime",
    "silhouetteId": "hibiki-tachibana",
    "songId": "venus-line"
  },
  "369": {
    "classicId": "hibike-euphonium",
    "characterId": "yuuna-matsubara",
    "coverId": "our-teachers-are-dating",
    "quoteId": "madoka-kaname",
    "emojiId": "always-human",
    "shipId": "nomokasu",
    "silhouetteId": "hanayo-koizumi",
    "songId": "miracle-rush"
  },
  "370": {
    "classicId": "im-in-love-with-the-villainess",
    "characterId": "azusa-nakano",
    "coverId": "love-doctor",
    "quoteId": "makoto-shimizu",
    "emojiId": "sheep-princess",
    "shipId": "meiyuzu",
    "silhouetteId": "kurumi-yoshizawa",
    "songId": "tenbin-fragtime"
  },
  "371": {
    "classicId": "i-love-amy",
    "characterId": "hinako-yaotose",
    "coverId": "princess-connect-redive",
    "quoteId": "yuu-koito",
    "emojiId": "i-love-amy",
    "shipId": "kaoru-chisato",
    "silhouetteId": "nana-daiba",
    "songId": "follow-your-arrows"
  },
  "372": {
    "classicId": "goodbye-my-rose-garden",
    "characterId": "setsuna-yuki",
    "coverId": "shine-post",
    "quoteId": "maho-akashi",
    "emojiId": "vampire-in-the-garden",
    "shipId": "malovel",
    "silhouetteId": "anisphia-wynn-palettia",
    "songId": "red-birthmark"
  },
  "373": {
    "classicId": "kin-iro-movie",
    "characterId": "lynn-pulse",
    "coverId": "houkago-teibou-nisshi",
    "quoteId": "kiwi-araga",
    "emojiId": "vampire-in-the-garden",
    "shipId": "chito-yuuri",
    "silhouetteId": "hinata-futari",
    "songId": "spicy-piece"
  },
  "374": {
    "classicId": "love-doctor",
    "characterId": "vayuela-vanadis",
    "coverId": "harukana-receive",
    "quoteId": "ye-xing",
    "emojiId": "asagao-to-kase-san",
    "shipId": "ririyuyu",
    "silhouetteId": "ryo-yamada",
    "songId": "synchrogazer"
  },
  "375": {
    "classicId": "how-do-we-relationship",
    "characterId": "hina-gbc",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "cha-yoonsung",
    "emojiId": "chou-kaguya-hime",
    "shipId": "hibimiku",
    "silhouetteId": "hanabi-natsuno",
    "songId": "asu-e-no-tobira"
  },
  "376": {
    "classicId": "kiss-and-white-lily",
    "characterId": "da-kyeong",
    "coverId": "i-married-my-best-friend",
    "quoteId": "nanase-natsume",
    "emojiId": "d4dj",
    "shipId": "yuni-nanase",
    "silhouetteId": "tsubasa-kazanari",
    "songId": "yuriyurararara"
  },
  "377": {
    "classicId": "vanadis-heart",
    "characterId": "haruka-murakami",
    "coverId": "amanchu",
    "quoteId": "mei-aihara",
    "emojiId": "i-love-amy",
    "shipId": "raeclaire",
    "silhouetteId": "emma-night-owls",
    "songId": "umapyoi-densetsu"
  },
  "378": {
    "classicId": "dear-my-teacher",
    "characterId": "azusa-nakano",
    "coverId": "lily-love-2",
    "quoteId": "umika-konohoshi",
    "emojiId": "symphogear",
    "shipId": "sakinodoka",
    "silhouetteId": "hifumi-takimoto",
    "songId": "other-side-of-wall"
  },
  "379": {
    "classicId": "seiyuu-radio",
    "characterId": "yoo-jin-serenade",
    "coverId": "ange-vierge",
    "quoteId": "sophie-twilight",
    "emojiId": "valkyrie-drive",
    "shipId": "komavill",
    "silhouetteId": "illyasviel-von-einzbern",
    "songId": "follow-your-arrows"
  },
  "380": {
    "classicId": "d4dj",
    "characterId": "honey-trap",
    "coverId": "yuri-seijin-naoko-san",
    "quoteId": "umiri-yahata",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "takitomo",
    "silhouetteId": "satsuki-konohana",
    "songId": "irodori-jelee"
  },
  "381": {
    "classicId": "release-the-spyce",
    "characterId": "nanami-oda",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "yuu-sonoda",
    "emojiId": "ange-vierge",
    "shipId": "shimbaek",
    "silhouetteId": "koharu-tsurezure",
    "songId": "zattou-bokura-no-machi"
  },
  "382": {
    "classicId": "fluttering-feelings",
    "characterId": "hibiki-sugawa",
    "coverId": "everyday-lily",
    "quoteId": "miku-kohinata",
    "emojiId": "ring-my-bell",
    "shipId": "takitomo",
    "silhouetteId": "makoto-shimizu",
    "songId": "memories-comic-girls"
  },
  "383": {
    "classicId": "the-moon-on-a-rainy-night",
    "characterId": "cha-yoonsung",
    "coverId": "regalia",
    "quoteId": "yoo-jin-serenade",
    "emojiId": "i-love-amy",
    "shipId": "nao-kurumi",
    "silhouetteId": "claudine-saijo",
    "songId": "haruhikage"
  },
  "384": {
    "classicId": "pulse",
    "characterId": "arisa-ichigaya",
    "coverId": "prisma-illya",
    "quoteId": "cha-yoonsung",
    "emojiId": "fragtime",
    "shipId": "uta-ayaka",
    "silhouetteId": "lynn-pulse",
    "songId": "hana-no-tou"
  },
  "385": {
    "classicId": "bloom-into-you",
    "characterId": "yumeko-jabami",
    "coverId": "doughnuts-under-a-crescent-moon",
    "quoteId": "rupa",
    "emojiId": "nevermore-webtoon",
    "shipId": "hifumiaoba",
    "silhouetteId": "mahiru-kouzuki",
    "songId": "soushou-innocent"
  },
  "386": {
    "classicId": "sheep-princess",
    "characterId": "ai-narata",
    "coverId": "vividred-operation",
    "quoteId": "madam-baek",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "fuu-mashi",
    "silhouetteId": "euphyllia-magenta",
    "songId": "arc-en-ciel"
  },
  "387": {
    "classicId": "bloom-into-you",
    "characterId": "yuzu-konohana",
    "coverId": "bang-dream-pico",
    "quoteId": "makoto-shimizu",
    "emojiId": "mage-and-demon-queen",
    "shipId": "mahikano",
    "silhouetteId": "illyasviel-von-einzbern",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "388": {
    "classicId": "even-though-were-adults",
    "characterId": "shizuku-hoshikawa",
    "coverId": "release-the-spyce",
    "quoteId": "nico-yazawa",
    "emojiId": "everyday-lily",
    "shipId": "eveaoi",
    "silhouetteId": "nagisa-ootsuki",
    "songId": "valkyrie-drive-op"
  },
  "389": {
    "classicId": "whispering-you-a-love-song",
    "characterId": "rae-taylor",
    "coverId": "new-game",
    "quoteId": "princess-fine",
    "emojiId": "i-love-amy",
    "shipId": "maria-lan",
    "silhouetteId": "vayuela-vanadis",
    "songId": "yuriyurararara"
  },
  "390": {
    "classicId": "goodbye-my-rose-garden",
    "characterId": "riko-sakurauchi",
    "coverId": "the-executioner-and-her-way-of-life",
    "quoteId": "miwa-inuzuka",
    "emojiId": "hello-melancholic",
    "shipId": "cocona-papika",
    "silhouetteId": "io-utsushicha",
    "songId": "haruhikage"
  },
  "391": {
    "classicId": "prisma-illya",
    "characterId": "shino",
    "coverId": "tari-tari",
    "quoteId": "lin-luxi",
    "emojiId": "everyday-lily",
    "shipId": "mahikano",
    "silhouetteId": "kurumi-yoshizawa",
    "songId": "memories-comic-girls"
  },
  "392": {
    "classicId": "mayonaka-punch",
    "characterId": "saki-kindaichi",
    "coverId": "stardust-telepath",
    "quoteId": "homura-akemi",
    "emojiId": "yuru-camp",
    "shipId": "yvonelsa",
    "silhouetteId": "miwa-inuzuka",
    "songId": "alive-lycoris"
  },
  "393": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "yui-funami",
    "coverId": "cant-defy-the-lonely-girl",
    "quoteId": "anne-manaria",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "yvonelsa",
    "silhouetteId": "yuu-sonoda",
    "songId": "memories-comic-girls"
  },
  "394": {
    "classicId": "vexations-of-a-shut-in-vampire",
    "characterId": "haruka-tenoh",
    "coverId": "moonlight-garden",
    "quoteId": "grea",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "seika-ijichi",
    "songId": "kokoro-ni-tsubomi"
  },
  "395": {
    "classicId": "hino-san-no-baka",
    "characterId": "lisa-imai",
    "coverId": "anne-happy",
    "quoteId": "kokoro-tsurumaki",
    "emojiId": "flip-flappers",
    "shipId": "konatsukoyuki",
    "silhouetteId": "maya-tendo",
    "songId": "soushou-innocent"
  },
  "396": {
    "classicId": "asagao-to-kase-san",
    "characterId": "yui-funami",
    "coverId": "do-it-yourself",
    "quoteId": "lynn-pulse",
    "emojiId": "sakura-trick",
    "shipId": "ran-moca",
    "silhouetteId": "kumiko-oumae",
    "songId": "shiny-days"
  },
  "397": {
    "classicId": "lily-love",
    "characterId": "hougetsu-shimamura",
    "coverId": "miss-kobayashis-dragon-maid",
    "quoteId": "makoto-shimizu",
    "emojiId": "sheep-princess",
    "shipId": "yuutou",
    "silhouetteId": "suzu-nekoyama",
    "songId": "starlog-illya"
  },
  "398": {
    "classicId": "saki",
    "characterId": "io-utsushicha",
    "coverId": "shinsekai-yori",
    "quoteId": "mei-aihara",
    "emojiId": "watamote",
    "shipId": "futakao",
    "silhouetteId": "rae-taylor",
    "songId": "raise-your-hands"
  },
  "399": {
    "classicId": "the-guy-she-was-interested-in",
    "characterId": "yuki-kyou-kano",
    "coverId": "days-of-love-at-seagull-villa",
    "quoteId": "claudine-saijo",
    "emojiId": "sakura-trick",
    "shipId": "momo-aki",
    "silhouetteId": "tokaku-azuma",
    "songId": "zattou-bokura-no-machi"
  },
  "400": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "nika-nanaura",
    "coverId": "yama-no-susume",
    "quoteId": "kaoru-seta",
    "emojiId": "princess-principal",
    "shipId": "ginkure",
    "silhouetteId": "queen-velverosa",
    "songId": "ano-mori-de-matteru"
  },
  "401": {
    "classicId": "straight-girl-trap",
    "characterId": "yoshika-miyafuji",
    "coverId": "semelparous",
    "quoteId": "momo-minamoto",
    "emojiId": "i-love-amy",
    "shipId": "himemitsuki",
    "silhouetteId": "da-kyeong",
    "songId": "arc-en-ciel"
  },
  "402": {
    "classicId": "vividred-operation",
    "characterId": "ayaka-sakurai",
    "coverId": "always-human",
    "quoteId": "azusa-nakano",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "nanajun",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "hectopascal"
  },
  "403": {
    "classicId": "manaria-friends",
    "characterId": "konatsu-amano",
    "coverId": "beauty-and-the-beast-girl",
    "quoteId": "sumika-chibana",
    "emojiId": "akebi-chan",
    "shipId": "uta-ayaka",
    "silhouetteId": "yachiyo-tsukimi",
    "songId": "arc-en-ciel"
  },
  "404": {
    "classicId": "kuzu-no-honkai",
    "characterId": "noa-himesaka",
    "coverId": "shino-to-ren",
    "quoteId": "asahi-satou",
    "emojiId": "fluttering-feelings",
    "shipId": "luo-xinyue",
    "silhouetteId": "tokai-teio",
    "songId": "won3chu-kissme"
  },
  "405": {
    "classicId": "im-in-love-with-the-villainess",
    "characterId": "raana-kaname",
    "coverId": "night-owls-and-summer-skies",
    "quoteId": "taki-shiina",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "kyosaya",
    "silhouetteId": "hikari-kagura",
    "songId": "hoshi-to-hana"
  },
  "406": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "sakura-adachi",
    "coverId": "slow-loop",
    "quoteId": "karen-aijo",
    "emojiId": "happy-sugar-life",
    "shipId": "rinpana",
    "silhouetteId": "yuu-koito",
    "songId": "seishun-complex"
  },
  "407": {
    "classicId": "maria-holic",
    "characterId": "nomoto-yuki",
    "coverId": "ms-vampire-who-lives-in-my-neighborhood",
    "quoteId": "hikari-kagura",
    "emojiId": "i-love-amy",
    "shipId": "madohomu",
    "silhouetteId": "chidori-takamori",
    "songId": "spicy-piece"
  },
  "408": {
    "classicId": "brave-witches",
    "characterId": "yuu-koito",
    "coverId": "utsushicha-damena-kao",
    "quoteId": "chisato-shirasagi",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "hibimiku",
    "silhouetteId": "yuzu-aihara",
    "songId": "venus-line"
  },
  "409": {
    "classicId": "girls-last-tour",
    "characterId": "kiwi-araga",
    "coverId": "beauty-and-the-beast-girl",
    "quoteId": "takina-inoue",
    "emojiId": "assault-lily-league",
    "shipId": "mizore-nozomi",
    "silhouetteId": "akari-tokitoh",
    "songId": "shiny-days"
  },
  "410": {
    "classicId": "adachi-and-shimamura",
    "characterId": "eli-ayase",
    "coverId": "seiyuu-radio",
    "quoteId": "sayaka-miki",
    "emojiId": "izetta",
    "shipId": "konatsukoyuki",
    "silhouetteId": "chika-takami",
    "songId": "shukufuku"
  },
  "411": {
    "classicId": "soulmate-gl",
    "characterId": "hinako-yaotose",
    "coverId": "her-tale-of-shim-chong",
    "quoteId": "claudine-saijo",
    "emojiId": "lycoris-recoil",
    "shipId": "madohomu",
    "silhouetteId": "xiao-lan-wolf",
    "songId": "shukufuku"
  },
  "412": {
    "classicId": "relationship-guidelines",
    "characterId": "qiu-tong",
    "coverId": "prisma-illya",
    "quoteId": "yoo-jin-serenade",
    "emojiId": "lycoris-recoil",
    "shipId": "shino-ren",
    "silhouetteId": "princess-fine",
    "songId": "hoshi-to-hana"
  },
  "413": {
    "classicId": "how-do-we-relationship",
    "characterId": "saeko-tsutsumi",
    "coverId": "kuttsukiboshi",
    "quoteId": "tong-tong",
    "emojiId": "hana-ni-arashi",
    "shipId": "harumatsu",
    "silhouetteId": "rae-taylor",
    "songId": "follow-your-arrows"
  },
  "414": {
    "classicId": "cant-defy-the-lonely-girl",
    "characterId": "haruka-tenoh",
    "coverId": "strike-witches",
    "quoteId": "seon-hwa",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "harumatsu",
    "silhouetteId": "eve",
    "songId": "deal-with-the-devil"
  },
  "415": {
    "classicId": "her-tale-of-shim-chong",
    "characterId": "fine-vampire",
    "coverId": "semelparous",
    "quoteId": "rin-toyama",
    "emojiId": "symphogear",
    "shipId": "nanaki-kanade",
    "silhouetteId": "yuu-akeuchi",
    "songId": "yuriyurararara"
  },
  "416": {
    "classicId": "dear-my-teacher",
    "characterId": "nozomi-kasaki",
    "coverId": "assault-lily-fruits",
    "quoteId": "chuchu",
    "emojiId": "senran-kagura",
    "shipId": "mamori-mirei",
    "silhouetteId": "harumi-taniguchi",
    "songId": "miracle-rush"
  },
  "417": {
    "classicId": "gochuumon-wa-usagi",
    "characterId": "miorine-rembran",
    "coverId": "gushing-over-magical-girls",
    "quoteId": "ran-mitake",
    "emojiId": "kitanai-kimi",
    "shipId": "kotoumi",
    "silhouetteId": "mai-oduka",
    "songId": "aozora-no-rhapsody"
  },
  "418": {
    "classicId": "vampire-in-the-garden",
    "characterId": "ginko-yurishiro",
    "coverId": "my-food-looks-very-cute",
    "quoteId": "setsuna-yuki",
    "emojiId": "always-human",
    "shipId": "dakyeong-seonhwa",
    "silhouetteId": "reina-kousaka",
    "songId": "kimi-ni-aeta-hi"
  },
  "419": {
    "classicId": "even-though-were-adults",
    "characterId": "junna-hoshimi",
    "coverId": "toji-no-miko",
    "quoteId": "shino",
    "emojiId": "bang-dream",
    "shipId": "aniseuphie",
    "silhouetteId": "han-juhee",
    "songId": "tenbin-fragtime"
  },
  "420": {
    "classicId": "regalia",
    "characterId": "tokaku-azuma",
    "coverId": "citrus",
    "quoteId": "yuzu-konohana",
    "emojiId": "fluttering-feelings",
    "shipId": "komavill",
    "silhouetteId": "kano-yamanouchi",
    "songId": "eternal-eternity"
  },
  "421": {
    "classicId": "relationship-guidelines",
    "characterId": "yuni-asahina",
    "coverId": "k-on",
    "quoteId": "airi-sezaki",
    "emojiId": "stardust-telepath",
    "shipId": "yuni-nanase",
    "silhouetteId": "tomori-takamatsu",
    "songId": "deal-with-the-devil"
  },
  "422": {
    "classicId": "kiss-and-white-lily",
    "characterId": "hinako-yaotose",
    "coverId": "love-live-superstar",
    "quoteId": "lenore-nevermore",
    "emojiId": "asagao-to-kase-san",
    "shipId": "kaseyamada",
    "silhouetteId": "atori-mizutori",
    "songId": "cross-ange-op1"
  },
  "423": {
    "classicId": "konohana-kitan",
    "characterId": "euphyllia-magenta",
    "coverId": "school-zone-girls",
    "quoteId": "kokoro-tsurumaki",
    "emojiId": "symphogear",
    "shipId": "nicomaki",
    "silhouetteId": "hinako-hanamura",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "424": {
    "classicId": "high-school-fleet",
    "characterId": "renako-amaori",
    "coverId": "always-human",
    "quoteId": "touko-nanami",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "shijima-majime",
    "silhouetteId": "lin-luxi",
    "songId": "shiny-days"
  },
  "425": {
    "classicId": "long-awaited-feelings",
    "characterId": "misa-utsushicha",
    "coverId": "my-food-seems-to-be-very-cute",
    "quoteId": "terakomari-gandesblood",
    "emojiId": "watamote",
    "shipId": "jiho-woori",
    "silhouetteId": "princess-fine",
    "songId": "hana-no-tou"
  },
  "426": {
    "classicId": "hanebado",
    "characterId": "mel-pulse",
    "coverId": "vanadis-heart",
    "quoteId": "chuchu",
    "emojiId": "yuru-camp",
    "shipId": "momo-aki",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "irodori-jelee"
  },
  "427": {
    "classicId": "birdie-wing",
    "characterId": "mami-tomoe",
    "coverId": "yuuki-yuuna",
    "quoteId": "yuu-sonoda",
    "emojiId": "yuuki-yuuna",
    "shipId": "raeclaire",
    "silhouetteId": "suzu-suzukaze",
    "songId": "shiny-days"
  },
  "428": {
    "classicId": "flip-flappers",
    "characterId": "yuzu-konohana",
    "coverId": "akebi-chan",
    "quoteId": "kou-yagami",
    "emojiId": "lycoris-recoil",
    "shipId": "sayakatouko",
    "silhouetteId": "yuko-yoshida",
    "songId": "kimi-no-gin-no-niwa"
  },
  "429": {
    "classicId": "shino-to-ren",
    "characterId": "mafuyu-tsurezure",
    "coverId": "assault-lily-fruits",
    "quoteId": "hinako-uno",
    "emojiId": "bang-dream",
    "shipId": "mayakuro",
    "silhouetteId": "konatsu-amano",
    "songId": "other-side-of-wall"
  },
  "430": {
    "classicId": "anemone-is-in-heat",
    "characterId": "malori-crow",
    "coverId": "bang-dream-ave-mujica",
    "quoteId": "chika-takami",
    "emojiId": "anemone-is-in-heat",
    "shipId": "annabel-lenore",
    "silhouetteId": "yuyu-shirai",
    "songId": "asu-e-no-tobira"
  },
  "431": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "mirei-shikishima",
    "coverId": "handsome-girl-and-sheltered-girl",
    "quoteId": "utada-uta",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "anne-grea",
    "silhouetteId": "terakomari-gandesblood",
    "songId": "sacred-world"
  },
  "432": {
    "classicId": "d4dj",
    "characterId": "konatsu-amano",
    "coverId": "amanchu",
    "quoteId": "sakiko-togawa",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "kasu-arisa",
    "silhouetteId": "riko-sakurauchi",
    "songId": "alive-lycoris"
  },
  "433": {
    "classicId": "the-summer-you-were-there",
    "characterId": "satou-matsuzaka",
    "coverId": "asagao-to-kase-san",
    "quoteId": "rae-taylor",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "mamori-mirei",
    "silhouetteId": "kou-yagami",
    "songId": "memories-comic-girls"
  },
  "434": {
    "classicId": "kanojo-to-himitsu",
    "characterId": "io-utsushicha",
    "coverId": "tamayura",
    "quoteId": "lee-yeowool",
    "emojiId": "love-doctor",
    "shipId": "annabel-lenore",
    "silhouetteId": "kanan-matsuura",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "435": {
    "classicId": "moonlight-garden",
    "characterId": "anisphia-wynn-palettia",
    "coverId": "saeki-sayaka",
    "quoteId": "kobayashi",
    "emojiId": "new-game",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "subaru-awa",
    "songId": "deal-with-the-devil"
  },
  "436": {
    "classicId": "yama-no-susume",
    "characterId": "grea-manaria",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "yui-yamada",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "hinata-mikage",
    "silhouetteId": "maria-cadenzavna-eve",
    "songId": "memories-comic-girls"
  },
  "437": {
    "classicId": "kitanai-kimi",
    "characterId": "junna-hoshimi",
    "coverId": "vanadis-heart",
    "quoteId": "kaguya-cosmic",
    "emojiId": "happy-sugar-life",
    "shipId": "nomokasu",
    "silhouetteId": "nomoto-yuki",
    "songId": "ano-mori-de-matteru"
  },
  "438": {
    "classicId": "the-moon-on-a-rainy-night",
    "characterId": "yuki-hanzomon",
    "coverId": "toji-no-miko",
    "quoteId": "sakura-adachi",
    "emojiId": "bocchi-the-rock",
    "shipId": "chikariko",
    "silhouetteId": "misuzu-moritani",
    "songId": "synchrogazer"
  },
  "439": {
    "classicId": "senran-kagura",
    "characterId": "mizore-yoroizuka",
    "coverId": "fragtime",
    "quoteId": "hougetsu-shimamura",
    "emojiId": "new-game",
    "shipId": "yvonelsa",
    "silhouetteId": "tong-tong",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "440": {
    "classicId": "the-executioner-and-her-way-of-life",
    "characterId": "madam-baek",
    "coverId": "maria-holic",
    "quoteId": "rinku-aimoto",
    "emojiId": "uma-musume",
    "shipId": "chikariko",
    "silhouetteId": "tomo-ebizuka",
    "songId": "synchrogazer"
  },
  "441": {
    "classicId": "love-doctor",
    "characterId": "hibiki-sugawa",
    "coverId": "blooming-sequence",
    "quoteId": "special-week",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "momo-fine",
    "silhouetteId": "mami-tomoe",
    "songId": "hana-no-tou"
  },
  "442": {
    "classicId": "bang-dream-pico",
    "characterId": "ayumu-uehara",
    "coverId": "love-doctor",
    "quoteId": "sayaka-miki",
    "emojiId": "yuri-is-my-job",
    "shipId": "nijiryo",
    "silhouetteId": "sumika-chibana",
    "songId": "tenshi-ni-fureta-yo"
  },
  "443": {
    "classicId": "goodbye-my-rose-garden",
    "characterId": "mami-tomoe",
    "coverId": "netsuzou-trap",
    "quoteId": "shim-chong",
    "emojiId": "flip-flappers",
    "shipId": "nijiryo",
    "silhouetteId": "yuko-yoshida",
    "songId": "soushou-innocent"
  },
  "444": {
    "classicId": "dear-my-teacher",
    "characterId": "shino",
    "coverId": "catulus-syndrome",
    "quoteId": "kim-norae",
    "emojiId": "serenade",
    "shipId": "ginkure",
    "silhouetteId": "illyasviel-von-einzbern",
    "songId": "valkyrie-drive-op"
  },
  "445": {
    "classicId": "selection-project",
    "characterId": "kanade-kurokawa",
    "coverId": "cheerful-amnesia",
    "quoteId": "nico-yazawa",
    "emojiId": "flip-flappers",
    "shipId": "yoojin-hyeji",
    "silhouetteId": "kikuri-hiroi",
    "songId": "aozora-no-rhapsody"
  },
  "446": {
    "classicId": "tamako-market",
    "characterId": "aki-wolf",
    "coverId": "sadistic-beauty-side-b",
    "quoteId": "papika",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "mary-yumeko",
    "silhouetteId": "hinata-hoshino",
    "songId": "eternal-eternity"
  },
  "447": {
    "classicId": "train-to-the-end",
    "characterId": "cocona",
    "coverId": "not-so-shoujo-love-story",
    "quoteId": "chisato-nishikigi",
    "emojiId": "asagao-to-kase-san",
    "shipId": "chuchunika",
    "silhouetteId": "ange-cross-ange",
    "songId": "red-liberation"
  },
  "448": {
    "classicId": "ms-vampire-who-lives-in-my-neighborhood",
    "characterId": "nozomi-tojo",
    "coverId": "sheep-princess",
    "quoteId": "shino",
    "emojiId": "assault-lily",
    "shipId": "chidori-nanoha",
    "silhouetteId": "kou-yagami",
    "songId": "asagao-kase"
  },
  "449": {
    "classicId": "after-hours",
    "characterId": "yuki-hanzomon",
    "coverId": "my-food-looks-very-cute",
    "quoteId": "hinata-futari",
    "emojiId": "revue-starlight",
    "shipId": "sayakatouko",
    "silhouetteId": "miwa-inuzuka",
    "songId": "serendipity-flip"
  },
  "450": {
    "classicId": "tsubame-tip-off",
    "characterId": "makoto-shimizu",
    "coverId": "vampeerz",
    "quoteId": "mafuyu-tsurezure",
    "emojiId": "assault-lily",
    "shipId": "hinako-asahi",
    "silhouetteId": "aoi-amawashi",
    "songId": "machikado-tangent"
  },
  "451": {
    "classicId": "mikagura-gakuen",
    "characterId": "koyuki-honami",
    "coverId": "mage-and-demon-queen",
    "quoteId": "seika-ijichi",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "mayakuro",
    "silhouetteId": "haruka-takayama",
    "songId": "deal-with-the-devil"
  },
  "452": {
    "classicId": "failed-princesses",
    "characterId": "hinata-hoshino",
    "coverId": "this-monster-wants-to-eat-me",
    "quoteId": "sophie-twilight",
    "emojiId": "kakegurui",
    "shipId": "kyosaya",
    "silhouetteId": "hilda-cross-ange",
    "songId": "tenbin-fragtime"
  },
  "453": {
    "classicId": "vexations-of-a-shut-in-vampire",
    "characterId": "nozomi-kasaki",
    "coverId": "tsubame-tip-off",
    "quoteId": "tomori-takamatsu",
    "emojiId": "kitanai-kimi",
    "shipId": "shiina-mimi",
    "silhouetteId": "ajisai-sena",
    "songId": "one-room-sugar-life"
  },
  "454": {
    "classicId": "do-it-yourself",
    "characterId": "akari-amano",
    "coverId": "kanojo-to-himitsu",
    "quoteId": "utada-uta",
    "emojiId": "tamen-de-gushi",
    "shipId": "anontomo",
    "silhouetteId": "papika",
    "songId": "dreamriser"
  },
  "455": {
    "classicId": "asagao-to-kase-san",
    "characterId": "moca-aoba",
    "coverId": "girls-und-panzer",
    "quoteId": "kikuri-hiroi",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "kotoumi",
    "silhouetteId": "ren",
    "songId": "valkyrie-drive-op"
  },
  "456": {
    "classicId": "strike-witches",
    "characterId": "nodoka-haramura",
    "coverId": "lily-yy",
    "quoteId": "karen-aijo",
    "emojiId": "otherside-picnic",
    "shipId": "juhee-yeowool",
    "silhouetteId": "menou-virgin-road",
    "songId": "hoshi-no-dialogue"
  },
  "457": {
    "classicId": "sekai-de-ichiban-oppai",
    "characterId": "chuchu",
    "coverId": "asumi-chan",
    "quoteId": "baek-seola",
    "emojiId": "mage-and-demon-queen",
    "shipId": "kumiko-reina",
    "silhouetteId": "anon-chihaya",
    "songId": "shiny-days"
  },
  "458": {
    "classicId": "sono-hanabira",
    "characterId": "nanoha-chiba",
    "coverId": "bocchi-the-rock",
    "quoteId": "tomo-ebizuka",
    "emojiId": "the-summer-you-were-there",
    "shipId": "nijiryo",
    "silhouetteId": "mahiru-kouzuki",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "459": {
    "classicId": "lily-yy",
    "characterId": "hifumi-takimoto",
    "coverId": "how-do-we-relationship",
    "quoteId": "umi-sonoda",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "raeclaire",
    "silhouetteId": "villhaze",
    "songId": "eternal-eternity"
  },
  "460": {
    "classicId": "pulse",
    "characterId": "fuuko-taki",
    "coverId": "hero-san",
    "quoteId": "miho-nishizumi",
    "emojiId": "love-doctor",
    "shipId": "adachishima",
    "silhouetteId": "aya-oosawa",
    "songId": "flip-flappers-ed"
  },
  "461": {
    "classicId": "even-if-it-was-just-once",
    "characterId": "misuzu-moritani",
    "coverId": "love-live-superstar",
    "quoteId": "xiao-lan-wolf",
    "emojiId": "madoka-magica",
    "shipId": "ran-moca",
    "silhouetteId": "nanami-oda",
    "songId": "snow-halation"
  },
  "462": {
    "classicId": "kageki-shojo",
    "characterId": "ajisai-sena",
    "coverId": "otherside-picnic",
    "quoteId": "illyasviel-von-einzbern",
    "emojiId": "akebi-chan",
    "shipId": "kase-yamada",
    "silhouetteId": "subaru-awa",
    "songId": "deal-with-the-devil"
  },
  "463": {
    "classicId": "kitanai-kimi",
    "characterId": "yuki-hanzomon",
    "coverId": "valkyrie-drive",
    "quoteId": "ginko-yurishiro",
    "emojiId": "kageki-shojo",
    "shipId": "luo-xinyue",
    "silhouetteId": "lin-luxi",
    "songId": "machikado-tangent"
  },
  "464": {
    "classicId": "vividred-operation",
    "characterId": "rae-taylor",
    "coverId": "how-do-we-relationship",
    "quoteId": "rupa",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "komavill",
    "silhouetteId": "yuki-hanzomon",
    "songId": "dreamriser"
  },
  "465": {
    "classicId": "kanojo-to-himitsu",
    "characterId": "shiina-kakure",
    "coverId": "girls-und-panzer",
    "quoteId": "qiu-tong",
    "emojiId": "love-live-sip",
    "shipId": "jiho-woori",
    "silhouetteId": "rupa",
    "songId": "blue-bud-netsuzou"
  },
  "466": {
    "classicId": "girls-band-cry",
    "characterId": "tomoka-kase",
    "coverId": "baili-jin",
    "quoteId": "nina-iseri",
    "emojiId": "princess-principal",
    "shipId": "ninomomo",
    "silhouetteId": "hifumi-takimoto",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "467": {
    "classicId": "kin-iro-movie",
    "characterId": "momo-sheep",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "maria-cadenzavna-eve",
    "emojiId": "madoka-magica",
    "shipId": "menou-akari",
    "silhouetteId": "mutsumi-wakaba",
    "songId": "haruhikage"
  },
  "468": {
    "classicId": "bad-thinking-diary",
    "characterId": "fine-vampire",
    "coverId": "utsushicha-damena-kao",
    "quoteId": "maki-nishikino",
    "emojiId": "bang-dream-pico",
    "shipId": "sophie-akari",
    "silhouetteId": "rin-toyama",
    "songId": "miracle-rush"
  },
  "469": {
    "classicId": "chou-kaguya-hime",
    "characterId": "hina-hikawa",
    "coverId": "futaribeya",
    "quoteId": "atori-mizutori",
    "emojiId": "manaria-friends",
    "shipId": "makoto-akane",
    "silhouetteId": "lin-luxi",
    "songId": "ten-to-sen"
  },
  "470": {
    "classicId": "yama-no-susume",
    "characterId": "chito-glt",
    "coverId": "fuzoroi-no-renri",
    "quoteId": "yuzu-konohana",
    "emojiId": "vanadis-heart",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "sakiko-togawa",
    "songId": "haruhikage"
  },
  "471": {
    "classicId": "always-human",
    "characterId": "yuu-sonoda",
    "coverId": "konohana-kitan",
    "quoteId": "jiho-bust",
    "emojiId": "kageki-shojo",
    "shipId": "uta-ayaka",
    "silhouetteId": "lynn-pulse",
    "songId": "seishun-complex"
  },
  "472": {
    "classicId": "comic-girls",
    "characterId": "setsuna-yuki",
    "coverId": "a-joyful-life",
    "quoteId": "sakura-adachi",
    "emojiId": "akebi-chan",
    "shipId": "sarasa-ai",
    "silhouetteId": "baek-seola",
    "songId": "magia-madoka"
  },
  "473": {
    "classicId": "kimi-ga-shinu-made",
    "characterId": "minato-asano",
    "coverId": "nevermore-webtoon",
    "quoteId": "hinata-futari",
    "emojiId": "akebi-chan",
    "shipId": "kase-yamada",
    "silhouetteId": "yuu-koito",
    "songId": "asagao-kase"
  },
  "474": {
    "classicId": "saki",
    "characterId": "yuna-yuki",
    "coverId": "the-moon-on-a-rainy-night",
    "quoteId": "hibiki-sugawa",
    "emojiId": "serenade",
    "shipId": "angeprin",
    "silhouetteId": "sorawo-kamikoshi",
    "songId": "go-go-maniac"
  },
  "475": {
    "classicId": "if-i-could-reach-you",
    "characterId": "tokaku-azuma",
    "coverId": "lily-love",
    "quoteId": "aya-maruyama",
    "emojiId": "bocchi-the-rock",
    "shipId": "uika-saki",
    "silhouetteId": "rin-toyama",
    "songId": "memories-comic-girls"
  },
  "476": {
    "classicId": "love-live-nijigasaki",
    "characterId": "miwa-inuzuka",
    "coverId": "cross-ange",
    "quoteId": "chika-takami",
    "emojiId": "granbelm",
    "shipId": "yuni-nanase",
    "silhouetteId": "hinako-uno",
    "songId": "mayoiuta"
  },
  "477": {
    "classicId": "maria-holic",
    "characterId": "yukina-minato",
    "coverId": "mygo",
    "quoteId": "natori-ryoko",
    "emojiId": "watanare",
    "shipId": "adachishima",
    "silhouetteId": "shizuku-hoshikawa",
    "songId": "sakura-skip"
  },
  "478": {
    "classicId": "maria-holic",
    "characterId": "chuchu",
    "coverId": "sadistic-beauty-side-b",
    "quoteId": "tokai-teio",
    "emojiId": "vanadis-heart",
    "shipId": "ginkure",
    "silhouetteId": "hougetsu-shimamura",
    "songId": "hikari-no-senritsu"
  },
  "479": {
    "classicId": "stardust-telepath",
    "characterId": "natori-ryoko",
    "coverId": "i-love-amy",
    "quoteId": "chisato-shirasagi",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "momo-fine",
    "silhouetteId": "ange-cross-ange",
    "songId": "other-side-of-wall"
  },
  "480": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "aya-oosawa",
    "coverId": "bang-dream-ave-mujica",
    "quoteId": "mashiro-komiyama",
    "emojiId": "akebi-chan",
    "shipId": "angeprin",
    "silhouetteId": "shino",
    "songId": "hoshi-to-hana"
  },
  "481": {
    "classicId": "handsome-girl-and-sheltered-girl",
    "characterId": "kaguya-cosmic",
    "coverId": "love-live-nijigasaki",
    "quoteId": "koyuki-honami",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "nina-hina",
    "silhouetteId": "yuni-asahina",
    "songId": "ano-mori-de-matteru"
  },
  "482": {
    "classicId": "wataten-movie",
    "characterId": "mahiru-kouzuki",
    "coverId": "tadokoro-san",
    "quoteId": "yuzu-konohana",
    "emojiId": "new-game",
    "shipId": "sayakatouko",
    "silhouetteId": "yuni-asahina",
    "songId": "tenbin-fragtime"
  },
  "483": {
    "classicId": "yuri-is-my-job",
    "characterId": "kaguya-cosmic",
    "coverId": "tsubame-tip-off",
    "quoteId": "toriko-nishina",
    "emojiId": "assault-lily",
    "shipId": "uta-ayaka",
    "silhouetteId": "yui-yamada",
    "songId": "hoshi-to-hana"
  },
  "484": {
    "classicId": "brave-witches",
    "characterId": "vivian-night-owls",
    "coverId": "hana-to-hina",
    "quoteId": "nika-nanaura",
    "emojiId": "yuuki-yuuna",
    "shipId": "mizore-nozomi",
    "silhouetteId": "sun-jing",
    "songId": "arc-en-ciel"
  },
  "485": {
    "classicId": "run-away-with-me-girl",
    "characterId": "yui-yamada",
    "coverId": "yuri-is-my-job",
    "quoteId": "mio-sakamoto",
    "emojiId": "valkyrie-drive",
    "shipId": "komavill",
    "silhouetteId": "sora-honda",
    "songId": "snow-halation"
  },
  "486": {
    "classicId": "murcielago",
    "characterId": "mel-pulse",
    "coverId": "watamote",
    "quoteId": "madam-baek",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "yuu-atori",
    "silhouetteId": "io-utsushicha",
    "songId": "irodori-jelee"
  },
  "487": {
    "classicId": "miss-kobayashis-dragon-maid",
    "characterId": "ye-xing",
    "coverId": "sheep-princess",
    "quoteId": "kiwi-araga",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "yui-yamada",
    "songId": "dream-solister"
  },
  "488": {
    "classicId": "futari-monologue",
    "characterId": "kita-ikuyo",
    "coverId": "adachi-and-shimamura",
    "quoteId": "miku-kohinata",
    "emojiId": "magirevo",
    "shipId": "kikusei",
    "silhouetteId": "shino",
    "songId": "serendipity-flip"
  },
  "489": {
    "classicId": "cross-ange",
    "characterId": "hifumi-takimoto",
    "coverId": "after-hours",
    "quoteId": "yachiyo-inugami",
    "emojiId": "girls-band-cry",
    "shipId": "malovel",
    "silhouetteId": "ritsu-tainaka",
    "songId": "seishun-complex"
  },
  "490": {
    "classicId": "hino-san-no-baka",
    "characterId": "kikuri-hiroi",
    "coverId": "murcielago",
    "quoteId": "kaoru-seta",
    "emojiId": "cross-ange",
    "shipId": "kanadia",
    "silhouetteId": "haru-ichinose",
    "songId": "hoshi-to-hana"
  },
  "491": {
    "classicId": "lily-love",
    "characterId": "hye-ji-serenade",
    "coverId": "witch-from-mercury",
    "quoteId": "homura-akemi",
    "emojiId": "bad-girl",
    "shipId": "momo-fine",
    "silhouetteId": "kyoko-toshino",
    "songId": "eternal-eternity"
  },
  "492": {
    "classicId": "not-so-shoujo-love-story",
    "characterId": "akari-tokitoh",
    "coverId": "futaribeya",
    "quoteId": "maria-cadenzavna-eve",
    "emojiId": "yuuki-yuuna",
    "shipId": "shamimomo",
    "silhouetteId": "koharu-tsurezure",
    "songId": "zattou-bokura-no-machi"
  },
  "493": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "yuu-koito",
    "coverId": "night-owls-and-summer-skies",
    "quoteId": "kanade-kurokawa",
    "emojiId": "bloom-into-you",
    "shipId": "nao-kurumi",
    "silhouetteId": "umika-konohoshi",
    "songId": "hectopascal"
  },
  "494": {
    "classicId": "birdie-wing",
    "characterId": "reina-kousaka",
    "coverId": "lycoris-recoil",
    "quoteId": "rupa",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "ayuyuu",
    "silhouetteId": "sakura-adachi",
    "songId": "seishun-complex"
  },
  "495": {
    "classicId": "world-dai-star",
    "characterId": "jung-era",
    "coverId": "catulus-syndrome",
    "quoteId": "lisa-imai",
    "emojiId": "watanare",
    "shipId": "soyosaki",
    "silhouetteId": "tomori-takamatsu",
    "songId": "haruhikage"
  },
  "496": {
    "classicId": "ange-vierge",
    "characterId": "kaori-asaka",
    "coverId": "prism-yuri",
    "quoteId": "minato-asano",
    "emojiId": "yuru-camp",
    "shipId": "kase-yamada",
    "silhouetteId": "yuu-akeuchi",
    "songId": "azalea-citrus"
  },
  "497": {
    "classicId": "blooming-sequence",
    "characterId": "ayaka-shiraishi",
    "coverId": "girls-band-cry",
    "quoteId": "jiho-bust",
    "emojiId": "tamen-de-gushi",
    "shipId": "kagu-iro",
    "silhouetteId": "grea",
    "songId": "kimi-no-gin-no-niwa"
  },
  "498": {
    "classicId": "what-does-the-fox-say",
    "characterId": "matsuri-mizusawa",
    "coverId": "izetta",
    "quoteId": "mio-akiyama",
    "emojiId": "serenade",
    "shipId": "mel-lynn",
    "silhouetteId": "mayumi-kodama",
    "songId": "hoshi-no-tabibito"
  },
  "499": {
    "classicId": "d4dj",
    "characterId": "iroha-sakayori",
    "coverId": "bang-dream-pico",
    "quoteId": "mami-tomoe",
    "emojiId": "yuru-camp",
    "shipId": "nana-yuki",
    "silhouetteId": "momo-chiyoda",
    "songId": "kimi-ni-furete"
  },
  "500": {
    "classicId": "sadistic-beauty-side-b",
    "characterId": "mio-akiyama",
    "coverId": "night-owls-and-summer-skies",
    "quoteId": "karen-aijo",
    "emojiId": "girls-band-cry",
    "shipId": "umiyuu",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "flip-flappers-ed"
  },
  "501": {
    "classicId": "assault-lily-fruits",
    "characterId": "villhaze",
    "coverId": "love-live-sunshine",
    "quoteId": "maya-tendo",
    "emojiId": "granbelm",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "shino",
    "songId": "hoshi-no-tabibito"
  },
  "502": {
    "classicId": "futaribeya",
    "characterId": "hilda-cross-ange",
    "coverId": "mage-and-demon-queen",
    "quoteId": "haru-ichinose",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "luo-xinyue",
    "silhouetteId": "yuuri-glt",
    "songId": "follow-your-arrows"
  },
  "503": {
    "classicId": "flip-flappers",
    "characterId": "rae-taylor",
    "coverId": "night-owls-and-summer-skies",
    "quoteId": "lapis-tenebrae",
    "emojiId": "kakegurui",
    "shipId": "angeprin",
    "silhouetteId": "mirei-shikishima",
    "songId": "hikari-no-senritsu"
  },
  "504": {
    "classicId": "manaria-friends",
    "characterId": "saeko-tsutsumi",
    "coverId": "love-live-superstar",
    "quoteId": "ye-xing",
    "emojiId": "asagao-to-kase-san",
    "shipId": "utekiwi",
    "silhouetteId": "yukina-minato",
    "songId": "ten-to-sen"
  },
  "505": {
    "classicId": "yuri-is-my-job",
    "characterId": "konomi-fujiwara",
    "coverId": "a-joyful-life",
    "quoteId": "nina-iseri",
    "emojiId": "tamen-de-gushi",
    "shipId": "tomoko-yuri",
    "silhouetteId": "vivian-night-owls",
    "songId": "follow-your-arrows"
  },
  "506": {
    "classicId": "lily-love-2",
    "characterId": "claudine-saijo",
    "coverId": "hibike-euphonium",
    "quoteId": "koharu-tsurezure",
    "emojiId": "girls-band-cry",
    "shipId": "mashiruri",
    "silhouetteId": "nana-daiba",
    "songId": "spicy-piece"
  },
  "507": {
    "classicId": "hello-melancholic",
    "characterId": "qiu-tong",
    "coverId": "saeki-sayaka",
    "quoteId": "yui-funami",
    "emojiId": "yuuki-yuuna",
    "shipId": "kyosaya",
    "silhouetteId": "seika-ijichi",
    "songId": "hoshi-no-tabibito"
  },
  "508": {
    "classicId": "selection-project",
    "characterId": "taki-shiina",
    "coverId": "lycoris-recoil",
    "quoteId": "ginko-yurishiro",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "shizukaori",
    "silhouetteId": "riri-hitotsuyanagi",
    "songId": "one-room-sugar-life"
  },
  "509": {
    "classicId": "miss-kobayashis-dragon-maid",
    "characterId": "sora-honda",
    "coverId": "chuunibyou",
    "quoteId": "shino",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "ririyuyu",
    "silhouetteId": "azusa-nakano",
    "songId": "guitar-loneliness"
  },
  "510": {
    "classicId": "hanebado",
    "characterId": "kano-yamanouchi",
    "coverId": "sadistic-beauty-side-b",
    "quoteId": "koyuki-honami",
    "emojiId": "hello-melancholic",
    "shipId": "hinako-asahi",
    "silhouetteId": "anne-manaria",
    "songId": "listen-htt"
  },
  "511": {
    "classicId": "serenade",
    "characterId": "ran-mitake",
    "coverId": "inugami-nekoyama",
    "quoteId": "tsubasa-kazanari",
    "emojiId": "bang-dream-pico",
    "shipId": "asuka-saki",
    "silhouetteId": "chidori-takamori",
    "songId": "deal-with-the-devil"
  },
  "512": {
    "classicId": "if-i-could-reach-you",
    "characterId": "lu-nan",
    "coverId": "lycoris-recollect",
    "quoteId": "eli-ayase",
    "emojiId": "soulmate-gl",
    "shipId": "nicomaki",
    "silhouetteId": "umiri-yahata",
    "songId": "hikari-no-senritsu"
  },
  "513": {
    "classicId": "opium-gl",
    "characterId": "claire-francois",
    "coverId": "fuzoroi-no-renri",
    "quoteId": "madam-baek",
    "emojiId": "cross-ange",
    "shipId": "hinako-shiori",
    "silhouetteId": "nanoha-chiba",
    "songId": "azalea-citrus"
  },
  "514": {
    "classicId": "adachi-and-shimamura",
    "characterId": "kaori-asaka",
    "coverId": "toji-no-miko",
    "quoteId": "junna-hoshimi",
    "emojiId": "bloom-into-you",
    "shipId": "konatsukoyuki",
    "silhouetteId": "yumeko-jabami",
    "songId": "kimi-ni-furete"
  },
  "515": {
    "classicId": "flip-flappers",
    "characterId": "nana-daiba",
    "coverId": "yama-no-susume",
    "quoteId": "mio-akiyama",
    "emojiId": "sakura-trick",
    "shipId": "malovel",
    "silhouetteId": "moca-aoba",
    "songId": "guitar-loneliness"
  },
  "516": {
    "classicId": "love-live-sip",
    "characterId": "hibiki-tachibana",
    "coverId": "crown-handler",
    "quoteId": "aya-oosawa",
    "emojiId": "sakura-trick",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "momo-minamoto",
    "songId": "deal-with-the-devil"
  },
  "517": {
    "classicId": "princess-connect-redive",
    "characterId": "airi-sezaki",
    "coverId": "yama-no-susume",
    "quoteId": "lisa-imai",
    "emojiId": "watanare",
    "shipId": "himayori",
    "silhouetteId": "mei-aihara",
    "songId": "sacred-world"
  },
  "518": {
    "classicId": "nevermore-webtoon",
    "characterId": "yukina-minato",
    "coverId": "vtuber-legend",
    "quoteId": "io-utsushicha",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "kyosaya",
    "silhouetteId": "hime-shiraki",
    "songId": "tenshi-ni-fureta-yo"
  },
  "519": {
    "classicId": "fed-up-office-lady-villainess",
    "characterId": "anon-chihaya",
    "coverId": "always-human",
    "quoteId": "yuki-hanzomon",
    "emojiId": "fragtime",
    "shipId": "kasu-arisa",
    "silhouetteId": "erika-kizaki",
    "songId": "shiny-days"
  },
  "520": {
    "classicId": "doughnuts-under-a-crescent-moon",
    "characterId": "matsuri-mizusawa",
    "coverId": "asagao-to-kase-san",
    "quoteId": "kanoko-mamiya",
    "emojiId": "madoka-magica",
    "shipId": "momo-aki",
    "silhouetteId": "elsa-dorothy",
    "songId": "soushou-innocent"
  },
  "521": {
    "classicId": "a-joyful-life",
    "characterId": "kaori-asaka",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "majime-yamashita",
    "emojiId": "lycoris-recoil",
    "shipId": "sophie-akari",
    "silhouetteId": "nagisa-ootsuki",
    "songId": "memories-comic-girls"
  },
  "522": {
    "classicId": "re-stage-dream-days",
    "characterId": "maho-akashi",
    "coverId": "kitanai-kimi",
    "quoteId": "annabel-lee",
    "emojiId": "granbelm",
    "shipId": "ayaka-sora",
    "silhouetteId": "eli-ayase",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "523": {
    "classicId": "please-bully-me-miss-villainess",
    "characterId": "sorawo-kamikoshi",
    "coverId": "witch-from-mercury",
    "quoteId": "kurumi-yoshizawa",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "nicomaki",
    "silhouetteId": "sophie-twilight",
    "songId": "blue-bud-netsuzou"
  },
  "524": {
    "classicId": "hino-san-no-baka",
    "characterId": "akari-tokitoh",
    "coverId": "release-the-spyce",
    "quoteId": "misuzu-moritani",
    "emojiId": "citrus",
    "shipId": "sayakatouko",
    "silhouetteId": "annabel-lee",
    "songId": "azalea-citrus"
  },
  "525": {
    "classicId": "shine-post",
    "characterId": "yukina-minato",
    "coverId": "i-married-my-best-friend",
    "quoteId": "mio-sakamoto",
    "emojiId": "valkyrie-drive",
    "shipId": "bibi-amy",
    "silhouetteId": "euphyllia-magenta",
    "songId": "venus-line"
  },
  "526": {
    "classicId": "maria-holic",
    "characterId": "madoka-kaname",
    "coverId": "citrus",
    "quoteId": "fuuko-taki",
    "emojiId": "kageki-shojo",
    "shipId": "nanajun",
    "silhouetteId": "lenore-nevermore",
    "songId": "guitar-loneliness"
  },
  "527": {
    "classicId": "bang-dream-pico",
    "characterId": "kanan-matsuura",
    "coverId": "opium-gl",
    "quoteId": "miho-nishizumi",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "karehika",
    "silhouetteId": "yuu-akeuchi",
    "songId": "dreamriser"
  },
  "528": {
    "classicId": "fluttering-feelings",
    "characterId": "nina-iseri",
    "coverId": "witch-from-mercury",
    "quoteId": "chisato-nishikigi",
    "emojiId": "kageki-shojo",
    "shipId": "emma-vivian",
    "silhouetteId": "airi-sezaki",
    "songId": "aozora-no-rhapsody"
  },
  "529": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "kyoko-sakura",
    "coverId": "love-live-hasunosora",
    "quoteId": "hibiki-sugawa",
    "emojiId": "otherside-picnic",
    "shipId": "raeclaire",
    "silhouetteId": "lu-nan",
    "songId": "hectopascal"
  },
  "530": {
    "classicId": "even-if-it-was-just-once",
    "characterId": "hinako-yaotose",
    "coverId": "k-on",
    "quoteId": "taki-shiina",
    "emojiId": "madoka-magica",
    "shipId": "kase-yamada",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "one-room-sugar-life"
  },
  "531": {
    "classicId": "otome-no-teikoku",
    "characterId": "hifumi-takimoto",
    "coverId": "love-doctor",
    "quoteId": "princess-charlotte",
    "emojiId": "our-wonderful-days",
    "shipId": "era-yoonsung",
    "silhouetteId": "lu-nan",
    "songId": "blue-bud-netsuzou"
  },
  "532": {
    "classicId": "yuri-kuma-arashi",
    "characterId": "kaoruko-hanayagi",
    "coverId": "fluttering-feelings",
    "quoteId": "terakomari-gandesblood",
    "emojiId": "green-tea-bitch",
    "shipId": "adachishima",
    "silhouetteId": "shiina-kakure",
    "songId": "cross-ange-op1"
  },
  "533": {
    "classicId": "shimeji-simulation",
    "characterId": "princess-charlotte",
    "coverId": "handsome-girl-and-sheltered-girl",
    "quoteId": "maho-akashi",
    "emojiId": "futari-monologue",
    "shipId": "mary-yumeko",
    "silhouetteId": "aoi-amawashi",
    "songId": "seishun-complex"
  },
  "534": {
    "classicId": "happy-sugar-life",
    "characterId": "cha-yoonsung",
    "coverId": "my-girlfriends-not-here-today",
    "quoteId": "hinako-hanamura",
    "emojiId": "serenade",
    "shipId": "tokaku-haru",
    "silhouetteId": "maria-vampire",
    "songId": "valkyrie-drive-op"
  },
  "535": {
    "classicId": "her-tale-of-shim-cheong",
    "characterId": "sakiko-togawa",
    "coverId": "tropical-fish",
    "quoteId": "kanade-kurokawa",
    "emojiId": "new-game",
    "shipId": "kasu-arisa",
    "silhouetteId": "mutsumi-wakaba",
    "songId": "won3chu-kissme"
  },
  "536": {
    "classicId": "everyday-lily",
    "characterId": "seon-hwa",
    "coverId": "night-owls-and-summer-skies",
    "quoteId": "papika",
    "emojiId": "asagao-to-kase-san",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "nozomi-tojo",
    "songId": "flip-flappers-ed"
  },
  "537": {
    "classicId": "bad-thinking-diary",
    "characterId": "maya-tendo",
    "coverId": "sadistic-beauty-side-b",
    "quoteId": "satsuki-konohana",
    "emojiId": "chou-kaguya-hime",
    "shipId": "ninomomo",
    "silhouetteId": "miku-kohinata",
    "songId": "haruhikage"
  },
  "538": {
    "classicId": "vividred-operation",
    "characterId": "minato-asano",
    "coverId": "cheerful-amnesia",
    "quoteId": "yuni-asahina",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "saeko-miwa",
    "silhouetteId": "malori-crow",
    "songId": "venus-line"
  },
  "539": {
    "classicId": "i-love-amy",
    "characterId": "tomoko-kuroki",
    "coverId": "pulse",
    "quoteId": "chuchu",
    "emojiId": "how-do-we-relationship",
    "shipId": "takitomo",
    "silhouetteId": "akari-amano",
    "songId": "mayoiuta"
  },
  "540": {
    "classicId": "kitanai-kimi",
    "characterId": "nico-yazawa",
    "coverId": "mygo",
    "quoteId": "yori-asanagi",
    "emojiId": "yuruyuri",
    "shipId": "ryoko-lapis",
    "silhouetteId": "sumika-chibana",
    "songId": "hana-no-tou"
  },
  "541": {
    "classicId": "love-doctor",
    "characterId": "maya-tendo",
    "coverId": "re-stage-dream-days",
    "quoteId": "mizore-yoroizuka",
    "emojiId": "flip-flappers",
    "shipId": "miho-yukari",
    "silhouetteId": "sakiko-togawa",
    "songId": "spicy-piece"
  },
  "542": {
    "classicId": "k-on",
    "characterId": "toriko-nishina",
    "coverId": "sekai-de-ichiban-oppai",
    "quoteId": "claire-francois",
    "emojiId": "bloom-into-you",
    "shipId": "nana-yuki",
    "silhouetteId": "mio-akiyama",
    "songId": "kimi-ni-aeta-hi"
  },
  "543": {
    "classicId": "fluttering-feelings",
    "characterId": "sumika-chibana",
    "coverId": "this-monster-wants-to-eat-me",
    "quoteId": "yuri-tamura",
    "emojiId": "shino-to-ren",
    "shipId": "karehika",
    "silhouetteId": "vivian-night-owls",
    "songId": "magia-madoka"
  },
  "544": {
    "classicId": "seiyuu-radio",
    "characterId": "kou-yagami",
    "coverId": "kuzu-no-honkai",
    "quoteId": "rin-umineko",
    "emojiId": "cross-ange",
    "shipId": "mary-yumeko",
    "silhouetteId": "mirei-shikishima",
    "songId": "irodori-jelee"
  },
  "545": {
    "classicId": "inugami-nekoyama",
    "characterId": "himari-kino",
    "coverId": "chuunibyou",
    "quoteId": "hougetsu-shimamura",
    "emojiId": "love-doctor",
    "shipId": "konatsukoyuki",
    "silhouetteId": "yuu-sonoda",
    "songId": "blue-bud-netsuzou"
  },
  "546": {
    "classicId": "prisma-illya",
    "characterId": "tsubasa-kazanari",
    "coverId": "do-it-yourself",
    "quoteId": "atori-mizutori",
    "emojiId": "soulmate-gl",
    "shipId": "tomoko-yuri",
    "silhouetteId": "rin-shima",
    "songId": "red-liberation"
  },
  "547": {
    "classicId": "do-it-yourself",
    "characterId": "nanaki-fujishiro",
    "coverId": "vanadis-heart",
    "quoteId": "yuna-yuki",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "shijima-majime",
    "silhouetteId": "suzu-suzukaze",
    "songId": "kimi-ni-furete"
  },
  "548": {
    "classicId": "fuzoroi-no-renri",
    "characterId": "yumeko-jabami",
    "coverId": "new-game",
    "quoteId": "hitori-gotoh",
    "emojiId": "shino-to-ren",
    "shipId": "nanajun",
    "silhouetteId": "futaba-isurugi",
    "songId": "flip-flappers-ed"
  },
  "549": {
    "classicId": "netsuzou-trap",
    "characterId": "sayaka-saeki",
    "coverId": "fluttering-feelings",
    "quoteId": "grea-manaria",
    "emojiId": "asagao-to-kase-san",
    "shipId": "takitomo",
    "silhouetteId": "misaki-okusawa",
    "songId": "my-dream-girls"
  },
  "550": {
    "classicId": "vampire-in-the-garden",
    "characterId": "momo-vampire",
    "coverId": "futarigurashi",
    "quoteId": "han-juhee",
    "emojiId": "akebi-chan",
    "shipId": "anne-grea",
    "silhouetteId": "chisato-shirasagi",
    "songId": "irodori-jelee"
  },
  "551": {
    "classicId": "netsuzou-trap",
    "characterId": "mamori-tokonome",
    "coverId": "sheep-princess",
    "quoteId": "hinako-uno",
    "emojiId": "yuuki-yuuna",
    "shipId": "eveaoi",
    "silhouetteId": "special-week",
    "songId": "magia-madoka"
  },
  "552": {
    "classicId": "hana-ni-arashi",
    "characterId": "uika-misumi",
    "coverId": "asumi-chan",
    "quoteId": "tomori-takamatsu",
    "emojiId": "lycoris-recoil",
    "shipId": "madohomu",
    "silhouetteId": "hinata-hoshino",
    "songId": "connect-madoka"
  },
  "553": {
    "classicId": "her-tale-of-shim-cheong",
    "characterId": "harumi-taniguchi",
    "coverId": "murcielago",
    "quoteId": "kikuri-hiroi",
    "emojiId": "hana-ni-arashi",
    "shipId": "yvonelsa",
    "silhouetteId": "kyoko-toshino",
    "songId": "haruhikage"
  },
  "554": {
    "classicId": "show-by-rock",
    "characterId": "kumiko-oumae",
    "coverId": "fragtime",
    "quoteId": "haruka-murakami",
    "emojiId": "superwomen-in-love",
    "shipId": "aya-chisato",
    "silhouetteId": "momoka-kawaragi",
    "songId": "deal-with-the-devil"
  },
  "555": {
    "classicId": "our-wonderful-days",
    "characterId": "kobayashi",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "nijika-ijichi",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "hifumiaoba",
    "silhouetteId": "chisato-nishikigi",
    "songId": "haruhikage"
  },
  "556": {
    "classicId": "bang-dream",
    "characterId": "sayo-hikawa",
    "coverId": "madoka-magica",
    "quoteId": "mahiru-kouzuki",
    "emojiId": "asagao-to-kase-san",
    "shipId": "uika-saki",
    "silhouetteId": "villhaze",
    "songId": "kimama-na-tenshi-tachi"
  },
  "557": {
    "classicId": "how-do-we-relationship",
    "characterId": "nanami-oda",
    "coverId": "slow-loop",
    "quoteId": "tomoko-kuroki",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "renamai",
    "silhouetteId": "sayaka-saeki",
    "songId": "kokoro-ni-tsubomi"
  },
  "558": {
    "classicId": "always-human",
    "characterId": "yuu-sonoda",
    "coverId": "selection-project",
    "quoteId": "kaoruko-hanayagi",
    "emojiId": "valkyrie-drive",
    "shipId": "mayumi-rin",
    "silhouetteId": "suletta-mercury",
    "songId": "follow-your-arrows"
  },
  "559": {
    "classicId": "mygo",
    "characterId": "tong-tong",
    "coverId": "symphogear",
    "quoteId": "vivian-night-owls",
    "emojiId": "a-joyful-life",
    "shipId": "kumiko-reina",
    "silhouetteId": "miorine-rembran",
    "songId": "blue-bud-netsuzou"
  },
  "560": {
    "classicId": "pulse",
    "characterId": "haruka-takayama",
    "coverId": "slow-loop",
    "quoteId": "homura-akemi",
    "emojiId": "netsuzou-trap",
    "shipId": "tomoko-yuri",
    "silhouetteId": "woori-bust",
    "songId": "yuriyurararara"
  },
  "561": {
    "classicId": "chuunibyou",
    "characterId": "subaru-awa",
    "coverId": "run-away-with-me-girl",
    "quoteId": "sakiko-togawa",
    "emojiId": "fluttering-feelings",
    "shipId": "chidori-nanoha",
    "silhouetteId": "ryo-yamada",
    "songId": "go-go-maniac"
  },
  "562": {
    "classicId": "valkyrie-drive",
    "characterId": "elsa-dorothy",
    "coverId": "harukana-receive",
    "quoteId": "rin-hoshizora",
    "emojiId": "assault-lily",
    "shipId": "anontomo",
    "silhouetteId": "maki-nishikino",
    "songId": "machikado-tangent"
  },
  "563": {
    "classicId": "everyday-lily",
    "characterId": "nanami-oda",
    "coverId": "kimi-ga-shinu-made",
    "quoteId": "yuu-yuutani",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "yuni-fuuko",
    "silhouetteId": "haru-ichinose",
    "songId": "dreamriser"
  },
  "564": {
    "classicId": "kimi-ga-shinu-made",
    "characterId": "mashiro-komiyama",
    "coverId": "getting-to-know-grace",
    "quoteId": "maria-vampire",
    "emojiId": "nevermore-webtoon",
    "shipId": "kanadia",
    "silhouetteId": "illyasviel-von-einzbern",
    "songId": "kimi-ni-furete"
  },
  "565": {
    "classicId": "hibike-euphonium",
    "characterId": "shijima-tsukishima",
    "coverId": "love-to-lie-angle",
    "quoteId": "yuu-koito",
    "emojiId": "long-awaited-feelings",
    "shipId": "kagu-iro",
    "silhouetteId": "satou-matsuzaka",
    "songId": "won3chu-kissme"
  },
  "566": {
    "classicId": "seiyuu-radio",
    "characterId": "rinku-aimoto",
    "coverId": "miss-kobayashis-dragon-maid",
    "quoteId": "tohru",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "kanadia",
    "silhouetteId": "uika-misumi",
    "songId": "kimi-no-gin-no-niwa"
  },
  "567": {
    "classicId": "girls-und-panzer",
    "characterId": "rin-toyama",
    "coverId": "show-by-rock",
    "quoteId": "azusa-nakano",
    "emojiId": "sakura-trick",
    "shipId": "himayori",
    "silhouetteId": "woori-bust",
    "songId": "valkyrie-drive-op"
  },
  "568": {
    "classicId": "yuri-is-my-job",
    "characterId": "nanami-oda",
    "coverId": "girls-und-panzer",
    "quoteId": "maki-nishikino",
    "emojiId": "chou-kaguya-hime",
    "shipId": "hinako-shiori",
    "silhouetteId": "subaru-awa",
    "songId": "tenshi-ni-fureta-yo"
  },
  "569": {
    "classicId": "seiyuu-radio",
    "characterId": "yuna-yuki",
    "coverId": "futaribeya",
    "quoteId": "nika-nanaura",
    "emojiId": "kitanai-kimi",
    "shipId": "nijiryo",
    "silhouetteId": "emma-night-owls",
    "songId": "connect-madoka"
  },
  "570": {
    "classicId": "my-girlfriends-not-here-today",
    "characterId": "shijima-tsukishima",
    "coverId": "asagao-to-kase-san",
    "quoteId": "yuna-yuki",
    "emojiId": "mygo",
    "shipId": "shijima-majime",
    "silhouetteId": "yori-asanagi",
    "songId": "flip-flappers-ed"
  },
  "571": {
    "classicId": "kill-me-now",
    "characterId": "utena-hiiragi",
    "coverId": "my-sisters-best-friend",
    "quoteId": "malori-crow",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "mahikano",
    "silhouetteId": "rin-shima",
    "songId": "haruhikage"
  },
  "572": {
    "classicId": "watamote",
    "characterId": "anon-chihaya",
    "coverId": "the-guy-she-was-interested-in",
    "quoteId": "lin-luxi",
    "emojiId": "netsuzou-trap",
    "shipId": "era-yoonsung",
    "silhouetteId": "maria-cadenzavna-eve",
    "songId": "miracle-rush"
  },
  "573": {
    "classicId": "bad-thinking-diary",
    "characterId": "da-kyeong",
    "coverId": "bloom-into-you",
    "quoteId": "yuu-yuutani",
    "emojiId": "shimeji-simulation",
    "shipId": "spesuzu",
    "silhouetteId": "mai-oduka",
    "songId": "guitar-loneliness"
  },
  "574": {
    "classicId": "not-so-shoujo-love-story",
    "characterId": "grea",
    "coverId": "serenade",
    "quoteId": "ryo-yamada",
    "emojiId": "love-live-sip",
    "shipId": "kagu-iro",
    "silhouetteId": "miho-nishizumi",
    "songId": "red-liberation"
  },
  "575": {
    "classicId": "otome-no-teikoku",
    "characterId": "vayuela-vanadis",
    "coverId": "futarigurashi",
    "quoteId": "nagisa-ootsuki",
    "emojiId": "ange-vierge",
    "shipId": "yukilisa",
    "silhouetteId": "saki-kindaichi",
    "songId": "red-liberation"
  },
  "576": {
    "classicId": "superwomen-in-love",
    "characterId": "uika-misumi",
    "coverId": "yuri-is-my-job",
    "quoteId": "madam-baek",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "fuu-mashi",
    "silhouetteId": "lisa-imai",
    "songId": "miracle-rush"
  },
  "577": {
    "classicId": "kill-me-now",
    "characterId": "kokoro-tsurumaki",
    "coverId": "she-loves-to-cook-and-she-loves-to-eat",
    "quoteId": "chito-glt",
    "emojiId": "strike-witches",
    "shipId": "honey-rabbit",
    "silhouetteId": "suzu-suzukaze",
    "songId": "azalea-citrus"
  },
  "578": {
    "classicId": "tari-tari",
    "characterId": "hinako-uno",
    "coverId": "birdie-wing",
    "quoteId": "jung-era",
    "emojiId": "the-summer-you-were-there",
    "shipId": "uika-saki",
    "silhouetteId": "vivian-night-owls",
    "songId": "zattou-bokura-no-machi"
  },
  "579": {
    "classicId": "yuuki-yuuna",
    "characterId": "kikuri-hiroi",
    "coverId": "ghosts-of-greywoods",
    "quoteId": "sakura-adachi",
    "emojiId": "mage-and-demon-queen",
    "shipId": "saya-hinako",
    "silhouetteId": "kyoko-toshino",
    "songId": "go-go-maniac"
  },
  "580": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "villhaze",
    "coverId": "love-live-hasunosora",
    "quoteId": "yoshika-miyafuji",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "nomokasu",
    "silhouetteId": "han-juhee",
    "songId": "starlog-illya"
  },
  "581": {
    "classicId": "the-summer-you-were-there",
    "characterId": "baek-seola",
    "coverId": "otherside-picnic",
    "quoteId": "futaba-isurugi",
    "emojiId": "flip-flappers",
    "shipId": "harumatsu",
    "silhouetteId": "kim-norae",
    "songId": "sakura-skip"
  },
  "582": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "riko-sakurauchi",
    "coverId": "anne-happy",
    "quoteId": "yuuna-matsubara",
    "emojiId": "green-tea-bitch",
    "shipId": "spesuzu",
    "silhouetteId": "yukina-minato",
    "songId": "follow-your-arrows"
  },
  "583": {
    "classicId": "konohana-kitan",
    "characterId": "kaguya-cosmic",
    "coverId": "getting-to-know-grace",
    "quoteId": "mashiro-komiyama",
    "emojiId": "kitanai-kimi",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "illyasviel-von-einzbern",
    "songId": "zattou-bokura-no-machi"
  },
  "584": {
    "classicId": "whispering-you-a-love-song",
    "characterId": "yumeko-jabami",
    "coverId": "strike-witches",
    "quoteId": "terakomari-gandesblood",
    "emojiId": "valkyrie-drive",
    "shipId": "cocona-papika",
    "silhouetteId": "hina-hikawa",
    "songId": "kimi-ni-aeta-hi"
  },
  "585": {
    "classicId": "vampire-in-the-garden",
    "characterId": "elsa-dorothy",
    "coverId": "konohana-kitan",
    "quoteId": "maki-nishikino",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "anonsoyo",
    "silhouetteId": "hinako-hanamura",
    "songId": "guitar-loneliness"
  },
  "586": {
    "classicId": "not-so-shoujo-love-story",
    "characterId": "haruka-tenoh",
    "coverId": "assault-lily-league",
    "quoteId": "mio-akiyama",
    "emojiId": "how-do-we-relationship",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "nico-yazawa",
    "songId": "cross-ange-op1"
  },
  "587": {
    "classicId": "lycoris-recollect",
    "characterId": "mami-tomoe",
    "coverId": "tadokoro-san",
    "quoteId": "sakura-adachi",
    "emojiId": "fragtime",
    "shipId": "norae-seola",
    "silhouetteId": "jung-era",
    "songId": "connect-madoka"
  },
  "588": {
    "classicId": "kanojo-to-himitsu",
    "characterId": "yui-funami",
    "coverId": "cant-defy-the-lonely-girl",
    "quoteId": "seika-ijichi",
    "emojiId": "kageki-shojo",
    "shipId": "nanami-yuuna",
    "silhouetteId": "momo-minamoto",
    "songId": "raise-your-hands"
  },
  "589": {
    "classicId": "bang-dream",
    "characterId": "akane-maekawa",
    "coverId": "kanojo-to-himitsu",
    "quoteId": "miwa-inuzuka",
    "emojiId": "yuri-is-my-job",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "koharu-tsurezure",
    "songId": "hana-no-tou"
  },
  "590": {
    "classicId": "otherside-picnic",
    "characterId": "saki-kindaichi",
    "coverId": "asteroid-in-love",
    "quoteId": "mikage-futari",
    "emojiId": "magirevo",
    "shipId": "kyosaya",
    "silhouetteId": "yuu-yuutani",
    "songId": "memories-comic-girls"
  },
  "591": {
    "classicId": "i-married-my-best-friend",
    "characterId": "malori-crow",
    "coverId": "beauty-and-the-beast-girl",
    "quoteId": "riko-sakurauchi",
    "emojiId": "shimeji-simulation",
    "shipId": "utekiwi",
    "silhouetteId": "elsa-dorothy",
    "songId": "miracle-rush"
  },
  "592": {
    "classicId": "handsome-girl-and-sheltered-girl",
    "characterId": "hanabi-natsuno",
    "coverId": "symphogear",
    "quoteId": "nagisa-ootsuki",
    "emojiId": "hana-ni-arashi",
    "shipId": "mary-yumeko",
    "silhouetteId": "rin-hoshizora",
    "songId": "arc-en-ciel"
  },
  "593": {
    "classicId": "serenade",
    "characterId": "shizuku-hoshikawa",
    "coverId": "vividred-operation",
    "quoteId": "nanaki-fujishiro",
    "emojiId": "our-wonderful-days",
    "shipId": "nanajun",
    "silhouetteId": "dia-kurosawa",
    "songId": "listen-htt"
  },
  "594": {
    "classicId": "regalia",
    "characterId": "yuki-hanzomon",
    "coverId": "mage-and-demon-queen",
    "quoteId": "kaguya-cosmic",
    "emojiId": "cross-ange",
    "shipId": "sumikanoko",
    "silhouetteId": "da-kyeong",
    "songId": "irodori-jelee"
  },
  "595": {
    "classicId": "yuri-is-my-job",
    "characterId": "haru-ichinose",
    "coverId": "re-stage-dream-days",
    "quoteId": "yuna-yuki",
    "emojiId": "sheep-princess",
    "shipId": "konatsukoyuki",
    "silhouetteId": "chisato-shirasagi",
    "songId": "asagao-kase"
  },
  "596": {
    "classicId": "days-of-love-at-seagull-villa",
    "characterId": "woori-bust",
    "coverId": "konohana-kitan",
    "quoteId": "sorawo-kamikoshi",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "raeclaire",
    "silhouetteId": "ange-le-carre",
    "songId": "shiny-days"
  },
  "597": {
    "classicId": "our-teachers-are-dating",
    "characterId": "nanoha-chiba",
    "coverId": "semelparous",
    "quoteId": "mai-oduka",
    "emojiId": "cross-ange",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "yachiyo-tsukimi",
    "songId": "shiny-days"
  },
  "598": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "ye-xing",
    "coverId": "blooming-sequence",
    "quoteId": "yoo-jin-serenade",
    "emojiId": "vampire-in-the-garden",
    "shipId": "nao-kurumi",
    "silhouetteId": "takina-inoue",
    "songId": "go-go-maniac"
  },
  "599": {
    "classicId": "lapis-relights",
    "characterId": "kanoko-mamiya",
    "coverId": "asteroid-in-love",
    "quoteId": "mai-oduka",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "asuka-saki",
    "silhouetteId": "raana-kaname",
    "songId": "ten-to-sen"
  },
  "600": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "ginko-yurishiro",
    "coverId": "the-summer-you-were-there",
    "quoteId": "miku-kohinata",
    "emojiId": "valkyrie-drive",
    "shipId": "ninomomo",
    "silhouetteId": "anisphia-wynn-palettia",
    "songId": "seishun-complex"
  },
  "601": {
    "classicId": "so-ra-no-wo-to",
    "characterId": "hikari-kagura",
    "coverId": "the-third-party",
    "quoteId": "yukari-akiyama",
    "emojiId": "flip-flappers",
    "shipId": "ryoko-lapis",
    "silhouetteId": "ye-xing",
    "songId": "umapyoi-densetsu"
  },
  "602": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "euphyllia-magenta",
    "coverId": "even-though-were-adults",
    "quoteId": "nika-nanaura",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "norae-seola",
    "silhouetteId": "renako-amaori",
    "songId": "umapyoi-densetsu"
  },
  "603": {
    "classicId": "assault-lily-fruits",
    "characterId": "hinata-futari",
    "coverId": "chuunibyou",
    "quoteId": "riri-hitotsuyanagi",
    "emojiId": "serenade",
    "shipId": "yuni-fuuko",
    "silhouetteId": "chuchu",
    "songId": "deal-with-the-devil"
  },
  "604": {
    "classicId": "destroy-it-all-and-love-me-in-hell",
    "characterId": "toriko-nishina",
    "coverId": "netsuzou-trap",
    "quoteId": "shamiko",
    "emojiId": "bang-dream-pico",
    "shipId": "sulemio",
    "silhouetteId": "sumika-chibana",
    "songId": "flip-flappers-ed"
  },
  "605": {
    "classicId": "regalia",
    "characterId": "papika",
    "coverId": "show-me-your-bust",
    "quoteId": "mei-aihara",
    "emojiId": "yuuki-yuuna",
    "shipId": "misa-koko",
    "silhouetteId": "anisphia-wynn-palettia",
    "songId": "go-go-maniac"
  },
  "606": {
    "classicId": "assault-lily",
    "characterId": "grea",
    "coverId": "miss-kobayashis-dragon-maid",
    "quoteId": "akari-tokitoh",
    "emojiId": "fluttering-feelings",
    "shipId": "karehika",
    "silhouetteId": "airi-sezaki",
    "songId": "hectopascal"
  },
  "607": {
    "classicId": "yuri-is-my-job",
    "characterId": "momo-vampire",
    "coverId": "otherside-picnic",
    "quoteId": "nomoto-yuki",
    "emojiId": "stardust-telepath",
    "shipId": "yukilisa",
    "silhouetteId": "mafuyu-tsurezure",
    "songId": "alive-lycoris"
  },
  "608": {
    "classicId": "opium-gl",
    "characterId": "mashiro-komiyama",
    "coverId": "mayonaka-punch",
    "quoteId": "euphyllia-magenta",
    "emojiId": "new-game",
    "shipId": "umiyuu",
    "silhouetteId": "iroha-sakayori",
    "songId": "magia-madoka"
  },
  "609": {
    "classicId": "slow-loop",
    "characterId": "ayumu-uehara",
    "coverId": "watanare",
    "quoteId": "woori-bust",
    "emojiId": "madoka-magica",
    "shipId": "menou-akari",
    "silhouetteId": "tomoko-kuroki",
    "songId": "valkyrie-drive-op"
  },
  "610": {
    "classicId": "lily-yy",
    "characterId": "kita-ikuyo",
    "coverId": "sheep-princess",
    "quoteId": "misaki-okusawa",
    "emojiId": "bloom-into-you",
    "shipId": "yuiazu",
    "silhouetteId": "shim-chong",
    "songId": "kimi-no-gin-no-niwa"
  },
  "611": {
    "classicId": "hero-san",
    "characterId": "seon-hwa",
    "coverId": "shinsekai-yori",
    "quoteId": "yuu-akeuchi",
    "emojiId": "moonlight-garden",
    "shipId": "kyosaya",
    "silhouetteId": "kyoko-toshino",
    "songId": "tenshi-ni-fureta-yo"
  },
  "612": {
    "classicId": "this-monster-wants-to-eat-me",
    "characterId": "yukina-minato",
    "coverId": "lily-yy",
    "quoteId": "iroha-sakayori",
    "emojiId": "kill-me-now",
    "shipId": "kaoru-chisato",
    "silhouetteId": "satou-matsuzaka",
    "songId": "synchrogazer"
  },
  "613": {
    "classicId": "night-owls-and-summer-skies",
    "characterId": "shizuku-hoshikawa",
    "coverId": "murcielago",
    "quoteId": "lisa-imai",
    "emojiId": "a-joyful-life",
    "shipId": "momo-fine",
    "silhouetteId": "mahiru-kouzuki",
    "songId": "kimi-ni-furete"
  },
  "614": {
    "classicId": "white-angels-have-no-wings",
    "characterId": "silence-suzuka",
    "coverId": "shinsekai-yori",
    "quoteId": "cha-yoonsung",
    "emojiId": "mygo",
    "shipId": "ayaka-sora",
    "silhouetteId": "kyoko-sakura",
    "songId": "asu-e-no-tobira"
  },
  "615": {
    "classicId": "everyday-lily",
    "characterId": "haruka-murakami",
    "coverId": "tadokoro-san",
    "quoteId": "hanayo-koizumi",
    "emojiId": "our-wonderful-days",
    "shipId": "tsubamaria",
    "silhouetteId": "tohru",
    "songId": "guitar-loneliness"
  },
  "616": {
    "classicId": "shino-to-ren",
    "characterId": "tong-tong",
    "coverId": "wataten-movie",
    "quoteId": "kaguya-cosmic",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "mahikano",
    "silhouetteId": "riko-sakurauchi",
    "songId": "listen-htt"
  },
  "617": {
    "classicId": "watamote",
    "characterId": "lu-nan",
    "coverId": "yuri-seijin-naoko-san",
    "quoteId": "sun-jing",
    "emojiId": "everyday-lily",
    "shipId": "norae-seola",
    "silhouetteId": "umika-konohoshi",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "618": {
    "classicId": "hana-to-hina",
    "characterId": "mary-saotome",
    "coverId": "a-joyful-life",
    "quoteId": "eli-ayase",
    "emojiId": "bad-girl",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "soyo-nagasaki",
    "songId": "machikado-tangent"
  },
  "619": {
    "classicId": "tamayura",
    "characterId": "sakura-adachi",
    "coverId": "always-human",
    "quoteId": "princess-fine",
    "emojiId": "the-summer-you-were-there",
    "shipId": "madohomu",
    "silhouetteId": "mirei-shikishima",
    "songId": "won3chu-kissme"
  },
  "620": {
    "classicId": "assault-lily",
    "characterId": "kurumi-yoshizawa",
    "coverId": "fluttering-feelings",
    "quoteId": "kurumi-yoshizawa",
    "emojiId": "symphogear",
    "shipId": "kaseyamada",
    "silhouetteId": "satou-matsuzaka",
    "songId": "sacred-world"
  },
  "621": {
    "classicId": "days-of-love-at-seagull-villa",
    "characterId": "misaki-okusawa",
    "coverId": "shinsekai-yori",
    "quoteId": "riko-sakurauchi",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "nozomi-kasaki",
    "songId": "magia-madoka"
  },
  "622": {
    "classicId": "yuri-is-my-job",
    "characterId": "mitsuki-yano",
    "coverId": "green-tea-bitch",
    "quoteId": "utena-hiiragi",
    "emojiId": "watanare",
    "shipId": "mel-lynn",
    "silhouetteId": "chisato-nishikigi",
    "songId": "listen-htt"
  },
  "623": {
    "classicId": "princess-connect-redive",
    "characterId": "akari-tokitoh",
    "coverId": "catulus-syndrome",
    "quoteId": "maki-nishikino",
    "emojiId": "adachi-and-shimamura",
    "shipId": "mayumi-rin",
    "silhouetteId": "kaguya-cosmic",
    "songId": "valkyrie-drive-op"
  },
  "624": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "ren",
    "coverId": "princess-connect-redive",
    "quoteId": "mashiro-kyou-kano",
    "emojiId": "how-do-we-relationship",
    "shipId": "mayakuro",
    "silhouetteId": "sayaka-miki",
    "songId": "dream-solister"
  },
  "625": {
    "classicId": "futarigurashi",
    "characterId": "sarasa-watanabe",
    "coverId": "love-live-nijigasaki",
    "quoteId": "nozomi-tojo",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "kourin",
    "silhouetteId": "haruka-tenoh",
    "songId": "yuriyurararara"
  },
  "626": {
    "classicId": "chuunibyou",
    "characterId": "yuu-akeuchi",
    "coverId": "blooming-sequence",
    "quoteId": "momoka-kawaragi",
    "emojiId": "kageki-shojo",
    "shipId": "soratori",
    "silhouetteId": "touko-nanami",
    "songId": "dreamriser"
  },
  "627": {
    "classicId": "blooming-sequence",
    "characterId": "miorine-rembran",
    "coverId": "wixoss",
    "quoteId": "nanoha-chiba",
    "emojiId": "futari-monologue",
    "shipId": "adachishima",
    "silhouetteId": "kokoro-tsurumaki",
    "songId": "dreamriser"
  },
  "628": {
    "classicId": "tsubame-tip-off",
    "characterId": "ran-mitake",
    "coverId": "bad-thinking-diary",
    "quoteId": "nanaki-fujishiro",
    "emojiId": "asagao-to-kase-san",
    "shipId": "uta-ayaka",
    "silhouetteId": "rin-touyama",
    "songId": "cross-ange-op1"
  },
  "629": {
    "classicId": "catch-these-hands",
    "characterId": "hime-shiraki",
    "coverId": "urara-meirochou",
    "quoteId": "yui-funami",
    "emojiId": "valkyrie-drive",
    "shipId": "eveaoi",
    "silhouetteId": "misuzu-moritani",
    "songId": "tenbin-fragtime"
  },
  "630": {
    "classicId": "watamote",
    "characterId": "special-week",
    "coverId": "lily-love-2",
    "quoteId": "naoi-manaka",
    "emojiId": "yuruyuri",
    "shipId": "aya-chisato",
    "silhouetteId": "mel-pulse",
    "songId": "soushou-innocent"
  },
  "631": {
    "classicId": "hana-ni-arashi",
    "characterId": "harumi-taniguchi",
    "coverId": "whispering-you-a-love-song",
    "quoteId": "momo-minamoto",
    "emojiId": "bloom-into-you",
    "shipId": "mel-lynn",
    "silhouetteId": "sakiko-togawa",
    "songId": "guitar-loneliness"
  },
  "632": {
    "classicId": "lily-yy",
    "characterId": "lisa-imai",
    "coverId": "if-i-could-reach-you",
    "quoteId": "mio-akiyama",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "mamori-mirei",
    "silhouetteId": "rae-taylor",
    "songId": "kimi-ni-aeta-hi"
  },
  "633": {
    "classicId": "my-food-seems-to-be-very-cute",
    "characterId": "yachiyo-tsukimi",
    "coverId": "gushing-over-magical-girls",
    "quoteId": "han-juhee",
    "emojiId": "new-game",
    "shipId": "juhee-yeowool",
    "silhouetteId": "mamori-tokonome",
    "songId": "sakura-skip"
  },
  "634": {
    "classicId": "hanayamata",
    "characterId": "yukari-akiyama",
    "coverId": "manaria-friends",
    "quoteId": "annabel-lee",
    "emojiId": "bang-dream-pico",
    "shipId": "tohrubayashi",
    "silhouetteId": "chisato-nishikigi",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "635": {
    "classicId": "goodbye-my-rose-garden",
    "characterId": "menou-virgin-road",
    "coverId": "senran-kagura",
    "quoteId": "cocona",
    "emojiId": "magirevo",
    "shipId": "tsubamaria",
    "silhouetteId": "touko-nanami",
    "songId": "dreamriser"
  },
  "636": {
    "classicId": "please-bully-me-miss-villainess",
    "characterId": "ayaka-shiraishi",
    "coverId": "kanojo-to-himitsu",
    "quoteId": "miku-kohinata",
    "emojiId": "kakegurui",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "michiru-kaioh",
    "songId": "won3chu-kissme"
  },
  "637": {
    "classicId": "manaria-friends",
    "characterId": "yuni-asahina",
    "coverId": "show-me-your-bust",
    "quoteId": "hibiki-tachibana",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "madohomu",
    "silhouetteId": "chito-glt",
    "songId": "won3chu-kissme"
  },
  "638": {
    "classicId": "lily-love-2",
    "characterId": "qiu-tong",
    "coverId": "train-to-the-end",
    "quoteId": "kanade-kurokawa",
    "emojiId": "new-game",
    "shipId": "yuu-atori",
    "silhouetteId": "saeko-tsutsumi",
    "songId": "follow-your-arrows"
  },
  "639": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "hinako-hanamura",
    "coverId": "days-of-love-at-seagull-villa",
    "quoteId": "kiwi-araga",
    "emojiId": "watamote",
    "shipId": "chisataki",
    "silhouetteId": "eve",
    "songId": "irodori-jelee"
  },
  "640": {
    "classicId": "tamayura",
    "characterId": "lisa-imai",
    "coverId": "even-if-it-was-just-once",
    "quoteId": "maya-tendo",
    "emojiId": "i-love-amy",
    "shipId": "akebi-erika",
    "silhouetteId": "sarasa-watanabe",
    "songId": "listen-htt"
  },
  "641": {
    "classicId": "bang-dream-pico",
    "characterId": "mimi-mimily",
    "coverId": "kiniro-mosaic",
    "quoteId": "mejiro-mcqueen",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "luo-xinyue",
    "silhouetteId": "menou-virgin-road",
    "songId": "hana-no-tou"
  },
  "642": {
    "classicId": "her-tale-of-shim-cheong",
    "characterId": "konatsu-amano",
    "coverId": "stardust-telepath",
    "quoteId": "shim-chong",
    "emojiId": "the-summer-you-were-there",
    "shipId": "yuni-fuuko",
    "silhouetteId": "villhaze",
    "songId": "flip-flappers-ed"
  },
  "643": {
    "classicId": "hino-san-no-baka",
    "characterId": "lapis-tenebrae",
    "coverId": "tari-tari",
    "quoteId": "hinata-futari",
    "emojiId": "everyday-lily",
    "shipId": "utekiwi",
    "silhouetteId": "eli-ayase",
    "songId": "hana-no-tou"
  },
  "644": {
    "classicId": "sono-hanabira",
    "characterId": "momo-sheep",
    "coverId": "yama-no-susume",
    "quoteId": "lin-luxi",
    "emojiId": "kitanai-kimi",
    "shipId": "mary-yumeko",
    "silhouetteId": "kiyashu-vanadis",
    "songId": "blue-bud-netsuzou"
  },
  "645": {
    "classicId": "gochuumon-wa-usagi",
    "characterId": "kikuri-hiroi",
    "coverId": "ride-or-die",
    "quoteId": "lee-yeowool",
    "emojiId": "chou-kaguya-hime",
    "shipId": "misa-io",
    "silhouetteId": "junna-hoshimi",
    "songId": "soushou-innocent"
  },
  "646": {
    "classicId": "sono-hanabira",
    "characterId": "shiina-kakure",
    "coverId": "school-zone-girls",
    "quoteId": "nanase-natsume",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "mahikano",
    "silhouetteId": "dia-kurosawa",
    "songId": "umapyoi-densetsu"
  },
  "647": {
    "classicId": "shine-post",
    "characterId": "saeko-tsutsumi",
    "coverId": "love-live-sunshine",
    "quoteId": "nico-yazawa",
    "emojiId": "ange-vierge",
    "shipId": "cocona-papika",
    "silhouetteId": "aya-maruyama",
    "songId": "sakura-skip"
  },
  "648": {
    "classicId": "serenade",
    "characterId": "miho-nishizumi",
    "coverId": "girls-band-cry",
    "quoteId": "yuko-yoshida",
    "emojiId": "bocchi-the-rock",
    "shipId": "yuutou",
    "silhouetteId": "komichi-akebi",
    "songId": "yuriyurararara"
  },
  "649": {
    "classicId": "moonlight-garden",
    "characterId": "papika",
    "coverId": "green-tea-bitch",
    "quoteId": "yuu-koito",
    "emojiId": "girls-last-tour",
    "shipId": "ryoko-lapis",
    "silhouetteId": "sayaka-miki",
    "songId": "eternal-eternity"
  },
  "650": {
    "classicId": "love-to-lie-angle",
    "characterId": "aoba-suzukaze",
    "coverId": "murcielago",
    "quoteId": "mei-aihara",
    "emojiId": "kageki-shojo",
    "shipId": "himayori",
    "silhouetteId": "fuuko-taki",
    "songId": "sacred-world"
  },
  "651": {
    "classicId": "lily-yy",
    "characterId": "utada-uta",
    "coverId": "what-does-the-fox-say",
    "quoteId": "euphyllia-magenta",
    "emojiId": "how-do-we-relationship",
    "shipId": "jiho-woori",
    "silhouetteId": "rinku-aimoto",
    "songId": "magia-madoka"
  },
  "652": {
    "classicId": "sora-haena",
    "characterId": "chika-takami",
    "coverId": "non-non-biyori",
    "quoteId": "akari-tokitoh",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "mizore-nozomi",
    "silhouetteId": "eli-ayase",
    "songId": "won3chu-kissme"
  },
  "653": {
    "classicId": "hino-san-no-baka",
    "characterId": "aoi-amawashi",
    "coverId": "a-joyful-life",
    "quoteId": "touko-nanami",
    "emojiId": "kill-me-now",
    "shipId": "spesuzu",
    "silhouetteId": "dia-kurosawa",
    "songId": "tenbin-fragtime"
  },
  "654": {
    "classicId": "kitanai-kimi",
    "characterId": "ye-xing",
    "coverId": "qualia-the-purple",
    "quoteId": "silence-suzuka",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "juhee-yeowool",
    "silhouetteId": "yuki-hanzomon",
    "songId": "dream-solister"
  },
  "655": {
    "classicId": "sora-haena",
    "characterId": "kokoro-tsurumaki",
    "coverId": "tari-tari",
    "quoteId": "yachiyo-tsukimi",
    "emojiId": "kakegurui",
    "shipId": "dakyeong-seonhwa",
    "silhouetteId": "matsuri-mizusawa",
    "songId": "seishun-complex"
  },
  "656": {
    "classicId": "birdie-wing",
    "characterId": "junna-hoshimi",
    "coverId": "sailor-moon-s",
    "quoteId": "ange-cross-ange",
    "emojiId": "uma-musume",
    "shipId": "takitomo",
    "silhouetteId": "mafuyu-tsurezure",
    "songId": "red-birthmark"
  },
  "657": {
    "classicId": "vampeerz",
    "characterId": "rinku-aimoto",
    "coverId": "kin-iro-movie",
    "quoteId": "yuzu-aihara",
    "emojiId": "magirevo",
    "shipId": "yuunamimori",
    "silhouetteId": "yuki-kyou-kano",
    "songId": "umapyoi-densetsu"
  },
  "658": {
    "classicId": "shine-post",
    "characterId": "noa-himesaka",
    "coverId": "bang-dream-pico",
    "quoteId": "tokaku-azuma",
    "emojiId": "mage-and-demon-queen",
    "shipId": "makoto-akane",
    "silhouetteId": "arisa-ichigaya",
    "songId": "alive-lycoris"
  },
  "659": {
    "classicId": "serenade",
    "characterId": "konatsu-amano",
    "coverId": "magirevo",
    "quoteId": "touko-nanami",
    "emojiId": "moonlight-garden",
    "shipId": "miho-yukari",
    "silhouetteId": "satou-matsuzaka",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "660": {
    "classicId": "vampire-in-the-garden",
    "characterId": "hibiki-tachibana",
    "coverId": "kiniro-mosaic",
    "quoteId": "mai-oduka",
    "emojiId": "ange-vierge",
    "shipId": "momo-yuki",
    "silhouetteId": "renako-amaori",
    "songId": "tenshi-ni-fureta-yo"
  },
  "661": {
    "classicId": "catch-these-hands",
    "characterId": "maho-akashi",
    "coverId": "green-tea-bitch",
    "quoteId": "ange-cross-ange",
    "emojiId": "girls-band-cry",
    "shipId": "kumiko-reina",
    "silhouetteId": "sarasa-watanabe",
    "songId": "starlog-illya"
  },
  "662": {
    "classicId": "akuma-no-riddle",
    "characterId": "chisato-shirasagi",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "yachiyo-tsukimi",
    "emojiId": "a-joyful-life",
    "shipId": "hinako-asahi",
    "silhouetteId": "lin-luxi",
    "songId": "other-side-of-wall"
  },
  "663": {
    "classicId": "my-food-seems-to-be-very-cute",
    "characterId": "rin-shima",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "yui-yamada",
    "emojiId": "ange-vierge",
    "shipId": "sayohina",
    "silhouetteId": "aoba-suzukaze",
    "songId": "hoshi-no-dialogue"
  },
  "664": {
    "classicId": "bloom-into-you",
    "characterId": "princess-charlotte",
    "coverId": "yama-no-susume",
    "quoteId": "eli-ayase",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "chisataki",
    "silhouetteId": "hanayo-koizumi",
    "songId": "asu-e-no-tobira"
  },
  "665": {
    "classicId": "chou-kaguya-hime",
    "characterId": "tomoko-kuroki",
    "coverId": "saki",
    "quoteId": "nyamu-yuutenji",
    "emojiId": "sailor-moon-s",
    "shipId": "sayakatouko",
    "silhouetteId": "jiho-bust",
    "songId": "asagao-kase"
  },
  "666": {
    "classicId": "baili-jin",
    "characterId": "uika-misumi",
    "coverId": "lily-love-2",
    "quoteId": "shim-chong",
    "emojiId": "fragtime",
    "shipId": "kotoumi",
    "silhouetteId": "yoshika-miyafuji",
    "songId": "miracle-rush"
  },
  "667": {
    "classicId": "kuttsukiboshi",
    "characterId": "sayo-hikawa",
    "coverId": "hello-melancholic",
    "quoteId": "yuu-yuutani",
    "emojiId": "watamote",
    "shipId": "hinatanoa",
    "silhouetteId": "sakiko-togawa",
    "songId": "magia-madoka"
  },
  "668": {
    "classicId": "show-me-your-bust",
    "characterId": "homura-akemi",
    "coverId": "my-sisters-best-friend",
    "quoteId": "nanaki-fujishiro",
    "emojiId": "nevermore-webtoon",
    "shipId": "ange-hilda",
    "silhouetteId": "baek-seola",
    "songId": "flip-flappers-ed"
  },
  "669": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "miku-kohinata",
    "coverId": "tari-tari",
    "quoteId": "lin-luxi",
    "emojiId": "bloom-into-you",
    "shipId": "uika-saki",
    "silhouetteId": "xiao-lan-wolf",
    "songId": "sacred-world"
  },
  "670": {
    "classicId": "mage-and-demon-queen",
    "characterId": "shim-chong",
    "coverId": "tamayura",
    "quoteId": "sayaka-miki",
    "emojiId": "yuri-is-my-job",
    "shipId": "renamai",
    "silhouetteId": "mahiru-kouzuki",
    "songId": "miracle-rush"
  },
  "671": {
    "classicId": "bloom-into-you",
    "characterId": "asahi-satou",
    "coverId": "kageki-shojo",
    "quoteId": "tong-tong",
    "emojiId": "moonlight-garden",
    "shipId": "himayori",
    "silhouetteId": "honey-trap",
    "songId": "valkyrie-drive-op"
  },
  "672": {
    "classicId": "ano-koro-no-aoi-hoshi",
    "characterId": "taki-shiina",
    "coverId": "flip-flappers",
    "quoteId": "umiri-yahata",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "yuni-fuuko",
    "silhouetteId": "anisphia-wynn-palettia",
    "songId": "shiny-days"
  },
  "673": {
    "classicId": "her-tale-of-shim-chong",
    "characterId": "haruka-tenoh",
    "coverId": "comic-girls",
    "quoteId": "tae-hanazono",
    "emojiId": "flip-flappers",
    "shipId": "sakinodoka",
    "silhouetteId": "nozomi-tojo",
    "songId": "azalea-citrus"
  },
  "674": {
    "classicId": "my-sisters-best-friend",
    "characterId": "kaori-asaka",
    "coverId": "saeki-sayaka",
    "quoteId": "akari-tokitoh",
    "emojiId": "long-awaited-feelings",
    "shipId": "kaoru-chisato",
    "silhouetteId": "hibiki-sugawa",
    "songId": "serendipity-flip"
  },
  "675": {
    "classicId": "inugami-nekoyama",
    "characterId": "ren",
    "coverId": "vampeerz",
    "quoteId": "momo-minamoto",
    "emojiId": "princess-principal",
    "shipId": "chikariko",
    "silhouetteId": "harumi-taniguchi",
    "songId": "dream-solister"
  },
  "676": {
    "classicId": "im-in-love-with-the-villainess",
    "characterId": "utena-hiiragi",
    "coverId": "the-moon-on-a-rainy-night",
    "quoteId": "kyoko-toshino",
    "emojiId": "cross-ange",
    "shipId": "emma-vivian",
    "silhouetteId": "cocona",
    "songId": "sakura-skip"
  },
  "677": {
    "classicId": "mage-and-demon-queen",
    "characterId": "hina-hikawa",
    "coverId": "roll-over-and-die",
    "quoteId": "nomoto-yuki",
    "emojiId": "ring-my-bell",
    "shipId": "shiina-mimi",
    "silhouetteId": "akari-amano",
    "songId": "guitar-loneliness"
  },
  "678": {
    "classicId": "hana-to-hina",
    "characterId": "umika-konohoshi",
    "coverId": "love-doctor",
    "quoteId": "nijika-ijichi",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "tsubamaria",
    "silhouetteId": "kasumi-toyama",
    "songId": "yuriyurararara"
  },
  "679": {
    "classicId": "gochuumon-wa-usagi",
    "characterId": "lin-luxi",
    "coverId": "pulse",
    "quoteId": "hibiki-tachibana",
    "emojiId": "hana-ni-arashi",
    "shipId": "era-yoonsung",
    "silhouetteId": "yukina-minato",
    "songId": "kimama-na-tenshi-tachi"
  },
  "680": {
    "classicId": "maria-holic",
    "characterId": "woori-bust",
    "coverId": "sheep-princess",
    "quoteId": "mutsumi-wakaba",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "eveaoi",
    "silhouetteId": "misaki-okusawa",
    "songId": "tenbin-fragtime"
  },
  "681": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "hotaru-mizushina",
    "coverId": "hero-san",
    "quoteId": "baek-seola",
    "emojiId": "shino-to-ren",
    "shipId": "yuutou",
    "silhouetteId": "ange-le-carre",
    "songId": "himitsu-no-melody"
  },
  "682": {
    "classicId": "serenade",
    "characterId": "hifumi-takimoto",
    "coverId": "lapis-relights",
    "quoteId": "komichi-akebi",
    "emojiId": "kitanai-kimi",
    "shipId": "mayakuro",
    "silhouetteId": "miwa-inuzuka",
    "songId": "haruhikage"
  },
  "683": {
    "classicId": "kiss-and-white-lily",
    "characterId": "atori-mizutori",
    "coverId": "night-owls-and-summer-skies",
    "quoteId": "asahi-satou",
    "emojiId": "flip-flappers",
    "shipId": "saki-mutsu",
    "silhouetteId": "momo-sheep",
    "songId": "guitar-loneliness"
  },
  "684": {
    "classicId": "goodbye-my-rose-garden",
    "characterId": "kaori-asaka",
    "coverId": "tamako-market",
    "quoteId": "suzu-suzukaze",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "kase-yamada",
    "silhouetteId": "yui-yamada",
    "songId": "memories-comic-girls"
  },
  "685": {
    "classicId": "gochuumon-wa-usagi",
    "characterId": "chisato-shirasagi",
    "coverId": "blooming-sequence",
    "quoteId": "chisato-shirasagi",
    "emojiId": "akebi-chan",
    "shipId": "himayori",
    "silhouetteId": "asahi-satou",
    "songId": "asagao-kase"
  },
  "686": {
    "classicId": "the-summer-you-were-there",
    "characterId": "riri-hitotsuyanagi",
    "coverId": "long-awaited-feelings",
    "quoteId": "rin-umineko",
    "emojiId": "kitanai-kimi",
    "shipId": "mayumi-rin",
    "silhouetteId": "ai-narata",
    "songId": "hoshi-to-hana"
  },
  "687": {
    "classicId": "stardust-telepath",
    "characterId": "hougetsu-shimamura",
    "coverId": "machikado-mazoku",
    "quoteId": "malori-crow",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "nanaki-kanade",
    "silhouetteId": "akane-maekawa",
    "songId": "tenbin-fragtime"
  },
  "688": {
    "classicId": "my-girlfriends-not-here-today",
    "characterId": "grea-manaria",
    "coverId": "lapis-relights",
    "quoteId": "lisa-imai",
    "emojiId": "sakura-trick",
    "shipId": "harumichi",
    "silhouetteId": "ye-xing",
    "songId": "seishun-complex"
  },
  "689": {
    "classicId": "valkyrie-drive",
    "characterId": "ren",
    "coverId": "chuunibyou",
    "quoteId": "nyamu-yuutenji",
    "emojiId": "a-joyful-life",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "ai-narata",
    "songId": "dreamriser"
  },
  "690": {
    "classicId": "netsuzou-trap",
    "characterId": "chito-glt",
    "coverId": "the-guy-she-was-interested-in",
    "quoteId": "annabel-lee",
    "emojiId": "girls-band-cry",
    "shipId": "spesuzu",
    "silhouetteId": "nijika-ijichi",
    "songId": "starlog-illya"
  },
  "691": {
    "classicId": "bloom-into-you",
    "characterId": "emma-night-owls",
    "coverId": "senran-kagura",
    "quoteId": "hina-hikawa",
    "emojiId": "girls-band-cry",
    "shipId": "chito-yuuri",
    "silhouetteId": "kyoko-sakura",
    "songId": "miracle-rush"
  },
  "692": {
    "classicId": "wataten",
    "characterId": "lenore-nevermore",
    "coverId": "otherside-picnic",
    "quoteId": "hifumi-takimoto",
    "emojiId": "ring-my-bell",
    "shipId": "hinatanoa",
    "silhouetteId": "sun-jing",
    "songId": "asagao-kase"
  },
  "693": {
    "classicId": "inugami-nekoyama",
    "characterId": "yoshika-miyafuji",
    "coverId": "she-is-still-cute-today",
    "quoteId": "hitori-gotoh",
    "emojiId": "izetta",
    "shipId": "annabel-lenore",
    "silhouetteId": "ryo-yamada",
    "songId": "azalea-citrus"
  },
  "694": {
    "classicId": "love-live-sunshine",
    "characterId": "nanoha-chiba",
    "coverId": "ano-koro-no-aoi-hoshi",
    "quoteId": "mio-akiyama",
    "emojiId": "happy-sugar-life",
    "shipId": "nijiryo",
    "silhouetteId": "rin-hoshizora",
    "songId": "red-liberation"
  },
  "695": {
    "classicId": "vampire-in-the-garden",
    "characterId": "lee-yeowool",
    "coverId": "asumi-chan",
    "quoteId": "nanoha-chiba",
    "emojiId": "long-awaited-feelings",
    "shipId": "soyosaki",
    "silhouetteId": "naoi-manaka",
    "songId": "venus-line"
  },
  "696": {
    "classicId": "ms-vampire-who-lives-in-my-neighborhood",
    "characterId": "shino",
    "coverId": "manaria-friends",
    "quoteId": "homura-akemi",
    "emojiId": "our-wonderful-days",
    "shipId": "chikariko",
    "silhouetteId": "aoba-suzukaze",
    "songId": "dreamriser"
  },
  "697": {
    "classicId": "crown-handler",
    "characterId": "miho-nishizumi",
    "coverId": "futaribeya",
    "quoteId": "papika",
    "emojiId": "otherside-picnic",
    "shipId": "mayakuro",
    "silhouetteId": "anon-chihaya",
    "songId": "azalea-citrus"
  },
  "698": {
    "classicId": "my-sisters-best-friend",
    "characterId": "haru-ichinose",
    "coverId": "ms-vampire-who-lives-in-my-neighborhood",
    "quoteId": "eve",
    "emojiId": "adachi-and-shimamura",
    "shipId": "bocchiku",
    "silhouetteId": "tomo-ebizuka",
    "songId": "azalea-citrus"
  },
  "699": {
    "classicId": "symphogear",
    "characterId": "kasuga-totoko",
    "coverId": "straight-girl-trap",
    "quoteId": "euphyllia-magenta",
    "emojiId": "hello-melancholic",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "umiri-yahata",
    "songId": "miracle-rush"
  },
  "700": {
    "classicId": "lycoris-recoil",
    "characterId": "akari-amano",
    "coverId": "bang-dream-pico",
    "quoteId": "yuri-tamura",
    "emojiId": "lycoris-recoil",
    "shipId": "ryoko-lapis",
    "silhouetteId": "ajisai-sena",
    "songId": "follow-your-arrows"
  },
  "701": {
    "classicId": "ride-or-die",
    "characterId": "hikari-kagura",
    "coverId": "still-sick",
    "quoteId": "kumiko-oumae",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "komavill",
    "silhouetteId": "hilda-cross-ange",
    "songId": "dreamriser"
  },
  "702": {
    "classicId": "otome-no-teikoku",
    "characterId": "takina-inoue",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "mio-akiyama",
    "emojiId": "akebi-chan",
    "shipId": "teiomcqueen",
    "silhouetteId": "touko-nanami",
    "songId": "connect-madoka"
  },
  "703": {
    "classicId": "i-married-my-best-friend",
    "characterId": "mio-sakamoto",
    "coverId": "catulus-syndrome",
    "quoteId": "tomo-ebizuka",
    "emojiId": "asagao-to-kase-san",
    "shipId": "himemitsuki",
    "silhouetteId": "haruka-takayama",
    "songId": "hikari-no-senritsu"
  },
  "704": {
    "classicId": "senran-kagura",
    "characterId": "mayumi-kodama",
    "coverId": "princess-connect-redive",
    "quoteId": "ayaka-shiraishi",
    "emojiId": "witch-from-mercury",
    "shipId": "illya-miyu",
    "silhouetteId": "subaru-awa",
    "songId": "azalea-citrus"
  },
  "705": {
    "classicId": "konohana-kitan",
    "characterId": "ayaka-sakurai",
    "coverId": "roll-over-and-die",
    "quoteId": "mutsumi-wakaba",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "anontomo",
    "silhouetteId": "noa-himesaka",
    "songId": "umapyoi-densetsu"
  },
  "706": {
    "classicId": "white-angels-have-no-wings",
    "characterId": "hotaru-mizushina",
    "coverId": "nevermore-webtoon",
    "quoteId": "eve",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "momo-yuki",
    "silhouetteId": "rin-shima",
    "songId": "dreamriser"
  },
  "707": {
    "classicId": "granbelm",
    "characterId": "nagisa-ootsuki",
    "coverId": "utsushicha-damena-kao",
    "quoteId": "rin-hoshizora",
    "emojiId": "madoka-magica",
    "shipId": "chuchunika",
    "silhouetteId": "eve",
    "songId": "asu-e-no-tobira"
  },
  "708": {
    "classicId": "slow-loop",
    "characterId": "shizuku-hoshikawa",
    "coverId": "happy-sugar-life",
    "quoteId": "kureha-tsubaki",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "saeko-miwa",
    "silhouetteId": "hanabi-natsuno",
    "songId": "deal-with-the-devil"
  },
  "709": {
    "classicId": "gokujo",
    "characterId": "akane-maekawa",
    "coverId": "inugami-nekoyama",
    "quoteId": "kasumi-toyama",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "hinatanoa",
    "silhouetteId": "nozomi-tojo",
    "songId": "raise-your-hands"
  },
  "710": {
    "classicId": "failed-princesses",
    "characterId": "kanade-kurokawa",
    "coverId": "saeki-sayaka",
    "quoteId": "io-utsushicha",
    "emojiId": "citrus",
    "shipId": "hinako-asahi",
    "silhouetteId": "xiao-lan-wolf",
    "songId": "kokoro-ni-tsubomi"
  },
  "711": {
    "classicId": "pulse",
    "characterId": "hinata-futari",
    "coverId": "kitanai-kimi",
    "quoteId": "mafuyu-tsurezure",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "miho-yukari",
    "silhouetteId": "aoba-suzukaze",
    "songId": "dreamriser"
  },
  "712": {
    "classicId": "hanayamata",
    "characterId": "xiao-lan-wolf",
    "coverId": "vtuber-legend",
    "quoteId": "touko-nanami",
    "emojiId": "flip-flappers",
    "shipId": "jiho-woori",
    "silhouetteId": "rupa",
    "songId": "alive-lycoris"
  },
  "713": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "yuu-sonoda",
    "coverId": "high-school-fleet",
    "quoteId": "chito-glt",
    "emojiId": "granbelm",
    "shipId": "raeclaire",
    "silhouetteId": "han-juhee",
    "songId": "memories-comic-girls"
  },
  "714": {
    "classicId": "do-it-yourself",
    "characterId": "momo-minamoto",
    "coverId": "futaribeya",
    "quoteId": "yuzu-konohana",
    "emojiId": "mage-and-demon-queen",
    "shipId": "mahikano",
    "silhouetteId": "sorawo-kamikoshi",
    "songId": "magia-madoka"
  },
  "715": {
    "classicId": "hello-melancholic",
    "characterId": "ange-cross-ange",
    "coverId": "seiyuu-radio",
    "quoteId": "rin-shima",
    "emojiId": "flip-flappers",
    "shipId": "hinatanoa",
    "silhouetteId": "junna-hoshimi",
    "songId": "deal-with-the-devil"
  },
  "716": {
    "classicId": "so-ra-no-wo-to",
    "characterId": "shizuku-hoshikawa",
    "coverId": "madoka-magica",
    "quoteId": "ayumu-uehara",
    "emojiId": "sheep-princess",
    "shipId": "tomoko-yuri",
    "silhouetteId": "xiao-lan-wolf",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "717": {
    "classicId": "bloom-into-you",
    "characterId": "kiyashu-vanadis",
    "coverId": "relationship-guidelines",
    "quoteId": "iroha-sakayori",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "harumatsu",
    "silhouetteId": "baek-seola",
    "songId": "hectopascal"
  },
  "718": {
    "classicId": "lycoris-recoil",
    "characterId": "kaguya-cosmic",
    "coverId": "moonlight-garden",
    "quoteId": "momo-sheep",
    "emojiId": "cross-ange",
    "shipId": "morimura",
    "silhouetteId": "aoba-suzukaze",
    "songId": "follow-your-arrows"
  },
  "719": {
    "classicId": "madoka-magica",
    "characterId": "kaguya-cosmic",
    "coverId": "how-do-we-relationship",
    "quoteId": "kikuri-hiroi",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "sarasa-ai",
    "silhouetteId": "homura-akemi",
    "songId": "hoshi-no-tabibito"
  },
  "720": {
    "classicId": "revue-starlight",
    "characterId": "asahi-satou",
    "coverId": "vanadis-heart",
    "quoteId": "shiori-oomi",
    "emojiId": "chou-kaguya-hime",
    "shipId": "teiomcqueen",
    "silhouetteId": "nozomi-tojo",
    "songId": "umapyoi-densetsu"
  },
  "721": {
    "classicId": "slow-loop",
    "characterId": "rupa",
    "coverId": "yuri-seijin-naoko-san",
    "quoteId": "yuni-asahina",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "morimura",
    "silhouetteId": "kikuri-hiroi",
    "songId": "asu-e-no-tobira"
  },
  "722": {
    "classicId": "kageki-shojo",
    "characterId": "hinako-hanamura",
    "coverId": "girls-band-cry",
    "quoteId": "maya-tendo",
    "emojiId": "stardust-telepath",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "hinako-yaotose",
    "songId": "kimi-no-gin-no-niwa"
  },
  "723": {
    "classicId": "kimi-ga-shinu-made",
    "characterId": "kim-norae",
    "coverId": "toji-no-miko",
    "quoteId": "tomo-ebizuka",
    "emojiId": "manaria-friends",
    "shipId": "asuka-saki",
    "silhouetteId": "momo-minamoto",
    "songId": "raise-your-hands"
  },
  "724": {
    "classicId": "kuzu-no-honkai",
    "characterId": "hilda-cross-ange",
    "coverId": "asteroid-in-love",
    "quoteId": "kokoro-tsurumaki",
    "emojiId": "the-summer-you-were-there",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "fuuko-taki",
    "songId": "irodori-jelee"
  },
  "725": {
    "classicId": "liz-to-aoi-tori",
    "characterId": "karen-aijo",
    "coverId": "do-it-yourself",
    "quoteId": "shiori-oomi",
    "emojiId": "fluttering-feelings",
    "shipId": "sakinodoka",
    "silhouetteId": "futaba-isurugi",
    "songId": "tenshi-ni-fureta-yo"
  },
  "726": {
    "classicId": "cant-defy-the-lonely-girl",
    "characterId": "tae-hanazono",
    "coverId": "vexations-of-a-shut-in-vampire",
    "quoteId": "yui-yamada",
    "emojiId": "vanadis-heart",
    "shipId": "nao-kurumi",
    "silhouetteId": "queen-velverosa",
    "songId": "himitsu-no-melody"
  },
  "727": {
    "classicId": "yuru-camp",
    "characterId": "euphyllia-magenta",
    "coverId": "so-ra-no-wo-to",
    "quoteId": "ren",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "shiina-mimi",
    "silhouetteId": "rin-hoshizora",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "728": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "kokoro-tsurumaki",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "jung-era",
    "emojiId": "moonlight-garden",
    "shipId": "yuni-fuuko",
    "silhouetteId": "hina-gbc",
    "songId": "zattou-bokura-no-machi"
  },
  "729": {
    "classicId": "long-awaited-feelings",
    "characterId": "terakomari-gandesblood",
    "coverId": "vtuber-legend",
    "quoteId": "aki-wolf",
    "emojiId": "hana-ni-arashi",
    "shipId": "futakao",
    "silhouetteId": "momo-chiyoda",
    "songId": "other-side-of-wall"
  },
  "730": {
    "classicId": "lapis-relights",
    "characterId": "sorawo-kamikoshi",
    "coverId": "asagao-to-kase-san",
    "quoteId": "sayo-hikawa",
    "emojiId": "lycoris-recoil",
    "shipId": "misa-koko",
    "silhouetteId": "sarasa-watanabe",
    "songId": "deal-with-the-devil"
  },
  "731": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "renako-amaori",
    "coverId": "girls-und-panzer",
    "quoteId": "hinako-hanamura",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "sayohina",
    "silhouetteId": "iroha-sakayori",
    "songId": "sacred-world"
  },
  "732": {
    "classicId": "green-tea-bitch",
    "characterId": "kumiko-oumae",
    "coverId": "the-summer-you-were-there",
    "quoteId": "izetta-witch",
    "emojiId": "i-love-amy",
    "shipId": "mahikano",
    "silhouetteId": "yori-asanagi",
    "songId": "serendipity-flip"
  },
  "733": {
    "classicId": "she-is-still-cute-today",
    "characterId": "nomoto-yuki",
    "coverId": "ring-my-bell",
    "quoteId": "miwa-inuzuka",
    "emojiId": "k-on",
    "shipId": "illya-miyu",
    "silhouetteId": "fine-vampire",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "734": {
    "classicId": "watamote",
    "characterId": "akari-amano",
    "coverId": "sekai-de-ichiban-oppai",
    "quoteId": "hibiki-tachibana",
    "emojiId": "flip-flappers",
    "shipId": "mel-lynn",
    "silhouetteId": "kanoko-mamiya",
    "songId": "hectopascal"
  },
  "735": {
    "classicId": "assault-lily-league",
    "characterId": "koharu-tsurezure",
    "coverId": "moonlight-garden",
    "quoteId": "ange-cross-ange",
    "emojiId": "vanadis-heart",
    "shipId": "bibi-amy",
    "silhouetteId": "fine-vampire",
    "songId": "guruguru-dj"
  },
  "736": {
    "classicId": "our-wonderful-days",
    "characterId": "majime-yamashita",
    "coverId": "ano-koro-no-aoi-hoshi",
    "quoteId": "woori-bust",
    "emojiId": "love-doctor",
    "shipId": "nanami-yuuna",
    "silhouetteId": "hikari-kagura",
    "songId": "kimi-ni-aeta-hi"
  },
  "737": {
    "classicId": "kiss-and-white-lily",
    "characterId": "saki-miyanaga",
    "coverId": "still-sick",
    "quoteId": "momo-sheep",
    "emojiId": "new-game",
    "shipId": "sophie-akari",
    "silhouetteId": "hinako-uno",
    "songId": "flip-flappers-ed"
  },
  "738": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "ai-narata",
    "coverId": "failed-princesses",
    "quoteId": "sakiko-togawa",
    "emojiId": "serenade",
    "shipId": "renamai",
    "silhouetteId": "kotori-minami",
    "songId": "umapyoi-densetsu"
  },
  "739": {
    "classicId": "madoka-magica",
    "characterId": "chisato-nishikigi",
    "coverId": "kitanai-kimi",
    "quoteId": "natori-ryoko",
    "emojiId": "fragtime",
    "shipId": "shimbaek",
    "silhouetteId": "mio-sakamoto",
    "songId": "guruguru-dj"
  },
  "740": {
    "classicId": "moonlight-garden",
    "characterId": "menou-virgin-road",
    "coverId": "manaria-friends",
    "quoteId": "hanabi-natsuno",
    "emojiId": "yuruyuri",
    "shipId": "momo-fine",
    "silhouetteId": "shiori-oomi",
    "songId": "guruguru-dj"
  },
  "741": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "izetta-witch",
    "coverId": "comic-girls",
    "quoteId": "harumi-taniguchi",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "jiho-woori",
    "silhouetteId": "sarasa-watanabe",
    "songId": "kimama-na-tenshi-tachi"
  },
  "742": {
    "classicId": "the-summer-you-were-there",
    "characterId": "terakomari-gandesblood",
    "coverId": "k-on",
    "quoteId": "uika-misumi",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "mary-yumeko",
    "silhouetteId": "kaoruko-hanayagi",
    "songId": "red-liberation"
  },
  "743": {
    "classicId": "yuyushiki",
    "characterId": "rupa",
    "coverId": "i-love-amy",
    "quoteId": "ayaka-sakurai",
    "emojiId": "vampire-in-the-garden",
    "shipId": "mayumi-rin",
    "silhouetteId": "yachiyo-inugami",
    "songId": "listen-htt"
  },
  "744": {
    "classicId": "love-doctor",
    "characterId": "yu-takasaki",
    "coverId": "always-human",
    "quoteId": "woori-bust",
    "emojiId": "love-live-sip",
    "shipId": "harumichi",
    "silhouetteId": "lee-yeowool",
    "songId": "kimi-ni-furete"
  },
  "745": {
    "classicId": "please-bully-me-miss-villainess",
    "characterId": "riri-hitotsuyanagi",
    "coverId": "miss-kobayashis-dragon-maid",
    "quoteId": "ye-xing",
    "emojiId": "senran-kagura",
    "shipId": "nijiryo",
    "silhouetteId": "yuki-kyou-kano",
    "songId": "blue-bud-netsuzou"
  },
  "746": {
    "classicId": "adachi-and-shimamura",
    "characterId": "mio-sakamoto",
    "coverId": "chuunibyou",
    "quoteId": "ye-xing",
    "emojiId": "k-on",
    "shipId": "hinata-mikage",
    "silhouetteId": "mimori-togo",
    "songId": "connect-madoka"
  },
  "747": {
    "classicId": "assault-lily-league",
    "characterId": "nana-daiba",
    "coverId": "sailor-moon-s",
    "quoteId": "naoi-manaka",
    "emojiId": "girls-band-cry",
    "shipId": "haruyuu",
    "silhouetteId": "chika-takami",
    "songId": "soushou-innocent"
  },
  "748": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "riko-sakurauchi",
    "coverId": "after-hours",
    "quoteId": "lenore-nevermore",
    "emojiId": "new-game",
    "shipId": "chidori-nanoha",
    "silhouetteId": "kokoro-tsurumaki",
    "songId": "ten-to-sen"
  },
  "749": {
    "classicId": "manaria-friends",
    "characterId": "yukari-akiyama",
    "coverId": "tadokoro-san",
    "quoteId": "sun-jing",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "chikariko",
    "silhouetteId": "terakomari-gandesblood",
    "songId": "hikari-no-senritsu"
  },
  "750": {
    "classicId": "shino-to-ren",
    "characterId": "elsa-dorothy",
    "coverId": "vanadis-heart",
    "quoteId": "uika-misumi",
    "emojiId": "citrus",
    "shipId": "eveaoi",
    "silhouetteId": "soyo-nagasaki",
    "songId": "red-birthmark"
  },
  "751": {
    "classicId": "yuru-camp",
    "characterId": "hina-gbc",
    "coverId": "chuunibyou",
    "quoteId": "akane-maekawa",
    "emojiId": "tamen-de-gushi",
    "shipId": "saeko-miwa",
    "silhouetteId": "nodoka-haramura",
    "songId": "mayoiuta"
  },
  "752": {
    "classicId": "dear-my-teacher",
    "characterId": "hibiki-tachibana",
    "coverId": "vexations-of-a-shut-in-vampire",
    "quoteId": "nanami-oda",
    "emojiId": "k-on",
    "shipId": "mayumi-rin",
    "silhouetteId": "lenore-nevermore",
    "songId": "zattou-bokura-no-machi"
  },
  "753": {
    "classicId": "kuzu-no-honkai",
    "characterId": "iroha-sakayori",
    "coverId": "gakkou-gurashi",
    "quoteId": "saeko-tsutsumi",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "saki-mutsu",
    "silhouetteId": "sakiko-togawa",
    "songId": "one-room-sugar-life"
  },
  "754": {
    "classicId": "girls-band-cry",
    "characterId": "yuki-kyou-kano",
    "coverId": "yuruyuri",
    "quoteId": "yuuna-matsubara",
    "emojiId": "watanare",
    "shipId": "anne-grea",
    "silhouetteId": "haruka-takayama",
    "songId": "dreamriser"
  },
  "755": {
    "classicId": "happy-sugar-life",
    "characterId": "baek-seola",
    "coverId": "the-third-party",
    "quoteId": "rin-touyama",
    "emojiId": "mage-and-demon-queen",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "annabel-lee",
    "songId": "umapyoi-densetsu"
  },
  "756": {
    "classicId": "nevermore-webtoon",
    "characterId": "hye-ji-serenade",
    "coverId": "houkago-teibou-nisshi",
    "quoteId": "yuuri-glt",
    "emojiId": "how-do-we-relationship",
    "shipId": "mayakuro",
    "silhouetteId": "honoka-kosaka",
    "songId": "red-birthmark"
  },
  "757": {
    "classicId": "yuruyuri",
    "characterId": "futaba-isurugi",
    "coverId": "blue-reflection-ray",
    "quoteId": "yukina-minato",
    "emojiId": "asagao-to-kase-san",
    "shipId": "meiyuzu",
    "silhouetteId": "maya-tendo",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "758": {
    "classicId": "train-to-the-end",
    "characterId": "akane-maekawa",
    "coverId": "assault-lily",
    "quoteId": "airi-sezaki",
    "emojiId": "otherside-picnic",
    "shipId": "shijima-majime",
    "silhouetteId": "sarasa-watanabe",
    "songId": "snow-halation"
  },
  "759": {
    "classicId": "green-tea-bitch",
    "characterId": "miku-kohinata",
    "coverId": "bang-dream-pico",
    "quoteId": "yuuna-matsubara",
    "emojiId": "sheep-princess",
    "shipId": "yuiazu",
    "silhouetteId": "shim-chong",
    "songId": "follow-your-arrows"
  },
  "760": {
    "classicId": "after-hours",
    "characterId": "kumiko-oumae",
    "coverId": "cheerful-amnesia",
    "quoteId": "ayumu-uehara",
    "emojiId": "anemone-is-in-heat",
    "shipId": "anontomo",
    "silhouetteId": "kumiko-oumae",
    "songId": "arc-en-ciel"
  },
  "761": {
    "classicId": "her-tale-of-shim-chong",
    "characterId": "chito-glt",
    "coverId": "strike-witches",
    "quoteId": "hina-gbc",
    "emojiId": "girls-band-cry",
    "shipId": "meiyuzu",
    "silhouetteId": "malori-crow",
    "songId": "connect-madoka"
  },
  "762": {
    "classicId": "hello-melancholic",
    "characterId": "lisa-imai",
    "coverId": "uma-musume",
    "quoteId": "takina-inoue",
    "emojiId": "love-doctor",
    "shipId": "takitomo",
    "silhouetteId": "yuu-akeuchi",
    "songId": "aozora-no-rhapsody"
  },
  "763": {
    "classicId": "comic-girls",
    "characterId": "lapis-tenebrae",
    "coverId": "vampeerz",
    "quoteId": "kumiko-oumae",
    "emojiId": "flip-flappers",
    "shipId": "tokaku-haru",
    "silhouetteId": "reina-kousaka",
    "songId": "dream-solister"
  },
  "764": {
    "classicId": "bang-dream",
    "characterId": "sumika-chibana",
    "coverId": "tropical-fish",
    "quoteId": "maho-akashi",
    "emojiId": "shino-to-ren",
    "shipId": "saki-mutsu",
    "silhouetteId": "nyamu-yuutenji",
    "songId": "kimama-na-tenshi-tachi"
  },
  "765": {
    "classicId": "tamayura",
    "characterId": "mel-pulse",
    "coverId": "action-heroine-cheer-fruits",
    "quoteId": "shamiko",
    "emojiId": "bocchi-the-rock",
    "shipId": "shizukaori",
    "silhouetteId": "ayumu-uehara",
    "songId": "soushou-innocent"
  },
  "766": {
    "classicId": "urara-meirochou",
    "characterId": "natori-ryoko",
    "coverId": "otherside-picnic",
    "quoteId": "miho-nishizumi",
    "emojiId": "love-doctor",
    "shipId": "hifumiaoba",
    "silhouetteId": "tae-hanazono",
    "songId": "shiny-days"
  },
  "767": {
    "classicId": "d4dj",
    "characterId": "anisphia-wynn-palettia",
    "coverId": "assault-lily",
    "quoteId": "nagisa-ootsuki",
    "emojiId": "love-to-lie-angle",
    "shipId": "harumichi",
    "silhouetteId": "ayaka-sakurai",
    "songId": "memories-comic-girls"
  },
  "768": {
    "classicId": "this-monster-wants-to-eat-me",
    "characterId": "yuna-yuki",
    "coverId": "adachi-and-shimamura",
    "quoteId": "atori-mizutori",
    "emojiId": "watanare",
    "shipId": "kotoumi",
    "silhouetteId": "rin-shima",
    "songId": "ten-to-sen"
  },
  "769": {
    "classicId": "failed-princesses",
    "characterId": "yuki-hanzomon",
    "coverId": "shinsekai-yori",
    "quoteId": "yuna-yuki",
    "emojiId": "chou-kaguya-hime",
    "shipId": "takitomo",
    "silhouetteId": "mamori-tokonome",
    "songId": "synchrogazer"
  },
  "770": {
    "classicId": "hina-logi",
    "characterId": "yuna-yuki",
    "coverId": "gochuumon-wa-usagi",
    "quoteId": "tokaku-azuma",
    "emojiId": "flip-flappers",
    "shipId": "annabel-lenore",
    "silhouetteId": "rinku-aimoto",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "771": {
    "classicId": "bloom-into-you",
    "characterId": "ryo-yamada",
    "coverId": "hina-logi",
    "quoteId": "chisato-shirasagi",
    "emojiId": "girls-last-tour",
    "shipId": "fuu-mashi",
    "silhouetteId": "yuko-yoshida",
    "songId": "arc-en-ciel"
  },
  "772": {
    "classicId": "saeki-sayaka",
    "characterId": "special-week",
    "coverId": "murcielago",
    "quoteId": "mejiro-mcqueen",
    "emojiId": "soulmate-gl",
    "shipId": "nomokasu",
    "silhouetteId": "chuchu",
    "songId": "irodori-jelee"
  },
  "773": {
    "classicId": "what-does-the-fox-say",
    "characterId": "suzu-suzukaze",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "hibiki-sugawa",
    "emojiId": "kakegurui",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "sayo-hikawa",
    "songId": "hoshi-to-hana"
  },
  "774": {
    "classicId": "failed-princesses",
    "characterId": "mai-oduka",
    "coverId": "otome-no-teikoku",
    "quoteId": "madam-baek",
    "emojiId": "assault-lily",
    "shipId": "ran-moca",
    "silhouetteId": "matsuri-mizusawa",
    "songId": "soushou-innocent"
  },
  "775": {
    "classicId": "hino-san-no-baka",
    "characterId": "anne-manaria",
    "coverId": "she-loves-to-cook-and-she-loves-to-eat",
    "quoteId": "yoo-jin-serenade",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "era-yoonsung",
    "silhouetteId": "momo-vampire",
    "songId": "machikado-tangent"
  },
  "776": {
    "classicId": "pulse",
    "characterId": "soyo-nagasaki",
    "coverId": "love-live-hasunosora",
    "quoteId": "saki-miyanaga",
    "emojiId": "uma-musume",
    "shipId": "yuu-atori",
    "silhouetteId": "satsuki-konohana",
    "songId": "deal-with-the-devil"
  },
  "777": {
    "classicId": "her-tale-of-shim-cheong",
    "characterId": "shamiko",
    "coverId": "my-food-looks-very-cute",
    "quoteId": "hibiki-tachibana",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "himemitsuki",
    "silhouetteId": "mayumi-kodama",
    "songId": "hana-no-tou"
  },
  "778": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "kaguya-cosmic",
    "coverId": "lily-love-2",
    "quoteId": "himari-kino",
    "emojiId": "shino-to-ren",
    "shipId": "himayori",
    "silhouetteId": "mitsuki-yano",
    "songId": "yuriyurararara"
  },
  "779": {
    "classicId": "lily-yy",
    "characterId": "kim-norae",
    "coverId": "princess-connect-redive",
    "quoteId": "ren",
    "emojiId": "d4dj",
    "shipId": "madohomu",
    "silhouetteId": "ajisai-sena",
    "songId": "hana-no-tou"
  },
  "780": {
    "classicId": "shinsekai-yori",
    "characterId": "erika-kizaki",
    "coverId": "hibike-euphonium",
    "quoteId": "haruka-takayama",
    "emojiId": "asagao-to-kase-san",
    "shipId": "makoto-akane",
    "silhouetteId": "yuki-kyou-kano",
    "songId": "hana-no-tou"
  },
  "781": {
    "classicId": "symphogear",
    "characterId": "touko-nanami",
    "coverId": "cant-defy-the-lonely-girl",
    "quoteId": "rin-shima",
    "emojiId": "magirevo",
    "shipId": "kikusei",
    "silhouetteId": "ye-xing",
    "songId": "hectopascal"
  },
  "782": {
    "classicId": "beauty-and-the-beast-girl",
    "characterId": "kiyashu-vanadis",
    "coverId": "vividred-operation",
    "quoteId": "noa-himesaka",
    "emojiId": "bocchi-the-rock",
    "shipId": "anne-grea",
    "silhouetteId": "woori-bust",
    "songId": "irodori-jelee"
  },
  "783": {
    "classicId": "vampeerz",
    "characterId": "kikuri-hiroi",
    "coverId": "the-guy-she-was-interested-in",
    "quoteId": "yuna-yuki",
    "emojiId": "manaria-friends",
    "shipId": "rinnade",
    "silhouetteId": "honey-trap",
    "songId": "aozora-no-rhapsody"
  },
  "784": {
    "classicId": "so-ra-no-wo-to",
    "characterId": "fine-vampire",
    "coverId": "mage-and-demon-queen",
    "quoteId": "kou-yagami",
    "emojiId": "kill-me-now",
    "shipId": "fuu-mashi",
    "silhouetteId": "azusa-nakano",
    "songId": "hana-no-tou"
  },
  "785": {
    "classicId": "mygo",
    "characterId": "nana-daiba",
    "coverId": "a-joyful-life",
    "quoteId": "honoka-kosaka",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "norae-seola",
    "silhouetteId": "miorine-rembran",
    "songId": "dreamriser"
  },
  "786": {
    "classicId": "my-girlfriends-not-here-today",
    "characterId": "yuu-koito",
    "coverId": "high-school-fleet",
    "quoteId": "kyoko-toshino",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "tohrubayashi",
    "silhouetteId": "ren",
    "songId": "valkyrie-drive-op"
  },
  "787": {
    "classicId": "long-awaited-feelings",
    "characterId": "aya-oosawa",
    "coverId": "tamako-market",
    "quoteId": "nana-daiba",
    "emojiId": "sheep-princess",
    "shipId": "rinku-maho",
    "silhouetteId": "hina-hikawa",
    "songId": "seishun-complex"
  },
  "788": {
    "classicId": "girls-und-panzer",
    "characterId": "aki-wolf",
    "coverId": "kageki-shojo",
    "quoteId": "cocona",
    "emojiId": "akebi-chan",
    "shipId": "adachishima",
    "silhouetteId": "hinako-yaotose",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "789": {
    "classicId": "our-teachers-are-dating",
    "characterId": "tae-hanazono",
    "coverId": "catch-these-hands",
    "quoteId": "yoshika-miyafuji",
    "emojiId": "k-on",
    "shipId": "kagu-iro",
    "silhouetteId": "qiu-tong",
    "songId": "listen-htt"
  },
  "790": {
    "classicId": "yuruyuri",
    "characterId": "hotaru-mizushina",
    "coverId": "tamen-de-gushi",
    "quoteId": "madoka-kaname",
    "emojiId": "long-awaited-feelings",
    "shipId": "futakao",
    "silhouetteId": "hime-shiraki",
    "songId": "tenshi-ni-fureta-yo"
  },
  "791": {
    "classicId": "gakkou-gurashi",
    "characterId": "tomori-takamatsu",
    "coverId": "qualia-the-purple",
    "quoteId": "rae-taylor",
    "emojiId": "bad-girl",
    "shipId": "momo-fine",
    "silhouetteId": "kanade-kurokawa",
    "songId": "magia-madoka"
  },
  "792": {
    "classicId": "manaria-friends",
    "characterId": "kasumi-toyama",
    "coverId": "i-love-amy",
    "quoteId": "misuzu-moritani",
    "emojiId": "cross-ange",
    "shipId": "sulemio",
    "silhouetteId": "kita-ikuyo",
    "songId": "starlog-illya"
  },
  "793": {
    "classicId": "happy-sugar-life",
    "characterId": "yuyu-shirai",
    "coverId": "a-joyful-life",
    "quoteId": "silence-suzuka",
    "emojiId": "asagao-to-kase-san",
    "shipId": "shimbaek",
    "silhouetteId": "aya-oosawa",
    "songId": "kimi-ni-aeta-hi"
  },
  "794": {
    "classicId": "kuttsukiboshi",
    "characterId": "nanaki-fujishiro",
    "coverId": "bloom-into-you",
    "quoteId": "hinata-hoshino",
    "emojiId": "ring-my-bell",
    "shipId": "yuunamimori",
    "silhouetteId": "yuu-akeuchi",
    "songId": "dream-solister"
  },
  "795": {
    "classicId": "anne-happy",
    "characterId": "honoka-kosaka",
    "coverId": "what-does-the-fox-say",
    "quoteId": "erika-kizaki",
    "emojiId": "flip-flappers",
    "shipId": "teiomcqueen",
    "silhouetteId": "haruka-takayama",
    "songId": "serendipity-flip"
  },
  "796": {
    "classicId": "love-live-sip",
    "characterId": "rin-toyama",
    "coverId": "vanadis-heart",
    "quoteId": "mejiro-mcqueen",
    "emojiId": "nevermore-webtoon",
    "shipId": "yuutou",
    "silhouetteId": "claire-francois",
    "songId": "yuriyurararara"
  },
  "797": {
    "classicId": "lily-love-2",
    "characterId": "momo-minamoto",
    "coverId": "tamayura",
    "quoteId": "maria-cadenzavna-eve",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "chito-yuuri",
    "silhouetteId": "yachiyo-tsukimi",
    "songId": "one-room-sugar-life"
  },
  "798": {
    "classicId": "hina-logi",
    "characterId": "mamori-tokonome",
    "coverId": "re-stage-dream-days",
    "quoteId": "chisato-shirasagi",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "mary-yumeko",
    "silhouetteId": "umiri-yahata",
    "songId": "venus-line"
  },
  "799": {
    "classicId": "watamote",
    "characterId": "arisa-ichigaya",
    "coverId": "princess-connect-redive",
    "quoteId": "makoto-shimizu",
    "emojiId": "izetta",
    "shipId": "mahikano",
    "silhouetteId": "hye-ji-serenade",
    "songId": "magia-madoka"
  },
  "800": {
    "classicId": "otherside-picnic",
    "characterId": "setsuna-yuki",
    "coverId": "tamako-market",
    "quoteId": "yuzu-aihara",
    "emojiId": "cross-ange",
    "shipId": "chuchunika",
    "silhouetteId": "eve",
    "songId": "azalea-citrus"
  },
  "801": {
    "classicId": "days-of-love-at-seagull-villa",
    "characterId": "terakomari-gandesblood",
    "coverId": "prism-yuri",
    "quoteId": "yuri-tamura",
    "emojiId": "soulmate-gl",
    "shipId": "saki-mutsu",
    "silhouetteId": "aki-wolf",
    "songId": "azalea-citrus"
  },
  "802": {
    "classicId": "anemone-is-in-heat",
    "characterId": "mei-aihara",
    "coverId": "her-tale-of-shim-chong",
    "quoteId": "ran-mitake",
    "emojiId": "how-do-we-relationship",
    "shipId": "eveaoi",
    "silhouetteId": "yuuri-glt",
    "songId": "connect-madoka"
  },
  "803": {
    "classicId": "asumi-chan",
    "characterId": "eli-ayase",
    "coverId": "futaribeya",
    "quoteId": "xiao-lan-wolf",
    "emojiId": "manaria-friends",
    "shipId": "annabel-lenore",
    "silhouetteId": "shamiko",
    "songId": "dream-solister"
  },
  "804": {
    "classicId": "selection-project",
    "characterId": "iroha-sakayori",
    "coverId": "shinsekai-yori",
    "quoteId": "ryo-yamada",
    "emojiId": "new-game",
    "shipId": "hinatanoa",
    "silhouetteId": "villhaze",
    "songId": "sakura-skip"
  },
  "805": {
    "classicId": "gakkou-gurashi",
    "characterId": "yachiyo-tsukimi",
    "coverId": "wataten-movie",
    "quoteId": "kaori-asaka",
    "emojiId": "cross-ange",
    "shipId": "chikariko",
    "silhouetteId": "mamori-tokonome",
    "songId": "himitsu-no-melody"
  },
  "806": {
    "classicId": "lycoris-recollect",
    "characterId": "yuuna-matsubara",
    "coverId": "the-executioner-and-her-way-of-life",
    "quoteId": "kyoko-toshino",
    "emojiId": "new-game",
    "shipId": "chito-yuuri",
    "silhouetteId": "emma-night-owls",
    "songId": "sacred-world"
  },
  "807": {
    "classicId": "love-live-nijigasaki",
    "characterId": "annabel-lee",
    "coverId": "vanadis-heart",
    "quoteId": "hime-shiraki",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "mashiruri",
    "silhouetteId": "kaoruko-hanayagi",
    "songId": "kimi-no-gin-no-niwa"
  },
  "808": {
    "classicId": "i-love-amy",
    "characterId": "nanaki-fujishiro",
    "coverId": "happy-sugar-life",
    "quoteId": "yuu-koito",
    "emojiId": "love-live-sip",
    "shipId": "kaoru-chisato",
    "silhouetteId": "tomoko-kuroki",
    "songId": "spicy-piece"
  },
  "809": {
    "classicId": "roll-over-and-die",
    "characterId": "suzu-suzukaze",
    "coverId": "wataten",
    "quoteId": "kikuri-hiroi",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "mary-yumeko",
    "silhouetteId": "tomoko-kuroki",
    "songId": "serendipity-flip"
  },
  "810": {
    "classicId": "lapis-relights",
    "characterId": "shamiko",
    "coverId": "i-love-amy",
    "quoteId": "ren",
    "emojiId": "soulmate-gl",
    "shipId": "illya-miyu",
    "silhouetteId": "takina-inoue",
    "songId": "hikari-no-senritsu"
  },
  "811": {
    "classicId": "love-doctor",
    "characterId": "mutsumi-wakaba",
    "coverId": "princess-principal",
    "quoteId": "minato-asano",
    "emojiId": "hana-ni-arashi",
    "shipId": "norae-seola",
    "silhouetteId": "rin-shima",
    "songId": "snow-halation"
  },
  "812": {
    "classicId": "vtuber-legend",
    "characterId": "rin-toyama",
    "coverId": "kill-me-now",
    "quoteId": "suletta-mercury",
    "emojiId": "lycoris-recoil",
    "shipId": "mashiruri",
    "silhouetteId": "sayaka-saeki",
    "songId": "other-side-of-wall"
  },
  "813": {
    "classicId": "the-third-party",
    "characterId": "kanoko-mamiya",
    "coverId": "everyday-lily",
    "quoteId": "hye-ji-serenade",
    "emojiId": "superwomen-in-love",
    "shipId": "malovel",
    "silhouetteId": "menou-virgin-road",
    "songId": "ano-mori-de-matteru"
  },
  "814": {
    "classicId": "release-the-spyce",
    "characterId": "kyoko-toshino",
    "coverId": "amanchu",
    "quoteId": "hougetsu-shimamura",
    "emojiId": "bang-dream-pico",
    "shipId": "saeko-miwa",
    "silhouetteId": "noa-himesaka",
    "songId": "shiny-days"
  },
  "815": {
    "classicId": "akebi-chan",
    "characterId": "mel-pulse",
    "coverId": "wataten",
    "quoteId": "eli-ayase",
    "emojiId": "magirevo",
    "shipId": "ayuyuu",
    "silhouetteId": "jung-era",
    "songId": "listen-htt"
  },
  "816": {
    "classicId": "blooming-sequence",
    "characterId": "anisphia-wynn-palettia",
    "coverId": "kageki-shojo",
    "quoteId": "queen-velverosa",
    "emojiId": "bang-dream-pico",
    "shipId": "momo-fine",
    "silhouetteId": "mami-tomoe",
    "songId": "aozora-no-rhapsody"
  },
  "817": {
    "classicId": "comic-girls",
    "characterId": "ren",
    "coverId": "regalia",
    "quoteId": "chisato-shirasagi",
    "emojiId": "fragtime",
    "shipId": "yuiazu",
    "silhouetteId": "utena-hiiragi",
    "songId": "synchrogazer"
  },
  "818": {
    "classicId": "tsubame-tip-off",
    "characterId": "yoshika-miyafuji",
    "coverId": "girls-und-panzer",
    "quoteId": "uika-misumi",
    "emojiId": "sakura-trick",
    "shipId": "nanaki-kanade",
    "silhouetteId": "saki-kindaichi",
    "songId": "flip-flappers-ed"
  },
  "819": {
    "classicId": "yuruyuri",
    "characterId": "claudine-saijo",
    "coverId": "ride-or-die",
    "quoteId": "claudine-saijo",
    "emojiId": "sakura-trick",
    "shipId": "hibimiku",
    "silhouetteId": "mel-pulse",
    "songId": "kimi-no-gin-no-niwa"
  },
  "820": {
    "classicId": "princess-connect-redive",
    "characterId": "mashiro-komiyama",
    "coverId": "bloom-into-you",
    "quoteId": "lenore-nevermore",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "aya-chisato",
    "silhouetteId": "mayumi-kodama",
    "songId": "soushou-innocent"
  },
  "821": {
    "classicId": "otome-no-teikoku",
    "characterId": "suzu-suzukaze",
    "coverId": "vampeerz",
    "quoteId": "hotaru-mizushina",
    "emojiId": "the-summer-you-were-there",
    "shipId": "luo-xinyue",
    "silhouetteId": "umi-sonoda",
    "songId": "hoshi-no-tabibito"
  },
  "822": {
    "classicId": "lapis-relights",
    "characterId": "ayaka-shiraishi",
    "coverId": "kill-me-now",
    "quoteId": "anon-chihaya",
    "emojiId": "madoka-magica",
    "shipId": "nanajun",
    "silhouetteId": "lenore-nevermore",
    "songId": "deal-with-the-devil"
  },
  "823": {
    "classicId": "failed-princesses",
    "characterId": "maria-vampire",
    "coverId": "asumi-chan",
    "quoteId": "misa-utsushicha",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "anonsoyo",
    "silhouetteId": "aoi-amawashi",
    "songId": "sakura-skip"
  },
  "824": {
    "classicId": "getting-to-know-grace",
    "characterId": "aki-wolf",
    "coverId": "hero-san",
    "quoteId": "miyu-edelfelt",
    "emojiId": "fluttering-feelings",
    "shipId": "annabel-lenore",
    "silhouetteId": "yachiyo-inugami",
    "songId": "tenbin-fragtime"
  },
  "825": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "rinku-aimoto",
    "coverId": "show-by-rock",
    "quoteId": "kyoko-sakura",
    "emojiId": "bang-dream-pico",
    "shipId": "momo-fine",
    "silhouetteId": "terakomari-gandesblood",
    "songId": "hectopascal"
  },
  "826": {
    "classicId": "fed-up-office-lady-villainess",
    "characterId": "mizore-yoroizuka",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "mitsuki-yano",
    "emojiId": "new-game",
    "shipId": "norae-seola",
    "silhouetteId": "shim-chong",
    "songId": "shiny-days"
  },
  "827": {
    "classicId": "kitanai-kimi",
    "characterId": "princess-charlotte",
    "coverId": "uma-musume",
    "quoteId": "akari-tokitoh",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "akebi-erika",
    "silhouetteId": "atori-mizutori",
    "songId": "alive-lycoris"
  },
  "828": {
    "classicId": "granbelm",
    "characterId": "kiyashu-vanadis",
    "coverId": "vtuber-legend",
    "quoteId": "shiina-kakure",
    "emojiId": "green-tea-bitch",
    "shipId": "miho-yukari",
    "silhouetteId": "ran-mitake",
    "songId": "kimi-ni-furete"
  },
  "829": {
    "classicId": "murcielago",
    "characterId": "ayaka-shiraishi",
    "coverId": "cheerful-amnesia",
    "quoteId": "mai-oduka",
    "emojiId": "girls-last-tour",
    "shipId": "ayuyuu",
    "silhouetteId": "kano-yamanouchi",
    "songId": "arc-en-ciel"
  },
  "830": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "rin-toyama",
    "coverId": "yuuki-yuuna",
    "quoteId": "seika-ijichi",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "tomoko-yuri",
    "silhouetteId": "yuki-hanzomon",
    "songId": "hectopascal"
  },
  "831": {
    "classicId": "hina-logi",
    "characterId": "malori-crow",
    "coverId": "my-sisters-best-friend",
    "quoteId": "fuuko-taki",
    "emojiId": "the-summer-you-were-there",
    "shipId": "sophie-akari",
    "silhouetteId": "naoi-manaka",
    "songId": "umapyoi-densetsu"
  },
  "832": {
    "classicId": "she-is-still-cute-today",
    "characterId": "hina-hikawa",
    "coverId": "ange-vierge",
    "quoteId": "ritsu-tainaka",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "momo-aki",
    "silhouetteId": "hime-shiraki",
    "songId": "hana-no-tou"
  },
  "833": {
    "classicId": "everyday-lily",
    "characterId": "ai-narata",
    "coverId": "sora-haena",
    "quoteId": "chisato-shirasagi",
    "emojiId": "witch-from-mercury",
    "shipId": "ryoko-lapis",
    "silhouetteId": "euphyllia-magenta",
    "songId": "eternal-eternity"
  },
  "834": {
    "classicId": "green-tea-bitch",
    "characterId": "satsuki-konohana",
    "coverId": "chou-kaguya-hime",
    "quoteId": "mei-aihara",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "komavill",
    "silhouetteId": "rae-taylor",
    "songId": "my-dream-girls"
  },
  "835": {
    "classicId": "hello-melancholic",
    "characterId": "menou-virgin-road",
    "coverId": "tamako-market",
    "quoteId": "suzu-nekoyama",
    "emojiId": "our-wonderful-days",
    "shipId": "kourin",
    "silhouetteId": "chisato-shirasagi",
    "songId": "guitar-loneliness"
  },
  "836": {
    "classicId": "bang-dream-ave-mujica",
    "characterId": "lee-yeowool",
    "coverId": "uma-musume",
    "quoteId": "rapid-rabbit",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "mashiruri",
    "silhouetteId": "kokoro-tsurumaki",
    "songId": "eternal-eternity"
  },
  "837": {
    "classicId": "she-is-still-cute-today",
    "characterId": "haru-ichinose",
    "coverId": "hina-logi",
    "quoteId": "eli-ayase",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "mayakuro",
    "silhouetteId": "mutsumi-wakaba",
    "songId": "kimi-ni-furete"
  },
  "838": {
    "classicId": "everyday-lily",
    "characterId": "hime-shiraki",
    "coverId": "straight-girl-trap",
    "quoteId": "nanami-oda",
    "emojiId": "fragtime",
    "shipId": "shiina-mimi",
    "silhouetteId": "sayaka-saeki",
    "songId": "venus-line"
  },
  "839": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "lu-nan",
    "coverId": "sakura-trick",
    "quoteId": "konomi-fujiwara",
    "emojiId": "valkyrie-drive",
    "shipId": "yuni-fuuko",
    "silhouetteId": "mei-aihara",
    "songId": "alive-lycoris"
  },
  "840": {
    "classicId": "selection-project",
    "characterId": "yukina-minato",
    "coverId": "akuma-no-riddle",
    "quoteId": "anisphia-wynn-palettia",
    "emojiId": "love-live-sip",
    "shipId": "sulemio",
    "silhouetteId": "nanami-oda",
    "songId": "kimi-ni-furete"
  },
  "841": {
    "classicId": "prisma-illya",
    "characterId": "chuchu",
    "coverId": "she-loves-to-cook-and-she-loves-to-eat",
    "quoteId": "umika-konohoshi",
    "emojiId": "asagao-to-kase-san",
    "shipId": "anontomo",
    "silhouetteId": "madam-baek",
    "songId": "hoshi-no-dialogue"
  },
  "842": {
    "classicId": "cant-defy-the-lonely-girl",
    "characterId": "futaba-isurugi",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "sorawo-kamikoshi",
    "emojiId": "fragtime",
    "shipId": "chuchunika",
    "silhouetteId": "yui-funami",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "843": {
    "classicId": "gochuumon-wa-usagi",
    "characterId": "akane-maekawa",
    "coverId": "regalia",
    "quoteId": "nodoka-haramura",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "sakinodoka",
    "silhouetteId": "io-utsushicha",
    "songId": "deal-with-the-devil"
  },
  "844": {
    "classicId": "cross-ange",
    "characterId": "riri-hitotsuyanagi",
    "coverId": "lily-yy",
    "quoteId": "sayaka-miki",
    "emojiId": "new-game",
    "shipId": "chito-yuuri",
    "silhouetteId": "anne-manaria",
    "songId": "go-go-maniac"
  },
  "845": {
    "classicId": "lycoris-recollect",
    "characterId": "jiho-bust",
    "coverId": "blooming-sequence",
    "quoteId": "haru-ichinose",
    "emojiId": "watanare",
    "shipId": "mayakuro",
    "silhouetteId": "aya-oosawa",
    "songId": "irodori-jelee"
  },
  "846": {
    "classicId": "stardust-telepath",
    "characterId": "harumi-taniguchi",
    "coverId": "saeki-sayaka",
    "quoteId": "terakomari-gandesblood",
    "emojiId": "superwomen-in-love",
    "shipId": "sophie-akari",
    "silhouetteId": "lu-nan",
    "songId": "yuriyurararara"
  },
  "847": {
    "classicId": "ano-koro-no-aoi-hoshi",
    "characterId": "junna-hoshimi",
    "coverId": "toji-no-miko",
    "quoteId": "maria-vampire",
    "emojiId": "lycoris-recoil",
    "shipId": "saeko-miwa",
    "silhouetteId": "chidori-takamori",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "848": {
    "classicId": "bad-thinking-diary",
    "characterId": "uika-misumi",
    "coverId": "ange-vierge",
    "quoteId": "nodoka-haramura",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "yuunamimori",
    "silhouetteId": "haru-ichinose",
    "songId": "won3chu-kissme"
  },
  "849": {
    "classicId": "this-monster-wants-to-eat-me",
    "characterId": "kyoko-sakura",
    "coverId": "chuunibyou",
    "quoteId": "kanoko-mamiya",
    "emojiId": "sheep-princess",
    "shipId": "bocchiku",
    "silhouetteId": "yu-takasaki",
    "songId": "shukufuku"
  },
  "850": {
    "classicId": "kageki-shojo",
    "characterId": "ajisai-sena",
    "coverId": "ange-vierge",
    "quoteId": "misaki-okusawa",
    "emojiId": "bocchi-the-rock",
    "shipId": "bocchiku",
    "silhouetteId": "azusa-nakano",
    "songId": "mayoiuta"
  },
  "851": {
    "classicId": "prisma-illya",
    "characterId": "izetta-witch",
    "coverId": "even-though-were-adults",
    "quoteId": "suzu-nekoyama",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "nanami-yuuna",
    "silhouetteId": "kurumi-yoshizawa",
    "songId": "shiny-days"
  },
  "852": {
    "classicId": "lily-love",
    "characterId": "asahi-satou",
    "coverId": "our-teachers-are-dating",
    "quoteId": "yvonne-smollett",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "ryoko-lapis",
    "silhouetteId": "ginko-yurishiro",
    "songId": "alive-lycoris"
  },
  "853": {
    "classicId": "hina-logi",
    "characterId": "koharu-tsurezure",
    "coverId": "roll-over-and-die",
    "quoteId": "mai-oduka",
    "emojiId": "serenade",
    "shipId": "lunan-yexing",
    "silhouetteId": "komichi-akebi",
    "songId": "synchrogazer"
  },
  "854": {
    "classicId": "vividred-operation",
    "characterId": "shamiko",
    "coverId": "witch-from-mercury",
    "quoteId": "kasuga-totoko",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "utekiwi",
    "silhouetteId": "kumiko-oumae",
    "songId": "arc-en-ciel"
  },
  "855": {
    "classicId": "new-game",
    "characterId": "ange-cross-ange",
    "coverId": "qualia-the-purple",
    "quoteId": "umika-konohoshi",
    "emojiId": "everyday-lily",
    "shipId": "utekiwi",
    "silhouetteId": "nadeshiko-kagamihara",
    "songId": "asu-e-no-tobira"
  },
  "856": {
    "classicId": "revue-starlight",
    "characterId": "miho-nishizumi",
    "coverId": "hina-logi",
    "quoteId": "kita-ikuyo",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "kase-yamada",
    "silhouetteId": "lu-nan",
    "songId": "irodori-jelee"
  },
  "857": {
    "classicId": "if-i-could-reach-you",
    "characterId": "maria-cadenzavna-eve",
    "coverId": "shimeji-simulation",
    "quoteId": "atori-mizutori",
    "emojiId": "ring-my-bell",
    "shipId": "nanajun",
    "silhouetteId": "uika-misumi",
    "songId": "hoshi-no-dialogue"
  },
  "858": {
    "classicId": "non-non-biyori",
    "characterId": "utada-uta",
    "coverId": "gakkou-gurashi",
    "quoteId": "chris-yukine",
    "emojiId": "vampire-in-the-garden",
    "shipId": "shiina-mimi",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "go-go-maniac"
  },
  "859": {
    "classicId": "hero-san",
    "characterId": "airi-sezaki",
    "coverId": "ghosts-of-greywoods",
    "quoteId": "kim-norae",
    "emojiId": "k-on",
    "shipId": "soratori",
    "silhouetteId": "tomoka-kase",
    "songId": "won3chu-kissme"
  },
  "860": {
    "classicId": "new-game",
    "characterId": "koharu-tsurezure",
    "coverId": "comic-girls",
    "quoteId": "minato-asano",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "nicomaki",
    "silhouetteId": "woori-bust",
    "songId": "won3chu-kissme"
  },
  "861": {
    "classicId": "akebi-chan",
    "characterId": "sorawo-kamikoshi",
    "coverId": "shinsekai-yori",
    "quoteId": "sayaka-saeki",
    "emojiId": "shimeji-simulation",
    "shipId": "teiomcqueen",
    "silhouetteId": "yui-hirasawa",
    "songId": "ten-to-sen"
  },
  "862": {
    "classicId": "show-me-your-bust",
    "characterId": "mel-pulse",
    "coverId": "netsuzou-trap",
    "quoteId": "nodoka-haramura",
    "emojiId": "kitanai-kimi",
    "shipId": "hinako-asahi",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "seishun-complex"
  },
  "863": {
    "classicId": "stardust-telepath",
    "characterId": "ryo-yamada",
    "coverId": "kiss-and-white-lily",
    "quoteId": "momo-vampire",
    "emojiId": "watanare",
    "shipId": "kasu-arisa",
    "silhouetteId": "nomoto-yuki",
    "songId": "memories-comic-girls"
  },
  "864": {
    "classicId": "still-sick",
    "characterId": "akari-amano",
    "coverId": "qualia-the-purple",
    "quoteId": "momo-sheep",
    "emojiId": "adachi-and-shimamura",
    "shipId": "kumiko-reina",
    "silhouetteId": "kasuga-totoko",
    "songId": "memories-comic-girls"
  },
  "865": {
    "classicId": "asagao-to-kase-san",
    "characterId": "qiu-tong",
    "coverId": "sabagebu",
    "quoteId": "yuzu-konohana",
    "emojiId": "yuruyuri",
    "shipId": "misa-koko",
    "silhouetteId": "rin-umineko",
    "songId": "dream-solister"
  },
  "866": {
    "classicId": "princess-connect-redive",
    "characterId": "nijika-ijichi",
    "coverId": "love-live-sunshine",
    "quoteId": "renako-amaori",
    "emojiId": "long-awaited-feelings",
    "shipId": "uta-ayaka",
    "silhouetteId": "shino",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "867": {
    "classicId": "my-girlfriends-not-here-today",
    "characterId": "sorawo-kamikoshi",
    "coverId": "harukana-receive",
    "quoteId": "haruka-tenoh",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "chidori-nanoha",
    "silhouetteId": "raana-kaname",
    "songId": "blue-bud-netsuzou"
  },
  "868": {
    "classicId": "hanebado",
    "characterId": "grea-manaria",
    "coverId": "hero-san",
    "quoteId": "koyuki-honami",
    "emojiId": "chou-kaguya-hime",
    "shipId": "saya-hinako",
    "silhouetteId": "kurumi-yoshizawa",
    "songId": "memories-comic-girls"
  },
  "869": {
    "classicId": "mayonaka-punch",
    "characterId": "eve",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "shijima-tsukishima",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "yuni-fuuko",
    "silhouetteId": "makoto-shimizu",
    "songId": "ano-mori-de-matteru"
  },
  "870": {
    "classicId": "long-awaited-feelings",
    "characterId": "seon-hwa",
    "coverId": "roll-over-and-die",
    "quoteId": "tohru",
    "emojiId": "ange-vierge",
    "shipId": "yukilisa",
    "silhouetteId": "hikari-kagura",
    "songId": "venus-line"
  },
  "871": {
    "classicId": "goodbye-my-rose-garden",
    "characterId": "fine-vampire",
    "coverId": "love-doctor",
    "quoteId": "eli-ayase",
    "emojiId": "girls-last-tour",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "hanayo-koizumi",
    "songId": "kokoro-ni-tsubomi"
  },
  "872": {
    "classicId": "my-sisters-best-friend",
    "characterId": "vivian-night-owls",
    "coverId": "bang-dream-ave-mujica",
    "quoteId": "mayumi-kodama",
    "emojiId": "assault-lily",
    "shipId": "norae-seola",
    "silhouetteId": "yuu-yuutani",
    "songId": "listen-htt"
  },
  "873": {
    "classicId": "catch-these-hands",
    "characterId": "lapis-tenebrae",
    "coverId": "vampeerz",
    "quoteId": "jung-era",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "hanabi-konomi",
    "silhouetteId": "yukari-akiyama",
    "songId": "sacred-world"
  },
  "874": {
    "classicId": "wataten",
    "characterId": "kotori-minami",
    "coverId": "assault-lily-fruits",
    "quoteId": "anon-chihaya",
    "emojiId": "netsuzou-trap",
    "shipId": "chisataki",
    "silhouetteId": "chidori-takamori",
    "songId": "miracle-rush"
  },
  "875": {
    "classicId": "machikado-mazoku",
    "characterId": "tohru",
    "coverId": "bad-thinking-diary",
    "quoteId": "hina-hikawa",
    "emojiId": "yuri-is-my-job",
    "shipId": "sayohina",
    "silhouetteId": "anisphia-wynn-palettia",
    "songId": "guruguru-dj"
  },
  "876": {
    "classicId": "bad-girl",
    "characterId": "satsuki-konohana",
    "coverId": "our-wonderful-days",
    "quoteId": "minato-asano",
    "emojiId": "fragtime",
    "shipId": "soyosaki",
    "silhouetteId": "mimori-togo",
    "songId": "azalea-citrus"
  },
  "877": {
    "classicId": "doughnuts-under-a-crescent-moon",
    "characterId": "eli-ayase",
    "coverId": "hina-logi",
    "quoteId": "papika",
    "emojiId": "green-tea-bitch",
    "shipId": "emma-vivian",
    "silhouetteId": "mary-saotome",
    "songId": "alive-lycoris"
  },
  "878": {
    "classicId": "kuzu-no-honkai",
    "characterId": "soyo-nagasaki",
    "coverId": "our-wonderful-days",
    "quoteId": "tokai-teio",
    "emojiId": "princess-principal",
    "shipId": "kase-yamada",
    "silhouetteId": "yachiyo-inugami",
    "songId": "guitar-loneliness"
  },
  "879": {
    "classicId": "strike-witches",
    "characterId": "kaguya-cosmic",
    "coverId": "tari-tari",
    "quoteId": "sun-jing",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "illya-miyu",
    "silhouetteId": "maya-tendo",
    "songId": "hana-no-tou"
  },
  "880": {
    "classicId": "kiniro-mosaic",
    "characterId": "eve",
    "coverId": "fed-up-office-lady-villainess",
    "quoteId": "menou-virgin-road",
    "emojiId": "uma-musume",
    "shipId": "meiyuzu",
    "silhouetteId": "suzu-suzukaze",
    "songId": "azalea-citrus"
  },
  "881": {
    "classicId": "mikagura-gakuen",
    "characterId": "yuu-sonoda",
    "coverId": "tamako-market",
    "quoteId": "kaoruko-hanayagi",
    "emojiId": "long-awaited-feelings",
    "shipId": "yvonelsa",
    "silhouetteId": "raana-kaname",
    "songId": "follow-your-arrows"
  },
  "882": {
    "classicId": "tadokoro-san",
    "characterId": "miwa-inuzuka",
    "coverId": "the-guy-she-was-interested-in",
    "quoteId": "utena-hiiragi",
    "emojiId": "strike-witches",
    "shipId": "sayohina",
    "silhouetteId": "aoba-suzukaze",
    "songId": "asu-e-no-tobira"
  },
  "883": {
    "classicId": "she-is-still-cute-today",
    "characterId": "ritsu-tainaka",
    "coverId": "witch-from-mercury",
    "quoteId": "lynn-pulse",
    "emojiId": "mage-and-demon-queen",
    "shipId": "sarasa-ai",
    "silhouetteId": "miyu-edelfelt",
    "songId": "hoshi-to-hana"
  },
  "884": {
    "classicId": "do-it-yourself",
    "characterId": "hina-gbc",
    "coverId": "sheep-princess",
    "quoteId": "euphyllia-magenta",
    "emojiId": "vampire-in-the-garden",
    "shipId": "era-yoonsung",
    "silhouetteId": "terakomari-gandesblood",
    "songId": "irodori-jelee"
  },
  "885": {
    "classicId": "selection-project",
    "characterId": "yuki-kyou-kano",
    "coverId": "sheep-princess",
    "quoteId": "euphyllia-magenta",
    "emojiId": "asagao-to-kase-san",
    "shipId": "rinnade",
    "silhouetteId": "aya-oosawa",
    "songId": "himitsu-no-melody"
  },
  "886": {
    "classicId": "cheerful-amnesia",
    "characterId": "hinako-uno",
    "coverId": "fragtime",
    "quoteId": "miwa-inuzuka",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "anontomo",
    "silhouetteId": "haruka-tenoh",
    "songId": "kimi-no-gin-no-niwa"
  },
  "887": {
    "classicId": "relationship-guidelines",
    "characterId": "shizuku-hoshikawa",
    "coverId": "hana-to-hina",
    "quoteId": "anisphia-wynn-palettia",
    "emojiId": "fluttering-feelings",
    "shipId": "mitsu",
    "silhouetteId": "baek-seola",
    "songId": "starlog-illya"
  },
  "888": {
    "classicId": "tropical-fish",
    "characterId": "shim-chong",
    "coverId": "fluttering-feelings",
    "quoteId": "kasumi-toyama",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "kanadia",
    "silhouetteId": "homura-akemi",
    "songId": "guitar-loneliness"
  },
  "889": {
    "classicId": "gakkou-gurashi",
    "characterId": "kiwi-araga",
    "coverId": "girls-und-panzer",
    "quoteId": "chuchu",
    "emojiId": "valkyrie-drive",
    "shipId": "momo-yuki",
    "silhouetteId": "komichi-akebi",
    "songId": "valkyrie-drive-op"
  },
  "890": {
    "classicId": "asteroid-in-love",
    "characterId": "rupa",
    "coverId": "ange-vierge",
    "quoteId": "kou-yagami",
    "emojiId": "love-to-lie-angle",
    "shipId": "takitomo",
    "silhouetteId": "michiru-kaioh",
    "songId": "sakura-skip"
  },
  "891": {
    "classicId": "bang-dream-pico",
    "characterId": "kasumi-toyama",
    "coverId": "yuruyuri",
    "quoteId": "kanade-kurokawa",
    "emojiId": "serenade",
    "shipId": "mel-lynn",
    "silhouetteId": "euphyllia-magenta",
    "songId": "asu-e-no-tobira"
  },
  "892": {
    "classicId": "bad-thinking-diary",
    "characterId": "suzu-nekoyama",
    "coverId": "qualia-the-purple",
    "quoteId": "noa-himesaka",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "reina-kousaka",
    "songId": "shiny-days"
  },
  "893": {
    "classicId": "love-live-superstar",
    "characterId": "tsubasa-kazanari",
    "coverId": "hino-san-no-baka",
    "quoteId": "miorine-rembran",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "takitomo",
    "silhouetteId": "nagisa-ootsuki",
    "songId": "azalea-citrus"
  },
  "894": {
    "classicId": "failed-princesses",
    "characterId": "minato-asano",
    "coverId": "superwomen-in-love",
    "quoteId": "shim-chong",
    "emojiId": "sakura-trick",
    "shipId": "morimura",
    "silhouetteId": "harumi-taniguchi",
    "songId": "umapyoi-densetsu"
  },
  "895": {
    "classicId": "our-teachers-are-dating",
    "characterId": "aoi-amawashi",
    "coverId": "yuruyuri",
    "quoteId": "haruka-takayama",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "mahikano",
    "silhouetteId": "hina-gbc",
    "songId": "soushou-innocent"
  },
  "896": {
    "classicId": "relationship-guidelines",
    "characterId": "eli-ayase",
    "coverId": "ring-my-bell",
    "quoteId": "saeko-tsutsumi",
    "emojiId": "everyday-lily",
    "shipId": "juhee-yeowool",
    "silhouetteId": "shiori-oomi",
    "songId": "other-side-of-wall"
  },
  "897": {
    "classicId": "hana-ni-arashi",
    "characterId": "mejiro-mcqueen",
    "coverId": "tsubame-tip-off",
    "quoteId": "taki-shiina",
    "emojiId": "bang-dream-pico",
    "shipId": "sayakatouko",
    "silhouetteId": "maria-vampire",
    "songId": "won3chu-kissme"
  },
  "898": {
    "classicId": "birdie-wing",
    "characterId": "fine-vampire",
    "coverId": "love-live-sip",
    "quoteId": "honoka-kosaka",
    "emojiId": "vanadis-heart",
    "shipId": "nozoeli",
    "silhouetteId": "himari-kino",
    "songId": "mayoiuta"
  },
  "899": {
    "classicId": "sakura-trick",
    "characterId": "satou-matsuzaka",
    "coverId": "bang-dream",
    "quoteId": "kanan-matsuura",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "hifumiaoba",
    "silhouetteId": "sophie-twilight",
    "songId": "ten-to-sen"
  },
  "900": {
    "classicId": "toji-no-miko",
    "characterId": "villhaze",
    "coverId": "wataten-movie",
    "quoteId": "kanan-matsuura",
    "emojiId": "soulmate-gl",
    "shipId": "konatsukoyuki",
    "silhouetteId": "malori-crow",
    "songId": "venus-line"
  },
  "901": {
    "classicId": "maria-holic",
    "characterId": "kaoruko-hanayagi",
    "coverId": "pulse",
    "quoteId": "yuko-yoshida",
    "emojiId": "yuru-camp",
    "shipId": "chuchunika",
    "silhouetteId": "kikuri-hiroi",
    "songId": "blue-bud-netsuzou"
  },
  "902": {
    "classicId": "kill-me-now",
    "characterId": "chuchu",
    "coverId": "mikagura-gakuen",
    "quoteId": "yukari-akiyama",
    "emojiId": "mage-and-demon-queen",
    "shipId": "bibi-amy",
    "silhouetteId": "lin-luxi",
    "songId": "one-room-sugar-life"
  },
  "903": {
    "classicId": "futarigurashi",
    "characterId": "nico-yazawa",
    "coverId": "yuyushiki",
    "quoteId": "tohru",
    "emojiId": "mage-and-demon-queen",
    "shipId": "harumatsu",
    "silhouetteId": "tomori-takamatsu",
    "songId": "hoshi-to-hana"
  },
  "904": {
    "classicId": "bloom-into-you",
    "characterId": "queen-velverosa",
    "coverId": "futarigurashi",
    "quoteId": "fuuko-taki",
    "emojiId": "watanare",
    "shipId": "yuni-fuuko",
    "silhouetteId": "kaoru-seta",
    "songId": "ano-mori-de-matteru"
  },
  "905": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "arisa-ichigaya",
    "coverId": "citrus",
    "quoteId": "natori-ryoko",
    "emojiId": "magirevo",
    "shipId": "lunan-yexing",
    "silhouetteId": "annabel-lee",
    "songId": "zattou-bokura-no-machi"
  },
  "906": {
    "classicId": "love-live-hasunosora",
    "characterId": "setsuna-yuki",
    "coverId": "inugami-nekoyama",
    "quoteId": "karen-aijo",
    "emojiId": "strike-witches",
    "shipId": "konatsukoyuki",
    "silhouetteId": "momo-chiyoda",
    "songId": "dream-solister"
  },
  "907": {
    "classicId": "shinsekai-yori",
    "characterId": "tomoka-kase",
    "coverId": "love-live-superstar",
    "quoteId": "shim-chong",
    "emojiId": "assault-lily",
    "shipId": "momo-aki",
    "silhouetteId": "chito-glt",
    "songId": "red-birthmark"
  },
  "908": {
    "classicId": "seiyuu-radio",
    "characterId": "kou-yagami",
    "coverId": "yuri-is-my-job",
    "quoteId": "honoka-kosaka",
    "emojiId": "i-love-amy",
    "shipId": "chito-yuuri",
    "silhouetteId": "nanami-oda",
    "songId": "hana-no-tou"
  },
  "909": {
    "classicId": "please-bully-me-miss-villainess",
    "characterId": "vayuela-vanadis",
    "coverId": "yama-no-susume",
    "quoteId": "yuu-yuutani",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "chuchunika",
    "silhouetteId": "kiyashu-vanadis",
    "songId": "yuriyurararara"
  },
  "910": {
    "classicId": "ride-or-die",
    "characterId": "shiori-oomi",
    "coverId": "ano-koro-no-aoi-hoshi",
    "quoteId": "chisato-shirasagi",
    "emojiId": "bang-dream-pico",
    "shipId": "kaseyamada",
    "silhouetteId": "tomoko-kuroki",
    "songId": "irodori-jelee"
  },
  "911": {
    "classicId": "watanare",
    "characterId": "izetta-witch",
    "coverId": "regalia",
    "quoteId": "yuzu-aihara",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "hanabi-konomi",
    "silhouetteId": "setsuna-yuki",
    "songId": "ano-mori-de-matteru"
  },
  "912": {
    "classicId": "asagao-to-kase-san",
    "characterId": "xiao-lan-wolf",
    "coverId": "sono-hanabira",
    "quoteId": "special-week",
    "emojiId": "hana-ni-arashi",
    "shipId": "spesuzu",
    "silhouetteId": "yui-yamada",
    "songId": "listen-htt"
  },
  "913": {
    "classicId": "saki",
    "characterId": "illyasviel-von-einzbern",
    "coverId": "catch-these-hands",
    "quoteId": "airi-sezaki",
    "emojiId": "moonlight-garden",
    "shipId": "dakyeong-seonhwa",
    "silhouetteId": "ai-narata",
    "songId": "flip-flappers-ed"
  },
  "914": {
    "classicId": "the-moon-on-a-rainy-night",
    "characterId": "majime-yamashita",
    "coverId": "mayonaka-punch",
    "quoteId": "kaoruko-hanayagi",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "saya-hinako",
    "silhouetteId": "lynn-pulse",
    "songId": "sakura-skip"
  },
  "915": {
    "classicId": "after-hours",
    "characterId": "yachiyo-tsukimi",
    "coverId": "green-tea-bitch",
    "quoteId": "reina-kousaka",
    "emojiId": "i-love-amy",
    "shipId": "teiomcqueen",
    "silhouetteId": "konomi-fujiwara",
    "songId": "zattou-bokura-no-machi"
  },
  "916": {
    "classicId": "yuuki-yuuna",
    "characterId": "aoba-suzukaze",
    "coverId": "if-i-could-reach-you",
    "quoteId": "tomoko-kuroki",
    "emojiId": "new-game",
    "shipId": "lunan-yexing",
    "silhouetteId": "qiu-tong",
    "songId": "aozora-no-rhapsody"
  },
  "917": {
    "classicId": "kimi-ga-shinu-made",
    "characterId": "misuzu-moritani",
    "coverId": "d4dj",
    "quoteId": "harumi-taniguchi",
    "emojiId": "sheep-princess",
    "shipId": "nanaki-kanade",
    "silhouetteId": "futaba-isurugi",
    "songId": "aozora-no-rhapsody"
  },
  "918": {
    "classicId": "getting-to-know-grace",
    "characterId": "honoka-kosaka",
    "coverId": "watamote",
    "quoteId": "ajisai-sena",
    "emojiId": "hana-ni-arashi",
    "shipId": "cocona-papika",
    "silhouetteId": "madam-baek",
    "songId": "deal-with-the-devil"
  },
  "919": {
    "classicId": "run-away-with-me-girl",
    "characterId": "ange-cross-ange",
    "coverId": "so-ra-no-wo-to",
    "quoteId": "sayaka-saeki",
    "emojiId": "hello-melancholic",
    "shipId": "nao-kurumi",
    "silhouetteId": "da-kyeong",
    "songId": "one-room-sugar-life"
  },
  "920": {
    "classicId": "kageki-shojo",
    "characterId": "riko-sakurauchi",
    "coverId": "otome-no-teikoku",
    "quoteId": "maria-cadenzavna-eve",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "nanaki-kanade",
    "silhouetteId": "aoba-suzukaze",
    "songId": "dreamriser"
  },
  "921": {
    "classicId": "prisma-illya",
    "characterId": "riri-hitotsuyanagi",
    "coverId": "nevermore-webtoon",
    "quoteId": "lynn-pulse",
    "emojiId": "happy-sugar-life",
    "shipId": "kotoumi",
    "silhouetteId": "tomo-ebizuka",
    "songId": "memories-comic-girls"
  },
  "922": {
    "classicId": "catulus-syndrome",
    "characterId": "kim-norae",
    "coverId": "love-doctor",
    "quoteId": "sayaka-saeki",
    "emojiId": "love-doctor",
    "shipId": "nozoeli",
    "silhouetteId": "saeko-tsutsumi",
    "songId": "aozora-no-rhapsody"
  },
  "923": {
    "classicId": "vexations-of-a-shut-in-vampire",
    "characterId": "xiao-lan-wolf",
    "coverId": "what-does-the-fox-say",
    "quoteId": "mio-akiyama",
    "emojiId": "asagao-to-kase-san",
    "shipId": "juhee-yeowool",
    "silhouetteId": "akane-maekawa",
    "songId": "yuriyurararara"
  },
  "924": {
    "classicId": "high-school-fleet",
    "characterId": "ajisai-sena",
    "coverId": "mage-and-demon-queen",
    "quoteId": "dia-kurosawa",
    "emojiId": "always-human",
    "shipId": "cocona-papika",
    "silhouetteId": "kokoro-tsurumaki",
    "songId": "serendipity-flip"
  },
  "925": {
    "classicId": "my-cute-little-kitten",
    "characterId": "mimi-mimily",
    "coverId": "kimi-ga-shinu-made",
    "quoteId": "mashiro-komiyama",
    "emojiId": "vampire-in-the-garden",
    "shipId": "chito-yuuri",
    "silhouetteId": "junna-hoshimi",
    "songId": "machikado-tangent"
  },
  "926": {
    "classicId": "fluttering-feelings",
    "characterId": "misa-utsushicha",
    "coverId": "the-guy-she-was-interested-in",
    "quoteId": "riko-sakurauchi",
    "emojiId": "senran-kagura",
    "shipId": "yoshimio",
    "silhouetteId": "kou-yagami",
    "songId": "hana-no-tou"
  },
  "927": {
    "classicId": "saki",
    "characterId": "mai-oduka",
    "coverId": "hanebado",
    "quoteId": "momo-chiyoda",
    "emojiId": "madoka-magica",
    "shipId": "adachishima",
    "silhouetteId": "kumiko-oumae",
    "songId": "haruhikage"
  },
  "928": {
    "classicId": "princess-connect-redive",
    "characterId": "shim-chong",
    "coverId": "soulmate-gl",
    "quoteId": "harumi-taniguchi",
    "emojiId": "fragtime",
    "shipId": "yvonelsa",
    "silhouetteId": "touko-nanami",
    "songId": "red-liberation"
  },
  "929": {
    "classicId": "vtuber-legend",
    "characterId": "maria-vampire",
    "coverId": "izetta",
    "quoteId": "claudine-saijo",
    "emojiId": "everyday-lily",
    "shipId": "shizukaori",
    "silhouetteId": "utada-uta",
    "songId": "umapyoi-densetsu"
  },
  "930": {
    "classicId": "bang-dream-pico",
    "characterId": "honoka-kosaka",
    "coverId": "lily-love-2",
    "quoteId": "kobayashi",
    "emojiId": "superwomen-in-love",
    "shipId": "teiomcqueen",
    "silhouetteId": "hanayo-koizumi",
    "songId": "synchrogazer"
  },
  "931": {
    "classicId": "otome-no-teikoku",
    "characterId": "yuyu-shirai",
    "coverId": "the-moon-on-a-rainy-night",
    "quoteId": "sayo-hikawa",
    "emojiId": "watamote",
    "shipId": "annabel-lenore",
    "silhouetteId": "miorine-rembran",
    "songId": "won3chu-kissme"
  },
  "932": {
    "classicId": "asagao-to-kase-san",
    "characterId": "mikage-futari",
    "coverId": "my-girlfriends-not-here-today",
    "quoteId": "madoka-kaname",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "kaoru-chisato",
    "silhouetteId": "lee-yeowool",
    "songId": "valkyrie-drive-op"
  },
  "933": {
    "classicId": "tari-tari",
    "characterId": "ryo-yamada",
    "coverId": "catulus-syndrome",
    "quoteId": "ange-cross-ange",
    "emojiId": "love-to-lie-angle",
    "shipId": "kanadia",
    "silhouetteId": "mei-aihara",
    "songId": "machikado-tangent"
  },
  "934": {
    "classicId": "revue-starlight",
    "characterId": "lenore-nevermore",
    "coverId": "vampeerz",
    "quoteId": "kaoruko-hanayagi",
    "emojiId": "always-human",
    "shipId": "kyosaya",
    "silhouetteId": "mitsuki-yano",
    "songId": "tenshi-ni-fureta-yo"
  },
  "935": {
    "classicId": "wataten-movie",
    "characterId": "rinku-aimoto",
    "coverId": "sheep-princess",
    "quoteId": "shiina-kakure",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "kaoru-chisato",
    "silhouetteId": "yuuri-glt",
    "songId": "hectopascal"
  },
  "936": {
    "classicId": "opium-gl",
    "characterId": "aya-maruyama",
    "coverId": "pulse",
    "quoteId": "claire-francois",
    "emojiId": "mage-and-demon-queen",
    "shipId": "shimbaek",
    "silhouetteId": "akane-maekawa",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "937": {
    "classicId": "lily-yy",
    "characterId": "yuu-koito",
    "coverId": "days-of-love-at-seagull-villa",
    "quoteId": "yuuri-glt",
    "emojiId": "shino-to-ren",
    "shipId": "sayohina",
    "silhouetteId": "satou-matsuzaka",
    "songId": "dreamriser"
  },
  "938": {
    "classicId": "cross-ange",
    "characterId": "ginko-yurishiro",
    "coverId": "selection-project",
    "quoteId": "konomi-fujiwara",
    "emojiId": "granbelm",
    "shipId": "haruyuu",
    "silhouetteId": "nanami-oda",
    "songId": "kimi-ni-furete"
  },
  "939": {
    "classicId": "kin-iro-movie",
    "characterId": "honey-trap",
    "coverId": "high-school-fleet",
    "quoteId": "majime-yamashita",
    "emojiId": "shino-to-ren",
    "shipId": "makoto-akane",
    "silhouetteId": "kikuri-hiroi",
    "songId": "dream-solister"
  },
  "940": {
    "classicId": "my-girlfriends-not-here-today",
    "characterId": "ren",
    "coverId": "superwomen-in-love",
    "quoteId": "mary-saotome",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "mirei-shikishima",
    "songId": "spicy-piece"
  },
  "941": {
    "classicId": "vampire-in-the-garden",
    "characterId": "sorawo-kamikoshi",
    "coverId": "assault-lily-fruits",
    "quoteId": "chuchu",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "norae-seola",
    "silhouetteId": "hinako-uno",
    "songId": "starlog-illya"
  },
  "942": {
    "classicId": "bocchi-the-rock",
    "characterId": "karen-aijo",
    "coverId": "our-teachers-are-dating",
    "quoteId": "komichi-akebi",
    "emojiId": "assault-lily",
    "shipId": "hanabi-konomi",
    "silhouetteId": "futaba-isurugi",
    "songId": "magia-madoka"
  },
  "943": {
    "classicId": "urara-meirochou",
    "characterId": "rupa",
    "coverId": "revue-starlight",
    "quoteId": "mei-aihara",
    "emojiId": "superwomen-in-love",
    "shipId": "futakao",
    "silhouetteId": "shino",
    "songId": "won3chu-kissme"
  },
  "944": {
    "classicId": "slow-loop",
    "characterId": "mitsuki-yano",
    "coverId": "tropical-fish",
    "quoteId": "haruka-takayama",
    "emojiId": "superwomen-in-love",
    "shipId": "yoojin-hyeji",
    "silhouetteId": "kaori-asaka",
    "songId": "dream-solister"
  },
  "945": {
    "classicId": "madoka-magica",
    "characterId": "maria-cadenzavna-eve",
    "coverId": "so-ra-no-wo-to",
    "quoteId": "haruka-tenoh",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "ninomomo",
    "silhouetteId": "utada-uta",
    "songId": "hectopascal"
  },
  "946": {
    "classicId": "the-guy-she-was-interested-in",
    "characterId": "yuki-hanzomon",
    "coverId": "her-tale-of-shim-chong",
    "quoteId": "yuuna-matsubara",
    "emojiId": "lycoris-recoil",
    "shipId": "emma-vivian",
    "silhouetteId": "kaoruko-hanayagi",
    "songId": "serendipity-flip"
  },
  "947": {
    "classicId": "whispering-you-a-love-song",
    "characterId": "kita-ikuyo",
    "coverId": "love-live-sunshine",
    "quoteId": "hye-ji-serenade",
    "emojiId": "kill-me-now",
    "shipId": "anonsoyo",
    "silhouetteId": "lisa-imai",
    "songId": "hana-no-tou"
  },
  "948": {
    "classicId": "liz-to-aoi-tori",
    "characterId": "chuchu",
    "coverId": "shinsekai-yori",
    "quoteId": "chika-takami",
    "emojiId": "otherside-picnic",
    "shipId": "ginkure",
    "silhouetteId": "futaba-isurugi",
    "songId": "starlog-illya"
  },
  "949": {
    "classicId": "futari-monologue",
    "characterId": "subaru-awa",
    "coverId": "the-third-party",
    "quoteId": "fuuko-taki",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "adachishima",
    "silhouetteId": "da-kyeong",
    "songId": "alive-lycoris"
  },
  "950": {
    "classicId": "not-so-shoujo-love-story",
    "characterId": "yu-takasaki",
    "coverId": "lily-love-2",
    "quoteId": "renako-amaori",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "nao-kurumi",
    "silhouetteId": "hinako-yaotose",
    "songId": "guitar-loneliness"
  },
  "951": {
    "classicId": "getting-to-know-grace",
    "characterId": "saki-miyanaga",
    "coverId": "sheep-princess",
    "quoteId": "kano-yamanouchi",
    "emojiId": "yuri-is-my-job",
    "shipId": "ayuyuu",
    "silhouetteId": "koharu-tsurezure",
    "songId": "hectopascal"
  },
  "952": {
    "classicId": "ms-vampire-who-lives-in-my-neighborhood",
    "characterId": "azusa-nakano",
    "coverId": "bad-girl",
    "quoteId": "han-juhee",
    "emojiId": "shimeji-simulation",
    "shipId": "kumiko-reina",
    "silhouetteId": "kita-ikuyo",
    "songId": "won3chu-kissme"
  },
  "953": {
    "classicId": "netsuzou-trap",
    "characterId": "nijika-ijichi",
    "coverId": "birdie-wing",
    "quoteId": "chuchu",
    "emojiId": "otherside-picnic",
    "shipId": "hifumiaoba",
    "silhouetteId": "momo-chiyoda",
    "songId": "arc-en-ciel"
  },
  "954": {
    "classicId": "princess-connect-redive",
    "characterId": "mel-pulse",
    "coverId": "run-away-with-me-girl",
    "quoteId": "shiina-kakure",
    "emojiId": "always-human",
    "shipId": "maria-lan",
    "silhouetteId": "maki-nishikino",
    "songId": "tenshi-ni-fureta-yo"
  },
  "955": {
    "classicId": "kuzu-no-honkai",
    "characterId": "madoka-kaname",
    "coverId": "dear-my-teacher",
    "quoteId": "rinku-aimoto",
    "emojiId": "uma-musume",
    "shipId": "malovel",
    "silhouetteId": "kotori-minami",
    "songId": "hectopascal"
  },
  "956": {
    "classicId": "shinsekai-yori",
    "characterId": "mikage-futari",
    "coverId": "not-so-shoujo-love-story",
    "quoteId": "anisphia-wynn-palettia",
    "emojiId": "flip-flappers",
    "shipId": "anonsoyo",
    "silhouetteId": "arisa-ichigaya",
    "songId": "won3chu-kissme"
  },
  "957": {
    "classicId": "how-do-we-relationship",
    "characterId": "sora-honda",
    "coverId": "love-live-sip",
    "quoteId": "chika-takami",
    "emojiId": "bang-dream",
    "shipId": "sayakatouko",
    "silhouetteId": "ayaka-shiraishi",
    "songId": "other-side-of-wall"
  },
  "958": {
    "classicId": "lily-yy",
    "characterId": "kasumi-toyama",
    "coverId": "yuri-seijin-naoko-san",
    "quoteId": "honey-trap",
    "emojiId": "how-do-we-relationship",
    "shipId": "akebi-erika",
    "silhouetteId": "sakiko-togawa",
    "songId": "sakura-skip"
  },
  "959": {
    "classicId": "wataten-movie",
    "characterId": "eve",
    "coverId": "what-does-the-fox-say",
    "quoteId": "momo-sheep",
    "emojiId": "madoka-magica",
    "shipId": "anne-grea",
    "silhouetteId": "shino",
    "songId": "guitar-loneliness"
  },
  "960": {
    "classicId": "hino-san-no-baka",
    "characterId": "tsubasa-kazanari",
    "coverId": "tsubame-tip-off",
    "quoteId": "mayumi-kodama",
    "emojiId": "futari-monologue",
    "shipId": "soyosaki",
    "silhouetteId": "nagisa-ootsuki",
    "songId": "asagao-kase"
  },
  "961": {
    "classicId": "sadistic-beauty-side-b",
    "characterId": "miho-nishizumi",
    "coverId": "selection-project",
    "quoteId": "yukina-minato",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "hinatanoa",
    "silhouetteId": "hikari-kagura",
    "songId": "ten-to-sen"
  },
  "962": {
    "classicId": "yuruyuri",
    "characterId": "yuu-sonoda",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "rin-toyama",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "futakao",
    "silhouetteId": "haru-ichinose",
    "songId": "hikari-no-senritsu"
  },
  "963": {
    "classicId": "our-teachers-are-dating",
    "characterId": "anisphia-wynn-palettia",
    "coverId": "love-live-hasunosora",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "birdie-wing",
    "shipId": "spesuzu",
    "silhouetteId": "tokaku-azuma",
    "songId": "starlog-illya"
  },
  "964": {
    "classicId": "vampire-in-the-garden",
    "characterId": "majime-yamashita",
    "coverId": "futari-monologue",
    "quoteId": "princess-charlotte",
    "emojiId": "bang-dream-pico",
    "shipId": "mahikano",
    "silhouetteId": "arisa-ichigaya",
    "songId": "one-room-sugar-life"
  },
  "965": {
    "classicId": "hero-san",
    "characterId": "chisato-shirasagi",
    "coverId": "shino-to-ren",
    "quoteId": "vayuela-vanadis",
    "emojiId": "cross-ange",
    "shipId": "emma-vivian",
    "silhouetteId": "sayaka-saeki",
    "songId": "haruhikage"
  },
  "966": {
    "classicId": "everyday-lily",
    "characterId": "takina-inoue",
    "coverId": "miss-kobayashis-dragon-maid",
    "quoteId": "ryo-yamada",
    "emojiId": "stardust-telepath",
    "shipId": "ryoko-lapis",
    "silhouetteId": "yuu-sonoda",
    "songId": "valkyrie-drive-op"
  },
  "967": {
    "classicId": "the-executioner-and-her-way-of-life",
    "characterId": "mio-sakamoto",
    "coverId": "lapis-relights",
    "quoteId": "jung-era",
    "emojiId": "magirevo",
    "shipId": "mahikano",
    "silhouetteId": "hougetsu-shimamura",
    "songId": "connect-madoka"
  },
  "968": {
    "classicId": "green-tea-bitch",
    "characterId": "xiao-lan-wolf",
    "coverId": "our-teachers-are-dating",
    "quoteId": "baek-seola",
    "emojiId": "shimeji-simulation",
    "shipId": "emma-vivian",
    "silhouetteId": "lee-yeowool",
    "songId": "zattou-bokura-no-machi"
  },
  "969": {
    "classicId": "machikado-mazoku",
    "characterId": "umiri-yahata",
    "coverId": "failed-princesses",
    "quoteId": "nyamu-yuutenji",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "kagu-iro",
    "silhouetteId": "queen-velverosa",
    "songId": "other-side-of-wall"
  },
  "970": {
    "classicId": "tropical-fish",
    "characterId": "yuu-koito",
    "coverId": "bang-dream",
    "quoteId": "suzu-suzukaze",
    "emojiId": "d4dj",
    "shipId": "hinako-asahi",
    "silhouetteId": "haru-ichinose",
    "songId": "umapyoi-densetsu"
  },
  "971": {
    "classicId": "the-third-party",
    "characterId": "chisato-nishikigi",
    "coverId": "love-live-nijigasaki",
    "quoteId": "yukina-minato",
    "emojiId": "bang-dream",
    "shipId": "aya-chisato",
    "silhouetteId": "homura-akemi",
    "songId": "tenshi-ni-fureta-yo"
  },
  "972": {
    "classicId": "always-human",
    "characterId": "kita-ikuyo",
    "coverId": "vtuber-legend",
    "quoteId": "momo-minamoto",
    "emojiId": "assault-lily-league",
    "shipId": "chidori-nanoha",
    "silhouetteId": "da-kyeong",
    "songId": "hikari-no-senritsu"
  },
  "973": {
    "classicId": "handsome-girl-and-sheltered-girl",
    "characterId": "emma-night-owls",
    "coverId": "assault-lily",
    "quoteId": "yukari-akiyama",
    "emojiId": "yuuki-yuuna",
    "shipId": "eveaoi",
    "silhouetteId": "nijika-ijichi",
    "songId": "serendipity-flip"
  },
  "974": {
    "classicId": "how-do-we-relationship",
    "characterId": "mejiro-mcqueen",
    "coverId": "inugami-nekoyama",
    "quoteId": "momoka-kawaragi",
    "emojiId": "girls-last-tour",
    "shipId": "hanabi-konomi",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "kimi-ni-aeta-hi"
  },
  "975": {
    "classicId": "harukana-receive",
    "characterId": "yachiyo-tsukimi",
    "coverId": "sono-hanabira",
    "quoteId": "yui-yamada",
    "emojiId": "d4dj",
    "shipId": "saeko-miwa",
    "silhouetteId": "arisa-ichigaya",
    "songId": "synchrogazer"
  },
  "976": {
    "classicId": "destroy-it-all-and-love-me-in-hell",
    "characterId": "euphyllia-magenta",
    "coverId": "d4dj",
    "quoteId": "haruka-murakami",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "juhee-yeowool",
    "silhouetteId": "mitsuki-yano",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "977": {
    "classicId": "sakura-trick",
    "characterId": "malori-crow",
    "coverId": "roll-over-and-die",
    "quoteId": "haruka-takayama",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "saeko-miwa",
    "silhouetteId": "kaguya-cosmic",
    "songId": "zattou-bokura-no-machi"
  },
  "978": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "ayumu-uehara",
    "coverId": "after-hours",
    "quoteId": "kaoru-seta",
    "emojiId": "how-do-we-relationship",
    "shipId": "luo-xinyue",
    "silhouetteId": "shiina-kakure",
    "songId": "dream-solister"
  },
  "979": {
    "classicId": "the-executioner-and-her-way-of-life",
    "characterId": "tokaku-azuma",
    "coverId": "bang-dream-pico",
    "quoteId": "yuko-yoshida",
    "emojiId": "kakegurui",
    "shipId": "uta-ayaka",
    "silhouetteId": "kaoru-seta",
    "songId": "snow-halation"
  },
  "980": {
    "classicId": "machikado-mazoku",
    "characterId": "yuu-koito",
    "coverId": "cheerful-amnesia",
    "quoteId": "misa-utsushicha",
    "emojiId": "new-game",
    "shipId": "hinata-mikage",
    "silhouetteId": "minato-asano",
    "songId": "memories-comic-girls"
  },
  "981": {
    "classicId": "dear-my-teacher",
    "characterId": "ritsu-tainaka",
    "coverId": "show-me-your-bust",
    "quoteId": "uika-misumi",
    "emojiId": "magirevo",
    "shipId": "miho-yukari",
    "silhouetteId": "sophie-twilight",
    "songId": "kimi-ni-aeta-hi"
  },
  "982": {
    "classicId": "mygo",
    "characterId": "chisato-nishikigi",
    "coverId": "futarigurashi",
    "quoteId": "haruka-murakami",
    "emojiId": "k-on",
    "shipId": "angeprin",
    "silhouetteId": "akane-maekawa",
    "songId": "sakura-skip"
  },
  "983": {
    "classicId": "catulus-syndrome",
    "characterId": "eli-ayase",
    "coverId": "saeki-sayaka",
    "quoteId": "rin-umineko",
    "emojiId": "assault-lily",
    "shipId": "mitsu",
    "silhouetteId": "sayo-hikawa",
    "songId": "azalea-citrus"
  },
  "984": {
    "classicId": "vexations-of-a-shut-in-vampire",
    "characterId": "yuu-koito",
    "coverId": "kimi-ga-shinu-made",
    "quoteId": "misaki-okusawa",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "meiyuzu",
    "silhouetteId": "kyoko-sakura",
    "songId": "my-dream-girls"
  },
  "985": {
    "classicId": "brave-witches",
    "characterId": "sayaka-miki",
    "coverId": "sora-haena",
    "quoteId": "tokai-teio",
    "emojiId": "love-live-sip",
    "shipId": "hinatanoa",
    "silhouetteId": "suzu-suzukaze",
    "songId": "follow-your-arrows"
  },
  "986": {
    "classicId": "the-executioner-and-her-way-of-life",
    "characterId": "sayaka-saeki",
    "coverId": "failed-princesses",
    "quoteId": "yuki-hanzomon",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "chuchunika",
    "silhouetteId": "taki-shiina",
    "songId": "synchrogazer"
  },
  "987": {
    "classicId": "run-away-with-me-girl",
    "characterId": "nana-daiba",
    "coverId": "beauty-and-the-beast-girl",
    "quoteId": "kiwi-araga",
    "emojiId": "flip-flappers",
    "shipId": "kanadia",
    "silhouetteId": "yoshika-miyafuji",
    "songId": "sakura-skip"
  },
  "988": {
    "classicId": "cheerful-amnesia",
    "characterId": "hinako-hanamura",
    "coverId": "watamote",
    "quoteId": "misa-utsushicha",
    "emojiId": "valkyrie-drive",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "harumi-taniguchi",
    "songId": "kimama-na-tenshi-tachi"
  },
  "989": {
    "classicId": "vanadis-heart",
    "characterId": "fine-vampire",
    "coverId": "failed-princesses",
    "quoteId": "momo-vampire",
    "emojiId": "bang-dream-pico",
    "shipId": "konatsukoyuki",
    "silhouetteId": "touko-nanami",
    "songId": "aozora-no-rhapsody"
  },
  "990": {
    "classicId": "hero-san",
    "characterId": "kumiko-oumae",
    "coverId": "yuri-seijin-naoko-san",
    "quoteId": "kiyashu-vanadis",
    "emojiId": "love-to-lie-angle",
    "shipId": "kotoumi",
    "silhouetteId": "sayaka-saeki",
    "songId": "blue-bud-netsuzou"
  },
  "991": {
    "classicId": "run-away-with-me-girl",
    "characterId": "mio-sakamoto",
    "coverId": "amanchu",
    "quoteId": "claudine-saijo",
    "emojiId": "manaria-friends",
    "shipId": "anontomo",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "hoshi-no-tabibito"
  },
  "992": {
    "classicId": "fragtime",
    "characterId": "momo-chiyoda",
    "coverId": "not-so-shoujo-love-story",
    "quoteId": "rapid-rabbit",
    "emojiId": "shino-to-ren",
    "shipId": "aya-chisato",
    "silhouetteId": "anisphia-wynn-palettia",
    "songId": "venus-line"
  },
  "993": {
    "classicId": "always-human",
    "characterId": "lee-yeowool",
    "coverId": "cross-ange",
    "quoteId": "rin-hoshizora",
    "emojiId": "nevermore-webtoon",
    "shipId": "soyosaki",
    "silhouetteId": "yuki-hanzomon",
    "songId": "irodori-jelee"
  },
  "994": {
    "classicId": "sono-hanabira",
    "characterId": "uika-misumi",
    "coverId": "re-stage-dream-days",
    "quoteId": "yuu-koito",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "hinatanoa",
    "silhouetteId": "hye-ji-serenade",
    "songId": "hikari-no-senritsu"
  },
  "995": {
    "classicId": "lapis-relights",
    "characterId": "fine-vampire",
    "coverId": "handsome-girl-and-sheltered-girl",
    "quoteId": "rin-hoshizora",
    "emojiId": "kill-me-now",
    "shipId": "emma-vivian",
    "silhouetteId": "kim-norae",
    "songId": "blue-bud-netsuzou"
  },
  "996": {
    "classicId": "mikagura-gakuen",
    "characterId": "junna-hoshimi",
    "coverId": "magirevo",
    "quoteId": "ai-narata",
    "emojiId": "yuruyuri",
    "shipId": "chidori-nanoha",
    "silhouetteId": "menou-virgin-road",
    "songId": "red-birthmark"
  },
  "997": {
    "classicId": "if-i-could-reach-you",
    "characterId": "emma-night-owls",
    "coverId": "show-me-your-bust",
    "quoteId": "yuzu-konohana",
    "emojiId": "new-game",
    "shipId": "karehika",
    "silhouetteId": "princess-charlotte",
    "songId": "sacred-world"
  },
  "998": {
    "classicId": "ano-koro-no-aoi-hoshi",
    "characterId": "kyoko-toshino",
    "coverId": "saki",
    "quoteId": "aya-oosawa",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "yoojin-hyeji",
    "silhouetteId": "hinata-hoshino",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "999": {
    "classicId": "her-tale-of-shim-chong",
    "characterId": "yuzu-aihara",
    "coverId": "cross-ange",
    "quoteId": "mashiro-komiyama",
    "emojiId": "manaria-friends",
    "shipId": "kumiko-reina",
    "silhouetteId": "kyoko-toshino",
    "songId": "red-birthmark"
  },
  "1000": {
    "classicId": "asteroid-in-love",
    "characterId": "akari-amano",
    "coverId": "madoka-magica",
    "quoteId": "yuu-sonoda",
    "emojiId": "love-doctor",
    "shipId": "anontomo",
    "silhouetteId": "erika-kizaki",
    "songId": "synchrogazer"
  },
  "1001": {
    "classicId": "saeki-sayaka",
    "characterId": "yuri-tamura",
    "coverId": "magirevo",
    "quoteId": "nina-iseri",
    "emojiId": "bocchi-the-rock",
    "shipId": "saya-hinako",
    "silhouetteId": "utena-hiiragi",
    "songId": "azalea-citrus"
  },
  "1002": {
    "classicId": "tamayura",
    "characterId": "satsuki-konohana",
    "coverId": "what-does-the-fox-say",
    "quoteId": "mei-aihara",
    "emojiId": "anemone-is-in-heat",
    "shipId": "tohrubayashi",
    "silhouetteId": "yachiyo-inugami",
    "songId": "shiny-days"
  },
  "1003": {
    "classicId": "assault-lily-fruits",
    "characterId": "shim-chong",
    "coverId": "white-angels-have-no-wings",
    "quoteId": "hilda-cross-ange",
    "emojiId": "lycoris-recoil",
    "shipId": "chuchunika",
    "silhouetteId": "chisato-shirasagi",
    "songId": "soushou-innocent"
  },
  "1004": {
    "classicId": "birdie-wing",
    "characterId": "vayuela-vanadis",
    "coverId": "anne-happy",
    "quoteId": "sophie-twilight",
    "emojiId": "witch-from-mercury",
    "shipId": "hifumiaoba",
    "silhouetteId": "princess-fine",
    "songId": "tenbin-fragtime"
  },
  "1005": {
    "classicId": "otherside-picnic",
    "characterId": "hifumi-takimoto",
    "coverId": "revue-starlight",
    "quoteId": "grea",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "renamai",
    "silhouetteId": "sorawo-kamikoshi",
    "songId": "magia-madoka"
  },
  "1006": {
    "classicId": "even-though-were-adults",
    "characterId": "moca-aoba",
    "coverId": "sailor-moon-s",
    "quoteId": "futaba-isurugi",
    "emojiId": "assault-lily",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "himari-kino",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "1007": {
    "classicId": "serenade",
    "characterId": "chidori-takamori",
    "coverId": "what-does-the-fox-say",
    "quoteId": "mitsuki-yano",
    "emojiId": "otherside-picnic",
    "shipId": "chito-yuuri",
    "silhouetteId": "ren",
    "songId": "starlog-illya"
  },
  "1008": {
    "classicId": "release-the-spyce",
    "characterId": "elsa-dorothy",
    "coverId": "how-do-we-relationship",
    "quoteId": "yuu-sonoda",
    "emojiId": "watamote",
    "shipId": "yvonelsa",
    "silhouetteId": "fine-vampire",
    "songId": "tenshi-ni-fureta-yo"
  },
  "1009": {
    "classicId": "sekai-de-ichiban-oppai",
    "characterId": "menou-virgin-road",
    "coverId": "kuzu-no-honkai",
    "quoteId": "kaori-asaka",
    "emojiId": "love-to-lie-angle",
    "shipId": "yuunamimori",
    "silhouetteId": "ajisai-sena",
    "songId": "valkyrie-drive-op"
  },
  "1010": {
    "classicId": "murcielago",
    "characterId": "lin-luxi",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "haruka-tenoh",
    "emojiId": "asagao-to-kase-san",
    "shipId": "anne-grea",
    "silhouetteId": "mami-tomoe",
    "songId": "asagao-kase"
  },
  "1011": {
    "classicId": "happy-sugar-life",
    "characterId": "yu-takasaki",
    "coverId": "kin-iro-movie",
    "quoteId": "yuki-hanzomon",
    "emojiId": "izetta",
    "shipId": "kumiko-reina",
    "silhouetteId": "ajisai-sena",
    "songId": "starlog-illya"
  },
  "1012": {
    "classicId": "cant-defy-the-lonely-girl",
    "characterId": "sakura-adachi",
    "coverId": "strike-witches",
    "quoteId": "shim-chong",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "yoshimio",
    "silhouetteId": "yuri-tamura",
    "songId": "asu-e-no-tobira"
  },
  "1013": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "fine-vampire",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "mio-sakamoto",
    "emojiId": "sakura-trick",
    "shipId": "uika-saki",
    "silhouetteId": "mary-saotome",
    "songId": "flip-flappers-ed"
  },
  "1014": {
    "classicId": "girls-band-cry",
    "characterId": "illyasviel-von-einzbern",
    "coverId": "catulus-syndrome",
    "quoteId": "harumi-taniguchi",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "mitsu",
    "silhouetteId": "kasuga-totoko",
    "songId": "alive-lycoris"
  },
  "1015": {
    "classicId": "watanare",
    "characterId": "kiyashu-vanadis",
    "coverId": "bocchi-the-rock",
    "quoteId": "yori-asanagi",
    "emojiId": "bloom-into-you",
    "shipId": "yuu-atori",
    "silhouetteId": "rapid-rabbit",
    "songId": "go-go-maniac"
  },
  "1016": {
    "classicId": "otherside-picnic",
    "characterId": "mirei-shikishima",
    "coverId": "mayonaka-punch",
    "quoteId": "hinako-yaotose",
    "emojiId": "watamote",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "rin-shima",
    "songId": "asu-e-no-tobira"
  },
  "1017": {
    "classicId": "futaribeya",
    "characterId": "kaguya-cosmic",
    "coverId": "lily-love",
    "quoteId": "hinata-hoshino",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "chikariko",
    "silhouetteId": "sorawo-kamikoshi",
    "songId": "follow-your-arrows"
  },
  "1018": {
    "classicId": "shine-post",
    "characterId": "sorawo-kamikoshi",
    "coverId": "sora-haena",
    "quoteId": "setsuna-yuki",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "haruyuu",
    "silhouetteId": "miyu-edelfelt",
    "songId": "machikado-tangent"
  },
  "1019": {
    "classicId": "night-owls-and-summer-skies",
    "characterId": "euphyllia-magenta",
    "coverId": "saki",
    "quoteId": "shijima-tsukishima",
    "emojiId": "bang-dream",
    "shipId": "bocchiku",
    "silhouetteId": "tomori-takamatsu",
    "songId": "irodori-jelee"
  },
  "1020": {
    "classicId": "saki",
    "characterId": "nanami-oda",
    "coverId": "school-zone-girls",
    "quoteId": "takina-inoue",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "luo-xinyue",
    "silhouetteId": "illyasviel-von-einzbern",
    "songId": "mayoiuta"
  },
  "1021": {
    "classicId": "fuzoroi-no-renri",
    "characterId": "himari-kino",
    "coverId": "blue-reflection-ray",
    "quoteId": "yori-asanagi",
    "emojiId": "uma-musume",
    "shipId": "anontomo",
    "silhouetteId": "komichi-akebi",
    "songId": "starlog-illya"
  },
  "1022": {
    "classicId": "hibike-euphonium",
    "characterId": "sorawo-kamikoshi",
    "coverId": "hina-logi",
    "quoteId": "saki-miyanaga",
    "emojiId": "flip-flappers",
    "shipId": "ginkure",
    "silhouetteId": "ren",
    "songId": "sacred-world"
  },
  "1023": {
    "classicId": "hana-ni-arashi",
    "characterId": "lu-nan",
    "coverId": "kiss-and-white-lily",
    "quoteId": "vivian-night-owls",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "mashiruri",
    "silhouetteId": "umi-sonoda",
    "songId": "arc-en-ciel"
  },
  "1024": {
    "classicId": "cheerful-amnesia",
    "characterId": "hitori-gotoh",
    "coverId": "nevermore-webtoon",
    "quoteId": "rapid-rabbit",
    "emojiId": "nevermore-webtoon",
    "shipId": "kaoru-chisato",
    "silhouetteId": "komichi-akebi",
    "songId": "miracle-rush"
  },
  "1025": {
    "classicId": "love-live-superstar",
    "characterId": "anon-chihaya",
    "coverId": "pulse",
    "quoteId": "io-utsushicha",
    "emojiId": "anemone-is-in-heat",
    "shipId": "yvonelsa",
    "silhouetteId": "misuzu-moritani",
    "songId": "mayoiuta"
  },
  "1026": {
    "classicId": "im-in-love-with-the-villainess",
    "characterId": "lu-nan",
    "coverId": "i-married-my-best-friend",
    "quoteId": "kyoko-sakura",
    "emojiId": "serenade",
    "shipId": "kumiko-reina",
    "silhouetteId": "yumeko-jabami",
    "songId": "kimi-ni-furete"
  },
  "1027": {
    "classicId": "sabagebu",
    "characterId": "chisato-nishikigi",
    "coverId": "night-owls-and-summer-skies",
    "quoteId": "cocona",
    "emojiId": "fragtime",
    "shipId": "rinnade",
    "silhouetteId": "hanayo-koizumi",
    "songId": "zattou-bokura-no-machi"
  },
  "1028": {
    "classicId": "mage-and-demon-queen",
    "characterId": "hibiki-sugawa",
    "coverId": "world-dai-star",
    "quoteId": "hina-gbc",
    "emojiId": "bocchi-the-rock",
    "shipId": "hinata-mikage",
    "silhouetteId": "momo-vampire",
    "songId": "seishun-complex"
  },
  "1029": {
    "classicId": "bad-girl",
    "characterId": "hanayo-koizumi",
    "coverId": "comic-girls",
    "quoteId": "madoka-kaname",
    "emojiId": "sakura-trick",
    "shipId": "aniseuphie",
    "silhouetteId": "chris-yukine",
    "songId": "serendipity-flip"
  },
  "1030": {
    "classicId": "mygo",
    "characterId": "raana-kaname",
    "coverId": "maria-holic",
    "quoteId": "maho-akashi",
    "emojiId": "superwomen-in-love",
    "shipId": "kourin",
    "silhouetteId": "mary-saotome",
    "songId": "magia-madoka"
  },
  "1031": {
    "classicId": "tropical-fish",
    "characterId": "hinako-uno",
    "coverId": "vanadis-heart",
    "quoteId": "mashiro-komiyama",
    "emojiId": "hello-melancholic",
    "shipId": "fuu-mashi",
    "silhouetteId": "minato-asano",
    "songId": "sacred-world"
  },
  "1032": {
    "classicId": "tsubame-tip-off",
    "characterId": "jung-era",
    "coverId": "long-awaited-feelings",
    "quoteId": "arisa-ichigaya",
    "emojiId": "green-tea-bitch",
    "shipId": "sulemio",
    "silhouetteId": "yukina-minato",
    "songId": "valkyrie-drive-op"
  },
  "1033": {
    "classicId": "valkyrie-drive",
    "characterId": "lynn-pulse",
    "coverId": "symphogear",
    "quoteId": "seon-hwa",
    "emojiId": "hana-ni-arashi",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "nozomi-tojo",
    "songId": "alive-lycoris"
  },
  "1034": {
    "classicId": "my-food-seems-to-be-very-cute",
    "characterId": "hime-shiraki",
    "coverId": "green-tea-bitch",
    "quoteId": "hilda-cross-ange",
    "emojiId": "girls-last-tour",
    "shipId": "himemitsuki",
    "silhouetteId": "sayaka-saeki",
    "songId": "my-dream-girls"
  },
  "1035": {
    "classicId": "run-away-with-me-girl",
    "characterId": "momo-chiyoda",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "umika-konohoshi",
    "emojiId": "watanare",
    "shipId": "nanaki-kanade",
    "silhouetteId": "hinako-uno",
    "songId": "machikado-tangent"
  },
  "1036": {
    "classicId": "green-tea-bitch",
    "characterId": "yori-asanagi",
    "coverId": "bang-dream",
    "quoteId": "kaoruko-hanayagi",
    "emojiId": "the-summer-you-were-there",
    "shipId": "mizore-nozomi",
    "silhouetteId": "chris-yukine",
    "songId": "kimi-ni-furete"
  },
  "1037": {
    "classicId": "getting-to-know-grace",
    "characterId": "kumiko-oumae",
    "coverId": "cheerful-amnesia",
    "quoteId": "anne-manaria",
    "emojiId": "magirevo",
    "shipId": "saeko-miwa",
    "silhouetteId": "yachiyo-tsukimi",
    "songId": "ano-mori-de-matteru"
  },
  "1038": {
    "classicId": "love-live-sip",
    "characterId": "sora-honda",
    "coverId": "baili-jin",
    "quoteId": "mimi-mimily",
    "emojiId": "assault-lily-league",
    "shipId": "akebi-erika",
    "silhouetteId": "kim-norae",
    "songId": "other-side-of-wall"
  },
  "1039": {
    "classicId": "baili-jin",
    "characterId": "touko-nanami",
    "coverId": "machikado-mazoku",
    "quoteId": "moca-aoba",
    "emojiId": "fluttering-feelings",
    "shipId": "karehika",
    "silhouetteId": "menou-virgin-road",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "1040": {
    "classicId": "chou-kaguya-hime",
    "characterId": "setsuna-yuki",
    "coverId": "catulus-syndrome",
    "quoteId": "grea-manaria",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "chito-yuuri",
    "silhouetteId": "momo-chiyoda",
    "songId": "machikado-tangent"
  },
  "1041": {
    "classicId": "watanare",
    "characterId": "yuri-tamura",
    "coverId": "straight-girl-trap",
    "quoteId": "tokai-teio",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "juhee-yeowool",
    "silhouetteId": "grea",
    "songId": "shiny-days"
  },
  "1042": {
    "classicId": "our-wonderful-days",
    "characterId": "ayumu-uehara",
    "coverId": "white-angels-have-no-wings",
    "quoteId": "aoba-suzukaze",
    "emojiId": "sailor-moon-s",
    "shipId": "takitomo",
    "silhouetteId": "haruka-tenoh",
    "songId": "kimi-ni-furete"
  },
  "1043": {
    "classicId": "my-girlfriends-not-here-today",
    "characterId": "tohru",
    "coverId": "i-love-amy",
    "quoteId": "kano-yamanouchi",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "hibimiku",
    "silhouetteId": "chris-yukine",
    "songId": "irodori-jelee"
  },
  "1044": {
    "classicId": "yuri-seijin-naoko-san",
    "characterId": "mary-saotome",
    "coverId": "after-hours",
    "quoteId": "silence-suzuka",
    "emojiId": "manaria-friends",
    "shipId": "tomo-rupa",
    "silhouetteId": "eli-ayase",
    "songId": "venus-line"
  },
  "1045": {
    "classicId": "inugami-nekoyama",
    "characterId": "yuzu-aihara",
    "coverId": "otherside-picnic",
    "quoteId": "mizore-yoroizuka",
    "emojiId": "a-joyful-life",
    "shipId": "chuchunika",
    "silhouetteId": "chika-takami",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "1046": {
    "classicId": "whispering-you-a-love-song",
    "characterId": "aya-oosawa",
    "coverId": "saki",
    "quoteId": "mami-tomoe",
    "emojiId": "everyday-lily",
    "shipId": "shiina-mimi",
    "silhouetteId": "kiwi-araga",
    "songId": "irodori-jelee"
  },
  "1047": {
    "classicId": "yuri-is-my-job",
    "characterId": "tae-hanazono",
    "coverId": "adachi-and-shimamura",
    "quoteId": "mirei-shikishima",
    "emojiId": "chou-kaguya-hime",
    "shipId": "soyosaki",
    "silhouetteId": "miwa-inuzuka",
    "songId": "kimama-na-tenshi-tachi"
  },
  "1048": {
    "classicId": "ring-my-bell",
    "characterId": "sorawo-kamikoshi",
    "coverId": "a-joyful-life",
    "quoteId": "yachiyo-tsukimi",
    "emojiId": "symphogear",
    "shipId": "nao-kurumi",
    "silhouetteId": "hifumi-takimoto",
    "songId": "aozora-no-rhapsody"
  },
  "1049": {
    "classicId": "yuri-seijin-naoko-san",
    "characterId": "hibiki-tachibana",
    "coverId": "bang-dream-pico",
    "quoteId": "aya-oosawa",
    "emojiId": "ange-vierge",
    "shipId": "misa-io",
    "silhouetteId": "yuu-sonoda",
    "songId": "snow-halation"
  },
  "1050": {
    "classicId": "senran-kagura",
    "characterId": "illyasviel-von-einzbern",
    "coverId": "prisma-illya",
    "quoteId": "yoshika-miyafuji",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "hinata-mikage",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "alive-lycoris"
  },
  "1051": {
    "classicId": "harukana-receive",
    "characterId": "momo-minamoto",
    "coverId": "uma-musume",
    "quoteId": "harumi-taniguchi",
    "emojiId": "witch-from-mercury",
    "shipId": "tomoko-yuri",
    "silhouetteId": "kasuga-totoko",
    "songId": "hoshi-no-tabibito"
  },
  "1052": {
    "classicId": "akebi-chan",
    "characterId": "yuko-yoshida",
    "coverId": "tamako-market",
    "quoteId": "rin-umineko",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "kaoru-chisato",
    "silhouetteId": "moca-aoba",
    "songId": "hoshi-no-dialogue"
  },
  "1053": {
    "classicId": "train-to-the-end",
    "characterId": "tomoka-kase",
    "coverId": "cross-ange",
    "quoteId": "kureha-tsubaki",
    "emojiId": "k-on",
    "shipId": "nanajun",
    "silhouetteId": "mikage-futari",
    "songId": "asu-e-no-tobira"
  },
  "1054": {
    "classicId": "an-easy-introduction-to-love-triangles",
    "characterId": "kurumi-yoshizawa",
    "coverId": "a-joyful-life",
    "quoteId": "nagisa-ootsuki",
    "emojiId": "serenade",
    "shipId": "kanadia",
    "silhouetteId": "toriko-nishina",
    "songId": "tenshi-ni-fureta-yo"
  },
  "1055": {
    "classicId": "seiyuu-radio",
    "characterId": "ajisai-sena",
    "coverId": "green-tea-bitch",
    "quoteId": "hitori-gotoh",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "yoshimio",
    "silhouetteId": "honey-trap",
    "songId": "miracle-rush"
  },
  "1056": {
    "classicId": "shine-post",
    "characterId": "tomori-takamatsu",
    "coverId": "prisma-illya",
    "quoteId": "hinako-hanamura",
    "emojiId": "assault-lily",
    "shipId": "cocona-papika",
    "silhouetteId": "hinako-uno",
    "songId": "memories-comic-girls"
  },
  "1057": {
    "classicId": "hino-san-no-baka",
    "characterId": "koyuki-honami",
    "coverId": "vampeerz",
    "quoteId": "reina-kousaka",
    "emojiId": "citrus",
    "shipId": "utekiwi",
    "silhouetteId": "nagisa-ootsuki",
    "songId": "kimama-na-tenshi-tachi"
  },
  "1058": {
    "classicId": "destroy-it-all-and-love-me-in-hell",
    "characterId": "airi-sezaki",
    "coverId": "comic-girls",
    "quoteId": "ginko-yurishiro",
    "emojiId": "vanadis-heart",
    "shipId": "hinatanoa",
    "silhouetteId": "hifumi-takimoto",
    "songId": "dreamriser"
  },
  "1059": {
    "classicId": "opium-gl",
    "characterId": "kasumi-toyama",
    "coverId": "cross-ange",
    "quoteId": "mahiru-kouzuki",
    "emojiId": "sheep-princess",
    "shipId": "kaseyamada",
    "silhouetteId": "woori-bust",
    "songId": "guruguru-dj"
  },
  "1060": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "tomoko-kuroki",
    "coverId": "sekai-de-ichiban-oppai",
    "quoteId": "chika-takami",
    "emojiId": "prisma-illya",
    "shipId": "chidori-nanoha",
    "silhouetteId": "yumeko-jabami",
    "songId": "arc-en-ciel"
  },
  "1061": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "momo-minamoto",
    "coverId": "vampire-in-the-garden",
    "quoteId": "mashiro-komiyama",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "shijima-majime",
    "silhouetteId": "rin-toyama",
    "songId": "red-liberation"
  },
  "1062": {
    "classicId": "tropical-fish",
    "characterId": "yukina-minato",
    "coverId": "futarigurashi",
    "quoteId": "mel-pulse",
    "emojiId": "fragtime",
    "shipId": "misa-io",
    "silhouetteId": "seika-ijichi",
    "songId": "venus-line"
  },
  "1063": {
    "classicId": "lycoris-recoil",
    "characterId": "aki-wolf",
    "coverId": "urara-meirochou",
    "quoteId": "woori-bust",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "tomoko-yuri",
    "silhouetteId": "hanabi-natsuno",
    "songId": "seishun-complex"
  },
  "1064": {
    "classicId": "bocchi-the-rock",
    "characterId": "komichi-akebi",
    "coverId": "show-by-rock",
    "quoteId": "airi-sezaki",
    "emojiId": "sakura-trick",
    "shipId": "nomokasu",
    "silhouetteId": "kaori-asaka",
    "songId": "connect-madoka"
  },
  "1065": {
    "classicId": "hanayamata",
    "characterId": "shiori-oomi",
    "coverId": "konohana-kitan",
    "quoteId": "chris-yukine",
    "emojiId": "happy-sugar-life",
    "shipId": "nanami-yuuna",
    "silhouetteId": "umi-sonoda",
    "songId": "red-birthmark"
  },
  "1066": {
    "classicId": "non-non-biyori",
    "characterId": "ayaka-sakurai",
    "coverId": "always-human",
    "quoteId": "yukina-minato",
    "emojiId": "cross-ange",
    "shipId": "hifumiaoba",
    "silhouetteId": "kureha-tsubaki",
    "songId": "cross-ange-op1"
  },
  "1067": {
    "classicId": "kiniro-mosaic",
    "characterId": "rin-hoshizora",
    "coverId": "granbelm",
    "quoteId": "kurumi-yoshizawa",
    "emojiId": "flip-flappers",
    "shipId": "momo-yuki",
    "silhouetteId": "anon-chihaya",
    "songId": "cross-ange-op1"
  },
  "1068": {
    "classicId": "if-i-could-reach-you",
    "characterId": "claire-francois",
    "coverId": "what-does-the-fox-say",
    "quoteId": "rin-touyama",
    "emojiId": "the-summer-you-were-there",
    "shipId": "ayaka-sora",
    "silhouetteId": "hinata-futari",
    "songId": "venus-line"
  },
  "1069": {
    "classicId": "love-doctor",
    "characterId": "riko-sakurauchi",
    "coverId": "strike-witches",
    "quoteId": "nijika-ijichi",
    "emojiId": "girls-band-cry",
    "shipId": "harumatsu",
    "silhouetteId": "reina-kousaka",
    "songId": "kimi-ni-furete"
  },
  "1070": {
    "classicId": "i-love-amy",
    "characterId": "eli-ayase",
    "coverId": "adachi-and-shimamura",
    "quoteId": "menou-virgin-road",
    "emojiId": "soulmate-gl",
    "shipId": "cocona-papika",
    "silhouetteId": "kotori-minami",
    "songId": "red-liberation"
  },
  "1071": {
    "classicId": "tsubame-tip-off",
    "characterId": "aoba-suzukaze",
    "coverId": "tamako-market",
    "quoteId": "setsuna-yuki",
    "emojiId": "always-human",
    "shipId": "mashiruri",
    "silhouetteId": "nanase-natsume",
    "songId": "dreamriser"
  },
  "1072": {
    "classicId": "sekai-de-ichiban-oppai",
    "characterId": "kou-yagami",
    "coverId": "akebi-chan",
    "quoteId": "sayaka-saeki",
    "emojiId": "superwomen-in-love",
    "shipId": "anonsoyo",
    "silhouetteId": "tong-tong",
    "songId": "sakura-skip"
  },
  "1073": {
    "classicId": "please-bully-me-miss-villainess",
    "characterId": "koharu-tsurezure",
    "coverId": "assault-lily-fruits",
    "quoteId": "homura-akemi",
    "emojiId": "valkyrie-drive",
    "shipId": "miho-yukari",
    "silhouetteId": "yoshika-miyafuji",
    "songId": "my-dream-girls"
  },
  "1074": {
    "classicId": "hero-san",
    "characterId": "sakiko-togawa",
    "coverId": "anemone-is-in-heat",
    "quoteId": "kano-yamanouchi",
    "emojiId": "hello-melancholic",
    "shipId": "mel-lynn",
    "silhouetteId": "ayaka-shiraishi",
    "songId": "kimama-na-tenshi-tachi"
  },
  "1075": {
    "classicId": "yuuki-yuuna",
    "characterId": "anon-chihaya",
    "coverId": "tsubame-tip-off",
    "quoteId": "queen-velverosa",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "spesuzu",
    "silhouetteId": "tomoka-kase",
    "songId": "ano-mori-de-matteru"
  },
  "1076": {
    "classicId": "flip-flappers",
    "characterId": "tomo-ebizuka",
    "coverId": "ring-my-bell",
    "quoteId": "yoo-jin-serenade",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "mel-lynn",
    "silhouetteId": "michiru-kaioh",
    "songId": "serendipity-flip"
  },
  "1077": {
    "classicId": "anemone-is-in-heat",
    "characterId": "junna-hoshimi",
    "coverId": "manaria-friends",
    "quoteId": "sayo-hikawa",
    "emojiId": "green-tea-bitch",
    "shipId": "illya-miyu",
    "silhouetteId": "mashiro-kyou-kano",
    "songId": "haruhikage"
  },
  "1078": {
    "classicId": "ano-koro-no-aoi-hoshi",
    "characterId": "nanami-oda",
    "coverId": "pulse",
    "quoteId": "hifumi-takimoto",
    "emojiId": "adachi-and-shimamura",
    "shipId": "cocona-papika",
    "silhouetteId": "yuu-akeuchi",
    "songId": "one-room-sugar-life"
  },
  "1079": {
    "classicId": "crown-handler",
    "characterId": "kim-norae",
    "coverId": "gochuumon-wa-usagi",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "bang-dream",
    "shipId": "era-yoonsung",
    "silhouetteId": "yvonne-smollett",
    "songId": "sakura-skip"
  },
  "1080": {
    "classicId": "wataten-movie",
    "characterId": "izetta-witch",
    "coverId": "destroy-it-all-and-love-me-in-hell",
    "quoteId": "mei-aihara",
    "emojiId": "watamote",
    "shipId": "ange-hilda",
    "silhouetteId": "kureha-tsubaki",
    "songId": "haruhikage"
  },
  "1081": {
    "classicId": "dear-my-teacher",
    "characterId": "michiru-kaioh",
    "coverId": "hina-logi",
    "quoteId": "miyu-edelfelt",
    "emojiId": "tamen-de-gushi",
    "shipId": "maria-lan",
    "silhouetteId": "chito-glt",
    "songId": "eternal-eternity"
  },
  "1082": {
    "classicId": "anemone-is-in-heat",
    "characterId": "chisato-nishikigi",
    "coverId": "straight-girl-trap",
    "quoteId": "makoto-shimizu",
    "emojiId": "senran-kagura",
    "shipId": "tokaku-haru",
    "silhouetteId": "aya-oosawa",
    "songId": "hoshi-to-hana"
  },
  "1083": {
    "classicId": "blooming-sequence",
    "characterId": "yuni-asahina",
    "coverId": "shimeji-simulation",
    "quoteId": "shiori-oomi",
    "emojiId": "sailor-moon-s",
    "shipId": "mayakuro",
    "silhouetteId": "miwa-inuzuka",
    "songId": "flip-flappers-ed"
  },
  "1084": {
    "classicId": "chuunibyou",
    "characterId": "yuri-tamura",
    "coverId": "selection-project",
    "quoteId": "maya-tendo",
    "emojiId": "citrus",
    "shipId": "nanaki-kanade",
    "silhouetteId": "princess-fine",
    "songId": "asagao-kase"
  },
  "1085": {
    "classicId": "qualia-the-purple",
    "characterId": "chisato-nishikigi",
    "coverId": "uma-musume",
    "quoteId": "miwa-inuzuka",
    "emojiId": "vampire-in-the-garden",
    "shipId": "utekiwi",
    "silhouetteId": "rin-toyama",
    "songId": "follow-your-arrows"
  },
  "1086": {
    "classicId": "beauty-and-the-beast-girl",
    "characterId": "ayaka-sakurai",
    "coverId": "sheep-princess",
    "quoteId": "kaoruko-hanayagi",
    "emojiId": "our-wonderful-days",
    "shipId": "sayohina",
    "silhouetteId": "nanami-oda",
    "songId": "aozora-no-rhapsody"
  },
  "1087": {
    "classicId": "the-moon-on-a-rainy-night",
    "characterId": "lynn-pulse",
    "coverId": "what-does-the-fox-say",
    "quoteId": "ye-xing",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "sayakatouko",
    "silhouetteId": "mizore-yoroizuka",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "1088": {
    "classicId": "shinsekai-yori",
    "characterId": "shiori-oomi",
    "coverId": "futarigurashi",
    "quoteId": "sakiko-togawa",
    "emojiId": "how-do-we-relationship",
    "shipId": "sakinodoka",
    "silhouetteId": "sora-honda",
    "songId": "seishun-complex"
  },
  "1089": {
    "classicId": "new-game",
    "characterId": "lisa-imai",
    "coverId": "sheep-princess",
    "quoteId": "hinako-uno",
    "emojiId": "lycoris-recoil",
    "shipId": "nanami-yuuna",
    "silhouetteId": "yui-hirasawa",
    "songId": "soushou-innocent"
  },
  "1090": {
    "classicId": "regalia",
    "characterId": "yuki-hanzomon",
    "coverId": "bloom-into-you",
    "quoteId": "iroha-sakayori",
    "emojiId": "bang-dream-pico",
    "shipId": "hanabi-konomi",
    "silhouetteId": "asahi-satou",
    "songId": "won3chu-kissme"
  },
  "1091": {
    "classicId": "always-human",
    "characterId": "cha-yoonsung",
    "coverId": "days-of-love-at-seagull-villa",
    "quoteId": "fuuko-taki",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "lunan-yexing",
    "silhouetteId": "tsubasa-kazanari",
    "songId": "shiny-days"
  },
  "1092": {
    "classicId": "wataten-movie",
    "characterId": "ange-cross-ange",
    "coverId": "if-i-could-reach-you",
    "quoteId": "hinako-uno",
    "emojiId": "cross-ange",
    "shipId": "chidori-nanoha",
    "silhouetteId": "maria-vampire",
    "songId": "mayoiuta"
  },
  "1093": {
    "classicId": "adachi-and-shimamura",
    "characterId": "miku-kohinata",
    "coverId": "assault-lily-league",
    "quoteId": "rin-umineko",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "ginkure",
    "silhouetteId": "yuzu-aihara",
    "songId": "starlog-illya"
  },
  "1094": {
    "classicId": "lily-yy",
    "characterId": "mikage-futari",
    "coverId": "tamayura",
    "quoteId": "grea",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "ryoko-lapis",
    "silhouetteId": "ayumu-uehara",
    "songId": "snow-halation"
  },
  "1095": {
    "classicId": "love-doctor",
    "characterId": "ai-narata",
    "coverId": "shine-post",
    "quoteId": "nanoha-chiba",
    "emojiId": "anemone-is-in-heat",
    "shipId": "kasu-arisa",
    "silhouetteId": "euphyllia-magenta",
    "songId": "irodori-jelee"
  },
  "1096": {
    "classicId": "bad-thinking-diary",
    "characterId": "claire-francois",
    "coverId": "mygo",
    "quoteId": "nanami-oda",
    "emojiId": "mygo",
    "shipId": "cocona-papika",
    "silhouetteId": "haru-ichinose",
    "songId": "dreamriser"
  },
  "1097": {
    "classicId": "bad-girl",
    "characterId": "touko-nanami",
    "coverId": "re-stage-dream-days",
    "quoteId": "mimi-mimily",
    "emojiId": "symphogear",
    "shipId": "mitsu",
    "silhouetteId": "claire-francois",
    "songId": "asu-e-no-tobira"
  },
  "1098": {
    "classicId": "high-school-fleet",
    "characterId": "qiu-tong",
    "coverId": "serenade",
    "quoteId": "momo-minamoto",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "hanabi-konomi",
    "silhouetteId": "momo-chiyoda",
    "songId": "cross-ange-op1"
  },
  "1099": {
    "classicId": "lapis-relights",
    "characterId": "umi-sonoda",
    "coverId": "tsubame-tip-off",
    "quoteId": "momo-vampire",
    "emojiId": "flip-flappers",
    "shipId": "annabel-lenore",
    "silhouetteId": "suzu-suzukaze",
    "songId": "yuriyurararara"
  },
  "1100": {
    "classicId": "assault-lily",
    "characterId": "kano-yamanouchi",
    "coverId": "bocchi-the-rock",
    "quoteId": "maki-nishikino",
    "emojiId": "madoka-magica",
    "shipId": "momo-fine",
    "silhouetteId": "madam-baek",
    "songId": "azalea-citrus"
  },
  "1101": {
    "classicId": "love-live-nijigasaki",
    "characterId": "sakiko-togawa",
    "coverId": "cross-ange",
    "quoteId": "tomoko-kuroki",
    "emojiId": "hello-melancholic",
    "shipId": "dakyeong-seonhwa",
    "silhouetteId": "miorine-rembran",
    "songId": "arc-en-ciel"
  },
  "1102": {
    "classicId": "roll-over-and-die",
    "characterId": "suzu-nekoyama",
    "coverId": "show-by-rock",
    "quoteId": "nomoto-yuki",
    "emojiId": "happy-sugar-life",
    "shipId": "spesuzu",
    "silhouetteId": "vivian-night-owls",
    "songId": "connect-madoka"
  },
  "1103": {
    "classicId": "green-tea-bitch",
    "characterId": "momo-vampire",
    "coverId": "not-so-shoujo-love-story",
    "quoteId": "princess-fine",
    "emojiId": "kakegurui",
    "shipId": "misa-io",
    "silhouetteId": "kurumi-yoshizawa",
    "songId": "follow-your-arrows"
  },
  "1104": {
    "classicId": "fragtime",
    "characterId": "nina-iseri",
    "coverId": "blooming-sequence",
    "quoteId": "yukina-minato",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "konatsukoyuki",
    "silhouetteId": "izetta-witch",
    "songId": "yuriyurararara"
  },
  "1105": {
    "classicId": "kin-iro-movie",
    "characterId": "tomoko-kuroki",
    "coverId": "fragtime",
    "quoteId": "special-week",
    "emojiId": "mage-and-demon-queen",
    "shipId": "saeko-miwa",
    "silhouetteId": "elsa-dorothy",
    "songId": "kokoro-ni-tsubomi"
  },
  "1106": {
    "classicId": "wataten",
    "characterId": "mayumi-kodama",
    "coverId": "kitanai-kimi",
    "quoteId": "mel-pulse",
    "emojiId": "nevermore-webtoon",
    "shipId": "soyosaki",
    "silhouetteId": "mio-sakamoto",
    "songId": "shiny-days"
  },
  "1107": {
    "classicId": "machikado-mazoku",
    "characterId": "grea-manaria",
    "coverId": "anne-happy",
    "quoteId": "emma-night-owls",
    "emojiId": "flip-flappers",
    "shipId": "sumikanoko",
    "silhouetteId": "koyuki-honami",
    "songId": "flip-flappers-ed"
  },
  "1108": {
    "classicId": "kakegurui",
    "characterId": "junna-hoshimi",
    "coverId": "superwomen-in-love",
    "quoteId": "koharu-tsurezure",
    "emojiId": "love-doctor",
    "shipId": "shizukaori",
    "silhouetteId": "koyuki-honami",
    "songId": "red-liberation"
  },
  "1109": {
    "classicId": "my-food-seems-to-be-very-cute",
    "characterId": "kasumi-toyama",
    "coverId": "watamote",
    "quoteId": "seon-hwa",
    "emojiId": "k-on",
    "shipId": "mamori-mirei",
    "silhouetteId": "harumi-taniguchi",
    "songId": "hoshi-no-tabibito"
  },
  "1110": {
    "classicId": "wixoss",
    "characterId": "umiri-yahata",
    "coverId": "catulus-syndrome",
    "quoteId": "misuzu-moritani",
    "emojiId": "flip-flappers",
    "shipId": "hinatanoa",
    "silhouetteId": "nozomi-kasaki",
    "songId": "spicy-piece"
  },
  "1111": {
    "classicId": "toji-no-miko",
    "characterId": "setsuna-yuki",
    "coverId": "tropical-fish",
    "quoteId": "atori-mizutori",
    "emojiId": "love-to-lie-angle",
    "shipId": "hibimiku",
    "silhouetteId": "utada-uta",
    "songId": "eternal-eternity"
  },
  "1112": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "ritsu-tainaka",
    "coverId": "tsubame-tip-off",
    "quoteId": "makoto-shimizu",
    "emojiId": "love-doctor",
    "shipId": "shiina-mimi",
    "silhouetteId": "da-kyeong",
    "songId": "azalea-citrus"
  },
  "1113": {
    "classicId": "comic-girls",
    "characterId": "suzu-suzukaze",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "mahiru-kouzuki",
    "emojiId": "lycoris-recoil",
    "shipId": "takitomo",
    "silhouetteId": "han-juhee",
    "songId": "kokoro-ni-tsubomi"
  },
  "1114": {
    "classicId": "blue-reflection-ray",
    "characterId": "koyuki-honami",
    "coverId": "goodbye-my-rose-garden",
    "quoteId": "rin-toyama",
    "emojiId": "sakura-trick",
    "shipId": "sarasa-ai",
    "silhouetteId": "mimori-togo",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "1115": {
    "classicId": "citrus",
    "characterId": "shamiko",
    "coverId": "sabagebu",
    "quoteId": "miyu-edelfelt",
    "emojiId": "sailor-moon-s",
    "shipId": "yuni-nanase",
    "silhouetteId": "mimi-mimily",
    "songId": "my-dream-girls"
  },
  "1116": {
    "classicId": "whispering-you-a-love-song",
    "characterId": "shim-chong",
    "coverId": "lycoris-recollect",
    "quoteId": "menou-virgin-road",
    "emojiId": "sailor-moon-s",
    "shipId": "uika-saki",
    "silhouetteId": "komichi-akebi",
    "songId": "kimama-na-tenshi-tachi"
  },
  "1117": {
    "classicId": "hello-melancholic",
    "characterId": "moca-aoba",
    "coverId": "superwomen-in-love",
    "quoteId": "kita-ikuyo",
    "emojiId": "k-on",
    "shipId": "hibimiku",
    "silhouetteId": "takina-inoue",
    "songId": "venus-line"
  },
  "1118": {
    "classicId": "dear-my-teacher",
    "characterId": "raana-kaname",
    "coverId": "futarigurashi",
    "quoteId": "koyuki-honami",
    "emojiId": "akebi-chan",
    "shipId": "kaoru-chisato",
    "silhouetteId": "hilda-cross-ange",
    "songId": "follow-your-arrows"
  },
  "1119": {
    "classicId": "straight-girl-trap",
    "characterId": "jung-era",
    "coverId": "love-live-sunshine",
    "quoteId": "malori-crow",
    "emojiId": "assault-lily",
    "shipId": "sumikanoko",
    "silhouetteId": "nika-nanaura",
    "songId": "asu-e-no-tobira"
  },
  "1120": {
    "classicId": "madoka-magica",
    "characterId": "yui-funami",
    "coverId": "girls-und-panzer",
    "quoteId": "hitori-gotoh",
    "emojiId": "assault-lily-league",
    "shipId": "hibimiku",
    "silhouetteId": "sayaka-saeki",
    "songId": "snow-halation"
  },
  "1121": {
    "classicId": "harukana-receive",
    "characterId": "mami-tomoe",
    "coverId": "mage-and-demon-queen",
    "quoteId": "tae-hanazono",
    "emojiId": "citrus",
    "shipId": "lunan-yexing",
    "silhouetteId": "satsuki-konohana",
    "songId": "hoshi-to-hana"
  },
  "1122": {
    "classicId": "catch-these-hands",
    "characterId": "kokoro-tsurumaki",
    "coverId": "hana-to-hina",
    "quoteId": "umika-konohoshi",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "momo-fine",
    "silhouetteId": "mitsuki-koga",
    "songId": "himitsu-no-melody"
  },
  "1123": {
    "classicId": "otome-no-teikoku",
    "characterId": "satou-matsuzaka",
    "coverId": "jellyfish-cant-swim-in-the-night",
    "quoteId": "tae-hanazono",
    "emojiId": "asagao-to-kase-san",
    "shipId": "shiina-mimi",
    "silhouetteId": "aoi-amawashi",
    "songId": "kimi-no-gin-no-niwa"
  },
  "1124": {
    "classicId": "fluttering-feelings",
    "characterId": "hanayo-koizumi",
    "coverId": "asagao-to-kase-san",
    "quoteId": "subaru-awa",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "nana-yuki",
    "silhouetteId": "chidori-takamori",
    "songId": "guitar-loneliness"
  },
  "1125": {
    "classicId": "hina-logi",
    "characterId": "aoi-amawashi",
    "coverId": "girls-und-panzer",
    "quoteId": "rin-toyama",
    "emojiId": "bang-dream-pico",
    "shipId": "eveaoi",
    "silhouetteId": "ryo-yamada",
    "songId": "irodori-jelee"
  },
  "1126": {
    "classicId": "urara-meirochou",
    "characterId": "fuuko-taki",
    "coverId": "nevermore-webtoon",
    "quoteId": "asahi-satou",
    "emojiId": "always-human",
    "shipId": "yuiazu",
    "silhouetteId": "jung-era",
    "songId": "deal-with-the-devil"
  },
  "1127": {
    "classicId": "regalia",
    "characterId": "lu-nan",
    "coverId": "whispering-you-a-love-song",
    "quoteId": "koyuki-honami",
    "emojiId": "d4dj",
    "shipId": "ririyuyu",
    "silhouetteId": "sayo-hikawa",
    "songId": "yuriyurararara"
  },
  "1128": {
    "classicId": "shino-to-ren",
    "characterId": "hanayo-koizumi",
    "coverId": "lapis-relights",
    "quoteId": "sorawo-kamikoshi",
    "emojiId": "adachi-and-shimamura",
    "shipId": "jiho-woori",
    "silhouetteId": "hinako-yaotose",
    "songId": "sacred-world"
  },
  "1129": {
    "classicId": "flip-flappers",
    "characterId": "kikuri-hiroi",
    "coverId": "hino-san-no-baka",
    "quoteId": "kano-yamanouchi",
    "emojiId": "mage-and-demon-queen",
    "shipId": "ninomomo",
    "silhouetteId": "special-week",
    "songId": "tenbin-fragtime"
  },
  "1130": {
    "classicId": "fed-up-office-lady-villainess",
    "characterId": "tsubasa-kazanari",
    "coverId": "my-food-seems-to-be-very-cute",
    "quoteId": "cocona",
    "emojiId": "kitanai-kimi",
    "shipId": "tomo-rupa",
    "silhouetteId": "rinku-aimoto",
    "songId": "synchrogazer"
  },
  "1131": {
    "classicId": "madoka-magica",
    "characterId": "sun-jing",
    "coverId": "adachi-and-shimamura",
    "quoteId": "iroha-sakayori",
    "emojiId": "ring-my-bell",
    "shipId": "yuni-fuuko",
    "silhouetteId": "saki-kindaichi",
    "songId": "listen-htt"
  },
  "1132": {
    "classicId": "opium-gl",
    "characterId": "momo-vampire",
    "coverId": "hina-logi",
    "quoteId": "kano-yamanouchi",
    "emojiId": "serenade",
    "shipId": "sumikanoko",
    "silhouetteId": "kyoko-sakura",
    "songId": "cross-ange-op1"
  },
  "1133": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "hanabi-natsuno",
    "coverId": "lapis-relights",
    "quoteId": "grea",
    "emojiId": "anemone-is-in-heat",
    "shipId": "aniseuphie",
    "silhouetteId": "yuki-hanzomon",
    "songId": "shukufuku"
  },
  "1134": {
    "classicId": "soulmate-gl",
    "characterId": "silence-suzuka",
    "coverId": "nevermore-webtoon",
    "quoteId": "lin-luxi",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "momo-fine",
    "silhouetteId": "dia-kurosawa",
    "songId": "my-dream-girls"
  },
  "1135": {
    "classicId": "madoka-magica",
    "characterId": "kasuga-totoko",
    "coverId": "love-live-superstar",
    "quoteId": "yuni-asahina",
    "emojiId": "vampire-in-the-garden",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "tomori-takamatsu",
    "songId": "soushou-innocent"
  },
  "1136": {
    "classicId": "ride-or-die",
    "characterId": "tomoka-kase",
    "coverId": "prism-yuri",
    "quoteId": "euphyllia-magenta",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "nicomaki",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "himitsu-no-melody"
  },
  "1137": {
    "classicId": "anne-happy",
    "characterId": "rupa",
    "coverId": "love-live-sunshine",
    "quoteId": "tomori-takamatsu",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "momo-fine",
    "silhouetteId": "kaoru-seta",
    "songId": "alive-lycoris"
  },
  "1138": {
    "classicId": "mikagura-gakuen",
    "characterId": "qiu-tong",
    "coverId": "birdie-wing",
    "quoteId": "illyasviel-von-einzbern",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "yuni-fuuko",
    "silhouetteId": "mamori-tokonome",
    "songId": "irodori-jelee"
  },
  "1139": {
    "classicId": "utsushicha-damena-kao",
    "characterId": "nanami-oda",
    "coverId": "relationship-guidelines",
    "quoteId": "woori-bust",
    "emojiId": "asagao-to-kase-san",
    "shipId": "momo-yuki",
    "silhouetteId": "kanan-matsuura",
    "songId": "red-liberation"
  },
  "1140": {
    "classicId": "asagao-to-kase-san",
    "characterId": "haru-ichinose",
    "coverId": "failed-princesses",
    "quoteId": "kaguya-cosmic",
    "emojiId": "vanadis-heart",
    "shipId": "shijima-majime",
    "silhouetteId": "naoi-manaka",
    "songId": "mayoiuta"
  },
  "1141": {
    "classicId": "her-tale-of-shim-cheong",
    "characterId": "yoshika-miyafuji",
    "coverId": "love-to-lie-angle",
    "quoteId": "misa-utsushicha",
    "emojiId": "witch-from-mercury",
    "shipId": "misa-koko",
    "silhouetteId": "rupa",
    "songId": "starlog-illya"
  },
  "1142": {
    "classicId": "fluttering-feelings",
    "characterId": "nodoka-haramura",
    "coverId": "murcielago",
    "quoteId": "tomoka-kase",
    "emojiId": "new-game",
    "shipId": "ninomomo",
    "silhouetteId": "rupa",
    "songId": "ten-to-sen"
  },
  "1143": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "yori-asanagi",
    "coverId": "vampire-in-the-garden",
    "quoteId": "umika-konohoshi",
    "emojiId": "ring-my-bell",
    "shipId": "dakyeong-seonhwa",
    "silhouetteId": "seika-ijichi",
    "songId": "guitar-loneliness"
  },
  "1144": {
    "classicId": "chou-kaguya-hime",
    "characterId": "yu-takasaki",
    "coverId": "hibike-euphonium",
    "quoteId": "villhaze",
    "emojiId": "girls-band-cry",
    "shipId": "makoto-akane",
    "silhouetteId": "haruka-murakami",
    "songId": "aozora-no-rhapsody"
  },
  "1145": {
    "classicId": "catch-these-hands",
    "characterId": "lu-nan",
    "coverId": "even-though-were-adults",
    "quoteId": "chidori-takamori",
    "emojiId": "kageki-shojo",
    "shipId": "hinako-asahi",
    "silhouetteId": "saki-kindaichi",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "1146": {
    "classicId": "gokujo",
    "characterId": "seon-hwa",
    "coverId": "kimi-ga-shinu-made",
    "quoteId": "kyoko-sakura",
    "emojiId": "anemone-is-in-heat",
    "shipId": "anontomo",
    "silhouetteId": "mary-saotome",
    "songId": "asu-e-no-tobira"
  },
  "1147": {
    "classicId": "if-i-could-reach-you",
    "characterId": "sayaka-saeki",
    "coverId": "vexations-of-a-shut-in-vampire",
    "quoteId": "mitsuki-koga",
    "emojiId": "love-live-sip",
    "shipId": "saeko-miwa",
    "silhouetteId": "karen-aijo",
    "songId": "shiny-days"
  },
  "1148": {
    "classicId": "sabagebu",
    "characterId": "azusa-nakano",
    "coverId": "days-of-love-at-seagull-villa",
    "quoteId": "minato-asano",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "jiho-woori",
    "silhouetteId": "han-juhee",
    "songId": "serendipity-flip"
  },
  "1149": {
    "classicId": "please-bully-me-miss-villainess",
    "characterId": "momo-sheep",
    "coverId": "shine-post",
    "quoteId": "nanaki-fujishiro",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "era-yoonsung",
    "silhouetteId": "rin-toyama",
    "songId": "mayoiuta"
  },
  "1150": {
    "classicId": "kakegurui",
    "characterId": "mutsumi-wakaba",
    "coverId": "love-live-superstar",
    "quoteId": "satsuki-konohana",
    "emojiId": "long-awaited-feelings",
    "shipId": "soyosaki",
    "silhouetteId": "sun-jing",
    "songId": "eternal-eternity"
  },
  "1151": {
    "classicId": "gakkou-gurashi",
    "characterId": "eli-ayase",
    "coverId": "superwomen-in-love",
    "quoteId": "shamiko",
    "emojiId": "fragtime",
    "shipId": "lunan-yexing",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "flip-flappers-ed"
  },
  "1152": {
    "classicId": "blooming-sequence",
    "characterId": "mio-sakamoto",
    "coverId": "yuuki-yuuna",
    "quoteId": "hinako-yaotose",
    "emojiId": "new-game",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "yui-yamada",
    "songId": "dreamriser"
  },
  "1153": {
    "classicId": "cheerful-amnesia",
    "characterId": "kiyashu-vanadis",
    "coverId": "days-of-love-at-seagull-villa",
    "quoteId": "erika-kizaki",
    "emojiId": "a-joyful-life",
    "shipId": "tomo-rupa",
    "silhouetteId": "shim-chong",
    "songId": "dream-solister"
  },
  "1154": {
    "classicId": "yuuki-yuuna",
    "characterId": "xiao-lan-wolf",
    "coverId": "vividred-operation",
    "quoteId": "hifumi-takimoto",
    "emojiId": "ring-my-bell",
    "shipId": "adachishima",
    "silhouetteId": "tsubasa-kazanari",
    "songId": "ano-mori-de-matteru"
  },
  "1155": {
    "classicId": "yuuki-yuuna",
    "characterId": "chisato-shirasagi",
    "coverId": "toji-no-miko",
    "quoteId": "tokaku-azuma",
    "emojiId": "flip-flappers",
    "shipId": "komavill",
    "silhouetteId": "mashiro-komiyama",
    "songId": "aozora-no-rhapsody"
  },
  "1156": {
    "classicId": "fragtime",
    "characterId": "kita-ikuyo",
    "coverId": "otherside-picnic",
    "quoteId": "renako-amaori",
    "emojiId": "yuruyuri",
    "shipId": "shimbaek",
    "silhouetteId": "yukina-minato",
    "songId": "soushou-innocent"
  },
  "1157": {
    "classicId": "superwomen-in-love",
    "characterId": "mayumi-kodama",
    "coverId": "shinsekai-yori",
    "quoteId": "ai-narata",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "nijiryo",
    "silhouetteId": "akari-amano",
    "songId": "zattou-bokura-no-machi"
  },
  "1158": {
    "classicId": "kageki-shojo",
    "characterId": "mikage-futari",
    "coverId": "senran-kagura",
    "quoteId": "mitsuki-yano",
    "emojiId": "witch-from-mercury",
    "shipId": "ange-hilda",
    "silhouetteId": "honoka-kosaka",
    "songId": "machikado-tangent"
  },
  "1159": {
    "classicId": "futarigurashi",
    "characterId": "malori-crow",
    "coverId": "lapis-relights",
    "quoteId": "yuu-koito",
    "emojiId": "asagao-to-kase-san",
    "shipId": "maria-lan",
    "silhouetteId": "da-kyeong",
    "songId": "soushou-innocent"
  },
  "1160": {
    "classicId": "my-sisters-best-friend",
    "characterId": "hime-shiraki",
    "coverId": "getting-to-know-grace",
    "quoteId": "hinata-futari",
    "emojiId": "flip-flappers",
    "shipId": "spesuzu",
    "silhouetteId": "iroha-sakayori",
    "songId": "zattou-bokura-no-machi"
  },
  "1161": {
    "classicId": "the-executioner-and-her-way-of-life",
    "characterId": "sun-jing",
    "coverId": "love-live-sunshine",
    "quoteId": "shijima-tsukishima",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "momo-aki",
    "silhouetteId": "nina-iseri",
    "songId": "guruguru-dj"
  },
  "1162": {
    "classicId": "lycoris-recollect",
    "characterId": "reina-kousaka",
    "coverId": "kanojo-to-himitsu",
    "quoteId": "kaoru-seta",
    "emojiId": "witch-from-mercury",
    "shipId": "annabel-lenore",
    "silhouetteId": "kyoko-toshino",
    "songId": "magia-madoka"
  },
  "1163": {
    "classicId": "whispering-you-a-love-song",
    "characterId": "claire-francois",
    "coverId": "tamako-market",
    "quoteId": "kou-yagami",
    "emojiId": "futari-monologue",
    "shipId": "shiina-mimi",
    "silhouetteId": "mayumi-kodama",
    "songId": "shiny-days"
  },
  "1164": {
    "classicId": "fed-up-office-lady-villainess",
    "characterId": "saeko-tsutsumi",
    "coverId": "sabagebu",
    "quoteId": "nozomi-kasaki",
    "emojiId": "netsuzou-trap",
    "shipId": "kyosaya",
    "silhouetteId": "tokaku-azuma",
    "songId": "starlog-illya"
  },
  "1165": {
    "classicId": "futaribeya",
    "characterId": "lee-yeowool",
    "coverId": "an-easy-introduction-to-love-triangles",
    "quoteId": "hilda-cross-ange",
    "emojiId": "love-to-lie-angle",
    "shipId": "hinako-asahi",
    "silhouetteId": "tomoko-kuroki",
    "songId": "yuriyurararara"
  },
  "1166": {
    "classicId": "wataten",
    "characterId": "kiyashu-vanadis",
    "coverId": "tsubame-tip-off",
    "quoteId": "mafuyu-tsurezure",
    "emojiId": "izetta",
    "shipId": "renamai",
    "silhouetteId": "kumiko-oumae",
    "songId": "kimi-ni-aeta-hi"
  },
  "1167": {
    "classicId": "hino-san-no-baka",
    "characterId": "rae-taylor",
    "coverId": "my-sisters-best-friend",
    "quoteId": "anisphia-wynn-palettia",
    "emojiId": "fragtime",
    "shipId": "misa-koko",
    "silhouetteId": "himari-kino",
    "songId": "dream-solister"
  },
  "1168": {
    "classicId": "fed-up-office-lady-villainess",
    "characterId": "mejiro-mcqueen",
    "coverId": "her-tale-of-shim-cheong",
    "quoteId": "tomo-ebizuka",
    "emojiId": "mygo",
    "shipId": "shino-ren",
    "silhouetteId": "saki-miyanaga",
    "songId": "soushou-innocent"
  },
  "1169": {
    "classicId": "kuzu-no-honkai",
    "characterId": "haruka-takayama",
    "coverId": "action-heroine-cheer-fruits",
    "quoteId": "akane-maekawa",
    "emojiId": "cross-ange",
    "shipId": "chito-yuuri",
    "silhouetteId": "shino",
    "songId": "memories-comic-girls"
  },
  "1170": {
    "classicId": "my-food-seems-to-be-very-cute",
    "characterId": "momo-minamoto",
    "coverId": "lily-love",
    "quoteId": "arisa-ichigaya",
    "emojiId": "chou-kaguya-hime",
    "shipId": "kagu-iro",
    "silhouetteId": "nodoka-haramura",
    "songId": "synchrogazer"
  },
  "1171": {
    "classicId": "days-of-love-at-seagull-villa",
    "characterId": "suzu-suzukaze",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "ai-narata",
    "emojiId": "uma-musume",
    "shipId": "luo-xinyue",
    "silhouetteId": "yukari-akiyama",
    "songId": "hikari-no-senritsu"
  },
  "1172": {
    "classicId": "her-tale-of-shim-cheong",
    "characterId": "yuu-koito",
    "coverId": "sabagebu",
    "quoteId": "renako-amaori",
    "emojiId": "our-wonderful-days",
    "shipId": "kourin",
    "silhouetteId": "mary-saotome",
    "songId": "valkyrie-drive-op"
  },
  "1173": {
    "classicId": "harukana-receive",
    "characterId": "yuu-sonoda",
    "coverId": "hana-to-hina",
    "quoteId": "yuu-yuutani",
    "emojiId": "watanare",
    "shipId": "kanadia",
    "silhouetteId": "ran-mitake",
    "songId": "aozora-no-rhapsody"
  },
  "1174": {
    "classicId": "always-human",
    "characterId": "yuki-kyou-kano",
    "coverId": "semelparous",
    "quoteId": "yuko-yoshida",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "yuiazu",
    "silhouetteId": "mayumi-kodama",
    "songId": "my-dream-girls"
  },
  "1175": {
    "classicId": "yama-no-susume",
    "characterId": "lu-nan",
    "coverId": "gochuumon-wa-usagi",
    "quoteId": "annabel-lee",
    "emojiId": "moonlight-garden",
    "shipId": "utekiwi",
    "silhouetteId": "kanade-kurokawa",
    "songId": "cross-ange-op1"
  },
  "1176": {
    "classicId": "ange-vierge",
    "characterId": "ayumu-uehara",
    "coverId": "asagao-to-kase-san",
    "quoteId": "yui-hirasawa",
    "emojiId": "a-joyful-life",
    "shipId": "chikariko",
    "silhouetteId": "han-juhee",
    "songId": "guitar-loneliness"
  },
  "1177": {
    "classicId": "a-joyful-life",
    "characterId": "yoo-jin-serenade",
    "coverId": "lily-love-2",
    "quoteId": "rin-umineko",
    "emojiId": "d4dj",
    "shipId": "soyosaki",
    "silhouetteId": "rin-toyama",
    "songId": "sakura-skip"
  },
  "1178": {
    "classicId": "gokujo",
    "characterId": "rin-umineko",
    "coverId": "my-food-looks-very-cute",
    "quoteId": "uika-misumi",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "rinpana",
    "silhouetteId": "atori-mizutori",
    "songId": "sacred-world"
  },
  "1179": {
    "classicId": "she-is-still-cute-today",
    "characterId": "mizore-yoroizuka",
    "coverId": "machikado-mazoku",
    "quoteId": "da-kyeong",
    "emojiId": "how-do-we-relationship",
    "shipId": "kourin",
    "silhouetteId": "mejiro-mcqueen",
    "songId": "soushou-innocent"
  },
  "1180": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "xiao-lan-wolf",
    "coverId": "prism-yuri",
    "quoteId": "elsa-dorothy",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "shino-ren",
    "silhouetteId": "kobayashi",
    "songId": "snow-halation"
  },
  "1181": {
    "classicId": "hana-ni-arashi",
    "characterId": "kaoru-seta",
    "coverId": "sekai-de-ichiban-oppai",
    "quoteId": "rupa",
    "emojiId": "senran-kagura",
    "shipId": "ayaka-sora",
    "silhouetteId": "takina-inoue",
    "songId": "follow-your-arrows"
  },
  "1182": {
    "classicId": "blue-reflection-ray",
    "characterId": "yuko-yoshida",
    "coverId": "utsushicha-damena-kao",
    "quoteId": "aoi-amawashi",
    "emojiId": "bang-dream",
    "shipId": "himayori",
    "silhouetteId": "nina-iseri",
    "songId": "haruhikage"
  },
  "1183": {
    "classicId": "murcielago",
    "characterId": "saki-miyanaga",
    "coverId": "gochuumon-wa-usagi",
    "quoteId": "shino",
    "emojiId": "netsuzou-trap",
    "shipId": "menou-akari",
    "silhouetteId": "sumika-chibana",
    "songId": "kimi-ni-furete"
  },
  "1184": {
    "classicId": "happy-sugar-life",
    "characterId": "reina-kousaka",
    "coverId": "world-dai-star",
    "quoteId": "rin-toyama",
    "emojiId": "manaria-friends",
    "shipId": "momo-yuki",
    "silhouetteId": "aya-maruyama",
    "songId": "shukufuku"
  },
  "1185": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "sayo-hikawa",
    "coverId": "pulse",
    "quoteId": "ange-cross-ange",
    "emojiId": "vanadis-heart",
    "shipId": "karehika",
    "silhouetteId": "lenore-nevermore",
    "songId": "serendipity-flip"
  },
  "1186": {
    "classicId": "everyday-lily",
    "characterId": "emma-night-owls",
    "coverId": "tropical-fish",
    "quoteId": "princess-fine",
    "emojiId": "bang-dream",
    "shipId": "nozoeli",
    "silhouetteId": "mel-pulse",
    "songId": "deal-with-the-devil"
  },
  "1187": {
    "classicId": "watanare",
    "characterId": "koyuki-honami",
    "coverId": "soulmate-gl",
    "quoteId": "raana-kaname",
    "emojiId": "serenade",
    "shipId": "misa-koko",
    "silhouetteId": "seika-ijichi",
    "songId": "asagao-kase"
  },
  "1188": {
    "classicId": "love-live-sip",
    "characterId": "suletta-mercury",
    "coverId": "murcielago",
    "quoteId": "homura-akemi",
    "emojiId": "cross-ange",
    "shipId": "emma-vivian",
    "silhouetteId": "hibiki-sugawa",
    "songId": "alive-lycoris"
  },
  "1189": {
    "classicId": "lycoris-recoil",
    "characterId": "mei-aihara",
    "coverId": "shinsekai-yori",
    "quoteId": "nodoka-haramura",
    "emojiId": "lycoris-recoil",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "woori-bust",
    "songId": "hikari-no-senritsu"
  },
  "1190": {
    "classicId": "serenade",
    "characterId": "minato-asano",
    "coverId": "futarigurashi",
    "quoteId": "cocona",
    "emojiId": "goodbye-my-rose-garden",
    "shipId": "kumiko-reina",
    "silhouetteId": "yuna-yuki",
    "songId": "asu-e-no-tobira"
  },
  "1191": {
    "classicId": "cant-defy-the-lonely-girl",
    "characterId": "kaguya-cosmic",
    "coverId": "my-sisters-best-friend",
    "quoteId": "touko-nanami",
    "emojiId": "kitanai-kimi",
    "shipId": "mitsu",
    "silhouetteId": "aki-wolf",
    "songId": "listen-htt"
  },
  "1192": {
    "classicId": "strike-witches",
    "characterId": "mimi-mimily",
    "coverId": "show-me-your-bust",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "sakura-trick",
    "shipId": "chuchunika",
    "silhouetteId": "lynn-pulse",
    "songId": "umapyoi-densetsu"
  },
  "1193": {
    "classicId": "shinsekai-yori",
    "characterId": "woori-bust",
    "coverId": "utsushicha-damena-kao",
    "quoteId": "yoshika-miyafuji",
    "emojiId": "moonlight-garden",
    "shipId": "kasu-arisa",
    "silhouetteId": "renako-amaori",
    "songId": "one-room-sugar-life"
  },
  "1194": {
    "classicId": "slow-loop",
    "characterId": "yachiyo-tsukimi",
    "coverId": "our-wonderful-days",
    "quoteId": "anon-chihaya",
    "emojiId": "shino-to-ren",
    "shipId": "hifumiaoba",
    "silhouetteId": "sakiko-togawa",
    "songId": "eternal-eternity"
  },
  "1195": {
    "classicId": "tamayura",
    "characterId": "kaori-asaka",
    "coverId": "beauty-and-the-beast-girl",
    "quoteId": "harumi-taniguchi",
    "emojiId": "assault-lily",
    "shipId": "angeprin",
    "silhouetteId": "mimi-mimily",
    "songId": "cross-ange-op1"
  },
  "1196": {
    "classicId": "baili-jin",
    "characterId": "yuu-sonoda",
    "coverId": "hino-san-no-baka",
    "quoteId": "hitori-gotoh",
    "emojiId": "mage-and-demon-queen",
    "shipId": "hifumiaoba",
    "silhouetteId": "mayumi-kodama",
    "songId": "guruguru-dj"
  },
  "1197": {
    "classicId": "everyday-lily",
    "characterId": "maki-nishikino",
    "coverId": "superwomen-in-love",
    "quoteId": "mashiro-kyou-kano",
    "emojiId": "ring-my-bell",
    "shipId": "momo-yuki",
    "silhouetteId": "akane-maekawa",
    "songId": "synchrogazer"
  },
  "1198": {
    "classicId": "sono-hanabira",
    "characterId": "rae-taylor",
    "coverId": "sakura-trick",
    "quoteId": "shizuku-hoshikawa",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "uika-saki",
    "silhouetteId": "nozomi-tojo",
    "songId": "go-go-maniac"
  },
  "1199": {
    "classicId": "tsubame-tip-off",
    "characterId": "jung-era",
    "coverId": "do-it-yourself",
    "quoteId": "chidori-takamori",
    "emojiId": "always-human",
    "shipId": "raeclaire",
    "silhouetteId": "mahiru-kouzuki",
    "songId": "eternal-eternity"
  },
  "1200": {
    "classicId": "release-the-spyce",
    "characterId": "ryo-yamada",
    "coverId": "hello-melancholic",
    "quoteId": "nika-nanaura",
    "emojiId": "nevermore-webtoon",
    "shipId": "sakinodoka",
    "silhouetteId": "chisato-nishikigi",
    "songId": "guitar-loneliness"
  },
  "1201": {
    "classicId": "stardust-telepath",
    "characterId": "miwa-inuzuka",
    "coverId": "otherside-picnic",
    "quoteId": "momo-chiyoda",
    "emojiId": "vampire-in-the-garden",
    "shipId": "malovel",
    "silhouetteId": "setsuna-yuki",
    "songId": "connect-madoka"
  },
  "1202": {
    "classicId": "magirevo",
    "characterId": "majime-yamashita",
    "coverId": "bloom-into-you",
    "quoteId": "chika-takami",
    "emojiId": "love-doctor",
    "shipId": "kase-yamada",
    "silhouetteId": "lin-luxi",
    "songId": "connect-madoka"
  },
  "1203": {
    "classicId": "getting-to-know-grace",
    "characterId": "hime-shiraki",
    "coverId": "prisma-illya",
    "quoteId": "yuko-yoshida",
    "emojiId": "izetta",
    "shipId": "malovel",
    "silhouetteId": "yuuri-glt",
    "songId": "one-room-sugar-life"
  },
  "1204": {
    "classicId": "watamote",
    "characterId": "rin-toyama",
    "coverId": "vampire-in-the-garden",
    "quoteId": "mafuyu-tsurezure",
    "emojiId": "sheep-princess",
    "shipId": "nanaki-kanade",
    "silhouetteId": "fine-vampire",
    "songId": "tenbin-fragtime"
  },
  "1205": {
    "classicId": "asteroid-in-love",
    "characterId": "miyu-edelfelt",
    "coverId": "chou-kaguya-hime",
    "quoteId": "ajisai-sena",
    "emojiId": "izetta",
    "shipId": "yuunamimori",
    "silhouetteId": "ayaka-sakurai",
    "songId": "memories-comic-girls"
  },
  "1206": {
    "classicId": "the-summer-you-were-there",
    "characterId": "nozomi-tojo",
    "coverId": "show-by-rock",
    "quoteId": "noa-himesaka",
    "emojiId": "asagao-to-kase-san",
    "shipId": "kasu-arisa",
    "silhouetteId": "miwa-inuzuka",
    "songId": "ten-to-sen"
  },
  "1207": {
    "classicId": "prism-yuri",
    "characterId": "hye-ji-serenade",
    "coverId": "soulmate-gl",
    "quoteId": "nomoto-yuki",
    "emojiId": "sakura-trick",
    "shipId": "harumatsu",
    "silhouetteId": "kaguya-cosmic",
    "songId": "guruguru-dj"
  },
  "1208": {
    "classicId": "lily-love-2",
    "characterId": "mel-pulse",
    "coverId": "bad-thinking-diary",
    "quoteId": "mei-aihara",
    "emojiId": "yuri-is-my-job",
    "shipId": "futakao",
    "silhouetteId": "yuni-asahina",
    "songId": "mayoiuta"
  },
  "1209": {
    "classicId": "run-away-with-me-girl",
    "characterId": "seika-ijichi",
    "coverId": "kageki-shojo",
    "quoteId": "kanoko-mamiya",
    "emojiId": "netsuzou-trap",
    "shipId": "hinako-shiori",
    "silhouetteId": "kaoru-seta",
    "songId": "go-go-maniac"
  },
  "1210": {
    "classicId": "our-wonderful-days",
    "characterId": "annabel-lee",
    "coverId": "konohana-kitan",
    "quoteId": "miwa-inuzuka",
    "emojiId": "bocchi-the-rock",
    "shipId": "sulemio",
    "silhouetteId": "mashiro-komiyama",
    "songId": "flip-flappers-ed"
  },
  "1211": {
    "classicId": "blooming-sequence",
    "characterId": "kanoko-mamiya",
    "coverId": "love-to-lie-angle",
    "quoteId": "mei-aihara",
    "emojiId": "kill-me-now",
    "shipId": "bibi-amy",
    "silhouetteId": "yui-yamada",
    "songId": "soushou-innocent"
  },
  "1212": {
    "classicId": "asumi-chan",
    "characterId": "chika-takami",
    "coverId": "brave-witches",
    "quoteId": "kiwi-araga",
    "emojiId": "superwomen-in-love",
    "shipId": "lunan-yexing",
    "silhouetteId": "mimi-mimily",
    "songId": "ano-mori-de-matteru"
  },
  "1213": {
    "classicId": "hero-san",
    "characterId": "yukari-akiyama",
    "coverId": "she-is-still-cute-today",
    "quoteId": "fuuko-taki",
    "emojiId": "kageki-shojo",
    "shipId": "yuutou",
    "silhouetteId": "sayaka-saeki",
    "songId": "zattou-bokura-no-machi"
  },
  "1214": {
    "classicId": "even-if-it-was-just-once",
    "characterId": "haru-ichinose",
    "coverId": "even-though-were-adults",
    "quoteId": "miku-kohinata",
    "emojiId": "girls-last-tour",
    "shipId": "yoshimio",
    "silhouetteId": "vayuela-vanadis",
    "songId": "kokoro-ni-tsubomi"
  },
  "1215": {
    "classicId": "tari-tari",
    "characterId": "malori-crow",
    "coverId": "beauty-and-the-beast-girl",
    "quoteId": "nijika-ijichi",
    "emojiId": "utsushicha-damena-kao",
    "shipId": "nao-kurumi",
    "silhouetteId": "aya-oosawa",
    "songId": "shukufuku"
  },
  "1216": {
    "classicId": "wixoss",
    "characterId": "ajisai-sena",
    "coverId": "manaria-friends",
    "quoteId": "hime-shiraki",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "kase-yamada",
    "silhouetteId": "tokaku-azuma",
    "songId": "hana-no-tou"
  },
  "1217": {
    "classicId": "inugami-nekoyama",
    "characterId": "jung-era",
    "coverId": "princess-connect-redive",
    "quoteId": "annabel-lee",
    "emojiId": "bang-dream",
    "shipId": "yukilisa",
    "silhouetteId": "kurumi-yoshizawa",
    "songId": "ten-to-sen"
  },
  "1218": {
    "classicId": "hello-melancholic",
    "characterId": "mahiru-kouzuki",
    "coverId": "straight-girl-trap",
    "quoteId": "seika-ijichi",
    "emojiId": "love-to-lie-angle",
    "shipId": "rinnade",
    "silhouetteId": "yoshika-miyafuji",
    "songId": "dream-solister"
  },
  "1219": {
    "classicId": "pulse",
    "characterId": "nana-daiba",
    "coverId": "ano-koro-no-aoi-hoshi",
    "quoteId": "yuri-tamura",
    "emojiId": "valkyrie-drive",
    "shipId": "mamori-mirei",
    "silhouetteId": "madam-baek",
    "songId": "one-room-sugar-life"
  },
  "1220": {
    "classicId": "sheep-princess",
    "characterId": "mafuyu-tsurezure",
    "coverId": "vexations-of-a-shut-in-vampire",
    "quoteId": "nagisa-ootsuki",
    "emojiId": "fluttering-feelings",
    "shipId": "nanajun",
    "silhouetteId": "yuzu-aihara",
    "songId": "spicy-piece"
  },
  "1221": {
    "classicId": "lapis-relights",
    "characterId": "honey-trap",
    "coverId": "run-away-with-me-girl",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "yuuki-yuuna",
    "shipId": "yuunamimori",
    "silhouetteId": "michiru-kaioh",
    "songId": "deal-with-the-devil"
  },
  "1222": {
    "classicId": "happy-sugar-life",
    "characterId": "chika-takami",
    "coverId": "long-awaited-feelings",
    "quoteId": "miku-kohinata",
    "emojiId": "girls-band-cry",
    "shipId": "saki-mutsu",
    "silhouetteId": "vivian-night-owls",
    "songId": "other-side-of-wall"
  },
  "1223": {
    "classicId": "bang-dream-pico",
    "characterId": "chisato-nishikigi",
    "coverId": "asteroid-in-love",
    "quoteId": "yuni-asahina",
    "emojiId": "strike-witches",
    "shipId": "hibimiku",
    "silhouetteId": "hina-gbc",
    "songId": "other-side-of-wall"
  },
  "1224": {
    "classicId": "i-love-amy",
    "characterId": "fine-vampire",
    "coverId": "love-to-lie-angle",
    "quoteId": "kita-ikuyo",
    "emojiId": "kill-me-now",
    "shipId": "shamimomo",
    "silhouetteId": "hougetsu-shimamura",
    "songId": "seishun-complex"
  },
  "1225": {
    "classicId": "please-bully-me-miss-villainess",
    "characterId": "aya-oosawa",
    "coverId": "fuzoroi-no-renri",
    "quoteId": "kumiko-oumae",
    "emojiId": "yuuki-yuuna",
    "shipId": "hibimiku",
    "silhouetteId": "aoi-amawashi",
    "songId": "guitar-loneliness"
  },
  "1226": {
    "classicId": "after-hours",
    "characterId": "yuu-koito",
    "coverId": "how-do-we-relationship",
    "quoteId": "riko-sakurauchi",
    "emojiId": "happy-sugar-life",
    "shipId": "kaseyamada",
    "silhouetteId": "emma-night-owls",
    "songId": "dream-solister"
  },
  "1227": {
    "classicId": "qualia-the-purple",
    "characterId": "maria-vampire",
    "coverId": "akebi-chan",
    "quoteId": "ayumu-uehara",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "hinako-shiori",
    "silhouetteId": "han-juhee",
    "songId": "dreamriser"
  },
  "1228": {
    "classicId": "yuri-seijin-naoko-san",
    "characterId": "hitori-gotoh",
    "coverId": "bad-girl",
    "quoteId": "himari-kino",
    "emojiId": "sakura-trick",
    "shipId": "rinnade",
    "silhouetteId": "shim-chong",
    "songId": "umapyoi-densetsu"
  },
  "1229": {
    "classicId": "handsome-girl-and-sheltered-girl",
    "characterId": "yuki-kyou-kano",
    "coverId": "prisma-illya",
    "quoteId": "mirei-shikishima",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "shino-ren",
    "silhouetteId": "yuu-sonoda",
    "songId": "tenbin-fragtime"
  },
  "1230": {
    "classicId": "chou-kaguya-hime",
    "characterId": "sayaka-saeki",
    "coverId": "goodbye-my-rose-garden",
    "quoteId": "suletta-mercury",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "uika-saki",
    "silhouetteId": "riri-hitotsuyanagi",
    "songId": "asu-e-no-tobira"
  },
  "1231": {
    "classicId": "love-to-lie-angle",
    "characterId": "kobayashi",
    "coverId": "kiniro-mosaic",
    "quoteId": "ange-le-carre",
    "emojiId": "superwomen-in-love",
    "shipId": "kumiko-reina",
    "silhouetteId": "mimi-mimily",
    "songId": "memories-comic-girls"
  },
  "1232": {
    "classicId": "princess-connect-redive",
    "characterId": "rin-toyama",
    "coverId": "train-to-the-end",
    "quoteId": "hibiki-sugawa",
    "emojiId": "flip-flappers",
    "shipId": "sulemio",
    "silhouetteId": "akane-maekawa",
    "songId": "other-side-of-wall"
  },
  "1233": {
    "classicId": "tari-tari",
    "characterId": "yuni-asahina",
    "coverId": "otome-no-teikoku",
    "quoteId": "saeko-tsutsumi",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "shijima-majime",
    "silhouetteId": "special-week",
    "songId": "aozora-no-rhapsody"
  },
  "1234": {
    "classicId": "getting-to-know-grace",
    "characterId": "mitsuki-yano",
    "coverId": "sadistic-beauty-side-b",
    "quoteId": "kim-norae",
    "emojiId": "princess-principal",
    "shipId": "tohrubayashi",
    "silhouetteId": "lisa-imai",
    "songId": "mayoiuta"
  },
  "1235": {
    "classicId": "hanebado",
    "characterId": "hinata-futari",
    "coverId": "yuri-is-my-job",
    "quoteId": "noa-himesaka",
    "emojiId": "ring-my-bell",
    "shipId": "ginkure",
    "silhouetteId": "yori-asanagi",
    "songId": "starlog-illya"
  },
  "1236": {
    "classicId": "birdie-wing",
    "characterId": "arisa-ichigaya",
    "coverId": "mygo",
    "quoteId": "rin-hoshizora",
    "emojiId": "watanare",
    "shipId": "bibi-amy",
    "silhouetteId": "yui-yamada",
    "songId": "guitar-loneliness"
  },
  "1237": {
    "classicId": "akebi-chan",
    "characterId": "yuki-hanzomon",
    "coverId": "so-ra-no-wo-to",
    "quoteId": "kikuri-hiroi",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "hibimiku",
    "silhouetteId": "minato-asano",
    "songId": "valkyrie-drive-op"
  },
  "1238": {
    "classicId": "tropical-fish",
    "characterId": "mio-akiyama",
    "coverId": "shine-post",
    "quoteId": "miwa-inuzuka",
    "emojiId": "mygo",
    "shipId": "komavill",
    "silhouetteId": "chisato-shirasagi",
    "songId": "serendipity-flip"
  },
  "1239": {
    "classicId": "magirevo",
    "characterId": "toriko-nishina",
    "coverId": "this-monster-wants-to-eat-me",
    "quoteId": "rin-toyama",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "shamimomo",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "hoshi-no-tabibito"
  },
  "1240": {
    "classicId": "do-it-yourself",
    "characterId": "hilda-cross-ange",
    "coverId": "bloom-into-you",
    "quoteId": "aya-maruyama",
    "emojiId": "d4dj",
    "shipId": "uika-saki",
    "silhouetteId": "nanami-oda",
    "songId": "sacred-world"
  },
  "1241": {
    "classicId": "vtuber-legend",
    "characterId": "ren",
    "coverId": "whispering-you-a-love-song",
    "quoteId": "karen-aijo",
    "emojiId": "revue-starlight",
    "shipId": "kourin",
    "silhouetteId": "honey-trap",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "1242": {
    "classicId": "girls-last-tour",
    "characterId": "baek-seola",
    "coverId": "hanebado",
    "quoteId": "mizore-yoroizuka",
    "emojiId": "asagao-to-kase-san",
    "shipId": "hinatanoa",
    "silhouetteId": "lin-luxi",
    "songId": "asu-e-no-tobira"
  },
  "1243": {
    "classicId": "the-summer-you-were-there",
    "characterId": "dia-kurosawa",
    "coverId": "liz-to-aoi-tori",
    "quoteId": "tsubasa-kazanari",
    "emojiId": "granbelm",
    "shipId": "mashiruri",
    "silhouetteId": "dia-kurosawa",
    "songId": "tenshi-ni-fureta-yo"
  },
  "1244": {
    "classicId": "seiyuu-radio",
    "characterId": "yuni-asahina",
    "coverId": "i-married-my-best-friend",
    "quoteId": "azusa-nakano",
    "emojiId": "yuri-is-my-job",
    "shipId": "shimbaek",
    "silhouetteId": "kano-yamanouchi",
    "songId": "hoshi-to-hana"
  },
  "1245": {
    "classicId": "gakkou-gurashi",
    "characterId": "kaoru-seta",
    "coverId": "otherside-picnic",
    "quoteId": "kikuri-hiroi",
    "emojiId": "the-summer-you-were-there",
    "shipId": "yuu-atori",
    "silhouetteId": "claudine-saijo",
    "songId": "serendipity-flip"
  },
  "1246": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "nyamu-yuutenji",
    "coverId": "vampeerz",
    "quoteId": "mimori-togo",
    "emojiId": "valkyrie-drive",
    "shipId": "mel-lynn",
    "silhouetteId": "chuchu",
    "songId": "go-go-maniac"
  },
  "1247": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "anne-manaria",
    "coverId": "hina-logi",
    "quoteId": "ajisai-sena",
    "emojiId": "superwomen-in-love",
    "shipId": "kanadia",
    "silhouetteId": "ayumu-uehara",
    "songId": "hoshi-no-dialogue"
  },
  "1248": {
    "classicId": "mygo",
    "characterId": "ayaka-sakurai",
    "coverId": "action-heroine-cheer-fruits",
    "quoteId": "yukari-akiyama",
    "emojiId": "bocchi-the-rock",
    "shipId": "harumatsu",
    "silhouetteId": "utada-uta",
    "songId": "spicy-piece"
  },
  "1249": {
    "classicId": "kiniro-mosaic",
    "characterId": "hibiki-sugawa",
    "coverId": "still-sick",
    "quoteId": "nagisa-ootsuki",
    "emojiId": "fed-up-office-lady-villainess",
    "shipId": "ginkure",
    "silhouetteId": "chidori-takamori",
    "songId": "magia-madoka"
  },
  "1250": {
    "classicId": "miss-kobayashis-dragon-maid",
    "characterId": "suzu-nekoyama",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "sora-honda",
    "emojiId": "our-wonderful-days",
    "shipId": "tsubamaria",
    "silhouetteId": "illyasviel-von-einzbern",
    "songId": "red-liberation"
  },
  "1251": {
    "classicId": "witch-from-mercury",
    "characterId": "mirei-shikishima",
    "coverId": "hana-to-hina",
    "quoteId": "hina-hikawa",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "uika-saki",
    "silhouetteId": "yoshika-miyafuji",
    "songId": "asagao-kase"
  },
  "1252": {
    "classicId": "hanebado",
    "characterId": "baek-seola",
    "coverId": "train-to-the-end",
    "quoteId": "touko-nanami",
    "emojiId": "citrus",
    "shipId": "mashiruri",
    "silhouetteId": "riri-hitotsuyanagi",
    "songId": "spicy-piece"
  },
  "1253": {
    "classicId": "vividred-operation",
    "characterId": "sora-honda",
    "coverId": "vtuber-legend",
    "quoteId": "ryo-yamada",
    "emojiId": "moonlight-garden",
    "shipId": "mel-lynn",
    "silhouetteId": "koyuki-honami",
    "songId": "shukufuku"
  },
  "1254": {
    "classicId": "bloom-into-you",
    "characterId": "junna-hoshimi",
    "coverId": "high-school-fleet",
    "quoteId": "ayumu-uehara",
    "emojiId": "yuuki-yuuna",
    "shipId": "momo-fine",
    "silhouetteId": "saki-kindaichi",
    "songId": "sacred-world"
  },
  "1255": {
    "classicId": "wataten",
    "characterId": "ayaka-shiraishi",
    "coverId": "school-zone-girls",
    "quoteId": "kyoko-toshino",
    "emojiId": "ange-vierge",
    "shipId": "angeprin",
    "silhouetteId": "haruka-murakami",
    "songId": "ano-mori-de-matteru"
  },
  "1256": {
    "classicId": "yama-no-susume",
    "characterId": "elsa-dorothy",
    "coverId": "im-in-love-with-the-villainess",
    "quoteId": "kim-norae",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "yoojin-hyeji",
    "silhouetteId": "anne-manaria",
    "songId": "synchrogazer"
  },
  "1257": {
    "classicId": "an-easy-introduction-to-love-triangles",
    "characterId": "claudine-saijo",
    "coverId": "kill-me-now",
    "quoteId": "sumika-chibana",
    "emojiId": "madoka-magica",
    "shipId": "misa-io",
    "silhouetteId": "villhaze",
    "songId": "asagao-kase"
  },
  "1258": {
    "classicId": "ms-vampire-who-lives-in-my-neighborhood",
    "characterId": "chris-yukine",
    "coverId": "shino-to-ren",
    "quoteId": "karen-aijo",
    "emojiId": "asagao-to-kase-san",
    "shipId": "hanabi-konomi",
    "silhouetteId": "minato-asano",
    "songId": "won3chu-kissme"
  },
  "1259": {
    "classicId": "gakkou-gurashi",
    "characterId": "minato-asano",
    "coverId": "ms-vampire-who-lives-in-my-neighborhood",
    "quoteId": "yuuna-matsubara",
    "emojiId": "hello-melancholic",
    "shipId": "yukilisa",
    "silhouetteId": "cocona",
    "songId": "himitsu-no-melody"
  },
  "1260": {
    "classicId": "tadokoro-san",
    "characterId": "rinku-aimoto",
    "coverId": "prisma-illya",
    "quoteId": "arisa-ichigaya",
    "emojiId": "everyday-lily",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "kasuga-totoko",
    "songId": "himitsu-no-melody"
  },
  "1261": {
    "classicId": "my-sisters-best-friend",
    "characterId": "nomoto-yuki",
    "coverId": "i-married-my-best-friend",
    "quoteId": "dia-kurosawa",
    "emojiId": "fluttering-feelings",
    "shipId": "eveaoi",
    "silhouetteId": "nozomi-tojo",
    "songId": "sacred-world"
  },
  "1262": {
    "classicId": "maria-holic",
    "characterId": "mimori-togo",
    "coverId": "uma-musume",
    "quoteId": "umiri-yahata",
    "emojiId": "witch-from-mercury",
    "shipId": "soratori",
    "silhouetteId": "hitori-gotoh",
    "songId": "seishun-complex"
  },
  "1263": {
    "classicId": "gakkou-gurashi",
    "characterId": "rapid-rabbit",
    "coverId": "ghosts-of-greywoods",
    "quoteId": "kasuga-totoko",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "nanaki-kanade",
    "silhouetteId": "eve",
    "songId": "guitar-loneliness"
  },
  "1264": {
    "classicId": "asumi-chan",
    "characterId": "utada-uta",
    "coverId": "wixoss",
    "quoteId": "kasuga-totoko",
    "emojiId": "assault-lily-league",
    "shipId": "misa-koko",
    "silhouetteId": "kobayashi",
    "songId": "kokoro-ni-tsubomi"
  },
  "1265": {
    "classicId": "straight-girl-trap",
    "characterId": "rin-hoshizora",
    "coverId": "seiyuu-radio",
    "quoteId": "nomoto-yuki",
    "emojiId": "ring-my-bell",
    "shipId": "chikariko",
    "silhouetteId": "maria-vampire",
    "songId": "my-dream-girls"
  },
  "1266": {
    "classicId": "yuruyuri",
    "characterId": "io-utsushicha",
    "coverId": "princess-connect-redive",
    "quoteId": "yuuri-glt",
    "emojiId": "k-on",
    "shipId": "yoshimio",
    "silhouetteId": "madoka-kaname",
    "songId": "connect-madoka"
  },
  "1267": {
    "classicId": "bocchi-the-rock",
    "characterId": "chika-takami",
    "coverId": "hana-to-hina",
    "quoteId": "yachiyo-inugami",
    "emojiId": "night-owls-and-summer-skies",
    "shipId": "mayumi-rin",
    "silhouetteId": "fuuko-taki",
    "songId": "won3chu-kissme"
  },
  "1268": {
    "classicId": "hino-san-no-baka",
    "characterId": "hikari-kagura",
    "coverId": "re-stage-dream-days",
    "quoteId": "renako-amaori",
    "emojiId": "kill-me-now",
    "shipId": "ayuyuu",
    "silhouetteId": "saeko-tsutsumi",
    "songId": "magia-madoka"
  },
  "1269": {
    "classicId": "chuunibyou",
    "characterId": "anne-manaria",
    "coverId": "ange-vierge",
    "quoteId": "arisa-ichigaya",
    "emojiId": "kitanai-kimi",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "setsuna-yuki",
    "songId": "go-go-maniac"
  },
  "1270": {
    "classicId": "kimi-ga-shinu-made",
    "characterId": "koharu-tsurezure",
    "coverId": "sora-haena",
    "quoteId": "mayumi-kodama",
    "emojiId": "adachi-and-shimamura",
    "shipId": "ange-hilda",
    "silhouetteId": "hina-hikawa",
    "songId": "other-side-of-wall"
  },
  "1271": {
    "classicId": "yuruyuri",
    "characterId": "akari-amano",
    "coverId": "she-is-still-cute-today",
    "quoteId": "tohru",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "konatsukoyuki",
    "silhouetteId": "hibiki-sugawa",
    "songId": "raise-your-hands"
  },
  "1272": {
    "classicId": "crown-handler",
    "characterId": "miwa-inuzuka",
    "coverId": "futarigurashi",
    "quoteId": "maki-nishikino",
    "emojiId": "love-doctor",
    "shipId": "chuchunika",
    "silhouetteId": "reina-kousaka",
    "songId": "asu-e-no-tobira"
  },
  "1273": {
    "classicId": "tari-tari",
    "characterId": "toriko-nishina",
    "coverId": "my-food-looks-very-cute",
    "quoteId": "momoka-kawaragi",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "morimura",
    "silhouetteId": "aya-maruyama",
    "songId": "guitar-loneliness"
  },
  "1274": {
    "classicId": "citrus",
    "characterId": "shiina-kakure",
    "coverId": "kuzu-no-honkai",
    "quoteId": "saki-miyanaga",
    "emojiId": "stardust-telepath",
    "shipId": "hibimiku",
    "silhouetteId": "mai-oduka",
    "songId": "valkyrie-drive-op"
  },
  "1275": {
    "classicId": "tsubame-tip-off",
    "characterId": "yoo-jin-serenade",
    "coverId": "everyday-lily",
    "quoteId": "hinako-hanamura",
    "emojiId": "valkyrie-drive",
    "shipId": "rinpana",
    "silhouetteId": "kaoruko-hanayagi",
    "songId": "cross-ange-op1"
  },
  "1276": {
    "classicId": "ange-vierge",
    "characterId": "eli-ayase",
    "coverId": "crown-handler",
    "quoteId": "yoshika-miyafuji",
    "emojiId": "lycoris-recoil",
    "shipId": "sayohina",
    "silhouetteId": "chika-takami",
    "songId": "alive-lycoris"
  },
  "1277": {
    "classicId": "granbelm",
    "characterId": "hina-hikawa",
    "coverId": "ano-koro-no-aoi-hoshi",
    "quoteId": "misa-utsushicha",
    "emojiId": "birdie-wing",
    "shipId": "yuni-fuuko",
    "silhouetteId": "akane-maekawa",
    "songId": "haruhikage"
  },
  "1278": {
    "classicId": "symphogear",
    "characterId": "shijima-tsukishima",
    "coverId": "shinsekai-yori",
    "quoteId": "junna-hoshimi",
    "emojiId": "cross-ange",
    "shipId": "ayuyuu",
    "silhouetteId": "naoi-manaka",
    "songId": "listen-htt"
  },
  "1279": {
    "classicId": "mayonaka-punch",
    "characterId": "moca-aoba",
    "coverId": "assault-lily-league",
    "quoteId": "yachiyo-inugami",
    "emojiId": "bocchi-the-rock",
    "shipId": "sophie-akari",
    "silhouetteId": "lu-nan",
    "songId": "ten-to-sen"
  },
  "1280": {
    "classicId": "still-sick",
    "characterId": "chisato-nishikigi",
    "coverId": "witch-from-mercury",
    "quoteId": "konatsu-amano",
    "emojiId": "senran-kagura",
    "shipId": "hibimiku",
    "silhouetteId": "makoto-shimizu",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "1281": {
    "classicId": "kill-me-now",
    "characterId": "suzu-nekoyama",
    "coverId": "prism-yuri",
    "quoteId": "akane-maekawa",
    "emojiId": "k-on",
    "shipId": "harumichi",
    "silhouetteId": "princess-fine",
    "songId": "guitar-loneliness"
  },
  "1282": {
    "classicId": "mygo",
    "characterId": "misuzu-moritani",
    "coverId": "bad-girl",
    "quoteId": "rin-shima",
    "emojiId": "bang-dream",
    "shipId": "teiomcqueen",
    "silhouetteId": "nozomi-kasaki",
    "songId": "seishun-complex"
  },
  "1283": {
    "classicId": "sekai-de-ichiban-oppai",
    "characterId": "hougetsu-shimamura",
    "coverId": "hanayamata",
    "quoteId": "moca-aoba",
    "emojiId": "d4dj",
    "shipId": "sakinodoka",
    "silhouetteId": "ajisai-sena",
    "songId": "other-side-of-wall"
  },
  "1284": {
    "classicId": "yuuki-yuuna",
    "characterId": "kyoko-sakura",
    "coverId": "bang-dream",
    "quoteId": "utena-hiiragi",
    "emojiId": "mygo",
    "shipId": "chito-yuuri",
    "silhouetteId": "haruka-murakami",
    "songId": "my-dream-girls"
  },
  "1285": {
    "classicId": "what-does-the-fox-say",
    "characterId": "nanami-oda",
    "coverId": "our-teachers-are-dating",
    "quoteId": "kotori-minami",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "ririyuyu",
    "silhouetteId": "makoto-shimizu",
    "songId": "magia-madoka"
  },
  "1286": {
    "classicId": "kill-me-now",
    "characterId": "momoka-kawaragi",
    "coverId": "after-hours",
    "quoteId": "sorawo-kamikoshi",
    "emojiId": "cross-ange",
    "shipId": "annabel-lenore",
    "silhouetteId": "silence-suzuka",
    "songId": "kimi-ni-furete"
  },
  "1287": {
    "classicId": "bad-girl",
    "characterId": "honoka-kosaka",
    "coverId": "long-awaited-feelings",
    "quoteId": "umika-konohoshi",
    "emojiId": "the-summer-you-were-there",
    "shipId": "maria-lan",
    "silhouetteId": "maho-akashi",
    "songId": "aozora-no-rhapsody"
  },
  "1288": {
    "classicId": "anemone-is-in-heat",
    "characterId": "kasuga-totoko",
    "coverId": "otome-no-teikoku",
    "quoteId": "ren",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "meiyuzu",
    "silhouetteId": "koharu-tsurezure",
    "songId": "snow-halation"
  },
  "1289": {
    "classicId": "shino-to-ren",
    "characterId": "lin-luxi",
    "coverId": "netsuzou-trap",
    "quoteId": "tsubasa-kazanari",
    "emojiId": "tamen-de-gushi",
    "shipId": "akebi-erika",
    "silhouetteId": "shizuku-hoshikawa",
    "songId": "soushou-innocent"
  },
  "1290": {
    "classicId": "high-school-fleet",
    "characterId": "cocona",
    "coverId": "tamako-market",
    "quoteId": "aoba-suzukaze",
    "emojiId": "akebi-chan",
    "shipId": "miho-yukari",
    "silhouetteId": "homura-akemi",
    "songId": "yuriyurararara"
  },
  "1291": {
    "classicId": "bloom-into-you",
    "characterId": "momo-sheep",
    "coverId": "my-food-looks-very-cute",
    "quoteId": "hifumi-takimoto",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "yuiazu",
    "silhouetteId": "yori-asanagi",
    "songId": "mayoiuta"
  },
  "1292": {
    "classicId": "so-ra-no-wo-to",
    "characterId": "kaori-asaka",
    "coverId": "assault-lily-league",
    "quoteId": "suzu-nekoyama",
    "emojiId": "love-doctor",
    "shipId": "ange-hilda",
    "silhouetteId": "yuuna-matsubara",
    "songId": "hoshi-to-hana"
  },
  "1293": {
    "classicId": "even-though-were-adults",
    "characterId": "ryo-yamada",
    "coverId": "hibike-euphonium",
    "quoteId": "kou-yagami",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "mel-lynn",
    "silhouetteId": "emma-night-owls",
    "songId": "ano-mori-de-matteru"
  },
  "1294": {
    "classicId": "assault-lily",
    "characterId": "aki-wolf",
    "coverId": "kiss-and-white-lily",
    "quoteId": "umiri-yahata",
    "emojiId": "vanadis-heart",
    "shipId": "karehika",
    "silhouetteId": "atori-mizutori",
    "songId": "spicy-piece"
  },
  "1295": {
    "classicId": "tropical-fish",
    "characterId": "ryo-yamada",
    "coverId": "kimi-ga-shinu-made",
    "quoteId": "yuki-hanzomon",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "makoto-akane",
    "silhouetteId": "da-kyeong",
    "songId": "snow-halation"
  },
  "1296": {
    "classicId": "beauty-and-the-beast-girl",
    "characterId": "lin-luxi",
    "coverId": "re-stage-dream-days",
    "quoteId": "erika-kizaki",
    "emojiId": "assault-lily",
    "shipId": "nao-kurumi",
    "silhouetteId": "emma-night-owls",
    "songId": "asu-e-no-tobira"
  },
  "1297": {
    "classicId": "yuri-is-my-job",
    "characterId": "yuuna-matsubara",
    "coverId": "bocchi-the-rock",
    "quoteId": "maya-tendo",
    "emojiId": "adachi-and-shimamura",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "riri-hitotsuyanagi",
    "songId": "spicy-piece"
  },
  "1298": {
    "classicId": "hibike-euphonium",
    "characterId": "miwa-inuzuka",
    "coverId": "the-third-party",
    "quoteId": "yuki-hanzomon",
    "emojiId": "assault-lily-league",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "kobayashi",
    "songId": "hoshi-no-tabibito"
  },
  "1299": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "kasuga-totoko",
    "coverId": "kuttsukiboshi",
    "quoteId": "aoi-amawashi",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "soratori",
    "silhouetteId": "tokai-teio",
    "songId": "flip-flappers-ed"
  },
  "1300": {
    "classicId": "this-monster-wants-to-eat-me",
    "characterId": "chika-takami",
    "coverId": "princess-connect-redive",
    "quoteId": "chris-yukine",
    "emojiId": "adachi-and-shimamura",
    "shipId": "chito-yuuri",
    "silhouetteId": "natori-ryoko",
    "songId": "yuriyurararara"
  },
  "1301": {
    "classicId": "hana-to-hina",
    "characterId": "momoka-kawaragi",
    "coverId": "lily-love",
    "quoteId": "mizore-yoroizuka",
    "emojiId": "cross-ange",
    "shipId": "ayuyuu",
    "silhouetteId": "kotori-minami",
    "songId": "red-liberation"
  },
  "1302": {
    "classicId": "otome-no-teikoku",
    "characterId": "nanase-natsume",
    "coverId": "watanare",
    "quoteId": "ai-narata",
    "emojiId": "new-game",
    "shipId": "menou-akari",
    "silhouetteId": "natori-ryoko",
    "songId": "azalea-citrus"
  },
  "1303": {
    "classicId": "houkago-teibou-nisshi",
    "characterId": "rupa",
    "coverId": "tropical-fish",
    "quoteId": "saki-miyanaga",
    "emojiId": "madoka-magica",
    "shipId": "yuiazu",
    "silhouetteId": "fine-vampire",
    "songId": "sakura-skip"
  },
  "1304": {
    "classicId": "bad-girl",
    "characterId": "momo-sheep",
    "coverId": "pulse",
    "quoteId": "lu-nan",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "yori-asanagi",
    "songId": "red-birthmark"
  },
  "1305": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "maria-cadenzavna-eve",
    "coverId": "asagao-to-kase-san",
    "quoteId": "woori-bust",
    "emojiId": "everyday-lily",
    "shipId": "chidori-nanoha",
    "silhouetteId": "umika-konohoshi",
    "songId": "dream-solister"
  },
  "1306": {
    "classicId": "the-executioner-and-her-way-of-life",
    "characterId": "hye-ji-serenade",
    "coverId": "tsubame-tip-off",
    "quoteId": "tokaku-azuma",
    "emojiId": "soulmate-gl",
    "shipId": "yuni-fuuko",
    "silhouetteId": "aya-maruyama",
    "songId": "hoshi-no-dialogue"
  },
  "1307": {
    "classicId": "yama-no-susume",
    "characterId": "akane-maekawa",
    "coverId": "lily-love",
    "quoteId": "kaguya-cosmic",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "chisataki",
    "silhouetteId": "satou-matsuzaka",
    "songId": "soushou-innocent"
  },
  "1308": {
    "classicId": "my-cute-little-kitten",
    "characterId": "yui-yamada",
    "coverId": "the-moon-on-a-rainy-night",
    "quoteId": "lee-yeowool",
    "emojiId": "netsuzou-trap",
    "shipId": "kikusei",
    "silhouetteId": "matsuri-mizusawa",
    "songId": "ten-to-sen"
  },
  "1309": {
    "classicId": "lily-yy",
    "characterId": "yuu-akeuchi",
    "coverId": "baili-jin",
    "quoteId": "yui-yamada",
    "emojiId": "cross-ange",
    "shipId": "raeclaire",
    "silhouetteId": "nanoha-chiba",
    "songId": "red-liberation"
  },
  "1310": {
    "classicId": "soulmate-gl",
    "characterId": "toriko-nishina",
    "coverId": "moonlight-garden",
    "quoteId": "emma-night-owls",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "chidori-nanoha",
    "silhouetteId": "kaoruko-hanayagi",
    "songId": "blue-bud-netsuzou"
  },
  "1311": {
    "classicId": "houkago-teibou-nisshi",
    "characterId": "hikari-kagura",
    "coverId": "the-executioner-and-her-way-of-life",
    "quoteId": "hina-hikawa",
    "emojiId": "yuruyuri",
    "shipId": "yvonelsa",
    "silhouetteId": "riri-hitotsuyanagi",
    "songId": "raise-your-hands"
  },
  "1312": {
    "classicId": "lycoris-recollect",
    "characterId": "kiyashu-vanadis",
    "coverId": "ange-vierge",
    "quoteId": "yui-funami",
    "emojiId": "birdie-wing",
    "shipId": "nao-kurumi",
    "silhouetteId": "aya-maruyama",
    "songId": "miracle-rush"
  },
  "1313": {
    "classicId": "catch-these-hands",
    "characterId": "lisa-imai",
    "coverId": "konohana-kitan",
    "quoteId": "menou-virgin-road",
    "emojiId": "kageki-shojo",
    "shipId": "hibimiku",
    "silhouetteId": "umiri-yahata",
    "songId": "aozora-no-rhapsody"
  },
  "1314": {
    "classicId": "kiss-and-white-lily",
    "characterId": "jung-era",
    "coverId": "yuuki-yuuna",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "komavill",
    "silhouetteId": "karen-aijo",
    "songId": "hoshi-no-tabibito"
  },
  "1315": {
    "classicId": "show-me-your-bust",
    "characterId": "tokaku-azuma",
    "coverId": "liz-to-aoi-tori",
    "quoteId": "yoo-jin-serenade",
    "emojiId": "asagao-to-kase-san",
    "shipId": "mayumi-rin",
    "silhouetteId": "seon-hwa",
    "songId": "hoshi-no-tabibito"
  },
  "1316": {
    "classicId": "sabagebu",
    "characterId": "yu-takasaki",
    "coverId": "handsome-girl-and-sheltered-girl",
    "quoteId": "rapid-rabbit",
    "emojiId": "k-on",
    "shipId": "yuni-fuuko",
    "silhouetteId": "emma-night-owls",
    "songId": "kimi-no-gin-no-niwa"
  },
  "1317": {
    "classicId": "cheerful-amnesia",
    "characterId": "taki-shiina",
    "coverId": "kitanai-kimi",
    "quoteId": "anne-manaria",
    "emojiId": "birdie-wing",
    "shipId": "chito-yuuri",
    "silhouetteId": "misuzu-moritani",
    "songId": "red-birthmark"
  },
  "1318": {
    "classicId": "bad-thinking-diary",
    "characterId": "maya-tendo",
    "coverId": "tropical-fish",
    "quoteId": "sayo-hikawa",
    "emojiId": "our-wonderful-days",
    "shipId": "akebi-erika",
    "silhouetteId": "yuni-asahina",
    "songId": "hectopascal"
  },
  "1319": {
    "classicId": "kiss-and-white-lily",
    "characterId": "aya-oosawa",
    "coverId": "my-food-seems-to-be-very-cute",
    "quoteId": "homura-akemi",
    "emojiId": "manaria-friends",
    "shipId": "karehika",
    "silhouetteId": "hinata-hoshino",
    "songId": "follow-your-arrows"
  },
  "1320": {
    "classicId": "watanare",
    "characterId": "honoka-kosaka",
    "coverId": "birdie-wing",
    "quoteId": "erika-kizaki",
    "emojiId": "witch-from-mercury",
    "shipId": "nina-hina",
    "silhouetteId": "saeko-tsutsumi",
    "songId": "eternal-eternity"
  },
  "1321": {
    "classicId": "bad-girl",
    "characterId": "silence-suzuka",
    "coverId": "goodbye-my-rose-garden",
    "quoteId": "yuzu-aihara",
    "emojiId": "vanadis-heart",
    "shipId": "himayori",
    "silhouetteId": "yui-funami",
    "songId": "hoshi-no-dialogue"
  },
  "1322": {
    "classicId": "anemone-is-in-heat",
    "characterId": "honey-trap",
    "coverId": "love-live-sunshine",
    "quoteId": "xiao-lan-wolf",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "harumichi",
    "silhouetteId": "elsa-dorothy",
    "songId": "arc-en-ciel"
  },
  "1323": {
    "classicId": "yuri-is-my-job",
    "characterId": "maria-cadenzavna-eve",
    "coverId": "yuri-seijin-naoko-san",
    "quoteId": "yuuri-glt",
    "emojiId": "otherside-picnic",
    "shipId": "chikariko",
    "silhouetteId": "yuki-kyou-kano",
    "songId": "ano-mori-de-matteru"
  },
  "1324": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "rin-shima",
    "coverId": "what-does-the-fox-say",
    "quoteId": "hitori-gotoh",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "nijiryo",
    "silhouetteId": "miyu-edelfelt",
    "songId": "go-go-maniac"
  },
  "1325": {
    "classicId": "watanare",
    "characterId": "misa-utsushicha",
    "coverId": "crown-handler",
    "quoteId": "aki-wolf",
    "emojiId": "vampire-in-the-garden",
    "shipId": "yuni-nanase",
    "silhouetteId": "hina-gbc",
    "songId": "my-dream-girls"
  },
  "1326": {
    "classicId": "yuri-kuma-arashi",
    "characterId": "maria-vampire",
    "coverId": "my-girlfriends-not-here-today",
    "quoteId": "jung-era",
    "emojiId": "our-wonderful-days",
    "shipId": "hinata-mikage",
    "silhouetteId": "makoto-shimizu",
    "songId": "memories-comic-girls"
  },
  "1327": {
    "classicId": "uma-musume",
    "characterId": "anne-manaria",
    "coverId": "flip-flappers",
    "quoteId": "tomoka-kase",
    "emojiId": "bang-dream",
    "shipId": "yuni-nanase",
    "silhouetteId": "mei-aihara",
    "songId": "kokoro-ni-tsubomi"
  },
  "1328": {
    "classicId": "my-cute-little-kitten",
    "characterId": "kumiko-oumae",
    "coverId": "everyday-lily",
    "quoteId": "menou-virgin-road",
    "emojiId": "fluttering-feelings",
    "shipId": "tomo-rupa",
    "silhouetteId": "yachiyo-inugami",
    "songId": "azalea-citrus"
  },
  "1329": {
    "classicId": "green-tea-bitch",
    "characterId": "misuzu-moritani",
    "coverId": "the-moon-on-a-rainy-night",
    "quoteId": "grea-manaria",
    "emojiId": "chou-kaguya-hime",
    "shipId": "chidori-nanoha",
    "silhouetteId": "yui-yamada",
    "songId": "asu-e-no-tobira"
  },
  "1330": {
    "classicId": "high-school-fleet",
    "characterId": "sun-jing",
    "coverId": "k-on",
    "quoteId": "lu-nan",
    "emojiId": "sheep-princess",
    "shipId": "izetta-fine",
    "silhouetteId": "suzu-suzukaze",
    "songId": "kimama-na-tenshi-tachi"
  },
  "1331": {
    "classicId": "prism-yuri",
    "characterId": "maria-vampire",
    "coverId": "fed-up-office-lady-villainess",
    "quoteId": "rin-umineko",
    "emojiId": "girls-band-cry",
    "shipId": "karehika",
    "silhouetteId": "kiwi-araga",
    "songId": "hoshi-no-dialogue"
  },
  "1332": {
    "classicId": "girls-last-tour",
    "characterId": "mary-saotome",
    "coverId": "wixoss",
    "quoteId": "nanaki-fujishiro",
    "emojiId": "hello-melancholic",
    "shipId": "yuu-atori",
    "silhouetteId": "mimi-mimily",
    "songId": "asagao-kase"
  },
  "1333": {
    "classicId": "yuyushiki",
    "characterId": "kobayashi",
    "coverId": "an-easy-introduction-to-love-triangles",
    "quoteId": "jung-era",
    "emojiId": "asagao-to-kase-san",
    "shipId": "sayakatouko",
    "silhouetteId": "yuu-yuutani",
    "songId": "venus-line"
  },
  "1334": {
    "classicId": "otome-no-teikoku",
    "characterId": "mai-oduka",
    "coverId": "comic-girls",
    "quoteId": "homura-akemi",
    "emojiId": "love-to-lie-angle",
    "shipId": "tomo-rupa",
    "silhouetteId": "yumeko-jabami",
    "songId": "connect-madoka"
  },
  "1335": {
    "classicId": "wataten",
    "characterId": "rin-umineko",
    "coverId": "mygo",
    "quoteId": "menou-virgin-road",
    "emojiId": "girls-band-cry",
    "shipId": "adachishima",
    "silhouetteId": "chika-takami",
    "songId": "azalea-citrus"
  },
  "1336": {
    "classicId": "hero-san",
    "characterId": "misa-utsushicha",
    "coverId": "the-executioner-and-her-way-of-life",
    "quoteId": "lin-luxi",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "renamai",
    "silhouetteId": "ran-mitake",
    "songId": "hoshi-no-dialogue"
  },
  "1337": {
    "classicId": "yuuki-yuuna",
    "characterId": "nika-nanaura",
    "coverId": "watamote",
    "quoteId": "mafuyu-tsurezure",
    "emojiId": "cross-ange",
    "shipId": "momo-fine",
    "silhouetteId": "sayaka-miki",
    "songId": "kokoro-ni-tsubomi"
  },
  "1338": {
    "classicId": "i-love-amy",
    "characterId": "minato-asano",
    "coverId": "love-live-hasunosora",
    "quoteId": "renako-amaori",
    "emojiId": "new-game",
    "shipId": "aniseuphie",
    "silhouetteId": "yuni-asahina",
    "songId": "snow-halation"
  },
  "1339": {
    "classicId": "konohana-kitan",
    "characterId": "nodoka-haramura",
    "coverId": "the-third-party",
    "quoteId": "madam-baek",
    "emojiId": "adachi-and-shimamura",
    "shipId": "tsubamaria",
    "silhouetteId": "kobayashi",
    "songId": "irodori-jelee"
  },
  "1340": {
    "classicId": "shino-to-ren",
    "characterId": "tomoka-kase",
    "coverId": "futaribeya",
    "quoteId": "mai-oduka",
    "emojiId": "yuuki-yuuna",
    "shipId": "yuutou",
    "silhouetteId": "aki-wolf",
    "songId": "snow-halation"
  },
  "1341": {
    "classicId": "asteroid-in-love",
    "characterId": "kurumi-yoshizawa",
    "coverId": "what-does-the-fox-say",
    "quoteId": "hifumi-takimoto",
    "emojiId": "citrus",
    "shipId": "mizore-nozomi",
    "silhouetteId": "hye-ji-serenade",
    "songId": "guitar-loneliness"
  },
  "1342": {
    "classicId": "love-doctor",
    "characterId": "yuu-akeuchi",
    "coverId": "white-angels-have-no-wings",
    "quoteId": "aoi-amawashi",
    "emojiId": "madoka-magica",
    "shipId": "nina-hina",
    "silhouetteId": "jiho-bust",
    "songId": "won3chu-kissme"
  },
  "1343": {
    "classicId": "kageki-shojo",
    "characterId": "mio-sakamoto",
    "coverId": "fed-up-office-lady-villainess",
    "quoteId": "sayo-hikawa",
    "emojiId": "kill-me-now",
    "shipId": "ginkure",
    "silhouetteId": "yuuri-glt",
    "songId": "shukufuku"
  },
  "1344": {
    "classicId": "kimi-ga-shinu-made",
    "characterId": "yuzu-konohana",
    "coverId": "love-live-superstar",
    "quoteId": "koharu-tsurezure",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "bibi-amy",
    "silhouetteId": "momo-vampire",
    "songId": "arc-en-ciel"
  },
  "1345": {
    "classicId": "hello-melancholic",
    "characterId": "harumi-taniguchi",
    "coverId": "anemone-is-in-heat",
    "quoteId": "lynn-pulse",
    "emojiId": "uma-musume",
    "shipId": "kaoru-chisato",
    "silhouetteId": "io-utsushicha",
    "songId": "sacred-world"
  },
  "1346": {
    "classicId": "yama-no-susume",
    "characterId": "yuko-yoshida",
    "coverId": "baili-jin",
    "quoteId": "rin-toyama",
    "emojiId": "tamen-de-gushi",
    "shipId": "mary-yumeko",
    "silhouetteId": "noa-himesaka",
    "songId": "starlog-illya"
  },
  "1347": {
    "classicId": "kill-me-now",
    "characterId": "jung-era",
    "coverId": "bloom-into-you",
    "quoteId": "menou-virgin-road",
    "emojiId": "bloom-into-you",
    "shipId": "angeprin",
    "silhouetteId": "xiao-lan-wolf",
    "songId": "shiny-days"
  },
  "1348": {
    "classicId": "sono-hanabira",
    "characterId": "uika-misumi",
    "coverId": "saeki-sayaka",
    "quoteId": "kumiko-oumae",
    "emojiId": "tamen-de-gushi",
    "shipId": "ryoko-lapis",
    "silhouetteId": "renako-amaori",
    "songId": "shukufuku"
  },
  "1349": {
    "classicId": "princess-principal",
    "characterId": "homura-akemi",
    "coverId": "dear-my-teacher",
    "quoteId": "hilda-cross-ange",
    "emojiId": "otherside-picnic",
    "shipId": "sulemio",
    "silhouetteId": "aoi-amawashi",
    "songId": "magia-madoka"
  },
  "1350": {
    "classicId": "i-married-my-best-friend",
    "characterId": "miku-kohinata",
    "coverId": "madoka-magica",
    "quoteId": "mai-oduka",
    "emojiId": "prisma-illya",
    "shipId": "nanaki-kanade",
    "silhouetteId": "kotori-minami",
    "songId": "red-liberation"
  },
  "1351": {
    "classicId": "catch-these-hands",
    "characterId": "yukari-akiyama",
    "coverId": "cheerful-amnesia",
    "quoteId": "illyasviel-von-einzbern",
    "emojiId": "soulmate-gl",
    "shipId": "madohomu",
    "silhouetteId": "ginko-yurishiro",
    "songId": "irodori-jelee"
  },
  "1352": {
    "classicId": "new-game",
    "characterId": "maho-akashi",
    "coverId": "fuzoroi-no-renri",
    "quoteId": "hinata-hoshino",
    "emojiId": "green-tea-bitch",
    "shipId": "ayaka-sora",
    "silhouetteId": "saki-miyanaga",
    "songId": "kimama-na-tenshi-tachi"
  },
  "1353": {
    "classicId": "fed-up-office-lady-villainess",
    "characterId": "kaori-asaka",
    "coverId": "kageki-shojo",
    "quoteId": "mirei-shikishima",
    "emojiId": "girls-last-tour",
    "shipId": "mayumi-rin",
    "silhouetteId": "hifumi-takimoto",
    "songId": "guitar-loneliness"
  },
  "1354": {
    "classicId": "lycoris-recollect",
    "characterId": "mafuyu-tsurezure",
    "coverId": "yuri-is-my-job",
    "quoteId": "maria-cadenzavna-eve",
    "emojiId": "stardust-telepath",
    "shipId": "nijiryo",
    "silhouetteId": "jung-era",
    "songId": "connect-madoka"
  },
  "1355": {
    "classicId": "show-me-your-bust",
    "characterId": "shim-chong",
    "coverId": "girls-und-panzer",
    "quoteId": "sophie-twilight",
    "emojiId": "a-joyful-life",
    "shipId": "himayori",
    "silhouetteId": "nanaki-fujishiro",
    "songId": "cross-ange-op1"
  },
  "1356": {
    "classicId": "valkyrie-drive",
    "characterId": "maho-akashi",
    "coverId": "chou-kaguya-hime",
    "quoteId": "yachiyo-tsukimi",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "bibi-amy",
    "silhouetteId": "saeko-tsutsumi",
    "songId": "valkyrie-drive-op"
  },
  "1357": {
    "classicId": "the-moon-on-a-rainy-night",
    "characterId": "nozomi-kasaki",
    "coverId": "ring-my-bell",
    "quoteId": "miku-kohinata",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "hinatanoa",
    "silhouetteId": "lapis-tenebrae",
    "songId": "kimama-na-tenshi-tachi"
  },
  "1358": {
    "classicId": "lapis-relights",
    "characterId": "riko-sakurauchi",
    "coverId": "sono-hanabira",
    "quoteId": "ange-le-carre",
    "emojiId": "serenade",
    "shipId": "emma-vivian",
    "silhouetteId": "tomo-ebizuka",
    "songId": "valkyrie-drive-op"
  },
  "1359": {
    "classicId": "white-angels-have-no-wings",
    "characterId": "tomoka-kase",
    "coverId": "futarigurashi",
    "quoteId": "aki-wolf",
    "emojiId": "hello-melancholic",
    "shipId": "fuu-mashi",
    "silhouetteId": "kaguya-cosmic",
    "songId": "arc-en-ciel"
  },
  "1360": {
    "classicId": "bad-thinking-diary",
    "characterId": "sayaka-saeki",
    "coverId": "yuruyuri",
    "quoteId": "vivian-night-owls",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "sakinodoka",
    "silhouetteId": "hifumi-takimoto",
    "songId": "seishun-complex"
  },
  "1361": {
    "classicId": "magirevo",
    "characterId": "miorine-rembran",
    "coverId": "urara-meirochou",
    "quoteId": "yuko-yoshida",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "yukilisa",
    "silhouetteId": "madam-baek",
    "songId": "hectopascal"
  },
  "1362": {
    "classicId": "mage-and-demon-queen",
    "characterId": "matsuri-mizusawa",
    "coverId": "love-live-nijigasaki",
    "quoteId": "chidori-takamori",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "yoshimio",
    "silhouetteId": "aoi-amawashi",
    "songId": "alive-lycoris"
  },
  "1363": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "tomori-takamatsu",
    "coverId": "ms-vampire-who-lives-in-my-neighborhood",
    "quoteId": "shim-chong",
    "emojiId": "anemone-is-in-heat",
    "shipId": "dakyeong-seonhwa",
    "silhouetteId": "mashiro-kyou-kano",
    "songId": "zattou-bokura-no-machi"
  },
  "1364": {
    "classicId": "fuzoroi-no-renri",
    "characterId": "yori-asanagi",
    "coverId": "lily-yy",
    "quoteId": "ritsu-tainaka",
    "emojiId": "stardust-telepath",
    "shipId": "ririyuyu",
    "silhouetteId": "chisato-shirasagi",
    "songId": "soushou-innocent"
  },
  "1365": {
    "classicId": "the-summer-you-were-there",
    "characterId": "mafuyu-tsurezure",
    "coverId": "love-live-superstar",
    "quoteId": "nodoka-haramura",
    "emojiId": "yuri-is-my-job",
    "shipId": "ayaka-sora",
    "silhouetteId": "mashiro-komiyama",
    "songId": "sacred-world"
  },
  "1366": {
    "classicId": "action-heroine-cheer-fruits",
    "characterId": "special-week",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "michiru-kaioh",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "adachishima",
    "silhouetteId": "lu-nan",
    "songId": "kimi-ni-furete"
  },
  "1367": {
    "classicId": "yama-no-susume",
    "characterId": "anon-chihaya",
    "coverId": "our-teachers-are-dating",
    "quoteId": "sayaka-saeki",
    "emojiId": "symphogear",
    "shipId": "chikariko",
    "silhouetteId": "claire-francois",
    "songId": "tenbin-fragtime"
  },
  "1368": {
    "classicId": "jellyfish-cant-swim-in-the-night",
    "characterId": "maho-akashi",
    "coverId": "sailor-moon-s",
    "quoteId": "noa-himesaka",
    "emojiId": "k-on",
    "shipId": "raeclaire",
    "silhouetteId": "misaki-okusawa",
    "songId": "hectopascal"
  },
  "1369": {
    "classicId": "this-monster-wants-to-eat-me",
    "characterId": "seika-ijichi",
    "coverId": "kitanai-kimi",
    "quoteId": "sun-jing",
    "emojiId": "moonlight-garden",
    "shipId": "tsubamaria",
    "silhouetteId": "nanoha-chiba",
    "songId": "hectopascal"
  },
  "1370": {
    "classicId": "hino-san-no-baka",
    "characterId": "miyu-edelfelt",
    "coverId": "blue-reflection-ray",
    "quoteId": "rae-taylor",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "soratori",
    "silhouetteId": "uika-misumi",
    "songId": "sacred-world"
  },
  "1371": {
    "classicId": "vexations-of-a-shut-in-vampire",
    "characterId": "suzu-nekoyama",
    "coverId": "liz-to-aoi-tori",
    "quoteId": "mitsuki-yano",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "chito-yuuri",
    "silhouetteId": "kobayashi",
    "songId": "umapyoi-densetsu"
  },
  "1372": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "ayaka-shiraishi",
    "coverId": "machikado-mazoku",
    "quoteId": "yuri-tamura",
    "emojiId": "soulmate-gl",
    "shipId": "shijima-majime",
    "silhouetteId": "madam-baek",
    "songId": "kimi-ni-furete"
  },
  "1373": {
    "classicId": "catulus-syndrome",
    "characterId": "matsuri-mizusawa",
    "coverId": "saki",
    "quoteId": "mikage-futari",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "angeprin",
    "silhouetteId": "hye-ji-serenade",
    "songId": "connect-madoka"
  },
  "1374": {
    "classicId": "run-away-with-me-girl",
    "characterId": "nyamu-yuutenji",
    "coverId": "lycoris-recollect",
    "quoteId": "hina-gbc",
    "emojiId": "hana-ni-arashi",
    "shipId": "ran-moca",
    "silhouetteId": "kanoko-mamiya",
    "songId": "listen-htt"
  },
  "1375": {
    "classicId": "hanebado",
    "characterId": "aoi-amawashi",
    "coverId": "strike-witches",
    "quoteId": "yuuri-glt",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "momo-yuki",
    "silhouetteId": "dia-kurosawa",
    "songId": "valkyrie-drive-op"
  },
  "1376": {
    "classicId": "roll-over-and-die",
    "characterId": "suzu-suzukaze",
    "coverId": "mage-and-demon-queen",
    "quoteId": "nozomi-kasaki",
    "emojiId": "ring-my-bell",
    "shipId": "adachishima",
    "silhouetteId": "sumika-chibana",
    "songId": "deal-with-the-devil"
  },
  "1377": {
    "classicId": "futarigurashi",
    "characterId": "dia-kurosawa",
    "coverId": "k-on",
    "quoteId": "natori-ryoko",
    "emojiId": "this-monster-wants-to-eat-me",
    "shipId": "ange-hilda",
    "silhouetteId": "lenore-nevermore",
    "songId": "memories-comic-girls"
  },
  "1378": {
    "classicId": "uma-musume",
    "characterId": "nodoka-haramura",
    "coverId": "getting-to-know-grace",
    "quoteId": "maya-tendo",
    "emojiId": "assault-lily",
    "shipId": "soyosaki",
    "silhouetteId": "tokai-teio",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "1379": {
    "classicId": "futaribeya",
    "characterId": "umi-sonoda",
    "coverId": "valkyrie-drive",
    "quoteId": "utada-uta",
    "emojiId": "uma-musume",
    "shipId": "kanadia",
    "silhouetteId": "madoka-kaname",
    "songId": "tenbin-fragtime"
  },
  "1380": {
    "classicId": "love-doctor",
    "characterId": "kaoru-seta",
    "coverId": "girls-band-cry",
    "quoteId": "setsuna-yuki",
    "emojiId": "the-guy-she-was-interested-in",
    "shipId": "tohrubayashi",
    "silhouetteId": "arisa-ichigaya",
    "songId": "venus-line"
  },
  "1381": {
    "classicId": "sailor-moon-s",
    "characterId": "shizuku-hoshikawa",
    "coverId": "nevermore-webtoon",
    "quoteId": "haruka-takayama",
    "emojiId": "stardust-telepath",
    "shipId": "mayakuro",
    "silhouetteId": "tomoko-kuroki",
    "songId": "guruguru-dj"
  },
  "1382": {
    "classicId": "witch-from-mercury",
    "characterId": "yuu-yuutani",
    "coverId": "re-stage-dream-days",
    "quoteId": "elsa-dorothy",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "kasu-arisa",
    "silhouetteId": "nanase-natsume",
    "songId": "haruhikage"
  },
  "1383": {
    "classicId": "d4dj",
    "characterId": "yuzu-konohana",
    "coverId": "kill-me-now",
    "quoteId": "special-week",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "uta-ayaka",
    "silhouetteId": "woori-bust",
    "songId": "yuriyurararara"
  },
  "1384": {
    "classicId": "girls-last-tour",
    "characterId": "kikuri-hiroi",
    "coverId": "the-executioner-and-her-way-of-life",
    "quoteId": "anon-chihaya",
    "emojiId": "i-love-amy",
    "shipId": "soyosaki",
    "silhouetteId": "aki-wolf",
    "songId": "tenshi-ni-fureta-yo"
  },
  "1385": {
    "classicId": "always-human",
    "characterId": "eli-ayase",
    "coverId": "bang-dream-pico",
    "quoteId": "mirei-shikishima",
    "emojiId": "birdie-wing",
    "shipId": "norae-seola",
    "silhouetteId": "hina-hikawa",
    "songId": "flip-flappers-ed"
  },
  "1386": {
    "classicId": "crown-handler",
    "characterId": "yu-takasaki",
    "coverId": "girls-und-panzer",
    "quoteId": "harumi-taniguchi",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "akebi-erika",
    "silhouetteId": "ange-cross-ange",
    "songId": "valkyrie-drive-op"
  },
  "1387": {
    "classicId": "ring-my-bell",
    "characterId": "yuki-hanzomon",
    "coverId": "lily-yy",
    "quoteId": "harumi-taniguchi",
    "emojiId": "sakura-trick",
    "shipId": "hifumiaoba",
    "silhouetteId": "yachiyo-tsukimi",
    "songId": "red-birthmark"
  },
  "1388": {
    "classicId": "fluttering-feelings",
    "characterId": "claudine-saijo",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "grea-manaria",
    "emojiId": "sailor-moon-s",
    "shipId": "kagu-iro",
    "silhouetteId": "ayaka-shiraishi",
    "songId": "azalea-citrus"
  },
  "1389": {
    "classicId": "asagao-to-kase-san",
    "characterId": "yuni-asahina",
    "coverId": "crown-handler",
    "quoteId": "ritsu-tainaka",
    "emojiId": "tamen-de-gushi",
    "shipId": "madohomu",
    "silhouetteId": "suletta-mercury",
    "songId": "kimi-no-gin-no-niwa"
  },
  "1390": {
    "classicId": "futaribeya",
    "characterId": "momo-vampire",
    "coverId": "if-i-could-reach-you",
    "quoteId": "nomoto-yuki",
    "emojiId": "destroy-it-all-and-love-me-in-hell",
    "shipId": "karehika",
    "silhouetteId": "euphyllia-magenta",
    "songId": "kimama-na-tenshi-tachi"
  },
  "1391": {
    "classicId": "world-dai-star",
    "characterId": "kikuri-hiroi",
    "coverId": "akebi-chan",
    "quoteId": "hougetsu-shimamura",
    "emojiId": "magirevo",
    "shipId": "momo-yuki",
    "silhouetteId": "euphyllia-magenta",
    "songId": "kimi-ni-aeta-hi"
  },
  "1392": {
    "classicId": "hibike-euphonium",
    "characterId": "hougetsu-shimamura",
    "coverId": "green-tea-bitch",
    "quoteId": "nagisa-ootsuki",
    "emojiId": "yuru-camp",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "jiho-bust",
    "songId": "spicy-piece"
  },
  "1393": {
    "classicId": "long-awaited-feelings",
    "characterId": "mayumi-kodama",
    "coverId": "selection-project",
    "quoteId": "ayaka-shiraishi",
    "emojiId": "kill-me-now",
    "shipId": "inugami-nekoyama",
    "silhouetteId": "mitsuki-koga",
    "songId": "hoshi-no-dialogue"
  },
  "1394": {
    "classicId": "how-do-we-relationship",
    "characterId": "han-juhee",
    "coverId": "yuruyuri",
    "quoteId": "saeko-tsutsumi",
    "emojiId": "sailor-moon-s",
    "shipId": "lunan-yexing",
    "silhouetteId": "nina-iseri",
    "songId": "hana-no-tou"
  },
  "1395": {
    "classicId": "beauty-and-the-beast-girl",
    "characterId": "hanayo-koizumi",
    "coverId": "saeki-sayaka",
    "quoteId": "chuchu",
    "emojiId": "asagao-to-kase-san",
    "shipId": "uika-saki",
    "silhouetteId": "yuko-yoshida",
    "songId": "guruguru-dj"
  },
  "1396": {
    "classicId": "d4dj",
    "characterId": "majime-yamashita",
    "coverId": "yama-no-susume",
    "quoteId": "yuu-sonoda",
    "emojiId": "kitanai-kimi",
    "shipId": "ayuyuu",
    "silhouetteId": "chisato-shirasagi",
    "songId": "spicy-piece"
  },
  "1397": {
    "classicId": "vanadis-heart",
    "characterId": "hitori-gotoh",
    "coverId": "baili-jin",
    "quoteId": "ren",
    "emojiId": "long-awaited-feelings",
    "shipId": "aniseuphie",
    "silhouetteId": "futaba-isurugi",
    "songId": "listen-htt"
  },
  "1398": {
    "classicId": "she-loves-to-cook-and-she-loves-to-eat",
    "characterId": "mary-saotome",
    "coverId": "so-ra-no-wo-to",
    "quoteId": "lin-luxi",
    "emojiId": "otherside-picnic",
    "shipId": "karehika",
    "silhouetteId": "yuzu-konohana",
    "songId": "seishun-complex"
  },
  "1399": {
    "classicId": "hino-san-no-baka",
    "characterId": "mai-oduka",
    "coverId": "tamen-de-gushi",
    "quoteId": "riko-sakurauchi",
    "emojiId": "asagao-to-kase-san",
    "shipId": "hinatanoa",
    "silhouetteId": "tomoko-kuroki",
    "songId": "hoshi-no-tabibito"
  },
  "1400": {
    "classicId": "dear-my-teacher",
    "characterId": "mutsumi-wakaba",
    "coverId": "relationship-guidelines",
    "quoteId": "reina-kousaka",
    "emojiId": "im-in-love-with-the-villainess",
    "shipId": "jiho-woori",
    "silhouetteId": "maria-cadenzavna-eve",
    "songId": "deal-with-the-devil"
  },
  "1401": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "sayo-hikawa",
    "coverId": "princess-principal",
    "quoteId": "yu-takasaki",
    "emojiId": "love-live-sip",
    "shipId": "tokaku-haru",
    "silhouetteId": "nagisa-ootsuki",
    "songId": "red-birthmark"
  },
  "1402": {
    "classicId": "if-i-could-reach-you",
    "characterId": "rapid-rabbit",
    "coverId": "uma-musume",
    "quoteId": "fine-vampire",
    "emojiId": "green-tea-bitch",
    "shipId": "saki-mutsu",
    "silhouetteId": "tomoko-kuroki",
    "songId": "starlog-illya"
  },
  "1403": {
    "classicId": "crown-handler",
    "characterId": "rin-hoshizora",
    "coverId": "vanadis-heart",
    "quoteId": "makoto-shimizu",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "mahikano",
    "silhouetteId": "hanabi-natsuno",
    "songId": "zattou-bokura-no-machi"
  },
  "1404": {
    "classicId": "kakegurui",
    "characterId": "madam-baek",
    "coverId": "run-away-with-me-girl",
    "quoteId": "misuzu-moritani",
    "emojiId": "flip-flappers",
    "shipId": "mayakuro",
    "silhouetteId": "nadeshiko-kagamihara",
    "songId": "spicy-piece"
  },
  "1405": {
    "classicId": "getting-to-know-grace",
    "characterId": "natori-ryoko",
    "coverId": "houkago-teibou-nisshi",
    "quoteId": "tong-tong",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "akebi-erika",
    "silhouetteId": "grea",
    "songId": "guruguru-dj"
  },
  "1406": {
    "classicId": "straight-girl-trap",
    "characterId": "minato-asano",
    "coverId": "ms-vampire-who-lives-in-my-neighborhood",
    "quoteId": "momo-minamoto",
    "emojiId": "everyday-lily",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "yuuna-matsubara",
    "songId": "memories-comic-girls"
  },
  "1407": {
    "classicId": "lily-love",
    "characterId": "maria-vampire",
    "coverId": "bloom-into-you",
    "quoteId": "suzu-suzukaze",
    "emojiId": "assault-lily",
    "shipId": "izetta-fine",
    "silhouetteId": "mafuyu-tsurezure",
    "songId": "my-dream-girls"
  },
  "1408": {
    "classicId": "ring-my-bell",
    "characterId": "michiru-kaioh",
    "coverId": "getting-to-know-grace",
    "quoteId": "haru-ichinose",
    "emojiId": "kakegurui",
    "shipId": "tomo-rupa",
    "silhouetteId": "miho-nishizumi",
    "songId": "venus-line"
  },
  "1409": {
    "classicId": "what-does-the-fox-say",
    "characterId": "momo-minamoto",
    "coverId": "the-guy-she-was-interested-in",
    "quoteId": "mio-akiyama",
    "emojiId": "fragtime",
    "shipId": "hinako-asahi",
    "silhouetteId": "nina-iseri",
    "songId": "listen-htt"
  },
  "1410": {
    "classicId": "nevermore-webtoon",
    "characterId": "queen-velverosa",
    "coverId": "girls-und-panzer",
    "quoteId": "momo-minamoto",
    "emojiId": "kitanai-kimi",
    "shipId": "mamori-mirei",
    "silhouetteId": "kiyashu-vanadis",
    "songId": "starlog-illya"
  },
  "1411": {
    "classicId": "hina-logi",
    "characterId": "kyoko-toshino",
    "coverId": "tsubame-tip-off",
    "quoteId": "kanan-matsuura",
    "emojiId": "sakura-trick",
    "shipId": "maria-lan",
    "silhouetteId": "yuko-yoshida",
    "songId": "memories-comic-girls"
  },
  "1412": {
    "classicId": "yuri-seijin-naoko-san",
    "characterId": "eli-ayase",
    "coverId": "the-executioner-and-her-way-of-life",
    "quoteId": "hotaru-mizushina",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "shizukaori",
    "silhouetteId": "riri-hitotsuyanagi",
    "songId": "sacred-world"
  },
  "1413": {
    "classicId": "uma-musume",
    "characterId": "matsuri-mizusawa",
    "coverId": "kuttsukiboshi",
    "quoteId": "saki-kindaichi",
    "emojiId": "sheep-princess",
    "shipId": "emma-vivian",
    "silhouetteId": "mafuyu-tsurezure",
    "songId": "mayoiuta"
  },
  "1414": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "fine-vampire",
    "coverId": "lycoris-recollect",
    "quoteId": "kanade-kurokawa",
    "emojiId": "please-bully-me-miss-villainess",
    "shipId": "kase-yamada",
    "silhouetteId": "dia-kurosawa",
    "songId": "sacred-world"
  },
  "1415": {
    "classicId": "hello-melancholic",
    "characterId": "maya-tendo",
    "coverId": "ange-vierge",
    "quoteId": "majime-yamashita",
    "emojiId": "uma-musume",
    "shipId": "soyosaki",
    "silhouetteId": "princess-fine",
    "songId": "kimi-no-gin-no-niwa"
  },
  "1416": {
    "classicId": "brave-witches",
    "characterId": "kim-norae",
    "coverId": "wixoss",
    "quoteId": "misa-utsushicha",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "yukilisa",
    "silhouetteId": "saeko-tsutsumi",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "1417": {
    "classicId": "assault-lily-fruits",
    "characterId": "kumiko-oumae",
    "coverId": "saki",
    "quoteId": "yuko-yoshida",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "shimbaek",
    "silhouetteId": "michiru-kaioh",
    "songId": "haruhikage"
  },
  "1418": {
    "classicId": "akuma-no-riddle",
    "characterId": "ayumu-uehara",
    "coverId": "lily-yy",
    "quoteId": "lin-luxi",
    "emojiId": "yuru-camp",
    "shipId": "mashiruri",
    "silhouetteId": "honoka-kosaka",
    "songId": "soushou-innocent"
  },
  "1419": {
    "classicId": "kiniro-mosaic",
    "characterId": "moca-aoba",
    "coverId": "assault-lily-fruits",
    "quoteId": "da-kyeong",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "soratori",
    "silhouetteId": "momoka-kawaragi",
    "songId": "guruguru-dj"
  },
  "1420": {
    "classicId": "revue-starlight",
    "characterId": "akane-maekawa",
    "coverId": "love-live-nijigasaki",
    "quoteId": "mio-sakamoto",
    "emojiId": "stardust-telepath",
    "shipId": "utekiwi",
    "silhouetteId": "queen-velverosa",
    "songId": "yuriyurararara"
  },
  "1421": {
    "classicId": "ano-koro-no-aoi-hoshi",
    "characterId": "yvonne-smollett",
    "coverId": "gokujo",
    "quoteId": "woori-bust",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "ange-hilda",
    "silhouetteId": "mashiro-kyou-kano",
    "songId": "aozora-no-rhapsody"
  },
  "1422": {
    "classicId": "murcielago",
    "characterId": "kobayashi",
    "coverId": "failed-princesses",
    "quoteId": "sumika-chibana",
    "emojiId": "her-tale-of-shim-chong",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "tae-hanazono",
    "songId": "hoshi-no-tabibito"
  },
  "1423": {
    "classicId": "white-angels-have-no-wings",
    "characterId": "suzu-nekoyama",
    "coverId": "love-live-superstar",
    "quoteId": "yvonne-smollett",
    "emojiId": "ring-my-bell",
    "shipId": "misa-koko",
    "silhouetteId": "kano-yamanouchi",
    "songId": "seishun-complex"
  },
  "1424": {
    "classicId": "asteroid-in-love",
    "characterId": "momo-vampire",
    "coverId": "re-stage-dream-days",
    "quoteId": "papika",
    "emojiId": "revue-starlight",
    "shipId": "harumatsu",
    "silhouetteId": "ange-cross-ange",
    "songId": "connect-madoka"
  },
  "1425": {
    "classicId": "sabagebu",
    "characterId": "jung-era",
    "coverId": "stardust-telepath",
    "quoteId": "mutsumi-wakaba",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "yvonelsa",
    "silhouetteId": "kyoko-sakura",
    "songId": "blue-bud-netsuzou"
  },
  "1426": {
    "classicId": "hino-san-no-baka",
    "characterId": "iroha-sakayori",
    "coverId": "getting-to-know-grace",
    "quoteId": "lu-nan",
    "emojiId": "granbelm",
    "shipId": "madohomu",
    "silhouetteId": "terakomari-gandesblood",
    "songId": "cross-ange-op1"
  },
  "1427": {
    "classicId": "semelparous",
    "characterId": "suzu-suzukaze",
    "coverId": "always-human",
    "quoteId": "erika-kizaki",
    "emojiId": "otherside-picnic",
    "shipId": "tomo-rupa",
    "silhouetteId": "tomori-takamatsu",
    "songId": "seishun-complex"
  },
  "1428": {
    "classicId": "my-girlfriends-not-here-today",
    "characterId": "han-juhee",
    "coverId": "sailor-moon-s",
    "quoteId": "yuko-yoshida",
    "emojiId": "d4dj",
    "shipId": "shizukaori",
    "silhouetteId": "mirei-shikishima",
    "songId": "spicy-piece"
  },
  "1429": {
    "classicId": "kiss-and-white-lily",
    "characterId": "komichi-akebi",
    "coverId": "train-to-the-end",
    "quoteId": "nika-nanaura",
    "emojiId": "valkyrie-drive",
    "shipId": "mamori-mirei",
    "silhouetteId": "setsuna-yuki",
    "songId": "shukufuku"
  },
  "1430": {
    "classicId": "wataten-movie",
    "characterId": "shiori-oomi",
    "coverId": "dear-my-teacher",
    "quoteId": "hanayo-koizumi",
    "emojiId": "bang-dream-ave-mujica",
    "shipId": "renamai",
    "silhouetteId": "azusa-nakano",
    "songId": "listen-htt"
  },
  "1431": {
    "classicId": "our-wonderful-days",
    "characterId": "grea-manaria",
    "coverId": "mage-and-demon-queen",
    "quoteId": "uika-misumi",
    "emojiId": "fragtime",
    "shipId": "kourin",
    "silhouetteId": "lenore-nevermore",
    "songId": "hana-wa-odori-ya-iroha-ni-ho"
  },
  "1432": {
    "classicId": "tamayura",
    "characterId": "tomoka-kase",
    "coverId": "so-ra-no-wo-to",
    "quoteId": "yoshika-miyafuji",
    "emojiId": "kageki-shojo",
    "shipId": "mizore-nozomi",
    "silhouetteId": "yukari-akiyama",
    "songId": "hana-no-tou"
  },
  "1433": {
    "classicId": "release-the-spyce",
    "characterId": "hitori-gotoh",
    "coverId": "my-cute-little-kitten",
    "quoteId": "akari-tokitoh",
    "emojiId": "love-to-lie-angle",
    "shipId": "rinnade",
    "silhouetteId": "sarasa-watanabe",
    "songId": "hoshi-no-dialogue"
  },
  "1434": {
    "classicId": "lycoris-recollect",
    "characterId": "nyamu-yuutenji",
    "coverId": "a-joyful-life",
    "quoteId": "komichi-akebi",
    "emojiId": "gushing-over-magical-girls",
    "shipId": "honey-rabbit",
    "silhouetteId": "nomoto-yuki",
    "songId": "dreamriser"
  },
  "1435": {
    "classicId": "superwomen-in-love",
    "characterId": "momo-chiyoda",
    "coverId": "jellyfish-cant-swim-in-the-night",
    "quoteId": "mashiro-kyou-kano",
    "emojiId": "flip-flappers",
    "shipId": "kaoru-chisato",
    "silhouetteId": "aoi-amawashi",
    "songId": "flip-flappers-ed"
  },
  "1436": {
    "classicId": "love-doctor",
    "characterId": "hye-ji-serenade",
    "coverId": "vexations-of-a-shut-in-vampire",
    "quoteId": "princess-charlotte",
    "emojiId": "a-joyful-life",
    "shipId": "cocona-papika",
    "silhouetteId": "grea",
    "songId": "dream-solister"
  },
  "1437": {
    "classicId": "hana-to-hina",
    "characterId": "yuuri-glt",
    "coverId": "konohana-kitan",
    "quoteId": "sun-jing",
    "emojiId": "yuri-is-my-job",
    "shipId": "izetta-fine",
    "silhouetteId": "rupa",
    "songId": "go-go-maniac"
  },
  "1438": {
    "classicId": "nevermore-webtoon",
    "characterId": "hotaru-mizushina",
    "coverId": "wataten-movie",
    "quoteId": "tae-hanazono",
    "emojiId": "anemone-is-in-heat",
    "shipId": "yuunamimori",
    "silhouetteId": "papika",
    "songId": "tenbin-fragtime"
  },
  "1439": {
    "classicId": "asumi-chan",
    "characterId": "hanayo-koizumi",
    "coverId": "still-sick",
    "quoteId": "erika-kizaki",
    "emojiId": "chou-kaguya-hime",
    "shipId": "hanabi-konomi",
    "silhouetteId": "dia-kurosawa",
    "songId": "shukufuku"
  },
  "1440": {
    "classicId": "destroy-it-all-and-love-me-in-hell",
    "characterId": "chito-glt",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "ange-cross-ange",
    "emojiId": "izetta",
    "shipId": "meiyuzu",
    "silhouetteId": "rapid-rabbit",
    "songId": "asu-e-no-tobira"
  },
  "1441": {
    "classicId": "prisma-illya",
    "characterId": "tsubasa-kazanari",
    "coverId": "anne-happy",
    "quoteId": "yuu-akeuchi",
    "emojiId": "my-girlfriends-not-here-today",
    "shipId": "himayori",
    "silhouetteId": "matsuri-mizusawa",
    "songId": "yuriyurararara"
  },
  "1442": {
    "classicId": "mage-and-demon-queen",
    "characterId": "mizore-yoroizuka",
    "coverId": "everyday-lily",
    "quoteId": "makoto-shimizu",
    "emojiId": "love-live-sip",
    "shipId": "morimura",
    "silhouetteId": "chika-takami",
    "songId": "sakura-skip"
  },
  "1443": {
    "classicId": "flip-flappers",
    "characterId": "hibiki-sugawa",
    "coverId": "shino-to-ren",
    "quoteId": "kaoru-seta",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "takitomo",
    "silhouetteId": "azusa-nakano",
    "songId": "red-birthmark"
  },
  "1444": {
    "classicId": "kill-me-now",
    "characterId": "momo-chiyoda",
    "coverId": "tamen-de-gushi",
    "quoteId": "hifumi-takimoto",
    "emojiId": "yuru-camp",
    "shipId": "hinako-asahi",
    "silhouetteId": "yoshika-miyafuji",
    "songId": "magia-madoka"
  },
  "1445": {
    "classicId": "princess-connect-redive",
    "characterId": "yuna-yuki",
    "coverId": "fuzoroi-no-renri",
    "quoteId": "aoba-suzukaze",
    "emojiId": "everyday-lily",
    "shipId": "mahikano",
    "silhouetteId": "kaori-asaka",
    "songId": "alive-lycoris"
  },
  "1446": {
    "classicId": "roll-over-and-die",
    "characterId": "renako-amaori",
    "coverId": "yuuki-yuuna",
    "quoteId": "naoi-manaka",
    "emojiId": "anemone-is-in-heat",
    "shipId": "madohomu",
    "silhouetteId": "ritsu-tainaka",
    "songId": "haruhikage"
  },
  "1447": {
    "classicId": "an-easy-introduction-to-love-triangles",
    "characterId": "mel-pulse",
    "coverId": "mikagura-gakuen",
    "quoteId": "illyasviel-von-einzbern",
    "emojiId": "sheep-princess",
    "shipId": "shamimomo",
    "silhouetteId": "aoba-suzukaze",
    "songId": "my-dream-girls"
  },
  "1448": {
    "classicId": "princess-principal",
    "characterId": "michiru-kaioh",
    "coverId": "kimi-ga-shinu-made",
    "quoteId": "kanan-matsuura",
    "emojiId": "shimeji-simulation",
    "shipId": "mashiruri",
    "silhouetteId": "anon-chihaya",
    "songId": "guitar-loneliness"
  },
  "1449": {
    "classicId": "futaribeya",
    "characterId": "nana-daiba",
    "coverId": "dear-my-teacher",
    "quoteId": "yuni-asahina",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "shamimomo",
    "silhouetteId": "misaki-okusawa",
    "songId": "cross-ange-op1"
  },
  "1450": {
    "classicId": "fluttering-feelings",
    "characterId": "mikage-futari",
    "coverId": "sailor-moon-s",
    "quoteId": "kotori-minami",
    "emojiId": "bloom-into-you",
    "shipId": "misa-koko",
    "silhouetteId": "han-juhee",
    "songId": "raise-your-hands"
  },
  "1451": {
    "classicId": "anemone-is-in-heat",
    "characterId": "mimori-togo",
    "coverId": "goodbye-my-rose-garden",
    "quoteId": "mikage-futari",
    "emojiId": "kitanai-kimi",
    "shipId": "hibimiku",
    "silhouetteId": "mai-oduka",
    "songId": "aozora-no-rhapsody"
  },
  "1452": {
    "classicId": "i-love-amy",
    "characterId": "rae-taylor",
    "coverId": "hino-san-no-baka",
    "quoteId": "cocona",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "konatsukoyuki",
    "silhouetteId": "hotaru-mizushina",
    "songId": "hoshi-no-dialogue"
  },
  "1453": {
    "classicId": "ghosts-of-greywoods",
    "characterId": "sophie-twilight",
    "coverId": "roll-over-and-die",
    "quoteId": "yukina-minato",
    "emojiId": "senran-kagura",
    "shipId": "saya-hinako",
    "silhouetteId": "lisa-imai",
    "songId": "dreamriser"
  },
  "1454": {
    "classicId": "gushing-over-magical-girls",
    "characterId": "harumi-taniguchi",
    "coverId": "yuri-kuma-arashi",
    "quoteId": "minato-asano",
    "emojiId": "bang-dream-pico",
    "shipId": "chisataki",
    "silhouetteId": "hime-shiraki",
    "songId": "cross-ange-op1"
  },
  "1455": {
    "classicId": "love-live-sunshine",
    "characterId": "sarasa-watanabe",
    "coverId": "jellyfish-cant-swim-in-the-night",
    "quoteId": "shiori-oomi",
    "emojiId": "watamote",
    "shipId": "hinako-shiori",
    "silhouetteId": "yukari-akiyama",
    "songId": "my-dream-girls"
  },
  "1456": {
    "classicId": "kanojo-to-himitsu",
    "characterId": "ajisai-sena",
    "coverId": "doughnuts-under-a-crescent-moon",
    "quoteId": "sun-jing",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "kasu-arisa",
    "silhouetteId": "setsuna-yuki",
    "songId": "serendipity-flip"
  },
  "1457": {
    "classicId": "tamako-market",
    "characterId": "kim-norae",
    "coverId": "love-live-superstar",
    "quoteId": "yoshika-miyafuji",
    "emojiId": "miss-kobayashis-dragon-maid",
    "shipId": "annabel-lenore",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "won3chu-kissme"
  },
  "1458": {
    "classicId": "love-live-sunshine",
    "characterId": "yoo-jin-serenade",
    "coverId": "hello-melancholic",
    "quoteId": "io-utsushicha",
    "emojiId": "ange-vierge",
    "shipId": "koharu-mafuyu",
    "silhouetteId": "atori-mizutori",
    "songId": "snow-halation"
  },
  "1459": {
    "classicId": "bang-dream-ave-mujica",
    "characterId": "karen-aijo",
    "coverId": "princess-connect-redive",
    "quoteId": "sophie-twilight",
    "emojiId": "she-loves-to-cook-and-she-loves-to-eat",
    "shipId": "mary-yumeko",
    "silhouetteId": "michiru-kaioh",
    "songId": "umapyoi-densetsu"
  },
  "1460": {
    "classicId": "i-married-my-best-friend",
    "characterId": "toriko-nishina",
    "coverId": "beauty-and-the-beast-girl",
    "quoteId": "lisa-imai",
    "emojiId": "anemone-is-in-heat",
    "shipId": "yoshimio",
    "silhouetteId": "tomoko-kuroki",
    "songId": "venus-line"
  },
  "1461": {
    "classicId": "sono-hanabira",
    "characterId": "aki-wolf",
    "coverId": "watanare",
    "quoteId": "majime-yamashita",
    "emojiId": "asagao-to-kase-san",
    "shipId": "raeclaire",
    "silhouetteId": "mayumi-kodama",
    "songId": "spicy-piece"
  },
  "1462": {
    "classicId": "vampire-in-the-garden",
    "characterId": "fine-vampire",
    "coverId": "bang-dream",
    "quoteId": "azusa-nakano",
    "emojiId": "magirevo",
    "shipId": "momo-fine",
    "silhouetteId": "nyamu-yuutenji",
    "songId": "my-dream-girls"
  },
  "1463": {
    "classicId": "granbelm",
    "characterId": "yumeko-jabami",
    "coverId": "catch-these-hands",
    "quoteId": "hifumi-takimoto",
    "emojiId": "asagao-to-kase-san",
    "shipId": "menou-akari",
    "silhouetteId": "iroha-sakayori",
    "songId": "ano-mori-de-matteru"
  },
  "1464": {
    "classicId": "gakkou-gurashi",
    "characterId": "raana-kaname",
    "coverId": "our-wonderful-days",
    "quoteId": "cocona",
    "emojiId": "jellyfish-cant-swim-in-the-night",
    "shipId": "himemitsuki",
    "silhouetteId": "yoo-jin-serenade",
    "songId": "hikari-no-senritsu"
  },
  "1465": {
    "classicId": "always-human",
    "characterId": "rin-shima",
    "coverId": "bad-thinking-diary",
    "quoteId": "hina-hikawa",
    "emojiId": "whispering-you-a-love-song",
    "shipId": "nina-hina",
    "silhouetteId": "cha-yoonsung",
    "songId": "hoshi-to-hana"
  },
  "1466": {
    "classicId": "konohana-kitan",
    "characterId": "mizore-yoroizuka",
    "coverId": "bang-dream-pico",
    "quoteId": "chisato-shirasagi",
    "emojiId": "soulmate-gl",
    "shipId": "makoto-akane",
    "silhouetteId": "sumika-chibana",
    "songId": "seishun-complex"
  },
  "1467": {
    "classicId": "kuzu-no-honkai",
    "characterId": "ye-xing",
    "coverId": "maria-holic",
    "quoteId": "lenore-nevermore",
    "emojiId": "assault-lily-league",
    "shipId": "asuka-saki",
    "silhouetteId": "fuuko-taki",
    "songId": "dream-solister"
  },
  "1468": {
    "classicId": "brave-witches",
    "characterId": "nika-nanaura",
    "coverId": "the-summer-you-were-there",
    "quoteId": "hina-hikawa",
    "emojiId": "always-human",
    "shipId": "maria-lan",
    "silhouetteId": "ritsu-tainaka",
    "songId": "himitsu-no-melody"
  },
  "1469": {
    "classicId": "tsubame-tip-off",
    "characterId": "kaoru-seta",
    "coverId": "green-tea-bitch",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "princess-principal",
    "shipId": "harumatsu",
    "silhouetteId": "mio-sakamoto",
    "songId": "eternal-eternity"
  },
  "1470": {
    "classicId": "birdie-wing",
    "characterId": "nika-nanaura",
    "coverId": "blue-reflection-ray",
    "quoteId": "eve",
    "emojiId": "vexations-of-a-shut-in-vampire",
    "shipId": "tokaku-haru",
    "silhouetteId": "ayumu-uehara",
    "songId": "sakura-skip"
  },
  "1471": {
    "classicId": "show-me-your-bust",
    "characterId": "momo-sheep",
    "coverId": "so-ra-no-wo-to",
    "quoteId": "chisato-nishikigi",
    "emojiId": "long-awaited-feelings",
    "shipId": "sarasa-ai",
    "silhouetteId": "nanaki-fujishiro",
    "songId": "one-room-sugar-life"
  },
  "1472": {
    "classicId": "bad-thinking-diary",
    "characterId": "tokaku-azuma",
    "coverId": "i-married-my-best-friend",
    "quoteId": "kiyashu-vanadis",
    "emojiId": "futari-monologue",
    "shipId": "miho-yukari",
    "silhouetteId": "kumiko-oumae",
    "songId": "valkyrie-drive-op"
  },
  "1473": {
    "classicId": "inugami-nekoyama",
    "characterId": "mimi-mimily",
    "coverId": "train-to-the-end",
    "quoteId": "yuki-kyou-kano",
    "emojiId": "shino-to-ren",
    "shipId": "ririyuyu",
    "silhouetteId": "yuuna-matsubara",
    "songId": "my-dream-girls"
  },
  "1474": {
    "classicId": "cross-ange",
    "characterId": "noa-himesaka",
    "coverId": "sono-hanabira",
    "quoteId": "suzu-nekoyama",
    "emojiId": "cross-ange",
    "shipId": "yukilisa",
    "silhouetteId": "nozomi-kasaki",
    "songId": "synchrogazer"
  },
  "1475": {
    "classicId": "tamako-market",
    "characterId": "takina-inoue",
    "coverId": "tamayura",
    "quoteId": "kurumi-yoshizawa",
    "emojiId": "how-do-we-relationship",
    "shipId": "kumiko-reina",
    "silhouetteId": "woori-bust",
    "songId": "zattou-bokura-no-machi"
  },
  "1476": {
    "classicId": "an-easy-introduction-to-love-triangles",
    "characterId": "yukina-minato",
    "coverId": "fragtime",
    "quoteId": "nika-nanaura",
    "emojiId": "manaria-friends",
    "shipId": "yuzu-satsuki",
    "silhouetteId": "kyoko-toshino",
    "songId": "follow-your-arrows"
  },
  "1477": {
    "classicId": "mage-and-demon-queen",
    "characterId": "maria-cadenzavna-eve",
    "coverId": "even-though-were-adults",
    "quoteId": "shiina-kakure",
    "emojiId": "uma-musume",
    "shipId": "anontomo",
    "silhouetteId": "mamori-tokonome",
    "songId": "arc-en-ciel"
  },
  "1478": {
    "classicId": "serenade",
    "characterId": "hikari-kagura",
    "coverId": "liz-to-aoi-tori",
    "quoteId": "silence-suzuka",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "yuni-fuuko",
    "silhouetteId": "yuu-yuutani",
    "songId": "kimi-ni-furete"
  },
  "1479": {
    "classicId": "how-do-we-relationship",
    "characterId": "yoshika-miyafuji",
    "coverId": "bad-thinking-diary",
    "quoteId": "rae-taylor",
    "emojiId": "yuru-camp",
    "shipId": "yuni-nanase",
    "silhouetteId": "lu-nan",
    "songId": "connect-madoka"
  },
  "1480": {
    "classicId": "tropical-fish",
    "characterId": "hibiki-sugawa",
    "coverId": "hina-logi",
    "quoteId": "shiori-oomi",
    "emojiId": "days-of-love-at-seagull-villa",
    "shipId": "mahikano",
    "silhouetteId": "ren",
    "songId": "seishun-complex"
  },
  "1481": {
    "classicId": "futaribeya",
    "characterId": "nanase-natsume",
    "coverId": "flip-flappers",
    "quoteId": "akane-maekawa",
    "emojiId": "yuru-camp",
    "shipId": "nijiryo",
    "silhouetteId": "yukari-akiyama",
    "songId": "listen-htt"
  },
  "1482": {
    "classicId": "fuzoroi-no-renri",
    "characterId": "yu-takasaki",
    "coverId": "night-owls-and-summer-skies",
    "quoteId": "villhaze",
    "emojiId": "bang-dream",
    "shipId": "nanami-yuuna",
    "silhouetteId": "hikari-kagura",
    "songId": "hoshi-no-dialogue"
  },
  "1483": {
    "classicId": "kiniro-mosaic",
    "characterId": "minato-asano",
    "coverId": "love-live-nijigasaki",
    "quoteId": "lee-yeowool",
    "emojiId": "cant-defy-the-lonely-girl",
    "shipId": "era-yoonsung",
    "silhouetteId": "nadeshiko-kagamihara",
    "songId": "flip-flappers-ed"
  },
  "1484": {
    "classicId": "my-food-looks-very-cute",
    "characterId": "kanade-kurokawa",
    "coverId": "gakkou-gurashi",
    "quoteId": "tomori-takamatsu",
    "emojiId": "my-food-seems-to-be-very-cute",
    "shipId": "mel-lynn",
    "silhouetteId": "mai-oduka",
    "songId": "kokoro-ni-tsubomi"
  },
  "1485": {
    "classicId": "my-cute-little-kitten",
    "characterId": "illyasviel-von-einzbern",
    "coverId": "an-easy-introduction-to-love-triangles",
    "quoteId": "misa-utsushicha",
    "emojiId": "sailor-moon-s",
    "shipId": "chikariko",
    "silhouetteId": "satou-matsuzaka",
    "songId": "eternal-eternity"
  },
  "1486": {
    "classicId": "gochuumon-wa-usagi",
    "characterId": "hikari-kagura",
    "coverId": "tari-tari",
    "quoteId": "nyamu-yuutenji",
    "emojiId": "bang-dream-pico",
    "shipId": "juhee-yeowool",
    "silhouetteId": "takina-inoue",
    "songId": "seishun-complex"
  },
  "1487": {
    "classicId": "otome-no-teikoku",
    "characterId": "dia-kurosawa",
    "coverId": "uma-musume",
    "quoteId": "seon-hwa",
    "emojiId": "vanadis-heart",
    "shipId": "shizukaori",
    "silhouetteId": "yukari-akiyama",
    "songId": "listen-htt"
  },
  "1488": {
    "classicId": "the-summer-you-were-there",
    "characterId": "qiu-tong",
    "coverId": "ride-or-die",
    "quoteId": "yumeko-jabami",
    "emojiId": "happy-sugar-life",
    "shipId": "aya-chisato",
    "silhouetteId": "umiri-yahata",
    "songId": "ano-mori-de-matteru"
  },
  "1489": {
    "classicId": "beauty-and-the-beast-girl",
    "characterId": "yuri-tamura",
    "coverId": "bang-dream-ave-mujica",
    "quoteId": "airi-sezaki",
    "emojiId": "asagao-to-kase-san",
    "shipId": "tokaku-haru",
    "silhouetteId": "ayumu-uehara",
    "songId": "follow-your-arrows"
  },
  "1490": {
    "classicId": "world-dai-star",
    "characterId": "yukina-minato",
    "coverId": "witch-from-mercury",
    "quoteId": "konatsu-amano",
    "emojiId": "girls-last-tour",
    "shipId": "hinako-asahi",
    "silhouetteId": "ritsu-tainaka",
    "songId": "my-dream-girls"
  },
  "1491": {
    "classicId": "bang-dream-ave-mujica",
    "characterId": "cocona",
    "coverId": "the-summer-you-were-there",
    "quoteId": "madam-baek",
    "emojiId": "assault-lily-league",
    "shipId": "yuiazu",
    "silhouetteId": "sakiko-togawa",
    "songId": "other-side-of-wall"
  },
  "1492": {
    "classicId": "always-human",
    "characterId": "fine-vampire",
    "coverId": "roll-over-and-die",
    "quoteId": "seika-ijichi",
    "emojiId": "ano-koro-no-aoi-hoshi",
    "shipId": "chisataki",
    "silhouetteId": "chito-glt",
    "songId": "tenbin-fragtime"
  },
  "1493": {
    "classicId": "qualia-the-purple",
    "characterId": "hibiki-sugawa",
    "coverId": "konohana-kitan",
    "quoteId": "haruka-tenoh",
    "emojiId": "bloom-into-you",
    "shipId": "yvonelsa",
    "silhouetteId": "grea-manaria",
    "songId": "red-birthmark"
  },
  "1494": {
    "classicId": "her-tale-of-shim-cheong",
    "characterId": "hinata-hoshino",
    "coverId": "semelparous",
    "quoteId": "rin-touyama",
    "emojiId": "shimeji-simulation",
    "shipId": "haruyuu",
    "silhouetteId": "hilda-cross-ange",
    "songId": "shiny-days"
  },
  "1495": {
    "classicId": "straight-girl-trap",
    "characterId": "nanaki-fujishiro",
    "coverId": "tropical-fish",
    "quoteId": "kobayashi",
    "emojiId": "prisma-illya",
    "shipId": "chidori-nanoha",
    "silhouetteId": "haru-ichinose",
    "songId": "won3chu-kissme"
  },
  "1496": {
    "classicId": "netsuzou-trap",
    "characterId": "akane-maekawa",
    "coverId": "please-bully-me-miss-villainess",
    "quoteId": "mamori-tokonome",
    "emojiId": "chou-kaguya-hime",
    "shipId": "sarasa-ai",
    "silhouetteId": "shim-chong",
    "songId": "my-dream-girls"
  },
  "1497": {
    "classicId": "tropical-fish",
    "characterId": "chisato-shirasagi",
    "coverId": "tamen-de-gushi",
    "quoteId": "shim-chong",
    "emojiId": "anemone-is-in-heat",
    "shipId": "kiyashu-vayuela",
    "silhouetteId": "hibiki-tachibana",
    "songId": "kimi-no-tonari-de-adachi"
  },
  "1498": {
    "classicId": "harukana-receive",
    "characterId": "fine-vampire",
    "coverId": "the-moon-on-a-rainy-night",
    "quoteId": "seon-hwa",
    "emojiId": "manaria-friends",
    "shipId": "sumikanoko",
    "silhouetteId": "nadeshiko-kagamihara",
    "songId": "won3chu-kissme"
  },
  "1499": {
    "classicId": "girls-und-panzer",
    "characterId": "yuni-asahina",
    "coverId": "otherside-picnic",
    "quoteId": "kasuga-totoko",
    "emojiId": "k-on",
    "shipId": "sunjing-qiutong",
    "silhouetteId": "sumika-chibana",
    "songId": "kokoro-ni-tsubomi"
  },
  "1500": {
    "classicId": "even-if-it-was-just-once",
    "characterId": "euphyllia-magenta",
    "coverId": "symphogear",
    "quoteId": "nina-iseri",
    "emojiId": "ms-vampire-who-lives-in-my-neighborhood",
    "shipId": "hinako-asahi",
    "silhouetteId": "sayaka-saeki",
    "songId": "tenbin-fragtime"
  }
};
