class Stack {
  constructor(){
    this.storage = [];
    this.size = 0;
  }

  push(item){
    this.storage[this.size++] = item;
  }

  pop(){
    let item = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size--;
    return item;
  }

  peek(){
    return this.storage[this.size - 1];
  }

  isEmpty(){
    return this.size === 0;
  }
  
  length(){
    return this.size;
  }
 
}

class Queue {
  constructor(){
    this.storage = [];
    this.start = 0;
    this.end = 0;
  }

  enqueue(item){
    this.storage[this.end++] = item;
  }

  dequeue(){
    let item = this.storage[this.start];
    delete this.storage[this.start];
    this.length() && this.start++;
    return item;
  }

  peek(){
    return this.storage[this.start];
  }
  
  isEmpty(){
    return this.length() === 0;
  }

  length(){
    return this.end - this.start;
  }
  
}

module.exports = {
  Stack: Stack,
  Queue: Queue
};