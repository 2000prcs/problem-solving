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
    // obviously irrelevant if we don't have at least 3 numbers to play with!
    if (nums.length < 3) {
        return result;
    }
    // having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
    const sortedNums = nums.sort((a, b) => a - b);
    // if the question asks us for a custom target, we can control it here
    const target = 0;

    for(let i = 0; i < sortedNums.length - 2; i++) {
        // `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
        if (sortedNums[i] > target) {
            break;
        }
        
        // we don't want repeats, so skip numbers we've already seen
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]){
            continue;
        } 

        // `j` represents the "middle" element between `i` and `k`.
		// we will increment this up through the array while `i` and `k`
		// are anchored to their positions. we will decrement `k` for
		// for each pass through the array, and finally increment `i`
		// once `j` and `k` meet.
        let j = i + 1;
        // `k` represents the "right" most element
        let k = sortedNums.length - 1;

        // to summarize our setup, we have `i` that starts at the beginning,
		// `k` that starts at the end, and `j` that races in between the two.
		//
		// note that `i` is controlled by our outer for-loop and will move the slowest.
		// in the meantime, `j` and `k` will take turns inching towards each other depending
		// on some logic we'll set up below. once they collide, `i` will be incremented up
		// and we'll repeat the process.
        while (j < k) {
            let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
            // if we find the target sum, increment `j` and decrement `k` for
			// other potential combos where `i` is the anchor
            if (sum === target) {
                result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                
                // this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
                while (sortedNums[j] === sortedNums[j+1]) {
                    j++;
                }
                while (sortedNums[k] === sortedNums[k-1]) {
                    k--;
                }
                // finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.
                j++;
                k--;
            // if the sum is too small, increment `j` to get closer to the target
            } else if (sum < target) {
                j++;
            // if the sum is too large, decrement `k` to get closer to the target
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