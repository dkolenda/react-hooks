import React from "react";

interface IProps {
  title: string;
}

export class P1Oop extends React.Component<IProps, any> {
  componentDidMount() {
    document.title = this.props.title;
  }

  componentWillUnmount() {
    document.title = "Coś tam ...";
  }

  render() {
    return <div>P1Oop</div>;
  }
}
