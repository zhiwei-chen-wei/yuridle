import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, RefreshCw, Flag, Award, Sparkles, BookOpen, Check, HelpCircle } from 'lucide-react';
import { YuriShip, PlayType, ShipGuessFeedback } from '../types/yuri';
import { YURI_SHIPS } from '../data/yuriShips';
import { getDailyShip, getRandomShip } from '../utils/dailySeed';
import { getDailyState, saveDailyState, recordGameResult } from '../utils/storage';
import { evaluateShipGuess, generateShipShareText } from '../utils/gameLogic';
import { sound } from '../utils/sound';
import { handleAvatarError } from '../utils/imageFallbacks';
import { SearchBar, SearchOption } from './SearchBar';
import { getSeriesWithRomaji, getSeriesRomaji } from '../utils/seriesFormat';
import { DailyResetTimer } from './DailyResetTimer';

interface ShipGameProps {
  playType: PlayType;
  dateString: string;
  dailyNumber: number;
  onGameEnd: (shareText: string) => void;
}

export const ShipGame: React.FC<ShipGameProps> = ({
  playType,
  dateString,
  dailyNumber,
  onGameEnd
}) => {
  const [targetShip, setTargetShip] = useState<YuriShip>(() => {
    return playType === 'daily' ? getDailyShip() : getRandomShip();
  });

  const [guessedShips, setGuessedShips] = useState<YuriShip[]>([]);
  const [feedbacks, setFeedbacks] = useState<ShipGuessFeedback[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showSurrenderConfirm, setShowSurrenderConfirm] = useState(false);

  useEffect(() => {
    if (playType === 'daily') {
      const daily = getDailyShip();
      setTargetShip(daily);
      const saved = getDailyState('ship', dateString);
      if (saved) {
        const reconstructed = saved.guesses
          .map(id => YURI_SHIPS.find(s => s.id === id))
          .filter((s): s is YuriShip => Boolean(s));
        setGuessedShips(reconstructed);
        setFeedbacks(reconstructed.map(s => evaluateShipGuess(s, daily)));
        setGameOver(saved.completed);
        setWon(saved.won);
      } else {
        setGuessedShips([]);
        setFeedbacks([]);
        setGameOver(false);
        setWon(false);
      }
    } else {
      startNewUnlimitedRound();
    }
  }, [playType, dateString]);

  const startNewUnlimitedRound = () => {
    sound.playClick();
    const newTarget = getRandomShip(targetShip?.id);
    setTargetShip(newTarget);
    setGuessedShips([]);
    setFeedbacks([]);
    setGameOver(false);
    setWon(false);
    setShowSurrenderConfirm(false);
  };

  const handleGuess = (option: SearchOption) => {
    if (gameOver) return;
    const guessed = YURI_SHIPS.find(s => s.id === option.id);
    if (!guessed || guessedShips.some(s => s.id === guessed.id)) return;

    sound.playTileFlip();
    const feedback = evaluateShipGuess(guessed, targetShip);
    const newGuesses = [guessed, ...guessedShips];
    const newFeedbacks = [feedback, ...feedbacks];

    setGuessedShips(newGuesses);
    setFeedbacks(newFeedbacks);

    const isVictory = feedback.isMatch;
    const isOutOfGuesses = newGuesses.length >= 6;

    if (isVictory || isOutOfGuesses) {
      setGameOver(true);
      setWon(isVictory);

      if (isVictory) {
        sound.playWinFanfare();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f43f5e', '#ec4899', '#fb7185', '#fbcfe8', '#fda4af']
        });
      } else {
        sound.playWrongSound();
      }

      const shareText = generateShipShareText(
        newFeedbacks,
        playType === 'daily' ? dailyNumber : 'Unlimited',
        isVictory
      );

      if (playType === 'daily') {
        saveDailyState('ship', {
          date: dateString,
          completed: true,
          won: isVictory,
          guesses: newGuesses.map(g => g.id)
        });
      }
      recordGameResult('ship', isVictory, newGuesses.length, playType === 'daily' ? dateString : undefined, targetShip?.shipName, playType);

      onGameEnd(shareText);
    }
  };

  const handleSurrender = () => {
    if (gameOver) return;
    sound.playWrongSound();
    setGameOver(true);
    setWon(false);
    setShowSurrenderConfirm(false);

    const shareText = generateShipShareText(
      feedbacks,
      playType === 'daily' ? dailyNumber : 'Unlimited',
      false
    );

    if (playType === 'daily') {
      saveDailyState('ship', {
        date: dateString,
        completed: true,
        won: false,
        guesses: guessedShips.map(g => g.id)
      });
    }
    recordGameResult('ship', false, 7, playType === 'daily' ? dateString : undefined, targetShip?.shipName, playType);

    onGameEnd(shareText);
  };

  // Convert all ships to search options
  const searchOptions: SearchOption[] = YURI_SHIPS.map(s => {
    const seriesRomaji = getSeriesRomaji(s.seriesId || s.seriesTitle);
    return {
      id: s.id,
      title: s.shipName,
      subtitle: `${s.characters[0]} × ${s.characters[1]} • ${getSeriesWithRomaji(s.seriesTitle, seriesRomaji)}`,
      badge: s.isCanon ? 'Canon 💍' : 'Ship ✨',
      avatar: s.avatars[0],
      aliases: [
        s.characters[0],
        s.characters[1],
        s.seriesTitle,
        seriesRomaji || '',
        s.japaneseName || '',
        ...s.characters[0].split(' '),
        ...s.characters[1].split(' ')
      ].filter(Boolean)
    };
  });

  const guessCount = guessedShips.length;
  const attemptsLeft = 6 - guessCount;

  // Clue reveal thresholds
  const showDynamics = true; // Always visible
  const showCanonStatus = guessCount >= 1 || gameOver;
  const showSeriesHint = guessCount >= 2 || gameOver;
  const showInitials = guessCount >= 3 || gameOver;
  const showFullSeries = guessCount >= 4 || gameOver;
  const showPartnerA = guessCount >= 5 || gameOver;
  const showPartnerB = gameOver;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto animate-fade-in">
      {/* Title & Badge */}
      <div className="text-center space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-extrabold text-xs border border-pink-200 shadow-sm">
          <Heart size={14} className="fill-pink-500 text-pink-500 animate-pulse" />
          <span>Ship Mode • カップリング当て</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Guess the Iconic Yuri Couple
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          Identify the mystery pair in <strong>6 attempts</strong> using dynamics, relationship hints, and avatar reveals
        </p>
      </div>

      {/* DUAL INTERLOCKING PORTRAIT ARENA */}
      <div className="relative w-full max-w-md p-6 bg-gradient-to-b from-white to-pink-50/50 rounded-3xl border border-pink-200 shadow-lg flex flex-col items-center justify-center gap-4">
        {/* Avatars Container */}
        <div className="relative flex items-center justify-center -space-x-8 py-2">
          {/* Partner A */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-pink-100 ring-4 ring-pink-200 flex items-center justify-center transition-all duration-500">
            {showPartnerA ? (
              <img
                src={targetShip.avatars[0]}
                alt="Partner A"
                onError={handleAvatarError}
                className="w-full h-full object-cover object-top animate-fade-in"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 flex flex-col items-center justify-center text-pink-600 font-black text-2xl select-none">
                <Heart size={32} className="opacity-30 mb-1" />
                <span>?</span>
              </div>
            )}
          </div>

          {/* Glowing Center Heart Badge */}
          <div className="relative z-10 p-2.5 rounded-full bg-white shadow-xl border-2 border-pink-300 flex items-center justify-center text-pink-500 animate-pulse">
            <Heart size={22} className="fill-pink-500" />
          </div>

          {/* Partner B */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-pink-100 ring-4 ring-pink-200 flex items-center justify-center transition-all duration-500">
            {showPartnerB ? (
              <img
                src={targetShip.avatars[1]}
                alt="Partner B"
                onError={handleAvatarError}
                className="w-full h-full object-cover object-top animate-fade-in"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 flex flex-col items-center justify-center text-pink-600 font-black text-2xl select-none">
                <Heart size={32} className="opacity-30 mb-1" />
                <span>?</span>
              </div>
            )}
          </div>
        </div>

        {/* Revealed Name on Game Over */}
        {gameOver && (
          <div className="text-center animate-fade-in space-y-0.5">
            <div className="text-xl font-black text-slate-900 flex items-center justify-center gap-2">
              <span>{targetShip.shipName}</span>
              {targetShip.japaneseName && (
                <span className="text-xs text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full font-bold">
                  {targetShip.japaneseName}
                </span>
              )}
            </div>
            <div className="text-xs text-slate-600 font-bold">
              {targetShip.characters[0]} × {targetShip.characters[1]}
            </div>
            <div className="text-[11px] text-pink-700 font-semibold">
              {getSeriesWithRomaji(targetShip.seriesTitle, getSeriesRomaji(targetShip.seriesId || targetShip.seriesTitle))}
            </div>
          </div>
        )}

        {/* PROGRESSIVE CLUES DECK */}
        <div className="w-full space-y-2 pt-2 border-t border-pink-100">
          {/* Clue 0: Dynamics Tags (Always) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mr-1">Dynamics:</span>
            {targetShip.dynamics.map(d => (
              <span
                key={d}
                className="text-xs px-2.5 py-0.5 rounded-xl bg-pink-100/90 text-pink-800 font-bold border border-pink-200 shadow-sm"
              >
                #{d}
              </span>
            ))}
          </div>

          {/* Clue 1: Canon Relationship Status (Unlocked at 1 guess) */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100 text-xs">
            <span className="text-slate-400 font-semibold">Canon Status:</span>
            {showCanonStatus ? (
              <span className={`font-bold ${targetShip.isCanon ? 'text-rose-600' : 'text-pink-600'}`}>
                {targetShip.isCanon ? '💍 Confirmed Canon Relationship' : '✨ Iconic Fan-Favorite Bond'}
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 1 guess</span>
            )}
          </div>

          {/* Clue 2: Series Hint (Unlocked at 2 guesses) */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100 text-xs">
            <span className="text-slate-400 font-semibold">Series Initial:</span>
            {showSeriesHint ? (
              <span className="font-bold text-slate-700">
                Starts with &quot;{targetShip.seriesTitle.charAt(0)}...&quot;
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 2 guesses</span>
            )}
          </div>

          {/* Clue 3: Partners Initials (Unlocked at 3 guesses) */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100 text-xs">
            <span className="text-slate-400 font-semibold">Couple Initials:</span>
            {showInitials ? (
              <span className="font-bold text-slate-800">
                {targetShip.characters[0].charAt(0)}... × {targetShip.characters[1].charAt(0)}...
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 3 guesses</span>
            )}
          </div>

          {/* Clue 4: Full Series (Unlocked at 4 guesses) */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100 text-xs">
            <span className="text-slate-400 font-semibold">Origin Series:</span>
            {showFullSeries ? (
              <span className="font-bold text-pink-700 truncate max-w-[240px]">
                {getSeriesWithRomaji(targetShip.seriesTitle, getSeriesRomaji(targetShip.seriesId || targetShip.seriesTitle))}
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 4 guesses</span>
            )}
          </div>

          {/* Clue 5: Partner A Avatar (Unlocked at 5 guesses) */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100 text-xs">
            <span className="text-slate-400 font-semibold">Heroine A Reveal:</span>
            {showPartnerA ? (
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <Check size={13} /> {targetShip.characters[0]} Unveiled!
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 5 guesses</span>
            )}
          </div>
        </div>
      </div>

      {/* SEARCH BAR (Active while game not over) */}
      {!gameOver && (
        <div className="w-full max-w-md flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-1">
            <span>Attempts Remaining: <strong>{attemptsLeft} / 6</strong></span>
            {!showSurrenderConfirm ? (
              <button
                type="button"
                onClick={() => setShowSurrenderConfirm(true)}
                className="text-slate-400 hover:text-rose-500 transition-colors flex items-center gap-1"
              >
                <Flag size={12} /> Give up?
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-rose-500 text-[11px] font-bold">Surrender?</span>
                <button
                  type="button"
                  onClick={handleSurrender}
                  className="px-2 py-0.5 rounded bg-rose-500 text-white text-[10px] font-bold hover:bg-rose-600"
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setShowSurrenderConfirm(false)}
                  className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-bold hover:bg-slate-300"
                >
                  No
                </button>
              </div>
            )}
          </div>

          <SearchBar
            options={searchOptions}
            onSelect={handleGuess}
            placeholder="Search ship name, character, or series..."
            alreadyGuessedIds={guessedShips.map(s => s.id)}
            disabled={gameOver}
          />
        </div>
      )}

      {/* VICTORY OR DEFEAT CARD */}
      {gameOver && (
        <div className="w-full max-w-md p-5 sm:p-6 bg-white border border-pink-200 rounded-3xl shadow-xl space-y-4 animate-scale-up">
          <div className="text-center space-y-1">
            <div className={`inline-flex p-3 rounded-2xl ${won ? 'bg-pink-100 text-pink-600' : 'bg-slate-100 text-slate-500'}`}>
              <Award size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {won ? 'You Found the Couple! 🌸' : 'Better Luck Next Time! 💔'}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {won
                ? `Guessed in ${guessCount} ${guessCount === 1 ? 'try' : 'tries'}!`
                : 'The secret couple was:'}
            </p>
          </div>

          {/* Relationship lore & moments */}
          <div className="p-4 rounded-2xl bg-pink-50/70 border border-pink-100 text-xs text-slate-700 space-y-2 leading-relaxed font-normal">
            <div className="font-extrabold text-pink-800 flex items-center gap-1.5">
              <Heart size={14} className="fill-pink-500 text-pink-500" />
              <span>{targetShip.shipName} ({targetShip.characters[0]} × {targetShip.characters[1]})</span>
            </div>
            <p>{targetShip.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            {playType === 'unlimited' ? (
              <button
                type="button"
                onClick={startNewUnlimitedRound}
                className="flex-1 py-3 px-4 rounded-2xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm shadow-md shadow-pink-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95"
              >
                <RefreshCw size={16} />
                <span>Next Couple 🌸</span>
              </button>
            ) : (
              <DailyResetTimer variant="card" currentMode="ship" className="mx-auto" />
            )}
          </div>
        </div>
      )}

      {/* GUESS FEEDBACK HISTORY */}
      {feedbacks.length > 0 && (
        <div className="w-full max-w-md space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
            Guess History ({feedbacks.length}/6)
          </div>

          <div className="space-y-2">
            {feedbacks.map((f, idx) => (
              <div
                key={f.guessedShip.id}
                className="p-3 bg-white border border-pink-100 rounded-2xl shadow-sm flex items-center justify-between gap-3 animate-slide-down"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Dual Mini Avatars */}
                  <div className="flex items-center -space-x-2 shrink-0">
                    <img
                      src={f.guessedShip.avatars[0]}
                      alt={f.guessedShip.characters[0]}
                      onError={handleAvatarError}
                      className="w-8 h-8 rounded-full object-cover object-top border border-white shadow-sm ring-1 ring-pink-200"
                    />
                    <img
                      src={f.guessedShip.avatars[1]}
                      alt={f.guessedShip.characters[1]}
                      onError={handleAvatarError}
                      className="w-8 h-8 rounded-full object-cover object-top border border-white shadow-sm ring-1 ring-pink-200"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-slate-800 truncate">
                      {f.guessedShip.shipName}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium truncate">
                      {getSeriesWithRomaji(f.guessedShip.seriesTitle, getSeriesRomaji(f.guessedShip.seriesId || f.guessedShip.seriesTitle))}
                    </div>
                  </div>
                </div>

                {/* Match Badges */}
                <div className="flex items-center gap-1 shrink-0 text-[10px] font-bold">
                  {/* Series Match */}
                  <span
                    className={`px-2 py-0.5 rounded-lg ${
                      f.seriesMatch === 'correct'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                    title="Series Match"
                  >
                    Series
                  </span>

                  {/* Canon Match */}
                  <span
                    className={`px-2 py-0.5 rounded-lg ${
                      f.canonMatch === 'correct'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                    title="Canon Status Match"
                  >
                    Canon
                  </span>

                  {/* Dynamics Match */}
                  <span
                    className={`px-2 py-0.5 rounded-lg ${
                      f.dynamicsMatch === 'correct'
                        ? 'bg-emerald-500 text-white'
                        : f.dynamicsMatch === 'partial'
                        ? 'bg-amber-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                    title="Dynamics Match"
                  >
                    Dynamics
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
