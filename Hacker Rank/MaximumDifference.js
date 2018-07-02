// Maximum difference between two elements such that larger element appears after the smaller number
// Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number.

// Examples :

// Input : arr = {2, 3, 10, 6, 4, 8, 1}
// difference = [1] from 3 - 2 [8, 7] from 10 - 2, 10 - 3 [4, 3] from 6 - 2, 6 - 3
// Output : 8
// Explanation : The maximum difference is between 10 and 2.

// Input : arr = {7, 9, 5, 6, 3, 2}
// Output : 2
// Explanation : The maximum difference is between 9 and 7.

// solution 1
// Time Complexity : O(n^2)
// Auxiliary Space : O(1)
var MaxDifference = function(arr){
  let maxDiff = null;
  for(let x = 0; x < arr.length; x++){
    for(let y = x+1; y < arr.length; y++){
        if(arr[x] < arr[y] && maxDiff < (arr[y] - arr[x])){
            maxDiff = arr[y] - arr[x]
        }
    }
  }
  return maxDiff === null ? -1 : maxDiff;
}
MaxDifference([5,10,8,7,6,5]);
MaxDifference([1, 2, 90, 10, 110]); //109

// solution 2
// Time Complexity : O(n)
// Auxiliary Space : O(1)

var MaxDifference2 = function(arr){
  var maxDiff = null;
  var minElement = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] - minElement > maxDiff){
        maxDiff = arr[i] - minElement;
    }
    if(arr[i] < minElement){
        minElement = arr[i];
    }
  }
  return maxDiff === null ? -1 : maxDiff;
}

MaxDifference2([5,10,8,7,6,5]);
MaxDifference2([80, 2, 6, 3, 100]); //98 

function maxDifference3(a) {
    let max = -1;
    let maxRight = a[a.length - 1];

    for (let i = a.length - 2; i >= 0; i--) {
        if (a[i] >= maxRight) {
            maxRight = a[i];
        } else {
            let diff = maxRight - a[i];
            if (diff > max) {
                max = diff;
            }
        }
    }
    return max;
}

maxDifference3([5,10,8,7,6,5]);
maxDifference3([80, 2, 6, 3, 100]); //98 