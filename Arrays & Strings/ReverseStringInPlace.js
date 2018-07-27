
// Write a function to reverse a string in-place
// Time: O(n)
// Space: O(1)

const reverseStringInPlace = (string) => {
  let splited = string.split('');
  let left = 0;
  let right = splited.length - 1;
  while(left < right){
    let temp = splited[left];
    splited[left] = splited[right];
    splited[right] = temp;
    left += 1;
    right -= 1;
  }
  return splited.join('');
}

console.log(reverseStringInPlace('appleorangebanana'));