// 가운데 글자 가져오기

/*
# 문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

# 재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.

# 입출력 예
s         return
"abcde"	  "c"
"qwer"	  "we"
*/

// 나의 풀이
function solution(s) {
  const middle = Math.floor(s.length / 2);
  let answer = "";

  if (s.length % 2 == 1) {
    answer = s[middle];
  } else if (s.length % 2 == 0) {
    answer = s[middle - 1] + s[middle];
  }

  return answer;
}

const test1 = "programers";
const test2 = "javascript";
const test3 = "front-end";

console.log("테스트1:", solution(test1));
console.log("테스트2:", solution(test2));
console.log("테스트3:", solution(test3));
