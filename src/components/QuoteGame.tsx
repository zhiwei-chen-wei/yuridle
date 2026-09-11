import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MessageCircleHeart, RefreshCw, Flag, Award, Sparkles, HelpCircle, Heart } from 'lucide-react';
import { YuriCharacter, PlayType } from '../types/yuri';
import { YURI_CHARACTERS } from '../data/yuriCharacters';
import { YURI_SERIES } from '../data/yuriSeries';
import { getDailyQuoteCharacter, getRandomQuoteCharacter } from '../utils/dailySeed';
import { getDailyState, saveDailyState, recordGameResult } from '../utils/storage';
import { generateQuoteShareText } from '../utils/gameLogic';
import { sound } from '../utils/sound';
import { handleAvatarError } from '../utils/imageFallbacks';
import { SearchBar, SearchOption } from './SearchBar';
import { getSeriesWithRomaji, getSeriesRomaji } from '../utils/seriesFormat';
import { DailyResetTimer } from './DailyResetTimer';

interface QuoteGameProps {
  playType: PlayType;
  dateString: string;
  dailyNumber: number;
  onGameEnd: (shareText: string) => void;
}

export const QuoteGame: React.FC<QuoteGameProps> = ({
  playType,
  dateString,
  dailyNumber,
  onGameEnd
}) => {
  const [targetChar, setTargetChar] = useState<YuriCharacter>(() => {
    return playType === 'daily' ? getDailyQuoteCharacter() : getRandomQuoteCharacter();
  });

  const [guessedChars, setGuessedChars] = useState<YuriCharacter[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showSurrenderConfirm, setShowSurrenderConfirm] = useState(false);

  useEffect(() => {
    if (playType === 'daily') {
      const daily = getDailyQuoteCharacter();
      setTargetChar(daily);
      const saved = getDailyState('quote', dateString);
      if (saved) {
        const reconstructed = saved.guesses
          .map(id => YURI_CHARACTERS.find(c => c.id === id))
          .filter((c): c is YuriCharacter => Boolean(c));
        setGuessedChars(reconstructed);
        setGameOver(saved.completed);
        setWon(saved.won);
      } else {
        setGuessedChars([]);
        setGameOver(false);
        setWon(false);
      }
    } else {
      startNewUnlimitedRound();
    }
  }, [playType, dateString]);

  const startNewUnlimitedRound = () => {
    sound.playClick();
    const newTarget = getRandomQuoteCharacter(targetChar?.id);
    setTargetChar(newTarget);
    setGuessedChars([]);
    setGameOver(false);
    setWon(false);
    setShowSurrenderConfirm(false);
  };

  const associatedSeries = YURI_SERIES.find(s => s.id === targetChar.seriesId);

  const handleGuess = (option: SearchOption) => {
    if (gameOver) return;
    const guessed = YURI_CHARACTERS.find(c => c.id === option.id);
    if (!guessed) return;

    const newGuesses = [guessed, ...guessedChars];
    setGuessedChars(newGuesses);

    const isWin = guessed.id === targetChar.id;
    const isLoss = !isWin && newGuesses.length >= 6;

    if (isWin) {
      setGameOver(true);
      setWon(true);
      sound.playSuccessSound();
      sound.playWinFanfare();
      triggerConfetti();

      recordGameResult('quote', true, newGuesses.length, playType === 'daily' ? dateString : undefined, `${targetChar.name} (${targetChar.seriesTitle})`, playType);

      if (playType === 'daily') {
        saveDailyState('quote', {
          date: dateString,
          completed: true,
          won: true,
          guesses: newGuesses.map(g => g.id)
        });
      }

      const share = generateQuoteShareText(newGuesses.length, playType === 'daily' ? dailyNumber : '∞', true);
      onGameEnd(share);
    } else if (isLoss) {
      setGameOver(true);
      setWon(false);
      sound.playWrongSound();

      recordGameResult('quote', false, newGuesses.length, playType === 'daily' ? dateString : undefined, `${targetChar.name} (${targetChar.seriesTitle})`, playType);

      if (playType === 'daily') {
        saveDailyState('quote', {
          date: dateString,
          completed: true,
          won: false,
          guesses: newGuesses.map(g => g.id)
        });
      }

      const share = generateQuoteShareText(newGuesses.length, playType === 'daily' ? dailyNumber : '∞', false);
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

    recordGameResult('quote', false, 6, playType === 'daily' ? dateString : undefined, `${targetChar.name} (${targetChar.seriesTitle})`, playType);

    if (playType === 'daily') {
      saveDailyState('quote', {
        date: dateString,
        completed: true,
        won: false,
        guesses: guessedChars.map(g => g.id)
      });
    }

    const share = generateQuoteShareText(6, playType === 'daily' ? dailyNumber : '∞', false);
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

  // Convert characters to search options
  const searchOptions: SearchOption[] = YURI_CHARACTERS.map(c => {
    const romaji = getSeriesRomaji(c.seriesId || c.seriesTitle);
    return {
      id: c.id,
      title: `${c.name} (${getSeriesWithRomaji(c.seriesTitle, romaji)})`,
      subtitle: `${c.nativeName} • ${c.role}`,
      avatar: c.avatar,
      aliases: c.aliases
    };
  });

  const remainingGuesses = 6 - guessedChars.length;
  const attemptsMade = guessedChars.length;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto animate-fade-in">
      {/* Mode Header Badge */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-pink-100 rounded-2xl text-pink-600">
            <MessageCircleHeart size={20} />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-800 flex items-center gap-1.5">
              <span>Quote Mode</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold">
                名言・セリフ当て
              </span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Who said this memorable Yuri quote?
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-bold text-slate-400">Attempts</span>
          <p className="text-sm font-extrabold text-pink-600">
            {guessedChars.length} / 6
          </p>
        </div>
      </div>

      {/* Manga Speech Bubble Card */}
      <div className="w-full relative bg-white border border-pink-200/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-pink-100/50">
        <div className="absolute -top-3 left-8 px-3 py-0.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-[11px] font-bold rounded-full shadow-sm flex items-center gap-1">
          <Sparkles size={11} />
          <span>Yuri Dialogue • 台詞</span>
        </div>

        {/* Speech Bubble Interior */}
        <div className="relative mt-2 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-pink-50/60 via-white to-rose-50/40 border border-pink-100 flex flex-col items-center text-center">
          <span className="text-4xl text-pink-300 font-serif leading-none mb-1 select-none">“</span>
          <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 tracking-tight italic font-serif leading-relaxed max-w-lg px-2">
            {targetChar.quote}
          </blockquote>
          <span className="text-4xl text-pink-300 font-serif leading-none mt-1 select-none">”</span>
        </div>

        {/* Progressive Clues Tray */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Clue 1: Series Medium & Year */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-2.5 transition-all ${
            attemptsMade >= 1 || gameOver
              ? 'bg-pink-50/80 border-pink-200 text-slate-800 shadow-sm'
              : 'bg-slate-50/60 border-slate-200/60 text-slate-400'
          }`}>
            <span className="w-6 h-6 rounded-xl bg-white flex items-center justify-center font-bold text-[11px] shadow-2xs text-pink-600 shrink-0">
              1
            </span>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Medium & Debut Year</p>
              <p className="font-bold">
                {attemptsMade >= 1 || gameOver
                  ? `${associatedSeries?.medium || 'Anime/Manga'} • ${targetChar.debutYear}`
                  : 'Guess 1 to unlock'}
              </p>
            </div>
          </div>

          {/* Clue 2: Archetype & Role */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-2.5 transition-all ${
            attemptsMade >= 2 || gameOver
              ? 'bg-pink-50/80 border-pink-200 text-slate-800 shadow-sm'
              : 'bg-slate-50/60 border-slate-200/60 text-slate-400'
          }`}>
            <span className="w-6 h-6 rounded-xl bg-white flex items-center justify-center font-bold text-[11px] shadow-2xs text-pink-600 shrink-0">
              2
            </span>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Archetype & Role</p>
              <p className="font-bold">
                {attemptsMade >= 2 || gameOver
                  ? `${targetChar.archetype} • ${targetChar.role}`
                  : 'Guess 2 to unlock'}
              </p>
            </div>
          </div>

          {/* Clue 3: Series Title */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-2.5 transition-all ${
            attemptsMade >= 3 || gameOver
              ? 'bg-pink-50/80 border-pink-200 text-slate-800 shadow-sm'
              : 'bg-slate-50/60 border-slate-200/60 text-slate-400'
          }`}>
            <span className="w-6 h-6 rounded-xl bg-white flex items-center justify-center font-bold text-[11px] shadow-2xs text-pink-600 shrink-0">
              3
            </span>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Origin Series</p>
              <p className="font-bold truncate max-w-[200px]">
                {attemptsMade >= 3 || gameOver
                  ? getSeriesWithRomaji(targetChar.seriesTitle, getSeriesRomaji(targetChar.seriesId || targetChar.seriesTitle))
                  : 'Guess 3 to unlock'}
              </p>
            </div>
          </div>

          {/* Clue 4: Hair Color & Pairing Partner */}
          <div className={`p-3 rounded-2xl border text-xs flex items-center gap-2.5 transition-all ${
            attemptsMade >= 4 || gameOver
              ? 'bg-pink-50/80 border-pink-200 text-slate-800 shadow-sm'
              : 'bg-slate-50/60 border-slate-200/60 text-slate-400'
          }`}>
            <span className="w-6 h-6 rounded-xl bg-white flex items-center justify-center font-bold text-[11px] shadow-2xs text-pink-600 shrink-0">
              4
            </span>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Hair & Pairing Partner</p>
              <p className="font-bold">
                {attemptsMade >= 4 || gameOver
                  ? `${targetChar.hairColor} Hair • ${targetChar.pairingWith}`
                  : 'Guess 4 to unlock'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input Search Box or Game Over Card */}
      {!gameOver ? (
        <div className="w-full flex flex-col gap-3 relative z-30">
          <SearchBar
            options={searchOptions}
            alreadyGuessedIds={guessedChars.map(g => g.id)}
            onSelect={handleGuess}
            placeholder="Type a Yuri heroine's name (e.g. Yuu, Chisato, Homura)..."
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
                <span className="text-slate-500 font-medium">Reveal speaker?</span>
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
              src={targetChar.avatar}
              alt={targetChar.name}
              onError={handleAvatarError}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover object-top border-4 border-white shadow-lg"
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
              {won ? `Brilliant! Solved in ${guessedChars.length} / 6 tries 🎉` : 'Better luck next round! 🌸'}
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-2">
              {targetChar.name}
            </h3>
            <p className="text-xs text-slate-500 font-bold mt-0.5">
              {targetChar.nativeName} • {getSeriesWithRomaji(targetChar.seriesTitle, getSeriesRomaji(targetChar.seriesId || targetChar.seriesTitle))}
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-xs font-semibold text-pink-600">
              <Heart size={13} className="fill-pink-500 text-pink-500" />
              <span>Canon Ship: {targetChar.name} x {targetChar.pairingWith}</span>
            </div>
          </div>

          {playType === 'unlimited' ? (
            <button
              type="button"
              onClick={startNewUnlimitedRound}
              className="mt-2 flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm shadow-md shadow-pink-500/25 hover:opacity-95 active:scale-95 transition-all"
            >
              <RefreshCw size={15} />
              <span>Next Quote 🌸</span>
            </button>
          ) : (
            <DailyResetTimer variant="card" className="mt-2" />
          )}
        </div>
      )}

      {/* Guessed Characters History */}
      {guessedChars.length > 0 && (
        <div className="w-full flex flex-col gap-2 mt-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            Your Guesses ({guessedChars.length})
          </h4>
          <div className="flex flex-col gap-2">
            {guessedChars.map((char, index) => {
              const isTarget = char.id === targetChar.id;
              const seriesMatch = char.seriesId === targetChar.seriesId;
              const roleMatch = char.role === targetChar.role;
              const hairMatch = char.hairColor === targetChar.hairColor;
              const archetypeMatch = char.archetype === targetChar.archetype;

              return (
                <div
                  key={`${char.id}-${index}`}
                  className={`p-3 rounded-2xl border flex items-center justify-between gap-3 shadow-xs transition-all ${
                    isTarget
                      ? 'bg-emerald-50/90 border-emerald-200'
                      : 'bg-white border-pink-100'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={char.avatar}
                      alt={char.name}
                      onError={handleAvatarError}
                      className="w-10 h-10 rounded-xl object-cover object-top border border-pink-100 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                        {char.name}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {getSeriesWithRomaji(char.seriesTitle, getSeriesRomaji(char.seriesId || char.seriesTitle))}
                      </p>
                    </div>
                  </div>

                  {/* Clue Match Badges */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span
                      title={`Series: ${seriesMatch ? 'Match' : 'Different'}`}
                      className={`text-[10px] px-2 py-0.5 rounded-lg font-bold border ${
                        seriesMatch 
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      Series
                    </span>
                    <span
                      title={`Role: ${roleMatch ? 'Match' : 'Different'}`}
                      className={`text-[10px] px-2 py-0.5 rounded-lg font-bold border ${
                        roleMatch 
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {char.role}
                    </span>
                    <span
                      title={`Archetype: ${archetypeMatch ? 'Match' : 'Different'}`}
                      className={`hidden sm:inline text-[10px] px-2 py-0.5 rounded-lg font-bold border ${
                        archetypeMatch 
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      {char.archetype}
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
