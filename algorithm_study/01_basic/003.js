// Math는 javascript의 표준 내장 객체이다.
function solution(N) {
  let answer = 0;

  answer = Math.ceil(N / 12);

  return answer;
}

console.log(solution(60));
console.log(solution(25));
console.log(solution(178));
