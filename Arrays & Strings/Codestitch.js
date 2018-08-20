
// solution 1: splice the object from the array

// time complexity: O(N^2) since using splice?
// const deleteObject = (collection, strings) => {
//   for(let i = 0; i < collection.length; i++){
//     let person = collection[i];
//     if(strings.indexOf(person.name) !== -1){
//       collection.splice(i, 1);
//       i--;
//     }
//   }
//   return collection;
// }

// solution 2: using hashset
// to avoid linear-time deletions, write array elements we want to keep over the array
// const deleteObject = (collection, strings) => {
//   let names = new Set(strings);
//   let end = 0;
//   for(let i = 0; i < collection.length; i++){
//     let person = collection[i];
//     if(!names.has(person.name)){
//       collection[end++] = person;
//     }
//   }
//   collection.length = end;
//   return collection;
// }


// solution 3: using filter
// returning a new array (not in place)
const deleteObject = (collection, strings) => {
  let names = new Set(strings);
  return collection.filter(person => !names.has(person.name));
}


let collection = [
  { name: 'mo',
    address: '729 Jones',
    age: 729
  },
  {
    name: 'eric',
    address: '729 Jones',
  },
  {
    name: 'mom',
    address: '1111 korea',
  },
  {
    name: 'racheal',
    address: '777 LA'
  },
  {
    name: 'julie',
    address: '707 sutter',
    age: 707,
  }
];

let names = ['mo', 'mom'];

// counter
// extra field to point to the address book

console.log(deleteObject(collection, names));