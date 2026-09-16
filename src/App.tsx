import React, { useState, useEffect, useRef } from 'react';
import { GameMode, PlayType } from './types/yuri';
import { getDailyInfo } from './utils/dailySeed';
import { sound } from './utils/sound';
import { getStats } from './utils/storage';
import { getCookie, setCookie } from './utils/cookie';
import { Header } from './components/Header';
import { ClassicGame } from './components/ClassicGame';
import { CharacterGame } from './components/CharacterGame';
import { CoverGame } from './components/CoverGame';
import { QuoteGame } from './components/QuoteGame';
import { EmojiGame } from './components/EmojiGame';
import { ShipGame } from './components/ShipGame';
import { SilhouetteGame } from './components/SilhouetteGame';
import { SongGame } from './components/SongGame';
import { StatsModal } from './components/StatsModal';
import { HelpModal } from './components/HelpModal';
import { YuriDexModal } from './components/YuriDexModal';
import { PetalsCanvas } from './components/PetalsCanvas';

export const App: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<GameMode>('classic');
  const [playType, setPlayType] = useState<PlayType>('daily');
  const [petalsEnabled, setPetalsEnabled] = useState<boolean>(() => {
    const cookieVal = getCookie('yuridle_petals');
    if (cookieVal !== null) return cookieVal !== 'false';
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('yuridle_petals') !== 'false';
    }
    return true;
  });
  const [isMuted, setIsMuted] = useState<boolean>(() => sound.isMuted());

  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isDexOpen, setIsDexOpen] = useState(false);
  const [shareText, setShareText] = useState<string>('');

  const [dailyInfo, setDailyInfo] = useState(() => getDailyInfo());
  const { dayNumber, dateString } = dailyInfo;

  // Seamlessly advance puzzle when 12:00:00 AM UTC+7 arrives
  useEffect(() => {
    const checkDailyRollover = () => {
      const current = getDailyInfo();
      setDailyInfo(prev => {
        if (prev.dayNumber !== current.dayNumber || prev.dateString !== current.dateString) {
          return current;
        }
        return prev;
      });
    };

    const interval = setInterval(checkDailyRollover, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleToggleMute = () => {
    const nextMute = sound.toggleMute();
    setIsMuted(nextMute);
  };

  const handleTogglePetals = () => {
    sound.playClick();
    const next = !petalsEnabled;
    setPetalsEnabled(next);
    setCookie('yuridle_petals', String(next), 365);
    try {
      localStorage.setItem('yuridle_petals', String(next));
    } catch {
      // Ignore
    }
  };

  const gameEndTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (gameEndTimeoutRef.current) {
        clearTimeout(gameEndTimeoutRef.current);
      }
    };
  }, []);

  // When switching to unlimited mode, dismiss any active modal and pending timer
  useEffect(() => {
    if (playType === 'unlimited') {
      if (gameEndTimeoutRef.current) {
        clearTimeout(gameEndTimeoutRef.current);
        gameEndTimeoutRef.current = null;
      }
      setIsStatsOpen(false);
    }
  }, [playType]);

  const handleOpenStats = () => {
    setIsStatsOpen(true);
  };

  const handleGameEnd = (text: string) => {
    setShareText(text);
    // Only auto-show stats modal in Daily mode. When playing Unlimited, keep screen clear for Next Round.
    if (playType === 'daily') {
      if (gameEndTimeoutRef.current) {
        clearTimeout(gameEndTimeoutRef.current);
      }
      gameEndTimeoutRef.current = setTimeout(() => {
        setIsStatsOpen(true);
      }, 1200);
    }
  };

  const modeTitle = currentMode === 'classic' 
    ? 'Series' 
    : currentMode === 'character' 
    ? 'Character' 
    : currentMode === 'cover'
    ? 'Cover Blur'
    : currentMode === 'quote'
    ? 'Quote'
    : currentMode === 'emoji'
    ? 'Emoji Riddle'
    : currentMode === 'ship'
    ? 'Couple & Ship'
    : currentMode === 'silhouette'
    ? 'Silhouette'
    : 'Theme Song';

  const currentStats = getStats(currentMode);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fff7fa] text-slate-800 overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      {/* Floating Lily and Sakura Petals Background */}
      <PetalsCanvas enabled={petalsEnabled} />

      {/* Navigation Header */}
      <Header
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        playType={playType}
        onPlayTypeChange={setPlayType}
        petalsEnabled={petalsEnabled}
        onTogglePetals={handleTogglePetals}
        onOpenStats={handleOpenStats}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenDex={() => setIsDexOpen(true)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        dailyNumber={dayNumber}
      />

      {/* Main Game Arena */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-4 relative z-30 pb-36">
        {currentMode === 'classic' && (
          <ClassicGame
            key={`classic-${playType}`}
            playType={playType}
            dateString={dateString}
            dailyNumber={dayNumber}
            onGameEnd={handleGameEnd}
          />
        )}

        {currentMode === 'character' && (
          <CharacterGame
            key={`character-${playType}`}
            playType={playType}
            dateString={dateString}
            dailyNumber={dayNumber}
            onGameEnd={handleGameEnd}
          />
        )}

        {currentMode === 'cover' && (
          <CoverGame
            key={`cover-${playType}`}
            playType={playType}
            dateString={dateString}
            dailyNumber={dayNumber}
            onGameEnd={handleGameEnd}
          />
        )}

        {currentMode === 'quote' && (
          <QuoteGame
            key={`quote-${playType}`}
            playType={playType}
            dateString={dateString}
            dailyNumber={dayNumber}
            onGameEnd={handleGameEnd}
          />
        )}

        {currentMode === 'emoji' && (
          <EmojiGame
            key={`emoji-${playType}`}
            playType={playType}
            dateString={dateString}
            dailyNumber={dayNumber}
            onGameEnd={handleGameEnd}
          />
        )}

        {currentMode === 'ship' && (
          <ShipGame
            key={`ship-${playType}`}
            playType={playType}
            dateString={dateString}
            dailyNumber={dayNumber}
            onGameEnd={handleGameEnd}
          />
        )}

        {currentMode === 'silhouette' && (
          <SilhouetteGame
            key={`silhouette-${playType}`}
            playType={playType}
            dateString={dateString}
            dailyNumber={dayNumber}
            onGameEnd={handleGameEnd}
          />
        )}

        {currentMode === 'song' && (
          <SongGame
            key={`song-${playType}`}
            playType={playType}
            dateString={dateString}
            dailyNumber={dayNumber}
            onGameEnd={handleGameEnd}
          />
        )}
      </main>

      {/* Clean Footer */}
      <footer className="w-full text-center py-7 text-xs text-slate-400 border-t border-pink-100 relative z-10 bg-white/80 backdrop-blur-sm mt-auto">
        <p className="flex items-center justify-center gap-1 font-medium text-slate-500">
          Crafted with 🌸 for Yuri manga & anime fans worldwide
        </p>
        <p className="mt-1 text-[11px] text-slate-400">
          Bloom Into You • Citrus • MagiRevo • ILTV • LycoReco • G-Witch • Sasakoi & more
        </p>
      </footer>

      {/* Modals */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        stats={currentStats}
        modeTitle={modeTitle}
        shareText={shareText}
      />

      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      <YuriDexModal
        isOpen={isDexOpen}
        onClose={() => setIsDexOpen(false)}
      />
    </div>
  );
};
