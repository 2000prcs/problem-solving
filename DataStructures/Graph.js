class Graph {
  constructor(){
    this._nodes = {};
  }

  addNode(node){
    this._nodes[node] = this._nodes[node] || [];
  }

  contains(node){
    return !!this._nodes[node];
  }

  removeNode(node){
    if(this.contains(node)){
        for(let i = 0; i < this._nodes[node].length; i++){
          this.removeEdge(node, targetNode);
        }
      
      delete this._nodes[node];
    }
  }

  hasEdge(fromNode, toNode){
    if(!this.contains(fromNode)){
      return false;
    }
    return !!this._nodes[fromNode].includes(toNode);
  }

  addEdge(fromNode, toNode){
    if(!this.contains(fromNode) || !this.contains(toNode)){
      return;
    } 

    this._nodes[fromNode][toNode] = toNode;
    this._nodes[toNode][fromNode] = fromNode;
  }

  removeEdge(fromNode, toNode){
    if(!this.contains(fromNode) || !this.contains(toNode)){
      return;
    }
    delete this._nodes[fromNode][toNode];
    delete this._nodes[toNode][fromNode]; 
  }


  addToVisited(value, visited, queue){
    if(!visited.has(value)) visited.add(value);
    this._nodes[value].forEach(v => {
      if(!visited.has(v)){
        visited.add(v);
        queue.push(v);
      }
    });
  }

}

module.exports = {
  Graph: Graph
};