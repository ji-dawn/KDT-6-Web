console.log("실습 1 : 1~100까지의 배열 for문으로 만들기");

let arr = [];
for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

let sumFor = 0;
for (let i = 0; i < arr.length; i++) {
  sumFor += arr[i];
}
console.log(`for문으로 구한 합 : ${sumFor}`);

let sumForOf = 0;
for (let num of arr) {
  sumForOf += num;
}
console.log(`for of문으로 구한 합 : ${sumForOf}`);

let sumForEach = 0;
arr.forEach((data) => {
  sumForEach += data;
});
console.log(`forEach문으로 구한 합 : ${sumForEach}`);

// 강사님 코드
/* 실습1 */
arr1 = [];
for (let i = 0; i < 100; i++) {
  arr1.push(i + 1);
}
console.log(arr1);
let sum1 = 0;
for (let number of arr1) {
  sum1 = sum1 + number;
}
console.log(sum1);
let sum2 = 0;
arr1.forEach((number) => {
  sum2 = sum2 + number;
});
console.log(sum2);

console.log("실습 2 : 문자열 배열");

let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

let same = [];
let diff = [];

for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  }
}

console.log(same);

fruits1.forEach((elem) => {
  if (!fruits2.includes(elem)) {
    diff.push(elem);
  }
});
console.log(diff);

// 강사님 코드
/* for 문 이용 */
for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}
console.log(same);
console.log(diff);
/* filter 이용 */
let same2 = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff2 = fruits1.filter((fruit) => !fruits2.includes(fruit));
console.log(same2);
console.log(diff2);
