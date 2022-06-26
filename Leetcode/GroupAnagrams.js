// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

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


const groupAnagrams = (strings) => {
  const anagramMap = {};

  for (let str of strings) {
    // const sortedStr = str.split('').sort().join('');
    const count = getCountArray(str);
    anagramMap[count] ? anagramMap[count].push(str) : anagramMap[count] = [str]
  }

  return Object.values(anagramMap);
}

const getCountArray = (str) => {
  const array = new Array(26).fill(0);

  for (let i = 0 ; i < str.length; i ++ ) {
    // Each char is unique ASCI value
    // Small caps start from 97 so small cap is a minus -97 will be 0
    const number = str.charCodeAt(i) - 97;
    array[number] = 1;
  }
    // For example output for eat
    /**
     * 
    [
        1, 0, 0, 0, 1, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 0, 0, 0, 0,
        0, 0
    ]
     */
  return array.join('');
}



const input = ["paw","dad","bog","day","day","mig","len","rat"];
const input2 = ["", ""]
const input3 = ["eat", "tea", "tan", "ate", "nat", "bat"];

// const result = groupAnagrams(input);
const result3 = groupAnagrams(input3);
// console.log(result);
console.log(result3);