import { YURI_SERIES } from '../data/yuriSeries';
import { YURI_CHARACTERS } from '../data/yuriCharacters';
import { YURI_EMOJIS } from '../data/yuriEmojis';
import { YURI_SHIPS } from '../data/yuriShips';
import { YURI_SONGS } from '../data/yuriSongs';
import { DAILY_SCHEDULE } from '../data/dailySchedule';
import { YuriSeries, YuriCharacter, YuriEmojiRiddle, YuriShip, YuriSong } from '../types/yuri';

// Fixed reset schedule: 12:00:00 AM (midnight) UTC+7 (Indochina Time)
export const UTC7_OFFSET_MS = 7 * 60 * 60 * 1000;

// Anchor date: 2026-09-11 in UTC+7 is Day 984
const ANCHOR_UTC7_DATE = Date.UTC(2026, 8, 11);
const ANCHOR_DAY_NUMBER = 984;

export interface DailyInfo {
  dayNumber: number;
  dateString: string;
  msUntilReset: number;
  nextResetTime: number;
}

export function getDailyInfo(now = new Date()): DailyInfo {
  // Convert current real-world timestamp to UTC+7 calendar components
  const utc7 = new Date(now.getTime() + UTC7_OFFSET_MS);

  const y = utc7.getUTCFullYear();
  const m = utc7.getUTCMonth();
  const d = utc7.getUTCDate();

  const dateString = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  // Calculate days difference relative to anchor date (2026-09-11 = Day 984)
  const currentMidnightUtc7 = Date.UTC(y, m, d);
  const diffDays = Math.round((currentMidnightUtc7 - ANCHOR_UTC7_DATE) / (24 * 60 * 60 * 1000));
  const dayNumber = ANCHOR_DAY_NUMBER + diffDays;

  // Next reset is 12:00:00 AM UTC+7 the following day (00:00:00 UTC+7)
  // In real UTC epoch time, 00:00:00 UTC+7 of (d+1) is: Date.UTC(y, m, d + 1) - UTC7_OFFSET_MS
  const nextResetTime = Date.UTC(y, m, d + 1) - UTC7_OFFSET_MS;
  const msUntilReset = Math.max(0, nextResetTime - now.getTime());

  return { dayNumber, dateString, msUntilReset, nextResetTime };
}

export function getTimeUntilNextReset(now = new Date()): {
  hours: number;
  minutes: number;
  seconds: number;
  formatted: string;
} {
  const { msUntilReset } = getDailyInfo(now);
  const totalSeconds = Math.floor(msUntilReset / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const formatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return { hours, minutes, seconds, formatted };
}

// Simple LCG PRNG for seeded randomness
function seededRandom(seed: number): number {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function getDailySeries(): YuriSeries {
  const { dayNumber } = getDailyInfo();
  const scheduledId = DAILY_SCHEDULE[dayNumber]?.classicId;
  if (scheduledId) {
    const found = YURI_SERIES.find(s => s.id === scheduledId);
    if (found) return found;
  }
  const index = Math.floor(seededRandom(dayNumber * 1337) * YURI_SERIES.length);
  return YURI_SERIES[index];
}

export function getDailyCharacter(): YuriCharacter {
  const { dayNumber } = getDailyInfo();
  const scheduledId = DAILY_SCHEDULE[dayNumber]?.characterId;
  if (scheduledId) {
    const found = YURI_CHARACTERS.find(c => c.id === scheduledId);
    if (found) return found;
  }
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
  const scheduledId = DAILY_SCHEDULE[dayNumber]?.quoteId;
  if (scheduledId) {
    const found = YURI_CHARACTERS.find(c => c.id === scheduledId);
    if (found) return found;
  }
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

export function getDailyEmojiRiddle(): YuriEmojiRiddle {
  const { dayNumber } = getDailyInfo();
  const scheduledId = DAILY_SCHEDULE[dayNumber]?.emojiId;
  if (scheduledId) {
    const found = YURI_EMOJIS.find(e => e.seriesId === scheduledId);
    if (found) return found;
  }
  const index = Math.floor(seededRandom(dayNumber * 6543) * YURI_EMOJIS.length);
  return YURI_EMOJIS[index];
}

export function getRandomEmojiRiddle(excludeSeriesId?: string): YuriEmojiRiddle {
  const pool = excludeSeriesId ? YURI_EMOJIS.filter(e => e.seriesId !== excludeSeriesId) : YURI_EMOJIS;
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

export function getDailyShip(): YuriShip {
  const { dayNumber } = getDailyInfo();
  const scheduledId = DAILY_SCHEDULE[dayNumber]?.shipId;
  if (scheduledId) {
    const found = YURI_SHIPS.find(s => s.id === scheduledId);
    if (found) return found;
  }
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
  const scheduledId = DAILY_SCHEDULE[dayNumber]?.silhouetteId;
  if (scheduledId) {
    const found = YURI_CHARACTERS.find(c => c.id === scheduledId);
    if (found) return found;
  }
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

export function getDailySong(): YuriSong {
  const { dayNumber } = getDailyInfo();
  const scheduledId = DAILY_SCHEDULE[dayNumber]?.songId;
  if (scheduledId) {
    const found = YURI_SONGS.find(s => s.id === scheduledId);
    if (found) return found;
  }
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
  const scheduledId = DAILY_SCHEDULE[dayNumber]?.coverId;
  if (scheduledId) {
    const found = YURI_SERIES.find(s => s.id === scheduledId);
    if (found) return found;
  }
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



