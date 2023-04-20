// 1. 배열구조 분해
const lists = ["apple", "grape"];
console.log(lists[0]);
[item1, item2, item3 = "peach"] = lists;
console.log("item1: ", item1);
console.log("item2: ", item2);
console.log("item3: ", item3);

// 배열분해 할당으로 값 교환
let x = 1,
  y = 2;
console.log(`x = ${x} y = ${y}`);
[x, y] = [y, x];
console.log(`x = ${x} y = ${y}`);

// 2. 객체구조 분해
const obj = {
  key1: "one",
  key2: "two",
};
console.log("obj.key1 = ", obj.key1);
const { key1, key2 } = obj;
// 선언과 동시에 할당도 가능
const { key1: newKey1, key2: newKey2, key3 = "three" } = obj;
console.log(`key1: ${key1}`);
console.log(`key2: ${key2}`);
console.log(`key3: ${key3}`);
console.log(`newKey1: ${newKey1}`);
console.log(`newKey2: ${newKey2}`);

// 양쪽 객체가 맞지 않기 때문에 c는 undefined
// const { a, c } = { a: 10, b: 20 };
// console.log(`a = ${a}`);
// console.log(`c = ${c}`);

const { a1, b } = { a1: 10, b: 20 };
console.log(`a1 = ${a1}`);
console.log(`b = ${b}`);

// spread 연산자 : "함수 호출"에 ...을 사용. 객체의 값을 펼친다는 개념
const a2 = [1, 2, 3, 4, 5];
console.log(...a2);

// spread와 헷갈릴 수 있는 rest
// rest 파라미터 : 남은 인수를 묶어서 반환. rest가 아닌 다른 변수명을 사용할 수 있으나 가급적 rest를 권장
// => "함수 매개변수"에 ...을 사용
const data = { c: 30, d: 40, e: 50, f: 60 };
const { c, d, ...rest } = data; // c와 d를 제외한 나머지가 변수로 반환
console.log("c:", c, "d:", d, "rest:", rest); // c: 30 d: 40 rest: { e: 50, f: 60 }

// 배열분해 할당 순서. 배열의 값과 분해의 변수명을 유사하게 혹은 동일하게
const newArr = ["one", "two", "three"];
const [one, two, three, four = "four"] = newArr;
console.log("newArr", newArr); // newArr [ 'one', 'two', 'three' ]

// 객체분해 할당
const newObj = {
  one: "one",
  two: "two",
  three: "three",
};
// 아래와 같이 객체/배열의 원소를 사용하려면 매번 넣어줘야 하기 때문에 나온 것이 분해할당 개념
console.log("newObj.one:", newObj.one);
console.log("newObj.two:", newObj.two);
console.log("newObj.three:", newObj.three);

const { one: newOne, two: newTwo, three: newThree } = newObj;
console.log("one(newOne):", newOne);
console.log("two(newTwo):", newTwo);
console.log("three(newThree):", newThree);

// spread 연산자
// -> 객체의 값을 펼친다. 아래처럼 배열/객체을 합칠 때 유용하게 사용
const t1 = [1, 2, 3];
const t2 = [5, 6];
const t3 = [...t1, ...t2];
console.log("t3:", t3);

const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocochipCookie = {
  ...cookie,
  toping: "chocochip",
};

console.log("cookie:", cookie);
console.log("chocochipCookie:", chocochipCookie);

const noTopingCookie = ["촉촉한 쿠키", "안 촉촉한 쿠키"];
const topingCookie = ["바나나쿠키", "블루베리쿠키", "딸기쿠키"];
const allCookie = [...noTopingCookie, "초코칩쿠키", ...topingCookie];
console.log("allCookie", allCookie);
