function findDuplicates(array) {
  let count = {};
  let dups = [];
  for(let i = 0; i < array.length; i++){
    count['' + array[i]] = (count[array[i]] || 0) + 1;
  }
  for(let i = 0; i < array.length; i++){
    if(count[array[i]] >= 2 && !dups.includes(array[i])){
      dups.push(array[i]);
    }
  }
  return dups;
}

let dups = findDuplicates([1, 4, 2, 4, 4, 3, 2]);
console.log(dups);