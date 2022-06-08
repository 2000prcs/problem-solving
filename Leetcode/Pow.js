// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000

// Explanation: 2-2 = 1/22 = 1/4 = 0.25 

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= xn <= 104

const myPow = (x, n) => {
    // 1. Recursive solution

    // Time complexity: O(log n). Each time we apply the formula (x ^ n) ^ 2 = x ^ {2 * n}, n is reduced by half. Thus we need at most O(log n) computations to get the result.
    // Space complexity: O(log n). For each computation, we need to store the result of x ^ {n / 2}. 
    // We need to do the computation for O(log n) times, so the space complexity is O(log n).
    
    // const fastPow = (x, n) => {
    //     if(n === 0) {
    //         return 1;
    //     }
        
    //     const half = fastPow(x, Math.floor(n / 2));
        
    //     if (n % 2 === 0) {
    //         return half * half;
    //     } else {
    //         return half * half * x;
    //     }
    // }

    // if (n < 0) {
    //     x = 1 / x;
    //     n = -1 * n;
    // }

    // return fastPow(x, n);

    // 2. Iterative solution

    // Time complexity : O(log n). For each bit of n's binary representation, we will at most multiply once. So the total time complexity is O(log n).
    // Space complexity : O(1). We only need two variables for the current product and the final result of x.

    let result = 1;
    
    if (n < 0) {
        x = 1 / x;
        n = -1 * n;
    }

    while (n > 0) {
        if(n % 2 === 1) {
            result *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }

    return result;
}

console.log(myPow(2.00000, 10)); // 1024
console.log(myPow(2.10000, 3)); // 9.261000000000001
console.log(myPow(2.00000, -2)); // 0.25
