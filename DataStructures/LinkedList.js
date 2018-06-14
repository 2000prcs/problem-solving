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
    var newTail = new Node(val);
    if(!this.head){
      this.head = newTail;
    } 
    if(this.tail){
      this.tail.next = newTail;
    }
    this.tail = newTail;
  }
  
  contains(target){
    var node = this.head;
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

    var oldHead = this.head;
    list.head = list.head.next;

    return oldHead.value;
  }

}

module.exports = {
  LinkedList: LinkedList,
};