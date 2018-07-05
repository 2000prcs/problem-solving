
// Time complexity: Best - O(N) Worst - O(N^2)
// Space complexity: O(1)

const insertionSort = (array) => {
  for(let i = 1; i < array.length; i++){
    let value = array[i];
    let hole = i;
    while(hole > 0 && array[hole - 1] > value){
      array[hole] = array[hole - 1];
      hole--;
    }
    array[hole] = value;
  }

  return array;
}


const sorted = insertionSort([7, 2, 4, 1, 5, 3]);
console.log(sorted);