const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 기본적으로 require() 메서드는 파일을 불러와야 하나
// 폴더까지만 접근할 경우 자동으로 index.js 를 찾아감
const indexRouter = require("./routes");
app.use("/", indexRouter);
// => '/~~~' 모든 라우터를 /routes/index.js에 정의했으니
// /routes/index.js 를 읽어보면 된다.

app.get("*", (req, res) => {
  // res.send('404 Error! 잘못된 주소 형식입니다.');
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
