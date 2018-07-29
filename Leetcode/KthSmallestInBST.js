// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Note: 
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// Output: 3

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
// How would you optimize the kthSmallest routine?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Iterative solution
var kthSmallest = function(root, k){
  if(!root) return;
  let lastTraversed = null;
  let count = 0;
  let stack = [];
  let node = root;

  while(count < k){
    if(node){
      stack.push(node);
      node = node.left;
    } else {
      lastTraversed = stack.pop();
      count++;
      node = lastTraversed.right;
    }
  }
  
  return lastTraversed.val;
}


// DFS Solution 
var kthSmallest = function(root, k) {
  if(!root) return;
  let nodes = [];  
  function findKth(node){
      if(!node) return;
      if(node.left){
          findKth(node.left);
      }
      nodes.push(node.val);
      if(node.right){
          findKth(node.right);
      }    
  } 
  findKth(root); 
   
  return nodes[k-1];
};