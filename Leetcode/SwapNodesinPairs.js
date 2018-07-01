const { Node } = require('../Data Structures/LinkedList');

// Given a linked list, swap every two adjacent nodes and return its head.

// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.
// Note:

// Your algorithm should use only constant extra space.
// You may not modify the values in the list's nodes, only nodes itself may be changed.

var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let one = head;
  head = one.next;
  while (one && one.next) {
      let three = one.next.next;
      one.next.next = one;
      one.next = three && three.next ? three.next : three;
      one = three;
  }
  return head;
};

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
let swapped = swapPairs(one);
console.log(swapped);
