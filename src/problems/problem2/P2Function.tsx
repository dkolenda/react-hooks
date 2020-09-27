import React from "react";
import { useEffect, useState } from "react";
import { getPokemon } from "./getPokemon";

export const P2Function = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getPokemon("ditto");
      setPokemon(result);
    })();
  }, []);

  return <div>P2Function Pokemon id {pokemon?.id}</div>;
};
