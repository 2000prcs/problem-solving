var isValid = function(s) {
  let parens = {
      '(': ')',
      '[': ']',
      '{': '}'
  };
  var stack = [];
  
  for (var i = 0; i < s.length; i++) {
      var paren = s[i];
      
      if (parens[paren]) {
          stack.push(parens[paren]);
      } else {
          if (paren !== stack.pop()) {
              return false;
          }
      }
  }
  // stack must be empty at the end
  return stack.length === 0;
};


console.log(isValid("()[]{}"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("(("));