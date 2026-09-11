async function getChar(name) {
  const res = await fetch(`https://kitsu.io/api/edge/characters?filter[name]=${encodeURIComponent(name)}`);
  const json = await res.json();
  if (json.data && json.data.length > 0) {
    console.log(`[Char] "${name}" ->`, json.data[0].attributes.canonicalName, json.data[0].attributes.image?.original);
  } else {
    console.log(`[Char] "${name}" -> not found`);
  }
}

async function run() {
  await getChar('Hinako Yaotori');
  await getChar('Shiori Oomi');
  await getChar('Shino');
  await getChar('Ren');
}

run();
