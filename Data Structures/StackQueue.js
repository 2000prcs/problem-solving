class Stack {
  constructor(){
    this.storage = [];
    this.size;
  }

  
 
}

class Queue {
  constructor(){
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  
}

module.exports = {
  Stack: Stack,
  Queue: Queue
};