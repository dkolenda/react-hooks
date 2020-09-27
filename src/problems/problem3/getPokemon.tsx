export const getPokemon = (limit: number) => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  ).then((res) => res.json());
};
