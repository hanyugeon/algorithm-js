/**
 * 여행 경로
 * https://school.programmers.co.kr/learn/courses/30/lessons/43164
 */

/**
 * 여행 경로 짜기
 * [a, b]는 a에서 b로 가는 항공권 (a -> b)
 *
 * 주어진 항공권은 모두 사용할 것
 * 가능한 경로 2개 이상일 경우, 알파벳 순서가 앞서는 경로를 갈 것
 * 모든 도시를 방문할 수 없는 경우는 주어지지 않는다!
 * 다만 같은 항공권이 나올 수 있다!
 *
 * 방향 그래프
 * 그래프 먼저 그리기
 * 순회 방법은?
 */

// 실패
function solution(tickets) {
  const answer = [];
  const graph = {};
  for (const [departure, destination] of tickets) {
    if (!graph[departure]) {
      graph[departure] = [];
    }

    graph[departure].push(destination);
  }

  for (const ticket in graph) {
    graph[ticket].sort().reverse();
  }

  const dfs = () => {
    const stack = ["ICN"];

    while (stack.length > 0) {
      const currentNode = stack.pop();
      answer.push(currentNode);

      if (graph[currentNode] && graph[currentNode].length > 0) {
        const newNode = graph[currentNode].pop();
        stack.push(newNode);
      } else {
        break;
      }
    }
  };

  dfs();

  return answer;
}

// 성공
function solution(tickets) {
  const graph = {};
  for (const [departure, destination] of tickets) {
    if (!graph[departure]) {
      graph[departure] = [];
    }

    graph[departure].push(destination);
  }

  for (const ticket in graph) {
    graph[ticket].sort().reverse();
  }

  const answer = [];
  const stack = ["ICN"];

  while (stack.length > 0) {
    const currentNode = stack[stack.length - 1];

    if (graph[currentNode] && graph[currentNode].length > 0) {
      const newNode = graph[currentNode].pop();

      stack.push(newNode);
    } else {
      answer.push(stack.pop());
    }
  }

  return answer;
}

/**
 * 도대체 어떤 경우에 통과가 안되는걸까
 * 진짜 모르겠다 하...
 */
