class Tree {
  constructor(val){
    this.value = val;
    this.children = [];
  }

  addChild(val){
    let child = new Tree(val);
    this.children.push(child);
  }

  contains(val){
    if(this.value === val){
      return true;
    } 
    for(let i = 0; i < this.children.length; i++){
      if(this.children[i].contains(val)){
        return true;
      }
    }
    return false;
  }

}

module.exports = {
  Tree: Tree
}