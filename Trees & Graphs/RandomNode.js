
// You are implementing a binary tree class from scratch which, in addition to insert, find, and delete, 
// has a method getRandomNode() which returns a random node from the tree. 
// All nodes should be equally likely to be chosen. 
// Design and implement an algorithm for getRandomNode, and explain how you would implement the rest of the methods.


class RandomBST {
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
    this.size = 1; // including itself
  }

  insert(val){
    this.size++;
    if(!this.value){
      this.value = val;
    } 
    if(val < this.value){
      if(!this.left){
        this.left = new RandomBST(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if(!this.right){
        this.right = new RandomBST(val);
      } else {
        this.right.insert(val);
      }
    }
  }

  find(val){
    if(this.value === val){
      return this;
    } else {
      if(val < this.value){
        return this.left.find(val)
      }
      if(val > this.value){
        return this.right.find(val);
      }
    }
  }

  delete(val){
    let node;
    this.size--; // decrease total size
    if(this.value === val){
      node = this.value;
      this.value = null;
      return node;
    } else {
      if(val < this.value){
        return this.left.delete(val);
      }
      if(val > this.value){
        return this.right.delete(val);
      }
    }
  }

  getRandomNode(){
    let random = Math.floor(Math.random() * this.size);
    if(random < 1) return this;
    if(this.left){
         if(random < this.left.size){
          return this.left.getRandomNode();
        } else if (random === this.left.size){
          return this;   
        }
    } 
    if(this.right) {
      return this.right.getRandomNode();
    }
  }
  
}


let tree = new RandomBST(20);
tree.insert(10);
tree.insert(15);
tree.insert(25);
tree.insert(30);
console.log(tree);
console.log(tree.find(25));
console.log(tree.delete(30));
console.log(tree.getRandomNode())