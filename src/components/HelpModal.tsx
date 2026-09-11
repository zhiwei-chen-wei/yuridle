import React from 'react';
import { X, HelpCircle, Heart, ArrowUp, ArrowDown } from 'lucide-react';
import { sound } from '../utils/sound';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white border border-pink-200 rounded-3xl p-6 sm:p-7 shadow-2xl text-slate-800">
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-pink-50 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex p-3 bg-pink-100 rounded-2xl text-pink-600 mb-2">
            <HelpCircle size={26} />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            How to Play Yuridle 🌸
          </h2>
          <p className="text-xs text-slate-500 font-medium">The Girls' Love guessing game for anime & manga fans</p>
        </div>

        <div className="space-y-5 text-sm">
          {/* Objective */}
          <div>
            <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <Heart size={16} className="text-pink-500 fill-pink-500" />
              Objective
            </h3>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              Guess the mystery Yuri work or character in <strong>6 attempts or fewer</strong>. With each guess, the color of the tiles will reveal how close you are to the answer.
            </p>
          </div>

          {/* Color Meanings */}
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Tile Color Guide</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                  ✓
                </span>
                <div className="text-xs">
                  <span className="font-bold text-emerald-900">Green: Exact Match</span>
                  <p className="text-emerald-700">This attribute is an exact match for the secret Yuri title.</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-sm">
                  ~
                </span>
                <div className="text-xs">
                  <span className="font-bold text-amber-900">Orange/Yellow: Close or Partial Match</span>
                  <p className="text-amber-800">
                    For <strong>Release Year</strong>: within <strong>±2 years</strong> of the target!
                    <br />
                    For <strong>Tropes</strong>: shares at least one common relationship dynamic.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="w-8 h-8 rounded-xl bg-slate-300 text-slate-600 flex items-center justify-center font-extrabold text-sm shrink-0">
                  ✕
                </span>
                <div className="text-xs">
                  <span className="font-bold text-slate-700">Gray: No Match</span>
                  <p className="text-slate-500">This attribute is completely different.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Hints */}
          <div>
            <h3 className="font-bold text-slate-900 mb-1.5">Year Arrows</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-2xl bg-pink-50/70 border border-pink-100 flex items-center gap-2">
                <ArrowUp size={16} className="text-pink-600 shrink-0 stroke-[3]" />
                <span className="text-slate-700"><strong>Higher</strong>: Mystery title released in a later year.</span>
              </div>
              <div className="p-3 rounded-2xl bg-pink-50/70 border border-pink-100 flex items-center gap-2">
                <ArrowDown size={16} className="text-pink-600 shrink-0 stroke-[3]" />
                <span className="text-slate-700"><strong>Lower</strong>: Mystery title released in an earlier year.</span>
              </div>
            </div>
          </div>

          {/* Game Modes */}
          <div>
            <h3 className="font-bold text-slate-900 mb-1.5">8 Unique Game Modes 🌸</h3>
            <ul className="space-y-2 text-xs text-slate-600 list-none font-medium">
              <li className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-bold text-slate-900">🌸 Series Mode:</span> Guess the Yuri work using 6 comparative attributes (Medium, Year ⬆️/⬇️, Origin, Setting, Trope, Status).
              </li>
              <li className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-bold text-slate-900">👥 Character Mode:</span> Identify iconic Yuri heroines and love interests by hair color, role, archetype, and debut year.
              </li>
              <li className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-bold text-slate-900">🖼️ Cover Blur Mode:</span> Recognize the Yuri work from a heavily blurred cover that progressively sharpens with each guess.
              </li>
              <li className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-bold text-slate-900">💬 Quote Mode:</span> Read memorable, romantic, or dramatic Yuri lines in a manga speech bubble and guess who said it!
              </li>
              <li className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-bold text-slate-900">🧩 Emoji Riddle Mode:</span> Decipher 4 curated thematic emojis that tell the story and motifs of a mystery Yuri work.
              </li>
              <li className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-bold text-slate-900">💖 Ship Mode:</span> Guess the iconic Yuri couple through relationship dynamics, canon status, initial hints, and dual avatar reveals!
              </li>
              <li className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-bold text-slate-900">👤 Silhouette Mode:</span> Identify the mystery Yuri heroine from her shadow silhouette as clues and color outlines emerge!
              </li>
              <li className="p-2.5 rounded-xl bg-pink-50/50 border border-pink-100">
                <span className="font-bold text-slate-900">🎵 Theme Song Mode:</span> Guess the Yuri anime from its iconic Opening, Ending, or Insert theme song with romantic lyrics and melody previews!
              </li>
            </ul>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="mt-6 w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-2xl shadow-md shadow-pink-500/20 transition-all hover:scale-[1.01] active:scale-95"
        >
          Got it, let's play! 🌸
        </button>
      </div>
    </div>
  );
};
