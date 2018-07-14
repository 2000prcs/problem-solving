// Given a zero-indexed array A consisting of N integers, returns a string that 
// contains all duplicate values in A separated by a space and in sorted order.
// For example, if A = [3, 1, 4, 2, 3, 1], the expected output would be '1 3'


function findDuplicates(array) {
  let count = {};
  let dups = '';
  for(let i = 0; i < array.length; i++){
    count[array[i]] = (count[array[i]] || 0) + 1;
  }
  for(let key in count){
    if(count[key] >= 2){
      dups += key + ' '; 
    }
  }
  return dups;
}

let dups = findDuplicates([3, 1, 4, 2, 3, 1]);
console.log(dups);