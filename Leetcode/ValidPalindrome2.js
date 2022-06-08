// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

const validPalindrome = (s) => {
    const isPalindrome = (string, start, end) => {
        while (start < end) {
            if (string[start] !== string[end]) {
                return false;
            }
            start += 1;
            end -= 1;
        }
        return true;
    }

    let i = 0;
    let j = s.length - 1;

    // While i < j, check if the characters at indices i and j match. If they don't, that means we must spend our deletion on one of these characters.
    // Try both options using isPalindrome. In other words, return true if either isPalindrome(s, i, j -1) or isPalindrome(s, i + 1, j) is true.
    while (i < j) {
        if (s[i] !== s[j]) { // b 1 and c 2
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
        }
        i += 1;
        j -= 1;
    }
    
    return true;
};

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("abc")); // false
