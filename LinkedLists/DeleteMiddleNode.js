const { LinkedList } = require('../Data Structures/LinkedList');

// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, 
// not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// lnput: the node c from the linked list a->b->c->d->e->f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f

const deleteMiddleNode = (list, target) => {
  let node = list.head;
  while(node.next){
    if(node.next === null){
      return;
    }
    if(node.next.value === target){
      node.next = node.next.next;
    }
    node = node.next;
  }

}

let list = new LinkedList();
list.addToTail('a');
list.addToTail('b');
list.addToTail('c');
list.addToTail('d');
list.addToTail('e');
list.addToTail('f');
console.log(list);
console.log(list.contains('c'));
deleteMiddleNode(list, 'c');
console.log(list.contains('c'));
