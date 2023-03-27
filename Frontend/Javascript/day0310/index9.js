// JS 표준 내장 객체
// JS가 기본적으로 가지고 있는 객체
/*
Object
Array
String
Number
Boolean

Math
Date : 시간, 날짜에 대한 정보를 얻기 위해 사용
...
*/
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "년");
console.log(now.getMonth() + 1, "월"); // 0 ~ 11
console.log(now.getDate(), "일"); // 1부터
console.log(now.getHours(), "시"); // 0 ~ 23
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일"); // 0 ~ 6. 0은 일요일

// 오늘이 평일/주말인지 출력
let today = new Date().getDay();
// case 0, 6으로 '주말' log를 찍어서 라인수를 줄일것.
switch (today) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("오늘은 평일입니다.");
    break;
  default:
    console.log("오늘은 주말입니다.");
    break;
}
now = new Date().getDay();
today = now === 0 || now === 6 ? "주말" : "평일";
console.log(today);

// Math 객체
// 속성
console.log(Math.PI); // 3.141592...
console.log(Math.E); // 2.718...
console.log(Math.SQRT2); // 루트 2
// ...

// 메서드
console.log(Math.min(45, 2, 13, 67, 23));
console.log(Math.max(45, 2, 13, 67, 23));
console.log(Math.random()); // 0 ~ 1 미만의 난수
// 정수 반호나
console.log(Math.round(5.1)); // 반올림
console.log(Math.floor(5.5)); // 버림
console.log(Math.ceil(5.22)); // 올림

// 0 ~ 10 미만의 실수
console.log(Math.random() * 10);

// 0 ~ 100 이하의 정수
console.log(Math.ceil(Math.random() * 100));
