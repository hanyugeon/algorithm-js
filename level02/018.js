/**
 * 2 X n 타일링
 * https://school.programmers.co.kr/learn/courses/30/lessons/12900
 */

// // 시도한 풀이 (실패)
// const factorial = (n) => {
//   let answer = 1;

//   for (let i = 1; i <= n; i += 1) {
//     answer *= i;
//   }

//   return answer;
// };

// const combination = (n, r) => {
//   const answer = factorial(n) / factorial(n - r) / factorial(r);

//   return answer;
// };

// function solution(n) {
//   let answer = 0;

//   for (let x = 0; x <= n; x += 1) {
//     // 서있는 블록을 채우고 남은 길이: m
//     const m = n - x;

//     // m을 누워있는 블록으로 꽉 채울 수 없다면 continue
//     if (m % 2 === 1) {
//       continue;
//     }

//     // 누워있는 블록으로 조합(2 x 2)한 정사각형 갯수
//     const y = (n - x) / 2;
//     // 서있는 블록 + 조합한 블록 총 갯수
//     const z = x + y;

//     answer += combination(z, x);
//   }

//   return answer;
// }

// 해답 (DP)
function solution(n) {
  if (n === 1 || n === 2) return n;

  // length가 n인 array 생성
  // 0으로 모두 채움
  const dp = Array(n).fill(0);
  const mod = 1000000007;

  // n의 길이가 1부터 n까지일때의 경우의 수 계산 (DP 활용)
  dp[1] = 1;
  dp[2] = 2;

  for (let idx = 3; idx <= n; idx += 1) {
    dp[idx] = (dp[idx - 1] + dp[idx - 2]) % mod;
  }

  return dp[n];
}
