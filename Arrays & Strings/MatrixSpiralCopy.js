// Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s 
// values into a 1D array in a spiral order, clockwise. 
// Your function then should return that array. Analyze the time and space complexities of your solution.

// Example:

// input:  inputMatrix  = [ [1,    2,   3,  4,    5],
//                          [6,    7,   8,  9,   10],
//                          [11,  12,  13,  14,  15],
//                          [16,  17,  18,  19,  20] ]

// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
// See the illustration below to understand better what a clockwise spiral order looks like.

// Constraints:

// [time limit] 5000ms

// [input] array.array.integer inputMatrix

// 1 ≤ inputMatrix[0].length ≤ 100
// 1 ≤ inputMatrix.length ≤ 100
// [output] array.integer

function spiralCopy(inputMatrix) {
  let output = [];
  // check edge cases
  if(inputMatrix.length === 0 || !Array.isArray(inputMatrix)){
    return output;
  }
 
  let topRow = 0;
  let btmRow = inputMatrix.length - 1;
  let leftCol = 0;
  let rightCol = inputMatrix[0].length - 1;
  
  while(topRow <= btmRow && leftCol <= rightCol){
    // copy the next top row
    for(let i = leftCol; i <= rightCol; i++){
      output.push(inputMatrix[topRow][i]);
    }
    topRow++;

    // copy the next right hand side column
    for(let i = topRow; i <= btmRow; i++){
      output.push(inputMatrix[i][rightCol]);
    }
    rightCol--;

    
    // copy the next bottm row
    if(topRow <= btmRow){
      for(let i = rightCol; i >= leftCol; i--){
        output.push(inputMatrix[btmRow][i]);
      }
       btmRow--;

    }
    
    // copy the next left hand side column
    if(leftCol <= rightCol){
      for(let i = btmRow; i >= topRow; i--){
        output.push(inputMatrix[i][leftCol]);
      }
      leftCol++;
    }
    
  }
  
  return output;
}


 let inputMatrix  = [ [1,    2,   3,  4,    5],
                      [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ];

console.log(spiralCopy(inputMatrix));
