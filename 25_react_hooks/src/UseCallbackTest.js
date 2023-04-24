import { useState, useCallback } from "react";

// useCallback()
// 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면
// 함수를 memoization(기억)해서 컴포넌트가 다시 렌더링돼도
// 기억하고 있는 기존 함수를 그대로 사용

// useCallback() vs useMemo()
// useCallback()은 useMemo()를 기반으로 만들어져 동작은 유사하다.
// 단, "함수를 사용할 때" 편의성을 증진시킨 hook
// const memoizedCallback = useCallback(function, deps)
// const memoizedValue = useMemo(() => function, deps)

// 공통점 : 성능 최적화
// 차이점
// - useMemo : "값"을 재사용
// => 값의 재사용을 위해 전달된 함수를 실행하고 "그 결과"를 메모이제이션
// - useCallback : "함수"를 재사용
// => "함수의 재사용"을 위해 전달된 "함수 자체"를 메모이제이션

const UseCallbackTest = () => {
  const [text, setText] = useState("");

  // useCallback을 사용하지 않으면 변경될 때마다 onChangeText를 호출
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h1>UseCallbackTest</h1>
      <input onChange={onChangeText} />
      <h2>작성한 값 : {text || "없음"}</h2>
    </>
  );
};
export default UseCallbackTest;
