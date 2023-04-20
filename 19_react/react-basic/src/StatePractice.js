// import React from "react";
import React, { useState } from "react";

// class StatePractice extends React.Component {
//   state = {
//     count: 0,
//   };

//   up = () => {
//     this.setState({ count: this.state.count + 2 });
//   };
//   down = () => {
//     this.setState({ count: this.state.count + -1 });
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h5>{count}</h5>
//         <button onClick={() => this.up()}>+2</button>
//         <button onClick={() => this.down()}>-1</button>
//       </div>
//     );
//   }
// }

function StatePractice() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("사라져라");
  const [color, setColor] = useState("black");
  const [visibility, setDisplay] = useState("visible");
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 2);
  };
  const setRed = () => {
    setColor("red");
    setText("빨간색 글씨");
  };
  const setBlue = () => {
    setColor("blue");
    setText("파란색 글씨");
  };
  const erase = () => {
    if (visibility === "visible") {
      setDisplay("hidden");
      setText("보여라");
    } else {
      setDisplay("visible");
      setText("사라져라");
    }
  };
  return (
    <div>
      <h5>{count}</h5>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h2 style={{ color: color }}>{text}</h2>
      <button onClick={setRed}>빨간색</button>
      <button onClick={setBlue}>파란색</button>
      <h2 style={{ visibility: visibility }}>안녕하세요</h2>
      <button onClick={erase}>{text}</button>
    </div>
  );
}

export default StatePractice;
