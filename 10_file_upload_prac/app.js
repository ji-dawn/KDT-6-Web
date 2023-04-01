const express = require("express");
const app = express();
const PORT = 8000;

const multer = require("multer");
const path = require("path");

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      // done(null, path.basename(file.originalname, ext) + ext);
      done(null, req.body.userId + ext); // 아이디.확장자
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", function (req, res) {
  res.render("index");
});

// single() : 하나의 파일 업로드할 때 사용
// single()의 매개변수 : input의 name과 일치
app.post("/result", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file); // 업로드한 파일 정보
  console.log(req.body); // form에 입력한 정보. input title에 입력한 값
  console.log(req.file.path);
  res.render("result", {
    src: req.file.path,
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
