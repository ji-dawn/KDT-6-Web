const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DONE: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
const userRouter = require("./routes/user");
app.use("/user", userRouter); // "/user"가 아닌 "/"만 작성해도 가능하나 규모가 커질 경우는 명시해주는 것이 좋다.

// DONE: 404 에러 처리
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});
