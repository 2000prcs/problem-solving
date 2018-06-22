const { LinkedList } = require('../Data Structures/LinkedList');

// Implement a function to check if a linked list is a palindrome.

const palindromeList = (list) => {
  // solution 1 -> referse and compare from the middle
  // time complexity O(N)
  // Space (O(1))
  let node = list.head;
  let listLen = 0;
  let mid;
  let halfList = new LinkedList();
  while(node){
    listLen++;
    node = node.next;
  }
  mid = listLen / 2;
  node = list.head;
  let counter = 0;
  while(counter <= mid){
    halfList.addToTail(node.value);
    counter++;
    node = node.next;
  }
  let reversed = reverseList(halfList);

  function reverseList(list){
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
    return list.head;
  }

  if(listLen % 2 !== 0){
    reversed = reversed.next;
  }
  counter = 0;
  while(counter <= mid && node && reversed){
    if(node.value !== reversed.value){
      return false;
    }
    counter++;
    node = node.next;
    reversed = reversed.next;
  }
  return true;

  // solution 2 -> using Stack
  // Time complexity: O(N)
  // Space: O(N)

  // let node = list.head;
  // let listLen = 0;
  // let mid;
  // let stack = [];
  // while(node){
  //   listLen++;
  //   node = node.next;
  // }
  // mid = Math.floor(listLen/2);
  // node = list.head;
  // for(let i = 0; i < mid; i++){
  //   stack.push(node.value);
  //   node = node.next;
  // }
  // if(listLen % 2 !== 0){
  //   node = node.next;
  // }
  // while(node){
  //   if(node.value !== stack.pop()){
  //     return false;
  //   }
  //   node = node.next;
  // }
  // return true;
}



let list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(2);
list.addToTail(1);
console.log(list);
let result = palindromeList(list);
console.log(result);