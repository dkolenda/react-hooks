import React from "react";

interface IProps {
  callback: () => void;
  time: number;
}

export class P4Oop extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Popup
          callback={() => {
            console.log("Popup");
          }}
          time={3000}
        />
      </div>
    );
  }
}

class Popup extends React.Component<any, any> {
  interval: number;

  componentDidMount() {
    this.interval = setInterval(this.props.callback, this.props.time);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>P4Oop</div>;
  }
}
