// groupBy takes an array and splits it into sets, grouped by the 
// result of running each value through the predicate. If the 
// predicate is a string instead of a function, it groups by the 
// property named by predicate on each of the values. 

const groupBy = (collection, predicate) => {
  let results = {};
  for(let i = 0; i < collection.length; i++){
    let key = collection[i][predicate] || predicate(collection[i]);
    if(results.hasOwnProperty(key)){
      results[key].push(collection[i]);
    } else {
      results[key] = [collection[i]];
    }
  }
  return results;
}

let firstLetter = (word) => word.charAt(0);

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], firstLetter));

console.log(groupBy(['apple', 'cat', 'boat', 'card', 'bond'], 'length'));

console.log(groupBy([1.4, 5.6, 3.6, 1.8, 3.4], function(val) { 
  return Math.floor(val); 
}));