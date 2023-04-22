import { useRef } from "react";

const RefSample1 = () => {
  // 1. ref 객체 만들기
  const inputRef = useRef();

  const handleFocus = () => {
    // 3. useRef()로 만든 객체의 current 값으로 접근
    console.log(inputRef.current);

    // input에 focus 추가
    // focus() : 지정된 html 요소에 포커스 설정
    inputRef.current.focus();
  };

  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };

  return (
    <>
      <p>함수형 컴포넌트에서 버튼을 클릭하면 input에 focusing</p>
      {/* 2. 직접 접근해야 하는 DOM 요소에 ref prop 설정 */}
      <input type="text" ref={inputRef} />
      <button type="button" onClick={handleFocus}>
        focus
      </button>
      <button type="button" onClick={handleDisabled}>
        disabled
      </button>
    </>
  );
};

export default RefSample1;
