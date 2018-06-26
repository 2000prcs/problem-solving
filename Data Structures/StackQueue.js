class Stack {
  constructor(){
    this.storage = [];
    this.size;
  }

  push(item){
    this.storage[this.size++] = item;
  }

  pop(){
    this.storage[this.size] && this.storage[this.size--];
    let item = this.storage[this.size];
    delete this.storage[this.size];
    return item;
  }
  
  length(){
    return this.size;
  }
 
}

class Queue {
  constructor(){
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(item){

  }

  dequeue(){

  }
  
  length(){
    return this.size;
  }
  
}

module.exports = {
  Stack: Stack,
  Queue: Queue
};