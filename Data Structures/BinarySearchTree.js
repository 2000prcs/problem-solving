class BinarySearchTree {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }

  insert(val){
    if(!this.value){
        this.value = val;
    }
    if(val < this.value){
      if(this.left === null){
        this.left = new BinarySearchTree(val);
      } else {
        this.left.insert(val);
      }
    } else if(val > this.value) {
      if(this.right === null){
        this.right = new BinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    } else {
        // do nothing;
    }
  }

  contains(){
    
  }
 
}

module.exports = {
  BinarySearchTree: BinarySearchTree
};