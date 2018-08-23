// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

// time: O(n) - in worst case, only two scans of the whole array are needed
// space: O(1) - no extra space is used. In place replacements are done

function nextPermutation(nums){
  let i = nums.length - 2;
  while(i >= 0 && nums[i+1] <= nums[i]){
    i--;
  }
  if(i >= 0){
    let j = nums.length - 1;
    while(j >= 0 && nums[j] <= nums[i]){
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i+1);

  return nums;
}


function reverse(arr, start){
  let i = start;
  let j = arr.length - 1;
  while(i < j){
    swap(arr, i, j);
    i++;
    j--;
  }
}


function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([1,1,5]))
console.log(nextPermutation([3,2,1]));
console.log(nextPermutation([1,5,8,4,7,6,5,3,1]));