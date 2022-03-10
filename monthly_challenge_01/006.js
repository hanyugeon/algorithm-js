// 삼각 달팽이(좌표 찍기)
// (참고한) 나의 풀이
function solution(n) {
  let answer = [];
  let snail = [];
  let x = 0;
  let y = -1;
  let number = 1;

  for (let i = 1; i < n + 1; i++) {
    const temp = Array(i).fill(0);
    snail.push(temp);
  }

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) {
        y += 1;
      } else if (i % 3 === 1) {
        x += 1;
      } else {
        x -= 1;
        y -= 1;
      }

      snail[y][x] = number;
      number++;
    }
  }

  for (let i = 0; i < n; i++) {
    answer = answer.concat(snail[i]);
  }

  return answer;
}

/**
 * 좌표 찍기.
 * 좌표를 어떠한 기준으로 옮겨갈것인가?
 * 좌표를 옮긴다음 해당 숫자 넣기
 * 모든 숫자가 조건에 맞게 들어간 이후에 하나의 배열로 반환.
 */