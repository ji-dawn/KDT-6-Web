import React, { useState } from "react";

const Prob2 = () => {
  const [visible, setVisible] = useState(true);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h1>실습 풀이 2</h1>
      <h2>{visible && "안녕하세요"}</h2>
      <button onClick={toggle}>{visible ? "사라져라" : "보여라"}</button>
    </>
  );
};
export default Prob2;
