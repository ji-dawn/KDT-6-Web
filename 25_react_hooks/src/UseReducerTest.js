import { useReducer } from "react";

const reducer = (prevNumber, action) => {
  // prevNumber : 현재 state
  // action : dispatch에서 인자로 받고 있는 현재 action값
  switch (action.type) {
    case "INCREMENT":
      return { value: prevNumber.value + 1 };
    case "DECREMENT":
      return { value: prevNumber.value - 1 };
    case "RESET":
      return { value: 7 };
    default:
      return { value: prevNumber.value };
  }
};

const UseReducerTest = () => {
  const [number, dispatch] = useReducer(reducer, { value: 7 });

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h1>useReducer hook</h1>
      <h2>{number.value}</h2>

      <button onClick={increment}>PLUS</button>
      <button onClick={decrement}>MINUS</button>
      <button onClick={reset}>RESET</button>
    </>
  );
};

export default UseReducerTest;
