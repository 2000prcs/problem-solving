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

  //Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

  // recursive approach 

  // findRouteBetweenNodes(fromNode, toNode){
  //   if(this._nodes[fromNode].edges){
  //     if(this._nodes[fromNode].edges[toNode]){
  //       return true;
  //     } else {
  //       for(var targetNode in fromNode.edges){
  //         findRouteBetweenNodes(targetNode, end);
  //       }
  //     }
  //   }
  //   return false;
  // }

  addToVisited(value, visited, queue){
    if(!visited.has(value)) visited.add(value);
    this._nodes[value].forEach(v => {
      if(!visited.has(v)){
        visited.add(v);
        queue.push(v);
      }
    });
  }

  findRouteBetweenNodes(fromNode, toNode){
    const queue = [ fromNode ];
    const visited = new Set();
    while(queue){
      const currentNode = queue.shift();
      if(currentNode === toNode) return true;
      this.addToVisited(currentNode, visited, queue);
    }
    return false;
  }

}



var graph = new Graph();
graph.addNode(1);
console.log(graph.contains(1));
graph.addNode(2);
graph.removeNode(2);
graph.addNode(2);
graph.addNode(3);
graph.addEdge(3, 2);
console.log(graph._nodes['2']);
console.log(graph.hasEdge(3, 2));
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
graph.removeEdge(5, 4);
graph.addEdge(2, 4);
graph.addEdge(1, 2);
graph.addEdge(4, 5);
console.log(graph);
console.log(graph.hasEdge(4, 5));
console.log(graph.findRouteBetweenNodes(2, 3));
console.log(graph.findRouteBetweenNodes(1, 5));
console.log(graph.findRouteBetweenNodes(3, 5));