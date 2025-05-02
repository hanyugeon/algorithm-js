/**
 * 기능 개발
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

// 복습
/**
 * 기능 개선 작업 중, 각 기능은 100%일 때 서비스에 반영 가능
 *
 * 각 기능의 개발 속도 상이, 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발 될 수도
 * 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포
 *
 * 각 진도와 개발 속도 배열 2개 부여
 * 각 배포마다 몇 개의 기능이 배포되는지를 return
 *
 * 무턱대고 class Queue 만들지 않기.
 */
function solution(progresses, speeds) {
  if (progresses.length === 1) return [1];

  const answer = [];

  while (progresses.length > 0) {
    const currentProgress = progresses.shift();
    const currentSpeed = speeds.shift();
    const currentRemain = Math.ceil((100 - currentProgress) / currentSpeed);

    let completeCount = 1;

    for (let idx = 0; idx < progresses.length; idx += 1) {
      progresses[idx] += speeds[idx] * currentRemain;
    }

    while (progresses.length >= 0) {
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        completeCount += 1;

        continue;
      } else {
        answer.push(completeCount);
        break;
      }
    }
  }

  return answer;
}
