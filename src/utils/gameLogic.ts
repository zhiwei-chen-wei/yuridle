import { 
  YuriSeries, 
  SeriesGuessFeedback, 
  FeedbackState, 
  YearDirection,
  YuriCharacter,
  CharacterGuessFeedback,
  YuriShip,
  ShipGuessFeedback,
  YuriSong,
  SongGuessFeedback
} from '../types/yuri';

export function evaluateSeriesGuess(guess: YuriSeries, target: YuriSeries): SeriesGuessFeedback {
  const isMatch = guess.id === target.id;

  // Medium evaluation
  const medium: FeedbackState = guess.medium === target.medium ? 'correct' : 'wrong';

  // Release year evaluation
  let year: FeedbackState = 'wrong';
  let yearDirection: YearDirection = 'correct';

  if (guess.releaseYear === target.releaseYear) {
    year = 'correct';
    yearDirection = 'correct';
  } else {
    yearDirection = guess.releaseYear < target.releaseYear ? 'higher' : 'lower';
    // If within 2 years, mark as partial (yellow)
    if (Math.abs(guess.releaseYear - target.releaseYear) <= 2) {
      year = 'partial';
    } else {
      year = 'wrong';
    }
  }

  // Origin evaluation
  const origin: FeedbackState = guess.origin === target.origin ? 'correct' : 'wrong';

  // Setting evaluation
  const setting: FeedbackState = guess.setting === target.setting ? 'correct' : 'wrong';

  // Trope evaluation (compare arrays)
  let trope: FeedbackState = 'wrong';
  const sharedTropes = guess.tropes.filter(t => target.tropes.includes(t));
  if (sharedTropes.length === target.tropes.length && guess.tropes.length === target.tropes.length) {
    trope = 'correct';
  } else if (sharedTropes.length > 0) {
    trope = 'partial';
  } else {
    trope = 'wrong';
  }

  // Tone evaluation
  const tone: FeedbackState = guess.tone === target.tone ? 'correct' : 'wrong';

  // Status evaluation
  const status: FeedbackState = guess.status === target.status ? 'correct' : 'wrong';

  return {
    guessedSeries: guess,
    medium,
    year,
    yearDirection,
    origin,
    setting,
    trope,
    tone,
    status,
    isMatch
  };
}

export function evaluateCharacterGuess(guess: YuriCharacter, target: YuriCharacter): CharacterGuessFeedback {
  const isMatch = guess.id === target.id;

  // Series match
  const series: FeedbackState = guess.seriesId === target.seriesId ? 'correct' : 'wrong';

  // Role match
  const role: FeedbackState = guess.role === target.role ? 'correct' : 'wrong';

  // Hair color match
  const hairColor: FeedbackState = guess.hairColor === target.hairColor ? 'correct' : 'wrong';

  // Archetype match
  const archetype: FeedbackState = guess.archetype === target.archetype ? 'correct' : 'wrong';

  // Debut year
  let debutYear: FeedbackState = 'wrong';
  let yearDirection: YearDirection = 'correct';

  if (guess.debutYear === target.debutYear) {
    debutYear = 'correct';
    yearDirection = 'correct';
  } else {
    yearDirection = guess.debutYear < target.debutYear ? 'higher' : 'lower';
    if (Math.abs(guess.debutYear - target.debutYear) <= 2) {
      debutYear = 'partial';
    } else {
      debutYear = 'wrong';
    }
  }

  return {
    guessedCharacter: guess,
    series,
    role,
    hairColor,
    archetype,
    debutYear,
    yearDirection,
    isMatch
  };
}

function feedbackToEmoji(feedback: FeedbackState, direction?: YearDirection): string {
  if (feedback === 'correct') return '🟩';
  if (feedback === 'partial') {
    if (direction === 'higher') return '🟧⬆️';
    if (direction === 'lower') return '🟧⬇️';
    return '🟧';
  }
  if (direction === 'higher') return '⬛⬆️';
  if (direction === 'lower') return '⬛⬇️';
  return '⬛';
}

export function generateSeriesShareText(
  feedbacks: SeriesGuessFeedback[], 
  puzzleNumber: number | string, 
  won: boolean
): string {
  const attemptCount = won ? feedbacks.length : 'X';
  let share = `🌸 Yuridle (Series) #${puzzleNumber} • ${attemptCount}/6\n\n`;

  feedbacks.forEach(f => {
    const row = [
      feedbackToEmoji(f.medium),
      feedbackToEmoji(f.year, f.yearDirection),
      feedbackToEmoji(f.origin),
      feedbackToEmoji(f.setting),
      feedbackToEmoji(f.trope),
      feedbackToEmoji(f.status)
    ].join('');
    share += `${row}\n`;
  });

  share += '\nPlay Yuridle: 百合のWordle 🌸';
  return share;
}

export function generateCharacterShareText(
  feedbacks: CharacterGuessFeedback[], 
  puzzleNumber: number | string, 
  won: boolean
): string {
  const attemptCount = won ? feedbacks.length : 'X';
  let share = `👥 Yuridle (Character) #${puzzleNumber} • ${attemptCount}/6\n\n`;

  feedbacks.forEach(f => {
    const row = [
      feedbackToEmoji(f.series),
      feedbackToEmoji(f.role),
      feedbackToEmoji(f.hairColor),
      feedbackToEmoji(f.archetype),
      feedbackToEmoji(f.debutYear, f.yearDirection)
    ].join('');
    share += `${row}\n`;
  });

  share += '\nPlay Yuridle: 百合のWordle 🌸';
  return share;
}

export function generateQuoteShareText(
  guessesCount: number,
  puzzleNumber: number | string,
  won: boolean
): string {
  const attemptCount = won ? guessesCount : 'X';
  let share = `💬 Yuridle (Quote) #${puzzleNumber} • ${attemptCount}/6\n\n`;
  for (let i = 1; i <= 6; i++) {
    if (i < guessesCount) {
      share += '⬛';
    } else if (i === guessesCount) {
      share += won ? '🟩' : '🟥';
      break;
    }
  }
  share += '\n\nPlay Yuridle: 百合のWordle 🌸';
  return share;
}

export function generateEmojiShareText(
  emojis: [string, string, string, string],
  guessesCount: number,
  puzzleNumber: number | string,
  won: boolean
): string {
  const attemptCount = won ? guessesCount : 'X';
  let share = `🧩 Yuridle (Emoji) #${puzzleNumber} • ${attemptCount}/6\n`;
  share += `${emojis.join(' ')}\n\n`;
  for (let i = 1; i <= 6; i++) {
    if (i < guessesCount) {
      share += '⬛';
    } else if (i === guessesCount) {
      share += won ? '🟩' : '🟥';
      break;
    }
  }
  share += '\n\nPlay Yuridle: 百合のWordle 🌸';
  return share;
}

export function evaluateShipGuess(guess: YuriShip, target: YuriShip): ShipGuessFeedback {
  const isMatch = guess.id === target.id;
  const seriesMatch: FeedbackState = guess.seriesId === target.seriesId ? 'correct' : 'wrong';
  const canonMatch: FeedbackState = guess.isCanon === target.isCanon ? 'correct' : 'wrong';

  let dynamicsMatch: FeedbackState = 'wrong';
  const shared = guess.dynamics.filter(d => target.dynamics.includes(d));
  if (shared.length === target.dynamics.length && guess.dynamics.length === target.dynamics.length) {
    dynamicsMatch = 'correct';
  } else if (shared.length > 0) {
    dynamicsMatch = 'partial';
  }

  return {
    guessedShip: guess,
    seriesMatch,
    canonMatch,
    dynamicsMatch,
    isMatch
  };
}

export function generateShipShareText(
  feedbacks: ShipGuessFeedback[],
  puzzleNumber: number | string,
  won: boolean
): string {
  const attemptCount = won ? feedbacks.length : 'X';
  let share = `💖 Yuridle (Ship) #${puzzleNumber} • ${attemptCount}/6\n\n`;

  feedbacks.forEach(f => {
    const row = [
      feedbackToEmoji(f.seriesMatch),
      feedbackToEmoji(f.canonMatch),
      feedbackToEmoji(f.dynamicsMatch)
    ].join('');
    share += `${row}\n`;
  });

  share += '\nPlay Yuridle: 百合のWordle 🌸';
  return share;
}

export function generateSilhouetteShareText(
  feedbacks: CharacterGuessFeedback[],
  puzzleNumber: number | string,
  won: boolean
): string {
  const attemptCount = won ? feedbacks.length : 'X';
  let share = `👤 Yuridle (Silhouette) #${puzzleNumber} • ${attemptCount}/6\n\n`;

  feedbacks.forEach(f => {
    const row = [
      feedbackToEmoji(f.series),
      feedbackToEmoji(f.role),
      feedbackToEmoji(f.hairColor),
      feedbackToEmoji(f.archetype),
      feedbackToEmoji(f.debutYear)
    ].join('');
    share += `${row}\n`;
  });

  share += '\nPlay Yuridle: 百合のWordle 🌸';
  return share;
}

export function evaluateSongGuess(guess: YuriSeries, targetSong: YuriSong, targetSeries?: YuriSeries): SongGuessFeedback {
  const isMatch = guess.id === targetSong.seriesId;

  // When solved / exact match, all attributes must be 'correct'
  if (isMatch) {
    return {
      guessedSeries: guess,
      medium: 'correct',
      year: 'correct',
      yearDirection: 'correct',
      origin: 'correct',
      setting: 'correct',
      trope: 'correct',
      isMatch: true
    };
  }

  // Medium
  const medium: FeedbackState = targetSeries ? (guess.medium === targetSeries.medium ? 'correct' : 'wrong') : 'wrong';

  // Release year evaluation
  // Target year is primarily the series releaseYear (or song releaseYear as fallback)
  const targetSeriesYear = targetSeries?.releaseYear ?? targetSong.releaseYear;
  const isYearExact = guess.releaseYear === targetSeriesYear || guess.releaseYear === targetSong.releaseYear;

  let year: FeedbackState = 'wrong';
  let yearDirection: YearDirection = 'correct';

  if (isYearExact) {
    year = 'correct';
    yearDirection = 'correct';
  } else {
    const diffSeries = targetSeries ? Math.abs(guess.releaseYear - targetSeries.releaseYear) : 999;
    const diffSong = Math.abs(guess.releaseYear - targetSong.releaseYear);
    if (diffSeries <= 2 || diffSong <= 2) {
      year = 'partial';
    } else {
      year = 'wrong';
    }
    // Direction points toward targetSeriesYear
    yearDirection = guess.releaseYear < targetSeriesYear ? 'higher' : 'lower';
  }

  const origin: FeedbackState = targetSeries ? (guess.origin === targetSeries.origin ? 'correct' : 'wrong') : 'wrong';
  const setting: FeedbackState = targetSeries ? (guess.setting === targetSeries.setting ? 'correct' : 'wrong') : 'wrong';

  let trope: FeedbackState = 'wrong';
  if (targetSeries) {
    const shared = guess.tropes.filter(t => targetSeries.tropes.includes(t));
    if (shared.length === targetSeries.tropes.length && guess.tropes.length === targetSeries.tropes.length) {
      trope = 'correct';
    } else if (shared.length > 0) {
      trope = 'partial';
    }
  }

  return {
    guessedSeries: guess,
    medium,
    year,
    yearDirection,
    origin,
    setting,
    trope,
    isMatch
  };
}

export function generateSongShareText(
  feedbacks: SongGuessFeedback[],
  puzzleNumber: number | string,
  won: boolean,
  songTitle: string
): string {
  const attemptCount = won ? feedbacks.length : 'X';
  let share = `🎵 Yuridle (Song) #${puzzleNumber} • ${attemptCount}/6\n`;
  share += `🎶 "${songTitle}"\n\n`;

  feedbacks.forEach(f => {
    const row = [
      feedbackToEmoji(f.medium),
      feedbackToEmoji(f.year, f.yearDirection),
      feedbackToEmoji(f.origin),
      feedbackToEmoji(f.setting),
      feedbackToEmoji(f.trope)
    ].join('');
    share += `${row}\n`;
  });

  share += '\nPlay Yuridle: 百合のWordle 🌸';
  return share;
}


