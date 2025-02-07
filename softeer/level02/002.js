/**
 * 진정한 효도
 * https://softeer.ai/practice/7374
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

/*
각 땅의 높이는 1 이상 3 이하의 정수

예를 들어 부모님께서 농사를 지을 땅의 크기 1 * 3
따라서 남우는 특정 땅의 높이를 낮추거나 높여 3 * 3 격자내에
부모님께서 농사를 지을 수 있는 영역이 "최소 1곳" 이상 생기도록 만들어야 함.

땅의 높이를 1만큼 낮추거나 높이는데 1만큼의 비용 소모
남우에게 필요한 최소 비용 구하기

* note *
1 * 3 크기의 영역은 가로, 세로로 놓이는 것이 모두 가능
*/

rl.on("line", (line) => {
  lines.push(line.split(" ").map((v) => Number(v)));
}).on("close", () => {
  const n = lines.length;
  const m = lines[0].length;

  const dx = [2, 0];
  const dy = [0, 2];

  const costs = [];

  const getCost = ([a, b, c]) => {
    const temp = [];

    for (let level = 1; level <= 3; level += 1) {
      let cost = 0;

      const A = level - a > 0 ? level - a : (level - a) * -1;
      const B = level - b > 0 ? level - b : (level - b) * -1;
      const C = level - c > 0 ? level - c : (level - c) * -1;

      cost += A + B + C;

      temp.push(cost);
    }

    return temp.sort((a, b) => a - b)[0];
  };

  for (let x = 0; x < n; x += 1) {
    for (let y = 0; y < m; y += 1) {
      for (let d = 0; d < 2; d += 1) {
        // 범위를 벗어나면 continue
        if (x + dx[d] < 0 || x + dx[d] > n - 1) continue;
        if (y + dy[d] < 0 || y + dy[d] > m - 1) continue;

        // 그렇지 않다면 cost 계산
        const a = lines[x][y];
        const b = lines[(x + x + dx[d]) / 2][(y + y + dy[d]) / 2];
        const c = lines[x + dx[d]][y + dy[d]];
        const cost = getCost([a, b, c]);

        if (cost === 0) return console.log(0);

        costs.push(cost);
      }
    }
  }

  console.log(costs.sort((a, b) => a - b)[0]);

  process.exit(0);
});
