// Given a string s which represents an expression, evaluate this expression and return its value. 

// The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().


// Example 1:

// Input: s = "3+2*2"
// Output: 7

// Example 2:

// Input: s = " 3/2 "
// Output: 1

// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 231 - 1].
// The answer is guaranteed to fit in a 32-bit integer.


const calculate = (s) => {
    const stack = [];
    let currentNumberString = '';
    let prevOperator = '+';
    const trimmedS = s.trim(); // remove white spaces
 
    for (let i = 0; i <= trimmedS.length; i++) {
        let currentChar = trimmedS[i];
        if(!isNaN(currentChar)) {
            currentNumberString += currentChar;
        } else if (isNaN(currentChar)) { // currentChar is one of the 4 prevOperators
            const currentNumber = parseInt(currentNumberString, 10);
            if (prevOperator === '+') {
                stack.push(currentNumber);
            } else if (prevOperator === '-') {
                stack.push(-1 * currentNumber);
            } else if (prevOperator === '*') {
                stack.push(stack.pop() * currentNumber);
            } else if (prevOperator === '/') {
                stack.push(parseInt(stack.pop() / currentNumber, 10));
            }
            prevOperator = currentChar;
            currentNumberString = '';
        }
    }
    
    return stack.reduce((a, b) => a + b, 0);
}

console.log(calculate("3+2*2")); // 7
console.log(calculate(" 3/2 ")); // 1
console.log(calculate(" 3+5 / 2 ")); // 5
