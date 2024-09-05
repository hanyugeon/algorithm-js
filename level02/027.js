/**
 * 주식 가격
 * https://school.programmers.co.kr/learn/courses/30/lessons/42584
 */

// 초 단위로 기록된 주식가격 배열 prices
// 가격이 떨어지지 않은 기간은 몇 초인지를 return 하기

function solution(prices) {
  // queue에서 하나씩 해당 idx부터 배열을 순회하며
  // 가격이 떨어졌는지 비교하여 time 계산
  const answer = [];

  for (let i = 0; i < prices.length; i += 1) {
    let time = 0;

    // 마지막 항목은 0 push
    if (i === prices.length - 1) {
      answer.push(0);
      break;
    }

    for (let j = i + 1; j < prices.length; j += 1) {
      time += 1;

      if (prices[i] > prices[j]) {
        answer.push(time);
        break;
      }

      if (j === prices.length - 1) {
        answer.push(time);
        break;
      }
    }
  }

  return answer;
}
