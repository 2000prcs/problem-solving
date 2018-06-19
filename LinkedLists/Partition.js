const { LinkedList } = require('../Data Structures/LinkedList');

// Write code to partition a linked list around a value x, such that all nodes less than x 
// come before all nodes greater than or equal to x. If x is contained within the list, 
// the values of x only need to be after the elements less than x (see below). 
// The partition element x can appear anywhere in the "right partition"; 
// it does not need to appear between the left and right partitions.
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5] 
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8


const partition = (list, partition) => {
  if(!list.head){
    return null;
  }

  let left;
  let right;
  let currLeft = null;
  let currRight = null;

  let node = list.head;
  while(node){
    if(node.value < partition){
      if(currLeft === null){
        left = node;
        currLeft = left;
      } else {
        currLeft.next = node;
        currLeft = currLeft.next;
      }
    } else {
      if(currRight === null){
        right = node;
        currRight = right;
      } else {
        currRight.next = node;
        currRight = currRight.next;
      }
    }
    node = node.next;
  }

  currRight.next = null;
  currLeft.next = right;
  return left;
}

let list = new LinkedList();
list.addToTail(3);
list.addToTail(5);
list.addToTail(8);
list.addToTail(5);
list.addToTail(10);
list.addToTail(2);
list.addToTail(1);
console.log(list);
let result = partition(list, 5)
console.log(result);