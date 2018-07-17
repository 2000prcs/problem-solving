// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

// Example:

// Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
// Output: 
// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]


var groupStrings = function(strings) {
  let map = {};
  let results = [];

  for(let i = 0; i < strings.length; i++){
    let charDistances = '';
    for(let charIndex = 1; charIndex < strings[i].length; charIndex++){
      let distance = strings[i].charCodeAt(charIndex) - strings[i].charCodeAt(charIndex - 1);
      if (distance < 0){
        // Handle reverse shifting
        charDistances += '-' + (26 + distance);
      } else {
        charDistances += '-' + distance;
      }
    }
    if(!map[charDistances]){
      map[charDistances] = [strings[i]];
    } else {
      map[charDistances].push(strings[i]);
    }
  }
  Object.values(map).forEach(value => {
    results.push(value);
  });
  return results;
}

let input = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];

console.log(groupStrings(input));