async function searchKitsu(query) {
  try {
    const res = await fetch(`https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(query)}&page[limit]=3`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const json = await res.json();
    if (json.data && json.data.length > 0) {
      json.data.forEach(d => {
        console.log(`[Kitsu] "${query}" -> id: ${d.id}, title: "${d.attributes.canonicalTitle}", cover: ${d.attributes.posterImage?.large}`);
      });
    } else {
      console.log(`[Kitsu] "${query}" -> not found`);
    }
  } catch (e) {
    console.log(`[Kitsu] "${query}" error:`, e.message);
  }
}

async function run() {
  await searchKitsu('This Monster Wants to Eat Me');
  await searchKitsu('Destroy It All And Love Me In Hell');
  await searchKitsu('Kill Me Now');
  await searchKitsu('My Food Seems To Be Very Cute');
  await searchKitsu('Night Owls');
}

run();
