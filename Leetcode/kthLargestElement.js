// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.


// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 104
// -104 <= nums[i] <= 104

const findKthLargest = (nums, k) => {
    // Solution 1:
    // O(NlogN) time complexity and O(1) space complexity

    // nums = nums.sort((a, b) => b - a);
    // return nums[k - 1];

 const quickSelect = (left, right) => {
    const pivot = nums[right];
    let pivotIndex = left;
    
    for (let i = left; i < right; i++){
        if (nums[i] <= pivot) {
            [nums[pivotIndex], nums[i]] = [nums[i], nums[pivotIndex]];
            pivotIndex += 1;
        }

    }
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

    if (k < nums.length - pivotIndex) {
        return quickSelect(pivotIndex + 1, right);
    } else if (k > nums.length - pivotIndex) {
        return quickSelect(left, pivotIndex - 1);
    } else if (k === nums.length - pivotIndex) {
        return nums[pivotIndex];
    }
 }
 return quickSelect(0, nums.length - 1);
}

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))
