// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

// Solution 1
// var groupAnagrams = function(strs) {
//   const groups = {};
//   for (let str of strs){
//     let key = str.split('').sort().join('');
//     groups[key] = [...groups[key] || [], str]; 
//   }
//   return Object.values(groups);
// };

function groupAnagrams (strs) {
  const hash = new Map();

  for (let str of strs) {
    const word = str.split('').sort().join();

    if (!hash.has(word)) {
      hash.set(word, []);
    }

    hash.get(word).push(str);
  }

  return [...hash.values()];
};

// Solution 2
// var groupAnagrams = function(strs) {
//   let map = new Map();
//   for(let i = 0; i < strs.length; i++){
//     let string = strs[i].split('').sort().join();
//     if(map.has(string)){
//       map.set(string, [...map.get(string), strs[i]]);
//     } else {
//       map.set(string, [strs[i]]);
//     }
//   }
//   var result = [];
//   console.log(map)
//   for (let value of map.values()){
//     result.push(value);
//   } 
//   return result;
// };


const input = ["paw","dad","bog","day","day","mig","len","rat"];
const input2 = ["", ""]
const input3 = ["eat", "tea", "tan", "ate", "nat", "bat"];

// const result = groupAnagrams(input);
const result3 = groupAnagrams(input3);
// console.log(result);
console.log(result3);