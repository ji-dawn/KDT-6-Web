function rectangle(width, height) {
  return width * height;
}

function triangle(base, height) {
  return (base * height) / 2;
}

function circle(radius) {
  let answer = radius ** 2 * Math.PI;
  answer = Math.floor(answer * 10) / 10;
  return answer;
}

console.log(rectangle(10, 5));
console.log(triangle(4, 3));
console.log(circle(5));
