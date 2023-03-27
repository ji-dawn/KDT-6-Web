helloWorld1();

function helloWorld1() {
  console.log("helloWorld1");
}

helloWorld1();

function helloWorld2() {
  return "helloWorld2";
}

helloWorld2();
console.log(helloWorld2());

function add(num1, num2) {
  return num1 + num2;
}

function add2(num1, num2) {
  console.log(num1 + num2);
}

let result = add(5, 5);
let result2 = add2(5, 5);

console.log(result, result2);

// 함수 표현식
// 선언 전 호출 불가능
let helloWorld3 = function () {
  console.log("helloWord3");
};

helloWorld3();

// 화살표 함수
// 선언 전 호출 불가능
let helloWord4 = () => {
  console.log("helloWorld4");
};
helloWord4();

// 매개 변수가 있는 함수
function sayHello1(text) {
  return text;
}

console.log(sayHello1("sayHello1"));

function sayHello2(text, name) {
  return `${text}, ${name}`;
}

console.log(sayHello2("sayHello2", "gildong"));

let sayHello3 = function (text) {
  console.log("this is sayHello3 expression");
};
sayHello3();

let sayHello4 = () => {
  console.log("this is sayHello4 arrow function");
};
sayHello4();

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(3, 7));

function square(num) {
  console.log(num ** 2);
}
square(4);

let count = 0;

function test() {
  count++;
  if (count > 5) {
    console.log("stop clicking!");
    count = 0;
  } else {
    console.log("test clicked");
  }
  // alert("test clicked");
}

/**
 * num1, num2 : 숫자형
 * num1 + num2에 대한 결과값을 return
 *  */
function add(num1, num2) {
  return num1, num2;
}
