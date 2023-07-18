// 뒤집은 소수
// 나의 풀이
const isPrime = (number) => {
  if (number === 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
};

function solution(n, arr) {
  const answer = [];

  for (number of arr) {
    const reversed = number.toString().split("").reverse().join("");

    if (!isPrime(Number(reversed))) continue;

    for (let idx = 0; idx < n; idx += 1) {
      if (reversed[idx] === "0") reversed[idx] = null;

      continue;
    }

    answer.push(Number(reversed));
  }

  return answer;
}

const case01 = solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]);

console.log(case01);

// 풀이
function answer(n, arr) {
  const answer = [];

  for (let number of arr) {
    let result = 0;

    while (number) {
      let temp = number % 10;

      result = result * 10 + temp;
      number = parseInt(number / 10);
    }

    if (isPrime(result)) answer.push(result);
  }

  return answer;
}

const case02 = answer(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]);

console.log(case02);

// 개선된 풀이
function advanced(n, arr) {
  const answer = [];

  for (number of arr) {
    const reversed = Number(number.toString().split("").reverse().join(""));

    if (isPrime(reversed)) answer.push(reversed);
  }

  return answer;
}

const case03 = answer(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]);

console.log(case03);
