const { LinkedList, Node } = require('../Data Structures/LinkedList');

// Given two (singly) linked lists, determine if the two lists intersect. 
// Return the inter­ secting node. Note that the intersection is defined based on reference, not value. 
// That is, if the kth node of the first linked list is the exact same node (by reference) 
// as the jth node of the second linked list, then they are intersecting.

const findIntersection = (head1, head2) => {
  let oldHead = head2;
  while(head1){
    while(head2){
      if(head1.value === head2.value){
        if(head1 === head2){
          return head1.value;
        }
      }
      head2 = head2.next;
    }
    head2 = oldHead;
    head1 = head1.next;
  }
  return undefined;
}


let node1 = new Node(3);
let node2 = new Node(1);
let node3 = new Node(5);
let node4 = new Node(9);
let node5 = new Node(7);
let node6 = new Node(2);
let node7 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

let node8 = new Node(4);
let node9 = new Node(6);

node8.next = node9;
node9.next = node5;

console.log(node1, node8);

let result = findIntersection(node1, node8);
console.log(result);
