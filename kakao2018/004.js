/**
 * 뉴스 클러스터링
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 */

/**
 * "카카오 신입 개발자 공채" 기사 검색
 * "블라인드 전형", "코딩 테스트" 2가지에 주목하는 기사로 나뉘는 결과
 *
 * 집합간의 유사도를 검사하는" 자카드 유사도
 * J(A, B)는 두 교집합 크기를 두 집합의 합집합 크기로 나눈 값으로 정의
 *
 * 단, 둘 다 공집합일 경우 1로 정의
 *
 * 다중집합에 대해 확장 가능
 * "1" 5개, "1" 3개
 *
 * "FRANCE", "FRENCH" 두글자씩 끊어서 다중집합 만들 수 있음
 * {FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}
 *
 * 단, 대소문자 차이는 무시.
 *
 * 0과 1사이의 실수를 * 65536 이후 소수점 아래를 버리고 정수부만 출력
 */

function solution(str1, str2) {
  const firstStringArr = [];
  const secondStringArr = [];
  let intersectionNumber = 0;
  let unionNumber = 0;

  const getChars = (str, targetArr) => {
    const CHAR_PATTERN = /^[a-z|A-Z]+$/;

    for (let index = 0; index < str.length - 1; index += 1) {
      const char = str.slice(index, index + 2);

      if (!CHAR_PATTERN.test(char)) continue;

      targetArr.push(char.toLowerCase());
    }
  };

  getChars(str1, firstStringArr);
  getChars(str2, secondStringArr);

  /**
   * 둘 다 공집합이거나, 둘 중 하나가 공집할일 경우
   * early return
   */
  if (firstStringArr.length === 0) {
    if (secondStringArr.length === 0) return 65536;

    return 0;
  }

  for (let index = 0; index < firstStringArr.length; index += 1) {
    if (secondStringArr.length === 0) break;

    const target = firstStringArr[index];
    const intersectionIndex = secondStringArr.indexOf(target);

    if (intersectionIndex !== -1) {
      secondStringArr.splice(intersectionIndex, 1);
      intersectionNumber += 1;
    }
  }

  unionNumber = firstStringArr.length + secondStringArr.length;

  return Math.floor((intersectionNumber / unionNumber) * 65536);
}
