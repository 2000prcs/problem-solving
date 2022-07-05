// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

// Implement the NestedIterator class:

// NestedIterator(List<NestedInteger> nestedList) Initializes the iterator with the nested list nestedList.
// int next() Returns the next integer in the nested list.
// boolean hasNext() Returns true if there are still some integers in the nested list and false otherwise.
// Your code will be tested with the following pseudocode:

// initialize iterator with nestedList
// res = []
// while iterator.hasNext()
//     append iterator.next() to the end of res
// return res
// If res matches the expected flattened list, then your code will be judged as correct.

// Example 1:

// Input: nestedList = [[1,1],2,[1,1]]
// Output: [1,1,2,1,1]
// Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].// Example 2:

// Input: nestedList = [1,[4,[6]]]
// Output: [1,4,6]
// Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
 
// Constraints:

// 1 <= nestedList.length <= 500
// The values of the integers in the nested list is in the range [-106, 106].

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class NestedInteger {
    constructor(nestedList) {
        // this.output = [];
        // this.index = 0;

        function* flatten(list) {
            for (const item of list) {
                if(typeof item === 'number') {
                    yield item;
                } else {
                    yield* flatten(item);
                }
            }
        }

        this.generator = flatten(nestedList);
        this.nextObject = {};
    }

    // flatten(list) {
    //     for (const item of list) {
    //         // if (item.isInteger()) {
    //         if(typeof item === 'number') {
    //             // this.output.push(item.getInteger());
    //             this.output.push(item);
    //         } else {
    //             // this.flatten(item.getList());
    //             this.flatten(item);
    //         }
    //     }
    // }

    hasNext() {
        // return this.index < this.output.length;

        this.nextObject = this.generator.next();
        return !this.nextObject.done;
    }

    next() {
        // if (!this.hasNext()) {
        //     return undefined;
        // }
        // return this.output[this.index++];

        return this.nextObject.value;
    }
}

const nestedInteger = new NestedInteger([[1,1],2,[1,1]]);

const getOutput = (nestedInteger) => {
    const res = [];
    while (nestedInteger.hasNext()) {
        res.push(nestedInteger.next());
    }
    return res;
}

console.log(getOutput(nestedInteger)); // [1,1,2,1,1]