//Given a string, write a function to check if it is a permutation of a palin­ drome. 
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)


const IsPalindromePermutation = (str) => {
  // Solution1: Object to count
  // Time complexity is O(N) where N is the length of the string

  let charCounts = {};
  let newStr = str.toLowerCase().split(' ').join('');
  let isPalindrome = true;
  let mulligan = false;
  for(let i = 0; i < newStr.length; i++){
    charCounts[newStr[i]] = (charCounts[newStr[i]] || 0) + 1; 
  }
  for(let key in charCounts){
    if(charCounts[key] % 2 !== 0){
      // if more than one exception, return false
      if(mulligan){
        isPalindrome = false;
      } else {
        mulligan = true;
      }
    }
  }
  return isPalindrome;


  // Solution2: Recursion
  // const newStr = str.toLowerCase().split(' ').join('');
  // let isPalindrome = false;
  // const getPermutations = (combo, string) => {
  //   if(string === ''){
  //     if(combo === combo.split('').reverse().join('')){
  //       isPalindrome = true;
  //       return;
  //     }
  //   }
  //   for(let i = 0; i < string.length; i++){
  //     getPermutations(combo + string[i], string.slice(0, i) + string.slice(i + 1));
  //   }

  // }
  // getPermutations('', newStr);
  // return isPalindrome;
}

var result = IsPalindromePermutation('Tact Coa');
console.log(result);
var result2 = IsPalindromePermutation('Tact Boa');
console.log(result2);


