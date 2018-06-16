// Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end 
// to hold the additional characters,and that you are given the "true" 
// length of the string. 
// (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

// EXAMPLE
// Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"

// Key point: strings are immutable. 

const URLify = (str, len) => {
  let spaceCount = 0;
  let characters = str.split('');
  for(let i = 0; i < len; i++){
    if(characters[i] === ' ') spaceCount++;
  }

  let backwardIndex = len + (spaceCount * 2);

  for(let j = len - 1; j > 0; j--){
    if(characters[j] === ' '){
      characters[backwardIndex - 1] = '0';
      characters[backwardIndex - 2] = '2';
      characters[backwardIndex - 3] = '%';
      backwardIndex = backwardIndex - 3;
    } else {
      characters[backwardIndex - 1] = characters[j];
      backwardIndex--;
    }
  }

  return characters.join('');

  // Solution2: Reg Exp
  // const sub = str.substr(0, len);
  // const replaced = sub.replace(/ /g, '%20');  
  // return replaced;

  // Solution3: splice
  // const splited = str.split('');
  // for(let i = 0; i < sub.length; i++){
    // if(splited[i] === ' '){
      // splited.splice(i, 1, '%20');
    // }
  // }
  // return splited.join('');
}


var result = URLify("Mr John Smith    ", 13);
console.log(result);
