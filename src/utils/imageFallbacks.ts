import React from 'react';

export const FALLBACK_COVER = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420"><rect width="300" height="420" fill="%23fdf2f8"/><rect x="15" y="15" width="270" height="390" rx="16" fill="%23fce7f3" stroke="%23f472b6" stroke-width="2" stroke-dasharray="6 6"/><circle cx="150" cy="180" r="50" fill="%23fbcfe8"/><text x="150" y="196" text-anchor="middle" font-size="44">📖</text><text x="150" y="260" text-anchor="middle" font-size="16" fill="%23be185d" font-weight="bold" font-family="sans-serif">Yuri Series</text><text x="150" y="284" text-anchor="middle" font-size="12" fill="%23db2777" font-weight="500" font-family="sans-serif">Cover Artwork</text></svg>`;

export const FALLBACK_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23fdf2f8"/><circle cx="100" cy="100" r="70" fill="%23fce7f3" stroke="%23f472b6" stroke-width="2"/><text x="100" y="112" text-anchor="middle" font-size="44">🌸</text><text x="100" y="145" text-anchor="middle" font-size="12" fill="%23be185d" font-weight="bold" font-family="sans-serif">Heroine</text></svg>`;

export const handleCoverError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  if (target.src !== FALLBACK_COVER) {
    target.onerror = null;
    target.src = FALLBACK_COVER;
  }
};

export const handleAvatarError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const target = e.currentTarget;
  if (target.src.includes('/revision/latest')) {
    target.src = target.src.split('/revision/latest')[0];
    return;
  }
  if (target.src !== FALLBACK_AVATAR) {
    target.onerror = null;
    target.src = FALLBACK_AVATAR;
  }
};
