// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
// threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack 
// (that is, pop() should return the same values as it would if there were just a single stack).
// FOLLOW UP
// Implement a function pop At (int index) which performs a pop operation on a specific sub-stack.

const { Stack } = require('../Data Structures/StackQueue');


class StackOfPlates {
  constructor(limitValue){
    this.limit = limitValue;
    this.size = 0;
    this.storagesSize = 0;
    this.storages = [];
  }

  push(value){
    if(this.storagesSize === 0 || this.storages[this.storagesSize - 1].size >= this.limit){
      let stack = new Stack();
      stack.push(value);
      this.storages[this.storagesSize++] = stack;
    } else {
      this.storages[this.storagesSize - 1].push(value);
    }
  }

  pop(){
    let item = this.storages[this.storagesSize - 1].pop();
    if(this.storages[this.storagesSize - 1].size === 0){
      delete this.storages[this.storagesSize - 1];
      this.storagesSize--;
    }
    return item;
  }

  popAt(at){
    let item = this.storages[at - 1].pop();
    if(this.storages[at - 1].size === 0){
      delete this.storages[at - 1];
      this.storagesSize--;
    }
    return item;
  }

}

let plates = new StackOfPlates(3);
plates.push(1);
plates.push(2);
plates.push(3);
plates.push(4);
plates.push(5);
plates.push(6);
let popped = plates.pop();
let poppedAt = plates.popAt(1);
console.log(popped);
console.log(poppedAt);
console.log(plates);
