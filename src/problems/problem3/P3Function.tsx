import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { getPokemon } from "./getPokemon";

export const P3Function = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonPerPage, setPokemonPerPage] = useState(100);

  useEffect(() => {
    (async () => {
      const result = await getPokemon(pokemonPerPage);
      setPokemons(result.results);
    })();
  }, [pokemonPerPage]);

  const handleChange = useCallback((event) => {
    setPokemonPerPage(parseInt(event.target.value, 10));
  }, []);

  return (
    <div>
      P3Function
      <select value={pokemonPerPage} onChange={handleChange}>
        <option value="5">5</option>
        <option value="100">100</option>
        <option value="500">500</option>
      </select>
      <br />
      <ul>
        {pokemons.map((pokemon: any) => {
          return <li key={pokemon.url}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};
