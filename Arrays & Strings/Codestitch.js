
// solution 1: splice the object from the array

// time complexity: O(N^2) since using splice?
// const deleteObject = (collection, strings) => {
//   for(let i = 0; i < collection.length; i++){
//     console.log(i)
//     let person = collection[i];
//     if(strings.indexOf(person.name) !== -1){
//       collection.splice(i, 1);
//       i-= 1;
//     }
//   }
//   return collection;
// }

// solution 2: using hashset
// to avoid linear-time deletions, write array elements we want to keep over the array
const deleteObject = (collection, strings) => {
  let names = new Set(strings);
  let end = 0;
  for(let i = 0; i < collection.length; i++){
    let person = collection[i];
    if(!names.has(person.name)){
      collection[end++] = person;
    }
  }
  collection.length = end; // explicitely setting the array's length
  return collection;
}


// solution 3: using filter
// returning a new array (not in place)
// const deleteObject = (collection, strings) => {
//   let names = new Set(strings);
//   return collection.filter(person => !names.has(person.name));
// }


let address = [
  { name: 'mo',
    address: '729',
  },
  {
    name: 'eric',
    address: '729',
  },
  {
    name: 'mom',
    address: '1111',
    parentIndex: 1
  },
  {
    name: 'racheal',
    address: '777 LA'
  },
  {
    name: 'julie',
    address: '707 sutter',
    parentIndex: 3,
  }
];

let names = ['mo', 'mom'];

// we want to update the parentIndex if the element at parentIndex updates (gets removed or index changes)

console.log(deleteObject(address, names));
