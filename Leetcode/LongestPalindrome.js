// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


const longestPalindrome = function(s) {
    let longest = '';

    const expandToCheckPalindrome = (string, start, end) => {
        while (start >= 0 && end < string.length && string[start] === string[end]) {
            start -= 1;
            end += 1;
        }
        return string.substring(start + 1, end);
    }

    for (let i = 0; i < s.length; i++) {
        const oneCharacterCenterPalindrome = expandToCheckPalindrome(s, i, i);
        const twoCharactersCenterPalindrome = expandToCheckPalindrome(s, i, i + 1);
        const longerPalindrome = oneCharacterCenterPalindrome.length > twoCharactersCenterPalindrome.length ? oneCharacterCenterPalindrome : twoCharactersCenterPalindrome;
        longest = longest.length > longerPalindrome.length ? longest : longerPalindrome;
    }

    return longest;
};

console.log(longestPalindrome('babad')); // bab or aba
console.log(longestPalindrome('cbbd')); // bb
console.log(longestPalindrome('ccc')); // ccc

