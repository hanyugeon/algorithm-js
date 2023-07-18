// 자릿수의 합
// 나의 풀이
function solution(n, arr) {
  const answer = [];
  let maxIdx = 0;
  let max = 0;

  // 8 * n
  for (let number of arr) {
    const string = number + "";
    let total = 0;

    for (let char of string) {
      total += parseInt(char, 10);
    }

    answer.push(total);
  }

  // 8 * n^2
  for (let idx = 0; idx < n; idx += 1) {
    if (answer[idx] > max) {
      max = answer[idx];
      maxIdx = idx;
    } else if (answer[idx] === max) {
      if (arr[idx] > arr[maxIdx]) {
        max = answer[idx];
        maxIdx = idx;
      }
    } else {
      continue;
    }
  }

  return arr[maxIdx];
}

const case01 = solution(7, [128, 460, 603, 40, 521, 137, 123]);

console.log(case01);

// 풀이
function answer(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let number of arr) {
    let sum = 0;
    let temp = number;

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > max) {
      max = sum;
      answer = number;
    } else if (sum === max) {
      if (number > answer) answer = number;
    }
  }

  return answer;
}

const case02 = answer(7, [128, 460, 603, 40, 521, 137, 123]);

console.log(">>>", case02);

// 개선된 풀이
function answer(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let number of arr) {
    const sum = number
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (sum > max) {
      max = sum;
      answer = number;
    } else if (sum === max) {
      if (number > answer) answer = number;
    }
  }

  return answer;
}

const case03 = answer(7, [137, 460, 603, 40, 344, 128, 123]);

console.log(">>>>>", case03);
