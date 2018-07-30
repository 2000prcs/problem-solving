// Given two strings s and t, determine if they are both one edit distance apart.

// Note: 

// There are 3 possiblities to satisify one edit distance apart:

// Insert a character into s to get t
// Delete a character from s to get t
// Replace a character of s to get t
// Example 1:

// Input: s = "ab", t = "acb"
// Output: true
// Explanation: We can insert 'c' into s to get t.
// Example 2:

// Input: s = "cab", t = "ad"
// Output: false
// Explanation: We cannot get t from s by only one step.
// Example 3:

// Input: s = "1203", t = "1213"
// Output: true
// Explanation: We can replace '0' with '1' to get t.

var isOneEditDistance = function(s, t){
  let [i , j] = [0, 0];
  while(i < s.length || j < t.length){
    if(s[i] !== t[j]){
      return s.substring(i) === t.substring(j + 1) // insert
      || s.substring(i + 1) === t.substring(j) // delete
      || s.substring(i + 1) === t.substring(j + 1) // replace
    }
    i += 1;
    j += 1;
  }
  return false;
}

console.log(isOneEditDistance("ab", "acb"));
console.log(isOneEditDistance("cab", "ad"));
console.log(isOneEditDistance("1203", "1213"));
