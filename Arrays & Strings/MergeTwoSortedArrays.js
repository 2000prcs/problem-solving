



const mergeArrays = (arr1, arr2) => {
  let result = [];
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0] >= arr2[0]){
      result.push(arr2[0]);
      arr2.shift();
    } else {
      result.push(arr1[0]);
      arr1.shift();
    }
  }
  result = arr1.length > 0 ? result.concat(arr1) : (arr2.length > 0 ? result.concat(arr2) : result);
  console.log(result);
  return result;
}


mergeArrays([3,  4,  6, 10, 11, 15], [1,  5,  8, 12, 14, 19]);