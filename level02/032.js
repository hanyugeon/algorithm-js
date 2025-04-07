/**
 * 택배상자
 * https://school.programmers.co.kr/learn/courses/30/lessons/131704
 */

/**
 * 영재가 택배상자를 트럭에 실어야함
 * 택배상자 크기는 모두 같다
 *
 * 1번 부터 n번 상자까지 증가 순서대로 컨테이너 벨트에 일렬로 놓여 영재에게 전달
 * 벨트는 한방향으로만 진행, 1번 상자부터 내릴 수 있음
 *
 * 하지만 바로 트럭에 싣게되면 배달하는 순서와 맞지 않음
 * 택배 기사님이 미리 알려준 순서에 맞게 영재가 실어야 함
 * 순서가 아니라면 상자를 잠시 다른곳에 보관
 *
 * 그래서 보조 컨테이너 벨트를 추가로 설치
 * 보조 컨태이너는 Stack 구조
 * 보조 컨테이너 사용해도 실을 수 없으면 상자를 더이상 싣지 않음
 *
 * 영재가 실을 수 있는 상자의 수 return
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

  enqueue(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;

    this.head = this.head.next;
    this.size -= 1;

    return value;
  }
}

function solution(order) {
  // 메인 컨테이너 초기화
  const mainQueue = new Queue();
  for (let idx = 1; idx <= order.length; idx += 1) {
    mainQueue.enqueue(idx);
  }

  // 보조 컨테이너 초기화
  const subStack = [];

  // 실은 상자 갯수, 순회 조건 변수 초기화
  let result = 0;
  let orderIdx = 0;
  let flag = true;

  // 메인 컨테이너 순회
  while (flag) {
    if (mainQueue.size === 0) {
      if (subStack.length <= 0) {
        flag = false;
        break;
      }
      const newBox = subStack.pop();

      if (order[orderIdx] === newBox) {
        result += 1;
        orderIdx += 1;
        continue;
      } else {
        flag = false;
        continue;
      }
    }

    if (order[orderIdx] === mainQueue.head.value) {
      mainQueue.dequeue();
      result += 1;
      orderIdx += 1;
      continue;
    } else if (order[orderIdx] === subStack[subStack.length - 1]) {
      subStack.pop();
      result += 1;
      orderIdx += 1;
      continue;
    } else {
      const newBox = mainQueue.dequeue();
      subStack.push(newBox);
      continue;
    }
  }

  return result;
}

/**
 * 후기
 *
 * 굳이 queue를 선언할 필요는 없었다.
 * why? 다른 idx 변수를 선언하고
 * 1 부터 order의 length까지만 순회하도록 하면 됨
 */
