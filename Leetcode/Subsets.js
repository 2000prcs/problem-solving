// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


// Solution 1

var subsets = function(nums){
  let solutions = [];
  let currenSoltuion = [];
  nums.sort((a, b) => a - b);

  function helper(nums, start){
    solutions.push(currenSoltuion.slice(0));
    for(let i = start; i < nums.length; i++){
      currenSoltuion.push(nums[i]);
      helper(nums, i + 1);
      currenSoltuion.pop();
    }
  }
  
  helper(nums, 0);

  return solutions;
}

// Solution 2

// var subsets = function(nums) {
//   let result = [];
//   if(nums.length === 0 || !Array.isArray(nums)){
//       return result;
//   }
//   nums.sort((a, b) => a - b);
//   function findSubSet(set, index){
//       if(index === nums.length){
//           result.push(set);
//       } else {
//           findSubSet(set, index + 1);
//           findSubSet(set.concat(nums[index]), index + 1);
//       }
         
//   }
//   findSubSet([], 0);
  
//   return result;
// };


console.log(subsets([1,2,3]));