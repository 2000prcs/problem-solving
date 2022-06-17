// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
 
// Constraints:

// -231 <= val <= 231 - 1
// At most 2 * 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.

class RandomizedSet {
  constructor() {
    this.nums = [];
    this.set = new Map();
  }

  insert(val) {
    if(this.set.has(val)) {
      return false;
    }
    this.nums.push(val);
    this.set.set(val, this.nums.length - 1);
    return true;
  };
  
  remove(val) {
    if(!this.set.has(val)) {
       return false;
    }
    const indexToDelete = this.set.get(val);
    const lastElement = this.nums[this.nums.length - 1];
    // Swap the element to delete and the last element
    [this.nums[indexToDelete], this.nums[this.nums.length - 1]] = [lastElement, val];
    // Update the last element's index to be 'val's' index
    this.set.set(lastElement, indexToDelete);
    this.set.delete(val);
    this.nums.pop();
    return true;
  };
  
  getRandom() {
    const randomNumber = Math.floor(Math.random() * this.set.size)
    return this.nums[randomNumber];
  };
};




//Example:

// Init an empty set.
const randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomSet.insert(1));

// Returns false as 2 does not exist in the set.
console.log(randomSet.remove(2));

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomSet.insert(2));

// getRandom should return either 1 or 2 randomly.
console.log(randomSet.getRandom());

// Removes 1 from the set, returns true. Set now contains [2].
console.log(randomSet.remove(1));

// 2 was already in the set, so return false.
console.log(randomSet.insert(2));

// Since 2 is the only number in the set, getRandom always return 2.
console.log(randomSet.getRandom());


