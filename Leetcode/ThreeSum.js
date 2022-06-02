// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:

// Input: nums = []
// Output: []

// Example 3:

// Input: nums = [0]
// Output: []
 
// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

const threeSum = (nums) => {
    const result = [];
    if (nums.length < 3) {
        return result;
    }
    const sortedNums = nums.sort((a, b) => a - b);
    const target = 0;

    for(let i = 0; i < sortedNums.length - 2; i++) {
        if (sortedNums[i] > target) {
            break;
        }
        
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]){
            continue;
        } 

        let j = i + 1;
        let k = sortedNums.length - 1;

        while (j < k) {
            let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
            if (sum === target) {
                result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                
                while (sortedNums[j] === sortedNums[j+1]) {
                    j++;
                }
                while (sortedNums[k] === sortedNums[k-1]) {
                    k--;
                }
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []