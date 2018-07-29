// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

var search = function(nums, target){
  if(nums.length === 0) return -1;

  let low = 0;
  let high = nums.length - 1;

  while(low <= high){
    let mid =  Math.floor((low + high) / 2);
    if(nums[mid] === target) return mid;
    if(nums[mid] >= nums[low]){
      if(target >= nums[low] && target < nums[mid]){
        high = mid -1;
      } else {
        low = mid + 1;
      }
    } else {
      if(target <= nums[high] && target > nums[mid]){
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));


// var search = function(nums, target) {
//   if(!Array.isArray(nums) || typeof target !== 'number' || nums.length === 0) return -1;
//   if(target === nums[0]) return 0;
//   if(target === nums[nums.length - 1]) return nums.length-1;
//   if(target > nums[0]){
//       let i = 0;
//       while(nums[i] < nums[i + 1]){
//           if(nums[i + 1] === target){
//               return i + 1;
//           }
//           i += 1;
//       }
//   } else if (target < nums[0]){
//       let i = nums.length - 1;
//       while(nums[i] > nums[i - 1]){
//           if(nums[i - 1] === target){
//               return i - 1;
//           }
//           i -= 1;
//       }
//   }
//   return -1;
// };