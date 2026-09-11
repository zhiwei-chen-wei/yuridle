import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { getTimeUntilNextReset } from '../utils/dailySeed';
import { PlayType } from '../types/yuri';

interface DailyResetTimerProps {
  variant?: 'badge' | 'card' | 'inline';
  playType?: PlayType;
  className?: string;
  prefix?: string;
}

export const DailyResetTimer: React.FC<DailyResetTimerProps> = ({
  variant = 'badge',
  playType,
  className = '',
  prefix
}) => {
  const [time, setTime] = useState(() => getTimeUntilNextReset());

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
    return (
      <div
        className={`w-full max-w-sm p-3 bg-pink-50/70 border border-pink-200/80 rounded-2xl flex items-center justify-between gap-3 text-left shadow-xs ${className}`}
        title="Daily quiz resets globally at 12:00 AM UTC+7"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white border border-pink-200 flex items-center justify-center text-pink-500 shadow-xs shrink-0">
            <Clock size={16} className="animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
              Next Daily Quiz
            </div>
            <div className="text-[11px] text-slate-400 font-medium">
              Resets daily at 12:00 AM UTC+7
            </div>
          </div>
        </div>
        <div className="text-sm sm:text-base font-black font-mono text-pink-600 tracking-wider">
          {time.formatted}
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
