class BSTp {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
};
// Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. 
// You may assume that each node has a link to its parent.


/**
 * Finding the successor as a few different scenarios:
 *   1. Where a right child exists:
 *     a. If it has no left child then it is the successor.
 *     b. If it has a left child then keep following left child pointers until
 *     you've got the left most child, this is the successor.
 *   2. Where no right child exists:
 *     a. If this node is a left child then the successor is its parent.
 *     b. Otherwise follow parent pointers until we find a node that is a left
 *     child of its parent, then the parent is the successor.
 *
 * N = |tree|
 * Time: O(lg N) - assumes balanced tree, worst cast O(N)
 * Additional space: O(1)
 */

const getSuccessor = (node) => {
  if(!node){
    throw new Error('Invalid Node');
  }
  let successor;
  if(node.right){
    successor = node.right;
    while(successor.left){
      successor = successor.left;
    }
    return successor.value;
  } else {
    successor = node;
    while (successor.parent && successor !== successor.parent.left){
      successor = successor.parent;
    }
    return successor.parent ? successor.parent.value : undefined;
  }
}


var a = new BSTp(10);
var b = new BSTp(2);
var c = new BSTp(3);
var d = new BSTp(4);
var e = new BSTp(6);
var f = new BSTp(5);
var g = new BSTp(7);

a.left = b; b.parent = a;
b.right = c; c.parent = b;
c.right = d; d.parent = c;
d.right = e; e.parent = d;
e.left = f; f.parent = e;
e.right = g; g.parent = e;
//              10
//          2
//            3
//              4
//                6
//              5   7          
console.log(a);
console.log(getSuccessor(f));
console.log(getSuccessor(g));
console.log(getSuccessor(e));



