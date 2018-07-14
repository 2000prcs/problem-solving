// Numbers can be regarded as product of its factors. For example,

// 8 = 2 x 2 x 2;
//   = 2 x 4.
// Write a function that takes an integer n and return all possible combinations of its factors.

// Note:

// You may assume that n is always positive.
// Factors should be greater than 1 and less than n.
// Example 1:

// Input: 1
// Output: []
// Example 2:

// Input: 37
// Output:[]
// Example 3:

// Input: 12
// Output:
// [
//   [2, 6],
//   [2, 2, 3],
//   [3, 4]
// ]
// Example 4:

// Input: 32
// Output:
// [
//   [2, 16],
//   [2, 2, 8],
//   [2, 2, 2, 4],
//   [2, 2, 2, 2, 2],
//   [2, 4, 4],
//   [4, 8]
// ]

var getFactors = function(n) {
  let res = [];
  let cur = [];
  helper(res, cur, n, 2);
  return res;
};


var helper = function(res, cur, n, next) {
  if (n<=1) {
      if (cur.length>1) res.push(cur.slice(0));
      return;
  }
  let upper = Math.floor( Math.sqrt(n) );
  for (let i=next; i<=upper; i++) {
      if (n%i != 0) continue;
      cur.push(i);
      helper(res, cur, n/i, i);
      cur.pop();
  }
  cur.push(n);
  helper(res, cur, n/n, n);
  cur.pop();
};


let output = getFactors(12);
let expected = [
  [2, 2, 3],
  [2, 6],
  [3, 4]
];
console.log(output)
console.log(expected);

// test
function assertEqalArrays(actual, expected, testName){
  let equalLengths = actual.length === expected.length;
  let equalValues = actual.every((element, i) => {
    return element === expected[i];
  });
  if(equalLengths && equalValues){
    console.log(`PASSED [${testName}]`);
  } else {
    console.log(`FAILED [${testName} Expected ${expected}, but got ${actual}`);
  }
}

assertEqalArrays(output, expected, 'Get factors');