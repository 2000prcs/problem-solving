// given an arr, find duplicates with the following constraints
// 1. constant space, less than O(n^2) time
// 2. N+1 indexes but numbers can only be 1 -> N, so you know there has to be a duplicate
// you can just return 1 duplicate


const findDups = (array) => {
  // find median of the array
  // iterate through the array, and get smaller values / larger values than median
  // if smaller elemets are more the number of smaller numbers of the median, repeat the step again
  // repeat recursivel until find the dup
 
}

let array = [2, 4, 3, 1, 2, 5];
console.log(findDups(array));
