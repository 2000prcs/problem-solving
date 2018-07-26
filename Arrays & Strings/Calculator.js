
var calculate = function(s) {
  let sum = 0;
  let sign = 1;
  let stack = [];
  let num = 0;
  for(let i = 0 ; i < s.length + 1; i++){
      if (checkDigit(s[i])){
        let digit = parseInt(s[i]);
        num = num * 10 + digit;
      } else if (s[i] === ' '){
        continue;
      } else {
          if (s[i] === '+'){
          sum += sign * num;
          sign = 1;
        } else if (s[i] === '-'){
          sum += sign * num;
          sign = -1;
        } else if (s[i] === '('){
          stack.push(sign);
          stack.push(sum);
          sum = 0;
          sign = 1;
        } else if (s[i] === ')'){
          sum += sign * num;
          let prevSum = stack.pop();
          sign =  stack.pop();
          sum = prevSum + (sign * sum);
        } else if (!s[i]) {
          sum += sign * num;
        }
        num = 0;
    }
  }
  return sum;
};

function checkDigit(s){
  let num = parseInt(s);
  return Number.isInteger(num) ? true : false;
}

console.log(calculate('110-10+50'));
console.log(calculate('2+5-3'));
console.log(calculate('(110-10)+(50-10)'));
console.log(calculate('110-(10+50)-10'));



// var calculateFromStringWithParens = function(s) {
//   let stack = [];
//   let total = 0;
//   let num = 0;
//   let sign = 1;

//   // iterate to length + 1 to get last addition to stack
//   for (let i = 0; i < s.length + 1; i++) {
//     if (isDigit(s[i])) {
//       let digit = parseInt(s[i]);
//       num = num * 10 + digit;
//     } else if (s[i] === ' ') {
//       continue;
//     } else {
//         if (s[i] === '+') {
//         total += sign * num;
//         sign = 1;
//       } else if (s[i] === '-') {
//         total += sign * num;
//         sign = -1;
//       } else if (s[i] === '(') {
//         stack.push(sign);
//         stack.push(total);
//         sign = 1;
//         total = 0;
//       } else if (s[i] === ')') {
//         total += sign * num;
//         let prevTotal = stack.pop();
//         sign = stack.pop();
//         total = prevTotal + (sign * total);
//       } else if (!s[i]) {
//         total += sign * num;
//       }
//       num = 0;
//     }
//   }
//   return total;
// };

// var isDigit = function(s) {
//   s = parseInt(s);
//   return Number.isInteger(s) ? true : false;
// }


