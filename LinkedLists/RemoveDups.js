const { LinkedList } = require('../DataStructures/LinkedList');


// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?


const removeDups = (list) => {
  if(!list){
    return list;
  }
  // solution 1
  // using two pointers
  // time complexity: O(N^2) but runs in O(1) space  without a temporary buffer
  let currentNode = list.head;
  while(currentNode){
    let runner = currentNode;
    while(runner.next){
      if(runner.next.value === currentNode.value){
        if(runner.next === list.tail){
          list.tail = runner;
        }
        runner.next = runner.next.next
      } else {
        runner = runner.next;
      }
    }
    currentNode = currentNode.next;
  }

  //solution 2
  // using Set
  // time complexity: O(N) - where N is the nmumber of elements in the linked list

  // let storage = new Set();
  // let node = list.head;
  // storage.add(node.value);
  // while(node.next){
  //   if(storage.has(node.next.value)){
  //     if(node.next === list.tail){
  //       list.tail = node;
  //     }
  //     node.next = node.next.next;
  //   } else {
  //     storage.add(node.next.value);
  //     node = node.next;
  //   }
  // }
  return list;
}

let list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(1);
list.addToTail(4);
list.addToTail(2);
console.log(list);
let result = removeDups(list);
console.log(result);
console.log(result.tail)