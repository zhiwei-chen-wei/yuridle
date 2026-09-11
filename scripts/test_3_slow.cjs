const urls = [
  { id: 'ajisai-sena', url: 'https://static.wikia.nocookie.net/yuripedia/images/5/50/AjiSena.png/revision/latest/scale-to-width-down/327?cb=20220318013213' },
  { id: 'futakao', url: 'https://static.wikia.nocookie.net/revuestarlight/images/c/c8/Futaba_Isurugi_School_Uniform.png/revision/latest/scale-to-width-down/194?cb=20180726154947' },
  { id: 'rinku-maho', url: 'https://static.wikia.nocookie.net/d4dj/images/d/d9/Rinku-illust-new.png/revision/latest/scale-to-width-down/400?cb=20200207041811' }
];

async function check() {
  for (const item of urls) {
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(8000) });
      console.log(item.id, res.status);
    } catch (e) {
      console.log(item.id, 'ERR', e.message);
    }
  }
}
check();
