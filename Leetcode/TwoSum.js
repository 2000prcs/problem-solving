// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Try in O(N) time complexity

// Time Complexity: O(N)
// Space Complexity: O(N)

var twoSum = function(nums, target) {
  let result = [];
  let store = {};
  for(let i = 0; i < nums.length; i++){
      store[nums[i]] = i;
  }
  for(let i = 0; i < nums.length; i++){
    let index = store[target - nums[i]];
    if(index && i !== index) return [i, index];
  }
  return result;
};


// Brute force: Worse case O(N^2)
// var twoSum = function(nums, target) {
//   let result = [];
//   for(let i = 0; i < nums.length; i++){
//       for(let j = i+1; j < nums.length; j++){
//           if(nums[i] + nums[j] === target){
//               result = [i, j];
//           }
//       }
//   }
//   return result;
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1,3,4,2], 6));