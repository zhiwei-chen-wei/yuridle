const fs = require('fs');

const series = eval(fs.readFileSync('src/data/yuriSeries.ts', 'utf8').replace(/import[\s\S]*?=\s*/, ''));
const songs = eval(fs.readFileSync('src/data/yuriSongs.ts.bak', 'utf8').replace(/import[\s\S]*?=\s*/, ''));

const animeSeries = series.filter(s => s.medium === 'Anime');
const songSeriesIds = new Set(songs.map(s => s.seriesId));

const animeWithoutSongs = animeSeries.filter(s => !songSeriesIds.has(s.id));
console.log(`Anime series without songs (${animeWithoutSongs.length}):`);
animeWithoutSongs.forEach(s => console.log(`- id: "${s.id}", title: "${s.title}", year: ${s.releaseYear}`));
