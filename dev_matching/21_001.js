// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  const answer = [7, 7];
  const count = [0, 0];
  let bonus = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      bonus++;
      continue;
    }

    if (win_nums.includes(lottos[i])) {
      count[0]++;
      continue;
    }
  }

  count[1] += count[0];
  count[0] += bonus;
  answer[0] -= count[0];
  answer[1] -= count[1];

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] < 0) {
      answer[i] = 1;
    } else if (answer[i] > 6) {
      answer[i] = 6;
    }
  }

  return answer;
}
