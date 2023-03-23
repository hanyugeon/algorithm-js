/**
 * 한 문자열 s가 입력되었을 때 규칙에 따라 여러 문자열로 분해
 *
 * 첫 글자 x
 * x의 갯수, x가 아닌 갯수 두 횟수가 같아지는 순간 멈추고 문자열을 분리
 */

function solution(s) {
  let x = s[0];
  let answer = 0;
  let isX = 0;
  let notX = 0;

  for (let idx = 0; idx < s.length; idx += 1) {
    if (isX === 0 && notX === 0) x = s[idx];

    if (idx + 1 === s.length) {
      answer += 1;
      break;
    }

    if (s[idx] === x) {
      isX += 1;
    } else {
      notX += 1;
    }

    if (isX === notX) {
      isX = 0;
      notX = 0;
      answer += 1;
      continue;
    }
  }

  return answer;
}
