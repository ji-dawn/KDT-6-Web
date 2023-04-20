import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Larva from "./Larva";
import MyInfo from "./MyInfo";
import Book from "./Book";
import Prob1 from "./Prob1";
import Prob1 from "./Prob2";
import "./App.css";
import StatePractice from "./StatePractice";

function App() {
  const name = "나비";
  const animal = "고양이";
  const a = "8";
  const b = "7";
  const title = "Hello World";
  return (
    <>
      {/* <Larva />
      <ClassComponent name="홍길동" age="13" />
      <ClassComponent name="성춘향" age="14" />
      <FunctionComponent name="둘리" age="300" />
     */}

      <div>
        이것은 div입니다
        <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      </div>
      <h2>제 반려 동물의 이름은 {name}입니다.</h2>
      <h2>
        {name}는 {animal}입니다.
      </h2>
      <h2>3 + 5 == 8</h2>
      <h2>{3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</h2>
      <h2>{a > b && "a가 b보다 큽니다"}</h2>
      <div className="test">{title}</div>
      <br />
      <form>
        <label>아이디 : </label>
        <input className="input" />
        <br />
        <label>비밀번호 : </label>
        <input className="input" />
      </form>
      <br />
      <div className="color-container">
        <div className="color red"></div>
        <div className="color orange"></div>
        <div className="color yellow"></div>
        <div className="color green"></div>
        <div className="color blue"></div>
        <div className="color navy"></div>
        <div className="color purple"></div>
      </div>
      <MyInfo />
      <Book />
      <ClassComponent />
      <FunctionComponent />
      <StatePractice />
      <Prob1 />
      <Prob2 />
    </>
  );
}

export default App;
