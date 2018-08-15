// Complete the function mergeStrings to merge two strings
// merge 'abc' and 'stuvwx' -> 'a' + 's' + 'b' + 't' + 'c' + 'u' and append the remainder of the second string 


function mergeStrings(a, b) {
  let newString = '';
  let shorter = a.length > b.length ? b : a;
  let longer = shorter === a ? b : a;
  for(let i = 0; i < shorter.length; i++){
    newString += a[i];
    newString += b[i];
  }
  return newString.concat(longer.slice(shorter.length));
}

console.log(mergeStrings('abc', 'def'));

console.log(mergeStrings('ab', 'zsd'));