// f(10, [1,2]) = false. There's no way to add or subtract 1 and 2 to get 10.
// f(2, [1,2,3,4]) = true. 1 + 2 + 3 - 4 = 2.
// f(0, []) = true
// f(1, []) = false
// f(1, [1]) = true
// f(0, [1]) = false

function arithmeticBoggle(magicNumber, numbers) {
  if(numbers.length === 0 && magicNumber === 0) return true;
  if(numbers.length === 0) return false;
  numbers.push(magicNumber);
  numbers.sort((a,b)=> a - b );
  let highest = numbers.length - 1;
  let lowest = 0;
  let value;

  for(let i = 0; i < numbers.length; i++){
    let newValue = numbers[highest--] - numbers[lowest++];
    if(newValue === 0){
      return true;
    }
  }
  return false;
}

console.log(arithmeticBoggle(2,  [4,3,2,1]));
console.log(arithmeticBoggle(10, [1,2]))
console.log(arithmeticBoggle(1, [1]));
console.log(arithmeticBoggle(0, [1]));
console.log(arithmeticBoggle(0, []));
console.log(arithmeticBoggle(1, []));