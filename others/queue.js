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

  peek() {
    return this.head.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.size);

queue.dequeue();
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
console.log(queue);
