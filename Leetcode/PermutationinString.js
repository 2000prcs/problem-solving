// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.
// Example 1:
// Input:s1 = "ab" s2 = "eidbaooo"
// Output:True
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:
// Input:s1= "ab" s2 = "eidboaoo"
// Output: False
// Note:
// The input strings only contain lower case letters.
// The length of both given strings is in range [1, 10,000].

function matches(arr1, arr2){
  for(let i = 0; i < 26; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

var checkInclusion = function(s1, s2) {
  // Solution 1: Sliding window approach 
  // Get distance between each letter from 'a' alphabet, and compare with s2
  // if s2 includes any same distance pattern 
  // Time: O(S1 + 26 * (S2 - S1))
  // Space: O(1)
  if(s1.length > s2.length) return false;
  let count1 = Array(26).fill(0);
  let count2 = Array(26).fill(0);
  for(let i = 0; i < s1.length; i++){
    count1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for(let i = 0; i < s2.length - s1.length; i++){
    if(matches(count1, count2)){
      return true;
    }
    count2[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)]++;
    count2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  return matches(count1, count2);
  
  // Solution 2: sorting 
  // Time: O(S1 * Log(S1) + (S2 - S1) * S1 Log(S1))
  // Space: O(S1)
  // let sortedS1 = s1.split('').sort().join('');
  // let result = false;
  // for(let i = 0; i <= s2.length - s1.length; i++){
  //     if(s2.slice(i, s1.length + i).split('').sort().join('') === sortedS1){
  //         result = true;
  //     }
  // }
  // return result;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));