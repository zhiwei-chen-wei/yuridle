import React, { useState, useEffect } from 'react';
import { X, Share2, Trophy, Flame, Target, Check, Calendar, History, Cookie, Trash2, Clock } from 'lucide-react';
import { GameStats, GameHistoryEntry } from '../types/yuri';
import { sound } from '../utils/sound';
import { getGameHistory, clearGameHistory } from '../utils/storage';
import { getTimeUntilNextReset } from '../utils/dailySeed';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: GameStats;
  modeTitle: string;
  shareText?: string;
  initialTab?: 'stats' | 'history';
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  stats,
  modeTitle,
  shareText,
  initialTab = 'stats'
}) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'history'>(initialTab);
  const [historyList, setHistoryList] = useState<GameHistoryEntry[]>([]);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(() => getTimeUntilNextReset());

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setHistoryList(getGameHistory());
      setCountdown(getTimeUntilNextReset());
      const timer = setInterval(() => {
        setCountdown(getTimeUntilNextReset());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  const winRate = stats.gamesPlayed > 0 
    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) 
    : 0;

  const maxGuessCount = Math.max(1, ...Object.values(stats.guessDistribution));

  const handleShare = () => {
    if (!shareText) return;
    sound.playClick();
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClearHistory = () => {
    sound.playClick();
    clearGameHistory();
    setHistoryList([]);
  };

  const getModeBadge = (mode: string) => {
    switch (mode) {
      case 'classic': return 'Series';
      case 'character': return 'Character';
      case 'cover': return 'Cover Blur';
      case 'quote': return 'Quote';
      case 'emoji': return 'Emoji';
      case 'ship': return 'Couple';
      case 'silhouette': return 'Silhouette';
      case 'song': return 'Song';
      default: return mode;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white border border-pink-200 rounded-3xl p-6 shadow-2xl text-slate-800 flex flex-col max-h-[90vh]">
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-pink-50 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Tab Toggle */}
        <div className="flex items-center justify-center mb-5">
          <div className="flex items-center p-1 bg-pink-50/80 rounded-2xl border border-pink-100">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveTab('stats');
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'stats'
                  ? 'bg-white text-pink-600 shadow-sm border border-pink-100'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Trophy size={14} />
              <span>Statistics</span>
            </button>
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveTab('history');
                setHistoryList(getGameHistory());
              }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'history'
                  ? 'bg-white text-pink-600 shadow-sm border border-pink-100'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <History size={14} />
              <span>History</span>
              {historyList.length > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-pink-100 text-pink-700">
                  {historyList.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {activeTab === 'stats' ? (
          <div className="overflow-y-auto pr-1">
            <div className="text-center mb-5">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {modeTitle} Statistics
              </h2>
              <p className="text-xs text-slate-500 font-medium">Your Yuridle records and streaks</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 text-center mb-6">
              <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100">
                <div className="text-2xl font-black text-pink-600">{stats.gamesPlayed}</div>
                <div className="text-[11px] text-slate-500 font-bold mt-0.5">Played</div>
              </div>
              <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100">
                <div className="text-2xl font-black text-pink-600">{winRate}%</div>
                <div className="text-[11px] text-slate-500 font-bold mt-0.5">Win Rate</div>
              </div>
              <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100">
                <div className="text-2xl font-black text-pink-600 flex items-center justify-center gap-1">
                  <Flame size={18} className="text-amber-500 fill-amber-500/20" />
                  {stats.currentStreak}
                </div>
                <div className="text-[11px] text-slate-500 font-bold mt-0.5">Streak</div>
              </div>
              <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100">
                <div className="text-2xl font-black text-pink-600 flex items-center justify-center gap-1">
                  <Target size={18} className="text-rose-500" />
                  {stats.maxStreak}
                </div>
                <div className="text-[11px] text-slate-500 font-bold mt-0.5">Max</div>
              </div>
            </div>

            {/* Guess Distribution */}
            <div className="mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Guess Distribution
              </h3>
              <div className="space-y-1.5 text-xs">
                {[1, 2, 3, 4, 5, 6].map(num => {
                  const count = stats.guessDistribution[num] || 0;
                  const percent = maxGuessCount > 0 ? (count / maxGuessCount) * 100 : 0;
                  return (
                    <div key={num} className="flex items-center gap-2">
                      <span className="w-3 text-right font-bold text-slate-400">{num}</span>
                      <div className="flex-1 bg-slate-100 rounded-full h-5 overflow-hidden flex items-center p-0.5">
                        <div
                          className={`h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2 text-[10px] font-bold ${
                            count > 0 ? 'bg-pink-500 text-white' : 'w-0'
                          }`}
                          style={{ width: `${Math.max(count > 0 ? 12 : 0, percent)}%` }}
                        >
                          {count > 0 && count}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pr-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-3 px-1">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <History size={18} className="text-pink-500" />
                  <span>Match History</span>
                </h3>
                <p className="text-[11px] text-slate-500">Recent completed games saved in cookies</p>
              </div>
              {historyList.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearHistory}
                  title="Clear match history"
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-500 px-2 py-1 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  <Trash2 size={13} />
                  <span>Clear</span>
                </button>
              )}
            </div>

            {historyList.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 text-center text-slate-400 px-4">
                <div className="text-4xl mb-3">🍪</div>
                <p className="text-sm font-semibold text-slate-600">No match history yet</p>
                <p className="text-xs text-slate-400 max-w-xs mt-1">
                  Play any daily or unlimited round. Your results and guesses are automatically remembered in cookies!
                </p>
              </div>
            ) : (
              <div className="space-y-2 overflow-y-auto max-h-64 pr-1">
                {historyList.map((entry) => (
                  <div
                    key={entry.id}
                    className="p-2.5 rounded-2xl bg-pink-50/50 border border-pink-100 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="px-1.5 py-0.5 rounded-md bg-white border border-pink-200 text-[10px] font-bold text-pink-700">
                          {getModeBadge(entry.mode)}
                        </span>
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-slate-600">
                          {entry.playType === 'daily' ? 'Daily' : 'Unlimited'}
                        </span>
                        <span className="text-[10px] text-slate-400 ml-auto">
                          {entry.date}
                        </span>
                      </div>
                      <div className="font-bold text-slate-800 truncate" title={entry.targetTitle}>
                        {entry.targetTitle}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      {entry.won ? (
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-xl bg-emerald-100 text-emerald-700 font-bold text-[11px] border border-emerald-200">
                          <Check size={12} className="stroke-[3]" />
                          <span>{entry.guessCount}/6</span>
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1 px-2 py-1 rounded-xl bg-rose-100 text-rose-600 font-bold text-[11px] border border-rose-200">
                          <X size={12} className="stroke-[3]" />
                          <span>Missed</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Next Daily Puzzle Countdown */}
        <div className="mt-3 pt-3 border-t border-pink-100 flex items-center justify-between px-3.5 py-2 bg-pink-50/70 rounded-2xl border border-pink-100/80">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-pink-500 shrink-0" />
            <div className="text-left">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">Next Yuridle</div>
              <div className="text-[10px] text-slate-400 font-medium">Resets daily at 12:00 AM UTC+7</div>
            </div>
          </div>
          <div className="text-base font-black font-mono text-pink-600 tracking-wider">
            {countdown.formatted}
          </div>
        </div>

        {/* Share Button (if available) */}
        {shareText && (
          <div className="mt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl shadow-md shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-95 text-xs"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-white stroke-[3]" />
                  <span>Copied to Clipboard! 🌸</span>
                </>
              ) : (
                <>
                  <Share2 size={16} />
                  <span>Share Results (Wordle Grid)</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Cookie Security / Storage Badge */}
        <div className="mt-3 pt-2 border-t border-pink-50 flex items-center justify-center gap-1.5 text-[11px] text-pink-600/90 font-medium">
          <Cookie size={13} className="text-pink-500" />
          <span>History & stats remembered in cookies</span>
        </div>
      </div>
    </div>
  );
};
