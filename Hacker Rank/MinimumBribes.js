// Function Description
// Complete the function minimumBribes in the editor below. 
// It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.
// minimumBribes has the following parameter(s):
// q: an array of integers

// input : 2 1 5 3 4
// output: 3
// input : 2 5 1 3 4
// output: Too chaotic

function minimumBribes(q) {
  let bribes = 0;
  for(let i = q.length - 1; i >= 0; i--){
    if(q[i] - (i + 1) > 2){
      console.log('Too chaotic');
      return;
    }
    for(let j = Math.max(0, q[i] - 2); j < i; j++){
      if(q[j] > q[i]) bribes++;
    }
  }
  console.log(bribes);
  return bribes;
}


let bribes = minimumBribes([2,1,5,3,4]);
let bribes2 = minimumBribes([2,5,1,3,4]);
let bribes3 = minimumBribes([ 5, 1, 2, 3, 7, 8, 6, 4 ]);
let bribes4 = minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]);
console.log(bribes);
console.log(bribes2);
console.log(bribes3);
console.log(bribes4);