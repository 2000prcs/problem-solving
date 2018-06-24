// Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not 
// become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

const compressString = (str) => {
  let compressed = '';
  
  for(let i = 0; i < str.length; i++){
    let currentChar = str[i];
    let start = i;
    while (i + 1 < str.length && currentChar === str[i + 1]) {
      ++i;
    }
    compressed += currentChar + (i - start + 1);
  }
  return compressed.length < str.length ? compressed : str;
}


var result = compressString('aabcccccaaa');
var result2 = compressString('aaaaaa');
console.log(result);
console.log(result2);