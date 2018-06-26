// How would you design a stack which, in addition to push and pop, 
// has a function min which returns the minimum element? 
// Push, pop and min should all operate in 0(1) time.

class Stack {
  constructor(){
    this.size = 0;
    this.storage = [];
    this.minVal = undefined;
  }

  push(item){
    if(this.minVal && item < this.minVal){
      this.minVal = item;
    } else if (!this.minVal){
      this.minVal = item;
    }
    this.storage[this.size++] = item;
  }

  pop(){
    let value = this.storage[this.size];
    delete this.storage[this.size--];
    return value;
  }

  min(){
    return this.minVal;
  }  
}


let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
let minValue = newStack.min();
console.log(minValue);