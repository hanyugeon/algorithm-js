// function solution(maps) {
//   let result = 0;

//   const n = maps.length;
//   const m = maps[0].length;
//   const visited = new Array(n).fill().map((val) => new Array(m).fill(0));

//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];

//   const queue = [];
//   queue.push([0, 0]);

//   visited[[0][0]] = 1;

//   if (maps[n - 2][m - 1] === 0 && maps[n - 1][m - 2] === 0) {
//     return -1;
//   }

//   while (queue.length > 0) {
//     const [y, x] = queue.shift();

//     for (let i = 0; i < 4; i++) {
//       let ny = y + dy[i];
//       let nx = x + dx[i];

//       if (ny < 0 || nx < 0 || ny >= n || nx >= m || maps[ny][nx] === 0) {
//         continue;
//       }
//       if (visited[ny][nx]) {
//         continue;
//       }

//       queue.push([ny, nx]);
//       visited[ny][nx] = visited[y][x] + 1;
//     }
//   }

//   result = visited[n - 1][m - 1];

//   if (!result) return -1;

//   return result;
// }

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
