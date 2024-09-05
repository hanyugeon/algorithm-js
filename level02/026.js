/**
 * 다리를 지나는 트럭
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583
 */

// 모든 트럭이 다리 건너는시간 최소 몇초 걸리는지 구하기
// 다리에는 트럭이 최대 bridge_length대 올라갈 수 있음
// 다리는 weight 이하까지의 무게 견딜 수 있음.
// 완전히 오르지 않은 트럭의 무게는 무시

function solution(bridge_length, weight, truck_weights) {
  // 패스 트럭 수 !== 전체 트럭 수
  // 0이든 트럭이든 bridgeQueue dequeue
  // 트럭: 패스 트럭수 ++, 다리 무게 --

  // 과적이 아닐 때: 대기 중 트럭 deQueue, 다리 위 트럭 inQueue, 다리 무게 ++
  // 과적일 때: 대기 중 트럭에 0을 inQueue

  // 경과 시간 ++

  const bridgeQueue = Array(bridge_length).fill(0);
  let bridgeWeight = 0;

  const totalCount = truck_weights.length;
  let passedCount = 0;

  let time = 0;

  while (totalCount !== passedCount) {
    // 뻥카든 진짜든 일단 한개 deQueue -> time += 1
    const passedTruck = bridgeQueue.shift();

    // 뻥카가 아니다 -> 다리 무게 -= 패스한 트럭 무게, pass 카운트 += 1
    if (passedTruck !== 0) {
      bridgeWeight -= passedTruck;
      passedCount += 1;
    }

    // 과적이 아님 -> 다리에 다음 트럭 inQueue
    if (bridgeWeight + truck_weights[0] <= weight) {
      const dequeueTruck = truck_weights.shift();
      bridgeQueue.push(dequeueTruck);

      bridgeWeight += dequeueTruck;
    } else {
      // 과적이면 뻥카 inQueue
      bridgeQueue.push(0);
    }

    time += 1;
  }

  return time;
}
