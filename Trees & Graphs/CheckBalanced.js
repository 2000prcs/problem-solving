const { BinarySearchTree } = require('../Data Structures/BinarySearchTree');

// Implement a function to check if a binary tree is balanced. 
// For the purposes of this question, a balanced tree is defined to be a tree 
// such that the heights of the two subtrees of any node never differ by more than one.


// Time: O(N)
// Additional space: O(lg N) - space cost is due to call stack size while using
// recursion, this may be O(N) in the worst case.

const findDepth = (cache, node, depth) => {
  if(!node){
    if(depth < cache.min){
      cache.min = depth;
    } 
    if(depth > cache.max){
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth+1);
    findDepth(cache, node.right, depth+1);
  }
}

const isBalanced = (tree) => {
  if(!tree){
    return;
  }

  let cache = {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER
  };

  findDepth(cache, tree, 0);
  return Math.abs(cache.max - cache.min) < 1;
}


// Solution 2: Time complexity O(N log N)

// const getHeight = (tree) => {
//   if(!tree) return -1;
//   return Math.max(getHeight(tree.left), getHeight(tree.right)) + 1;
// }

// const isBalanced = (tree) => {
//   if(!tree) return true;
//   let heightDiff = getHeight(tree.left) - getHeight(tree.right);
//   if(Math.abs(heightDiff) > 1){
//     return false;
//   } else {
//     return isBalanced(tree.left) && isBalanced(tree.right);
//   }
// }


let bst = new BinarySearchTree(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
console.log(bst);
console.log(isBalanced(bst));

var bst2 = new BinarySearchTree(4);
bst2.insert(2);
bst2.insert(6);
bst2.insert(1);
bst2.insert(3);
bst2.insert(5);
bst2.insert(7);
console.log(isBalanced(bst2));