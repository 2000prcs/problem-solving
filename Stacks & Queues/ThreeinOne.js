// Describe how you could use a single array to implement three stacks.

class TripleStack {
  constructor(){
    this._array = [];
    this._lengths = [0, 0, 0];
  }

  getLengths(stack){
    return this._lengths[stack - 1];
  }

  push(stack, value){
    let index = this.getLengths(stack) * 3 + stack - 1;
    this._array[index] = value;
    ++this._lengths[stack - 1];
    return this._array;
  }

  pop(stack){
    let length = this.getLengths(stack);
    let value;
    if(length > 0){
      let index = (length - 1) * 3 + stack - 1;
      value = this._array[index];
      delete this._array[index];
      --this._lengths[stack - 1];
    }
    return value;
  }

  // Return the top of the stack
  peek(stack){
    let length = this.getLengths(stack);
    let value;
    if(length > 0){
      let index = (length - 1) * 3 + stack - 1;
      value = this._array[index];
    }
    return value;
  }

  isEmpty(stack){
    return this._lengths[stack-1] === 0;
  }
}

let stacks = new TripleStack();
let len = stacks.getLengths(1);
console.log(len);
let array = stacks.push(1, 1);
array = stacks.push(1, 2);
array = stacks.push(1, 3);
array = stacks.push(2, 4);
array = stacks.push(2, 5);
array = stacks.push(2, 6);
console.log(array);
let popped = stacks.pop(1);
console.log(popped);
let peekValue = stacks.peek(2);
console.log(peekValue);
let isEmpty = stacks.isEmpty(3);
console.log(isEmpty)