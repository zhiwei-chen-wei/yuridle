import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Smile, RefreshCw, Flag, Award, Sparkles, BookOpen, Heart } from 'lucide-react';
import { YuriSeries, YuriEmojiRiddle, PlayType } from '../types/yuri';
import { YURI_SERIES } from '../data/yuriSeries';
import { getDailyEmojiRiddle, getRandomEmojiRiddle } from '../utils/dailySeed';
import { getDailyState, saveDailyState, recordGameResult } from '../utils/storage';
import { generateEmojiShareText } from '../utils/gameLogic';
import { sound } from '../utils/sound';
import { handleCoverError } from '../utils/imageFallbacks';
import { SearchBar, SearchOption } from './SearchBar';
import { DailyResetTimer } from './DailyResetTimer';

interface EmojiGameProps {
  playType: PlayType;
  dateString: string;
  dailyNumber: number;
  onGameEnd: (shareText: string) => void;
}

export const EmojiGame: React.FC<EmojiGameProps> = ({
  playType,
  dateString,
  dailyNumber,
  onGameEnd
}) => {
  const [targetRiddle, setTargetRiddle] = useState<YuriEmojiRiddle>(() => {
    return playType === 'daily' ? getDailyEmojiRiddle() : getRandomEmojiRiddle();
  });

  const [guessedSeriesList, setGuessedSeriesList] = useState<YuriSeries[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showSurrenderConfirm, setShowSurrenderConfirm] = useState(false);

  const targetSeries = YURI_SERIES.find(s => s.id === targetRiddle.seriesId) || YURI_SERIES[0];

  useEffect(() => {
    if (playType === 'daily') {
      const daily = getDailyEmojiRiddle();
      setTargetRiddle(daily);
      const saved = getDailyState('emoji', dateString);
      if (saved) {
        const reconstructed = saved.guesses
          .map(id => YURI_SERIES.find(s => s.id === id))
          .filter((s): s is YuriSeries => Boolean(s));
        setGuessedSeriesList(reconstructed);
        setGameOver(saved.completed);
        setWon(saved.won);
      } else {
        setGuessedSeriesList([]);
        setGameOver(false);
        setWon(false);
      }
    } else {
      startNewUnlimitedRound();
    }
  }, [playType, dateString]);

  const startNewUnlimitedRound = () => {
    sound.playClick();
    const newTarget = getRandomEmojiRiddle(targetRiddle?.seriesId);
    setTargetRiddle(newTarget);
    setGuessedSeriesList([]);
    setGameOver(false);
    setWon(false);
    setShowSurrenderConfirm(false);
  };

  const handleGuess = (option: SearchOption) => {
    if (gameOver) return;
    const guessed = YURI_SERIES.find(s => s.id === option.id);
    if (!guessed) return;

    const newGuesses = [guessed, ...guessedSeriesList];
    setGuessedSeriesList(newGuesses);

    const isWin = guessed.id === targetSeries.id;
    const isLoss = !isWin && newGuesses.length >= 6;

    if (isWin) {
      setGameOver(true);
      setWon(true);
      sound.playSuccessSound();
      sound.playWinFanfare();
      triggerConfetti();

      recordGameResult('emoji', true, newGuesses.length, playType === 'daily' ? dateString : undefined, targetRiddle.seriesTitle, playType);

      if (playType === 'daily') {
        saveDailyState('emoji', {
          date: dateString,
          completed: true,
          won: true,
          guesses: newGuesses.map(g => g.id)
        });
      }

      const share = generateEmojiShareText(
        targetRiddle.emojis,
        newGuesses.length,
        playType === 'daily' ? dailyNumber : '∞',
        true
      );
      onGameEnd(share);
    } else if (isLoss) {
      setGameOver(true);
      setWon(false);
      sound.playWrongSound();

      recordGameResult('emoji', false, newGuesses.length, playType === 'daily' ? dateString : undefined, targetRiddle.seriesTitle, playType);

      if (playType === 'daily') {
        saveDailyState('emoji', {
          date: dateString,
          completed: true,
          won: false,
          guesses: newGuesses.map(g => g.id)
        });
      }

      const share = generateEmojiShareText(
        targetRiddle.emojis,
        newGuesses.length,
        playType === 'daily' ? dailyNumber : '∞',
        false
      );
      onGameEnd(share);
    } else {
      sound.playTileFlip();
    }
  };

  const handleSurrender = () => {
    if (gameOver) return;
    sound.playClick();
    setGameOver(true);
    setWon(false);
    setShowSurrenderConfirm(false);

    recordGameResult('emoji', false, 6, playType === 'daily' ? dateString : undefined, targetRiddle.seriesTitle, playType);

    if (playType === 'daily') {
      saveDailyState('emoji', {
        date: dateString,
        completed: true,
        won: false,
        guesses: guessedSeriesList.map(g => g.id)
      });
    }

    const share = generateEmojiShareText(
      targetRiddle.emojis,
      6,
      playType === 'daily' ? dailyNumber : '∞',
      false
    );
    onGameEnd(share);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#fda4af', '#fecdd3', '#fff1f2']
    });
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

  const attemptsMade = guessedSeriesList.length;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto animate-fade-in">
      {/* Mode Header Badge */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-pink-100 rounded-2xl text-pink-600">
            <Smile size={20} />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-800 flex items-center gap-1.5">
              <span>Emoji Riddle Mode</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold">
                絵文字クイズ
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Guess the Yuri series from 4 thematic emojis!
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-bold text-slate-400">Attempts</span>
          <p className="text-sm font-extrabold text-pink-600">
            {guessedSeriesList.length} / 6
          </p>
        </div>
      </div>

      {/* Thematic Emoji Display Card */}
      <div className="w-full bg-white border border-pink-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-pink-100/50 relative">
        <div className="absolute -top-3 left-8 px-3 py-0.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-[11px] font-bold rounded-full shadow-sm flex items-center gap-1">
          <Sparkles size={11} />
          <span>4-Emoji Sequence • 暗号</span>
        </div>

        {/* 4 Large Bouncing Emoji Bubbles */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 my-3">
          {targetRiddle.emojis.map((emoji, idx) => (
            <div
              key={idx}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-b from-pink-50/90 to-rose-50/50 border-2 border-pink-200/70 shadow-md shadow-pink-100 flex items-center justify-center text-3xl sm:text-4xl transition-all transform hover:scale-110 active:scale-95 cursor-default select-none animate-bounce-subtle"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Progressive Clues Tray */}
        <div className="mt-6 flex flex-col gap-2.5">
          {/* Clue 1: Meaning of Emoji #1 */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-3 transition-all ${
            attemptsMade >= 1 || gameOver
              ? 'bg-pink-50/80 border-pink-200 text-slate-800 shadow-sm'
              : 'bg-slate-50/60 border-slate-200/60 text-slate-400'
          }`}>
            <span className="w-7 h-7 rounded-xl bg-white flex items-center justify-center font-bold text-sm shadow-2xs text-pink-600 shrink-0">
              {targetRiddle.emojis[0]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase font-bold text-slate-400">Emoji #1 Clue</p>
              <p className="font-bold truncate">
                {attemptsMade >= 1 || gameOver ? targetRiddle.clues[0] : 'Unlocked after 1 guess'}
              </p>
            </div>
          </div>

          {/* Clue 2: Emoji #2 + Medium & Year */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-3 transition-all ${
            attemptsMade >= 2 || gameOver
              ? 'bg-pink-50/80 border-pink-200 text-slate-800 shadow-sm'
              : 'bg-slate-50/60 border-slate-200/60 text-slate-400'
          }`}>
            <span className="w-7 h-7 rounded-xl bg-white flex items-center justify-center font-bold text-sm shadow-2xs text-pink-600 shrink-0">
              {targetRiddle.emojis[1]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase font-bold text-slate-400">
                Emoji #2 & Era ({attemptsMade >= 2 || gameOver ? `${targetSeries.medium}, ${targetSeries.releaseYear}` : 'Locked'})
              </p>
              <p className="font-bold truncate">
                {attemptsMade >= 2 || gameOver ? targetRiddle.clues[1] : 'Unlocked after 2 guesses'}
              </p>
            </div>
          </div>

          {/* Clue 3: Emoji #3 + Setting & Tone */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-3 transition-all ${
            attemptsMade >= 3 || gameOver
              ? 'bg-pink-50/80 border-pink-200 text-slate-800 shadow-sm'
              : 'bg-slate-50/60 border-slate-200/60 text-slate-400'
          }`}>
            <span className="w-7 h-7 rounded-xl bg-white flex items-center justify-center font-bold text-sm shadow-2xs text-pink-600 shrink-0">
              {targetRiddle.emojis[2]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase font-bold text-slate-400">
                Emoji #3 & Setting ({attemptsMade >= 3 || gameOver ? `${targetSeries.setting} • ${targetSeries.tone}` : 'Locked'})
              </p>
              <p className="font-bold truncate">
                {attemptsMade >= 3 || gameOver ? targetRiddle.clues[2] : 'Unlocked after 3 guesses'}
              </p>
            </div>
          </div>

          {/* Clue 4: Emoji #4 + Pairing Partner */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-3 transition-all ${
            attemptsMade >= 4 || gameOver
              ? 'bg-pink-50/80 border-pink-200 text-slate-800 shadow-sm'
              : 'bg-slate-50/60 border-slate-200/60 text-slate-400'
          }`}>
            <span className="w-7 h-7 rounded-xl bg-white flex items-center justify-center font-bold text-sm shadow-2xs text-pink-600 shrink-0">
              {targetRiddle.emojis[3]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase font-bold text-slate-400">
                Emoji #4 & Canon Ship ({attemptsMade >= 4 || gameOver ? targetSeries.pairing : 'Locked'})
              </p>
              <p className="font-bold truncate">
                {attemptsMade >= 4 || gameOver ? targetRiddle.clues[3] : 'Unlocked after 4 guesses'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Search Box or Solution Banner */}
      {!gameOver ? (
        <div className="w-full flex flex-col gap-3 relative z-30">
          <SearchBar
            options={searchOptions}
            alreadyGuessedIds={guessedSeriesList.map(g => g.id)}
            onSelect={handleGuess}
            placeholder="Type a Yuri series title (e.g. Bloom Into You, Lycoris, Gundam)..."
            disabled={gameOver}
          />

          {/* Surrender Button */}
          <div className="flex justify-end">
            {!showSurrenderConfirm ? (
              <button
                type="button"
                onClick={() => setShowSurrenderConfirm(true)}
                className="text-xs text-slate-400 hover:text-rose-500 font-medium flex items-center gap-1 transition-colors px-2 py-1"
              >
                <Flag size={12} />
                <span>Give Up?</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Reveal solution?</span>
                <button
                  type="button"
                  onClick={handleSurrender}
                  className="px-2.5 py-1 rounded-xl bg-rose-500 text-white font-bold hover:bg-rose-600 transition-colors"
                >
                  Yes, Surrender
                </button>
                <button
                  type="button"
                  onClick={() => setShowSurrenderConfirm(false)}
                  className="px-2 py-1 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Game Over Solution Banner */
        <div className={`w-full p-6 rounded-3xl border text-center flex flex-col items-center gap-4 animate-scale-in shadow-xl ${
          won 
            ? 'bg-gradient-to-br from-pink-50 to-white border-pink-200' 
            : 'bg-gradient-to-br from-slate-50 to-white border-slate-200'
        }`}>
          <div className="relative">
            <img
              src={targetSeries.coverImage}
              alt={targetSeries.title}
              onError={handleCoverError}
              className="w-28 h-40 sm:w-32 sm:h-44 rounded-2xl object-cover border-4 border-white shadow-lg"
            />
            <div className={`absolute -bottom-2 -right-2 p-2 rounded-2xl text-white shadow-md ${
              won ? 'bg-emerald-500' : 'bg-rose-500'
            }`}>
              {won ? <Award size={18} /> : <Flag size={18} />}
            </div>
          </div>

          <div>
            <span className={`text-xs font-extrabold uppercase px-3 py-1 rounded-full ${
              won ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }`}>
              {won ? `Solved in ${guessedSeriesList.length} / 6 tries! 🎉` : 'Secret Series Revealed 🌸'}
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-2">
              {targetSeries.title}
            </h3>
            <p className="text-xs text-slate-500 font-bold mt-0.5">
              {targetSeries.romaji} ({targetSeries.releaseYear}) • {targetSeries.medium}
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs font-semibold text-pink-600">
              <Heart size={13} className="fill-pink-500 text-pink-500" />
              <span>Canon Ship: {targetSeries.pairing}</span>
            </div>
          </div>

          {playType === 'unlimited' ? (
            <button
              type="button"
              onClick={startNewUnlimitedRound}
              className="mt-2 flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm shadow-md shadow-pink-500/25 hover:opacity-95 active:scale-95 transition-all"
            >
              <RefreshCw size={15} />
              <span>Next Emoji Riddle 🌸</span>
            </button>
          ) : (
            <DailyResetTimer variant="card" currentMode="emoji" className="mt-2" />
          )}
        </div>
      )}

      {/* Guessed Series List */}
      {guessedSeriesList.length > 0 && (
        <div className="w-full flex flex-col gap-2 mt-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            Your Guesses ({guessedSeriesList.length})
          </h4>
          <div className="flex flex-col gap-2">
            {guessedSeriesList.map((series, index) => {
              const isTarget = series.id === targetSeries.id;
              const mediumMatch = series.medium === targetSeries.medium;
              const yearMatch = series.releaseYear === targetSeries.releaseYear;
              const nearYear = Math.abs(series.releaseYear - targetSeries.releaseYear) <= 2;
              const originMatch = series.origin === targetSeries.origin;
              const settingMatch = series.setting === targetSeries.setting;

              return (
                <div
                  key={`${series.id}-${index}`}
                  className={`p-3 rounded-2xl border flex items-center justify-between gap-3 shadow-xs transition-all ${
                    isTarget
                      ? 'bg-emerald-50/90 border-emerald-200'
                      : 'bg-white border-pink-100'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={series.coverImage}
                      alt={series.title}
                      onError={handleCoverError}
                      className="w-10 h-14 rounded-lg object-cover border border-pink-100 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                        {series.title}
                      </p>
                      <p className="text-[11px] text-pink-600 font-semibold truncate">
                        {series.romaji && series.romaji.toLowerCase() !== series.title.toLowerCase()
                          ? `${series.romaji} • `
                          : ''}
                        <span className="text-slate-400 font-normal">{series.medium} ({series.releaseYear})</span>
                      </p>
                    </div>
                  </div>

                  {/* Attribute Comparison Badges */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      title={`Medium: ${mediumMatch ? 'Match' : 'Different'}`}
                      className={`text-[10px] px-2 py-0.5 rounded-lg font-bold border ${
                        mediumMatch 
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {series.medium}
                    </span>
                    <span
                      title={`Year: ${yearMatch ? 'Exact Match' : nearYear ? 'Close (+/-2 years)' : series.releaseYear < targetSeries.releaseYear ? 'Target is newer' : 'Target is older'}`}
                      className={`text-[10px] px-2 py-0.5 rounded-lg font-bold border flex items-center gap-0.5 ${
                        yearMatch 
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                          : nearYear
                          ? 'bg-amber-100 text-amber-800 border-amber-200'
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      <span>{series.releaseYear}</span>
                      {!yearMatch && (
                        <span>{series.releaseYear < targetSeries.releaseYear ? '⬆️' : '⬇️'}</span>
                      )}
                    </span>
                    <span
                      title={`Setting: ${settingMatch ? 'Match' : 'Different'}`}
                      className={`hidden sm:inline text-[10px] px-2 py-0.5 rounded-lg font-bold border ${
                        settingMatch 
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {series.setting}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
