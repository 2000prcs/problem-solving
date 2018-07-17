// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.
// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.


var topKFrequent = function(words, k) {
  let count = {};
  for(let i = 0; i < words.length; i++){
      count[words[i]] = (count[words[i]] || 0) + 1;
  }
  let sorted = Object.keys(count).sort((a, b)=> {
      if(count[a] !== count[b]){
         return count[b] - count[a];
      } else {
         if(a <= b){
             return -1;
         } 
         if(a > b){
             return 1;
         }
      }
  });
  return sorted.slice(0, k);
};


// another solution (shorter)

// var topKFrequent = function(words, k) {
//   const wordCounts = words.reduce((a, b) => {
//     a[b] ? a[b]++ : a[b] = 1;
//     return a;
//   }, {});
//   return Object.keys(wordCounts).sort((a, b) => {
//     if (wordCounts[a] > wordCounts[b]) return -1;
//     if (wordCounts[b] > wordCounts[a]) return 1;
//     else {
//       return a.localeCompare(b);
//     }
//   }).slice(0, k);
// };