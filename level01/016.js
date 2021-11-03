// 문자열을 정수로 바꾸기

/*
# 문제 설명
문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

# 제한 조건
s의 길이는 1 이상 5이하입니다.
s의 맨앞에는 부호(+, -)가 올 수 있습니다.
s는 부호와 숫자로만 이루어져있습니다.
s는 "0"으로 시작하지 않습니다.

# 입출력 예
예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
*/

// 나의 풀이
function solution(s) {
  var answer = 0;
  var digit = s.length - 1;
  
  if (s[0] == '-') {
      for (var i = 1; i < s.length; i++) {
          answer += s[i] * (10 ** (digit - i));
      }
      answer *= (-1);
  }
  else if (s[0] == '+') {
      for (var k = 1; k < s.length; k++) {
          answer += s[k] * (10 ** (digit - k));
      }
  }
  else {
      for (var j = 0; j < s.length; j++) {
          answer += s[j] * (10 ** (digit - j));
      }
  }
  return answer;
}

// 다른 풀이
function solution(s) {
  var str = s/1;
  return str;
}