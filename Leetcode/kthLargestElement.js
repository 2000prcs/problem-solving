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
    /**
     * Use the last element as pivot for simplicity. Randomized pivot 
     * is a better way to avoid worst case where the the largest or the smallest 
     * element is always selected.
     */
    let pivot = nums[right];
    let separatorIndex = left;
    // Keep smaller numbers than pivot to the left of the separatorIndex and larger to the right
    for (let i = left; i < right; i++){
        if (nums[i] <= pivot) {
            [nums[separatorIndex], nums[i]] = [nums[i], nums[separatorIndex]];
            separatorIndex += 1;
        }

    }
    // Swap separatorIndex value to the position so that all numbers larger than the value 
    // is on the right, and smaller on the left.
    [nums[separatorIndex], nums[right]] = [nums[right], nums[separatorIndex]];

     /**
     * Use separatorIndex as the separator. If k is smaller than the length of the 
     * right side of the array, the target is in the right side of the array. 
     * If k is larger, the target is in the left side of the array. 
     */
    if (k < nums.length - separatorIndex) {
        return quickSelect(separatorIndex + 1, right);
    } else if (k > nums.length - separatorIndex) {
        return quickSelect(left, separatorIndex - 1);
    // separatorIndex is the index of the target if k equals to the length of the 
    // right side of the array.
    } else if (k === nums.length - separatorIndex) {
        return nums[separatorIndex];
    }
 }
 return quickSelect(0, nums.length - 1);
}

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))
