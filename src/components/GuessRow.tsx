import React, { useEffect } from 'react';
import { ArrowUp, ArrowDown, Check } from 'lucide-react';
import { SeriesGuessFeedback, CharacterGuessFeedback, FeedbackState, YearDirection } from '../types/yuri';
import { sound } from '../utils/sound';
import { handleAvatarError } from '../utils/imageFallbacks';
import { getSeriesRomaji } from '../utils/seriesFormat';

interface SeriesRowProps {
  type: 'series';
  feedback: SeriesGuessFeedback;
  index: number;
}

interface CharacterRowProps {
  type: 'character';
  feedback: CharacterGuessFeedback;
  index: number;
}

type GuessRowProps = SeriesRowProps | CharacterRowProps;

export const GuessRow: React.FC<GuessRowProps> = (props) => {
  useEffect(() => {
    sound.playTileFlip(0);
  }, []);

  const getTileClasses = (state: FeedbackState) => {
    switch (state) {
      case 'correct':
        return 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
      case 'partial':
        return 'bg-amber-500 text-white border-amber-600 shadow-sm';
      case 'wrong':
      default:
        return 'bg-slate-200 text-slate-700 border-slate-300';
    }
  };

  const renderDirection = (dir: YearDirection) => {
    if (dir === 'higher') {
      return (
        <span className="inline-flex items-center gap-0.5 text-[11px] font-extrabold bg-black/20 px-1 py-0.5 rounded ml-1">
          <ArrowUp size={12} strokeWidth={3} className="text-white" /> Higher
        </span>
      );
    }
    if (dir === 'lower') {
      return (
        <span className="inline-flex items-center gap-0.5 text-[11px] font-extrabold bg-black/20 px-1 py-0.5 rounded ml-1">
          <ArrowDown size={12} strokeWidth={3} className="text-white" /> Lower
        </span>
      );
    }
    return <Check size={14} strokeWidth={3} className="text-emerald-100 ml-1" />;
  };

  if (props.type === 'series') {
    const { feedback } = props;
    const series = feedback.guessedSeries;

    const tiles = [
      {
        label: 'Medium',
        value: series.medium,
        state: feedback.medium,
      },
      {
        label: 'Year',
        value: series.releaseYear,
        state: feedback.year,
        direction: feedback.yearDirection,
      },
      {
        label: 'Origin',
        value: series.origin,
        state: feedback.origin,
      },
      {
        label: 'Setting',
        value: series.setting,
        state: feedback.setting,
      },
      {
        label: 'Main Trope',
        value: series.tropes[0] || 'Romance',
        state: feedback.trope,
      },
      {
        label: 'Status',
        value: series.status,
        state: feedback.status,
      },
    ];

    return (
      <div className="w-full flex flex-col gap-2 p-3.5 bg-white rounded-2xl border border-pink-100 shadow-sm animate-fade-in mb-3">
        {/* Title Header */}
        <div className="flex items-center justify-between px-1 pb-1.5 border-b border-pink-50">
          <div className="flex items-baseline gap-2 flex-wrap min-w-0 pr-2">
            <span className="text-base font-bold text-slate-900">
              {series.title}
            </span>
            {series.romaji && series.romaji.toLowerCase() !== series.title.toLowerCase() && (
              <span className="text-xs font-bold text-pink-600">
                ({series.romaji})
              </span>
            )}
            {series.nativeTitle && (
              <span className="text-xs text-slate-400 font-medium hidden md:inline">
                • {series.nativeTitle}
              </span>
            )}
          </div>
          <span className="text-xs text-pink-700 font-bold px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-100">
            {series.pairing}
          </span>
        </div>

        {/* Attribute Tiles Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all animate-tile-flip h-18 ${getTileClasses(
                tile.state
              )}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="text-[10px] tracking-wider uppercase opacity-80 font-bold">
                {tile.label}
              </span>
              <div className="text-xs sm:text-sm font-extrabold mt-0.5 flex items-center justify-center flex-wrap">
                <span>{tile.value}</span>
                {tile.direction && renderDirection(tile.direction)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Character row
  const { feedback } = props;
  const char = feedback.guessedCharacter;
  const seriesRomaji = getSeriesRomaji(char.seriesId || char.seriesTitle);
  const showRomaji = Boolean(
    seriesRomaji && seriesRomaji.trim().toLowerCase() !== char.seriesTitle.trim().toLowerCase()
  );

  const charTiles = [
    {
      label: 'Series',
      value: char.seriesTitle,
      romaji: showRomaji ? seriesRomaji : undefined,
      state: feedback.series,
    },
    {
      label: 'Role',
      value: char.role,
      state: feedback.role,
    },
    {
      label: 'Hair Color',
      value: char.hairColor,
      state: feedback.hairColor,
    },
    {
      label: 'Archetype',
      value: char.archetype,
      state: feedback.archetype,
    },
    {
      label: 'Debut Year',
      value: char.debutYear,
      state: feedback.debutYear,
      direction: feedback.yearDirection,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-2 p-3.5 bg-white rounded-2xl border border-pink-100 shadow-sm animate-fade-in mb-3">
      <div className="flex items-center justify-between px-1 pb-1.5 border-b border-pink-50">
        <div className="flex items-center gap-2.5">
          <img
            src={char.avatar}
            alt={char.name}
            onError={handleAvatarError}
            className="w-8 h-8 rounded-full object-cover object-top border-2 border-pink-200"
          />
          <span className="text-base font-bold text-slate-900">
            {char.name}
          </span>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            ({char.nativeName})
          </span>
        </div>
        <span className="text-xs text-pink-700 font-bold bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
          Pairing: {char.pairingWith}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {charTiles.map((tile, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all animate-tile-flip h-18 ${getTileClasses(
              tile.state
            )}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="text-[10px] tracking-wider uppercase opacity-80 font-bold">
              {tile.label}
            </span>
            <div className="text-xs sm:text-sm font-extrabold mt-0.5 flex flex-col items-center justify-center w-full px-1">
              <span className="truncate max-w-full">{tile.value}</span>
              {tile.romaji && (
                <span className="text-[9px] font-semibold opacity-90 truncate max-w-full leading-tight">
                  ({tile.romaji})
                </span>
              )}
              {tile.direction && renderDirection(tile.direction)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
