// 문자열 다루기 기본

/*
# 문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

# 제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.

# 입출력 예
s        return
"a234"	 false
"1234"	 true
*/

// 나의 풀이
function solution(s) {
  const strBefore = s;
  const strAfter = s.replace(/[^0-9]/g, '');

  if (s.length != 4 && s.length != 6) {
    return false;
  }

  const answer = (a, b) => {
    if (a.length != b.length) {
      return false;
    }

    return true;
  }

  return answer(strBefore, strAfter);
}

// 다른 풀이
function solution(s) {
  if (s.length != 4 && s.length != 6) {
    return false;
  }

  const str = s.replace(/[^0-9]/g, '');
  
  if (s.length != str.length) {
    return false;
  }

  return true;
}