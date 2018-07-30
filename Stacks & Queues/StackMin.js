// How would you design a stack which, in addition to push and pop, 
// has a function min which returns the minimum element? 
// Push, pop and min should all operate in 0(1) time.

class Stack {
  constructor(){
    this.size = 0;
    this.storage = [];
  }

  push(item){
    let min = this.storage.length > 0 ? this.storage[this.size - 1].min : item;
    this.storage[this.size++] = {val: item, min: Math.min(min, item)};
  }

  pop(){
    let item = this.storage[this.size - 1];
    delete this.storage[this.size--];
    return item ? item.val : null;
  }

  top(){
    return this.storage[this.size - 1].val;
  }

  min(){
    return this.storage[this.size - 1].min;
  }  
}


let newStack = new Stack();
newStack.push(-2);
newStack.push(0);
newStack.push(-3);
console.log(newStack);
let minValue = newStack.min();
console.log(minValue);
console.log(newStack.pop());
console.log(newStack.top());
console.log(newStack.min());