// 부모 컴포넌트
import { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(5);
  const [visible, setVisible] = useState(true);

  const changeVisible = () => {
    setVisible(!visible);
  };

  const changeNumber = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild number={number} />}
      {/* prop으로 number를 전달 */}
    </>
  );
};

export default LifeCycleFunc;
