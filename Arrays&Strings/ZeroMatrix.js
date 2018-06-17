// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// N = matrix I dimension
// M = matrix J dimension
// Time: O(N * M)
// Additional space: O(N + M)


const zeroMetrix = (matrix) => {
  if(!matrix) throw new Error('Invlalid matrix');
  if(matrix.length === 0) return matrix;
  
  let rows = new Array(matrix.length).fill(false);
  let cols = new Array(matrix[0].length).fill(false);

  for(let i = 0; i < rows.length; i++){
    for(let j = 0; j < cols.length; j++){
      if(matrix[i][j] === 0){
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for(let i = 0; i < rows.length; i++){
    for(let j = 0; j < cols.length; j++){
      if(rows[i] || cols[j]){
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}


var matrix = [
  [1,2,0,4],
  [5,6,7,8],
  [9,10,11,12]
];
var result = zeroMetrix(matrix);
console.log(result);

var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];
var result2 = zeroMetrix(testMatrix);
console.log(result2);