import { YURI_SERIES } from '../data/yuriSeries';
import { YURI_CHARACTERS } from '../data/yuriCharacters';
import { YuriSeries, YuriCharacter } from '../types/yuri';

// Reference epoch date for Yuridle
const EPOCH_DATE = new Date('2024-01-01T00:00:00Z').getTime();

export function getDailyInfo(): { dayNumber: number; dateString: string } {
  const now = new Date();
  // Use UTC or local midnight
  const userMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const diffTime = Math.max(0, userMidnight - EPOCH_DATE);
  const dayNumber = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  const dateString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  return { dayNumber, dateString };
}

// Simple LCG PRNG for seeded randomness
function seededRandom(seed: number): number {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function getDailySeries(): YuriSeries {
  const { dayNumber } = getDailyInfo();
  const index = Math.floor(seededRandom(dayNumber * 1337) * YURI_SERIES.length);
  return YURI_SERIES[index];
}

export function getDailyCharacter(): YuriCharacter {
  const { dayNumber } = getDailyInfo();
  const index = Math.floor(seededRandom(dayNumber * 4242) * YURI_CHARACTERS.length);
  return YURI_CHARACTERS[index];
}

export function getRandomSeries(excludeId?: string): YuriSeries {
  const pool = excludeId ? YURI_SERIES.filter(s => s.id !== excludeId) : YURI_SERIES;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

export function getRandomCharacter(excludeId?: string): YuriCharacter {
  const pool = excludeId ? YURI_CHARACTERS.filter(c => c.id !== excludeId) : YURI_CHARACTERS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

export function getDailyQuoteCharacter(): YuriCharacter {
  const { dayNumber } = getDailyInfo();
  // Filter characters that have non-empty quotes
  const validChars = YURI_CHARACTERS.filter(c => c.quote && c.quote.length > 5);
  const index = Math.floor(seededRandom(dayNumber * 9871) * validChars.length);
  return validChars[index];
}

export function getRandomQuoteCharacter(excludeId?: string): YuriCharacter {
  const validChars = YURI_CHARACTERS.filter(c => c.quote && c.quote.length > 5 && (!excludeId || c.id !== excludeId));
  const index = Math.floor(Math.random() * validChars.length);
  return validChars[index];
}

import { YURI_EMOJIS } from '../data/yuriEmojis';
import { YuriEmojiRiddle } from '../types/yuri';

export function getDailyEmojiRiddle(): YuriEmojiRiddle {
  const { dayNumber } = getDailyInfo();
  const index = Math.floor(seededRandom(dayNumber * 6543) * YURI_EMOJIS.length);
  return YURI_EMOJIS[index];
}

export function getRandomEmojiRiddle(excludeSeriesId?: string): YuriEmojiRiddle {
  const pool = excludeSeriesId ? YURI_EMOJIS.filter(e => e.seriesId !== excludeSeriesId) : YURI_EMOJIS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

import { YURI_SHIPS } from '../data/yuriShips';
import { YuriShip } from '../types/yuri';

export function getDailyShip(): YuriShip {
  const { dayNumber } = getDailyInfo();
  const index = Math.floor(seededRandom(dayNumber * 7777) * YURI_SHIPS.length);
  return YURI_SHIPS[index];
}

export function getRandomShip(excludeId?: string): YuriShip {
  const pool = excludeId ? YURI_SHIPS.filter(s => s.id !== excludeId) : YURI_SHIPS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

export function getDailySilhouetteCharacter(): YuriCharacter {
  const { dayNumber } = getDailyInfo();
  // Filter characters that have avatars
  const validChars = YURI_CHARACTERS.filter(c => c.avatar && c.avatar.length > 5);
  const index = Math.floor(seededRandom(dayNumber * 5151) * validChars.length);
  return validChars[index];
}

export function getRandomSilhouetteCharacter(excludeId?: string): YuriCharacter {
  const pool = YURI_CHARACTERS.filter(c => c.avatar && c.avatar.length > 5 && (!excludeId || c.id !== excludeId));
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

import { YURI_SONGS } from '../data/yuriSongs';
import { YuriSong } from '../types/yuri';

export function getDailySong(): YuriSong {
  const { dayNumber } = getDailyInfo();
  const index = Math.floor(seededRandom(dayNumber * 8181) * YURI_SONGS.length);
  return YURI_SONGS[index];
}

export function getRandomSong(excludeId?: string): YuriSong {
  const pool = excludeId ? YURI_SONGS.filter(s => s.id !== excludeId) : YURI_SONGS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

/**
 * Returns the Daily target series specifically for Cover Blur.
 * Strictly filters out the daily Series Guessing target (getDailySeries)
 * so that Cover Blur and Series Guessing never share the same answer.
 */
export function getDailyCoverSeries(): YuriSeries {
  const { dayNumber } = getDailyInfo();
  const classicDaily = getDailySeries();
  const pool = YURI_SERIES.filter(
    s => s.id !== classicDaily.id && s.coverImage && s.coverImage.trim().length > 5
  );
  const index = Math.floor(seededRandom(dayNumber * 5897 + 101) * pool.length);
  return pool[index];
}

/**
 * Returns a random series for Unlimited Cover Blur mode with a valid cover image.
 */
export function getRandomCoverSeries(excludeId?: string): YuriSeries {
  const pool = YURI_SERIES.filter(
    s => s.coverImage && s.coverImage.trim().length > 5 && (!excludeId || s.id !== excludeId)
  );
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

/**
 * Returns a cover image URL for a given series.
 * If the series has multiple volume covers (extraCovers), picks randomly or by seed
 * so players can encounter different volume art for the same series.
 */
export function getCoverImageForSeries(series: YuriSeries, seed?: number): string {
  if (!series) return '';
  const allCovers = [series.coverImage, ...(series.extraCovers || [])].filter(
    c => c && c.trim().length > 5
  );
  if (allCovers.length <= 1) return series.coverImage;

  if (seed !== undefined) {
    const idx = Math.floor(seededRandom(seed) * allCovers.length);
    return allCovers[idx];
  }
  const idx = Math.floor(Math.random() * allCovers.length);
  return allCovers[idx];
}



