import React from "react";

class Handler_ex extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: "Hello World",
    };

    this.sayGoodbye = this.sayGoodbye.bind(this);
  }

  sayGoodbye() {
    this.setState({ msg: "Goodbye World!" });
  }

  render() {
    return (
      <>
        <h2>{this.state.msg}</h2>
        <button onClick={this.sayGoodbye}>클릭</button>
      </>
    );
  }
}

export default Handler_ex;
