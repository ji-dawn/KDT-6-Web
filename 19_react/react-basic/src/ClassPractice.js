import { Component } from "react";
import PropTypes from "prop-types";

class ClassPractice extends Component {
  render() {
    const msg = "콘솔 띄우기 성공!";
    return (
      <div>
        <button onClick={console.log()}>콘솔 메세지</button>
      </div>
    );
  }
}

ClassPractice.defaultProps = {
  text: "이건 기본 text props입니다.",
};

ClassPractice.propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.string,
};

export default ClassPractice;
