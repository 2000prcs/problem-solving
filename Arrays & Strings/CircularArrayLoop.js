
// Return a boolean indicating if the given relative array is a complete cycle

var getIndex = function(i, nums){
  let n = nums.length;
  return i + nums[i] >= 0 ? (i + nums[i]) % n : n + ((i + nums[i]) % n);
}






var circularArrayLoop = function(nums){
  var n = nums.length;
  for(var i = 0; i < n; i++){
    if(nums[i] === 0){
      continue;
    }
  }
  var j = i;
  var k = getIndex(i, nums);
  console.log(k)


}


console.log(circularArrayLoop([2, 2, -1]));
console.log(circularArrayLoop([2,-1, 1, 2, 2]));
console.log(circularArrayLoop([1,2,3,4,5]));
console.log(circularArrayLoop([-2,1,-1,-2,-2]));