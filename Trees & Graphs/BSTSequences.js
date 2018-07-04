const { BinarySearchTree } = require('../Data Structures/BinarySearchTree');

// A binary search tree was created by traversing through an array from left to right and inserting each element. 
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.
//EXAMPLE
// Input:
  //   2
  // 1   3
// Output: {2, 1, 3}, {2, 3, 1}

/**
 * The basic premise here is to get all permutations of each subtree's left and
 * right children. Then create a new list of all the permutations from combining
 * each permutation from the left subtree with each in the right subtree. The
 * new set of permutations all need to be prefixed with the current nodes value
 * as it must be added before its left or right children.
 *
 * The process of creating permutations requires combinging a list from the set
 * of left child permutations and those of the right child. Each permutation
 * needs to keep the items in their relative lists from their source lists.
 *
 * N = |tree|
 * Time: O(N!) - this isn't really accurate and is definitely a high upper bound.
 * Due to the fact that the permutations have some ordering required the true
 * number isn't just the normal way to count permutations.
 * Additional space: O(N!) - again like the time complexity this is a high upper
 * bound
 */


const permutationsRecursive = (perms, list1, list2, prefix, i, j) => {
  if(i === list1.length && j === list2.length){
    perms.push(prefix.slice(0));
  } else {
    if(i < list1.length){
      prefix.push(list1[i]);
      permutationsRecursive(perms, list1, list2, prefix, i + 1, j);
      prefix.pop();
    }
    if(j < list2.length){
      prefix.push(list2[j]);
      permutationsRecursive(perms, list1, list2, prefix, i, j + 1);
      prefix.pop();
    }
  }
  return perms;
}

const permutations = (left, right) => {
  if(!left || !right){
    return left || right;
  } else {
    let perms = [];
    for(let i = 0; i < left.length; i++){
      for(let j = 0; j < right.length; j++){
        perms.push.apply(perms, permutationsRecursive([], left[i], right[j], [], 0, 0));
      }
    }
    return perms;
  }

}

const sequencesRecursive = (node) => {
  if(!node){
    return null;
  } else {
    let perms = permutations(sequencesRecursive(node.left), sequencesRecursive(node.right));
    if(!perms){
      perms = [[node.value]];
    } else {
      perms.forEach(p => p.unshift(node.value));
    }
    return perms;
  }
}


const BSTSequences = (tree) => {
  if(!tree){
    return null;
  }
  return sequencesRecursive(tree);
}



let tree = new BinarySearchTree(50);
tree.insert(20);
tree.insert(60);
tree.insert(10);
tree.insert(25);
tree.insert(70);
tree.insert(5);
tree.insert(15);
tree.insert(65);
tree.insert(80);
console.log(tree);
let result = BSTSequences(tree);
console.log(result);
console.log(result.length);