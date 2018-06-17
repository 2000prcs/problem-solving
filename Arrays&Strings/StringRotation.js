// Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only 
// one call to isSubstring (e.g.,"waterbottle" is a rotation of "erbottlewat").

const rotateString = (str1, str2) => {
  if(str1.length !== str2.length){
    return false;
  } else {
    return isSubstring(str1+str1, str2);
  }

  function isSubstring(doubleStr1, str2){
    return doubleStr1.includes(str2);
  }

// Solution2: slice and join

  // let firstLetter = str1[0];
  // let leftSide;
  // let rightSide;
  // let splited = str2.split('');
  // let newString = '';
  
  // for(let i = 0; i < splited.length; i++){
  //   if(splited[i] === firstLetter){
  //     leftSide = splited.slice(0, i);
  //     rightSide = splited.slice(i);    
  //   }
  // }
  
  // newString += rightSide.join('') + leftSide.join('');

  // if(newString === str1){
  //   return true;
  // } else {
  //   return false;
  // }
}




var result = rotateString('waterbottle', 'erbottlewat');
console.log(result);
var result2 = rotateString('moeric', 'ericmo');
console.log(result2);
var result3 = rotateString('momeri', 'ericmo');
console.log(result3);