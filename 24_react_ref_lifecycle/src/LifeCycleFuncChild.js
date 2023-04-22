// 자식 컴포넌트
import { useEffect, useState } from "react";

// 매개변수에서도 구조분해할당이 가능
const LifeCycleFuncChild = ({ number }) => {
  // console.log(props); // { number:5 }
  // const { number } = props;
  const [text, setText] = useState("");

  // useEffect(() => {
  //   // mount 시점에 실행. 어떤 컴포넌트가 나타날 때
  //   console.log("mount!");

  //   return () => {
  //     // unmount 시점에 실행. 어떤 컴포넌트가 사라질 때 혹은 숨길 때
  //     console.log("unmount!");
  //   };
  // }, []);

  // // 배열 없이 콜백함수만 사용할 때 : mount & update 시점에 실행
  // useEffect(() => {
  //   console.log("mount or update!");
  // });

  // text state가 바뀔 때마다 실행
  useEffect(() => {
    console.log("update!");
  }, [text]);

  return (
    <>
      <p>
        LifeCycleFuncChild <b>{number}</b>
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;
