//Given a string, write a function to check if it is a permutation of a palin­ drome. 
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)


const IsPalindromePermutation = (str) => {
  const newStr = str.toLowerCase().split(' ').join('');
  console.log(newStr);
  let isPalindrome = false;
  const getPermutations = (combo, string) => {
    if(string === ''){
      if(combo === combo.split('').reverse().join('')){
        isPalindrome = true;
      }
    }
    for(let i = 0; i < string.length; i++){
      getPermutations(combo + string[i], string.slice(0, i) + string.slice(i + 1));
    }

  }
  getPermutations('', newStr);
  return isPalindrome;
}

var result = IsPalindromePermutation('Tact Coa');
console.log(result);