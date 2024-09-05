/**
 * 프로세스
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 */

function solution(priorities, location) {
  let answer = 0;
  const stack = priorities.map((v) => v).sort((a, b) => a - b);
  const queue = [];
  priorities.forEach((value, idx) =>
    queue.push({ priority: value, target: idx === location })
  );

  let queueHead = 0;
  while (stack.length > 0) {
    if (queue[queueHead].priority === stack[stack.length - 1]) {
      answer += 1;
      if (queue[queueHead].target) return answer;

      stack.pop();
    } else {
      queue.push(queue[queueHead]);
    }

    queue[queueHead] = null;
    queueHead += 1;
  }

  return answer;
}
