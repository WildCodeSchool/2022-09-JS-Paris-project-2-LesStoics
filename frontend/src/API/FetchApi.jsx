async function FetchApi(ID) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ID}`
  );
  const data = await response.json();
  return data;
}
export default FetchApi;
