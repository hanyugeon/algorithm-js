/**
 * 가장 먼 노드
 * https://school.programmers.co.kr/learn/courses/30/lessons/49189?language=javascript
 */

/**
 * 먼저 그래프를 그린다
 * 인접 행렬로 그릴것인가?
 * 인접 리스트로 그릴것인가?
 *
 * 최단경로 이동했을 때 간선(Edge) 갯수가 가장 많은 노드를 찾는다
 * 최단경로를 어떻게 찾을까?
 * => BFS를 사용해야 한다고 한다.
 */

function solution(n, vertex) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const edge of vertex) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  console.log(graph);

  return 0;
}
