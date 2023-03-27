// for 반복문
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

let n = 11;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

// 배열과 for문
let fruits = ["사과", "베", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열의 숫자 합 구하기
let nums = [90, 50, 30, 20, 11];
let total = 0;
for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total);

// 1~20 짝수일 때의 합 구하기
let sum2 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  } else {
    continue;
  }
}
console.log(sum2);

// let i = Number(prompt("숫자를 입력하세요."));

// for (i; i <= 10000; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }

// 구구단
for (let i = 2; i <= 9; i++) {
  console.log(`---${i} 단--`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i}x ${j} = ${i * j}`);
  }
}

// while 반복문
// 조건문을 사용
let index = 0;
while (index < 10) {
  console.log("인사를", index + 1, "번째 드립니다!😀");
  index++;
}

// if 문 + break 사용
let index2 = 0;
while (true) {
  console.log("절을", index2 + 1, "번째 드립니다! 😀");
  index2++;
  if (index2 === 10) {
    break;
  }
}

// 구구단 while 버전
let i = 2,
  j = 1;
while (i < 10) {
  console.log(`---${i} 단--`);
  while (j < 10) {
    console.log(`${i}x ${j} = ${i * j}`);
    j++;
  }
  i++;
  j = 1;
}

// continue
