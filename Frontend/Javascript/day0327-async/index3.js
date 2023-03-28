// async / await
// 비동기 처리 패턴 중 가장 최신 문법
// promise 기반 코드의 가독성을 향상 시키기 위해 등장

// 구조
// 함수 앞에 async 키워드
// 비동기 처리 메서드 앞에 await 키워드 (해당 작업을 기다려 줄 것)
// async와 await는 한 세트
async function name(params) {
  await async_method();
}

function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["🍒", "🍓", "🍊"];
      // resolve(fruits);
      reject(new Error("알 수 없는 에러 발생"));
    }, 1000);
  });
}

// 1. promise then()
// fetchFruits()
//   .then(function (fruits) {
//     console.log(fruits);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// 2. async/await
// 예외 처리 try catch
// 구조
// try {
// 코드 실행
// 에러 발생 시 catch로 이동
// } catch (error) {
// 에러 관리
// }
// try 블록 코드가 실행
// try 블록에 에러가 없다면, catch 블록 건너뜀
// try 블록에 에러가 있다면 catch에서 예외 처리
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.error(error);
  }
}
printItems();
