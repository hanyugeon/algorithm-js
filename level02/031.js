/**
 * 점프와 순간 이동
 * https://school.programmers.co.kr/learn/courses/30/lessons/12980
 */

/**
 * 특수한 기능 가진 아이언 슈트
 * - 한 번에 K 칸을 앞으로 점프
 *   - K 만큼의 건전지 사용량
 * - (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동
 *   - 건전지 사용량 X
 *   - 순간이동을 사용하는것이 조금 더 효율적이다!
 *
 * 거리가 N 만큼 떨어져있는 장소로 가려한다.
 * 점프로 이동하는 것은 최소로 하려 한다.
 * 사용해야 하는 건전지 사용량의 최솟값 return 하기.
 *
 * 처음 위치는 0으로 한다.
 * 처음엔 무조건 K만큼 점프해야함.
 *
 * 짝수일때와 홀수일때를 나누어 생각해보자.
 * - 짝수: 절반까지의 최단거리 구하기
 * - 홀수: (홀수 - 1)의 최단거리 구하기 + 1
 */

function solution(n) {
  let target = n;
  let jumpCount = 1;

  const isEven = (number) => {
    return number % 2 === 0;
  };

  while (target !== 1) {
    if (isEven(target)) {
      target = target / 2;
      continue;
    } else {
      jumpCount += 1;
      target = (target - 1) / 2;
      continue;
    }
  }

  return jumpCount;
}
