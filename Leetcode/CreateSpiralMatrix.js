// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


const createSpiralMatrix = (n) => {
  let matrix = [];
  for(let i = 0; i < n; i++){
    matrix.push([]);
  }
  let row = 0;
  let col = 0;

  let topRowStart = 0;
  let rightColStart = n - 1;
  let bottomRowStart = n - 1;
  let leftColStart = 0;

  let item = 1;

  while(row <= n && col <= n){
    for(let i = leftColStart; i <= rightColStart; i++){
      matrix[topRowStart][i] = item; 
      item += 1;
    }
    topRowStart += 1;
    
    for(let i = topRowStart; i <= bottomRowStart; i++){
      matrix[i][rightColStart] = item; 
      item += 1;
    }
    rightColStart -= 1;

  if(topRowStart <= bottomRowStart){
    for(let i = rightColStart; i >= leftColStart; i--){
      matrix[bottomRowStart][i] = item; 
      item += 1;
    }
    bottomRowStart -= 1;

    for(let i = bottomRowStart; i >= topRowStart; i--){
      matrix[i][leftColStart] = item;
      item += 1;    0 
    }
    leftColStart += 1;
  }
    row += 1;
    col += 1;
  }
   
  return matrix;
}

console.log(createSpiralMatrix(4));
