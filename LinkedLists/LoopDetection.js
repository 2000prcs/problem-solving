const { LinkedList, Node } = require('../Data Structures/LinkedList');

// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, 
// so as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C

const detectLoop = (head) => {
  let nodes = {};
  while(head){
    if(nodes[head.value]){
      if(head === nodes[head.value]){
        return head.value;
      }
    } 
    nodes[head.value] = head;
    head = head.next;
  }
  console.log(nodes)
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