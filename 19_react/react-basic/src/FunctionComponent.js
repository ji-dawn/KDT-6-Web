import PropTypes from "prop-types";
import React, { useState } from "react";

function FunctionComponent({ name, age }) {
  // const state = useState();
  // const [변수, 함수] = useState(); : 배열분해할당으로 사용
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("안녕하세요");
  const [bool, setBool] = useState(false);
  // console.log(props);
  // props = { name: "둘리", age: "400" };
  const onClick = () => {
    setCounter(counter + 1);
    console.log("클릭됨");
  };
  const enter = () => {
    setText("입장하였습니다.");
  };
  const exit = () => {
    setText("퇴장하였습니다.");
  };
  return (
    <div>
      <h1>hello world, FunctionComponent</h1>
      <h5>{counter}</h5>
      <button onClick={onClick}>클릭</button>
      <h5>{name}</h5>
      <h5>{age}</h5>
      <div>{text}</div>
      <button onClick={enter}>입장</button>
      <button onClick={exit}>퇴장</button>
    </div>
  );
}

// const FunctionComponent = () = > {}

FunctionComponent.defaultProps = {
  name: "김지효",
  age: "11",
};

FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default FunctionComponent;
