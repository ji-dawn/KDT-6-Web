import { useRef } from "react";

const RefSample2 = () => {
  // 1. useRef()를 이용해 로컬 변수 만들기
  const id = useRef(1);
  console.log(id);

  const plusId = () => {
    // id 값 증가

    // 콘솔 찍기
    id.current = id.current + 1;
    console.log(id.current);
  };

  const minusId = () => {
    // id 값 감소

    // 콘솔 찍기
    id.current = id.current - 1;
    console.log(id.current);
  };

  return (
    <>
      <h1>{id.current}</h1>
      <button type="button" onClick={plusId}>
        plus ref
      </button>
      <button type="button" onClick={minusId}>
        minus ref
      </button>
    </>
  );
};

export default RefSample2;
