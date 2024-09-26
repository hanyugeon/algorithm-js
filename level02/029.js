/**
 * 의상
 * https://school.programmers.co.kr/learn/courses/30/lessons/42578
 */

/**
 * 코니의 옷 조합
 * 종류: 얼굴, 상의, 하의, 겉옷
 * 종류별로 최대 1가지 의상 착용
 * 최소 하루에 최소 한 개의 의상을 입음
 */

function solution(clothes) {
  const clothesTable = new Map();

  for (const cloth of clothes) {
    const prevData = clothesTable.get(cloth[1]);

    if (prevData) {
      clothesTable.set(cloth[1], [cloth[0], ...prevData]);
    } else {
      clothesTable.set(cloth[1], [cloth[0]]);
    }
  }

  let answer = 1;
  clothesTable.forEach((value) => {
    answer *= value.length + 1;
  });

  return answer - 1;
}
