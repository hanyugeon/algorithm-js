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

  const visited = new Array(n).fill().map((val) => new Array(m).fill(0));

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  if (maps[n - 1][m - 2] === 0 && maps[n - 2][m - 1] === 0) return -1;

  const bfs = (x, y) => {
    const queue = [];

    visited[x][y] = 1;
    queue.push([x, y]);

    while (queue.length) {
      const [cx, cy] = queue.shift();

      for (let dir = 0; dir < 4; dir += 1) {
        const nx = cx + dx[dir];
        const ny = cy + dy[dir];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
          continue;
        }
        if (maps[nx][ny] === 0 || visited[nx][ny] !== 0) {
          continue;
        }

        visited[nx][ny] = visited[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  };

  bfs(0, 0);
  return visited[n - 1][m - 1] ? visited[n - 1][m - 1] : -1;
}

// 24.11.12 풀이
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const isVisited = Array.from(Array(n), () => Array(m).fill(null));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

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
