/**
 * 정수 삼각형
 * https://school.programmers.co.kr/learn/courses/30/lessons/43105
 */

/**
 * 거쳐간 숫자의 합이 가장 큰 경우 찾기
 * 아래칸으로 이동할 떄는 대각선 방향으로 한 칸(오, 왼)만 가능
 * 최대값 return
 *
 * 우선 최대값을 찾기 위해서는 전부 순회해야할 듯
 * - 아래칸 이동
 *   - 현재 idx에서 +0 혹은 +1 idx으로만 이동 가능
 */

// 실패(시간 초과)
function solution(triangle) {
  let answer = 0;

  const dp = (i, j, total) => {
    if (i === triangle.length - 1) {
      if (total + triangle[i][j] > answer) {
        answer = total + triangle[i][j];
      }

      return;
    }

    dp(i + 1, j, total + triangle[i][j]);
    dp(i + 1, j + 1, total + triangle[i][j]);
  };

  dp(0, 0, 0);

  return answer;
}

/**
 * 잘못 생각했다.
 * 사실 시작 전에 잘못된 풀이라는 것을 알아챘어야했다.
 * O(n) = (1*2)*...*(498*2)*(499*2) 이니까
 * 당연히 시간초과가 날 수 밖에..
 *
 * 새로운 풀이방법은 가장 끝 idx에서부터 시작하는것으로 한다.
 * O(n) = n*(n-1) + (n-1)*(n-2) + ... + 2*1
 */

// 다른 풀이
function solution(triangle) {
  for (let i = triangle.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < triangle[i].length - 1; j += 1) {
      const leftNode = triangle[i][j];
      const rightNode = j !== triangle[i].length - 1 ? triangle[i][j + 1] : 0;

      if (leftNode > rightNode) {
        triangle[i - 1][j] += leftNode;
      } else {
        triangle[i - 1][j] += rightNode;
      }
    }
  }

  return triangle[0][0];
}
