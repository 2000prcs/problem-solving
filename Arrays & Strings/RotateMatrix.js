// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrix = (matrix) => {
  let size = matrix.length - 1;
  for(let layer = 0; layer <= size/2; layer++){
    for(let i = layer; i < size - layer; i++){
      let temp = matrix[layer][i];
      matrix[layer][i] = matrix[size-i][layer];
      matrix[size-i][layer] = matrix[size-layer][size-i];
      matrix[size-layer][size-i] = matrix[i][size-layer];
      matrix[i][size-layer] = temp;
    }
  }
  return matrix;

  // Solution 2: using a differnet array
  // let rotated = [];
  //   for(let i = 0; i < matrix.length; i++){
  //     rotated[i] = [];
  //     for(let j = 0; j < matrix[0].length; j++){
  //       rotated[i][j] = matrix[matrix.length - 1 - j][matrix.length - 1 - i];
  //     }
  //   }
  // return rotated;
}

var matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];
var result = rotateMatrix(matrix);
console.log(result);

