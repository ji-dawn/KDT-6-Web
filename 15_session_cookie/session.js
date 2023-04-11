const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
// dotenv : 환경변수를 파일에 저장해놓고 접근할 수 있게 돕는 모듈
const app = express();
const PORT = 8000;

// .env 파일에 작성된 값들을 process.env.xxx로 접근
dotenv.config();
console.log(process.env.SECRET_KEY);

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(session("세션모듈_옵션"))
// - secret : 세션을 발급할 때 사용되는 키 (임의로 변조하는 것을 방지)
// - resave : 세션에 수정사항이 생기지 않더라도 매 요청(request)마다 다시 저장할 건지
// - saveUnitinitialized : 세션에 저장할 내역에 없더라도 처음부터 세션 생성할지
// - secure : https 프로토콜에서만 세션을 주고 받을 건지
app.use(
  session({
    secret: process.env.SECRET_KEY, // 필수 옵션. 세션 암호화할 때 사용되는 키
    resave: false,
    saveUninitialized: false, // 일반적으로 false
  })
);

// 세션 설정
// req.session.키 = 값

// 세션 읽기(사용)
// req.session.키

// 세션 삭제
// req.session.destroy(callback 함수)

app.get("/", (req, res) => {
  res.render("session");
});

app.get("/set", (req, res) => {
  // 세션 설정
  req.session.name = "홍길동";
  // 응답
  res.send("세션 설정 완료");
});

app.get("/name", (req, res) => {
  // 세션 읽기(사용)
  // req.session.키
  // req.sessionID : 현재 세션의 ID (서버가 클라이언트를 구별하기 위해 보여하는 고유 값))
  // => 브라우저 단위로 다른 값을 가진다.(safari, edge, chrome 등)
  res.send({
    id: req.sessionID,
    key: req.session.name,
  });
});

app.get("/destroy", (req, res) => {
  // req.session.destroy(세션 삭제 시 호출할 콜백 함수)
  // => 세션을 완전히 삭제하고, 웹 사이트 접속할 때마다 새로운 sessionID를 할당
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    res.send("세션 삭제 완료");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
