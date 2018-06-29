const { BinarySearchTree } = require('../Data Structures/BinarySearchTree');
const { LinkedList } = require('../Data Structures/LinkedList');

//Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

// Solution 1: Recursive approach
// Time: O(N)
// Additional space: 0(log N) space

// const listOfDepths = (bst) => {
//   let lists = [];
//   addToList(lists, bst, 0);
//   return lists;
// }

// const addToList = (lists, node, depth) => {
//   if(node){
//     if(!lists[depth]){
//       lists[depth] = new LinkedList();
//     }
//     lists[depth].addToTail(node.value);
//     addToList(lists, node.left, depth + 1);
//     addToList(lists, node.right, depth + 1);
//   }
// }


// Solution2: Iterable approach

const listOfDepths = (bst) => {
  let listsOfLists = [];
  let list = null;
  let queue = []; 
  let newNode;
  let currentNode = bst;
  let childrenCount = 1;
  let count = 0;
  queue.push(currentNode);
  while(queue.length > 0){
    currentNode = queue.shift();
    if(list){
      list.addToTail(currentNode.value);  
    } else if (!list){
        newNode = new LinkedList();
        newNode.addToTail(currentNode.value);
        list = newNode;  
    }
    count++;
    if(count === childrenCount){
      listsOfLists.push(list);
      list = null;
      childrenCount = childrenCount * 2 + 1;
    }    
     if(currentNode.left){
       queue.push(currentNode.left);
      }
     if(currentNode.right){
       queue.push(currentNode.right);
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
console.log(tree);
console.log(listOfDepths(tree));
