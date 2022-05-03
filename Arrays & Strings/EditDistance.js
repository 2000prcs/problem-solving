// Edit distance is a way of quantifying how dissimilar two strings are to one another by counting the minimum number of operations (add, replace, and delete) required to transform one string into the other.

// Question

// Given two strings S and T, write a function:

// function solution(S, T);


// 1. to determine if S can be converted to T with exactly one or zero edit. If yes, return true. If no, return false.

// Examples:

// solution("hello", "hello") returns true
// solution("hello", "bello") returns true
// solution("world", "word") returns true
// solution("world", "wor") returns false
 
// 2. What is your runtime complexity of your solution? What is your storage complexity of your solution?
 
// 3. (Optional if they have time) Can you make your solution recursive? or iterative? 

function solution(S, T) {
    // if the S and T length are more than 2, return false 
    // determine which one is a longer string, and use that string to iterate
    // iterate a longer one, and use two pointers with while loop
    // set `difference` variable as 0 initially
    // if they are the same length, check difference and difference ++
    // return difference <= 1
    // if they have different lengths, two conditions:
        // when two letters are the same, just longer ++ shorter ++
        // when they are different, longer ++ difference ++
            // if they are same, longer ++ shorter ++
            // if they are different, longer ++ difference ++ (until difference is === 2)
            
    if (Math.abs(S.length - T.length) >= 2) {
        return false;
    }

    if (S === T) {
        return true;
    }

    let longer = S;
    let shorter = T;

    const areLengthsSame = S.length === T.length

    if (!areLengthsSame) {
        if (S.length > T.length) {
            longer = S;
            shorter = T;
        } else if (T.length > S.length) {
            longer = T;
            shorter = S;
        }
    }
    
    let longerPointer = 0;
    let shorterPointer = 0;
    let difference = 0;
    
    while (longerPointer <= longer.length - 1) {
        if (difference === 2) {
            break
        }
        if(longer[longerPointer] === shorter[shorterPointer]) {
            longerPointer += 1;
            shorterPointer += 1;
        } else if (longer[longerPointer] !== shorter[shorterPointer]) {
            if (areLengthsSame) {
                longerPointer += 1;
                shorterPointer += 1;                    
                difference += 1;
            } else {
                longerPointer += 1;
                difference += 1;
            }
        }
    }

    return difference <= 1;
}

// console.log(solution("hello", "hello")) // true
// console.log(solution("hello", "bello")) // true
// console.log(solution("world", "word")) // true
// console.log(solution("world", "wor")) // false
// console.log(solution("hello", "hellooo")) // false
// console.log(solution("aaaab", "b")) // false
// console.log(solution("sample", "sample")) // true
// console.log(solution("same", "same")) // true
// console.log(solution("abb", "ab"))  // true
// console.log(solution("bba", "ba")) // true
// console.log(solution("axa", "aa")) // true
// console.log(solution("abx", "ab")) // true
// console.log(solution("xba", "ba")) // true
// console.log(solution("bbb", "ab")) // false
// console.log(solution("bbb", "ba")) // false
// console.log(solution("aaa", "aab")) // true
// console.log(solution("aaa", "baa")) // true
// console.log(solution("aaa", "aba")) // true
// console.log(solution("aab", "aaa")) // true
// console.log(solution("baa", "aaa")) // true
// console.log(solution("aba", "aaa")) // true
// console.log(solution("aaa", "bbb")) // false
// console.log(solution("bbb", "aaa")) // false
// console.log(solution("aab", "bba")) // false
// console.log(solution("aba", "aab")) // false
// console.log(solution("ab", "abb")) // true
// console.log(solution("ba", "bba")) // true
// console.log(solution("aa", "axa")) // true
// console.log(solution("ab", "abx")) // true
// console.log(solution("ba", "xba")) // true
// console.log(solution("ab", "bbb")) // false
// console.log(solution("ba", "bbb")) // false

// Runtime: O(n) -> n will be the longer string's length
// Storage: O(1)


const recursion = (longerStr, shorterStr, lPointer, sPointer, difference, areLengthsSame) => {
    if (lPointer > longerStr.length - 1 || difference === 2) {
        return difference;
    }
    if (longerStr[lPointer] === shorterStr[sPointer]) {
        return recursion(longerStr, shorterStr, lPointer + 1, sPointer + 1, difference, areLengthsSame);
    } else if (longerStr[lPointer] !== shorterStr[sPointer]) {
        if (areLengthsSame) {
            return recursion(longerStr, shorterStr, lPointer + 1, sPointer + 1, difference + 1, areLengthsSame);
        } else {
            return recursion(longerStr, shorterStr, lPointer + 1, sPointer, difference + 1, areLengthsSame);
        }
    }
}

const recursiveSolution = (S, T) => {
    if (Math.abs(S.length - T.length) >= 2) {
        return false;
    }

    if (S === T) {
        return true;
    }

    let longer = S;
    let shorter = T;

    const areLengthsSame = S.length === T.length

    if (!areLengthsSame) {
        if (S.length > T.length) {
            longer = S;
            shorter = T;
        } else if (T.length > S.length) {
            longer = T;
            shorter = S;
        }
    }
    
    let longerPointer = 0;
    let shorterPointer = 0;
    let difference = 0;

    return recursion(longer, shorter, longerPointer, shorterPointer, difference, areLengthsSame) <= 1
}

console.log(recursiveSolution("hello", "hello")) // true
console.log(recursiveSolution("hello", "bello")) // true
console.log(recursiveSolution("world", "word")) // true
console.log(recursiveSolution("world", "wor")) // false
console.log(recursiveSolution("hello", "hellooo")) // false
console.log(recursiveSolution("aaaab", "b")) // false
console.log(recursiveSolution("sample", "sample")) // true
console.log(recursiveSolution("same", "same")) // true
console.log(recursiveSolution("abb", "ab"))  // true
console.log(recursiveSolution("bba", "ba")) // true
console.log(recursiveSolution("axa", "aa")) // true
console.log(recursiveSolution("abx", "ab")) // true
console.log(recursiveSolution("xba", "ba")) // true
console.log(recursiveSolution("bbb", "ab")) // false
console.log(recursiveSolution("bbb", "ba")) // false
console.log(recursiveSolution("aaa", "aab")) // true
console.log(recursiveSolution("aaa", "baa")) // true
console.log(recursiveSolution("aaa", "aba")) // true
console.log(recursiveSolution("aab", "aaa")) // true
console.log(recursiveSolution("baa", "aaa")) // true
console.log(recursiveSolution("aba", "aaa")) // true
console.log(recursiveSolution("aaa", "bbb")) // false
console.log(recursiveSolution("bbb", "aaa")) // false
console.log(recursiveSolution("aab", "bba")) // false
console.log(recursiveSolution("aba", "aab")) // false
console.log(recursiveSolution("ab", "abb")) // true
console.log(recursiveSolution("ba", "bba")) // true
console.log(recursiveSolution("aa", "axa")) // true
console.log(recursiveSolution("ab", "abx")) // true
console.log(recursiveSolution("ba", "xba")) // true
console.log(recursiveSolution("ab", "bbb")) // false
console.log(recursiveSolution("ba", "bbb")) // false