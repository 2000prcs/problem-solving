// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrix = (matrix, direction = 1) => {
  let rotated = [];

  if(direction === -1){
    for(let i = 0; i < matrix.length; i++){
      rotated[i] = [];
      for(let j = 0; j < matrix[0].length; j++){
        rotated[i][j] = matrix[j][matrix.length - 1 - i];
      }
    }
  } else {
    for(let i = 0; i < matrix.length; i++){
      rotated[i] = [];
      for(let j = 0; j < matrix[0].length; j++){
        rotated[i][j] = matrix[matrix.length - 1 - j][matrix.length - 1 - i];
      }
    }
  }

  return rotated;
}

var matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];
var result = rotateMatrix(matrix);
console.log(result);
var result2 = rotateMatrix(matrix, -1);
console.log(result2);

