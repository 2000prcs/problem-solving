const pancakeSort = (arr) => {
  for(let i = arr.length - 1; i >= 1; i--){
    // find the index of the largest element not yet sorted
    let maxIdx = 0;
    let max = arr[0];
    for(let j = 1; j <= i; j++){
      if(arr[j] > max){
        max =  arr[j];
        maxIdx = j;
      }
    }
    if(maxIdx === i){
      continue; // element already in place
    }
    let newSlice;
    // flip arr max element to index 0
    if(maxIdx > 0){
      newSlice =  arr.slice(0, maxIdx+1).reverse();
      for(let j = 0; j <= maxIdx; j++){
        arr[j] = newSlice[j];
      }
    }
    // then flip the max element to its place
    newSlice = arr.slice(0, i+1).reverse();
    for(let j = 0; j<= i; j++){
      arr[j] = newSlice[j];
    }
  }

  return arr;
}


let array = [3, 0, 2, 5, -1, 4, 1];
console.log(pancakeSort(array));