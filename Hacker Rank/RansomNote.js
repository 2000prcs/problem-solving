//Complete the checkMagazine function in the editor below. 
// It must print Yes if the note can be formed using the magazine, or No.

// checkMagazine has the following parameters:

// magazine: an array of strings, each a word in the magazine
// note: an array of strings, each a word in the ransom note



function checkMagazine(magazine, note) {
  var hashTable = {};
  for(var i = 0; i < magazine.length; i++){
      var word = magazine[i];
      if (!hashTable[word]) {
        hashTable[word] = 1;
      } else {
        hashTable[word] ++;
      }
      //keep a count, as a word surely can only be used once.
  }
  //now loop ransom and see if all are in magazine.
  var counter = 0;
  for(var i = 0; i < note.length; i++) {
    // if hashTable[note[i]] === 0 => it gets evaluated as 'false' so it doesn't check
      if (hashTable[note[i]]){
        counter += 1;
        hashTable[note[i]] --;  //word has now been used.
      }
  }
  console.log(counter >= note.length? "Yes":"No");  
}


let isValid = checkMagazine([ 'give', 'me', 'one', 'grand', 'today', 'night' ], [ 'give', 'one', 'grand', 'today' ]);
console.log(isValid);
let isValid2 = checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']);
console.log(isValid2);