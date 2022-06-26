// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

const FizzBuzz = (n) => {
    const output = [];

    const fizzBuzzMap = {
        3: "Fizz",
        5: "Buzz"
    };

    const divisors = [3, 5]; // can be Object.keys(fizzBuzzMap)

    for (let i = 1; i <= n; i++) {
        let string = '';

        for (let j = 0; j < divisors.length; j++) {
            if (i % divisors[j] === 0) {
                string += fizzBuzzMap[divisors[j]];
            }
        }
        
        if (string.length === 0) {
            string += i;
        }
        
        output.push(string);
    }

    return output;
}