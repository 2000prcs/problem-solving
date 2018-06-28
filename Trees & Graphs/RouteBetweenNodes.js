// Directed graph (one-way)
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
        delete this._nodes[node];
      }
    }

    addEdge(fromNode, toNode){
      if(!this.contains(fromNode)){
        return;
      }
      this._nodes[fromNode][toNode] = toNode;
    }

    hasEdge(fromNode, toNode){
      return !!this._nodes[fromNode][toNode];
    }

    removeEdge(fromNode, toNode){
      if(this._nodes[fromNode][toNode]){
        delete this._nodes[fromNode][toNode];
      }
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


    findRouteBetweenNodes(fromNode, toNode) {
      const queue = [ fromNode ];
      const visited = new Set();
      while(queue.length > 0){
        const currentNode = queue.shift();
        if(currentNode === toNode) return true;
        this.addToVisited(currentNode, visited, queue);
      }
      return false;
    }
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



let graph = new Graph();
graph.addNode(1);
console.log(graph.contains(1));
graph.addNode(2);
graph.addNode(3);
graph.addEdge(2, 3);
console.log(graph._nodes['2']);
console.log(graph.hasEdge(2, 3));
graph.addNode(4);
graph.addNode(5);
graph.addEdge(5, 4);
graph.removeEdge(5, 4);
graph.addEdge(2, 4);
graph.addEdge(1, 2);
graph.addEdge(4, 5);
console.log(graph);
console.log(graph.hasEdge(4, 5));
// console.log(graph.findRouteBetweenNodes(2, 3));
// console.log(graph.findRouteBetweenNodes(1, 5));
console.log(graph.findRouteBetweenNodes(3, 5));