// Complete the function minimumSwaps in the editor below. 
// It must return an integer representing the minimum number of swaps to sort the array.

//minimumSwaps has the following parameter(s):
// arr: an unordered array of integers

// Given array   [4,3,1,2]
// After swapping (0,2) we get [1,3,4,2]  
// After swapping (1,2) we get [1,4,3,2] 
// After swapping (1,3) we get [1,2,3,4]  
// So, we need a minimum of  swaps to sort the array in ascending order.

function minimumSwaps(arr) {
  let swap = 0;
  for(let i = 0; i < arr.length; i++){
     if(arr[i] !== i+1){
       let t = i;
       while(arr[t] !== i+1){
         t++;
       }
       let temp = arr[t];
       arr[t] = arr[i];
       arr[i] = temp;
       swap++;
     }
  }
  return swap;
}

let swaps = minimumSwaps([2,3,4,1,5]);
console.log(swaps);