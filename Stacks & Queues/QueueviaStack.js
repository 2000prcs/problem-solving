const { Stack } = require('../Data Structures/StackQueue');

// Implement a MyQueue class which implements a queue using two stacks.

// Time: enqueue O(1), dequeue O(N)
// Additional space: O(N) - to hold the input items

class MyQueue {
  constructor(){
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value){
    this.inbox.push(value);
  }

  dequeue(){
    if(this.outbox.length() === 0){
      while(this.inbox.length() > 0){
        this.outbox.push(this.inbox.pop());
      }
    }
    return this.outbox.pop();
  }

  length(){
    return this.inbox.length() + this.outbox.length();
  }

}


let queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
let dequeued = queue.dequeue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
let dequeued2 = queue.dequeue();
let len = queue.length();
console.log(len);
console.log(dequeued);
console.log(dequeued2);
console.log(queue);

