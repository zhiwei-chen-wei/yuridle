import React, { useState } from 'react';
import { X, Share2, Trophy, Flame, Target, Check, Sparkles } from 'lucide-react';
import { GameStats, GameMode } from '../types/yuri';
import { sound } from '../utils/sound';
import { DailyResetTimer } from './DailyResetTimer';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: GameStats;
  modeTitle: string;
  shareText?: string;
  currentMode?: GameMode;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  stats,
  modeTitle,
  shareText,
  currentMode = 'classic'
}) => {
  const [copied, setCopied] = useState(false);

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

        <div className="overflow-y-auto pr-1">
          <div className="text-center mb-5">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
              <Trophy size={22} className="text-pink-500" />
              <span>{modeTitle} Statistics</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Your Yuridle records and streaks</p>
          </div>

          {/* Summary Statistics Grid */}
          <div className="grid grid-cols-4 gap-2.5 text-center mb-6">
            <div className="bg-pink-50/70 p-3 rounded-2xl border border-pink-100">
              <div className="text-2xl font-black text-slate-900">{stats.gamesPlayed}</div>
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

        {/* Yesterday's Puzzle, Result & Next Reset Card */}
        <DailyResetTimer variant="card" currentMode={currentMode} className="w-full max-w-none mt-3" />

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

        {/* Storage Badge */}
        <div className="mt-3 pt-2 border-t border-pink-50 flex items-center justify-center gap-1.5 text-[11px] text-pink-600/90 font-medium">
          <Sparkles size={13} className="text-pink-500" />
          <span>Daily streaks & stats saved</span>
        </div>
      </div>
    </div>
  );
};
