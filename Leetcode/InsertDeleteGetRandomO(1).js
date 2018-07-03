// Design a data structure that supports all following operations in average O(1) time.

// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

var RandomizedSet = function() {
    this.nums = [];
    this.set = {};
};

RandomizedSet.prototype.insert = function(val) {
  if(this.set[val] !== undefined) return false;
  this.nums.push(val);
  this.set[val] = this.nums.length - 1;
  return true;
};

RandomizedSet.prototype.remove = function(val) {
  if(this.set[val] === undefined) return false;
  let indexToDelete = this.set[val];
  let valTail = this.nums[this.nums.length - 1];
  this.nums[indexToDelete] = valTail;
  this.set[valTail] = indexToDelete;
  delete this.set[val];
  this.nums.pop();
  return true;
};

RandomizedSet.prototype.getRandom = function() {
  return this.nums[parseInt(Math.random() * this.nums.length)];
};

//Example:

// Init an empty set.
let randomSet = new RandomizedSet();

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


