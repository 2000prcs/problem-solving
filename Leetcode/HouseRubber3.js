// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Determine the maximum amount of money the thief can rob tonight without alerting the police.

// Example 1:
//      3
//     / \
//    2   3
//     \   \ 
//      3   1
// Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
// Example 2:
//      3
//     / \
//    4   5
//   / \   \ 
//  1   3   1
// Maximum amount of money the thief can rob = 4 + 5 = 9.

const { BinarySearchTree } = require('../Data Structures/BinarySearchTree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var rob = function(root) {
   let money = helper(root);

   function helper(root){
    if(!root) return [0, 0];
    let left = helper(root.left);
    let right = helper(root.right);
    let result = [0, 0];
    result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    result[1] = root.value + left[0] + right[0];

    return result;
   }

   helper(root);
   return Math.max(money[0], money[1]);
};


let tree = new BinarySearchTree(3);
let leaf1 = new BinarySearchTree(2);
let leaf2 = new BinarySearchTree(3);
let leaf3 = new BinarySearchTree(3);
let leaf4 = new BinarySearchTree(1);

tree.left = leaf1;
tree.right = leaf2;
leaf1.right = leaf3;
leaf2.right = leaf4;


console.log(rob(tree));



// BFS Try - doesn't pass all tests

// var rob = function(root) {
//   if(!root) {
//     return 0;
//   }
//   let queue = [root];
//   let oddFloors = 0;
//   let evenFloors = 0;
//   let floor = 0;

//   while(queue.length > 0){
//     let count =  queue.length;
//     floor += 1;
//     while(count > 0){
//       let currentNode = queue.shift();
//       if(floor % 2 === 0){
//         evenFloors += currentNode.value;
//       } else if (floor % 2 !== 0){
//         oddFloors += currentNode.value;
//       }
//       if(currentNode.left){
//         queue.push(currentNode.left);
//       } 
//       if(currentNode.right){
//         queue.push(currentNode.right);
//       }
//       count -= 1;
//     }
//   }

//   return oddFloors > evenFloors ? oddFloors : evenFloors;
// }