// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
 
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// * Whenever you see a question that asks for the maximum or minimum of something, consider Dynamic Programming as a possibility.*

// set initials
// 1. first value in the array. It doesn’t matter to us whether max is positive or negative.
// 1. we need an intermediate current positive value, because a negative value does not interest us, since -2 is always more than -5 and it means 0 + -2 > -5.
// At this point we've covered first value in the array, that's why we will move through array starting from the 1 index.
// current += nums[i] means that every time we take a new value, we will sum it with the past current value. This will help us discard lower values in the next step.
// max = Math.max(max, current) means that we choose only the highest value (previous max or new current).
// current = Math.max(current, 0) means that if the value was negative, then we throw it away and set zero as default. Why? 
// Because it makes no sense to summarize the negative values, they simply do not interest us. The previous step is enough to compare negative values. 
// There we will choose the minimum negative value (if it is the case i.e [-10, -3, -5, -2, -6] will return only -2 because it is the highest value from the negative ones.

    const maxSubArray = (nums) => {
    let maxSum = nums[0];
    let currentSum = Math.max(maxSum, 0);

    for (let i = 1; i < nums.length; i++) {
        currentSum += nums[i];
        maxSum = Math.max(maxSum, currentSum);
        currentSum = Math.max(currentSum, 0);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23