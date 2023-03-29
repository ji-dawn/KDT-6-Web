// node_modules의 express를 가져옴
const express = require("express");
const app = express();
const PORT = 8000;

// view engine에 ejs 등록
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views")); // ejs를 담을 views 폴더 경로 설정
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식로 데이터를 주고 받음

// routing : 경로 설정
// 브라우저에서 어떤 url로 접속했을 때 어떤 페이지를 보여줄 것인가

// ex) localhost:PORT/ 접속했을 때, index.ejs를 보여줌
app.get("/", function (req, res) {
  // views/index.ejs 파일을 찾아 응답/렌더링
  const myTitle = "폼 실습을 ~~";
  // res.render("index", { title: "폼 실습을 해보자" });
  res.render("index", { title: myTitle, name: "Ji" });
});

// // Front에서 submit되면
// app.get("/getForm", function (req, res) {
//   // console.log(req);
//   console.log(req.query); // { id: 'wlgy33', pw: 'sdkjfsj' }
//   res.send("get 요청 성공");
// });

// app.post("/postForm", function (req, res) {
//   console.log(req.body);
//   res.send("post 요청 성공");
// });

app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("get 요청 성공");
  res.render("result", {
    title: "GET 요청 form 결과 확인하기",
    userInfo: req.query,
  });
});

app.post("/postForm", function (req, res) {
  console.log(req.body);
  // res.send("post 요청 성공");
  res.render("result", {
    title: "POST 요청 form 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log("웹 서버 실행");
  console.log(`http://localhost.${PORT}`);
});
