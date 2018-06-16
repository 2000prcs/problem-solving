// Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutation = (str1, str2) => {
  let count = 0;
  if(str1.length !== str2.length){
    return false;    
  }
  for(let i = 0; i < str2.length; i++){
    if(str2.split('').includes(str1[i])){
      count++;
    }
  }
  if(count === str2.length){
    return true;
  }
  return false;
}

console.log(checkPermutation('aba', 'aab'), true);
console.log(checkPermutation('aba', 'aaba'), false);
console.log(checkPermutation('aba', 'aa'), false);