export type MediumType = 'Anime' | 'Manga' | 'Light Novel' | 'Manhwa/Webtoon' | 'Manhua';

export type OriginType = 'Japan' | 'South Korea' | 'China' | 'Western' | 'Other';

export type SettingType = 
  | 'High School' 
  | 'College/Adult' 
  | 'Fantasy/Magic' 
  | 'Sci-Fi/Mecha' 
  | 'Workplace' 
  | 'Historical' 
  | 'Supernatural';

export type TropeType = 
  | 'Senpai & Kouhai' 
  | 'Enemies to Lovers' 
  | 'Childhood Friends' 
  | 'Fake Dating' 
  | 'Opposites Attract' 
  | 'Master & Servant' 
  | 'Royalty & Commoner' 
  | 'Roommates' 
  | 'Idol/Music' 
  | 'Slow Burn'
  | 'Age Gap'
  | 'Love Triangle';

export type ToneType = 
  | 'Sweet/Fluff' 
  | 'Drama/Angst' 
  | 'Action/Adventure' 
  | 'Comedy' 
  | 'Dark/Psychological';

export type StatusType = 'Completed' | 'Ongoing';

export interface YuriSeries {
  id: string;
  title: string;
  romaji: string;
  nativeTitle: string;
  medium: MediumType;
  releaseYear: number;
  origin: OriginType;
  setting: SettingType;
  tropes: TropeType[];
  tone: ToneType;
  status: StatusType;
  synopsis: string;
  famousQuote: string;
  coverImage: string;
  pairing: string; // e.g. "Yuu Koito x Touko Nanami"
  aliases: string[];
}

export type FeedbackState = 'correct' | 'partial' | 'wrong';
export type YearDirection = 'higher' | 'lower' | 'correct';

export interface SeriesGuessFeedback {
  guessedSeries: YuriSeries;
  medium: FeedbackState;
  year: FeedbackState;
  yearDirection: YearDirection;
  origin: FeedbackState;
  setting: FeedbackState;
  trope: FeedbackState;
  tone: FeedbackState;
  status: FeedbackState;
  isMatch: boolean;
}

export type CharacterRole = 'Protagonist' | 'Love Interest' | 'Deuteragonist' | 'Rival';
export type HairColor = 'Black' | 'Blonde' | 'Pink' | 'Brown' | 'Blue/Silver' | 'Red' | 'Purple';
export type Archetype = 'Tsundere' | 'Kuudere' | 'Deredere' | 'Prince-type' | 'Ojou-sama' | 'Genki' | 'Yandere' | 'Flustered Sweetheart';

export interface YuriCharacter {
  id: string;
  name: string;
  nativeName: string;
  seriesId: string;
  seriesTitle: string;
  role: CharacterRole;
  hairColor: HairColor;
  archetype: Archetype;
  debutYear: number;
  quote: string;
  avatar: string;
  pairingWith: string;
  aliases: string[];
}

export interface CharacterGuessFeedback {
  guessedCharacter: YuriCharacter;
  series: FeedbackState;
  role: FeedbackState;
  hairColor: FeedbackState;
  archetype: FeedbackState;
  debutYear: FeedbackState;
  yearDirection: YearDirection;
  isMatch: boolean;
}

export type GameMode = 'classic' | 'character' | 'cover' | 'quote' | 'emoji' | 'ship' | 'silhouette' | 'song';
export type PlayType = 'daily' | 'unlimited';

export interface YuriEmojiRiddle {
  seriesId: string;
  seriesTitle: string;
  emojis: [string, string, string, string];
  clues: [string, string, string, string];
}

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: { [key: number]: number };
  lastPlayedDate: string;
}

export interface DailyGameState {
  date: string;
  completed: boolean;
  won: boolean;
  guesses: string[]; // IDs of guessed items
}

export interface YuriShip {
  id: string;
  shipName: string;
  japaneseName?: string;
  seriesId: string;
  seriesTitle: string;
  characters: [string, string];
  avatars: [string, string];
  dynamics: string[];
  isCanon: boolean;
  description: string;
}

export interface ShipGuessFeedback {
  guessedShip: YuriShip;
  seriesMatch: FeedbackState;
  canonMatch: FeedbackState;
  dynamicsMatch: FeedbackState;
  isMatch: boolean;
}

export interface YuriSong {
  id: string;
  songTitle: string;
  japaneseTitle?: string;
  seriesId: string;
  seriesTitle: string;
  type: 'OP' | 'ED' | 'Insert';
  seasonYear: string;
  releaseYear: number;
  artist: string;
  japaneseArtist?: string;
  lyricsSnippet: string;
  trivia: string;
  audioUrl?: string;
  melodyNotes?: number[];
}

export interface SongGuessFeedback {
  guessedSeries: YuriSeries;
  medium: FeedbackState;
  year: FeedbackState;
  yearDirection: YearDirection;
  origin: FeedbackState;
  setting: FeedbackState;
  trope: FeedbackState;
  isMatch: boolean;
}

export interface GameHistoryEntry {
  id: string;
  mode: GameMode;
  playType: PlayType;
  targetTitle: string;
  won: boolean;
  guessCount: number;
  date: string;
  timestamp: number;
}


