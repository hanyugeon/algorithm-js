/**
 * 귤 고르기
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476
 */

function solution(k, tangerine) {
  // 수확한 귤 중 k개를 골라
  // 상자 하나에 담아 판매

  // 귤 개수 k개를 빼서 만들 수 있는
  // 서로 다른 종류의 귤 최솟값 구하기

  let answer = 0;

  const obj = {};
  tangerine.forEach((x) => {
    obj[x] = (obj[x] || 0) + 1;
  });

  const arr = Object.values(obj).sort((a, b) => b - a);

  for (const t of arr) {
    if (k - t <= 0) {
      answer += 1;
      break;
    } else {
      k -= t;
      answer += 1;
      continue;
    }
  }

  return answer;
}
