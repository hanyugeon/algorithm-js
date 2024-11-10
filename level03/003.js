/**
 * 네트워크
 * https://school.programmers.co.kr/learn/courses/30/lessons/43162
 */

/**
 * 이미 인접 행렬 리스트로 그래프가 구현돼있음
 * 각 노드를 BFS를 통해 순회하며
 * 거쳐간 노드들을 체크하자.
 *
 * BFS가 한번 순회될 때 마다
 * answer++를 해주자.
 *
 * 필요한 것
 * 1. BFS 순회 함수
 * 2. 순회시에 노드를 체크할 로직
 */

function solution(n, computers) {
  let answer = 0;
  const checkList = Array(n).fill(false);

  const bfs = (node) => {
    checkList[node] = true;

    for (let idx = 0; idx < computers.length; idx += 1) {
      // 같은 노드
      if (node === idx) continue;
      // 방문한곳
      if (checkList[idx] === true) continue;
      // 갈 수 없는 곳
      if (computers[node][idx] === 0) continue;

      bfs(idx);
    }
  };

  for (let node = 0; node < computers.length; node += 1) {
    if (!checkList[node]) {
      answer += 1;
    }
    bfs(node);
  }

  return answer;
}
