// Given a root node reference of a BST and a key, delete the node with the given key in the BST. 
// Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
// Note: Time complexity should be O(height of tree).

// Example:

// root = [5,3,6,2,4,null,7]
// key = 3

//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Given key to delete is 3. So we find the node with value 3 and delete it.

// One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

//     5
//    / \
//   4   6
//  /     \
// 2       7

// Another valid answer is [5,2,6,null,4,null,7].

//     5
//    / \
//   2   6
//    \   \
//     4   7

const { BinarySearchTree } = require('../Data Structures/BinarySearchTree');

var deleteNode = function(root, key) {
  // search tree for node
  // go right, then left until no more left
  // attach root.left to left
  // return node.right
  if(!root) return null;
  if(root.value === key){
    if(!root.right) return root.left;
    if(!root.left) return root.right;
    let next = root.right;
    while(next.left) next = next.left;
    next.left = root.left;
    return root.right;
  }
  if(root.value > key) root.left = deleteNode(root.left, key);
  else if(root.value < key) root.right = deleteNode(root.right, key);
  return root;
};


let tree = new BinarySearchTree(5);
tree.insert(3);
tree.insert(6);
tree.insert(2);
tree.insert(4);
tree.insert(7);
console.log(tree);
console.log(deleteNode(tree, 3));