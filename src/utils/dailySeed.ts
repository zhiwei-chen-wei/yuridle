import { YURI_SERIES } from '../data/yuriSeries';
import { YURI_CHARACTERS } from '../data/yuriCharacters';
import { YURI_EMOJIS } from '../data/yuriEmojis';
import { YURI_SHIPS } from '../data/yuriShips';
import { YURI_SONGS } from '../data/yuriSongs';
import { DAILY_SCHEDULE } from '../data/dailySchedule';
import { YuriSeries, YuriCharacter, YuriEmojiRiddle, YuriShip, YuriSong, GameMode } from '../types/yuri';

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

export function getYesterdayInfo(now = new Date()): DailyInfo {
  // Convert real-world timestamp minus 24h to UTC+7 calendar components
  const yesterdayUtc7 = new Date(now.getTime() + UTC7_OFFSET_MS - 24 * 60 * 60 * 1000);

  const y = yesterdayUtc7.getUTCFullYear();
  const m = yesterdayUtc7.getUTCMonth();
  const d = yesterdayUtc7.getUTCDate();

  const dateString = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  const currentMidnightUtc7 = Date.UTC(y, m, d);
  const diffDays = Math.round((currentMidnightUtc7 - ANCHOR_UTC7_DATE) / (24 * 60 * 60 * 1000));
  const dayNumber = ANCHOR_DAY_NUMBER + diffDays;

  return { dayNumber, dateString, msUntilReset: 0, nextResetTime: 0 };
}

export interface YesterdayTargetResult {
  mode: GameMode;
  dayNumber: number;
  dateString: string;
  targetId: string;
  targetTitle: string;
  series?: YuriSeries;
  character?: YuriCharacter;
  ship?: YuriShip;
  song?: YuriSong;
  emoji?: YuriEmojiRiddle;
}

export function getYesterdayTarget(mode: GameMode, now = new Date()): YesterdayTargetResult {
  const { dayNumber, dateString } = getYesterdayInfo(now);
  const schedule = DAILY_SCHEDULE[dayNumber];

  switch (mode) {
    case 'classic': {
      const scheduledId = schedule?.classicId;
      const series = scheduledId 
        ? YURI_SERIES.find(s => s.id === scheduledId) 
        : YURI_SERIES[Math.floor(seededRandom(dayNumber * 1337) * YURI_SERIES.length)];
      return {
        mode: 'classic',
        dayNumber,
        dateString,
        targetId: series?.id || '',
        targetTitle: series?.title || '',
        series
      };
    }
    case 'character': {
      const scheduledId = schedule?.characterId;
      const character = scheduledId 
        ? YURI_CHARACTERS.find(c => c.id === scheduledId) 
        : YURI_CHARACTERS[Math.floor(seededRandom(dayNumber * 4242) * YURI_CHARACTERS.length)];
      const series = YURI_SERIES.find(s => s.id === character?.seriesId);
      return {
        mode: 'character',
        dayNumber,
        dateString,
        targetId: character?.id || '',
        targetTitle: character?.name || '',
        character,
        series
      };
    }
    case 'cover': {
      const scheduledId = schedule?.coverId;
      const series = scheduledId 
        ? YURI_SERIES.find(s => s.id === scheduledId) 
        : YURI_SERIES[Math.floor(seededRandom(dayNumber * 5897 + 101) * YURI_SERIES.length)];
      return {
        mode: 'cover',
        dayNumber,
        dateString,
        targetId: series?.id || '',
        targetTitle: series?.title || '',
        series
      };
    }
    case 'quote': {
      const scheduledId = schedule?.quoteId;
      const character = scheduledId 
        ? YURI_CHARACTERS.find(c => c.id === scheduledId) 
        : YURI_CHARACTERS[Math.floor(seededRandom(dayNumber * 9871) * YURI_CHARACTERS.length)];
      const series = YURI_SERIES.find(s => s.id === character?.seriesId);
      return {
        mode: 'quote',
        dayNumber,
        dateString,
        targetId: character?.id || '',
        targetTitle: character?.name || '',
        character,
        series
      };
    }
    case 'emoji': {
      const scheduledId = schedule?.emojiId;
      const emoji = scheduledId 
        ? YURI_EMOJIS.find(e => e.seriesId === scheduledId) 
        : YURI_EMOJIS[Math.floor(seededRandom(dayNumber * 6543) * YURI_EMOJIS.length)];
      const series = YURI_SERIES.find(s => s.id === (emoji?.seriesId || scheduledId));
      return {
        mode: 'emoji',
        dayNumber,
        dateString,
        targetId: emoji?.seriesId || '',
        targetTitle: emoji?.seriesTitle || series?.title || '',
        emoji,
        series
      };
    }
    case 'ship': {
      const scheduledId = schedule?.shipId;
      const ship = scheduledId 
        ? YURI_SHIPS.find(s => s.id === scheduledId) 
        : YURI_SHIPS[Math.floor(seededRandom(dayNumber * 7777) * YURI_SHIPS.length)];
      const series = YURI_SERIES.find(s => s.id === ship?.seriesId);
      return {
        mode: 'ship',
        dayNumber,
        dateString,
        targetId: ship?.id || '',
        targetTitle: ship?.shipName || '',
        ship,
        series
      };
    }
    case 'silhouette': {
      const scheduledId = schedule?.silhouetteId;
      const character = scheduledId 
        ? YURI_CHARACTERS.find(c => c.id === scheduledId) 
        : YURI_CHARACTERS[Math.floor(seededRandom(dayNumber * 5151) * YURI_CHARACTERS.length)];
      const series = YURI_SERIES.find(s => s.id === character?.seriesId);
      return {
        mode: 'silhouette',
        dayNumber,
        dateString,
        targetId: character?.id || '',
        targetTitle: character?.name || '',
        character,
        series
      };
    }
    case 'song': {
      const scheduledId = schedule?.songId;
      const song = scheduledId 
        ? YURI_SONGS.find(s => s.id === scheduledId) 
        : YURI_SONGS[Math.floor(seededRandom(dayNumber * 8181) * YURI_SONGS.length)];
      const series = YURI_SERIES.find(s => s.id === song?.seriesId);
      return {
        mode: 'song',
        dayNumber,
        dateString,
        targetId: song?.id || '',
        targetTitle: song?.songTitle || '',
        song,
        series
      };
    }
  }
}

export function getAllYesterdayTargets(now = new Date()): Record<GameMode, YesterdayTargetResult> {
  return {
    classic: getYesterdayTarget('classic', now),
    character: getYesterdayTarget('character', now),
    cover: getYesterdayTarget('cover', now),
    quote: getYesterdayTarget('quote', now),
    emoji: getYesterdayTarget('emoji', now),
    ship: getYesterdayTarget('ship', now),
    silhouette: getYesterdayTarget('silhouette', now),
    song: getYesterdayTarget('song', now)
  };
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



