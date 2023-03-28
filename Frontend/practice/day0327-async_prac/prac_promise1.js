// Promise
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back(txt) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}
function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then(function (name) {
    console.log(name + " 반가워");
    return back();
  })
  .then(function (txt) {
    console.log(txt + " 을 실행했구나");
    return hell();
  })
  .then(function (message) {
    console.log("여기는 " + message);
  });

// 풀이 코드
// callback -> promise 변경
// 기존 코드
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// call -> back -> hell 순서로 실행
call("kim")
  .then(function (name) {
    console.log(`${name} 반가워`);
    return back();
  })
  .then(function (txt) {
    console.log(`${txt}를 실행했구나`);
    return hell();
  })
  .then(function (msg) {
    console.log(msg);
  });
