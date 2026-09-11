import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Eye, RefreshCw, Flag, Award } from 'lucide-react';
import { YuriSeries, PlayType } from '../types/yuri';
import { YURI_SERIES } from '../data/yuriSeries';
import { getDailyCoverSeries, getRandomCoverSeries, getCoverImageForSeries, getDailyInfo } from '../utils/dailySeed';
import { getDailyState, saveDailyState, recordGameResult } from '../utils/storage';
import { sound } from '../utils/sound';
import { handleCoverError } from '../utils/imageFallbacks';
import { SearchBar, SearchOption } from './SearchBar';
import { DailyResetTimer } from './DailyResetTimer';

interface CoverGameProps {
  playType: PlayType;
  dateString: string;
  dailyNumber: number;
  onGameEnd: (shareText: string) => void;
}

export const CoverGame: React.FC<CoverGameProps> = ({
  playType,
  dateString,
  dailyNumber,
  onGameEnd
}) => {
  const [targetSeries, setTargetSeries] = useState<YuriSeries>(() => {
    return playType === 'daily' ? getDailyCoverSeries() : getRandomCoverSeries();
  });
  const [activeCover, setActiveCover] = useState<string>(() => {
    const series = playType === 'daily' ? getDailyCoverSeries() : getRandomCoverSeries();
    const seed = playType === 'daily' ? getDailyInfo().dayNumber * 7113 : undefined;
    return getCoverImageForSeries(series, seed);
  });

  const [guessedIds, setGuessedIds] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (playType === 'daily') {
      const daily = getDailyCoverSeries();
      setTargetSeries(daily);
      setActiveCover(getCoverImageForSeries(daily, getDailyInfo().dayNumber * 7113));
      const saved = getDailyState('cover', dateString);
      if (saved) {
        setGuessedIds(saved.guesses);
        setGameOver(saved.completed);
        setWon(saved.won);
      } else {
        setGuessedIds([]);
        setGameOver(false);
        setWon(false);
      }
    } else {
      startNewUnlimitedRound();
    }
  }, [playType, dateString]);

  const startNewUnlimitedRound = () => {
    sound.playClick();
    const newTarget = getRandomCoverSeries(targetSeries?.id);
    setTargetSeries(newTarget);
    setActiveCover(getCoverImageForSeries(newTarget));
    setGuessedIds([]);
    setGameOver(false);
    setWon(false);
  };

  const blurAmount = gameOver ? 0 : Math.max(0, 22 - guessedIds.length * 4.2);

  const handleGuess = (option: SearchOption) => {
    if (gameOver) return;
    const newGuessedIds = [...guessedIds, option.id];
    setGuessedIds(newGuessedIds);

    const isWin = option.id === targetSeries.id;
    const isLoss = !isWin && newGuessedIds.length >= 6;

    if (isWin) {
      setGameOver(true);
      setWon(true);
      sound.playSuccessSound();
      sound.playWinFanfare();
      triggerConfetti();

      recordGameResult('cover', true, newGuessedIds.length, playType === 'daily' ? dateString : undefined, targetSeries?.title, playType);

      if (playType === 'daily') {
        saveDailyState('cover', {
          date: dateString,
          completed: true,
          won: true,
          guesses: newGuessedIds
        });
      }

      const share = `🖼️ Yuridle (Cover Blur) #${playType === 'daily' ? dailyNumber : 'Unlimited'} • ${newGuessedIds.length}/6 🌸\n\nPlay Yuridle: 百合のWordle`;
      onGameEnd(share);
    } else if (isLoss) {
      setGameOver(true);
      setWon(false);
      sound.playWrongSound();

      recordGameResult('cover', false, newGuessedIds.length, playType === 'daily' ? dateString : undefined, targetSeries?.title, playType);

      if (playType === 'daily') {
        saveDailyState('cover', {
          date: dateString,
          completed: true,
          won: false,
          guesses: newGuessedIds
        });
      }

      const share = `🖼️ Yuridle (Cover Blur) #${playType === 'daily' ? dailyNumber : 'Unlimited'} • X/6 🌸\n\nPlay Yuridle: 百合のWordle`;
      onGameEnd(share);
    } else {
      sound.playWrongSound();
      if (playType === 'daily') {
        saveDailyState('cover', {
          date: dateString,
          completed: false,
          won: false,
          guesses: newGuessedIds
        });
      }
    }
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

  const remainingGuesses = Math.max(0, 6 - guessedIds.length);

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-4">
      <div className="text-center">
        <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 flex items-center justify-center gap-2">
          <span>Guess from Blurred Cover</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold border border-pink-200">
            {remainingGuesses} guesses left
          </span>
        </h2>
        <p className="text-xs text-slate-500 font-medium mb-3">
          The artwork sharpens with every wrong attempt!
        </p>
      </div>

      {/* Picture Frame / Clean White Art Card */}
      <div className="relative p-2.5 bg-white rounded-3xl border-2 border-pink-200 shadow-xl">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-pink-50 flex items-center justify-center">
          <img
            src={activeCover || targetSeries.coverImage}
            alt="Mystery Yuri Cover"
            onError={handleCoverError}
            className="w-full h-full object-cover transition-all duration-700 ease-out select-none"
            style={{
              filter: `blur(${blurAmount}px) brightness(${gameOver ? 1 : 0.95})`,
              transform: gameOver ? 'scale(1)' : 'scale(1.04)'
            }}
          />

          {!gameOver && (
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs text-pink-700 border border-pink-200 flex items-center gap-1.5 font-bold shadow-sm">
              <Eye size={13} className="text-pink-500" />
              Blur: {Math.round(blurAmount)}px
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full relative z-30">
        <SearchBar
          options={searchOptions}
          alreadyGuessedIds={guessedIds}
          onSelect={handleGuess}
          disabled={gameOver}
          placeholder="Guess the Yuri series title..."
        />
      </div>

      {/* Previous Guesses List */}
      {guessedIds.length > 0 && (
        <div className="w-full max-w-md flex flex-col gap-2 mt-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
            Previous Attempts
          </div>
          {guessedIds.map((id, index) => {
            const series = YURI_SERIES.find(s => s.id === id);
            const isCorrect = id === targetSeries.id;
            return (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-2xl border text-sm font-semibold animate-fade-in shadow-sm ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                    : 'bg-white border-pink-100 text-slate-700'
                }`}
              >
                <div className="min-w-0 pr-2">
                  <span className="font-bold">{index + 1}. {series?.title || id}</span>
                  {series?.romaji && series.romaji.toLowerCase() !== series.title.toLowerCase() && (
                    <span className="text-xs text-pink-600 font-semibold ml-1.5">
                      ({series.romaji})
                    </span>
                  )}
                </div>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold shrink-0 ${
                  isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-100 text-rose-700'
                }`}>
                  {isCorrect ? '✅ Correct' : '❌ Wrong'}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Result Banner */}
      {gameOver && (
        <div className="w-full p-6 bg-white border-2 border-pink-200 rounded-3xl shadow-xl text-center flex flex-col items-center gap-3 animate-fade-in mt-2">
          {won ? (
            <>
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                <Award size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Spot on! 🌸
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                The cover was <strong>{targetSeries.title}</strong>{targetSeries.romaji && targetSeries.romaji.toLowerCase() !== targetSeries.title.toLowerCase() ? ` (${targetSeries.romaji})` : ''}!
              </p>
            </>
          ) : (
            <>
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center shadow-sm">
                <Flag size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Out of guesses!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                It was: <strong className="text-pink-600">{targetSeries.title}</strong>{targetSeries.romaji && targetSeries.romaji.toLowerCase() !== targetSeries.title.toLowerCase() ? ` (${targetSeries.romaji})` : ''}
              </p>
            </>
          )}

          <div className="flex gap-2.5 mt-2">
            {playType === 'unlimited' ? (
              <button
                type="button"
                onClick={startNewUnlimitedRound}
                className="flex items-center gap-2 px-6 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl shadow-md shadow-pink-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <RefreshCw size={16} />
                <span>Next Cover 🌸</span>
              </button>
            ) : (
              <DailyResetTimer variant="card" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
