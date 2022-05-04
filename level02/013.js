// 카펫 (완전탐색)
// 나의 풀이01(이상함 한개 틀림, 실행시간 너무 긺)
function solution(brown, yellow) {
  const divisors = [[1, yellow]];
  const answer = [];

  for (let i = 2; i < yellow / 4; i++) {
    const temp = [];

    if (yellow % i === 0) {
      temp.push(i);
      temp.push(yellow / i);
      divisors.push(temp);
      continue;
    }
  }

  for (let i = 0; i < divisors.length; i++) {
    if ((divisors[i][0] + divisors[i][1]) * 2 + 4 === brown) {
      answer.push(divisors[i][1] + 2);
      answer.push(divisors[i][0] + 2);

      break;
    }
  }

  return answer;
}

// 나의 풀이02
function solution(brown, yellow) {
  const temp = (brown - 4) / 2;
  const answer = [];

  for (let height = 1; height < temp; height++) {
    const width = temp - height;

    if (height * width === yellow) {
      answer.push(width + 2);
      answer.push(height + 2);
      break;
    }
  }

  return answer;
}
