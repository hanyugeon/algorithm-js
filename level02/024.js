/**
 * 기능 개발 (큐)
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

function solution(progresses, speeds) {
  if (progresses.length === 1) return [1];

  const queue = [];
  for (let idx = 0; idx < progresses.length; idx += 1) {
    const remaining = 100 - progresses[idx];
    const period = Math.ceil(remaining / speeds[idx]);

    queue.push(period);
  }

  const answer = [];
  let prev = queue[0];
  let count = 1;

  for (let idx = 1; idx < queue.length; idx += 1) {
    if (queue[idx] > prev) {
      answer.push(count);
      count = 1;
      prev = queue[idx];
    } else {
      count += 1;
    }

    if (idx === queue.length - 1) {
      answer.push(count);
      break;
    }
  }

  return answer;
}
