// 가장 큰 수(정렬)
// 나의 풀이
function solution(numbers) {
  const strings = numbers.map((x) => x.toString());
  const answer = strings.sort((a, b) => (b + a) - (a + b)).join("");

  return answer[0] === "0" ? "0" : answer;
}
