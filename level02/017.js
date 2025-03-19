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
 *
 * graph와 queue 선언
 * queue에 시작 node 삽입
 * deQueue된 node에서 갈 수 있는 노드 하나씩 inQueue
 * 이때 방문한 node는 체크해서 사이클을 방지 할 것!
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

//
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const isVisited = Array.from(Array(n), () => Array(m).fill(null));

  const dirX = [0, 1, 0, -1];
  const dirY = [1, 0, -1, 0];

  // 목표가 막혀있다면 early return
  if (n > 1 && m > 1) {
    if (maps[n - 2][m - 1] === 0 && maps[n - 1][m - 2] === 0) return -1;
  }
  // 장애물이 없는 2칸 early return
  if (n === 1 && m === 2) return 2;
  if (n === 2 && m === 1) return 2;

  const bfs = (x, y) => {
    // queue 초기화
    const queue = [[x, y]];
    isVisited[x][y] = 1;

    // bfs 순회
    while (queue.length > 0) {
      const [currentX, currentY] = queue.shift();

      for (let dir = 0; dir < 4; dir += 1) {
        const newX = currentX + dirX[dir];
        const newY = currentY + dirY[dir];

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

/**
 * 문득 든 생각.
 * dp? dp가 정확히 뭘까?
 * 재귀함수? dp에 재귀함수가 포함되는 걸까?
 */

/**
 * 시작점은 0, 0
 * isVisited null로 초기화된 2차원 배열 선언
 * 방문한 좌표는 depth로 재선언
 */

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const isVisited = Array.from(Array(n), () => Array(m).fill(null));

  const dirX = [1, 0, -1, 0];
  const dirY = [0, 1, 0, -1];

  // 도착 지점이 막혀있다면 early return
  if (maps[n - 1][m - 2] === 0 && maps[n - 2][m - 1] === 0) {
    return -1;
  }

  const bfs = (x, y) => {
    const queue = [[x, y]];
    isVisited[x][y] = 1;

    while (queue.length > 0) {
      const [curX, curY] = queue.shift();

      for (let dir = 0; dir < 4; dir += 1) {
        const newX = curX + dirX[dir];
        const newY = curY + dirY[dir];

        if (newX < 0 || newX > n - 1) continue;
        if (newY < 0 || newY > m - 1) continue;
        if (maps[newX][newY] === 0) continue;
        if (isVisited[newX][newY] !== null) continue;

        const prevDepth = isVisited[curX][curY];
        queue.push([newX, newY]);
        isVisited[newX][newY] = prevDepth + 1;
      }
    }
  };

  bfs(0, 0);

  return isVisited[n - 1][m - 1] || -1;
}
