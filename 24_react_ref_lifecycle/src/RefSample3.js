import React from "react";

class RefSample3 extends React.Component {
  handleFocus = () => {
    console.log(this); // RefSample3 현재 컴포넌트
    console.log(this.myInput.value); // input value 출력

    this.myInput.focus();
  };
  render() {
    return (
      <>
        <p>함수형 컴포넌트에서 버튼을 클릭하면 input에 focusing</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button type="button" onClick={this.handleFocus}>
          focus
        </button>
      </>
    );
  }
}

export default RefSample3;
