const { LinkedList, Node } = require('../Data Structures/LinkedList');

// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, 
// so as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C

const detectLoop = (node) => {

  // Solution 1: using two pointers 
  // Time: O(N)
  // Additional space: O(1)

  let slow = node;
  let fast = node;
  let fastOnly = false;
  while(fast = fast.next){
    if(slow === fast){
      return slow.value;
    }
    if(!fastOnly){
      slow = slow.next;
    } 
    fastOnly = !fastOnly;
  }
  return null;

  // Solution 2: using Set or Hashtable 
  // Time: O(N) - assumes Set is hashmap based so O(1) costs
  // Additional space: O(N)

  // let nodes = new Set();
  // while(node){
  //   if(nodes.has(node)){
  //       return node.value;
  //   } 
  //   nodes.add(node);
  //   node = node.next;
  // }
  // return null;
}

let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeC;

let result = detectLoop(nodeA);
console.log(result);