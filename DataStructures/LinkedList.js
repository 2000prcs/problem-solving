class Node {
  constructor(val){
    this.value = val;
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
  
  contains(target){
    let node = this.head;
    while(node){
      if(node === val){
        return true;
      }
      node = node.next
    }

    return false;
  }

  removeHead(){
    if(!this.head) return null;

    let oldHead = this.head;
    list.head = list.head.next;

    return oldHead.value;
  }

}

module.exports = {
  LinkedList,
  Node,
};