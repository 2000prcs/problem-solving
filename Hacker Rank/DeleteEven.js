const { Node } = require('../Data Structures/LinkedList');

// Given a linked list of integers, return a linked list containing only nodes having odd integers in their node->data field.
// For example, given the list 1 -> 4 -> 7, you would return 1 -> 7

// Complete the deleteEven function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

 // input: 1-> 2-> 3-> 4-> 6
 // output: 1 -> 3


function deleteEven(listHead) {
  if(!listHead) return;
  let prevNode = listHead;
  while(prevNode.next){
    if(prevNode.next.value % 2 === 0){
      prevNode.next = prevNode.next.next;
    } else {
      prevNode = prevNode.next;
    }
  }
  if(listHead.value % 2 === 0){
    listHead = listHead.next;
  }
  return listHead;
}

let one = new Node(2);
let two = new Node(4);
let three = new Node(5);
let four = new Node(6);
let five = new Node(8);
let six = new Node(10);
let seven = new Node(13);

one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;

let removeEven = deleteEven(one);
console.log(removeEven);