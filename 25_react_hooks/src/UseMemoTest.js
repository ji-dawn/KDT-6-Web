import { useState, useMemo } from "react";
// useMemo()
// "수행한 연산의 결과값을 기억"함으로써 계산을 초소화

// 평균값 계산 함수
// 숫자를 [등록] 버튼을 클릭할 때 뿐만 아니라
// input 내용을 수정할 때도 getAverage 함수가 호출되고 있음
const getAverage = (numbers) => {
  console.log("평균값 계산 중...");

  // numbers가 빈 배열이라면 평균값으로 0 반환
  if (numbers.length === 0) return 0;

  // numbers 배열에 원소를 모두 합
  const sum = numbers.reduce((a, b) => a + b);

  // 평균값 계산하여 반환
  return sum / numbers.length;
};

const UseMemoTest = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  // [after] useMemo hook 적용
  // 렌더링 과정에서 list 값이 변경될 때만 callback 함수를 실행
  const avg = useMemo(() => {
    return getAverage(list);
  }, [list]);

  const onInsert = () => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("");
  };
  return (
    <>
      <h1>useMemo hook</h1>
      <input type="number" value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((li, index) => {
          return <li key={index}>{li}</li>;
        })}
      </ul>
      {/* [before] */}
      {/* <h2>평균값 : {getAverage(list)}</h2> */}
      {/* [after] */}
      <h2>평균값 : {avg}</h2>
    </>
  );
};

export default UseMemoTest;
