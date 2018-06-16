//Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?

const isUnique = (str) => {
  // var newStr = new Set(str);
  // if(Array.from(newStr).length !== str.split('').length){
  //   return false;
  // }
  // return true;

  for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j < str.length; j++){
      if(str[i] === str[j]){
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique('aabbb'));
console.log(isUnique('abc'));


