async function searchKitsuChar(name) {
  const res = await fetch(`https://kitsu.io/api/edge/characters?filter[name]=${encodeURIComponent(name)}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const json = await res.json();
  if (json.data && json.data.length > 0) {
    console.log(name, json.data[0].attributes.canonicalName, json.data[0].attributes.image?.original);
  } else {
    console.log(name, 'not found');
  }
}

searchKitsuChar('Sarasa Watanabe');
searchKitsuChar('Ai Narata');
