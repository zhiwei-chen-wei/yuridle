import fs from 'fs';

// Read all characters to build name/id -> avatar mapping
const charContent = fs.readFileSync('src/data/yuriCharacters.ts', 'utf8');
const charIdRegex = /id:\s*['"]([^'"]+)['"]/g;
const charNameRegex = /name:\s*['"]([^'"]+)['"]/g;
const charAvatarRegex = /avatar:\s*['"]([^'"]+)['"]/g;

const ids = [...charContent.matchAll(charIdRegex)].map(m => m[1]);
const names = [...charContent.matchAll(charNameRegex)].map(m => m[1]);
const avatars = [...charContent.matchAll(charAvatarRegex)].map(m => m[1]);

const avatarMap = {
  'terakomari-gandesblood': 'https://static.wikia.nocookie.net/yuripedia/images/e/e6/Terakomari_Gandesblood_box.jpg/revision/latest?cb=20260123190452',
  'konatsu-amano': 'https://static.wikia.nocookie.net/yuripedia/images/c/c2/Amano_Konatsu.jpg/revision/latest/scale-to-width-down/221?cb=20220909143528',
  'kobayashi': 'https://static.wikia.nocookie.net/yuripedia/images/5/52/Kobayashi_5.png/revision/latest?cb=20190924183639',
  'yui-yamada': 'https://static.wikia.nocookie.net/yuripedia/images/a/aa/Yui_Yamada.png/revision/latest/scale-to-width-down/90?cb=20221026072312',
  'tomoka-kase': 'https://static.wikia.nocookie.net/yuripedia/images/4/4a/Tomoka_Kase.png/revision/latest/scale-to-width-down/101?cb=20221026072300'
};

for (let i = 0; i < ids.length; i++) {
  avatarMap[ids[i]] = avatars[i];
  avatarMap[names[i]] = avatars[i];
}

const SHIPS = [
  {
    id: 'sulemio',
    shipName: 'SuleMio',
    japaneseName: 'スレミオ',
    seriesId: 'witch-from-mercury',
    seriesTitle: 'Mobile Suit Gundam: The Witch from Mercury',
    characters: ['Suletta Mercury', 'Miorine Rembran'],
    charKeys: ['suletta-mercury', 'miorine-rembran'],
    dynamics: ['Princess & Groom', 'Holder Engagement', 'Opposites Attract'],
    isCanon: true,
    description: 'Suletta wins Miorine\'s hand in marriage through the Asticassia Holder duel in episode 1. Their bond evolves from arranged fiancees into deep, tender mutual devotion that saves the solar system, culminating in matching wedding rings in the epilogue.'
  },
  {
    id: 'chisataki',
    shipName: 'ChisaTaki',
    japaneseName: 'ちさたき',
    seriesId: 'lycoris-recoil',
    seriesTitle: 'Lycoris Recoil',
    characters: ['Chisato Nishikigi', 'Takina Inoue'],
    charKeys: ['chisato-nishikigi', 'takina-inoue'],
    dynamics: ['Sun & Moon', 'Partners in Crime', 'Mutual Lifesavers'],
    isCanon: false,
    description: 'A sunny, pacifist supersoldier and a disciplined former elite operative find a new home together at Cafe LycoReco. Takina\'s famous scream to protect Chisato\'s artificial heart cemented them as one of modern anime\'s most beloved pairings.'
  },
  {
    id: 'yuutou',
    shipName: 'YuuTou',
    japaneseName: 'やが君 (燈侑)',
    seriesId: 'bloom-into-you',
    seriesTitle: 'Bloom Into You',
    characters: ['Yuu Koito', 'Touko Nanami'],
    charKeys: ['yuu-koito', 'touko-nanami'],
    dynamics: ['Underclassman & Senpai', 'Identity & Acceptance', 'Slow Burn Romance'],
    isCanon: true,
    description: 'Yuu believes she cannot experience romantic feelings until she meets student council president Touko, who only allows Yuu to see the fragile girl beneath her flawless facade. Their journey into self-love and mutual romance is the modern gold standard of Yuri.'
  },
  {
    id: 'meiyuzu',
    shipName: 'MeiYuzu',
    japaneseName: 'ゆずめい',
    seriesId: 'citrus',
    seriesTitle: 'Citrus',
    characters: ['Yuzu Aihara', 'Mei Aihara'],
    charKeys: ['yuzu-aihara', 'mei-aihara'],
    dynamics: ['Stepsisters', 'Gyaru & Honor Student', 'Passionate Devotion'],
    isCanon: true,
    description: 'Polar opposites brought under the same roof by their parents\' remarriage. Yuzu\'s relentless warmth melts Mei\'s frigid isolation, weathering school rules, societal expectations, and family duty until they officially tie the knot in Citrus+.'
  },
  {
    id: 'madohomu',
    shipName: 'MadoHomu',
    japaneseName: 'まどほむ',
    seriesId: 'madoka-magica',
    seriesTitle: 'Puella Magi Madoka Magica',
    characters: ['Madoka Kaname', 'Homura Akemi'],
    charKeys: ['madoka-kaname', 'homura-akemi'],
    dynamics: ['Across Endless Timelines', 'Goddess & Devil', 'Transcendent Love'],
    isCanon: true,
    description: 'Homura repeats nearly one hundred timelines and endures decades of psychological torture solely to keep Madoka alive. In the movie Rebellion, Homura declares that her feelings for Madoka are more passionate than hope and deeper than despair—a sentiment she names "Love".'
  },
  {
    id: 'kyosaya',
    shipName: 'KyoSaya',
    japaneseName: '杏さや',
    seriesId: 'madoka-magica',
    seriesTitle: 'Puella Magi Madoka Magica',
    characters: ['Kyoko Sakura', 'Sayaka Miki'],
    charKeys: ['kyoko-sakura', 'sayaka-miki'],
    dynamics: ['Enemies to Lovers', 'Shared Tragedy', 'Soulmates in Valhalla'],
    isCanon: false,
    description: 'Starting as bitter ideological enemies clashing over justice and survival, Kyoko recognizes her younger self in Sayaka. When Sayaka falls into despair as the witch Oktavia, Kyoko chooses to perish alongside her so she will never have to be alone in the dark.'
  },
  {
    id: 'bocchiku',
    shipName: 'BocchIku',
    japaneseName: 'ぼ喜多',
    seriesId: 'bocchi-the-rock',
    seriesTitle: 'Bocchi the Rock!',
    characters: ['Hitori Gotoh', 'Kita Ikuyo'],
    charKeys: ['hitori-gotoh', 'kita-ikuyo'],
    dynamics: ['Gloom & Radiance', 'Guitar Tutor & Vocals', 'Kita-Aura'],
    isCanon: false,
    description: 'Extroverted socialite Kita is drawn to Bocchi\'s raw guitar brilliance, while Bocchi finds herself blinded yet comforted by Kita\'s glowing aura. Kita\'s promise to become someone Bocchi can proudly lean on is one of the emotional peaks of Kessoku Band.'
  },
  {
    id: 'nijiryo',
    shipName: 'NijiRyo',
    japaneseName: '虹リョウ',
    seriesId: 'bocchi-the-rock',
    seriesTitle: 'Bocchi the Rock!',
    characters: ['Nijika Ijichi', 'Ryo Yamada'],
    charKeys: ['nijika-ijichi', 'ryo-yamada'],
    dynamics: ['Band Parents', 'Caretaker & Eccentric Genius', 'Rhythm Section'],
    isCanon: false,
    description: 'The heartbeat and backbone of Kessoku Band. Sensible Nijika constantly lends money, feeds, and chides the free-spirited bassist Ryo, while Ryo secretly wrote music honoring Nijika\'s late mother and childhood dreams.'
  },
  {
    id: 'kikusei',
    shipName: 'KikuSei',
    japaneseName: 'きく星',
    seriesId: 'bocchi-the-rock',
    seriesTitle: 'Bocchi the Rock!',
    characters: ['Kikuri Hiroi', 'Seika Ijichi'],
    charKeys: ['kikuri-hiroi', 'seika-ijichi'],
    dynamics: ['Drunkard & Manager', 'College Bandmates', 'Tough Love'],
    isCanon: false,
    description: 'Former college bandmates who understand each other\'s deepest vulnerabilities. STARRY livehouse manager Seika perpetually complains about Kikuri\'s sake-drenched antics yet never fails to brew her hangover tea and give her a safe place to sleep.'
  },
  {
    id: 'anontomo',
    shipName: 'AnonTomo',
    japaneseName: 'あのとも',
    seriesId: 'mygo',
    seriesTitle: 'BanG Dream! It\'s MyGO!!!!!',
    characters: ['Anon Chihaya', 'Tomori Takamatsu'],
    charKeys: ['anon-chihaya', 'tomori-takamatsu'],
    dynamics: ['Anchor & Lifesaver', 'Mutual Rebirth', 'Band of Lost Souls'],
    isCanon: false,
    description: 'When Tomori felt she was broken beyond repair, Anon pulled her back to the live stage and handed her a band notebook. Their shared promise to remain "lost together for the rest of our lives" is the emotional foundation of MyGO!!!!!'
  },
  {
    id: 'takitomo',
    shipName: 'TakiTomo',
    japaneseName: 'りきとも',
    seriesId: 'mygo',
    seriesTitle: 'BanG Dream! It\'s MyGO!!!!!',
    characters: ['Taki Shiina', 'Tomori Takamatsu'],
    charKeys: ['taki-shiina', 'tomori-takamatsu'],
    dynamics: ['Fierce Protector & Fragile Muse', 'Tsundere Loyalty', 'Drink Bar Confessions'],
    isCanon: false,
    description: 'Taki\'s blunt exterior vanishes the moment Tomori enters the room. She pours all her protective instincts into ensuring Tomori\'s words and feelings are shielded from harm, providing an unwavering rock behind the drum kit.'
  },
  {
    id: 'soyosaki',
    shipName: 'SoyoSaki',
    japaneseName: 'そよさき',
    seriesId: 'mygo',
    seriesTitle: 'BanG Dream! It\'s MyGO!!!!!',
    characters: ['Soyo Nagasaki', 'Sakiko Togawa'],
    charKeys: ['soyo-nagasaki', 'sakiko-togawa'],
    dynamics: ['Obsession & Rejection', 'Ojou-sama Tragedy', 'Lingering Grief'],
    isCanon: false,
    description: 'The unresolved angst that tore CRYCHIC apart. Soyo went to desperate, manipulative lengths to rebuild the oasis Sakiko vanished from, while Sakiko bears heavy aristocratic burdens that forced her into cold detachment.'
  },
  {
    id: 'yukilisa',
    shipName: 'YukiLisa',
    japaneseName: 'ゆきリサ',
    seriesId: 'bang-dream',
    seriesTitle: 'BanG Dream!',
    characters: ['Yukina Minato', 'Lisa Imai'],
    charKeys: ['yukina-minato', 'lisa-imai'],
    dynamics: ['Childhood Soulmates', 'Stern Queen & Caring Consort', 'Unspoken Trust'],
    isCanon: false,
    description: 'Next-door childhood friends where Lisa taught herself bass solely to support Yukina\'s pursuit of music. Lisa remains the only person capable of softening the austere frontwoman of Roselia with freshly baked cookies and warm scoldings.'
  },
  {
    id: 'sayohina',
    shipName: 'SayoHina',
    japaneseName: 'さよひな',
    seriesId: 'bang-dream',
    seriesTitle: 'BanG Dream!',
    characters: ['Sayo Hikawa', 'Hina Hikawa'],
    charKeys: ['sayo-hikawa', 'hina-hikawa'],
    dynamics: ['Twin Sisters', 'Inferiority & Unconditional Adoration', 'Tandem Stars'],
    isCanon: false,
    description: 'Sayo spent years suffering under the shadow of Hina\'s effortless genius, but Hina\'s adoration for her sister never wavered. Their journey to reconcile and share the stage together produced some of the most emotionally charged events in BanG Dream lore.'
  },
  {
    id: 'nozoeli',
    shipName: 'NozoEli',
    japaneseName: 'のぞえり',
    seriesId: 'love-live-sip',
    seriesTitle: 'Love Live! School Idol Project',
    characters: ['Nozomi Tojo', 'Eli Ayase'],
    charKeys: ['nozomi-tojo', 'eli-ayase'],
    dynamics: ['Student Council Duo', 'Fate & Tarot', 'Emotional Pillars'],
    isCanon: false,
    description: 'Nozomi saw through Eli\'s stiff, isolated persona when she transferred to Otonokizaka and gently guided her to follow her true dreams. The name "Muse" was chosen by Nozomi so the nine girls could unite around Eli and Honoka.'
  },
  {
    id: 'nicomaki',
    shipName: 'NicoMaki',
    japaneseName: 'にこまき',
    seriesId: 'love-live-sip',
    seriesTitle: 'Love Live! School Idol Project',
    characters: ['Nico Yazawa', 'Maki Nishikino'],
    charKeys: ['nico-yazawa', 'maki-nishikino'],
    dynamics: ['Double Tsundere', 'Senior & Junior', 'Opposites in Background'],
    isCanon: false,
    description: 'A wealthy piano prodigy and an impoverished aspiring top idol who constantly bicker yet share the most genuine vulnerability. From shared train rides to duet tracks, NicoMaki remains one of anime history\'s most iconic pairings.'
  },
  {
    id: 'kotoumi',
    shipName: 'KotoUmi',
    japaneseName: 'ことうみ',
    seriesId: 'love-live-sip',
    seriesTitle: 'Love Live! School Idol Project',
    characters: ['Kotori Minami', 'Umi Sonoda'],
    charKeys: ['kotori-minami', 'umi-sonoda'],
    dynamics: ['Childhood Triad', 'Sweetheart & Disciplinarian', 'Costume & Lyricist'],
    isCanon: false,
    description: 'Umi\'s stern archer discipline melts in the face of Kotori\'s gentle sweetness. Whenever Honoka runs wild, Kotori and Umi exchange fond, knowing sighs while silently steering their group forward.'
  },
  {
    id: 'rinpana',
    shipName: 'RinPana',
    japaneseName: 'りんぱな',
    seriesId: 'love-live-sip',
    seriesTitle: 'Love Live! School Idol Project',
    characters: ['Rin Hoshizora', 'Hanayo Koizumi'],
    charKeys: ['rin-hoshizora', 'hanayo-koizumi'],
    dynamics: ['Inseparable Childhood Friends', 'Tomboy & Flustered Idol Fan', 'Mutual Courage'],
    isCanon: false,
    description: 'Hanayo gave Rin the courage to accept her femininity and wear bridal dresses on stage, while Rin pushed shy Hanayo to step out of the shadows and embrace her lifelong dream of being a school idol.'
  },
  {
    id: 'chikariko',
    shipName: 'ChikaRiko',
    japaneseName: 'ちかりこ',
    seriesId: 'love-live-sunshine',
    seriesTitle: 'Love Live! Sunshine!!',
    characters: ['Chika Takami', 'Riko Sakurauchi'],
    charKeys: ['chika-takami', 'riko-sakurauchi'],
    dynamics: ['Sunlight & Ocean', 'Leader & Composer', 'Balcony Confessions'],
    isCanon: false,
    description: 'Chika leaped across adjacent second-floor balconies to reach Riko when she lost her passion for piano after leaving Akihabara. Their intimate talks by the seaside sparked the creation of Aqours\' most moving songs.'
  },
  {
    id: 'kanadia',
    shipName: 'KanaDia',
    japaneseName: 'かなダイ',
    seriesId: 'love-live-sunshine',
    seriesTitle: 'Love Live! Sunshine!!',
    characters: ['Kanan Matsuura', 'Dia Kurosawa'],
    charKeys: ['kanan-matsuura', 'dia-kurosawa'],
    dynamics: ['Childhood Protectors', 'Diving Instructor & Strict Heiress', 'Third-Year Secret'],
    isCanon: false,
    description: 'Sharing years of secret heartache to safeguard Mari\'s future, Kanan and Dia carried the weight of Aqours\' previous failure before passing the torch and eventually reuniting on stage for their final high school festival.'
  },
  {
    id: 'ayuyuu',
    shipName: 'AyuYuu',
    japaneseName: 'あゆゆう',
    seriesId: 'love-live-nijigasaki',
    seriesTitle: 'Love Live! Nijigasaki High School Idol Club',
    characters: ['Ayumu Uehara', 'Yu Takasaki'],
    charKeys: ['ayumu-uehara', 'yu-takasaki'],
    dynamics: ['Next-Door Childhood Friends', 'Idol & Manager', 'Fierce Possessiveness'],
    isCanon: false,
    description: 'Ayumu stepped into the school idol world entirely because she wanted Yuu\'s eyes focused solely on her. The dramatic confrontation in season 1 over Yuu\'s growing musical ambition showcased the intensity of Ayumu\'s devotion.'
  },
  {
    id: 'shiznat',
    shipName: 'ShizNat',
    japaneseName: '静渚',
    seriesId: 'strawberry-panic',
    seriesTitle: 'Strawberry Panic',
    characters: ['Shizuma Hanazono', 'Nagisa Aoi'],
    charKeys: ['shizuma-hanazono', 'nagisa-aoi'],
    dynamics: ['Etoile Royalty & Innocent Transfer', 'Gothic Aristocracy', 'Grand Passion'],
    isCanon: true,
    description: 'The legendary aristocratic Yuri romance of Astraea Hill. Shizuma, mourning the tragic death of her former partner Kaori, is reawakened by the innocent Nagisa, rejecting school society to run away in each other\'s arms during the Etoile election.'
  },
  {
    id: 'aniseuphie',
    shipName: 'AnisEuphie',
    japaneseName: 'アニスエフィ',
    seriesId: 'magirevo',
    seriesTitle: 'The Magical Revolution of the Reincarnated Princess and the Genius Young Lady',
    characters: ['Anisphia Wynn Palettia', 'Euphyllia Magenta'],
    charKeys: ['anisphia-wynn-palettia', 'euphyllia-magenta'],
    dynamics: ['Eccentric Inventor & Disgraced Noble', 'Covenant of Queens', 'Mutual Salvation'],
    isCanon: true,
    description: 'Anis crashes a noble ball on a broomstick and whisks away Euphyllia after her betrothal is unjustifiably broken. Euphie vows to shoulder the crown so Anis can keep flying freely, sealing their romantic devotion with an immortal spirit pact.'
  },
  {
    id: 'raeclaire',
    shipName: 'RaeClaire',
    japaneseName: 'レイクレ',
    seriesId: 'im-in-love-with-the-villainess',
    seriesTitle: 'I\'m in Love with the Villainess',
    characters: ['Rae Taylor', 'Claire François'],
    charKeys: ['rae-taylor', 'claire-francois'],
    dynamics: ['Otome Transmigrator & Noble Tsundere', 'Unabashed Flirting', 'Devoted Marriage'],
    isCanon: true,
    description: 'Reincarnated as the commoner heroine of an otome game, Rae completely ignores all the male capture targets to pursue the villainess Claire with shameless, unconditional devotion, eventually marrying her and adopting twin daughters.'
  },
  {
    id: 'shamimomo',
    shipName: 'ShamiMomo',
    japaneseName: 'シャミ桃',
    seriesId: 'machikado-mazoku',
    seriesTitle: 'The Demon Girl Next Door',
    characters: ['Yuko Yoshida', 'Momo Chiyoda'],
    charKeys: ['yuko-yoshida', 'momo-chiyoda'],
    dynamics: ['Weak Demon & Retired Magical Girl', 'Roommates & Vassals', 'Protective Love'],
    isCanon: false,
    description: 'Impoverished succubus Shamiko is supposed to defeat the local magical girl, but Momo instead teaches her fitness, buys her groceries, and turns into an overprotective guardian angel who would move heaven and earth to keep Shamiko happy.'
  },
  {
    id: 'kourin',
    shipName: 'KouRin',
    japaneseName: 'コウりん',
    seriesId: 'new-game',
    seriesTitle: 'NEW GAME!',
    characters: ['Kou Yagami', 'Rin Toyama'],
    charKeys: ['kou-yagami', 'rin-toyama'],
    dynamics: ['Workplace Companions', 'Character Designer & Art Director', 'Long-term Cohabitation'],
    isCanon: false,
    description: 'Joined Eagle Jump together as rookies and worked side by side for years. Rin looks after Kou\'s erratic sleeping habits and pantsless studio nights, openly pining while Kou expresses her devotion through art and intimate confessions.'
  },
  {
    id: 'sayakatouko',
    shipName: 'SayaTouko',
    japaneseName: '佐伯×燈子',
    seriesId: 'bloom-into-you',
    seriesTitle: 'Bloom Into You',
    characters: ['Sayaka Saeki', 'Touko Nanami'],
    charKeys: ['sayaka-saeki', 'touko-nanami'],
    dynamics: ['Patient Confidante & Guarded Star', 'Long-distance Unrequited', 'Graceful Acceptance'],
    isCanon: false,
    description: 'Sayaka realized she was in love with Touko in middle school and spent years quietly supporting her as vice president without pressure. When Touko chose Yuu, Sayaka accepted it with bittersweet grace before later finding happiness herself.'
  },
  {
    id: 'himemitsuki',
    shipName: 'HimeMitsu',
    japaneseName: 'ひめみつ',
    seriesId: 'yuri-is-my-job',
    seriesTitle: 'Yuri Is My Job!',
    characters: ['Hime Shiraki', 'Mitsuki Yano'],
    charKeys: ['hime-shiraki', 'mitsuki-yano'],
    dynamics: ['Performative Maidens', 'Broken Childhood Promise', 'Schwestern Salon'],
    isCanon: false,
    description: 'Waitresses at the themed Cafe Liebe playing out theatrical Yuri scenarios that conceal intense real-life friction dating back to a shattered childhood friendship, forcing them to confront what is acting and what is raw love.'
  },
  {
    id: 'sumikanoko',
    shipName: 'SumiKano',
    japaneseName: '純かの',
    seriesId: 'yuri-is-my-job',
    seriesTitle: 'Yuri Is My Job!',
    characters: ['Sumika Chibana', 'Kanoko Mamiya'],
    charKeys: ['sumika-chibana', 'kanoko-mamiya'],
    dynamics: ['Gyaru Senpai & Jealous Underclassman', 'Unfiltered Honesty', 'Cafe Liebe'],
    isCanon: false,
    description: 'Sumika is the only person at Cafe Liebe who sees through Kanoko\'s obsessive attachment to Hime. In trying to shake Kanoko out of her self-destructive spiral, Sumika ends up falling hopelessly hard for the prickly junior.'
  },
  {
    id: 'yvonelsa',
    shipName: 'YvonElsa',
    japaneseName: 'イヴォエル',
    seriesId: 'please-bully-me-miss-villainess',
    seriesTitle: 'Please Bully Me, Miss Villainess!',
    characters: ['Yvonne Smollett', 'Elsa Dorothy'],
    charKeys: ['yvonne-smollett', 'elsa-dorothy'],
    dynamics: ['Villainess System & Doting Heroine', 'Failed Bullying', 'Fluffy Devotion'],
    isCanon: true,
    description: 'Yvonne is cursed by a villainess system to bully Elsa, but every attempt to harm her gets creatively misinterpreted as pampering by Elsa. The two fall head-over-heels in love while outsmarting the system together.'
  },
  {
    id: 'himayori',
    shipName: 'HimaYori',
    japaneseName: 'ひまより',
    seriesId: 'whispering-you-a-love-song',
    seriesTitle: 'Whispering You a Love Song',
    characters: ['Himari Kino', 'Yori Asanagi'],
    charKeys: ['himari-kino', 'yori-asanagi'],
    dynamics: ['Love at First Sound & Love at First Sight', 'Band Senpai & Cheerful Kouhai', 'Rooftop Confessions'],
    isCanon: true,
    description: 'Himari falls in love with Yori\'s rooftop guitar performance as an idol fan, while Yori falls romantically in love with Himari\'s radiant smile. Their story navigates aligning those different definitions of "love" into a genuine romance.'
  },
  {
    id: 'teiomcqueen',
    shipName: 'TeioMcQueen',
    japaneseName: 'テイマク',
    seriesId: 'uma-musume',
    seriesTitle: 'Uma Musume: Pretty Derby',
    characters: ['Tokai Teio', 'Mejiro McQueen'],
    charKeys: ['tokai-teio', 'mejiro-mcqueen'],
    dynamics: ['Eternal Rivals', 'Miracle Comeback', 'Parfait & Spica Spirit'],
    isCanon: false,
    description: 'The beating heart of season 2. When Teio suffers debilitating fractures, McQueen becomes her sole motivation to return to the turf; when McQueen\'s own legs give out, Teio runs a miraculous comeback race dedicated entirely to her beloved rival.'
  },
  {
    id: 'spesuzu',
    shipName: 'SpeSuzu',
    japaneseName: 'スぺスズ',
    seriesId: 'uma-musume',
    seriesTitle: 'Uma Musume: Pretty Derby',
    characters: ['Special Week', 'Silence Suzuka'],
    charKeys: ['special-week', 'silence-suzuka'],
    dynamics: ['Roommates', 'Country Bumpkin & Revered Senpai', 'Grass Turf Promise'],
    isCanon: false,
    description: 'Spe admires Suzuka like a radiant idol and moves into her dorm room at Tracen Academy. When Suzuka suffers a career-threatening injury at the Tenno Sho, Spe spends every waking hour nursing and cheering her back onto the track.'
  },
  {
    id: 'hibimiku',
    shipName: 'HibiMiku',
    japaneseName: 'ひびみく',
    seriesId: 'symphogear',
    seriesTitle: 'Senki Zesshou Symphogear',
    characters: ['Hibiki Tachibana', 'Miku Kohinata'],
    charKeys: ['hibiki-tachibana', 'miku-kohinata'],
    dynamics: ['Childhood Bunkmates', 'Sun & Moon', 'Transcendent Devotion'],
    isCanon: true,
    description: 'Across five explosive seasons of god-slaying anime, Miku is the hearth and emotional anchor that keeps Hibiki grounded from transforming into an out-of-control berserker, culminating in an explicit confirmation of their mutual romantic love.'
  },
  {
    id: 'tsubamaria',
    shipName: 'TsubaMaria',
    japaneseName: '翼マリ',
    seriesId: 'symphogear',
    seriesTitle: 'Senki Zesshou Symphogear',
    characters: ['Tsubasa Kazanari', 'Maria Cadenzavna Eve'],
    charKeys: ['tsubasa-kazanari', 'maria-cadenzavna-eve'],
    dynamics: ['Dueling Divas', 'Sword & Shield', 'Top Singers'],
    isCanon: false,
    description: 'Beginning as rival pop idols wielding opposite relic weapons in combat, Tsubasa and Maria develop profound mutual respect and trust, frequently harmonizing together in theatrical battle duets that shake the heavens.'
  },
  {
    id: 'mayakuro',
    shipName: 'MayaKuro',
    japaneseName: 'まやくろ',
    seriesId: 'revue-starlight',
    seriesTitle: 'Revue Starlight',
    characters: ['Maya Tendo', 'Claudine Saijo'],
    charKeys: ['maya-tendo', 'claudine-saijo'],
    dynamics: ['Unmatched Rivals', 'The Star & The Challenger', 'Fierce Intimacy'],
    isCanon: false,
    description: 'Claudine refuses to bow to Maya\'s undisputed supremacy atop Seisho Academy, while Maya declares that Claudine is the only actor capable of meeting her on stage. Their climactic Revue of Souls duet is one of theatre anime\'s greatest love duels.'
  },
  {
    id: 'karehika',
    shipName: 'KareHika',
    japaneseName: 'かれひか',
    seriesId: 'revue-starlight',
    seriesTitle: 'Revue Starlight',
    characters: ['Karen Aijo', 'Hikari Kagura'],
    charKeys: ['karen-aijo', 'hikari-kagura'],
    dynamics: ['Childhood Tiara Promise', 'Position Zero', 'Underground Stage Duel'],
    isCanon: true,
    description: 'Bonded as children by a shared vision of Starlight, Hikari went to London while Karen waited in Tokyo. Their destiny reunites them under the mysterious talking Giraffe to conquer the audition and take the stage together.'
  },
  {
    id: 'futakao',
    shipName: 'FutaKao',
    japaneseName: 'ふたかお',
    seriesId: 'revue-starlight',
    seriesTitle: 'Revue Starlight',
    characters: ['Futaba Isurugi', 'Kaoruko Hanayagi'],
    charKeys: ['futaba-isurugi', 'kaoruko-hanayagi'],
    dynamics: ['Kyoto Childhood Friends', 'Motorcycle Rider & Traditional Heiress', 'Devoted Knight'],
    isCanon: false,
    description: 'Futaba has chauffeured and catered to the spoiled Kyoto heiress Kaoruko her entire life. When Futaba aims to shine independently, Kaoruko throws a theatrical tantrum on the duel stage until they recommit to riding alongside one another.'
  },
  {
    id: 'nanajun',
    shipName: 'NanaJun',
    japaneseName: 'ばなじゅん',
    seriesId: 'revue-starlight',
    seriesTitle: 'Revue Starlight',
    characters: ['Nana Daiba', 'Junna Hoshimi'],
    charKeys: ['nana-daiba', 'junna-hoshimi'],
    dynamics: ['Time Loop Guardian & Ambitious Scholar', 'Banana Mother', 'Destiny Rewritten'],
    isCanon: false,
    description: 'Nana trapped their 99th school festival in an endless time loop to protect everyone\'s innocence, but Junna was the one who grabbed her glasses and shattered the illusion, telling Nana to look forward into the harsh, beautiful future.'
  },
  {
    id: 'komavill',
    shipName: 'KomaVill',
    japaneseName: 'コマヴィル',
    seriesId: 'vexations-of-a-shut-in-vampire',
    seriesTitle: 'The Vexations of a Shut-In Vampire Princess',
    characters: ['Terakomari Gandesblood', 'Villhaze'],
    charKeys: ['terakomari-gandesblood', 'villhaze'],
    dynamics: ['Shut-in Princess & Shameless Maid', 'Blood Pact', 'Lingerie Worship'],
    isCanon: false,
    description: 'Villhaze is appointed personal maid to the shut-in vampire Komari, immediately becoming infatuated with her cuteness. Despite her daily teasing, Vill is intensely protective and slaughters anyone who dares threaten her mistress.'
  },
  {
    id: 'sakinodoka',
    shipName: 'SakiNodoka',
    japaneseName: '咲のど',
    seriesId: 'saki',
    seriesTitle: 'Saki',
    characters: ['Saki Miyanaga', 'Nodoka Haramura'],
    charKeys: ['saki-miyanaga', 'nodoka-haramura'],
    dynamics: ['Mahjong Prodigies', 'Interhigh Oath', 'Complementary Styles'],
    isCanon: false,
    description: 'Saki was reluctant to play mahjong until she saw Nodoka\'s digital elegance and impassioned play. The two made a solemn pinky promise to reach the national finals together and face off on the ultimate stage.'
  },
  {
    id: 'yuunamimori',
    shipName: 'YuunaMimori',
    japaneseName: 'ゆなみも',
    seriesId: 'yuuki-yuuna',
    seriesTitle: 'Yuki Yuna is a Hero',
    characters: ['Yuna Yuki', 'Mimori Togo'],
    charKeys: ['yuna-yuki', 'mimori-togo'],
    dynamics: ['Hero Club Bonds', 'World vs Loved One', 'Sacred Sacrifice'],
    isCanon: false,
    description: 'Togo is willing to tear down the world\'s divine barrier when she discovers that the Hero system cripples Yuna\'s body with every Mankai bloom. Yuna uses her final ounce of strength to pull Togo back from the brink of total despair.'
  },
  {
    id: 'yoshimio',
    shipName: 'YoshiMio',
    japaneseName: '芳美緒',
    seriesId: 'strike-witches',
    seriesTitle: 'Strike Witches',
    characters: ['Yoshika Miyafuji', 'Mio Sakamoto'],
    charKeys: ['yoshika-miyafuji', 'mio-sakamoto'],
    dynamics: ['Ace Rookie & Veteran Major', 'Katana & Magic Shield', 'Aerial Mentorship'],
    isCanon: false,
    description: 'Major Sakamoto recognized Yoshika\'s colossal latent magic potential and recruited her into the 501st Joint Fighter Wing, fostering a fierce bond of trust as they fly into the eye of deadly Neuroi dogfights together.'
  },
  {
    id: 'konatsukoyuki',
    shipName: 'KonatsuKoyuki',
    japaneseName: 'こなこゆ',
    seriesId: 'tropical-fish',
    seriesTitle: 'A Tropical Fish Yearns for Snow',
    characters: ['Konatsu Amano', 'Koyuki Honami'],
    charKeys: ['konatsu-amano', 'koyuki-honami'],
    dynamics: ['Aquarium Club Sisters', 'Tropical Fish & Salamander', 'Gentle Solace'],
    isCanon: false,
    description: 'Transferred to an isolated seaside town, Konatsu joins the struggling two-person aquarium club with Koyuki. Koyuki sees herself as an icy salamander doomed to isolation, but Konatsu\'s warmth slowly thaws her frozen heart.'
  },
  {
    id: 'chuchunika',
    shipName: 'ChuchuNika',
    japaneseName: 'チュチュニカ',
    seriesId: 'witch-from-mercury',
    seriesTitle: 'Mobile Suit Gundam: The Witch from Mercury',
    characters: ['Chuatury Panlunch', 'Nika Nanaura'],
    charKeys: ['chuchu', 'nika-nanaura'],
    dynamics: ['Spitfire & Pacifist', 'Earth House Bunkmates', 'Fierce Sisterhood'],
    isCanon: false,
    description: 'Chuchu\'s explosive temper against Spacian prejudice is constantly soothed by Nika\'s tranquil tea and gentle smiles. When Nika was detained, Chuchu was the first one ready to pilot Demi Trainer with a nail bat to bring her home.'
  },
  {
    id: 'harumatsu',
    shipName: 'HaruMatsu',
    japaneseName: 'はるまつ',
    seriesId: 'citrus',
    seriesTitle: 'Citrus',
    characters: ['Harumi Taniguchi', 'Matsuri Mizusawa'],
    charKeys: ['harumi-taniguchi', 'matsuri-mizusawa'],
    dynamics: ['Gyaru Senpai & Bratty Underclassman', 'Streetwise Duo', 'Unfiltered Banter'],
    isCanon: false,
    description: 'Matsuri tries to stir trouble and blackmail Yuzu, but the chill, unflappable Harumi sees right through her bratty exterior and becomes the only person able to handle Matsuri\'s mischievous personality with ease.'
  },
  {
    id: 'tohrubayashi',
    shipName: 'TohruKobayashi',
    japaneseName: 'トール×小林',
    seriesId: 'dragon-maid',
    seriesTitle: 'Miss Kobayashi\'s Dragon Maid',
    characters: ['Tohru', 'Kobayashi'],
    charKeys: ['tohru', 'kobayashi'],
    dynamics: ['Chaos Dragon Maid & Weary Programmer', 'Domestic Bliss', 'Tail Meat Offerings'],
    isCanon: false,
    description: 'After an inebriated trek into the mountain forest, Kobayashi invites the divine dragon Tohru to live with her as a maid. Tohru falls passionately in love, filling Kobayashi\'s quiet apartment with dragon family warmth.'
  },
  {
    id: 'kaseyamada',
    shipName: 'KaseYamada',
    japaneseName: '加瀬さん (山田加瀬)',
    seriesId: 'kase-san',
    seriesTitle: 'Kase-san Series',
    characters: ['Yui Yamada', 'Tomoka Kase'],
    charKeys: ['yui-yamada', 'tomoka-kase'],
    dynamics: ['Greenery Caretaker & Track Star', 'First Love Sweetness', 'Long-distance University'],
    isCanon: true,
    description: 'Shy greenery club member Yamada meets athletic track star Kase-san by the school flowerbed. Their tender high school dating progression into university cohabitation is one of the most heartwarming fluff romances in the entire Yuri medium.'
  },
  {
    id: 'adachishima',
    shipName: 'AdachiShima',
    japaneseName: '安達としまむら',
    seriesId: 'adachi-and-shimamura',
    seriesTitle: 'Adachi and Shimamura',
    characters: ['Sakura Adachi', 'Hougetsu Shimamura'],
    charKeys: ['sakura-adachi', 'hougetsu-shimamura'],
    dynamics: ['Truancy Companions', 'Yearning Dog & Casual Cat', 'Gymnasium Ping-Pong'],
    isCanon: true,
    description: 'Two girls who skip class meet by chance on the gym\'s second floor. Adachi quickly develops an overwhelming, possessive crush, while Shimamura slowly learns to open her aloof heart to let someone truly into her life.'
  },
  {
    id: 'shiznatmai',
    shipName: 'ShizNat',
    japaneseName: '静なつ',
    seriesId: 'my-hime',
    seriesTitle: 'My-HiME',
    characters: ['Shizuru Fujino', 'Natsuki Kuga'],
    charKeys: ['shizuru-fujino', 'natsuki-kuga'],
    dynamics: ['Council President & Lone Wolf', 'Obsessive Devotion', 'Kiyohime Dragon'],
    isCanon: true,
    description: 'The archetype-defining classic Yuri couple of the 2000s. Shizuru harbored an intense, desperate love for Natsuki that drove her to summon Kiyohime to protect her, culminating in one of the most famous kiss scenes in mecha/supernatural anime history.'
  }
];

// Assign avatars
const finalShips = SHIPS.map(s => {
  const av1 = avatarMap[s.charKeys[0]] || avatarMap[s.characters[0]];
  const av2 = avatarMap[s.charKeys[1]] || avatarMap[s.characters[1]];

  if (!av1 || !av2) {
    console.error(`Missing avatar for ship ${s.shipName}: ${s.characters[0]}=${av1}, ${s.characters[1]}=${av2}`);
  }

  return {
    id: s.id,
    shipName: s.shipName,
    japaneseName: s.japaneseName,
    seriesId: s.seriesId,
    seriesTitle: s.seriesTitle,
    characters: s.characters,
    avatars: [av1, av2],
    dynamics: s.dynamics,
    isCanon: s.isCanon,
    description: s.description
  };
});

// Format as TypeScript file
const tsCode = `import { YuriShip } from '../types/yuri';

export const YURI_SHIPS: YuriShip[] = ${JSON.stringify(finalShips, null, 2)};
`;

fs.writeFileSync('src/data/yuriShips.ts', tsCode, 'utf8');
console.log('Successfully generated src/data/yuriShips.ts with', finalShips.length, 'ships!');
