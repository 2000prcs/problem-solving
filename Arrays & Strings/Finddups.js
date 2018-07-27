// given an arr, find duplicates with the following constraints
// 1. constant space, less than O(n^2) time
// 2. N+1 indexes but numbers can only be 1 -> N, so you know there has to be a duplicate
// you can just return 1 duplicate


const findDups = (array) => {
  // find median of the array
  // iterate through the array, and get smaller values / larger values than median
  // if smaller elemets are more the number of smaller numbers of the median, repeat the step again
  // repeat recursivel until find the dup

  // Soltion 1 (optimized) : binary search to find n+1 element
  // Time: O(n log n)
  // Space: O(1)
  let floor = 1;
  let ceiling = array.length - 1;
  while (floor < ceiling){
    // divide our range 1..n into an upper range and lower range
    // (such that they don't overlap)
    // lower range is floor..midpoint
    // upper range is midpoint+1..ceiling
    let midpoint = Math.floor(floor + ((ceiling - floor) /  2));
    let lowerRangeFloor = floor;
    let lowerRangeCeiling = midpoint;
    let upperRangeFloor = midpoint + 1;
    let upperRangeCeiling = ceiling;

    let distinctPossibleIntegersInLowerRnage = lowerRangeCeiling - lowerRangeFloor + 1;

    // count number of items in lower range
    let itemsInLowerRange = 0;
    array.forEach((item) => {
      // is it in the lower range?
      if(item >= lowerRangeFloor && item <= lowerRangeCeiling){
        itemsInLowerRange += 1;
      }
    });

    if(itemsInLowerRange > distinctPossibleIntegersInLowerRnage) {
      // there must be a duplicate in the lower range
      // so use the same approach iteratively on that range
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      // there must be a duplicate in the upper range
      // so use the same approach iteratively on that range
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }  
  // floor and ceiling have converged
  // we found a number that repeats!
  return floor;


  // Solution 2 (Brute force): check each value is visited twice 
  // Time: O(n^2)
  // Space: O(1)
  // for(let number = 1; number < array.length; number++){
  //   let hasBeenSeen = false;
  //   for(let i = 0; i < array.length; i++){
  //     if(number === array[i]){
  //       if(hasBeenSeen){
  //         return array[i];
  //       } else {
  //         hasBeenSeen = true;
  //       }
  //     }
  //   }
  // }


  // solution 1 (Brute force): Store all values in a hashmap
  // Time:  O(n)
  // Space: O(n)
  // let numbersSeen = new Set();
  // for(let i = 0; i < array.length; i++){
  //   if(numbersSeen.has(array[i])){
  //     return array[i];
  //   } else {
  //     numbersSeen.add(array[i]);
  //   }
  // }
}

let array = [2, 4, 3, 1, 2, 5];
console.log(findDups(array));
