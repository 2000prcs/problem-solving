const { BinarySearchTree } = require('../Data Structures/BinarySearchTree');

// Tl and T2 are two very large binary trees, with Tl much bigger than T2. 
// Create an algorithm to determine if T2 is a subtree of Tl.
// A tree T2 is a subtree of Tl if there exists a node n in Tl such that the subtree of n is identical to T2. 
// That is, if you cut off the tree at node n, the two trees would be identical.

// Solution 1: 
// * Time: O(NM)
// * Additional space: O(lg N) - space cost is due to recursive nature of algorithm
// * and assumes a balanced tree, worst case is O(N)

const sameTree = (node1, node2) => {
  if(!node1 && !node2){
    return true;
  } else if ((!node1 && node2) || (node1 && !node2)){
    return false;
  } else if (node1.value === node2.value){
    return sameTree(node1.left, node2.left) && sameTree(node1.right, node2.right);
  } else {
    return false;
  }
}


const findRoot = (node1, node2) => {
  if(!node1 || !node2){
    return false;
  } else if (node1.value === node2.value && sameTree(node1, node2)){
    return true;
  } else {
    return findRoot(node1.left, node2) || findRoot(node1.right, node2);
  }
}


const checkSubtree = (t1, t2) => {
  if(!t1 || !t2){
    throw new Error('Invalid tree input');
  }
  if(!t1 || !t2.value){
    return true;
  }
  return findRoot(t1, t2);
}



// Solution 2 - BFS + DFS
// const checkSubtree = (t1, t2) => {
//   let queue = [t1];
//   let subTree;
//   let currentNode;
//   while(queue.length > 0){
//     currentNode = queue.shift();
//     if(currentNode.value === t2.value){
//       subTree = currentNode;
//     }
//     if(currentNode.left){
//       queue.push(currentNode.left);
//     } 
//     if(currentNode.right){
//       queue.push(currentNode.right);
//     }
//   }
//   function isSubtree(subFromTree1, target){
//     if(subFromTree1.value !== target.value){
//       return false;
//     } else {
//       if(target.left){
//         return isSubtree(subFromTree1.left, target.left);
//       }
//       if(target.right){
//         return isSubtree(subFromTree1.right, target.right);
//       }
//     }
//     return true;
//   }
//   return isSubtree(subTree, t2);
// }


let tree1 = new BinarySearchTree(50);
tree1.insert(20);
tree1.insert(60);
tree1.insert(10);
tree1.insert(25);
tree1.insert(70);
tree1.insert(5);
tree1.insert(15);
tree1.insert(65);
tree1.insert(80);
console.log(tree1);
let tree2 = new BinarySearchTree(70);
tree2.insert(65);
tree2.insert(80);
console.log(tree2)

let tree3 = new BinarySearchTree(10);
tree3.insert(6);
tree3.insert(15);

let result = checkSubtree(tree1, tree2);
console.log(result);
let result2 = checkSubtree(tree1, tree3);
console.log(result2);