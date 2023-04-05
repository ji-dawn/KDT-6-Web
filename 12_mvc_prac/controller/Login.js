const realId = "banana";
const realPw = "1234";
const user = require("../model/User");
const splittedUserInfo = user.getUserInfo().split("//");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  console.log(req.body); // { userId: 'aa', userPw: 'a' }

  for (let i = 0; i < 4; i++) {
    // 정답 아이디/비밀번호 vs. 사용자가 폼에 입력한 아이디/비밀번호
    if (
      splittedUserInfo[i * 3] === req.body.userId &&
      splittedUserInfo[i * 3 + 1] === req.body.userPw
    ) {
      // 정답 아이디랑 사용자가 입력한 아이디가 같고, 정답 비번이랑 사용자가 입력한 비번이 같음
      // => 로그인 성공
      res.send({ isLogin: true, userInfo: splittedUserInfo[i * 3 + 2] });
    }
  }
  res.send({ isLogin: false });
};
