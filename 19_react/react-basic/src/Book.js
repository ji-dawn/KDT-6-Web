import PropTypes from "prop-types";
import cover from "./cover.jpeg";

function Book({ title, author, price, type }) {
  return (
    <div className="book-container">
      <h2 className="book-title">이번주 베스트셀러</h2>
      <img src={cover} alt="cover" />
      <h2>{title}</h2>
      <p>저자: {author}</p>
      <p>판매가: {price}원</p>
      <p>구분: {type}</p>
    </div>
  );
}

Book.defaultProps = {
  title: "나의 하루는 4시 50분에 시작된다",
  author: "김유진",
  price: "13,500",
  type: "자기계발서",
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
};

export default Book;
