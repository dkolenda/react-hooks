import React from "react";
import { getPokemon } from "./getPokemon";

export class P2Oop extends React.Component<any, any> {
  state = {
    pokemon: null
  };

  getData = async () => {
    const result = await getPokemon("ditto");
    this.setState({
      pokemon: result
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return <div>P2Oop Pokemon id {this.state.pokemon?.id}</div>;
  }
}
