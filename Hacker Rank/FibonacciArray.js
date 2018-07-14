// The Fibonacci numbers are a sequence of numbers where each number after the first two is a sum of the prior two. 
// As an illustration, here is a short sequence given starting values 0f (0, 1) is (0,1,1,2,3,5,8,13)
// You will be given an integer n and must calculate the first n numbers in the Fibonacci sequence 
// given starting elements of (0, 1). Return an array with all of the values in ascending order.

// Complete the function fibonacci in the editor below. The function must return an array Fibonacci numbers.


var fibonacci = function (n) {
  if ( n == 0 ) return [];
  if ( n == 1 ) return [0];
  if ( n == 2 ) return [0, 1];
  
  const prevSeq =  fibonacci(n - 1); 
  return prevSeq.concat(prevSeq[n - 2] + prevSeq[n - 3]);
};


// function fibonacci(n) {
//   if(n > 0){
//      let arr = [0, 1];
//       for (let i = 2; i < n + 1; i++){
//         if(arr.length === n) break;
//         arr.push(arr[i - 2] + arr[i -1])
//       }
//      return arr; 
//   }
// }

let fibs = fibonacci(4);
console.log(fibs);