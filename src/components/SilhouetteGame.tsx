import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, RefreshCw, Flag, Award, ScanFace, Heart, BookOpen, Lightbulb } from 'lucide-react';
import { YuriCharacter, CharacterGuessFeedback, PlayType } from '../types/yuri';
import { YURI_CHARACTERS } from '../data/yuriCharacters';
import { evaluateCharacterGuess, generateSilhouetteShareText } from '../utils/gameLogic';
import { getDailySilhouetteCharacter, getRandomSilhouetteCharacter } from '../utils/dailySeed';
import { getDailyState, saveDailyState, recordGameResult } from '../utils/storage';
import { sound } from '../utils/sound';
import { handleAvatarError } from '../utils/imageFallbacks';
import { SearchBar, SearchOption } from './SearchBar';
import { GuessRow } from './GuessRow';
import { getSeriesWithRomaji, getSeriesRomaji } from '../utils/seriesFormat';

interface SilhouetteGameProps {
  playType: PlayType;
  dateString: string;
  dailyNumber: number;
  onGameEnd: (shareText: string) => void;
}

export const SilhouetteGame: React.FC<SilhouetteGameProps> = ({
  playType,
  dateString,
  dailyNumber,
  onGameEnd
}) => {
  const [targetChar, setTargetChar] = useState<YuriCharacter>(() => {
    return playType === 'daily' ? getDailySilhouetteCharacter() : getRandomSilhouetteCharacter();
  });

  const [guesses, setGuesses] = useState<CharacterGuessFeedback[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showSurrenderConfirm, setShowSurrenderConfirm] = useState(false);

  useEffect(() => {
    if (playType === 'daily') {
      const daily = getDailySilhouetteCharacter();
      setTargetChar(daily);
      const saved = getDailyState('silhouette', dateString);
      if (saved) {
        const reconstructed: CharacterGuessFeedback[] = [];
        saved.guesses.forEach(id => {
          const guessed = YURI_CHARACTERS.find(c => c.id === id);
          if (guessed) {
            reconstructed.push(evaluateCharacterGuess(guessed, daily));
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
    const newTarget = getRandomSilhouetteCharacter(targetChar?.id);
    setTargetChar(newTarget);
    setGuesses([]);
    setGameOver(false);
    setWon(false);
    setShowSurrenderConfirm(false);
  };

  const handleGuess = (option: SearchOption) => {
    if (gameOver) return;
    const guessedChar = YURI_CHARACTERS.find(c => c.id === option.id);
    if (!guessedChar) return;

    const feedback = evaluateCharacterGuess(guessedChar, targetChar);
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

      recordGameResult('silhouette', true, newGuesses.length, playType === 'daily' ? dateString : undefined, targetChar?.name, playType);

      if (playType === 'daily') {
        saveDailyState('silhouette', {
          date: dateString,
          completed: true,
          won: true,
          guesses: newGuesses.map(g => g.guessedCharacter.id)
        });
      }

      const shareText = generateSilhouetteShareText(
        newGuesses.slice().reverse(),
        playType === 'daily' ? dailyNumber : 'Unlimited',
        true
      );
      onGameEnd(shareText);
    } else if (isLoss) {
      setGameOver(true);
      setWon(false);
      sound.playWrongSound();

      recordGameResult('silhouette', false, newGuesses.length, playType === 'daily' ? dateString : undefined, targetChar?.name, playType);

      if (playType === 'daily') {
        saveDailyState('silhouette', {
          date: dateString,
          completed: true,
          won: false,
          guesses: newGuesses.map(g => g.guessedCharacter.id)
        });
      }

      const shareText = generateSilhouetteShareText(
        newGuesses.slice().reverse(),
        playType === 'daily' ? dailyNumber : 'Unlimited',
        false
      );
      onGameEnd(shareText);
    } else {
      sound.playTileFlip();
    }
  };

  const handleSurrender = () => {
    if (gameOver) return;
    setGameOver(true);
    setWon(false);
    setShowSurrenderConfirm(false);
    sound.playWrongSound();

    recordGameResult('silhouette', false, guesses.length + 1, playType === 'daily' ? dateString : undefined, targetChar?.name, playType);

    if (playType === 'daily') {
      saveDailyState('silhouette', {
        date: dateString,
        completed: true,
        won: false,
        guesses: guesses.map(g => g.guessedCharacter.id)
      });
    }

    const shareText = generateSilhouetteShareText(
      guesses.slice().reverse(),
      playType === 'daily' ? dailyNumber : 'Unlimited',
      false
    );
    onGameEnd(shareText);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#fda4af', '#f43f5e']
    });
  };

  const searchOptions: SearchOption[] = YURI_CHARACTERS.map(c => ({
    id: c.id,
    title: c.name,
    subtitle: `${getSeriesWithRomaji(c.seriesTitle, getSeriesRomaji(c.seriesId || c.seriesTitle))} (${c.nativeName})`,
    badge: c.role,
    avatar: c.avatar
  }));

  const guessedIds = guesses.map(g => g.guessedCharacter.id);
  const remainingGuesses = 6 - guesses.length;

  // Compute mystery focus CSS filter dynamically (de-blurring & zoom out)
  const getSilhouetteStyle = () => {
    if (gameOver) {
      return {
        filter: 'blur(0px) brightness(1)',
        transform: 'scale(1)'
      };
    }
    const blurLevels = [22, 16, 11, 7, 3.5, 1.5];
    const scales = [1.35, 1.25, 1.18, 1.1, 1.05, 1.02];
    const blur = blurLevels[Math.min(guesses.length, 5)];
    const scale = scales[Math.min(guesses.length, 5)];

    return {
      filter: `blur(${blur}px) brightness(0.96)`,
      transform: `scale(${scale})`
    };
  };

  // Progressive clue unlocks
  const showSeries = gameOver || guesses.length >= 1;
  const showRoleArchetype = gameOver || guesses.length >= 2;
  const showPartner = gameOver || guesses.length >= 3;
  const showHairColor = gameOver || guesses.length >= 4;
  const showDebutYear = gameOver || guesses.length >= 5;

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl mx-auto">
      {/* Mode Header */}
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
          <span>Who&apos;s That Yuri Heroine?</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold border border-pink-200">
            {remainingGuesses} left
          </span>
        </h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          The mystery heroine portrait sharpens with every wrong attempt! 👤
        </p>
      </div>

      {/* Silhouette Spotlight Frame */}
      <div className="relative w-full max-w-sm p-6 bg-gradient-to-b from-white via-pink-50/40 to-white rounded-3xl border border-pink-200 shadow-xl flex flex-col items-center justify-center gap-4">
        {/* Glow Badge Header */}
        <div className="flex items-center gap-2 text-xs font-bold text-pink-600 bg-white/90 px-3 py-1 rounded-full border border-pink-200 shadow-xs">
          <ScanFace size={14} className="text-pink-500" />
          <span>
            {gameOver
              ? (won ? '🎉 Heroine Revealed!' : '🥀 Better Luck Next Time!')
              : `Mystery Focus Stage • Blur: ${[22, 16, 11, 7, 3.5, 1.5][Math.min(guesses.length, 5)]}px`}
          </span>
        </div>

        {/* Circular Avatar Spotlight */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-b from-pink-100 to-rose-100 ring-4 ring-pink-300/50 flex items-center justify-center transition-all duration-700">
          <img
            src={targetChar.avatar}
            alt="Mystery Yuri Heroine"
            loading="eager"
            className="w-full h-full object-cover object-top transition-all duration-700 ease-out select-none"
            style={getSilhouetteStyle()}
            onError={handleAvatarError}
          />
        </div>

        {/* Revealed Name on Game Over */}
        {gameOver && (
          <div className="text-center animate-fade-in space-y-0.5">
            <h3 className="text-xl font-black text-slate-900">{targetChar.name}</h3>
            <p className="text-xs text-slate-500 font-semibold">
              {targetChar.nativeName} • {getSeriesWithRomaji(targetChar.seriesTitle, getSeriesRomaji(targetChar.seriesId || targetChar.seriesTitle))}
            </p>
          </div>
        )}

        {/* Progressive Clues Accordion */}
        <div className="w-full space-y-2 pt-2 border-t border-pink-100 text-xs">
          {/* Clue 1: Origin Series */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <BookOpen size={12} className="text-pink-400" /> Origin Series:
            </span>
            {showSeries ? (
              <span className="font-bold text-slate-800 truncate max-w-[200px]">
                {getSeriesWithRomaji(targetChar.seriesTitle, getSeriesRomaji(targetChar.seriesId || targetChar.seriesTitle))}
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 1 guess</span>
            )}
          </div>

          {/* Clue 2: Role & Archetype */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Sparkles size={12} className="text-pink-400" /> Role & Archetype:
            </span>
            {showRoleArchetype ? (
              <span className="font-bold text-pink-700">
                {targetChar.role} • {targetChar.archetype}
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 2 guesses</span>
            )}
          </div>

          {/* Clue 3: Paired Partner */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Heart size={12} className="text-pink-400" /> Pairing Partner:
            </span>
            {showPartner ? (
              <span className="font-bold text-rose-600 truncate max-w-[200px]">
                {targetChar.pairingWith}
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 3 guesses</span>
            )}
          </div>

          {/* Clue 4: Hair Color & Faint Color */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Lightbulb size={12} className="text-pink-400" /> Hair Color:
            </span>
            {showHairColor ? (
              <span className="font-bold text-slate-800">
                {targetChar.hairColor} Hair
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 4 guesses</span>
            )}
          </div>

          {/* Clue 5: Debut Year */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-white/80 border border-pink-100">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Award size={12} className="text-pink-400" /> Debut Year:
            </span>
            {showDebutYear ? (
              <span className="font-bold text-slate-800">
                Premiered in {targetChar.debutYear}
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 5 guesses</span>
            )}
          </div>
        </div>
      </div>

      {/* Search Input Bar */}
      {!gameOver && (
        <div className="w-full">
          <SearchBar
            options={searchOptions}
            alreadyGuessedIds={guessedIds}
            onSelect={handleGuess}
            placeholder="Type any Yuri heroine name (e.g. Suletta, Touko, Chisato)..."
            disabled={gameOver}
          />
        </div>
      )}

      {/* Game Over Banner */}
      {gameOver && (
        <div className={`w-full max-w-sm p-4 rounded-2xl text-center space-y-2 shadow-md animate-fade-in ${
          won ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'
        }`}>
          <div className="text-lg font-black text-slate-900">
            {won ? '🎉 Perfect Match! Brilliant Recognition!' : 'Round Finished!'}
          </div>
          <p className="text-xs text-slate-600">
            The secret heroine was: <strong className="text-pink-600">{targetChar.name}</strong> from <em>{getSeriesWithRomaji(targetChar.seriesTitle, getSeriesRomaji(targetChar.seriesId || targetChar.seriesTitle))}</em>
          </p>
          {targetChar.quote && (
            <p className="text-[11px] italic text-pink-700 bg-white/60 p-2 rounded-xl border border-pink-100">
              &quot;{targetChar.quote}&quot;
            </p>
          )}

          {playType === 'unlimited' && (
            <button
              type="button"
              onClick={startNewUnlimitedRound}
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl text-xs shadow-md shadow-pink-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <RefreshCw size={14} />
              <span>Next Silhouette 🌸</span>
            </button>
          )}
        </div>
      )}

      {/* Surrender Button */}
      {!gameOver && guesses.length >= 2 && (
        <div className="text-center">
          {!showSurrenderConfirm ? (
            <button
              type="button"
              onClick={() => setShowSurrenderConfirm(true)}
              className="text-xs text-slate-400 hover:text-pink-600 transition-colors font-medium underline"
            >
              Give up and reveal heroine?
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 p-2 bg-rose-50 rounded-xl border border-rose-200 text-xs">
              <span className="text-rose-700 font-medium">Reveal heroine now?</span>
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

      {/* Guesses History Rows */}
      <div className="w-full mt-2">
        {guesses.map((feedback, idx) => (
          <GuessRow
            key={feedback.guessedCharacter.id}
            type="character"
            feedback={feedback}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};
