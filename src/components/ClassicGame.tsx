import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Lightbulb, RefreshCw, Flag, Award, Sparkles } from 'lucide-react';
import { YuriSeries, SeriesGuessFeedback, PlayType } from '../types/yuri';
import { YURI_SERIES } from '../data/yuriSeries';
import { evaluateSeriesGuess, generateSeriesShareText } from '../utils/gameLogic';
import { getDailySeries, getRandomSeries } from '../utils/dailySeed';
import { getDailyState, saveDailyState, recordGameResult } from '../utils/storage';
import { sound } from '../utils/sound';
import { handleCoverError } from '../utils/imageFallbacks';
import { SearchBar, SearchOption } from './SearchBar';
import { GuessRow } from './GuessRow';
import { DailyResetTimer } from './DailyResetTimer';

interface ClassicGameProps {
  playType: PlayType;
  dateString: string;
  dailyNumber: number;
  onGameEnd: (shareText: string) => void;
}

export const ClassicGame: React.FC<ClassicGameProps> = ({
  playType,
  dateString,
  dailyNumber,
  onGameEnd
}) => {
  const [targetSeries, setTargetSeries] = useState<YuriSeries>(() => {
    return playType === 'daily' ? getDailySeries() : getRandomSeries();
  });

  const [guesses, setGuesses] = useState<SeriesGuessFeedback[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showSurrenderConfirm, setShowSurrenderConfirm] = useState(false);

  useEffect(() => {
    if (playType === 'daily') {
      const daily = getDailySeries();
      setTargetSeries(daily);
      const saved = getDailyState('classic', dateString);
      if (saved) {
        const reconstructed: SeriesGuessFeedback[] = [];
        saved.guesses.forEach(id => {
          const guessed = YURI_SERIES.find(s => s.id === id);
          if (guessed) {
            reconstructed.push(evaluateSeriesGuess(guessed, daily));
          }
        });
        setGuesses(reconstructed);
        setGameOver(saved.completed);
        setWon(saved.won);
      } else {
        setGuesses([]);
        setGameOver(false);
        setWon(false);
      }
    } else {
      startNewUnlimitedRound();
    }
  }, [playType, dateString]);

  const startNewUnlimitedRound = () => {
    sound.playClick();
    const newTarget = getRandomSeries(targetSeries?.id);
    setTargetSeries(newTarget);
    setGuesses([]);
    setGameOver(false);
    setWon(false);
    setShowSurrenderConfirm(false);
  };

  const handleGuess = (option: SearchOption) => {
    if (gameOver) return;
    const guessedSeries = YURI_SERIES.find(s => s.id === option.id);
    if (!guessedSeries) return;

    const feedback = evaluateSeriesGuess(guessedSeries, targetSeries);
    const newGuesses = [feedback, ...guesses];
    setGuesses(newGuesses);

    const isWin = feedback.isMatch;
    const isLoss = !isWin && newGuesses.length >= 6;

    if (isWin) {
      setGameOver(true);
      setWon(true);
      sound.playSuccessSound();
      sound.playWinFanfare();
      triggerConfetti();

      recordGameResult('classic', true, newGuesses.length, playType === 'daily' ? dateString : undefined, targetSeries?.title, playType);

      if (playType === 'daily') {
        saveDailyState('classic', {
          date: dateString,
          completed: true,
          won: true,
          guesses: newGuesses.map(g => g.guessedSeries.id)
        });
      }

      const shareText = generateSeriesShareText(
        newGuesses.slice().reverse(),
        playType === 'daily' ? dailyNumber : 'Unlimited',
        true
      );
      onGameEnd(shareText);
    } else if (isLoss) {
      setGameOver(true);
      setWon(false);
      sound.playWrongSound();

      recordGameResult('classic', false, newGuesses.length, playType === 'daily' ? dateString : undefined, targetSeries?.title, playType);

      if (playType === 'daily') {
        saveDailyState('classic', {
          date: dateString,
          completed: true,
          won: false,
          guesses: newGuesses.map(g => g.guessedSeries.id)
        });
      }

      const shareText = generateSeriesShareText(
        newGuesses.slice().reverse(),
        playType === 'daily' ? dailyNumber : 'Unlimited',
        false
      );
      onGameEnd(shareText);
    } else {
      sound.playClick();
      if (playType === 'daily') {
        saveDailyState('classic', {
          date: dateString,
          completed: false,
          won: false,
          guesses: newGuesses.map(g => g.guessedSeries.id)
        });
      }
    }
  };

  const handleSurrender = () => {
    sound.playWrongSound();
    setGameOver(true);
    setWon(false);
    setShowSurrenderConfirm(false);

    recordGameResult('classic', false, guesses.length + 1, playType === 'daily' ? dateString : undefined, targetSeries?.title, playType);

    if (playType === 'daily') {
      saveDailyState('classic', {
        date: dateString,
        completed: true,
        won: false,
        guesses: guesses.map(g => g.guessedSeries.id)
      });
    }

    const shareText = generateSeriesShareText(
      guesses.slice().reverse(),
      playType === 'daily' ? dailyNumber : 'Unlimited',
      false
    );
    onGameEnd(shareText);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#ec4899', '#fb7185', '#fbcfe8']
      });
    } catch {
      // Ignore
    }
  };

  const searchOptions: SearchOption[] = YURI_SERIES.map(s => {
    const pairNames = (s.pairing || '')
      .split(/ x | × | \/ | & | and /i)
      .map(p => p.trim().toLowerCase())
      .filter(p => p.length > 1);

    const safeAliases = (s.aliases || []).filter(a => {
      const aLower = a.toLowerCase().trim();
      if (aLower.includes(' x ') || aLower.includes(' × ') || aLower.includes(' & ')) return false;
      if (pairNames.some(p => p === aLower || (p.length > 3 && aLower.length > 3 && (p.includes(aLower) || aLower.includes(p))))) {
        return false;
      }
      return true;
    });

    return {
      id: s.id,
      title: s.title,
      romaji: s.romaji,
      subtitle: `${s.medium} (${s.releaseYear}) • ${s.origin}`,
      badge: s.medium,
      avatar: s.coverImage,
      aliases: [
        s.nativeTitle,
        ...safeAliases
      ].filter(Boolean) as string[]
    };
  });

  const alreadyGuessedIds = guesses.map(g => g.guessedSeries.id);
  const remainingGuesses = Math.max(0, 6 - guesses.length);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
      {/* Search Bar Container */}
      <div className="text-center relative z-30">
        <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 flex items-center justify-center gap-2">
          <span>Guess the Yuri Title</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold border border-pink-200">
            {remainingGuesses} guesses left
          </span>
        </h2>
        <p className="text-xs text-slate-500 font-medium mb-3">
          Type an anime, manga, novel, or manhwa title in English or Japanese
        </p>

        <SearchBar
          options={searchOptions}
          alreadyGuessedIds={alreadyGuessedIds}
          onSelect={handleGuess}
          disabled={gameOver}
          placeholder="e.g. Bloom Into You, Citrus, MagiRevo, Girl Friends..."
        />
      </div>

      {/* Clue Hint Accordion */}
      {guesses.length >= 3 && !won && (
        <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-2xl flex items-start gap-3 text-left animate-fade-in shadow-sm">
          <Lightbulb size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs">
            <div className="font-bold text-amber-900 uppercase tracking-wider mb-0.5">
              💡 Yuri Clue Unlocked!
            </div>
            <div className="text-amber-800 font-medium">
              Main Pairing: <strong>{targetSeries.pairing}</strong>
            </div>
            {guesses.length >= 4 && (
              <div className="mt-1 italic text-amber-700">
                "{targetSeries.famousQuote}"
              </div>
            )}
          </div>
        </div>
      )}

      {/* Win / Loss Result Banner */}
      {gameOver && (
        <div className="p-6 bg-white border-2 border-pink-200 rounded-3xl shadow-xl text-center flex flex-col items-center gap-3 animate-fade-in">
          {won ? (
            <>
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                <Award size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Splendid! You got it! 🌸
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                The mystery Yuri was <strong>{targetSeries.title}</strong>{targetSeries.romaji && targetSeries.romaji.toLowerCase() !== targetSeries.title.toLowerCase() ? ` (${targetSeries.romaji})` : ''} ({targetSeries.releaseYear})!
              </p>
            </>
          ) : (
            <>
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center shadow-sm">
                <Flag size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Round Finished!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                The correct Yuri title was: <strong className="text-pink-600">{targetSeries.title}</strong>{targetSeries.romaji && targetSeries.romaji.toLowerCase() !== targetSeries.title.toLowerCase() ? ` (${targetSeries.romaji})` : ''}
              </p>
            </>
          )}

          {/* Series Reveal Card */}
          <div className="w-full max-w-sm p-3 bg-pink-50/50 rounded-2xl border border-pink-100 flex items-center gap-3.5 text-left shadow-sm">
            <img
              src={targetSeries.coverImage}
              alt={targetSeries.title}
              onError={handleCoverError}
              className="w-16 h-22 rounded-xl object-cover border border-pink-200 shadow-sm shrink-0 bg-white"
            />
            <div className="min-w-0">
              <div className="font-bold text-sm text-slate-900 truncate">{targetSeries.title}</div>
              {targetSeries.romaji && targetSeries.romaji.toLowerCase() !== targetSeries.title.toLowerCase() && (
                <div className="text-xs text-pink-600 font-semibold truncate">
                  {targetSeries.romaji}
                </div>
              )}
              <div className="text-xs text-pink-700 font-semibold">{targetSeries.pairing}</div>
              <div className="text-[11px] text-slate-500 font-medium mt-1">
                {targetSeries.medium} • {targetSeries.releaseYear} • {targetSeries.origin}
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 mt-2">
            {playType === 'unlimited' ? (
              <button
                type="button"
                onClick={startNewUnlimitedRound}
                className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl shadow-md shadow-pink-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <RefreshCw size={16} />
                <span>Next Round 🌸</span>
              </button>
            ) : (
              <DailyResetTimer variant="card" currentMode="classic" />
            )}
          </div>
        </div>
      )}

      {/* Give up option */}
      {!gameOver && guesses.length >= 2 && (
        <div className="text-center">
          {!showSurrenderConfirm ? (
            <button
              type="button"
              onClick={() => setShowSurrenderConfirm(true)}
              className="text-xs text-slate-400 hover:text-pink-600 transition-colors font-medium underline"
            >
              Give up and reveal answer?
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 p-2 bg-rose-50 rounded-xl border border-rose-200 text-xs">
              <span className="text-rose-700 font-medium">Reveal answer now?</span>
              <button
                type="button"
                onClick={handleSurrender}
                className="px-2.5 py-1 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 transition-colors"
              >
                Yes, Reveal
              </button>
              <button
                type="button"
                onClick={() => setShowSurrenderConfirm(false)}
                className="px-2.5 py-1 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}

      {/* Guess History List */}
      <div className="w-full mt-2">
        {guesses.map((feedback, idx) => (
          <GuessRow
            key={feedback.guessedSeries.id}
            type="series"
            feedback={feedback}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};
