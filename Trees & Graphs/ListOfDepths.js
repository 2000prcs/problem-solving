const { BinarySearchTree } = require('../Data Structures/BinarySearchTree');
const { LinkedList } = require('../Data Structures/LinkedList');

//Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).



const listOfDepths = (bst) => {
  let listsOfLists = [];
  let list = null;
  let queue = []; 
  let newQueue = [];
  let newNode;
  let currentNode = bst;
  queue.push(currentNode);
  while(queue.length > 0){
    currentNode = queue.shift();
    newNode = new LinkedList(currentNode.value);
    newNode.next = list;
    list = newNode;
    if(currentNode.left){
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
    if(queue.length === 0){
      listsOfLists.push(list);
      list = null;
      queue = newQueue;
      newQueue = [];
    }

  }
  return listsOfLists;
}


let tree = new BinarySearchTree(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
console.log(listOfDepths(tree));
