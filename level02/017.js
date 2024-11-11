/**
 * 게임 맵 최단거리
 * https://school.programmers.co.kr/learn/courses/30/lessons/1844
 */

/**
 * BFS일지 DFS일지 판단하기
 * 해당 문제는 BFS
 *
 * queue 활용이 진짜 근본인듯
 * 재귀함수로 삽질하지말고
 * queue를 활용할 수 있도록 노력해보자
 */

// 24.08.29 풀이
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const isVisited = Array.from(Array(n), () => Array(m).fill(null));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  if (n === 1 && m === 2) return 2;
  if (n === 2 && m === 1) return 2;
  if (n > 1 && m > 1) {
    if (maps[n - 2][m - 1] === 0 && maps[n - 1][m - 2] === 0) return -1;
  }

  const bfs = (x, y) => {
    const queue = [[x, y]];
    isVisited[x][y] = 1;

    while (queue.length) {
      const [currentX, currentY] = queue.shift();

      for (let d = 0; d < dx.length; d += 1) {
        const newX = currentX + dx[d];
        const newY = currentY + dy[d];

        if (newX < 0 || newX > n - 1) continue;
        if (newY < 0 || newY > m - 1) continue;
        if (maps[newX][newY] === 0) continue;
        if (isVisited[newX][newY] !== null) continue;

        const prevDepth = isVisited[currentX][currentY];
        queue.push([newX, newY]);
        isVisited[newX][newY] = prevDepth + 1;
      }
    }
  };

  bfs(0, 0);

  return isVisited[n - 1][m - 1] || -1;
}
