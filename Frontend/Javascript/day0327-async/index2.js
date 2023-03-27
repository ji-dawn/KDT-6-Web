// // Promise
// // 비동기 함수 동기처리하기 위해 만든 객체
// // 성공/실패를 분리하여 최종 결과를 반환
// // Promise 상태
// // pending(대기) : Promise를 수행중인 상태
// // fulfilled(이행) : Promise가 resolve된 상태(성공)
// // rejected(거부) : Promise가 지켜지지 못한 상태. reject된 상태(실패)
// // settled : fulfilled 또는 rejected로 결론난 상태
// // promise를 callback 함수에 전달할 필요 없음. 그냥 호출하면 됨

// // 1. promise 생성 코드
// // promise1 함수의 return 값은 Promise 객체
// // - resolve() : 성공한 경우, Promise 사용 시 then 메서드와 연결
// // - reject() : 실패한 경우, Promise 사용 시 catch 메서드와 연결
// function promise1(flag) {
//   // 매개변수명이 resolve, reject일 필요는 없으나 직관성을 위해 사용
//   return new Promise(function (resolve, reject) {
//     if (flag) {
//       resolve(
//         `promise 상태 : fulfilled. then으로 연결된다. 이 때의 flag는 ${flag}`
//       );
//     } else {
//       reject(
//         `promise 상태 : rejected. catch로 연결된다. 이 때의 flag는 ${flag}`
//       );
//     }
//   });
// }

// // 2. Promise 사용(소비)하는 코드
// promise1(5 > 3)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }
// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("고민 끝!");
//       product = "제로 콜라";
//       price = 2000; // 2000 -> 상품명, 가격 출력 그대로. 만약, 4000 -> 금액 부족 메시지 출력
//       if (price <= 2000) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// }
// // resolve
// function pay() {
//   console.log(console.log(`상품명 : ${product}, 가격 : ${price}`));
// }
// // reject
// function noPay() {
//   console.log("금액 부족!");
// }
// let product; // undefined
// let price; // undefined
// goMart();
// pickDrink()
//   .then(pay) // pickDrink 함수 안에서 resolve 실행시 then 으로 연결
//   .catch(noPay); // pickDrink 함수 안에서 reject 실행시 catch 로 연결

// ===============================
// Promise 체이닝
// step 1. callback 함수를 이용해 (4 + 3) * 2 - 1 = 13 연산 구현
// 1. add(4, 3)
// 2. mul(add(4, 3), 2)
// 3. sub(mul(add(4, 3), 2), 1)

// callback 으로 구현
// function add(n1, n2, callback) {
//   setTimeout(() => {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }
// function mul(n1, callback) {
//   setTimeout(() => {
//     let result = n1 * 2;
//     callback(result);
//   }, 1000);
// }
// function sub(n1, callback) {
//   setTimeout(() => {
//     let result = n1 - 1;
//     callback(result);
//   }, 1000);
// }

// add(4, 3, function (x) {
//   console.log("1:", x); // x = 4 + 3
//   mul(x, function (y) {
//     console.log("2:", y); // y = x * 2
//     sub(y, function (z) {
//       console.log("3:", z); // z = y - 1
//     });
//   });
// });

// step 2. Promise 체이닝으로 구현
// 장점 1: then 메서드 연속 사용 가능! -> 순차적인 작업 가능. callback 지옥 탈출
// 장점 2: 예외 처리 간편. 마지막 catch 구문에서 한번에 에러 처리 가능
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}
function mul(n1) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let result = n1 * 2;
      resolve(result);
    }, 1000);
  });
}
function sub(n1) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let result = n1 - 1;
      // resolve(result);
      reject(new Error("의도적 에러"));
    }, 1000);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1:", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2:", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3:", result);
  })
  .catch(function (err) {
    console.log("실패");
    console.log(err);
  });
