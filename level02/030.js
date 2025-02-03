/**
 * 타겟 넘버
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165
 */

/**
 * BFS를 쓸지 DFS를 쓸지
 * 구분하는게 관건인듯!
 */

function solution(numbers, target) {
  let answer = 0;

  const dfs = (idx, sum) => {
    if (idx === numbers.length - 1) {
      if (sum === target) {
        answer++;
      }

      return;
    }

    dfs(idx + 1, sum + numbers[idx + 1]);
    dfs(idx + 1, sum - numbers[idx + 1]);
  };

  dfs(0, numbers[0]);
  dfs(0, -numbers[0]);

  return answer;
}

/**
 * 재귀 함수
 * 지금보니 정석적인 DFS는 아닌듯
 * 트리 구조에서의 DFS를 참조해 풀이한 느낌?
 */

function solution(numbers, target) {
  let answer = 0;

  const dfs = (acc, idx) => {
    if (idx === numbers.length - 1) {
      if (acc === target) answer += 1;

      return;
    }

    dfs(acc + numbers[idx + 1], idx + 1);
    dfs(acc - numbers[idx + 1], idx + 1);
  };

  dfs(numbers[0], 0);
  dfs(-numbers[0], 0);

  return answer;
}
