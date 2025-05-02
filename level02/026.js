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

// 복습
/**
 * 트럭 여러 대가 일차선 다리를 정해진 순으로 건넘
 * 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return
 *
 * 다리에는 트럭이 최대 bridge_length대 올라갈 수 있음
 * 다리는 weight 이하의 무게를 견딜 수 있음
 * 다리에 완전히 오르지 않은 트럭의 무게는 무시
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  dequeue() {
    if (this.head === null) return null;

    const value = this.head.value;

    this.head = this.head.next;
    this.size -= 1;

    return value;
  }

  peek() {
    if (this.head === null) return null;

    return this.head.value;
  }
}

function solution(bridge_length, weight, truck_weights) {
  const trucksQueue = new Queue();
  const bridgeQueue = new Queue();
  let currentWeight = 0;
  let time = 0;

  for (const truck of truck_weights) {
    trucksQueue.enqueue(truck);
  }

  while (trucksQueue.size >= 0) {
    // 대기중인 트럭이 0대 일 때
    if (trucksQueue.size === 0) {
      time += bridge_length;
      break;
    }

    const newTruck = trucksQueue.peek();
    time += 1;

    // 무게 제한 검사
    if (currentWeight + newTruck > weight) {
      bridgeQueue.enqueue(0);
    } else {
      bridgeQueue.enqueue(newTruck);
      trucksQueue.dequeue();

      currentWeight += newTruck;
    }

    // 도착한 트럭 dequeue
    if (bridgeQueue.size === bridge_length) {
      const passedTruck = bridgeQueue.dequeue();

      currentWeight -= passedTruck;
    }
  }

  return time;
}
