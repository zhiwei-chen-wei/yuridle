import React, { useState, useMemo } from 'react';
import { X, BookOpen, Search, Heart, Sparkles, Users, Flame, Tag } from 'lucide-react';
import { YURI_SERIES } from '../data/yuriSeries';
import { YURI_CHARACTERS } from '../data/yuriCharacters';
import { YURI_SHIPS } from '../data/yuriShips';
import { YuriSeries, YuriCharacter, YuriShip } from '../types/yuri';
import { sound } from '../utils/sound';
import { handleCoverError, handleAvatarError } from '../utils/imageFallbacks';
import { getSeriesWithRomaji, getSeriesRomaji } from '../utils/seriesFormat';

interface YuriDexModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type DexTab = 'series' | 'characters' | 'ships';

const MEDIUMS = ['All', 'Manga', 'Anime', 'Light Novel', 'Manhwa/Webtoon', 'Manhua'];
const ROLES = ['All', 'Protagonist', 'Love Interest', 'Deuteragonist', 'Rival'];
const ARCHETYPES = ['All', 'Tsundere', 'Kuudere', 'Deredere', 'Genki', 'Ojou-sama', 'Prince-type', 'Yandere', 'Flustered Sweetheart'];
const SHIP_TYPES = ['All', 'Canon 💍', 'Iconic Pairings ✨'];

export const YuriDexModal: React.FC<YuriDexModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<DexTab>('series');
  const [searchTerm, setSearchTerm] = useState('');

  // Series filters
  const [selectedMedium, setSelectedMedium] = useState<string>('All');
  const [activeSeries, setActiveSeries] = useState<YuriSeries | null>(null);

  // Characters filters
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [selectedArchetype, setSelectedArchetype] = useState<string>('All');
  const [activeCharacter, setActiveCharacter] = useState<YuriCharacter | null>(null);

  // Ships filters
  const [selectedShipType, setSelectedShipType] = useState<string>('All');
  const [activeShip, setActiveShip] = useState<YuriShip | null>(null);

  // Precomputed counts for medium filter buttons
  const seriesCountByMedium = useMemo(() => {
    const counts: Record<string, number> = { All: YURI_SERIES.length };
    for (const m of MEDIUMS) {
      if (m !== 'All') {
        counts[m] = YURI_SERIES.filter(s => s.medium?.trim().toLowerCase() === m.trim().toLowerCase()).length;
      }
    }
    return counts;
  }, []);

  // Filtered lists
  const filteredSeries = useMemo(() => {
    return YURI_SERIES.filter(item => {
      if (selectedMedium !== 'All' && item.medium?.trim().toLowerCase() !== selectedMedium.trim().toLowerCase()) {
        return false;
      }
      if (!searchTerm.trim()) return true;
      const q = searchTerm.trim().toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.romaji.toLowerCase().includes(q) ||
        item.nativeTitle?.toLowerCase().includes(q) ||
        item.pairing.toLowerCase().includes(q) ||
        item.aliases?.some(a => a.toLowerCase().includes(q)) ||
        item.tropes.some(t => t.toLowerCase().includes(q))
      );
    });
  }, [selectedMedium, searchTerm]);

  const filteredCharacters = useMemo(() => {
    return YURI_CHARACTERS.filter(char => {
      if (selectedRole !== 'All' && char.role?.trim().toLowerCase() !== selectedRole.trim().toLowerCase()) return false;
      if (selectedArchetype !== 'All' && char.archetype?.trim().toLowerCase() !== selectedArchetype.trim().toLowerCase()) return false;
      if (!searchTerm.trim()) return true;
      const q = searchTerm.trim().toLowerCase();
      return (
        char.name.toLowerCase().includes(q) ||
        char.nativeName?.toLowerCase().includes(q) ||
        char.seriesTitle.toLowerCase().includes(q) ||
        char.pairingWith.toLowerCase().includes(q) ||
        char.aliases?.some(a => a.toLowerCase().includes(q))
      );
    });
  }, [selectedRole, selectedArchetype, searchTerm]);

  const filteredShips = useMemo(() => {
    return YURI_SHIPS.filter(ship => {
      if (selectedShipType === 'Canon 💍' && !ship.isCanon) return false;
      if (selectedShipType === 'Iconic Pairings ✨' && ship.isCanon) return false;
      if (!searchTerm.trim()) return true;
      const q = searchTerm.trim().toLowerCase();
      return (
        ship.shipName.toLowerCase().includes(q) ||
        (ship.japaneseName && ship.japaneseName.toLowerCase().includes(q)) ||
        ship.seriesTitle.toLowerCase().includes(q) ||
        ship.characters.some(c => c.toLowerCase().includes(q)) ||
        ship.dynamics.some(d => d.toLowerCase().includes(q))
      );
    });
  }, [selectedShipType, searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white border border-pink-200 rounded-3xl shadow-2xl text-slate-800 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 pb-3 border-b border-pink-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-pink-100 rounded-2xl text-pink-600 shadow-sm shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>YuriDex • 百合図鑑</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold border border-pink-200">
                  Ultimate Compendium
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Official encyclopedia of Yuri works, iconic heroines, and canon couples
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="self-end sm:self-center text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-pink-50 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-4 sm:px-6 pt-3 pb-2 bg-gradient-to-r from-pink-50/60 to-rose-50/60 border-b border-pink-100 flex items-center gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setActiveTab('series');
              setSearchTerm('');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
              activeTab === 'series'
                ? 'bg-pink-500 text-white shadow-pink-200 shadow-md scale-105'
                : 'bg-white text-slate-600 border border-pink-200/80 hover:bg-pink-50'
            }`}
          >
            <BookOpen size={16} />
            <span>🌸 Series</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'series' ? 'bg-pink-600 text-white' : 'bg-pink-100 text-pink-700'
            }`}>
              {YURI_SERIES.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setActiveTab('characters');
              setSearchTerm('');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
              activeTab === 'characters'
                ? 'bg-pink-500 text-white shadow-pink-200 shadow-md scale-105'
                : 'bg-white text-slate-600 border border-pink-200/80 hover:bg-pink-50'
            }`}
          >
            <Users size={16} />
            <span>👥 Characters</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'characters' ? 'bg-pink-600 text-white' : 'bg-pink-100 text-pink-700'
            }`}>
              {YURI_CHARACTERS.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              setActiveTab('ships');
              setSearchTerm('');
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
              activeTab === 'ships'
                ? 'bg-pink-500 text-white shadow-pink-200 shadow-md scale-105'
                : 'bg-white text-slate-600 border border-pink-200/80 hover:bg-pink-50'
            }`}
          >
            <Heart size={16} className={activeTab === 'ships' ? 'fill-white' : 'text-pink-500'} />
            <span>💖 Ships & Couples</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'ships' ? 'bg-pink-600 text-white' : 'bg-pink-100 text-pink-700'
            }`}>
              {YURI_SHIPS.length}
            </span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="p-3 sm:p-4 bg-pink-50/40 border-b border-pink-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3 top-2.5 text-pink-400" />
            <input
              type="text"
              placeholder={
                activeTab === 'series'
                  ? 'Search series, romaji, or trope...'
                  : activeTab === 'characters'
                  ? 'Search character name, alias, series...'
                  : 'Search ship name, characters, dynamics...'
              }
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white text-sm text-slate-800 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none placeholder:text-slate-400 shadow-sm"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Sub-Filters based on active tab */}
          {activeTab === 'series' && (
            <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
              {MEDIUMS.map(med => (
                <button
                  key={med}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedMedium(med);
                  }}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedMedium === med
                      ? 'bg-pink-500 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-pink-100 hover:bg-pink-50'
                  }`}
                >
                  <span>{med}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                      selectedMedium === med
                        ? 'bg-pink-600 text-white'
                        : 'bg-pink-100 text-pink-700'
                    }`}
                  >
                    {seriesCountByMedium[med] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'characters' && (
            <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
              {ROLES.map(role => (
                <button
                  key={role}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedRole(role);
                  }}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                    selectedRole === role
                      ? 'bg-pink-500 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-pink-100 hover:bg-pink-50'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          )}

          {activeTab === 'ships' && (
            <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
              {SHIP_TYPES.map(st => (
                <button
                  key={st}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedShipType(st);
                  }}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    selectedShipType === st
                      ? 'bg-pink-500 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-pink-100 hover:bg-pink-50'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TAB 1: SERIES CONTENT */}
        {activeTab === 'series' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#fffbfa]">
            {filteredSeries.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-center text-slate-400">
                <BookOpen size={40} className="mb-2 text-pink-200" />
                <p className="font-bold text-slate-600">No series found</p>
                <p className="text-xs text-slate-400 mt-1">Try selecting another medium or changing your search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSeries.map((item, index) => (
                  <div
                    key={`${item.id}-${item.medium}-${index}`}
                    onClick={() => {
                      sound.playClick();
                      setActiveSeries(item);
                    }}
                    className="group cursor-pointer p-4 bg-white hover:bg-pink-50/30 border border-pink-100 hover:border-pink-300 rounded-2xl transition-all shadow-sm hover:shadow-md flex gap-3.5"
                  >
                    <div className="w-20 h-28 rounded-xl overflow-hidden shrink-0 border border-pink-200 bg-pink-50 shadow-sm">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        onError={handleCoverError}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700">
                            {item.medium}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">
                            {item.releaseYear} • {item.origin}
                          </span>
                        </div>
                        <h3 className="font-bold text-base text-slate-900 group-hover:text-pink-600 transition-colors truncate">
                          {item.title}
                          {item.romaji && item.romaji.toLowerCase() !== item.title.toLowerCase() && (
                            <span className="text-xs font-semibold text-pink-600 ml-1.5 font-normal">
                              ({item.romaji})
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                          {item.synopsis}
                        </p>
                      </div>

                      <div className="mt-2 pt-2 border-t border-pink-50 flex items-center justify-between">
                        <span className="text-xs text-pink-700 font-bold flex items-center gap-1 truncate max-w-[200px]">
                          <Heart size={12} className="text-pink-500 fill-pink-500 shrink-0" />
                          <span className="truncate">{item.pairing}</span>
                        </span>
                        <span className="text-[11px] text-pink-600 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform shrink-0">
                          Details <Sparkles size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CHARACTERS CONTENT */}
        {activeTab === 'characters' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#fffbfa]">
            {filteredCharacters.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-center text-slate-400">
                <Users size={40} className="mb-2 text-pink-200" />
                <p className="font-bold text-slate-600">No characters found</p>
                <p className="text-xs text-slate-400 mt-1">Try changing your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredCharacters.map((char, index) => (
                  <div
                    key={`${char.id}-${index}`}
                    onClick={() => {
                      sound.playClick();
                      setActiveCharacter(char);
                    }}
                    className="group cursor-pointer p-3.5 bg-white hover:bg-pink-50/40 border border-pink-100 hover:border-pink-300 rounded-2xl transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-pink-200 bg-pink-50 shadow-inner">
                        <img
                          src={char.avatar}
                          alt={char.name}
                          onError={handleAvatarError}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md bg-pink-100 text-pink-700 uppercase">
                            {char.role}
                          </span>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600">
                            {char.debutYear}
                          </span>
                        </div>
                        <h3 className="font-bold text-sm text-slate-900 group-hover:text-pink-600 transition-colors truncate">
                          {char.name}
                        </h3>
                        <p className="text-[11px] text-slate-400 truncate">
                          {char.nativeName}
                        </p>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-pink-50 flex flex-col gap-1">
                      <div className="text-[11px] font-semibold text-slate-600 truncate flex items-center gap-1">
                        <BookOpen size={11} className="text-pink-400 shrink-0" />
                        <span className="truncate">{getSeriesWithRomaji(char.seriesTitle, getSeriesRomaji(char.seriesId || char.seriesTitle))}</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] mt-0.5">
                        <span className="text-pink-700 font-medium truncate flex items-center gap-1 max-w-[170px]">
                          <Heart size={10} className="text-pink-500 fill-pink-500 shrink-0" />
                          <span className="truncate">{char.pairingWith}</span>
                        </span>
                        <span className="px-1.5 py-0.2 rounded bg-rose-50 text-rose-600 font-bold text-[10px] shrink-0">
                          {char.archetype}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SHIPS CONTENT */}
        {activeTab === 'ships' && (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#fffbfa]">
            {filteredShips.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-center text-slate-400">
                <Heart size={40} className="mb-2 text-pink-200" />
                <p className="font-bold text-slate-600">No ships found</p>
                <p className="text-xs text-slate-400 mt-1">Try changing your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredShips.map((ship, index) => (
                  <div
                    key={`${ship.id}-${index}`}
                    onClick={() => {
                      sound.playClick();
                      setActiveShip(ship);
                    }}
                    className="group cursor-pointer p-4 bg-white hover:bg-pink-50/30 border border-pink-100 hover:border-pink-300 rounded-2xl transition-all shadow-sm hover:shadow-md flex flex-col justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
                            {ship.shipName}
                          </span>
                          {ship.japaneseName && (
                            <span className="text-xs text-slate-400 font-medium">
                              ({ship.japaneseName})
                            </span>
                          )}
                        </div>
                        {ship.isCanon ? (
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 flex items-center gap-1 border border-rose-200">
                            💍 Canon Couple
                          </span>
                        ) : (
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 flex items-center gap-1 border border-pink-200">
                            ✨ Iconic Ship
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3.5 my-2">
                        {/* Dual Avatars Interlocking */}
                        <div className="flex items-center -space-x-4 shrink-0">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-pink-100 ring-2 ring-pink-300/50">
                            <img
                              src={ship.avatars[0]}
                              alt={ship.characters[0]}
                              onError={handleAvatarError}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-pink-100 ring-2 ring-pink-300/50">
                            <img
                              src={ship.avatars[1]}
                              alt={ship.characters[1]}
                              onError={handleAvatarError}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-slate-800 truncate">
                            {ship.characters[0]} <span className="text-pink-500 font-bold">×</span> {ship.characters[1]}
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                            {getSeriesWithRomaji(ship.seriesTitle, getSeriesRomaji(ship.seriesId || ship.seriesTitle))}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed font-normal">
                        {ship.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-pink-50 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {ship.dynamics.slice(0, 2).map(d => (
                          <span
                            key={d}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-lg bg-pink-50 text-pink-700 border border-pink-100"
                          >
                            #{d}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-pink-600 font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                        Story <Sparkles size={11} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DETAIL POPUP: SERIES */}
        {activeSeries && (
          <div className="absolute inset-0 z-30 bg-white/98 backdrop-blur-md p-6 sm:p-8 flex flex-col overflow-y-auto animate-fade-in">
            <button
              type="button"
              onClick={() => setActiveSeries(null)}
              className="self-end text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-pink-50"
            >
              <X size={24} />
            </button>

            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-6 mt-1">
              <div className="w-52 h-72 rounded-2xl overflow-hidden border-2 border-pink-200 shadow-xl shrink-0 mx-auto bg-pink-50">
                <img
                  src={activeSeries.coverImage}
                  alt={activeSeries.title}
                  onError={handleCoverError}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3.5 flex-1">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700">
                    {activeSeries.medium} • {activeSeries.releaseYear} • {activeSeries.origin}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1.5">
                    {activeSeries.title}
                  </h3>
                  <div className="text-sm text-slate-400 font-medium">
                    {activeSeries.romaji} ({activeSeries.nativeTitle})
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-pink-50 border border-pink-100 text-pink-900 text-sm font-semibold flex items-center gap-2">
                  <Heart size={16} className="text-pink-500 fill-pink-500" />
                  Main Pairing: <strong>{activeSeries.pairing}</strong>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Synopsis</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {activeSeries.synopsis}
                  </p>
                </div>

                <div className="space-y-1 italic text-xs text-pink-900/90 border-l-2 border-pink-400 pl-3 bg-pink-50/40 py-1 rounded-r-xl">
                  "{activeSeries.famousQuote}"
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {activeSeries.tropes.map(t => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-xl bg-pink-50 text-pink-700 border border-pink-100 font-bold"
                    >
                      #{t}
                    </span>
                  ))}
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700 font-bold">
                    Tone: {activeSeries.tone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DETAIL POPUP: CHARACTER */}
        {activeCharacter && (
          <div className="absolute inset-0 z-30 bg-white/98 backdrop-blur-md p-6 sm:p-8 flex flex-col overflow-y-auto animate-fade-in">
            <button
              type="button"
              onClick={() => setActiveCharacter(null)}
              className="self-end text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-pink-50"
            >
              <X size={24} />
            </button>

            <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-6 mt-2 items-center sm:items-start">
              <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-pink-200 shadow-xl shrink-0 bg-pink-50 ring-4 ring-pink-100">
                <img
                  src={activeCharacter.avatar}
                  alt={activeCharacter.name}
                  onError={handleAvatarError}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-3.5 flex-1 text-center sm:text-left">
                <div>
                  <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start mb-1">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 uppercase">
                      {activeCharacter.role}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                      {activeCharacter.archetype}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Debut {activeCharacter.debutYear}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {activeCharacter.name}
                  </h3>
                  <div className="text-sm text-slate-400 font-medium">
                    {activeCharacter.nativeName}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-pink-50/80 border border-pink-100 text-sm">
                  <div className="text-xs text-slate-400 font-semibold mb-0.5">Series</div>
                  <div className="font-bold text-slate-800">{getSeriesWithRomaji(activeCharacter.seriesTitle, getSeriesRomaji(activeCharacter.seriesId || activeCharacter.seriesTitle))}</div>
                </div>

                <div className="p-3 rounded-2xl bg-rose-50/60 border border-rose-100 text-sm flex items-center gap-2 justify-center sm:justify-start">
                  <Heart size={16} className="text-rose-500 fill-rose-500 shrink-0" />
                  <span className="text-rose-900 font-bold">
                    Coupled with: {activeCharacter.pairingWith}
                  </span>
                </div>

                <div className="space-y-1 italic text-xs text-pink-900 border-l-2 border-pink-400 pl-3 bg-pink-50/40 py-2 rounded-r-xl text-left">
                  "{activeCharacter.quote}"
                </div>

                {activeCharacter.aliases.length > 0 && (
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-400">Also known as: </span>
                    {activeCharacter.aliases.join(', ')}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* DETAIL POPUP: SHIP */}
        {activeShip && (
          <div className="absolute inset-0 z-30 bg-white/98 backdrop-blur-md p-6 sm:p-8 flex flex-col overflow-y-auto animate-fade-in">
            <button
              type="button"
              onClick={() => setActiveShip(null)}
              className="self-end text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-pink-50"
            >
              <X size={24} />
            </button>

            <div className="max-w-2xl mx-auto flex flex-col gap-6 mt-1">
              {/* Dual Avatars Display */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center -space-x-6 sm:-space-x-8">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-pink-100 ring-4 ring-pink-300/60">
                    <img
                      src={activeShip.avatars[0]}
                      alt={activeShip.characters[0]}
                      onError={handleAvatarError}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-pink-100 ring-4 ring-pink-300/60">
                    <img
                      src={activeShip.avatars[1]}
                      alt={activeShip.characters[1]}
                      onError={handleAvatarError}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">
                      {activeShip.shipName}
                    </span>
                    {activeShip.japaneseName && (
                      <span className="text-sm font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded-lg border border-pink-200">
                        {activeShip.japaneseName}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-slate-500 font-semibold">
                    {activeShip.characters[0]} <span className="text-pink-500">×</span> {activeShip.characters[1]}
                  </div>
                  <div className="text-xs text-pink-700 font-bold mt-1">
                    {getSeriesWithRomaji(activeShip.seriesTitle, getSeriesRomaji(activeShip.seriesId || activeShip.seriesTitle))}
                  </div>
                </div>
              </div>

              {/* Status and Dynamics */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {activeShip.isCanon ? (
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200 shadow-sm flex items-center gap-1.5">
                    💍 Canon Relationship (Married/Dating/Confirmed)
                  </span>
                ) : (
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-pink-100 text-pink-800 border border-pink-200 shadow-sm flex items-center gap-1.5">
                    ✨ Iconic Fan-Favorite & Subtext Couple
                  </span>
                )}

                {activeShip.dynamics.map(d => (
                  <span
                    key={d}
                    className="text-xs font-bold px-3 py-1 rounded-full bg-white text-slate-700 border border-pink-200 shadow-sm"
                  >
                    #{d}
                  </span>
                ))}
              </div>

              {/* Relationship Lore */}
              <div className="bg-pink-50/50 border border-pink-200/80 rounded-3xl p-5 sm:p-6 space-y-2.5 shadow-inner">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-pink-700 flex items-center gap-1.5">
                  <Heart size={14} className="text-pink-500 fill-pink-500" />
                  Ship Dynamics & Canonical Story
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {activeShip.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
