const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
  })
);

const userInfo = { id: "banana", pw: "1234" };

app.get("/", (req, res) => {
  // 세션 읽기
  const userSession = req.session.user;
  // user = 'a';
  // user = undefined;
  console.log("req.session >> ", req.session);

  if (userSession !== undefined) {
    res.render("index", { isLogin: true, user: userSession });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

// [Login] 버튼을 눌렀을 때 세션 생성
app.post("/login", (req, res) => {
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    // 세션 생성
    req.session.user = req.body.id;
    console.log("req.session >> ", req.session);
    // 경로 이동
    res.redirect("/");
  } else {
    res.send(
      `<script>
        alert("로그인 실패..🥺");
        document.location.href = "/";
      </script>`
    );
  }
});

app.get("/logout", (req, res) => {
  const userSession = req.session.user;
  console.log("GET /logout | req.session.user >> ", userSession); // 'a'

  if (userSession !== undefined) {
    req.session.destroy((err) => {
      console.log("GET /logout 2 | req.session >> ", req.session); // undefined
      res.redirect("/");
    });
  } else {
    // 유저가 브라우저에 /logout 경로로 직접 접근할 때
    res.send(`
      <script>
        alert('잘못된 접근입니다😨');
        document.location.href = '/';
      </script>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// req 객체
// req.session: 사용자별로 해당 객체 안에 세션 정보 유지됨

// 세션쿠키 설정
// req.session.키 = 값.

// 세션쿠키 사용
// req.session.키.

// 세션 삭제
// req.session.destroy(콜백)
