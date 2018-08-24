// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


// Solution 1: sorting
// var findAnagrams = function(s, p) {
//   let result = [];
//   let newP = p.split('').sort().join('');
//   for(let i = 0; i < s.length; i++){
//       let word = s.substring(i, i + newP.length);
//       if(word.split('').sort().join('') === newP){
//           result.push(i);
//       }
//   }
//   return result;
// };


// Solution 2: counting chars
var findAnagrams = function(s, p){
  let result = [];
  let sArray = new Array(26).fill(0);
  let pArray = new Array(26).fill(0);

  for(let i = 0; i < p.length; i++){
    pArray[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for(let i = 0; i < s.length; i++){
    if(i >= p.length){
      sArray[s.charCodeAt(i -  p.length) - 'a'.charCodeAt(0)]--;
    }
    sArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    if(pArray.join('') === sArray.join('')){
      result.push(i + 1 - p.length);
    }
  }
  return result;
}

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
