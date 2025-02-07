/**
 * 나무 공격
 * https://softeer.ai/practice/9657
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
const props = {
  size: [],
  field: [],
  pattern: [],
};

rl.on("line", (line) => {
  lines.push(line.split(" "));
}).on("close", () => {
  // size 초기화 number[]
  lines[0].forEach((el) => props.size.push(Number(el)));

  // field 초기화 string[][]
  for (let idx = 1; idx < lines.length - 2; idx += 1) {
    props.field.push(lines[idx]);
  }

  // pattern 초기화 number[]
  props.pattern.push(lines[lines.length - 2].map((value) => Number(value)));
  props.pattern.push(lines[lines.length - 1].map((value) => Number(value)));

  // solution
  // 초기 환경 파괴범 total
  let count = 0;
  for (const grid of props.field) {
    for (const item of grid) {
      if (item === "1") count += 1;
    }
  }

  for (
    let idx = props.pattern[0][0] - 1;
    idx <= props.pattern[0][1] - 1;
    idx += 1
  ) {
    const target = props.field[idx].indexOf("1");
    if (target !== -1) {
      props.field[idx][target] = "0";
      count -= 1;
    }
  }
  for (
    let idx = props.pattern[1][0] - 1;
    idx <= props.pattern[1][1] - 1;
    idx += 1
  ) {
    const target = props.field[idx].indexOf("1");
    if (target !== -1) {
      props.field[idx][target] = "0";
      count -= 1;
    }
  }

  console.log(count);
  process.exit(0);
});
