const { Stack } = require('../Data Structures/StackQueue');

// Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor(){
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  // push to the inbox -> 1, 2, 3
  // outbox:  3, 2, 1 
  // inbox: 1, 2, 3
  // pop from inbox and push to the outbox -> 3, 2, 1 
  enqueue(value){
    this.inbox.push(value);
  }

  dequeue(){
    if(this.outbox.length() === 0){
      while(this.inbox.length() !== 0){
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

