// Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only 
// one call to isSubstring (e.g.,"waterbottle" is a rotation of "erbottlewat").

const rotateString = (str1, str2) => {
  let firstLetter = str1[0];
  let leftSide;
  let rightSide;
  let splited = str2.split('');
  let newString = '';
  
  for(let i = 0; i < splited.length; i++){
    if(splited[i] === firstLetter){
      leftSide = splited.slice(0, i);
      rightSide = splited.slice(i);    
    }
  }
  
  newString += rightSide.join('') + leftSide.join('');

  if(newString === str1){
    return true;
  } else {
    return false;
  }
}




var result = rotateString('waterbottle', 'erbottlewat');
console.log(result);
