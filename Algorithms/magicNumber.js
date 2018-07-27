// Write a function that takes a magic number and a list of numbers. 
// It returns true if it can insert add or subtract operations in the list of numbers to get the magic number. Otherwise, it returns false.

// For example:

// f(10, [1,2]) = false. There's no way to add or subtract 1 and 2 to get 10.
// f(2, [1,2,3,4]) = true. 1 + 2 + 3 - 4 = 2.
// f(0, []) = true
// f(1, []) = false
// f(1, [1]) = true
// f(0, [1]) = false

function arithmeticBoggle(magicNumber, numbers) {
  let sum = 0;
  let isValid = false;

  function helper(remaining, sum){
    if(remaining.length === 0){
      if(sum === magicNumber){
         isValid = true;
      }    
      return;
    }
    for(let i = 0; i < remaining.length; i++){
      helper(remaining.slice(i+1), sum + remaining[i]);
      helper(remaining.slice(i+1), sum - remaining[i]);
    }
  }
  helper(numbers, sum);
  
  return isValid;
}

console.log(arithmeticBoggle(2,  [4,3,2,1]));
console.log(arithmeticBoggle(10, [1,2]))
console.log(arithmeticBoggle(1, [1]));
console.log(arithmeticBoggle(0, [1]));
console.log(arithmeticBoggle(0, []));
console.log(arithmeticBoggle(1, []));