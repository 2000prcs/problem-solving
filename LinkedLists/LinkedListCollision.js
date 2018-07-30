var Node = function(value) {
  return { 
    value: value, 
    next: null 
  };
};


function detectLoop(head){
  let slow = head;
  let fast = head;
  while(slow && fast){
   slow = slow.next;

   // if hits null, then there is no loop
   if(!fast.next){
     return null;
   }
   
   fast = fast.next.next;

   if(slow === fast){
     slow = head;
     while(slow !== fast){
       slow = slow.next;
       fast = fast.next;
     }
     return slow;
   }
  }
}


//   A -> B -> C
//        ^    |
//        |    v
//        E <- D

var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
console.log(detectLoop(nodeA)); // => false
nodeE.next = nodeB;
console.log(detectLoop(nodeA)); // => true