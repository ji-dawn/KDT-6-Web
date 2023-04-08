// DONE: 컨트롤러 코드
const User = require("../model/User");

// (1) GET / => localhost:PORT/
exports.index = (req, res) => {
  res.render("index");
};

// (2) GET /user/signup => localhost:PORT/user/signup
exports.signup = (req, res) => {
  res.render("signup");
};

// (3) GET /user/signin => localhost:PORT/user/signin
exports.signin = (req, res) => {
  res.render("signin");
};

// (4) POST /user/signup => localhost:PORT/user/signup
exports.postSignUp = (req, res) => {
  console.log(req.body); // 사용자가 form에 입력한 register 정보

  User.postSignUp(req.body, () => {
    // res.end() : 데이터 없이 응답할 때 사용
    res, end();
  });
};

// (5) POST /user/signin => localhost:PORT/user/signin
exports.postSignIn = (req, res) => {
  console.log(req.body); // 사용자가 form에 입력한 login 정보

  User.postSignIn(req.body, (result) => {
    console.log(result);
    // result : 존재하는 user로 login할 경우 : [ {} ]
    // result : 존재하지 않는 user로 login할 경우 : []

    if (result.length > 0) {
      // login 성공
      res.send(true);
    } else {
      // login 실패
      res.send(false); // res.send() : Front에서 받겠다.
    }
  });
};

// (6) POST /user/profile => localhost:PORT/user/profile
exports.postProfile = (req, res) => {
  console.log(req.body);

  User.postProfile(req.body.userid, (result) => {
    console.log(result); // [ {} ]

    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    }
  });
};

// (7) POST /user/profile/delete => localhost:PORT/user/profile/delete
exports.postProfileDelete = (req, res) => {
  console.log(req.body);

  User.postProfileDelete(req.body.id, () => {
    res.end();
  });
};

// (8) POST /user/profile/edit => localhost:PORT/user/profile/edit
exports.postProfileEdit = (req, res) => {
  console.log(req.body);

  User.postProfileEdit(req.body, () => {
    res.end();
  });
};
