
// Time complexity : Worst: O(N^2), Best: O(N)
// Space complexity : O(1)


const bubbleSort = (array) => {
  if(!Array.isArray(array)){
    throw new TypeError('Invalid Input');
  }
  for(let i = 0; i < array.length - 1; i++){
    let swaps = 0;
    // Every loop, the biggest element gets assigned to the right most position.
    // So every time we can check only until array.length - i - 1
    for(let j = 0; j < array.length - i - 1; j++){
      if(array[j] > array[j + 1]){
        let temp = array[j + 1]
        array[j + 1] = array[j];
        array[j] =  temp;
        swaps++;
      }
    }
    // If no swaps, no need to repeat iterating
    if(swpas === 0){
      break;
    }
  }
  return array;
}


const sorted = bubbleSort([2, 7, 4, 1, 5, 3]);
console.log(sorted);