function fibonacci(n) {
  if(n > 0){
     let arr = [0, 1];
      for (let i = 2; i < n + 1; i++){
        if(arr.length === n) break;
        arr.push(arr[i - 2] + arr[i -1])
      }
     return arr; 
  }
}

let fibs = fibonacci(15);
console.log(fibs);