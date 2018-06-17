// There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false


const findOneAway = (str1, str2) => {
  if(str1.length === str2.length){
    return checkOneReplace(str1, str2);
  } else if (str1.length + 1 === str2.length){
    return checkOneInsert(str1, str2);
  } else if (str1.length - 1 === str2.length){
    return checkOneInsert(str2, str1);
  }
  
  function checkOneReplace (str1, str2) {
    let foundDifference = false;
    for(let i = 0; i < str1.length; i++){
      if(str1.charAt(i) !== str2.charAt(i)){
        if(foundDifference){
          return false;
        } else {
          foundDifference = true;
        }
      }
    }
    return true;
  }

  function checkOneInsert(str1, str2){
    let index1 = 0;
    let index2 = 0;
    while(index1 < str1.length && index2 < str2.length){
      if(str1.charAt(index1) !== str2.charAt(index2)){
        if(index1 !== index2){
          return false;
        } else {
          index2++;
        }
      } else {
        index1++;
        index2++;
      }
    }
    return true;
  }

}

var result = findOneAway('pale', 'ple');
var result2 = findOneAway('pales', 'pale');
var result3 = findOneAway('pale', 'bale');
var result4 = findOneAway('pale', 'bake');
var result5 = findOneAway('blankasky', 'blankiiiy');
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);