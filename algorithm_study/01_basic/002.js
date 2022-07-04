// Math는 javascript의 표준 내장 객체이다.
function solution(a, b, c) {
  const sum = a + b + c;
  const max = Math.max(a, b, c);
  let answer = "NO";

  if (max < sum - max) {
    answer = "YES";
  }

  return answer;
}

console.log(solution(3, 4, 5));
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
