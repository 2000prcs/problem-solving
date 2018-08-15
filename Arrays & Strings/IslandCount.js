// Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

// An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

// Explain and code the most efficient solution possible and analyze its time and space complexities.

// Example:

// input:  binaryMatrix = [ [0,    1,    0,    1,    0],
//                          [0,    0,    1,    1,    1],
//                          [1,    0,    0,    1,    0],
//                          [0,    1,    1,    0,    0],
//                          [1,    0,    1,    0,    1] ]

// output: 6 # since this is the number of islands in binaryMatrix.
//           # See all 6 islands color-coded below.


// Constraints:

// [time limit] 5000ms

// [input] array.array.int binaryMatrix

// 1 ≤ binaryMatrix.length ≤ 100
// 1 ≤ binaryMatrix[i].length ≤ 100
// [output] integer

// Time: O(M * N) where M is the number of rows and N is the number of cols
// Space: worst case O(M * N) in case that the grid map is filled with lands where DFS goes M * N deep

function getNumberOfIslands(binaryMatrix) {
  let islands = 0;
  if(binaryMatrix.length === 0) return islands;
  let rows = binaryMatrix.length;
  let cols = binaryMatrix[0].length;
  
  for(let x = 0; x < rows; x++){
    for(let y = 0; y < cols; y++){
      if(binaryMatrix[x][y] === 1){
        findIsland(x, y);
        islands++;
      }
    }
  }
  
  function findIsland(row, col){
    if(row < 0 || row > rows -1 || col < 0 || col > cols - 1 || binaryMatrix[row][col] !== 1){
      return;
    } 
    if(binaryMatrix[row][col] === 1){
      binaryMatrix[row][col] = 0;
  
      findIsland(row+1, col);
      findIsland(row, col+1);
      findIsland(row-1, col);
      findIsland(row, col-1);  
    }
  }
  
  return islands;
}


let binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

console.log(getNumberOfIslands(binaryMatrix));