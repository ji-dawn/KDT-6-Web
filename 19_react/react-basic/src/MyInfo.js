import { Component } from "react";
import PropTypes from "prop-types";

class MyInfo extends Component {
  render() {
    const { food } = this.props;
    return (
      <div>
        <div>내가 좋아하는 음식은 {food}</div>
      </div>
    );
  }
}

MyInfo.defaultProps = {
  food: "김밥",
};

MyInfo.propTypes = {
  food: PropTypes.string.isRequired,
};

export default MyInfo;
