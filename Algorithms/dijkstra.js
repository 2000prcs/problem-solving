class Node {
  constructor(name) {
    this.name = name;
    this.edges = [];
  }
  addEdges(...tuples) {
    tuples.forEach(([neighbor, weight])=> {
      this.edges.push([neighbor, weight]);
      neighbor.edges.push([this, weight]);
    });
  }
}

const findShortestPath = (startNode, targetNode) => {
  const vertexValues = new Map(); // Previous node, distance from start, visited
  const getClosestUnvisited = node => 
    node.edges.map(([neighbor, weight]) => neighbor)
    .filter(neighbor => !vertexValues.get(neighbor).visited)
    .reduce((closest, neighbor) => 
      vertexValues.get(neighbor).distance < vertexValues.get(closest).distance ? neighbor : closest);

  vertexValues.set(startNode, {distance: 0});
  let nextNode = startNode;

  while (nextNode) {
    const currentNode = nextNode;
    const currentValues = vertexValues.get(currentNode);
    const { distance } = currentValues;

    currentNode.edges.forEach(([edge, weight]) => {
      const edgeValues = vertexValues.get(edge) || vertexValues.set(edge, {distance: Infinity}).get(edge);
      if (!edgeValues.visited) {
        const currentPathDistance = distance + weight;
        if (currentPathDistance < edgeValues.distance) {
          edgeValues.distance = currentPathDistance;
          edgeValues.prev = currentNode;
        }
      }
    });

    currentValues.visited = true;
    nextNode = getClosestUnvisited(currentNode);
    if (nextNode === targetNode) {
      break;
    }
  }

  const pathBack = [];
  const pathTo = [];
  let pathNode = targetNode;
  while (pathNode) {
    pathBack.push(pathNode);
    pathNode = vertexValues.get(pathNode).prev;
  }
  while (pathBack.length) {
    pathTo.push(pathBack.pop());
  }
  return pathTo;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
a.addEdges([b, 7], [c, 3]);
b.addEdges([c, 1], [d, 2], [e, 6]);
c.addEdges([d, 2]);
d.addEdges([e, 4]);

console.log(findShortestPath(a, e));