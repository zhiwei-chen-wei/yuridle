import { GameStats, DailyGameState, GameHistoryEntry, GameMode, PlayType } from '../types/yuri';
import { getCookie, setCookie, deleteCookie } from './cookie';

const DEFAULT_STATS: GameStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  lastPlayedDate: ''
};

const MAX_HISTORY_ENTRIES = 30;

/**
 * Loads game statistics for a given mode.
 * Checks cookie first, then falls back to localStorage with auto-sync.
 */
export function getStats(mode: string): GameStats {
  const key = `yuridle_stats_${mode}`;
  
  // 1. Try reading from cookie
  try {
    const cookieVal = getCookie(key);
    if (cookieVal) {
      const parsed = JSON.parse(cookieVal);
      // Mirror to localStorage if needed
      try {
        localStorage.setItem(key, cookieVal);
      } catch {
        // Ignore localStorage error
      }
      return { ...DEFAULT_STATS, ...parsed, guessDistribution: { ...DEFAULT_STATS.guessDistribution, ...(parsed.guessDistribution || {}) } };
    }
  } catch (e) {
    console.warn('Failed to parse stats from cookie', e);
  }

  // 2. Fall back to localStorage
  try {
    const localVal = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    if (localVal) {
      const parsed = JSON.parse(localVal);
      // Sync back to cookie for future sessions
      setCookie(key, localVal, 365);
      return { ...DEFAULT_STATS, ...parsed, guessDistribution: { ...DEFAULT_STATS.guessDistribution, ...(parsed.guessDistribution || {}) } };
    }
  } catch (e) {
    console.warn('Failed to load stats from localStorage', e);
  }

  return { ...DEFAULT_STATS, guessDistribution: { ...DEFAULT_STATS.guessDistribution } };
}

/**
 * Records a completed game result.
 * Updates stats and appends a match log entry into cookie-backed history.
 */
export function recordGameResult(
  mode: string,
  won: boolean,
  guessCount: number,
  dateString?: string,
  targetTitle?: string,
  playType: PlayType = 'daily'
): GameStats {
  const stats = getStats(mode);
  stats.gamesPlayed += 1;

  if (won) {
    stats.gamesWon += 1;
    stats.currentStreak += 1;
    if (stats.currentStreak > stats.maxStreak) {
      stats.maxStreak = stats.currentStreak;
    }
    const bucket = Math.min(6, Math.max(1, guessCount));
    stats.guessDistribution[bucket] = (stats.guessDistribution[bucket] || 0) + 1;
  } else {
    stats.currentStreak = 0;
  }

  if (dateString) {
    stats.lastPlayedDate = dateString;
  }

  const serialized = JSON.stringify(stats);
  const key = `yuridle_stats_${mode}`;

  // Save to both cookie and localStorage
  setCookie(key, serialized, 365);
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, serialized);
    }
  } catch (e) {
    console.warn('Failed to save stats to localStorage', e);
  }

  // Record to history log
  try {
    addGameHistoryEntry({
      mode: mode as GameMode,
      playType,
      targetTitle: targetTitle || mode.charAt(0).toUpperCase() + mode.slice(1),
      won,
      guessCount,
      date: dateString || new Date().toISOString().slice(0, 10)
    });
  } catch (e) {
    console.warn('Failed to record game history entry', e);
  }

  return stats;
}

/**
 * Loads daily game state for a specific mode and date.
 * Reads from cookie first, then localStorage.
 */
export function getDailyState(mode: string, dateString: string): DailyGameState | null {
  const key = `yuridle_daily_${mode}_${dateString}`;

  // 1. Try reading from cookie
  try {
    const cookieVal = getCookie(key);
    if (cookieVal) {
      const parsed = JSON.parse(cookieVal);
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(key, cookieVal);
        }
      } catch {
        // Ignore
      }
      return parsed;
    }
  } catch {
    // Ignore
  }

  // 2. Fall back to localStorage
  try {
    if (typeof localStorage !== 'undefined') {
      const localVal = localStorage.getItem(key);
      if (localVal) {
        setCookie(key, localVal, 365);
        return JSON.parse(localVal);
      }
    }
  } catch {
    // Ignore
  }

  return null;
}

/**
 * Saves daily game state into both cookie and localStorage.
 */
export function saveDailyState(mode: string, state: DailyGameState): void {
  const key = `yuridle_daily_${mode}_${state.date}`;
  const serialized = JSON.stringify(state);

  setCookie(key, serialized, 365);

  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, serialized);
    }
  } catch {
    // Ignore
  }
}

/**
 * Retrieves the match history log (up to 30 recent games).
 * Reads from cookie first, then localStorage.
 */
export function getGameHistory(): GameHistoryEntry[] {
  const key = 'yuridle_history';

  // 1. Try cookie
  try {
    const cookieVal = getCookie(key);
    if (cookieVal) {
      const parsed = JSON.parse(cookieVal);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch {
    // Ignore
  }

  // 2. Fall back to localStorage
  try {
    if (typeof localStorage !== 'undefined') {
      const localVal = localStorage.getItem(key);
      if (localVal) {
        const parsed = JSON.parse(localVal);
        if (Array.isArray(parsed)) {
          setCookie(key, localVal, 365);
          return parsed;
        }
      }
    }
  } catch {
    // Ignore
  }

  return [];
}

/**
 * Appends a new match entry to the history log stored in cookies and localStorage.
 */
export function addGameHistoryEntry(entry: Omit<GameHistoryEntry, 'id' | 'timestamp'>): GameHistoryEntry[] {
  const history = getGameHistory();
  const newEntry: GameHistoryEntry = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now()
  };

  const updated = [newEntry, ...history].slice(0, MAX_HISTORY_ENTRIES);
  const serialized = JSON.stringify(updated);

  setCookie('yuridle_history', serialized, 365);

  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('yuridle_history', serialized);
    }
  } catch {
    // Ignore
  }

  return updated;
}

/**
 * Clears the game history log from both cookies and localStorage.
 */
export function clearGameHistory(): void {
  deleteCookie('yuridle_history');
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('yuridle_history');
    }
  } catch {
    // Ignore
  }
}
