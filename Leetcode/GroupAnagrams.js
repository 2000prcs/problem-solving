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

// Solution 1 -> using sort()
// var groupAnagrams = function(strs) {
//   const groups = {};
//   for (let str of strs){
//     let key = str.split('').sort().join('');
//     groups[key] = [...groups[key] || [], str]; 
//   }
//   return Object.values(groups);
// };

// time complexity: O(N KlogK) - where N is the length of strs, and K is the maximum length of a string in strs
// The outer loop has complexity O(N) as we iterate through each string. Then we sort each string in O(K log K) time.
// Space complexity: O(NK) - the total information content stored in anagrams


// function groupAnagrams (strs) {
//   const hash = new Map();

//   for (let str of strs) {
//     const word = str.split('').sort().join();

//     if (!hash.has(word)) {
//       hash.set(word, []);
//     }

//     hash.get(word).push(str);
//   }

//   return [...hash.values()];
// };

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


// Solution 3 -> usign character count (no sorting)
// Time complexity: O(NK) - where N is the length of strs, and K is the maximum length of a string in strs
// coUNTING EACH STRING IS LINEAR IN THE SIZE OF THE STRING, and we count every string
// Space complexity: O(NK) - the total information content stored in anagrams


function groupAnagrams(strs){
  let strArray = new Array(26).fill(0);
  let anagrams = {};
  for(let i = 0; i < strs.length; i++){
    for(let j = 0; j < strs[i].length; j++){
      strArray[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
    }
    if(anagrams[strArray]){
      anagrams[strArray].push(strs[i]);
    } else {
      anagrams[strArray] = [strs[i]];
    }
    strArray.fill(0);
  }
  return Object.values(anagrams);
}



const input = ["paw","dad","bog","day","day","mig","len","rat"];
const input2 = ["", ""]
const input3 = ["eat", "tea", "tan", "ate", "nat", "bat"];

// const result = groupAnagrams(input);
const result3 = groupAnagrams(input3);
// console.log(result);
console.log(result3);