//Given a sorted (increasing order) array with unique integer elements, 
//write an algo­rithm to create a binary search tree with minimal height.

// BinarySearchTree: Left side have to be smaller than root value / right side have to be larger than root value

class BinarySearchTree {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }

  createMinimalTree (array, start, end) {
    if(end < start){
      return null;
    }
    const mid = (start + end) / 2;
    const tree = new BinarySearchTree(array[mid]);

    tree.left = tree.createMinimalTree(array, start, mid - 1);
    tree.right = tree.createMinimalTree(array, mid+1, end);

    return tree;
  }

}




var tree = new BinarySearchTree();
var result = tree.createMinimalTree([1,2,3,4,5,6,7], 0, 6);

console.log(result);
