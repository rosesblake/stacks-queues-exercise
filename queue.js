/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val)
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first){
      throw new Error("list is empty")
    }
    let currentHead = this.first;
    let oldHead = currentHead;
    let newHead = currentHead.next
    
    if(this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      currentHead = null;
      this.first = newHead
    }
    this.size -= 1;
    return oldHead.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first){
      throw new Error('stack empty')
    }
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
}

module.exports = Queue;
