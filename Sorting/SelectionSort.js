
// Time complexity: O(N^2)
// Space complexity: O(1)

const selectionSort = (array) => {
  for(let i = 0; i < array.length - 1; i++){
    let minIndex = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
}


const sorted = selectionSort([2, 7, 4, 1, 5, 3]);
console.log(sorted);