const mergeSort = (array) => {
  if(array.length < 2){
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);
  let left = array.slice(0, middleIndex);
  let right = array.slice(middleIndex);

  let mergeLeft = mergeSort(left);
  let mergeRight = mergeSort(right);
  
  function merge(left, right){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
      if(left[i] < right[j]){
          result.push(left[i++]);
        } else {
          result.push(right[j++]);
        }
      }
    let remain = i < left.length ? left.slice(i) : right.slice(j);
    return result.concat(remain);
  }

  return merge(mergeLeft, mergeRight);
}

console.log(mergeSort([2,4,1,6,8,5,3,7]));