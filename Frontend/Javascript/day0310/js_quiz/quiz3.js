let n = 1;
let sum = 0;
let end = 99;

while (n <= end) {
  if (n % 3 === 0 || n % 2 === 0) {
    sum += n;
  }
  n++;
}

console.log(`1과 99까지 중에서 2 또는 3의 배수의 합 : ${sum}`);
