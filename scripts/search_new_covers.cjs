const searchList = [
  { id: 'kageki-shojo', q: 'Kageki Shoujo!!', type: 'anime' },
  { id: 'shimeji-simulation', q: 'Shimeji Simulation', type: 'manga' },
  { id: 'my-girlfriends-not-here-today', q: 'Kyou wa Kanojo ga Inai kara', type: 'manga' },
  { id: 'sheep-princess', q: 'Hitsuji Hime no Ookami-san', type: 'manga' },
  { id: 'hello-melancholic', q: 'Hello, Melancholic!', type: 'manga' },
  { id: 'futari-monologue', q: 'Futari Monologue', type: 'manga' },
  { id: 'superwomen-in-love', q: 'Superwomen in Love', type: 'manga' },
  { id: 'kitanai-kimi', q: 'Kitanai Kimi ga Ichiban Kawaii', type: 'manga' },
  { id: 'catulus-syndrome', q: 'Catulus Syndrome', type: 'manga' },
  { id: 'saeki-sayaka', q: 'Regarding Saeki Sayaka', type: 'manga' },
  { id: 'crown-handler', q: 'Princess Principal: Crown Handler', type: 'anime' },
  { id: 'wataten-movie', q: 'Watashi ni Tenshi ga Maiorita! Precious Friends', type: 'anime' },
  { id: 'kin-iro-movie', q: 'Kin-iro Mosaic Thank You!!', type: 'anime' }
];

async function checkCovers() {
  for (const s of searchList) {
    try {
      const res = await fetch(`https://kitsu.io/api/edge/${s.type}?filter[text]=${encodeURIComponent(s.q)}&page[limit]=2`);
      const json = await res.json();
      const first = json.data?.[0];
      if (first) {
        console.log(`${s.id} => [${first.attributes.canonicalTitle}] : ${first.attributes.posterImage?.large}`);
      } else {
        console.log(`${s.id} => NOT FOUND`);
      }
    } catch (e) {
      console.log(`${s.id} => ERROR: ${e.message}`);
    }
  }
}

checkCovers();
