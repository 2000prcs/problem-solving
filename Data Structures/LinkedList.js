class Node {
  constructor(value){
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  addToTail(val){
    let newTail = new Node(val);
    if(!this.head){
      this.head = newTail;
    } 
    if(this.tail){
      this.tail.next = newTail;
    }
    this.tail = newTail;
  }
  
  contains(val){
    let node = this.head;
    while(node){
      if(node.val === val){
        return true;
      }
      node = node.next
    }

    return false;
  }

  removeHead(){
    if(!this.head) return null;

    let oldHead = this.head;
    this.head = this.head.next;

    return oldHead.val;
  }

}

module.exports = {
  LinkedList,
  Node,
};