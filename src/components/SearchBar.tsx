import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { sound } from '../utils/sound';
import { handleAvatarError } from '../utils/imageFallbacks';

export interface SearchOption {
  id: string;
  title: string;
  romaji?: string;
  subtitle?: string;
  badge?: string;
  avatar?: string;
  aliases?: string[];
}

interface SearchBarProps {
  options: SearchOption[];
  alreadyGuessedIds: string[];
  placeholder?: string;
  onSelect: (option: SearchOption) => void;
  disabled?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  options,
  alreadyGuessedIds,
  placeholder = 'Search Yuri title or character...',
  onSelect,
  disabled = false
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filtered = options.filter(opt => {
    if (alreadyGuessedIds.includes(opt.id)) return false;
    if (!query.trim()) return true;

    const q = query.toLowerCase().trim();
    const matchTitle = opt.title.toLowerCase().includes(q);
    const matchRomaji = opt.romaji?.toLowerCase().includes(q);
    const matchAliases = opt.aliases?.some(a => a.toLowerCase().includes(q));

    return matchTitle || matchRomaji || matchAliases;
  }).slice(0, 8);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (opt: SearchOption) => {
    sound.playClick();
    onSelect(opt);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto z-40">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-pink-400">
          <Search size={19} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          disabled={disabled}
          onChange={e => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={disabled ? 'Round completed' : placeholder}
          className="w-full pl-11 pr-12 py-3.5 bg-white text-slate-800 placeholder:text-slate-400 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-100 shadow-sm transition-all text-sm sm:text-base font-medium"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
          >
            <X size={17} />
          </button>
        )}
      </div>

      {isOpen && !disabled && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 mt-2 bg-white border border-pink-200 rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto divide-y divide-pink-50 z-50 ring-1 ring-pink-100/50"
        >
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-sm text-slate-400 font-medium">
              No matching Yuri found. Try Romaji or English title!
            </div>
          ) : (
            filtered.map((opt, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                    isSelected
                      ? 'bg-pink-50 text-pink-900'
                      : 'hover:bg-pink-50/50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    {opt.avatar && (
                      <img
                        src={opt.avatar}
                        alt=""
                        onError={handleAvatarError}
                        className="w-9 h-9 rounded-xl object-cover object-top border border-pink-100 shrink-0 bg-pink-50"
                      />
                    )}
                    <div className="truncate min-w-0 flex-1">
                      <div className="font-bold text-sm text-slate-800 truncate flex items-baseline gap-1.5 flex-wrap">
                        <span className="truncate">{opt.title}</span>
                        {opt.romaji && opt.romaji.toLowerCase() !== opt.title.toLowerCase() && (
                          <span className="text-xs font-semibold text-pink-600 shrink-0">
                            ({opt.romaji})
                          </span>
                        )}
                      </div>
                      {opt.subtitle && (
                        <div className="text-xs text-slate-500 font-medium truncate">
                          {opt.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  {opt.badge && (
                    <span className="shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">
                      {opt.badge}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};
