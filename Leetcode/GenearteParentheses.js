// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]


var generateParenthesis = function(n) {
    let result = [];
    function backtrack(s, left, right){
      if(s.length === 2 * n){
        result.push(s);
        return;
      }
      if(left < n){
        backtrack(s + '(', left+1, right);
      }
      if(right < left){
        backtrack(s + ')', left, right+1);
      }
    }
    backtrack('', 0, 0);
    return result;
};


console.log(generateParenthesis(3));