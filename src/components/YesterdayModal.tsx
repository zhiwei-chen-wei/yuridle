import React, { useState } from 'react';
import {
  X,
  CalendarCheck,
  Trophy,
  BookMarked,
  Sparkles,
  Image as ImageIcon,
  MessageCircleHeart,
  Smile,
  Heart,
  ScanFace,
  Disc,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  ListFilter,
  LucideIcon
} from 'lucide-react';
import { GameMode } from '../types/yuri';
import { YURI_SERIES } from '../data/yuriSeries';
import { YURI_CHARACTERS } from '../data/yuriCharacters';
import { YURI_SHIPS } from '../data/yuriShips';
import { YURI_SONGS } from '../data/yuriSongs';
import { getYesterdayInfo, getAllYesterdayTargets } from '../utils/dailySeed';
import { getDailyState } from '../utils/storage';
import { handleCoverError, handleAvatarError } from '../utils/imageFallbacks';
import { sound } from '../utils/sound';

interface YesterdayModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMode: GameMode;
  onModeSelect?: (mode: GameMode) => void;
}

const MODE_CONFIG: Record<GameMode, { title: string; label: string; icon: LucideIcon }> = {
  classic: { title: 'Series Guessing', label: 'Series', icon: BookMarked },
  character: { title: 'Character Guessing', label: 'Character', icon: Sparkles },
  cover: { title: 'Cover Blur', label: 'Cover', icon: ImageIcon },
  quote: { title: 'Famous Quote', label: 'Quote', icon: MessageCircleHeart },
  emoji: { title: 'Emoji Riddle', label: 'Emoji', icon: Smile },
  ship: { title: 'Couple & Ship', label: 'Ship', icon: Heart },
  silhouette: { title: 'Character Silhouette', label: 'Silhouette', icon: ScanFace },
  song: { title: 'Theme Song', label: 'Song', icon: Disc }
};

export const YesterdayModal: React.FC<YesterdayModalProps> = ({
  isOpen,
  onClose,
  currentMode,
  onModeSelect
}) => {
  const [selectedMode, setSelectedMode] = useState<GameMode>(currentMode);
  const [showAllOverview, setShowAllOverview] = useState<boolean>(false);

  // Sync selectedMode when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setSelectedMode(currentMode);
      setShowAllOverview(false);
    }
  }, [isOpen, currentMode]);

  if (!isOpen) return null;

  const yesterdayInfo = getYesterdayInfo();
  const allTargets = getAllYesterdayTargets();
  const currentTarget = allTargets[selectedMode];
  const userDailyState = getDailyState(selectedMode, yesterdayInfo.dateString);

  // Formatted date (e.g., September 15, 2026)
  const formattedDate = (() => {
    try {
      const [year, month, day] = yesterdayInfo.dateString.split('-').map(Number);
      const d = new Date(Date.UTC(year, month - 1, day));
      return d.toLocaleDateString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
      });
    } catch {
      return yesterdayInfo.dateString;
    }
  })();

  // Reconstruct player's guess names from yesterday
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

  const userGuesses = userDailyState ? getGuessNames(selectedMode, userDailyState.guesses) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-pink-200 rounded-3xl p-5 sm:p-6 shadow-2xl text-slate-800 flex flex-col max-h-[92vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-pink-50 transition-colors z-10 cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-4 pr-6 pl-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-extrabold mb-1.5">
            <CalendarCheck size={14} className="text-pink-600" />
            <span>Daily #{yesterdayInfo.dayNumber} • {formattedDate}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Yesterday's Answer & Results
          </h2>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Check the official solutions and your performance from yesterday's daily puzzles
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2 mb-4 scrollbar-none border-b border-pink-100 shrink-0">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setShowAllOverview(true);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              showAllOverview
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-pink-50 hover:text-pink-600'
            }`}
          >
            <ListFilter size={13} />
            <span>All 8 Modes</span>
          </button>

          {(Object.keys(MODE_CONFIG) as GameMode[]).map((m) => {
            const Config = MODE_CONFIG[m];
            const Icon = Config.icon;
            const isCurrent = !showAllOverview && selectedMode === m;
            const modeState = getDailyState(m, yesterdayInfo.dateString);
            const isWon = modeState?.completed && modeState?.won;

            return (
              <button
                key={m}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setSelectedMode(m);
                  setShowAllOverview(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                    : 'bg-pink-50/50 text-slate-600 hover:bg-pink-100/70 hover:text-pink-700'
                }`}
              >
                <Icon size={13} />
                <span>{Config.label}</span>
                {modeState && (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isWon ? 'bg-emerald-400' : 'bg-rose-400'
                    }`}
                    title={isWon ? 'Solved yesterday' : 'Attempted yesterday'}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Body Container */}
        <div className="overflow-y-auto pr-1 flex-1 space-y-4 text-left">
          {showAllOverview ? (
            /* ============================================================ */
            /* OVERVIEW: ALL 8 MODES AT A GLANCE                            */
            /* ============================================================ */
            <div className="space-y-3">
              <div className="bg-pink-50/60 border border-pink-100 p-3 rounded-2xl text-xs text-pink-900 flex items-center justify-between">
                <span className="font-semibold">Summary of yesterday's official answers and your play record:</span>
                <span className="text-[11px] text-pink-600 font-bold">Tap any card to view full solution</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Object.keys(MODE_CONFIG) as GameMode[]).map((m) => {
                  const Config = MODE_CONFIG[m];
                  const Icon = Config.icon;
                  const target = allTargets[m];
                  const state = getDailyState(m, yesterdayInfo.dateString);
                  const isWon = state?.completed && state?.won;
                  const isLost = state?.completed && !state?.won;

                  let imageSrc = '';
                  let subtitle = '';

                  if (target.series) {
                    imageSrc = target.series.coverImage;
                    subtitle = target.series.origin ? `${target.series.medium} • ${target.series.releaseYear}` : '';
                  }
                  if (target.character) {
                    imageSrc = target.character.avatar;
                    subtitle = target.series?.title || '';
                  }
                  if (target.ship) {
                    imageSrc = target.ship.avatars[0] || target.series?.coverImage || '';
                    subtitle = target.series?.title || '';
                  }
                  if (target.song) {
                    imageSrc = target.series?.coverImage || '';
                    subtitle = `${target.song.artist} • ${target.series?.title || ''}`;
                  }

                  return (
                    <div
                      key={m}
                      onClick={() => {
                        sound.playClick();
                        setSelectedMode(m);
                        setShowAllOverview(false);
                      }}
                      className="p-3 bg-white border border-pink-100 hover:border-pink-300 rounded-2xl shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-3 group"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-12 h-16 rounded-xl bg-pink-50 border border-pink-100 overflow-hidden shrink-0 flex items-center justify-center relative">
                        {imageSrc ? (
                          <img
                            src={imageSrc}
                            alt={target.targetTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            onError={(e) => handleCoverError(e)}
                          />
                        ) : (
                          <Icon size={20} className="text-pink-400" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <Icon size={12} className="text-pink-500 shrink-0" />
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                            {Config.title}
                          </span>
                        </div>
                        <h4 className="text-sm font-black text-slate-900 truncate group-hover:text-pink-600 transition-colors">
                          {target.targetTitle}
                        </h4>
                        {subtitle && (
                          <p className="text-[11px] text-slate-500 truncate font-medium">{subtitle}</p>
                        )}

                        {/* Player Status Badge */}
                        <div className="mt-1.5 flex items-center gap-1.5">
                          {isWon ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 size={10} />
                              <span>Solved ({state.guesses.length}/6)</span>
                            </span>
                          ) : isLost ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                              <XCircle size={10} />
                              <span>Missed (6/6)</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                              <HelpCircle size={10} />
                              <span>Unplayed</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <ChevronRight size={16} className="text-slate-300 group-hover:text-pink-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* ============================================================ */
            /* SINGLE MODE VIEW: DETAILED ANSWER + USER RESULT              */
            /* ============================================================ */
            <div className="space-y-4">
              {/* User Result Banner */}
              <div
                className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  userDailyState?.won
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                    : userDailyState?.completed
                    ? 'bg-rose-50/80 border-rose-200 text-rose-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${
                      userDailyState?.won
                        ? 'bg-emerald-100 border-emerald-300 text-emerald-700'
                        : userDailyState?.completed
                        ? 'bg-rose-100 border-rose-300 text-rose-700'
                        : 'bg-white border-slate-300 text-slate-400'
                    }`}
                  >
                    {userDailyState?.won ? (
                      <Trophy size={20} className="text-emerald-600" />
                    ) : userDailyState?.completed ? (
                      <XCircle size={20} className="text-rose-600" />
                    ) : (
                      <HelpCircle size={20} className="text-slate-400" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider opacity-75">
                      Your Result Yesterday ({MODE_CONFIG[selectedMode].title})
                    </div>
                    <div className="text-base font-black">
                      {userDailyState?.won ? (
                        <span>Solved in {userDailyState.guesses.length} {userDailyState.guesses.length === 1 ? 'guess' : 'guesses'}! 🎉</span>
                      ) : userDailyState?.completed ? (
                        <span>Missed after {userDailyState.guesses.length} attempts</span>
                      ) : (
                        <span>You did not play this mode yesterday</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Guesses pill tag list */}
                {userGuesses.length > 0 && (
                  <div className="flex flex-col sm:items-end">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Your Guesses:
                    </span>
                    <div className="flex flex-wrap gap-1 max-w-xs sm:justify-end">
                      {userGuesses.map((gName, idx) => {
                        const isLastAndWon = userDailyState?.won && idx === userGuesses.length - 1;
                        return (
                          <span
                            key={idx}
                            className={`text-[10px] px-2 py-0.5 rounded-md font-bold truncate max-w-[130px] border ${
                              isLastAndWon
                                ? 'bg-emerald-200/90 text-emerald-900 border-emerald-400'
                                : 'bg-white text-slate-700 border-slate-200'
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
              </div>

              {/* Official Solution Card */}
              <div className="bg-white border border-pink-100 rounded-3xl p-5 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-pink-50 pb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-pink-600 flex items-center gap-1.5">
                    <CheckCircle2 size={15} />
                    <span>Official Solution for Daily #{yesterdayInfo.dayNumber}</span>
                  </span>
                </div>

                {/* Mode Specific Display */}
                {(selectedMode === 'classic' || selectedMode === 'cover') && currentTarget.series && (
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    {/* Cover Art */}
                    <div className="w-36 sm:w-44 aspect-3/4 rounded-2xl bg-pink-50 border border-pink-200 overflow-hidden shadow-md shrink-0 relative">
                      <img
                        src={currentTarget.series.coverImage}
                        alt={currentTarget.series.title}
                        className="w-full h-full object-cover"
                        onError={(e) => handleCoverError(e)}
                      />
                    </div>

                    {/* Series Details */}
                    <div className="flex-1 space-y-2.5 text-center sm:text-left">
                      <div>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 font-bold border border-pink-200">
                          {currentTarget.series.medium} • {currentTarget.series.releaseYear} • {currentTarget.series.origin}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                          {currentTarget.series.title}
                        </h3>
                        {currentTarget.series.romaji && currentTarget.series.romaji !== currentTarget.series.title && (
                          <p className="text-xs text-slate-500 font-semibold">{currentTarget.series.romaji}</p>
                        )}
                        {currentTarget.series.nativeTitle && (
                          <p className="text-xs text-slate-400 font-medium">{currentTarget.series.nativeTitle}</p>
                        )}
                      </div>

                      {/* Attributes Badges */}
                      <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                        <span className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                          Setting: <strong className="text-slate-900">{currentTarget.series.setting}</strong>
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                          Tone: <strong className="text-slate-900">{currentTarget.series.tone}</strong>
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                          Pairing: <strong className="text-pink-600">{currentTarget.series.pairing}</strong>
                        </span>
                      </div>

                      {/* Tropes */}
                      {currentTarget.series.tropes && currentTarget.series.tropes.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                          {currentTarget.series.tropes.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-100 font-bold">
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Synopsis */}
                      {currentTarget.series.synopsis && (
                        <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                          {currentTarget.series.synopsis}
                        </p>
                      )}

                      {/* Famous Quote */}
                      {currentTarget.series.famousQuote && (
                        <blockquote className="text-xs italic text-pink-700 bg-pink-50/60 p-2.5 rounded-xl border-l-3 border-pink-400">
                          "{currentTarget.series.famousQuote}"
                        </blockquote>
                      )}
                    </div>
                  </div>
                )}

                {(selectedMode === 'character' || selectedMode === 'quote' || selectedMode === 'silhouette') && currentTarget.character && (
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    {/* Character Avatar */}
                    <div className="w-28 sm:w-36 aspect-square rounded-2xl bg-pink-50 border border-pink-200 overflow-hidden shadow-md shrink-0 flex items-center justify-center relative">
                      <img
                        src={currentTarget.character.avatar}
                        alt={currentTarget.character.name}
                        className="w-full h-full object-cover"
                        onError={(e) => handleAvatarError(e)}
                      />
                    </div>

                    {/* Character Details */}
                    <div className="flex-1 space-y-2 text-center sm:text-left">
                      <div>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 font-bold border border-pink-200">
                          {currentTarget.character.seriesTitle}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                          {currentTarget.character.name}
                        </h3>
                        {currentTarget.character.nativeName && (
                          <p className="text-xs text-slate-400 font-medium">{currentTarget.character.nativeName}</p>
                        )}
                      </div>

                      {/* Character Attribute Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1">
                        <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-center">
                          <div className="text-[10px] text-slate-400 font-bold">Role</div>
                          <div className="text-xs font-extrabold text-slate-800">{currentTarget.character.role}</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-center">
                          <div className="text-[10px] text-slate-400 font-bold">Hair Color</div>
                          <div className="text-xs font-extrabold text-slate-800">{currentTarget.character.hairColor}</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-center">
                          <div className="text-[10px] text-slate-400 font-bold">Archetype</div>
                          <div className="text-xs font-extrabold text-slate-800">{currentTarget.character.archetype}</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-xl border border-slate-100 text-center">
                          <div className="text-[10px] text-slate-400 font-bold">Debut</div>
                          <div className="text-xs font-extrabold text-slate-800">{currentTarget.character.debutYear}</div>
                        </div>
                      </div>

                      {currentTarget.character.pairingWith && (
                        <p className="text-xs text-slate-600 font-medium">
                          Paired with: <strong className="text-pink-600">{currentTarget.character.pairingWith}</strong>
                        </p>
                      )}

                      {currentTarget.character.quote && (
                        <blockquote className="text-xs italic text-pink-700 bg-pink-50/60 p-2.5 rounded-xl border-l-3 border-pink-400">
                          "{currentTarget.character.quote}"
                        </blockquote>
                      )}
                    </div>
                  </div>
                )}

                {selectedMode === 'emoji' && currentTarget.emoji && (
                  <div className="space-y-3">
                    <div className="text-center py-3 bg-pink-50/60 border border-pink-100 rounded-2xl">
                      <div className="text-3xl sm:text-4xl tracking-widest select-none">
                        {currentTarget.emoji.emojis.join(' ')}
                      </div>
                      <div className="text-[11px] text-pink-600 font-extrabold uppercase tracking-wider mt-1">
                        Yesterday's Emoji Riddle
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start p-3 bg-slate-50 rounded-2xl border border-slate-100">
                      {currentTarget.series && (
                        <img
                          src={currentTarget.series.coverImage}
                          alt={currentTarget.targetTitle}
                          className="w-20 h-28 rounded-xl object-cover shadow-xs shrink-0"
                          onError={(e) => handleCoverError(e)}
                        />
                      )}
                      <div className="flex-1 text-center sm:text-left">
                        <span className="text-xs font-bold text-pink-600">Solved Series:</span>
                        <h3 className="text-lg font-black text-slate-900">{currentTarget.targetTitle}</h3>
                        {currentTarget.series && (
                          <p className="text-xs text-slate-500">{currentTarget.series.medium} • {currentTarget.series.releaseYear}</p>
                        )}
                        <div className="mt-2 space-y-1">
                          <span className="text-[10px] font-extrabold uppercase text-slate-400">Clue Hints:</span>
                          <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-700">
                            {currentTarget.emoji.clues.map((clue, idx) => (
                              <div key={idx} className="bg-white p-1.5 rounded-lg border border-slate-200">
                                <span className="mr-1">{currentTarget.emoji?.emojis[idx]}</span>
                                <span>{clue}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedMode === 'ship' && currentTarget.ship && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-3 py-3 bg-pink-50/60 rounded-2xl border border-pink-100">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-400 shadow-sm shrink-0">
                        <img
                          src={currentTarget.ship.avatars[0]}
                          alt={currentTarget.ship.characters[0]}
                          className="w-full h-full object-cover"
                          onError={(e) => handleAvatarError(e)}
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-md">
                        <Heart size={16} className="fill-white" />
                      </div>
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-400 shadow-sm shrink-0">
                        <img
                          src={currentTarget.ship.avatars[1]}
                          alt={currentTarget.ship.characters[1]}
                          className="w-full h-full object-cover"
                          onError={(e) => handleAvatarError(e)}
                        />
                      </div>
                    </div>

                    <div className="text-center sm:text-left space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-1">
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 font-bold border border-pink-200">
                          {currentTarget.ship.seriesTitle}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                          currentTarget.ship.isCanon 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : 'bg-purple-50 text-purple-700 border-purple-200'
                        }`}>
                          {currentTarget.ship.isCanon ? 'Canon Couple' : 'Fanon Ship'}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-900">
                        {currentTarget.ship.shipName}{' '}
                        {currentTarget.ship.japaneseName && (
                          <span className="text-sm font-normal text-slate-400">({currentTarget.ship.japaneseName})</span>
                        )}
                      </h3>
                      <p className="text-xs font-bold text-pink-600">
                        {currentTarget.ship.characters[0]} × {currentTarget.ship.characters[1]}
                      </p>

                      {currentTarget.ship.dynamics && currentTarget.ship.dynamics.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                          {currentTarget.ship.dynamics.map((d) => (
                            <span key={d} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold">
                              {d}
                            </span>
                          ))}
                        </div>
                      )}

                      {currentTarget.ship.description && (
                        <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                          {currentTarget.ship.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {selectedMode === 'song' && currentTarget.song && (
                  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-md shrink-0">
                      <Disc size={44} className="animate-spin-slow" />
                    </div>
                    <div className="flex-1 space-y-2 text-center sm:text-left">
                      <div>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 font-bold border border-pink-200">
                          {currentTarget.song.seriesTitle} • {currentTarget.song.type}
                        </span>
                        <h3 className="text-xl font-black text-slate-900 mt-1">{currentTarget.song.songTitle}</h3>
                        <p className="text-xs font-bold text-slate-600">Artist: {currentTarget.song.artist}</p>
                      </div>

                      {currentTarget.song.audioUrl && (
                        <div className="pt-2">
                          <audio controls className="w-full h-8" src={currentTarget.song.audioUrl}>
                            Your browser does not support audio element.
                          </audio>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Note */}
        <div className="mt-3 pt-3 border-t border-pink-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>Yuridle puzzle archive</span>
          <span>Resets daily at 12:00 AM UTC+7</span>
        </div>
      </div>
    </div>
  );
};
