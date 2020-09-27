import React from "react";

export class P5Oop extends React.Component<any, any> {
  timer: number;

  state = {
    test: 0
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      alert(this.state.test);
    }, 4000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        P5Oop
        <button
          onClick={() => {
            this.setState((oldState: any) => {
              return {
                test: oldState.test + 1
              };
            });
          }}
        >
          Podbij {this.state.test}
        </button>
      </div>
    );
  }
}
