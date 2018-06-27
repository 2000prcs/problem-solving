const { Stack } =  require('../Data Structures/StackQueue');

// Write a program to sort a stack such that the smallest items are on the top. 
// You can use an additional temporary stack, but you may not copy the elements 
// into any other data structure (such as an array). 
// The stack supports the following operations: push, pop, peek, and isEmpty.

// This algorithm is O (N^2) time and O (N) space.
const sortStack = (stack) => {
  let sortedStack = new Stack();
  while(!stack.isEmpty()){
    let temp = stack.pop();
    while(!sortedStack.isEmpty() && sortedStack.peek() < temp){
      stack.push(sortedStack.pop());
    }
    sortedStack.push(temp);
  }
  return sortedStack;
}


let newStack = new Stack();
newStack.push(7);
newStack.push(10);
newStack.push(12);
newStack.push(8);
newStack.push(3);
newStack.push(1);
newStack.push(2);
console.log(newStack)
let result = sortStack(newStack);
console.log(result);