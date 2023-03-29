/**
 * n 미터 만큼 페인트가 칠해진 벽
 * 포스터 등을 게시, 철거 과정에서 페인트가 벗겨짐
 * 덧칠 작업
 *
 * 구역을 나누어 일부만 페인트 새로 칠하기로
 * 1m씩 n개의 구역
 * 왼쪽부터 1번 -> n번
 */

function solution(n, m, section) {
  let answer = 0;

  while (section.length > 0) {
    const target = section.shift();

    for (let idx = 1; idx < m; idx += 1) {
      if (target + idx > n) break;
      if (section.includes(target + idx)) {
        section.shift();
        continue;
      }
    }

    answer += 1;
  }

  return answer;
}

function solution(n, m, section) {
  let answer = 0;
  let progress = 0;

  for (let target of section) {
    if (progress < target) {
      answer += 1;
      progress = target + m - 1;
    }

    if (progress > n) return answer;
  }

  return answer;
}
