const { BinarySearchTree } = require('../Data Structures/BinarySearchTree');

//  Implement a function to check if a binary tree is a binary search tree.

const isValidBST = (tree) => {
  if(!tree){
    throw new Error('Invalid tree');
  } 
  return validateBST(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

const validateBST = (tree, min = -Infinity, max = Infinity) => {
  if(tree){
    if(tree.value < min || tree.value > max) {
      return false;
    } 
    return validateBST(tree.left, min, tree.value) && validateBST(tree.right, tree.value, max);
  } 
  return true;
}


let bst = new BinarySearchTree(15);
bst.insert(12);
bst.insert(17);
bst.insert(11);
bst.insert(14);
bst.insert(16);
bst.insert(18);
console.log(bst);
console.log(isValidBST(bst));

