function changeColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = color;
      resolve();
    }, 1000);
  });
}

changeColor("red")
  .then(function () {
    return changeColor("orange");
  })
  .then(function () {
    return changeColor("yellow");
  })
  .then(function () {
    return changeColor("green");
  })
  .then(function () {
    return changeColor("blue");
  });
