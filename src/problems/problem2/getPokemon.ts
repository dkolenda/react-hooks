export const getPokemon = (name: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
    res.json()
  );
};
