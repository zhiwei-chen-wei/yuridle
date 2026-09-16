import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CalendarCheck, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { getTimeUntilNextReset, getYesterdayInfo, getYesterdayTarget } from '../utils/dailySeed';
import { getDailyState } from '../utils/storage';
import { handleCoverError, handleAvatarError } from '../utils/imageFallbacks';
import { sound } from '../utils/sound';
import { PlayType, GameMode } from '../types/yuri';
import { YURI_SERIES } from '../data/yuriSeries';
import { YURI_CHARACTERS } from '../data/yuriCharacters';
import { YURI_SHIPS } from '../data/yuriShips';
import { YURI_SONGS } from '../data/yuriSongs';

interface DailyResetTimerProps {
  variant?: 'badge' | 'card' | 'inline';
  playType?: PlayType;
  className?: string;
  prefix?: string;
  currentMode?: GameMode;
  showYesterday?: boolean;
}

const MODE_LABELS: Record<GameMode, string> = {
  classic: 'Series',
  character: 'Character',
  cover: 'Cover',
  quote: 'Quote',
  emoji: 'Emoji Riddle',
  ship: 'Ship',
  silhouette: 'Silhouette',
  song: 'Theme Song'
};

const getGuessNames = (mode: GameMode, guessIds: string[]): string[] => {
  if (!guessIds || guessIds.length === 0) return [];
  return guessIds.map((id) => {
    if (mode === 'classic' || mode === 'cover' || mode === 'emoji') {
      const s = YURI_SERIES.find((item) => item.id === id);
      return s ? s.title : id;
    }
    if (mode === 'character' || mode === 'quote' || mode === 'silhouette') {
      const c = YURI_CHARACTERS.find((item) => item.id === id);
      return c ? c.name : id;
    }
    if (mode === 'ship') {
      const s = YURI_SHIPS.find((item) => item.id === id);
      return s ? s.shipName : id;
    }
    if (mode === 'song') {
      const so = YURI_SONGS.find((item) => item.id === id);
      return so ? so.songTitle : id;
    }
    return id;
  });
};

export const DailyResetTimer: React.FC<DailyResetTimerProps> = ({
  variant = 'badge',
  playType,
  className = '',
  prefix,
  currentMode,
  showYesterday = true
}) => {
  const [time, setTime] = useState(() => getTimeUntilNextReset());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setTime(getTimeUntilNextReset());
    const interval = setInterval(() => {
      setTime(getTimeUntilNextReset());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const defaultPrefix = prefix || (playType === 'unlimited' ? 'Next Daily' : 'Resets in');

  if (variant === 'inline') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-mono ${className}`}
        title="Daily quiz resets globally at 12:00 AM UTC+7"
      >
        <Clock size={12} className="text-pink-500 shrink-0 inline" />
        <span>{time.formatted}</span>
      </span>
    );
  }

  if (variant === 'card') {
    const yesterdayInfo = getYesterdayInfo();
    const target = (currentMode && showYesterday) ? getYesterdayTarget(currentMode) : null;
    const userDailyState = currentMode ? getDailyState(currentMode, yesterdayInfo.dateString) : null;
    const isWon = userDailyState?.completed && userDailyState?.won;
    const isLost = userDailyState?.completed && !userDailyState?.won;
    const userGuesses = (currentMode && userDailyState) ? getGuessNames(currentMode, userDailyState.guesses) : [];

    let imageSrc = '';
    let subtitle = '';
    let isAvatar = false;

    if (target) {
      if (target.series) {
        imageSrc = target.series.coverImage;
        subtitle = `${target.series.medium} (${target.series.releaseYear}) • ${target.series.origin}`;
      }
      if (target.character) {
        imageSrc = target.character.avatar;
        subtitle = `${target.series?.title || target.character.seriesTitle} • ${target.character.role}`;
        isAvatar = true;
      }
      if (target.ship) {
        imageSrc = target.ship.avatars[0] || target.series?.coverImage || '';
        subtitle = `${target.ship.characters[0]} × ${target.ship.characters[1]}`;
        isAvatar = true;
      }
      if (target.song) {
        imageSrc = target.series?.coverImage || '';
        subtitle = `${target.song.artist} • ${target.song.type}`;
      }
    }

    return (
      <div
        className={`w-full max-w-sm rounded-2xl border border-pink-200/90 bg-gradient-to-b from-white to-pink-50/40 shadow-sm overflow-hidden text-left ${className}`}
        title="Daily quiz resets globally at 12:00 AM UTC+7"
      >
        {/* Yesterday's Puzzle & Result Section (if mode is provided) */}
        {target && (
          <div className="p-3.5 border-b border-pink-100 bg-white/90">
            {/* Header: Mode & Result Status */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-800">
                <CalendarCheck size={14} className="text-pink-600 shrink-0" />
                <span>Yesterday's {MODE_LABELS[currentMode!]} (#{yesterdayInfo.dayNumber})</span>
              </div>

              {isWon ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                  <CheckCircle2 size={10} />
                  <span>Solved ({userDailyState?.guesses.length}/6)</span>
                </span>
              ) : isLost ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-300 shrink-0">
                  <XCircle size={10} />
                  <span>Missed (6/6)</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                  <HelpCircle size={10} />
                  <span>Unplayed</span>
                </span>
              )}
            </div>

            {/* Target Solution Row */}
            <div className="flex items-center gap-2.5">
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={target.targetTitle}
                  className={`w-11 h-14 rounded-xl object-cover border border-pink-200 shadow-xs shrink-0 bg-pink-50 ${
                    isAvatar ? 'rounded-xl object-cover' : ''
                  }`}
                  onError={(e) => isAvatar ? handleAvatarError(e) : handleCoverError(e)}
                />
              )}
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-pink-500">
                  Answer:
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 truncate" title={target.targetTitle}>
                  {target.targetTitle}
                </div>
                {subtitle && (
                  <div className="text-[11px] text-slate-500 truncate font-medium" title={subtitle}>
                    {subtitle}
                  </div>
                )}
              </div>
            </div>

            {/* Player's Yesterday Guesses */}
            {userGuesses.length > 0 && (
              <div className="mt-2.5 pt-2 border-t border-pink-100/60">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Your Guesses:
                </div>
                <div className="flex flex-wrap gap-1">
                  {userGuesses.map((gName, idx) => {
                    const isLastAndWon = isWon && idx === userGuesses.length - 1;
                    return (
                      <span
                        key={idx}
                        className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold truncate max-w-[120px] border ${
                          isLastAndWon
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-white text-slate-600 border-slate-200'
                        }`}
                        title={gName}
                      >
                        {idx + 1}. {gName}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Expandable Extra Details Accordion */}
            <div className="mt-2 pt-1 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setIsExpanded(!isExpanded);
                }}
                className="text-[10px] font-bold text-pink-600 hover:text-pink-800 flex items-center gap-0.5 cursor-pointer select-none"
              >
                <span>{isExpanded ? 'Hide Details' : 'More Details'}</span>
                {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
            </div>

            {isExpanded && (
              <div className="mt-2 pt-2 border-t border-pink-100 text-xs text-slate-700 space-y-1.5 animate-fade-in">
                {target.series?.synopsis && (
                  <p className="text-[11px] text-slate-600 line-clamp-3 leading-relaxed">
                    {target.series.synopsis}
                  </p>
                )}
                {target.character?.quote && (
                  <blockquote className="text-[11px] italic text-pink-700 bg-pink-50/50 p-2 rounded-lg border-l-2 border-pink-400">
                    "{target.character.quote}"
                  </blockquote>
                )}
                {target.ship?.description && (
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {target.ship.description}
                  </p>
                )}
                {target.emoji && (
                  <div className="text-center py-1 bg-pink-50/60 rounded-lg text-lg tracking-widest select-none">
                    {target.emoji.emojis.join(' ')}
                  </div>
                )}
                {target.song?.audioUrl && (
                  <div className="pt-1">
                    <audio controls className="w-full h-7" src={target.song.audioUrl}>
                      Your browser does not support audio.
                    </audio>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Next Daily Quiz Countdown Row */}
        <div className="p-3 bg-pink-50/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white border border-pink-200 flex items-center justify-center text-pink-500 shadow-xs shrink-0">
              <Clock size={16} className="animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600">
                Next Daily Quiz
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                Resets daily at 12:00 AM UTC+7
              </div>
            </div>
          </div>
          <div className="text-sm sm:text-base font-black font-mono text-pink-600 tracking-wider">
            {time.formatted}
          </div>
        </div>
      </div>
    );
  }

  // default: 'badge'
  return (
    <div
      title="Daily quiz resets globally at 12:00 AM UTC+7"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/90 border border-pink-200 text-xs shadow-xs select-none backdrop-blur-xs transition-all ${className}`}
    >
      <Clock size={13} className="text-pink-500 shrink-0 animate-pulse" />
      <span className="text-slate-500 font-medium text-[11px]">{defaultPrefix}</span>
      <span className="font-mono font-black text-pink-600 tracking-tight text-xs">
        {time.formatted}
      </span>
      <span className="text-[10px] text-pink-500/80 font-bold hidden xs:inline">
        (12 AM UTC+7)
      </span>
    </div>
  );
};
