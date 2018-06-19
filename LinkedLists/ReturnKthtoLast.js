const { LinkedList } = require('../Data Structures/LinkedList');

// Implement an algorithm to find the kth to last element of a singly linked list.

const findKthToLast = (list, kth) => {
  // solution 2 - iterative way
  // Time complexity : O(N)
  // Additional space: O(1)
  let count = 0;
  let node = list.head;
  let result;
  while(node.next){
    count++;
    node = node.next;
  }
  node = list.head;
  while(node.next){
    if(count === kth){
      result = node.value;
    }
    count--;  
    node = node.next;
  }
  return result;
}

let list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
console.log(list);
let result = findKthToLast(list, 2);
console.log(result);