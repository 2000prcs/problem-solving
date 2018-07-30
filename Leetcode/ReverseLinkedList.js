const { Node } = require('../Data Structures/LinkedList');


// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

// Solution 1 : Recursion
// Time: O(N)
// Space: O(N)

// The recursive version is slightly trickier and the key is to work backwards. 
// Assume that the rest of the list had already been reversed, now how do I reverse the front part? 
// Let's assume the list is: n1 → … → nk-1 → nk → nk+1 → … → nm → Ø

// Assume from node nk+1 to nm had been reversed and you are at node nk.
// n1 → … → nk-1 → nk → nk+1 ← … ← nm
// We want nk+1’s next node to point to nk.
// So,

// nk.next.next = nk;

// Be very careful that n1's next must point to Ø. If you forget about this, your linked list has a cycle in it. 
// This bug could be caught if you test your code with a linked list of size 2.

// var reverseList = function(head){
//   if(!head || !head.next) {
//       return head;
//   }
//   var list = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return list;
// }

// Solution 2: Iterative
// Time: O(N)
// Space: O(1)

// Assume that we have linked list 1 → 2 → 3 → Ø, we would like to change it to Ø ← 1 ← 2 ← 3.

// While you are traversing the list, change the current node's next pointer to point to its previous element. 
// Since a node does not have reference to its previous node, you must store its previous element beforehand. 
// You also need another pointer to store the next node before changing the reference. 
// Do not forget to return the new head reference at the end!

var reverseList = function(head){
  let prevNode = null;
  let currNode = head;
  while(currNode){
    let nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
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