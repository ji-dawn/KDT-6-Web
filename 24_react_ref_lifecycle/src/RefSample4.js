import React from "react";

class RefSample4 extends React.Component {
  // 1. createRef()로 객체 생성
  myInput = React.createRef();
  handleFocus = () => {
    // 3. current 이용해서 DOM 요소 접근
    console.log(this.myInput);

    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>함수형 컴포넌트에서 버튼을 클릭하면 input에 focusing</p>
        {/* 2. ref props로 myInput 연결 */}
        <input type="text" ref={this.myInput} />
        <button type="button" onClick={this.handleFocus}>
          focus
        </button>
      </>
    );
  }
}

export default RefSample4;
