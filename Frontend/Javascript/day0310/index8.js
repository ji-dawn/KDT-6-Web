// 문자열 관련 함수 + 속성(length)
/*
- toUppercase(), toLowerCase()
- trim()
- indexOf(a)
- charAt(n)
- slice(start, end-1)
- replace(a, b), replaceAll(a, b)
- repeat(n)
- split('')
*/
let str1 = "Strawberry Moon";
let str2 = "  Strawberry Moon";
// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny를 출력
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
console.log(str1.length);
console.log(str2.length); // tab도 space가 얼만큼 되었느냐로 계산

// 매개변수가 없는 메서드
let msg = "Happy Birthday!";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

console.log(str2);
console.log(str2.length);
console.log(str2.trim());
console.log(str2.trim().length);

let msg2 = "  hello world!!   ";
console.log(msg2.trim().toUpperCase());

// 매개변수가 있는 메서드
let fruit = "applemango";
console.log(fruit.indexOf("a")); // 0. 첫 번째 index만 반환
console.log(fruit.indexOf("apple")); // 0. 'apple'이 시작하는 첫 번째 index 반환
console.log(fruit.indexOf("x")); // 없는 경우 -1 반환
console.log(fruit.charAt(3)); // l. index에 해당하는 문자 반환

console.log(fruit.slice()); // 전체 문자열 반환
console.log(fruit.slice(5)); // 5번부터 끝까지
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3)); // -1이면 맨 뒤.
console.log(fruit); // 문자열은 변하지 않는다.
let msg3 = "Wow! It is so amazing!!";
console.log(msg3.replace("Wow", "Hey"));
console.log(msg3.replaceAll("o", "a"));
console.log(msg3); // 문자열은 변하지 않는다.

let date = "23.03.10";
console.log(date.split("."));

console.log("hi".repeat(10));

// 배열 관련 함수
console.log("------배열 메서드-------");
// push(a), pop(), unshift(a), shift() : 원본 배열 변화
// indexOf(a), join('xyz'), reverse()
// indexOf(a) : 매개변수로 문자열만 넣을 수 있는 것은 아님
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "rabbit", "puppy", "hamster"];
arr1[5] = 6;
console.log(arr1);
arr1[8] = 9; // 중간에 empty 값이 생길 수 있다.
console.log(arr1);
// arr1 재선언
arr1 = [1, 2, 3, 4, 5];
arr1.push(6);
console.log(arr1);

console.log(arr1.pop());
console.log(arr1);

arr2.unshift("cat");
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

// 배열.includes(a) : 요소가 있는지 검사 후 boolean 값 반환
console.log(arr2.includes("quakka"));
console.log(arr2.includes("dog"));

console.log(arr2.indexOf("aa"));
console.log(arr2.indexOf("quakka"));
console.log(arr1.reverse());
console.log(arr1);

// join() : split과 반대. 배열을 문자열로 변환. 기존 배열을 변화시키지 않음
str1 = arr1.join();
console.log(str1); // 배열 안의 ',' 까지 문자열에 포함시킨다
str1 = arr1.join("");
console.log(str1); // 54321. ','가 제거됨

// 배열에서의 for
// 기본 for문
// for of문
// forEach 함수 : 매개변수로 익명함수를 전달
let arr3 = [1, 3, 5, 4, 6];
let alphabets = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// for of문. 배열 하나만 접근
for (let number of arr3) {
  console.log(number);
}

// 매개변수의 순서를 지켜야함
arr3.forEach(function (data, index, arr) {
  console.log(data, index, arr);
});

arr3.forEach((data, index) => {
  console.log(data, index);
});

arr3.forEach(function (data) {
  console.log(data);
});

// 배열.filter(function (매개변수) {return 조건})
// 기존 배열을 변화시키지 않음
console.log("-----filter-----");
let arr4 = arr3.filter(function (num) {
  return num > 3;
});
console.log(arr4);

let arr5 = arr2.filter(function (elem) {
  return elem.length >= 6;
});
console.log(arr5);

// map(function) : 배열 내의 모든 원소에 대해 연산한 결과를 모아 새로운 배열로 변환. 기존 배열을 변화시키지 않음
let arr6 = [1, 2, 3].map(function (el) {
  return el * 3;
});
console.log(arr6);

arr4 = [1, 2, 3, 4, 5];
arr4 = arr4.map((num) => num * 10);
console.log(arr4);

// arr4 = [10, 20, 30, 40, 50];
// find() : 조건을 만족하는 첫 번째 요소를 반환
let findResult = arr4.find((num) => num >= 30);
console.log(findResult);
