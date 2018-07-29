// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// Solution 1: Hash Table
// Time: O(N)
// Space: O(1) - Although we do use extra space, the space complexity is O(1) 
// because the table's size stays constant no matter how large n is.

var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  let counter = new Array(26).fill(0);
  for(let i = 0; i < s.length; i++){
    counter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    counter[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  for(let i = 0; i < counter.length; i++){
    if(counter[i] !== 0){
      return false;
    }
  }
  return true;
};


// Solution 2: Sorting
// Time: O(N logN) - N ist he length of string
// Space: O(1)
// var isAnagram = function(s, t) {
//   return s.split('').sort().join('') === t.split('').sort().join('');
// };

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
