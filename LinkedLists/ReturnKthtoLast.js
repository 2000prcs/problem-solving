const { LinkedList } = require('../Data Structures/LinkedList');

// Implement an algorithm to find the kth to last element of a singly linked list.




const findKthToLast = (list, k) => {
  // Solution 1 - using two pointers, second pointer pointing to pointer 1 + k
  // Time complexity : O(N)
  // Additional space: O(1)
  let leftNode = list.head;
  let rightNode = list.head;
  // move rightnode to the kth node
  for(let i = 0; i < k - 1; i++){
    rightNode = rightNode.next;
  }
  while(rightNode.next){
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }
  return leftNode;

  // Solution 2 - iterate through the list, and come back with the amount of K
  // Time complexity : Worst case O(2N) -> O(N)
  // Additional space: O(1)
  // let count = 0;
  // let node = list.head;
  // let result;
  // while(node.next){
  //   count++;
  //   node = node.next;
  // }
  // node = list.head;
  // while(node.next){
  //   if(count === kth){
  //     result = node.value;
  //   }
  //   count--;  
  //   node = node.next;
  // }
  // return result;
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