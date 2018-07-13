// You are given a binary tree in which each node contains an integer value (which might be positive or negative). 
// Design an algorithm to count the number of paths that sum to a given value. 
// The path does not need to start or end at the root or a leaf, 
// but it must go downwards (traveling only from parent nodes to child nodes).

// The runtime is O(NlogN).

class BinaryTree {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const pathWithSum = (tree, targetSum) => {
  if(!tree){
    return 0;
  }
  
  let pathsFromRoot = findPath(tree, targetSum, 0);  
  let pathsOnLeft = pathWithSum(tree.left, targetSum);
  let pathsOnRight = pathWithSum(tree.right, targetSum);
  
  function findPath (node, targetSum, currentSum){
    if(!node){
      return 0;
    }
    currentSum += node.value;
    
    let totalPaths = 0;
    if(currentSum === targetSum){
      totalPaths++;
    }
    totalPaths += findPath(node.left, targetSum, currentSum);
    totalPaths += findPath(node.right, targetSum, currentSum);

    return totalPaths;
  }

  return pathsFromRoot + pathsOnLeft + pathsOnRight;
}



let root = new BinaryTree(10);
let leaf1 = new BinaryTree(5);
let leaf2 = new BinaryTree(-3);
let leaf3 = new BinaryTree(3);
let leaf4 = new BinaryTree(2);
let leaf5 = new BinaryTree(3);
let leaf6 = new BinaryTree(-2);
let leaf7 = new BinaryTree(11);
let leaf8 = new BinaryTree(1);

root.left = leaf1;
root.right = leaf2;
leaf1.left = leaf3;
leaf1.right = leaf4;
leaf3.left = leaf5;
leaf3.right = leaf6;
leaf4.right = leaf8;
leaf2.right = leaf7;
console.log(root);
console.log(leaf1)
console.log(pathWithSum(root, 8));