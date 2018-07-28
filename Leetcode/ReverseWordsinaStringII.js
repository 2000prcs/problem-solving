// Given an input string , reverse the string word by word. 

// Example:

// Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
// Note: 

// A word is defined as a sequence of non-space characters.
// The input string does not contain leading or trailing spaces.
// The words are always separated by a single space.
// Follow up: Could you do it in-place without allocating extra space?

var reverseWords = function(str) {
  // reverse the whole string (each word is reversed as well)
  reverseWord(str, 0, str.length - 1);
  // reverse each word
  let wordStart = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      reverseWord(str, wordStart, i - 1);
      wordStart = i + 1;
    }
  }
  function reverseWord (str, startIndex, endIndex){
    while(startIndex < endIndex){
      let temp = str[startIndex];
      str[startIndex] = str[endIndex];
      str[endIndex] = temp;
      startIndex += 1;
      endIndex -= 1;
    }
  }
  console.log(str)

  // solution 2 : in-place swap
  // str.reverse();
  // let i = 0;
  // let j = 0;
  // while(j <= str.length){
  //   if(str[j] === ' ' || j === str.length){
  //     for(let a = i, b = j - 1; a < b; a++, b--){
  //       [str[a], str[b]] = [str[b], str[a]];
  //     }
  //     i = j = j + 1;
  //   } else {
  //     j++;
  //   }
  // }
  // return str;
}

let input = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"];
let output = ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"];
console.log(reverseWords(input));