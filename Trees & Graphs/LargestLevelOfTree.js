// You are given a binary tree whose nodes all have integer values (both positive and negative).

// Determine which level of the tree is the "largest", i.e., you sum all the node values at that level, and determine which level has the largest sum.

// In the case of a tie, return the level closest to the root.


// Hints
// Try not to use the hints if you can help it, but if you do want one, use ROT-13 to decode.

// Erzrzore, yriry-beqre genirefny bs n gerr vf qbar jvgu oernqgu-svefg frnepu.

// Oernqgu-svefg frnepu hfrf n urycre qngn fgehpgher: n dhrhr.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


const findLargestLevel = function(node) {
  if(!node) {
    return 0;
  }
  let queue = [node];
  let result = node.val;

  while(queue.length > 0){
    let count =  queue.length;
    let sum = 0;
    while(count > 0){
      let currentNode = queue.shift();
      sum = sum + currentNode.val;

      if(currentNode.left){
        queue.push(currentNode.left);
      } 
      if(currentNode.right){
        queue.push(currentNode.right);
      }
      count -= 1;
    }
    result = Math.max(sum, result);
  }

  return result;
};


var tree = new TreeNode(4);
var leaf1 = new TreeNode(2);
var leaf2 = new TreeNode(-5);
var leaf3 = new TreeNode(-1);
var leaf4 = new TreeNode(3);
var leaf5 = new TreeNode(-2);
var leaf6 = new TreeNode(6);

tree.left = leaf1;
tree.right = leaf2;
leaf1.left = leaf3;
leaf1.right = leaf4;
leaf2.left = leaf5;
leaf2.right = leaf6;

console.log(findLargestLevel(tree));

var tree = new TreeNode(1);
var leaf1 = new TreeNode(2);
var leaf2 = new TreeNode(3);
var leaf3 = new TreeNode(4);
var leaf4 = new TreeNode(5);
var leaf5 = new TreeNode(8);
var leaf6 = new TreeNode(6);
var leaf7 = new TreeNode(7);


tree.left = leaf1;
tree.right = leaf2;
leaf1.left = leaf3;
leaf1.right = leaf4;
leaf2.left = leaf5;
leaf5.left = leaf6;
leaf5.right = leaf7;

console.log(findLargestLevel(tree));