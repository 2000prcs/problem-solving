// You are given a list of projects and a list of dependencies (which is a list of pairs of projects, 
// where the second project is dependent on the first project). 
// All of a project's dependencies must be built before the project is. 
// Find a build order that will allow the projects to be built. If there is no valid build order, return an error.
// EXAMPLE
// Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c) 
// Output: f, e, a, b, d, c

const topologicalSort = (adj, discovered, finished, path, project) => {
  if(discovered.has(project)){
    return;
  }
  discovered.add(project);
  path.add(project);
  for(let neighbour of adj[project]){
    if(path.has(neighbour)){
      throw new Error('Dependencies are cyclic');
    }
    topologicalSort(adj, discovered, finished, path, neighbour);
  }
  path.delete(project);
  finished.push(project);
}

const buildOrder = (projects, dependencies) => {
  let adj = {};
  let finished = [];
  let discovered = new Set();
  let path = new Set();

  projects.forEach(project => adj[project] = []);
  dependencies.forEach(edge => adj[edge[0]].push(edge[1]));
  projects.forEach(project => topologicalSort(adj, discovered, finished, path, project));

  return finished.reverse();
}



let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
let dependencies = [['a','d'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
let order = buildOrder(projects, dependencies);
console.log(order);