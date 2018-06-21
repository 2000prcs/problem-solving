const { LinkedList } = require('../Data Structures/LinkedList');

// Implement a function to check if a linked list is a palindrome.

const palindromeList = (list) => {
  let original = list;
  let currentNode = list.head;
  let prevNode = null;
  let nextNode = null;
  
  while(currentNode){
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  list.head = prevNode;

  let originalHead = original.head;
  let newHead = list.head;
  while(originalHead && newHead){
    if(originalHead.value !== newHead.value){
      return false;
    }
    originalHead = originalHead.next;
    newHead = newHead.next;
  }
  return originalHead === null && newHead === null;
}



let list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(2);
list.addToTail(2);
console.log(list);
let result = palindromeList(list);
console.log(result);