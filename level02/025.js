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

//복습
/**
 * queue에서 대기중인 프로세스 하나를 꺼냄
 *
 * 큐에 대기중인 프로세스 중 우선순위가 더 높은것이 있다면
 * 방금 꺼낸 프로세스를 다시 enqueue
 *
 * 없다면 방금 꺼낸 프로세스를 실행
 */
function solution(priorities, location) {
  const completedProcesses = [];
  const processes = priorities.map((priority, idx) => [
    priority,
    idx === location,
  ]);
  const sortedPriorities = priorities.sort((a, b) => a - b);

  while (processes.length > 0) {
    const currentProcess = processes.shift();

    if (currentProcess[0] < sortedPriorities[sortedPriorities.length - 1]) {
      processes.push(currentProcess);
      continue;
    } else {
      sortedPriorities.pop();
      completedProcesses.push(currentProcess);

      if (currentProcess[1]) {
        return completedProcesses.length;
      }
    }
  }

  return completedProcesses.length;
}
