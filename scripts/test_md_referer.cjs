const testUrl = 'https://uploads.mangadex.org/covers/af5f2646-cddd-4c4c-b652-96577ed89647/3848315f-7230-46dc-8b95-00625d9d7f27.jpg.512.jpg';

async function test() {
  try {
    const res = await fetch(testUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Referer': 'https://mangadex.org'
      }
    });
    console.log('With referer status:', res.status);
  } catch (e) {
    console.log('Error with referer:', e.message);
  }
}
test();
