
// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, 
// not necessarily the exact middle) of a singly linked list, given only access to that node.
// EXAMPLE
// lnput: the node c from the linked list a->b->c->d->e->f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f

const LinkedList = function(value) {
  this.value = value;
  this.next = null;
};


const deleteMiddleNode = (node) => {
  if(!node || !node.next){
    throw new Error('Invalid list');
  }
  node.value = node.next.value;
  node.next = node.next.next;
}



/* Test */
const printList = (head) => {
  while(head !== null) {
    console.log(head.value);
    head = head.next;
  }
  console.log('done printing');
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(a);
deleteMiddleNode(c);
printList(a);
