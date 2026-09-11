import React from 'react';
import { 
  Trophy, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  Flower2, 
  BookOpen, 
  Calendar, 
  Infinity as InfinityIcon,
  BookMarked,
  Sparkles,
  Image as ImageIcon,
  MessageCircleHeart,
  Smile,
  Heart,
  ScanFace,
  Disc,
  ChevronLeft,
  ChevronRight,
  History
} from 'lucide-react';
import { GameMode, PlayType } from '../types/yuri';
import { sound } from '../utils/sound';

interface HeaderProps {
  currentMode: GameMode;
  onModeChange: (mode: GameMode) => void;
  playType: PlayType;
  onPlayTypeChange: (type: PlayType) => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
  onOpenStats: () => void;
  onOpenHistory: () => void;
  onOpenHelp: () => void;
  onOpenDex: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  dailyNumber: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onModeChange,
  playType,
  onPlayTypeChange,
  petalsEnabled,
  onTogglePetals,
  onOpenStats,
  onOpenHistory,
  onOpenHelp,
  onOpenDex,
  isMuted,
  onToggleMute,
  dailyNumber
}) => {
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const checkScroll = React.useCallback(() => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    }
  }, []);

  React.useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;

    checkScroll();
    window.addEventListener('resize', checkScroll);

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
        checkScroll();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('resize', checkScroll);
      el.removeEventListener('wheel', onWheel);
    };
  }, [checkScroll]);

  React.useEffect(() => {
    const activeEl = tabsRef.current?.querySelector('[data-active="true"]');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      setTimeout(checkScroll, 300);
    }
  }, [currentMode, checkScroll]);

  const scrollTabs = (direction: 'left' | 'right') => {
    sound.playClick();
    if (tabsRef.current) {
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -180 : 180,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 250);
    }
  };

  return (
    <header className="w-full max-w-4xl mx-auto px-4 pt-5 pb-3 flex flex-col gap-4">
      {/* Top Navbar */}
      <div className="flex items-center justify-between">
        {/* Left Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenHelp();
            }}
            title="How to Play"
            className="w-10 h-10 rounded-2xl bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-pink-100 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <HelpCircle size={18} />
          </button>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenDex();
            }}
            title="YuriDex Encyclopedia"
            className="h-10 px-3 rounded-2xl bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-pink-100 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 text-xs font-bold"
          >
            <BookOpen size={16} className="text-pink-500" />
            <span className="hidden sm:inline">YuriDex</span>
          </button>
        </div>

        {/* Center Brand */}
        <div className="text-center select-none">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl animate-bounce-subtle">🌸</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-sans">
              Yuridle<span className="text-pink-500">.</span>
            </h1>
            <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold border border-pink-200">
              百合
            </span>
          </div>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
            The Daily Girls' Love Guessing Game
          </p>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleMute}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            className="w-10 h-10 rounded-2xl bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-pink-100 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <button
            type="button"
            onClick={onTogglePetals}
            title={petalsEnabled ? 'Disable Petals' : 'Enable Petals'}
            className={`w-10 h-10 rounded-2xl border shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center ${
              petalsEnabled 
                ? 'bg-pink-50 text-pink-600 border-pink-200' 
                : 'bg-white text-slate-400 border-pink-100'
            }`}
          >
            <Flower2 size={18} />
          </button>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenHistory();
            }}
            title="Match History (Cookies)"
            className="w-10 h-10 rounded-2xl bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-pink-100 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <History size={18} />
          </button>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenStats();
            }}
            title="Statistics"
            className="w-10 h-10 rounded-2xl bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-pink-100 shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            <Trophy size={18} />
          </button>
        </div>
      </div>

      {/* Mode Navigation & Play Type bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
        {/* Game Modes Segmented Tray with Left/Right Scroll Chevrons */}
        <div className="relative flex items-center min-w-0 max-w-full sm:w-auto w-full group">
          {/* Left scroll chevron */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollTabs('left')}
              title="Scroll left"
              className="absolute -left-2 sm:-left-3 z-10 w-7 h-7 rounded-full bg-white/95 border border-pink-200 text-pink-600 shadow-md flex items-center justify-center hover:bg-pink-50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Scrollable Modes Tray */}
          <div
            ref={tabsRef}
            onScroll={checkScroll}
            className="flex items-center bg-white p-1 rounded-2xl border border-pink-100 shadow-sm w-full sm:w-auto overflow-x-auto scrollbar-none justify-start gap-0.5 scroll-smooth min-w-0"
          >
            <button
              type="button"
              data-active={currentMode === 'classic'}
              onClick={() => {
                sound.playClick();
                onModeChange('classic');
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                currentMode === 'classic'
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              <BookMarked size={14} />
              <span>Series</span>
            </button>
            <button
              type="button"
              data-active={currentMode === 'character'}
              onClick={() => {
                sound.playClick();
                onModeChange('character');
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                currentMode === 'character'
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              <Sparkles size={14} />
              <span>Character</span>
            </button>
            <button
              type="button"
              data-active={currentMode === 'cover'}
              onClick={() => {
                sound.playClick();
                onModeChange('cover');
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                currentMode === 'cover'
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              <ImageIcon size={14} />
              <span>Cover</span>
            </button>
            <button
              type="button"
              data-active={currentMode === 'quote'}
              onClick={() => {
                sound.playClick();
                onModeChange('quote');
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                currentMode === 'quote'
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              <MessageCircleHeart size={14} />
              <span>Quote</span>
            </button>
            <button
              type="button"
              data-active={currentMode === 'emoji'}
              onClick={() => {
                sound.playClick();
                onModeChange('emoji');
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                currentMode === 'emoji'
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              <Smile size={14} />
              <span>Emoji</span>
            </button>
            <button
              type="button"
              data-active={currentMode === 'ship'}
              onClick={() => {
                sound.playClick();
                onModeChange('ship');
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                currentMode === 'ship'
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              <Heart size={14} className={currentMode === 'ship' ? 'fill-white' : 'text-pink-500'} />
              <span>Ship</span>
            </button>
            <button
              type="button"
              data-active={currentMode === 'silhouette'}
              onClick={() => {
                sound.playClick();
                onModeChange('silhouette');
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                currentMode === 'silhouette'
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              <ScanFace size={14} />
              <span>Silhouette</span>
            </button>
            <button
              type="button"
              data-active={currentMode === 'song'}
              onClick={() => {
                sound.playClick();
                onModeChange('song');
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${
                currentMode === 'song'
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50/50'
              }`}
            >
              <Disc size={14} />
              <span>Song</span>
            </button>
          </div>

          {/* Right scroll chevron */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollTabs('right')}
              title="Scroll right"
              className="absolute -right-2 sm:-right-3 z-10 w-7 h-7 rounded-full bg-white/95 border border-pink-200 text-pink-600 shadow-md flex items-center justify-center hover:bg-pink-50 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* Daily vs Unlimited Pill Toggle */}
        <div className="flex items-center bg-white p-1 rounded-2xl border border-pink-100 shadow-sm">
          <button
            type="button"
            title={`Daily #${dailyNumber} • Resets at 12:00 AM UTC+7`}
            onClick={() => {
              sound.playClick();
              onPlayTypeChange('daily');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              playType === 'daily'
                ? 'bg-pink-100 text-pink-800'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Calendar size={13} className="text-pink-600" />
            <span>Daily #{dailyNumber}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onPlayTypeChange('unlimited');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              playType === 'unlimited'
                ? 'bg-pink-100 text-pink-800'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <InfinityIcon size={13} className="text-pink-600" />
            <span>Unlimited</span>
          </button>
        </div>
      </div>
    </header>
  );
};
