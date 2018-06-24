// How would you design a stack which, in addition to push and pop, 
// has a function min which returns the minimum element? 
// Push, pop and min should all operate in 0(1) time.

class Stack {
  constructor(){
    this.size = 0;
    this.storage = [];
  }

  push(item){
    console.log(this.storage[this.size-1])
    if(this.storage[this.size-1] && item > this.storage[this.size-1]){
      let lastVal = this.storage[this.size - 1];
      this.storage[this.size-1] = item;
      this.storage[this.size++] = lastVal;
    } else {
      this.storage[this.size++] = item;
    }
    console.log(this.storage)
    console.log(this.size)
  }

  pop(){
    let value = this.storage[this.size];
    delete this.storage[this.size--];
    return value;
  }

  min(){
    return this.storage[this.size - 1];
  }  
}


let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
let minValue = newStack.min();
console.log(minValue);