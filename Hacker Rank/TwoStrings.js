// Given two strings, determine if they share a common substring. 
// A substring may be as small as one character.

// For example, the words "a", "and", "art" share the common substring 'a'. 
// The words "be" and "cat" do not share a substring.

function twoStrings(s1, s2) {
 let longer = (Math.max(s1.length, s2.length) === s1.length) ? s1 : s2;
 let shorter = (longer === s1) ? s2 : s1;
 
 let words = {};
 for(let i = 0; i < longer.length; i++){
   words[longer[i]] = (words[longer[i]] || 0) + 1; 
 }
 
 for(let i = 0; i < shorter.length; i++){
   if(words[shorter[i]]){
     return 'YES';
   }
 }
 return 'NO';
}


console.log(twoStrings('hello', 'world'));
console.log(twoStrings('hi', 'world'));