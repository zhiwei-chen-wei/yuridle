import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Disc, Music, RefreshCw, Volume, Volume1, Volume2, VolumeX, Minus, Plus, Heart, Calendar, Mic2, 
  FileText, Play, Pause, RotateCcw, Headphones, Eye
} from 'lucide-react';
import { YuriSong, YuriSeries, SongGuessFeedback, PlayType } from '../types/yuri';
import { YURI_SERIES } from '../data/yuriSeries';
import { evaluateSongGuess, generateSongShareText } from '../utils/gameLogic';
import { getDailySong, getRandomSong } from '../utils/dailySeed';
import { getDailyState, saveDailyState, recordGameResult } from '../utils/storage';
import { getCookie, setCookie } from '../utils/cookie';
import { sound } from '../utils/sound';
import { handleCoverError } from '../utils/imageFallbacks';
import { SearchBar, SearchOption } from './SearchBar';
import { DailyResetTimer } from './DailyResetTimer';

interface SongGameProps {
  playType: PlayType;
  dateString: string;
  dailyNumber: number;
  onGameEnd: (shareText: string) => void;
}

// Progressive snippet durations in seconds (Heardle-style)
const SNIPPET_TIERS = [2.5, 5.0, 8.0, 12.0, 17.0, 23.0, 30.0];
const MAX_PREVIEW_TIME = 30.0;

export const SongGame: React.FC<SongGameProps> = ({
  playType,
  dateString,
  dailyNumber,
  onGameEnd
}) => {
  const [targetSong, setTargetSong] = useState<YuriSong>(() => {
    return playType === 'daily' ? getDailySong() : getRandomSong();
  });

  const [guesses, setGuesses] = useState<SongGuessFeedback[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showSurrenderConfirm, setShowSurrenderConfirm] = useState(false);
  const [revealedTitle, setRevealedTitle] = useState(false);
  const [isFullTrackMode, setIsFullTrackMode] = useState(false);

  // Audio player states
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(MAX_PREVIEW_TIME);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [volume, setVolume] = useState<number>(() => {
    const cookieSaved = getCookie('yuridle_song_volume');
    if (cookieSaved !== null) return parseFloat(cookieSaved);
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('yuridle_song_volume') : null;
    return saved !== null ? parseFloat(saved) : 0.5;
  });
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayingSynth, setIsPlayingSynth] = useState(false);

  // Retrieve origin series object for rich displays
  const targetSeries = YURI_SERIES.find(s => s.id === targetSong.seriesId);

  // Calculate maximum allowed snippet length for the current guess attempt
  const currentSnippetLimit = (gameOver || won)
    ? (isFullTrackMode ? totalDuration : MAX_PREVIEW_TIME)
    : SNIPPET_TIERS[Math.min(guesses.length, SNIPPET_TIERS.length - 1)];

  // Initialize or reload song
  useEffect(() => {
    if (playType === 'daily') {
      const daily = getDailySong();
      setTargetSong(daily);
      const saved = getDailyState('song', dateString);
      if (saved) {
        const reconstructed: SongGuessFeedback[] = [];
        const seriesObj = YURI_SERIES.find(s => s.id === daily.seriesId);
        saved.guesses.forEach(id => {
          const guessed = YURI_SERIES.find(s => s.id === id);
          if (guessed) {
            reconstructed.push(evaluateSongGuess(guessed, daily, seriesObj));
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

  // Reset audio playback when target song or round changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setAudioError(false);
    setRevealedTitle(false);
    setIsFullTrackMode(false);
  }, [targetSong.id]);

  // Sync volume to audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const startNewUnlimitedRound = () => {
    sound.playClick();
    const newTarget = getRandomSong(targetSong?.id);
    setTargetSong(newTarget);
    setGuesses([]);
    setGameOver(false);
    setWon(false);
    setShowSurrenderConfirm(false);
    setRevealedTitle(false);
    setIsFullTrackMode(false);
  };

  // Audio Event Handlers
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    setCurrentTime(cur);

    // Stop playback if current snippet threshold is exceeded
    if (cur >= currentSnippetLimit) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      setTotalDuration(audioRef.current.duration);
    }
    setIsAudioLoading(false);
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If currentTime is at or near the boundary, rewind to start
      if (audioRef.current.currentTime >= currentSnippetLimit - 0.2) {
        audioRef.current.currentTime = 0;
      }
      setIsAudioLoading(true);
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsAudioLoading(false);
        })
        .catch(err => {
          console.warn('Audio playback error:', err);
          setIsPlaying(false);
          setIsAudioLoading(false);
          setAudioError(true);
        });
    }
  };

  const handleReplayFromStart = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const baseDuration = isFullTrackMode ? totalDuration : MAX_PREVIEW_TIME;
    const targetSeek = clickRatio * baseDuration;

    // Only allow seeking within the unlocked snippet window
    if (targetSeek <= currentSnippetLimit) {
      audioRef.current.currentTime = targetSeek;
      setCurrentTime(targetSeek);
      if (!isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    setCookie('yuridle_song_volume', String(newVol), 365);
    try {
      localStorage.setItem('yuridle_song_volume', String(newVol));
    } catch {
      // Ignore
    }
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const handleDecreaseVolume = () => {
    const newVol = Math.max(0, Math.round((volume - 0.1) * 100) / 100);
    setVolume(newVol);
    setCookie('yuridle_song_volume', String(newVol), 365);
    try {
      localStorage.setItem('yuridle_song_volume', String(newVol));
    } catch {
      // Ignore
    }
    if (newVol === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleIncreaseVolume = () => {
    const newVol = Math.min(1, Math.round((volume + 0.1) * 100) / 100);
    setVolume(newVol);
    setCookie('yuridle_song_volume', String(newVol), 365);
    try {
      localStorage.setItem('yuridle_song_volume', String(newVol));
    } catch {
      // Ignore
    }
    if (isMuted) {
      setIsMuted(false);
    }
  };

  const handleToggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (volume === 0) {
        setVolume(0.5);
        setCookie('yuridle_song_volume', '0.5', 365);
        try {
          localStorage.setItem('yuridle_song_volume', '0.5');
        } catch {
          // Ignore
        }
      }
    } else {
      setIsMuted(true);
    }
  };

  const renderVolumeIcon = (size = 18) => {
    if (isMuted || volume === 0) {
      return <VolumeX size={size} className="text-rose-500" />;
    }
    if (volume < 0.3) {
      return <Volume size={size} className="text-pink-600" />;
    }
    if (volume < 0.7) {
      return <Volume1 size={size} className="text-pink-600" />;
    }
    return <Volume2 size={size} className="text-pink-600" />;
  };

  const handlePlaySynthMelody = () => {
    if (sound.isMuted()) {
      sound.toggleMute();
    }
    sound.playMelody(targetSong.melodyNotes, true);
    setIsPlayingSynth(true);
    const durationMs = (targetSong.melodyNotes?.length || 8) * 240 + 400;
    setTimeout(() => setIsPlayingSynth(false), durationMs);
  };

  const handleGuess = (option: SearchOption) => {
    if (gameOver) return;
    const guessedSeries = YURI_SERIES.find(s => s.id === option.id);
    if (!guessedSeries) return;

    const feedback = evaluateSongGuess(guessedSeries, targetSong, targetSeries);
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

      recordGameResult('song', true, newGuesses.length, playType === 'daily' ? dateString : undefined, targetSong.songTitle, playType);

      if (playType === 'daily') {
        saveDailyState('song', {
          date: dateString,
          completed: true,
          won: true,
          guesses: newGuesses.map(g => g.guessedSeries.id)
        });
      }

      const shareText = generateSongShareText(
        newGuesses.slice().reverse(),
        playType === 'daily' ? dailyNumber : 'Unlimited',
        true,
        targetSong.songTitle
      );
      onGameEnd(shareText);
    } else if (isLoss) {
      setGameOver(true);
      setWon(false);
      sound.playWrongSound();

      recordGameResult('song', false, newGuesses.length, playType === 'daily' ? dateString : undefined, targetSong.songTitle, playType);

      if (playType === 'daily') {
        saveDailyState('song', {
          date: dateString,
          completed: true,
          won: false,
          guesses: newGuesses.map(g => g.guessedSeries.id)
        });
      }

      const shareText = generateSongShareText(
        newGuesses.slice().reverse(),
        playType === 'daily' ? dailyNumber : 'Unlimited',
        false,
        targetSong.songTitle
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

    recordGameResult('song', false, guesses.length + 1, playType === 'daily' ? dateString : undefined, targetSong.songTitle, playType);

    if (playType === 'daily') {
      saveDailyState('song', {
        date: dateString,
        completed: true,
        won: false,
        guesses: guesses.map(g => g.guessedSeries.id)
      });
    }

    const shareText = generateSongShareText(
      guesses.slice().reverse(),
      playType === 'daily' ? dailyNumber : 'Unlimited',
      false,
      targetSong.songTitle
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

  const guessedIds = guesses.map(g => g.guessedSeries.id);
  const remainingGuesses = 6 - guesses.length;

  // Progressive clues
  const isTitleVisible = gameOver || won || revealedTitle || guesses.length >= 2;
  const showSeasonYear = gameOver || guesses.length >= 1;
  const showArtist = gameOver || guesses.length >= 2;
  const showLyrics = gameOver || guesses.length >= 3;
  const showSeriesHint = gameOver || guesses.length >= 4;

  const formatSeconds = (sec: number) => {
    const s = Math.floor(sec);
    const ms = Math.floor((sec % 1) * 10);
    return `${s}.${ms}s`;
  };

  const getTileClasses = (state: string) => {
    switch (state) {
      case 'correct':
        return 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
      case 'partial':
        return 'bg-amber-400 text-slate-900 border-amber-500 shadow-sm';
      default:
        return 'bg-slate-200 text-slate-700 border-slate-300';
    }
  };

  // Calculate percentage widths for Heardle timeline
  const baseScaleDuration = isFullTrackMode ? totalDuration : MAX_PREVIEW_TIME;
  const unlockedPercent = Math.min(100, (currentSnippetLimit / baseScaleDuration) * 100);
  const progressPercent = Math.min(100, (currentTime / baseScaleDuration) * 100);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl mx-auto">
      {/* Hidden Native Audio Element with Referrer-free Streaming */}
      {targetSong.audioUrl && (
        <audio
          ref={audioRef}
          src={targetSong.audioUrl}
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onError={() => setAudioError(true)}
        />
      )}

      {/* Mode Header */}
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
          <span>Real Theme Song Quiz</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold border border-pink-200">
            {remainingGuesses} {remainingGuesses === 1 ? 'try' : 'tries'} left
          </span>
        </h2>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          Listen to the official theme song! Every guess unlocks more of the track 🎧
        </p>
      </div>

      {/* Retro Vinyl Record Player Card */}
      <div className="relative w-full max-w-md p-6 bg-gradient-to-b from-white to-pink-50/50 rounded-3xl border border-pink-200 shadow-xl flex flex-col items-center justify-center gap-4">
        {/* Type Badge & Audio Status */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-200 flex items-center gap-1.5 shadow-xs">
            <Music size={13} className="text-pink-500" />
            {targetSong.type === 'OP' ? 'Opening Theme (OP)' : targetSong.type === 'ED' ? 'Ending Theme (ED)' : 'Iconic Insert Song'}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Official Audio
          </span>
        </div>

        {/* Vinyl Disc Centerpiece with Spinning Animation */}
        <div className="relative flex items-center justify-center py-2">
          <div className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-slate-900 border-4 border-white shadow-2xl ring-4 ring-pink-200/80 flex items-center justify-center transition-all ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}>
            {/* Vinyl Grooves effect */}
            <div className="absolute inset-2 rounded-full border border-slate-700/60 pointer-events-none" />
            <div className="absolute inset-5 rounded-full border border-slate-800/80 pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-slate-700/60 pointer-events-none" />
            <div className="absolute inset-12 rounded-full border border-slate-800/80 pointer-events-none" />

            {/* Center Label */}
            <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 border-2 border-white shadow-md flex flex-col items-center justify-center text-white select-none">
              <Disc size={26} className={isPlaying ? 'animate-pulse' : ''} />
              <span className="text-[9px] font-black tracking-widest uppercase mt-0.5">YURI SOUND</span>
            </div>
          </div>

          {/* Equalizer Wave Bars Overlay */}
          {isPlaying && (
            <div className="absolute bottom-2 flex items-center gap-1 bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full text-pink-400 shadow-md">
              <span className="w-1 h-3 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1 h-5 bg-rose-400 rounded-full animate-bounce [animation-delay:-0.1s]" />
              <span className="w-1 h-2 bg-pink-300 rounded-full animate-bounce [animation-delay:-0.4s]" />
              <span className="w-1 h-6 bg-pink-500 rounded-full animate-bounce [animation-delay:-0.2s]" />
              <span className="w-1 h-4 bg-rose-300 rounded-full animate-bounce [animation-delay:-0.5s]" />
              <span className="w-1 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.2s]" />
            </div>
          )}
        </div>

        {/* Mystery Title or Revealed Title */}
        <div className="text-center space-y-1 w-full px-2">
          {isTitleVisible ? (
            <div className="animate-fade-in space-y-0.5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                &quot;{targetSong.songTitle}&quot;
              </h3>
              {targetSong.japaneseTitle && (
                <div className="text-xs font-bold text-pink-600">
                  {targetSong.japaneseTitle}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-black text-slate-800 flex items-center justify-center gap-2">
                <span>🎵 Mystery Anime Theme Song</span>
              </h3>
              <button
                type="button"
                onClick={() => setRevealedTitle(true)}
                className="inline-flex items-center gap-1 text-[11px] text-pink-600 hover:text-pink-700 font-bold hover:underline transition-colors"
              >
                <Eye size={12} />
                <span>Peek Song Title (Hint)</span>
              </button>
            </div>
          )}
        </div>

        {/* Real Audio Player Controls */}
        <div className="w-full bg-white/90 p-4 rounded-2xl border border-pink-100 shadow-xs space-y-3">
          {/* Timeline Bar (Heardle-Style with Ticks) */}
          <div className="space-y-1">
            <div className="flex justify-between text-[11px] font-bold text-slate-500 px-0.5">
              <span className="text-pink-600 font-extrabold">{formatSeconds(currentTime)}</span>
              <span>
                Unlocked: <strong className="text-slate-800">{formatSeconds(currentSnippetLimit)}</strong>
                {!isFullTrackMode && <span className="text-slate-400 font-normal"> / {MAX_PREVIEW_TIME}s</span>}
              </span>
            </div>

            {/* Clickable Progress Scrub Track */}
            <div
              onClick={handleProgressBarClick}
              className="relative w-full h-3.5 bg-slate-100 rounded-full overflow-hidden cursor-pointer border border-slate-200"
              title="Click to seek within unlocked segment"
            >
              {/* Unlocked Window */}
              <div
                className="absolute top-0 bottom-0 left-0 bg-pink-100 border-r-2 border-pink-400 transition-all duration-300"
                style={{ width: `${unlockedPercent}%` }}
              />

              {/* Live Playback Fill */}
              <div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />

              {/* Tick Markers for Each Guess Tier */}
              {!isFullTrackMode && SNIPPET_TIERS.slice(0, -1).map((sec, i) => {
                const tickPct = (sec / MAX_PREVIEW_TIME) * 100;
                return (
                  <div
                    key={sec}
                    className="absolute top-0 bottom-0 w-0.5 bg-white/70 pointer-events-none"
                    style={{ left: `${tickPct}%` }}
                    title={`Unlock ${i + 1}: ${sec}s`}
                  />
                );
              })}
            </div>
          </div>

          {/* Primary Audio Controls */}
          <div className="flex items-center justify-between pt-1">
            {/* Replay from Start Button */}
            <button
              type="button"
              onClick={handleReplayFromStart}
              title="Replay from beginning"
              className="p-2 rounded-xl text-slate-600 hover:text-pink-600 hover:bg-pink-50 active:scale-95 transition-all"
            >
              <RotateCcw size={18} />
            </button>

            {/* Big Play / Pause Button */}
            <button
              type="button"
              onClick={handleTogglePlay}
              disabled={isAudioLoading}
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 active:scale-95 text-white font-extrabold text-sm shadow-md shadow-pink-500/25 transition-all"
            >
              {isAudioLoading ? (
                <RefreshCw size={16} className="animate-spin" />
              ) : isPlaying ? (
                <>
                  <Pause size={16} className="fill-current" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play size={16} className="fill-current ml-0.5" />
                  <span>Play Song Snippet</span>
                </>
              )}
            </button>

            {/* Quick Mute Toggle */}
            <button
              type="button"
              onClick={handleToggleMute}
              title={isMuted ? 'Unmute' : 'Mute'}
              className="p-2 rounded-xl text-slate-600 hover:text-pink-600 hover:bg-pink-50 active:scale-95 transition-all"
            >
              {renderVolumeIcon(18)}
            </button>
          </div>

          {/* Dedicated Volume Adjustment Bar (Decrease / Slider / Increase) */}
          <div className="flex items-center justify-between gap-2 pt-2 px-1 border-t border-pink-100/70">
            <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 select-none">
              {renderVolumeIcon(13)}
              <span>Volume</span>
            </span>

            <div className="flex items-center gap-2">
              {/* Decrease Volume Button (-) */}
              <button
                type="button"
                onClick={handleDecreaseVolume}
                title="Decrease Volume (-10%)"
                className="w-7 h-7 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-pink-200/70 shadow-2xs cursor-pointer"
              >
                <Minus size={13} strokeWidth={2.5} />
              </button>

              {/* Volume Slider Track */}
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200/80">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 sm:w-32 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:accent-pink-600 transition-all"
                  aria-label="Volume Slider"
                />
                <span className="text-[11px] font-extrabold text-slate-700 w-8 text-right tabular-nums select-none">
                  {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
                </span>
              </div>

              {/* Increase Volume Button (+) */}
              <button
                type="button"
                onClick={handleIncreaseVolume}
                title="Increase Volume (+10%)"
                className="w-7 h-7 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-pink-200/70 shadow-2xs cursor-pointer"
              >
                <Plus size={13} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Audio Error Fallback */}
          {audioError && (
            <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] text-center font-medium">
              ⚠️ Audio stream encountered a network delay. Click Play again or enjoy the synth chime below!
            </div>
          )}

          {/* Full Song Unlocked Option on Round Finish */}
          {(gameOver || won) && (
            <div className="pt-2 border-t border-pink-100 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsFullTrackMode(!isFullTrackMode);
                  if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play().then(() => setIsPlaying(true));
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-800 text-xs font-bold transition-all shadow-xs"
              >
                <Headphones size={14} className="text-pink-600" />
                <span>{isFullTrackMode ? '✓ Full Track Mode Active' : 'Listen to Complete Theme Track 🎵'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Progressive Clues Section */}
        <div className="w-full space-y-2 pt-1 border-t border-pink-100 text-xs">
          {/* Clue 1: Release Season & Year */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-pink-100">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Calendar size={13} className="text-pink-400" /> Season & Year:
            </span>
            {showSeasonYear ? (
              <span className="font-bold text-slate-800">
                {targetSong.seasonYear} ({targetSong.releaseYear})
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 1 guess (+2.5s audio)</span>
            )}
          </div>

          {/* Clue 2: Artist / Performer */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-pink-100">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Mic2 size={13} className="text-pink-400" /> Performer:
            </span>
            {showArtist ? (
              <span className="font-bold text-pink-700">
                {targetSong.artist}
                {targetSong.japaneseArtist && ` (${targetSong.japaneseArtist})`}
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 2 guesses (+3.0s audio)</span>
            )}
          </div>

          {/* Clue 3: Romantic Lyric Snippet */}
          <div className="p-2.5 rounded-xl bg-white/80 border border-pink-100 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                <FileText size={13} className="text-pink-400" /> Romantic Lyric:
              </span>
              {!showLyrics && <span className="text-slate-300 italic">Unlocks at 3 guesses (+4.0s audio)</span>}
            </div>
            {showLyrics && (
              <div className="text-[11px] italic font-medium text-pink-900 bg-pink-50/70 p-2 rounded-lg border border-pink-100">
                &quot;{targetSong.lyricsSnippet}&quot;
              </div>
            )}
          </div>

          {/* Clue 4: Origin Initial & Pairing */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/80 border border-pink-100">
            <span className="text-slate-400 font-semibold flex items-center gap-1.5">
              <Heart size={13} className="text-pink-400" /> Series Hint:
            </span>
            {showSeriesHint ? (
              <span className="font-bold text-slate-800 truncate max-w-[220px]">
                Starts with &quot;{targetSong.seriesTitle.charAt(0)}...&quot; • {targetSeries?.pairing}
              </span>
            ) : (
              <span className="text-slate-300 italic">Unlocks at 4 guesses (+5.0s audio)</span>
            )}
          </div>
        </div>

        {/* Optional Retro Synth Chime Button */}
        {targetSong.melodyNotes && (
          <div className="w-full pt-1 flex justify-center">
            <button
              type="button"
              onClick={handlePlaySynthMelody}
              className="text-[10px] text-slate-400 hover:text-pink-600 font-semibold transition-colors flex items-center gap-1"
            >
              <span>{isPlayingSynth ? '♫ Playing 8-bit chime...' : '♪ Play Retro 8-bit Chime (Alternate)'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Search Input Bar */}
      {!gameOver && (
        <div className="w-full">
          <SearchBar
            options={searchOptions}
            alreadyGuessedIds={guessedIds}
            onSelect={handleGuess}
            placeholder="Guess the Yuri anime/series (e.g. Bloom Into You, Lycoris Recoil)..."
            disabled={gameOver}
          />
        </div>
      )}

      {/* Game Over Banner */}
      {gameOver && (
        <div className={`w-full max-w-md p-4 rounded-3xl text-center space-y-3 shadow-md animate-fade-in ${
          won ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'
        }`}>
          <div className="text-lg font-black text-slate-900">
            {won ? '🎉 Excellent! Solved the Theme Song!' : 'Round Finished!'}
          </div>

          {targetSeries && (
            <div className="p-3 bg-white rounded-2xl border border-pink-100 shadow-xs flex items-center gap-3 text-left">
              <img
                src={targetSeries.coverImage}
                alt={targetSeries.title}
                onError={handleCoverError}
                className="w-14 h-20 rounded-xl object-cover border border-pink-200 shrink-0 bg-white"
              />
              <div className="min-w-0">
                <div className="font-bold text-sm text-slate-900 truncate">
                  {targetSeries.title}
                  {targetSeries.romaji && targetSeries.romaji.toLowerCase() !== targetSeries.title.toLowerCase() && (
                    <span className="text-xs font-semibold text-pink-600 ml-1.5 font-normal">
                      ({targetSeries.romaji})
                    </span>
                  )}
                </div>
                <div className="text-xs text-pink-700 font-semibold">{targetSeries.pairing}</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                  &quot;{targetSong.songTitle}&quot; by {targetSong.artist}
                </div>
              </div>
            </div>
          )}

          {targetSong.trivia && (
            <p className="text-xs text-slate-600 bg-white/60 p-2.5 rounded-xl border border-pink-100">
              💡 {targetSong.trivia}
            </p>
          )}

          {playType === 'unlimited' ? (
            <button
              type="button"
              onClick={startNewUnlimitedRound}
              className="mt-1 inline-flex items-center gap-2 px-5 py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl text-xs shadow-md shadow-pink-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <RefreshCw size={14} />
              <span>Next Theme Song 🌸</span>
            </button>
          ) : (
            <DailyResetTimer variant="card" className="mt-2" />
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
              Give up and reveal anime title?
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 p-2 bg-rose-50 rounded-xl border border-rose-200 text-xs">
              <span className="text-rose-700 font-medium">Reveal title now?</span>
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
      <div className="w-full space-y-2.5 mt-2">
        {guesses.map((f, idx) => (
          <div
            key={`${f.guessedSeries.id}-${idx}`}
            className="p-3.5 bg-white rounded-2xl border border-pink-100 shadow-sm flex flex-col gap-2 animate-fade-in"
          >
            <div className="flex items-center justify-between pb-2 border-b border-pink-50">
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src={f.guessedSeries.coverImage}
                  alt={f.guessedSeries.title}
                  onError={handleCoverError}
                  className="w-9 h-12 rounded-lg object-cover border border-pink-100 shrink-0 bg-white"
                />
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {f.guessedSeries.title}
                    {f.guessedSeries.romaji && f.guessedSeries.romaji.toLowerCase() !== f.guessedSeries.title.toLowerCase() && (
                      <span className="text-[11px] font-semibold text-pink-600 ml-1.5 font-normal">
                        ({f.guessedSeries.romaji})
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {f.guessedSeries.pairing}
                  </div>
                </div>
              </div>
              <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                f.isMatch ? 'bg-emerald-100 text-emerald-800' : 'bg-pink-50 text-pink-700'
              }`}>
                {f.isMatch ? '✓ Solved' : `Attempt ${idx + 1}`}
              </span>
            </div>

            {/* Comparison Tiles Grid */}
            <div className="grid grid-cols-5 gap-1.5 text-center text-xs">
              <div className={`p-1.5 rounded-xl border flex flex-col items-center justify-center ${getTileClasses(f.medium)}`}>
                <span className="text-[9px] uppercase font-bold opacity-80">Medium</span>
                <span className="font-extrabold truncate w-full">{f.guessedSeries.medium}</span>
              </div>
              <div className={`p-1.5 rounded-xl border flex flex-col items-center justify-center ${getTileClasses(f.year)}`}>
                <span className="text-[9px] uppercase font-bold opacity-80">Year</span>
                <span className="font-extrabold flex items-center gap-0.5">
                  {f.guessedSeries.releaseYear}
                  {f.yearDirection === 'higher' && ' ⬆️'}
                  {f.yearDirection === 'lower' && ' ⬇️'}
                </span>
              </div>
              <div className={`p-1.5 rounded-xl border flex flex-col items-center justify-center ${getTileClasses(f.origin)}`}>
                <span className="text-[9px] uppercase font-bold opacity-80">Origin</span>
                <span className="font-extrabold truncate w-full">{f.guessedSeries.origin}</span>
              </div>
              <div className={`p-1.5 rounded-xl border flex flex-col items-center justify-center ${getTileClasses(f.setting)}`}>
                <span className="text-[9px] uppercase font-bold opacity-80">Setting</span>
                <span className="font-extrabold truncate w-full">{f.guessedSeries.setting}</span>
              </div>
              <div className={`p-1.5 rounded-xl border flex flex-col items-center justify-center ${getTileClasses(f.trope)}`}>
                <span className="text-[9px] uppercase font-bold opacity-80">Trope</span>
                <span className="font-extrabold truncate w-full">{f.guessedSeries.tropes[0] || 'Romance'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
