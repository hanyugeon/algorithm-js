function solution(a, b, c) {
  let answer = a;
  if (answer > b) answer = b;
  if (answer > c) answer = c;

  return answer;
}

console.log(solution(6, 5, 11));
console.log(solution(2, 5, 1));
console.log(solution(21, 15, 11));
