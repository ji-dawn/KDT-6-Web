// // setTimeout(function, delay)
// // delay(ms)만큼 기다린 후 function 실행
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

// // 1초 후 body의 background-color: red로 변경
// setTimeout(() => {
//   let body = document.querySelector("body");
//   body.setAttribute("style", "background-color: red");
// }, 1000);

// // 1초 후 h1의 color: blue로 변경
// setTimeout(changeColor, 1000);
// function changeColor() {
//   document.querySelector("h1").style.color = "blue";
// }

// 편의점에서 음료수를 사고 나오는 상황
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}
// function pickDrink() {
//   setTimeout(() => {
//     console.log("고민 끝!");
//     product = "제로 콜라";
//     price = 2000;
//   }, 3000);
// }
function pay(product, price) {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}
let product;
let price;
goMart();
// pickDrink();
// pay(product, price);
// 왜 undefined가 뜰까?
// (컴퓨터 해석)
// 1. goMart() 함수 확인 -> pickDrink() 함수 확인 -> pay() 함수 확인
// 2. product 전역 변수 만듦, price 전역 변수 만듦
// 3. goMart() 함수 실행 (콘솔 로그 찍기)
// 4. pickDrink() 함수 실행
// 4-1. 3초 대기 (그런데!! js는 "비동기 처리" -> 이 코드가 끝날 때까지 기다리지 않고, 다음 코드 바로 실행~)
// 5. pay() 함수 실행
// 4-1. 3초 대기 끝
// 4-2. function () {} 함수 실행 (콘솔 로그 찍기, product 변수에 값 할당, price 변수에 값 할당)

// callback
// 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// 어떤 함수의 파라미터(매개변수)로 쓰임
function pickDrink(callback) {
  setTimeout(() => {
    console.log("고민 끝!");
    product = "제로 콜라";
    price = 2000;
    callback(product, price);
  }, 3000);
}
pickDrink(pay);

// ===========================
// callback 지옥
// callback 함수가 반복되어 코드의 들여쓰기가 너무 깊어짐
// 코드의 가독성/유지보수 하락

// ex) 1초마다 background-color가 변경되는 코드
// red -> orange -> yellow -> green -> blue
setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
