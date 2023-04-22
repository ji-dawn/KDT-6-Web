import { useState } from "react";

// ver 1
// const Alphabet = () => {
//   const [alphabet, setAlphabet] = useState(["a", "p", "p", "l", "e"]);

//   console.log(alphabet); // ["a", "p", "p", "l", "e"]
//   return (
//     <>
//       <ol>
//         {alphabet.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ol>
//     </>
//   );
// };

// ver2
const Alphabet = () => {
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "p" },
    { id: 3, alpha: "p" },
    { id: 4, alpha: "l" },
    { id: 5, alpha: "e" },
  ]);
  // inputAlpha state : input에 넣는 값에 대한 상태
  const [inputAlpha, setInputAlpha] = useState("");

  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) return;

    // concat() : 인자로 웆어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
    const newAlphabet = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });
    setAlphabet(newAlphabet); // alphabet 리스트 상태 업데이트
    setInputAlpha("");
  };

  // 삭제 기능에는 filter()를 사용
  // filter()
  // 콜백함수의 조건을 통과하는 모든 요소를 모아 "새로운 배열"로 반환
  // true 요소 유지, false 요소 버림
  //  => alphabet state에서 매개변수로 받아오는 id와
  //     배열 각 원소의 id가 같은 경우를 제외하고 나머지를 모두 새로운 배열에 저장
  const deleteAlpha = (id) => {
    const newAlpha = alphabet.filter((obj) => obj.id !== id);
    setAlphabet(newAlpha);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") addAlpha();
  };

  return (
    <>
      {/* input의 value값을 변경하기 위해서는 onChange가 필수. 
      state이기 때문에 set 함수가 아니면 변경할 수 없기 때문이다. */}
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {alphabet.map((obj) => (
          <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>
            {obj.alpha}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Alphabet;
