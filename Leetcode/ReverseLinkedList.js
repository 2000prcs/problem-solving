const { Node } = require('../Data Structures/LinkedList');


// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

// Solution 1 : Recursion

var reverseList = function(head){
  if(!head || !head.next) {
      return head;
  }
  var list = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return list;
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
one.next = two;
two.next = three;
three.next = four;
four.next = five;

let reversed = reverseList(one);
console.log(reversed);