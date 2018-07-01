// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = function(numRows) {
  var result = [];
  for(var i = 0; i < numRows; i++){
      var row = [i];
      row[0] = row[i] = 1;
      for(var j = 1; j < i; j++){
         row[j] = result[i-1][j-1] + result[i-1][j];
       }
      result.push(row);
  }
  return result;
};

let triangle = generate(5);
console.log(triangle);