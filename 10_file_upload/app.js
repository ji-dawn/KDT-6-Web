const express = require("express");
const app = express();
const PORT = 8000;

// multer 미들웨어 사용하기
const multer = require("multer");
const path = require("path"); // path : 내장모듈. 파일/폴더 경로를 쉽게 설정
const upload = multer({
  dest: "uploads/", // dest: 업로드할 파일 경로 지정
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(("/uploads", express.static(__dirname + "/uploads")));

app.get("/", function (req, res) {
  res.render("index");
});

// single() : 하나의 파일 업로드할 때 사용
// single()의 매개변수 : input의 name과 일치
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file); // 업로드한 파일 정보
  /*
{
  fieldname: 'userfile', // form에 정의한 name
  originalname: 'dog1.jpeg', // 사용자가 업로드한 파일명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'image/jpeg', // 파일 mime 타입
  destination: 'uploads/', // 파일 저장할 경로(폴더)
  filename: '4d707d719572400a9add9a5fcac11235', // destination에 저장된 파일명
  path: 'uploads/4d707d719572400a9add9a5fcac11235', // 업로드된 파일의 전체 경로
  size: 215693 // 파일 크기 (byte)
}
  */
  console.log(req.body); // form에 입력한 정보. input title에 입력한 값
  res.send("upload 완료");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
