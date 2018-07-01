class Tree {
  constructor(val){
    this.value = val;
    this.children = [];
  }

  addChild(child){
    this.children.push(child);
  }
// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. 
// Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

  getAncestors(child, ancestors = []){
    if(this === child){
      ancestors.unshift(this);
      return ancestors;
    }
    for(let i = 0 ; i < this.children.length; i++){
      if(this.children[i].getAncestors(child, ancestors)){
        ancestors.unshift(this);
        return ancestors;
      }
    }
    return null;
  }


  findFirstCommonAncestor(child1, child2) {

    let path1 = this.getAncestors(child1);
    if(!path1) return null;

    let path2 = this.getAncestors(child2);
    if(!path2) return null;
    
    let firstCommonAncestor = this;
    let len = Math.min(path1.length, path2.length);
    for(let i = 0; i < len; i++){
      if(path1[i] === path2[i]){
        firstCommonAncestor = path1[i];
      }
    }
    return firstCommonAncestor.value;
  }

}

let grandma = new Tree('grandma');
let mom = new Tree('mom');
let aunt = new Tree('aunt');
let me = new Tree('me');
let brother = new Tree('brother');
let cousin = new Tree('cousin');
let potato = new Tree('potato');
grandma.addChild(mom);
grandma.addChild(aunt);
mom.addChild(me);
mom.addChild(brother);
aunt.addChild(cousin);

console.log(grandma.findFirstCommonAncestor(me, brother));
console.log(grandma.findFirstCommonAncestor(me, cousin));
console.log(grandma.findFirstCommonAncestor(grandma, grandma));
console.log(grandma.findFirstCommonAncestor(me, potato));