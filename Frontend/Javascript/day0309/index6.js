// if 조건문
if (5 > 3) {
  console.log("얍");
}

// let number = Number(prompt("숫자를 입력해주세요."));

// if (number > 10) {
//   console.log("이 수는 10보다 큽니다.");
// } else {
//   console.log("이 수는 10보다 작거나 작습니다.");
// }

// if (number > 10) {
//   console.log("이 수는 10보다 큽니다.");
// } else if (number === 10) {
//   console.log("이 수는 10입니다.");
// } else {
//   console.log("이 수는 10보다 작습니다.");
// }

// if (number > 100 || number < 0) {
//   console.log("숫자가 범위를 벗어났습니다.");
// } else if (number >= 90) {
//   console.log("A");
// } else if (number >= 80) {
//   console.log("B");
// } else if (number >= 70) {
//   console.log("C");
// } else if (number >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// let age = Number(prompt("나이를 입력하세요:"));

// if (age < 0) {
//   console.log("잘못된 나이 입력");
// } else if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else {
//   console.log("유아");
// }

// db
// let userId = "user01";
// let userPw = "1234qwer";

// login();

// function login() {
//   let inputId = prompt("아이디를 입력하세요.");
//   let inputpW = prompt("비밀번호를 입력하세요.");

//   if (userId === inputId) {
//     if (userPw === inputpW) {
//       alert("로그인 성공");
//     } else {
//       alert("비밀번호가 틀렸습니다. ");
//     }
//   } else if (inputId === "") {
//     alert("아이디를 입력하지 않았습니다.");
//   } else {
//     alert("아이디가 틀렸습니다.");
//   }
// }

// swith 문
let a = 4;
switch (a) {
  case 3:
    console.log("a가 3이군요.");
    break;
  case 4:
    console.log("a가 4이군요.");
    break;
  case 5:
    console.log("a가 5군요.");
    break;
  default:
    console.log("a가 뭐죠?");
    break;
}

// let score = Number(prompt("성적을 입력하세요."));
// switch (parseInt(score / 10)) {
//   case 9:
//     console.log("A");
//     break;
//   case 8:
//     console.log("B");
//     break;
//   case 7:
//     console.log("C");
//     break;
//   case 6:
//     console.log("D");
//     break;
//   default:
//     console.log("F");
//     break;
// }

// 삼항 연산자
let num = 5;
num > 3 ? console.log("3보다 크다") : console.log("3보다 작다.");

let now = new Date().getHours();
now >= 12 ? console.log("오후") : console.log("오전");
