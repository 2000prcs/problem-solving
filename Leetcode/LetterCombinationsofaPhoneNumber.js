// Given a string containing digits from 2-9 inclusive, 
// return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. 
// Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.


// Recursive approach
var letterCombinations = function(digits) {
  let combinations = [];
  if(!digits) return combinations;
  let numberToString = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  function makeCombo(currentStr, digitStr){
    if(digitStr.length === 0){
      combinations.push(currentStr);
      return;
    }

    let letters = numberToString[digitStr[0]];
    letters.forEach(letter => {
      makeCombo(currentStr + letter, digitStr.substring(1));
    });
  }

  makeCombo('', digits);

  return combinations;
};



// Iterable approach
// var letterCombinations = function(digits) {
//     let combinations = [];
//     if(!digits) return combinations;
//     let numberToString = {
//       2: ['a', 'b', 'c'],
//       3: ['d', 'e', 'f'],
//       4: ['g', 'h', 'i'],
//       5: ['j', 'k', 'l'],
//       6: ['m', 'n', 'o'],
//       7: ['p', 'q', 'r', 's'],
//       8: ['t', 'u', 'v'],
//       9: ['w', 'x', 'y', 'z']
//     };

//     for(let i = 0; i < digits.length; i++){
//       let currChar = digits.charAt(i);
//       // check if the digit is not 1
//       if(currChar !== '1'){
//         combinations = makeCombo(combinations, numberToString[currChar]);
//       }
//     }

//     function makeCombo(array, combo){
//       let result = [];
//       // If one of the arrays is empty, return the other one
//       if(array.length === 0) {return combo;}
//       if(combo.length === 0) {return array;}
//       for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < combo.length; j++){
//           result.push(array[i] + combo[j]);
//         }
//       }
//       return result;
//     }
//     return combinations;
// };


console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));