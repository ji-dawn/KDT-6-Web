const express = require("express");
const app = express();
const PORT = 8000;

// multer 미들웨어 사용하기
const multer = require("multer");
const path = require("path"); // path : 내장모듈. 파일/폴더 경로를 쉽게 설정
// const upload = multer({
//   dest: "uploads/", // dest: 업로드할 파일 경로 지정
// });

// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done: callback
      // destination : 경로 설정
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // ex) apple.png 파일을 업로드
      const ext = path.extname(file.originalname); // file.originalname에서 '확장자' 추출 => png 저장
      // patth.basename(file.originalname, ext) => apple (확장자 제거한 파일이름만 저장)
      // Date.now() => 현재 시간 (1680309367543)
      // 1970년 1월 1일 0시 0분 기준으로 현재까지 경과한 ms
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // [파일명 + 현재시간.확장자] 형식으로 파일 업로드
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
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
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
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

// array() : 여러 개의 파일을 한 번에 업로드할 때 사용
app.post("/upload/array", uploadDetail.array("userfile"), (req, res) => {
  console.log(req.files); // 3개를 업로드했기 때문에 [{}, {}, {}]
  console.log(req.body); // { title: 'dogs 업로드' }
  res.send("여러 개의 파일 업로드 완료");
});

// fields() : 여러 파일을 각각의 input에 업로드할 때 사용
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files); // { userfile1: [{}], userfile2: [{}]} 형태로 출력
    console.log(req.body); // {} title1: 'dog1 업로드', title2: 'dog2 업로드' }
    res.send("각각 여러 파일 업로드 완료");
  }
);

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
