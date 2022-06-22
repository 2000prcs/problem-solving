// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:

// Input: n = 1
// Output: ["()"]
 
// Constraints:

// 1 <= n <= 8


const generateParenthesis = (n) => {
    let result = [];

    const backtrack = (parensString, openUsed, closeUsed) => {
      if(parensString.length === 2 * n){
        result.push(parensString);
        return;
      }
      if(openUsed < n){
        backtrack(parensString + '(', openUsed + 1, closeUsed);
      }
      if(closeUsed < openUsed){
        backtrack(parensString + ')', openUsed, closeUsed + 1);
      }
    }
    backtrack('', 0, 0);

    return result;
};


console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]