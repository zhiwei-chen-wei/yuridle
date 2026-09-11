async function getChar(name) {
  const query = `
    query ($search: String) {
      Character(search: $search) {
        id
        name { full native }
        image { large medium }
      }
    }
  `;
  const res = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0'
    },
    body: JSON.stringify({ query, variables: { search: name } })
  });
  console.log(res.status);
  const text = await res.text();
  console.log(text.slice(0, 300));
}

getChar('Sarasa');
