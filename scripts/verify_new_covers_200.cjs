const testUrls = [
  'https://media.kitsu.app/anime/poster_images/41254/large.jpg',
  'https://media.kitsu.app/anime/poster_images/44206/large.jpg',
  'https://media.kitsu.app/manga/poster_images/54303/large.jpg',
  'https://media.kitsu.app/anime/45323/poster_image/large-42e3bbc961f2a612b31b81453f678970.jpeg',
  'https://media.kitsu.app/anime/poster_images/43107/large.jpg',
  'https://uploads.mangadex.org/covers/52ab10b8-d539-4839-9b31-7937fb08c813/47b42779-8412-423a-95fe-80da1271f2be.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/215e3ced-247e-4f34-8e1a-27b60ffef8ac/d75851aa-7307-485d-aafb-a434e02326fe.jpg.512.jpg',
  'https://media.kitsu.app/manga/poster_images/57563/large.jpg',
  'https://uploads.mangadex.org/covers/4cc14713-e34c-456f-a8a1-a07084240199/ef48be68-651f-4843-9a11-c74e5df4da13.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/af5f2646-cddd-4c4c-b652-96577ed89647/3848315f-7230-46dc-8b95-00625d9d7f27.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/73965527-b393-4f65-9bc3-2439ec44935a/2eb7463e-40e3-4306-ba38-6df573d5e68d.png.512.jpg',
  'https://uploads.mangadex.org/covers/153fa167-9a08-4e67-a82d-c36affddd36c/b8a34ec8-132a-4ab9-8641-e8604b2f56e1.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/f239fcd4-9f7f-4296-9e52-ee5a66a7e938/423f1581-b27b-4e89-8b88-deeb330f5c08.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/7dc8bfc9-876b-4c34-b6e7-4560438095bf/072ed91b-88b1-4e9f-ba1d-936cf21f3265.png.512.jpg',
  'https://uploads.mangadex.org/covers/724dd143-c35c-478a-9cd8-fa8b58eca714/275be978-020f-49bc-8e00-2e831d3a9d3a.jpg.512.jpg',
  'https://media.kitsu.app/manga/poster_images/58651/large.jpg',
  'https://media.kitsu.app/manga/poster_images/40185/large.jpg',
  'https://uploads.mangadex.org/covers/69cac3f9-23cf-4a64-b83b-ad22f9e09669/1d376704-8919-4541-a4d9-880c1f499da2.jpg.512.jpg',
  'https://media.kitsu.app/manga/poster_images/49472/large.jpg',
  'https://uploads.mangadex.org/covers/1de44b9c-29b2-4c21-b4f7-baaa36cebef9/255656d0-ca06-407c-aa1d-ffc713a49fb5.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/d964361f-042a-4c1b-907d-3c907dd50060/ccf6797d-71b6-4236-ac63-2b0fd1b635b1.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/2e71d530-79b7-444d-89c9-29f9534d08d2/9ef31169-1627-43db-ac34-d266b938d687.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/71937147-e3e7-4ba6-9cd9-912b8289223d/8bc43fd7-0e84-4900-8fd2-fe6b0354726b.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/831b12b8-2d0e-4397-8719-1efee4c32f40/0f411c81-14a6-4d59-9e57-869d839c4972.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/ddd44276-89d1-4b8c-89e6-f5ea24e44079/aca50bd4-5e25-4dd8-8291-7ca52ba58bb9.jpg.512.jpg',
  'https://uploads.mangadex.org/covers/0d6867bd-b15c-470f-a40b-b77256b3c866/8415be51-dfca-45c0-a32b-b47027fac4e7.jpg.512.jpg',
  'https://media.kitsu.app/manga/poster_images/58642/large.jpg',
  'https://uploads.mangadex.org/covers/42224017-e415-484f-9cbd-df119472839d/c111eb68-7631-4e6d-8409-eef208fb1424.jpg.512.jpg',
  'https://media.kitsu.app/anime/poster_images/13261/large.jpg'
];

async function testAll() {
  const res = await Promise.all(testUrls.map(u => fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }).then(r => ({ u, status: r.status })).catch(e => ({ u, status: 'ERR' }))));
  const failed = res.filter(r => r.status !== 200);
  console.log(`Tested ${testUrls.length} covers. Successful (200): ${testUrls.length - failed.length}, Failed: ${failed.length}`);
  if (failed.length > 0) console.log('Failed:', failed);
}

testAll();
