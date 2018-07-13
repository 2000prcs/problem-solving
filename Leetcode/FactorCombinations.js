// input : integer
// output: array of arrays
// constraints: n is always positive / 1 < factor < n (no prime number)
// edge cases : type of input / check if it's negative number / 

// 12 
// 2 -> 6  
// 2 -> 2 -> 3
// 3 -> 4 

// no duplication
// find if the number is prime or not 

// iterate through 2 to the input number 
// when you find factor you push into the factor array 
// divide input 12 by 2 and if it's dividable -> divdied output (6) will be pushed to the array 
  // using the divided output as an argument, keep dividing recursively 
  // when the output can't be divided, we stop 

// push factor arry to result 
// factors = [[2,6]];
// output = [];
// store = new Map()
// 

// recursive function starts (val, output)
// 
// if(val is prime){
//  return;
// } 
// push output to factors
// 
// return;
// 
// 

// for loop to iterate 2 to input 12 
// value = input % i 
// if(value === 0)
// push i to output  ouput = [2] 
// if(!store.has(input / i))
//  -> push input/ i to output  => output = [2, 6]
// -> store.set(val, true)
// reucrsion Math.floor(input / i, output) 6
// 
// function isPrime(num) {
//   for(var i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return num !== 1;
// }
