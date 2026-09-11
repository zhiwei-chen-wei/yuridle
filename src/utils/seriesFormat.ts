import { YURI_SERIES } from '../data/yuriSeries';

/**
 * Returns formatted series title with Romanization if it differs from the main title.
 * e.g. "Bloom Into You (Yagate Kimi ni Naru)" or just "Citrus"
 */
export function getSeriesWithRomaji(title: string, romaji?: string): string {
  if (!romaji || romaji.trim().toLowerCase() === title.trim().toLowerCase()) {
    return title;
  }
  return `${title} (${romaji})`;
}

/**
 * Look up the Romanization for a given series title or ID from YURI_SERIES
 */
export function getSeriesRomaji(seriesIdOrTitle: string): string | undefined {
  const found = YURI_SERIES.find(
    s => s.id === seriesIdOrTitle || s.title.toLowerCase() === seriesIdOrTitle.toLowerCase()
  );
  return found?.romaji;
}

/**
 * Returns `{ title, romaji, hasDifferentRomaji, fullDisplay }`
 */
export function formatSeriesDisplay(series: { title: string; romaji?: string }) {
  const hasDifferentRomaji = Boolean(
    series.romaji && 
    series.romaji.trim().toLowerCase() !== series.title.trim().toLowerCase()
  );
  return {
    title: series.title,
    romaji: series.romaji,
    hasDifferentRomaji,
    fullDisplay: hasDifferentRomaji ? `${series.title} (${series.romaji})` : series.title
  };
}
