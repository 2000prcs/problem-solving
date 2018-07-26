// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

var wordPattern = function(pattern, str) {
  if(!pattern || !str) return false;
  let words1 = pattern.split('');
  let words2 = str.split(' ');
  if(words1.length !== words2.length) return false;
  let patternMap = {};
  let strMap = {};
  for(let i = 0; i < words1.length; i++){
    if(patternMap[words1[i]] && patternMap[words1[i]] !== words2[i]) return false;
    if(strMap[words2[i]] && strMap[words2[i]] !== words1[i]) return false;
    patternMap[words1[i]] = words2[i];
    strMap[words2[i]] = words1[i];
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));