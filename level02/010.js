/**
 * 올바른 괄호 (스택 Stack)
 * https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s) {
  if (s[0] === ")") return false;
  if (s.length % 2 !== 0) return false;
  if (s[s.length - 1] === "(") return false;

  let stackLength = 0;

  for (let idx = 0; idx < s.length; idx += 1) {
    if (s[idx] === "(") {
      stackLength += 1;
    } else if (stackLength === 0) {
      return false;
    } else {
      stackLength -= 1;
    }
  }

  return stackLength === 0 ? true : false;
}

// 이전 풀이
// 나의풀이
/*
  내가 생각한 구조
  00. '(', ')' 갯수 합이 홀수? -> false로 거름.
  01. let count = 0;
  02. 순차적으로 '(' 이 나오면 count++, ')'이 나오면 count--
  02-01. count가 음수가 되면? -> false 반환.
  03. 반복문 이후 count가 0이 아닐 경우 -> false 반환.
*/

// function solution(s) {
//   let count = 0;

//   if (s.length % 2 != 0) return false;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       count++;
//     } else if (s[i] === ")") {
//       count--;
//     }

//     if (count < 0) return false;
//   }

//   if (count != 0) return false;

//   return true;
// }
