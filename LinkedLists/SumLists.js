const { LinkedList } = require('../Data Structures/LinkedList');

// You have two numbers represented by a linked list, where each node contains a single digit.
// The digits are stored in reverse order, such that the 1 's digit is at the head of the list. 
// Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input:(7-> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295. Output:2 -> 1 -> 9. That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem. 
// EXAMPLE
// lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295. Output:9 -> 1 -> 2. That is, 912.


const sumLists = (list1, list2) => {
  let list = new LinkedList();
  let carry = 0;
  let node1 = list1.head;
  let node2 = list2.head;
  let sum = 0;
  
  while(node1 && node2){
    sum = node1.value + node2.value + carry;
    if(sum >= 10){
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    list.addToTail(sum);
    node1 = node1.next;
    node2 = node2.next;
  }

  node1 = node1 || node2;
  while(node1){
    sum = node1.value + carry;
    if(sum >= 10){
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    list.addToTail(sum);
    node1 = node1.next;
  }

  if(carry > 0){
    list.addToTail(carry);
  }

  return list;

  // Solution 2 - get the sum first and then create a linkedlist

  // let num1 = '';
  // let num2 = '';

  // let node1 = list1.head;
  // let node2 = list2.head;
  // while(node1 || node2){
  //   num1 += node1.value;
  //   num2 += node2.value;
  //   node1 = node1.next;
  //   node2 = node2.next;
  // }

  // num1 = num1.split('').reverse().join('');
  // num2 = num2.split('').reverse().join('');

  // let newNum = Number(num1) + Number(num2);
  // let newString = newNum.toString();

  // let list = new LinkedList();
  // for(let i = 0; i < newString.length; i++){
  //   list.addToTail(Number(newString[i]));
  // }

  // return list;
}

let list1 = new LinkedList();
list1.addToTail(7);
list1.addToTail(1);
list1.addToTail(6);

let list2 = new LinkedList();
list2.addToTail(5);
list2.addToTail(9);
list2.addToTail(2);

let result = sumLists(list1, list2);
console.log(result);

let list3 = new LinkedList();
list3.addToTail(5);
list3.addToTail(9);
list3.addToTail(9);
list3.addToTail(2);

let result2 = sumLists(list1, list3);
console.log(result2);
