import React from "react";
import { getPokemon } from "./getPokemon";

export class P3Oop extends React.Component<any, any> {
  state = {
    pokemons: [],
    pokemonPerPage: 100
  };

  getData = async () => {
    const result = await getPokemon(this.state.pokemonPerPage);
    this.setState({
      pokemons: result.results
    });
  };

  handleChange = (event: any) => {
    this.setState({ pokemonPerPage: parseInt(event.target.value, 10) }, () => {
      this.getData();
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        P3Oop
        <select value={this.state.pokemonPerPage} onChange={this.handleChange}>
          <option value="5">5</option>
          <option value="100">100</option>
          <option value="500">500</option>
        </select>
        <br />
        <ul>
          {this.state.pokemons.map((pokemon: any) => {
            return <li key={pokemon.url}>{pokemon.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
