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
  
  length(){
    return this.size;
  }
 
}

class Queue {
  constructor(){
    this.storage = [];
    this.size = 0;
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