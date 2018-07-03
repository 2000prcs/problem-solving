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