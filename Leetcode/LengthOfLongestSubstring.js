// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (string) => {
    // keeps track of the starting index of the current substring.
    let start = 0;
    let maxLength = 0;
    // keeps track of the most recent index of each letter.
    const lookup = {};
    
    for (j = 0; j < string.length; j++) {
        // If the current char is in lookup, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if (lookup[string[j]] !== undefined) {
            start = Math.max(lookup[string[j]] + 1, start);
        }
        // maximum of the current substring length and maxLength
        maxLength = Math.max(maxLength, j - start + 1);
        lookup[string[j]] = j;
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3 "abc"
console.log(lengthOfLongestSubstring("bbbbb")) // 1 "b"
console.log(lengthOfLongestSubstring("pwwkew")) // 3 "wke"