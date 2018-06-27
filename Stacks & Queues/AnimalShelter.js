// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) 
// of all animals at the shelter, or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type). 
// They cannot select which specific animal they would like. 
// Create the data structures to maintain this system and implement operations 
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat. 
// You may use the built-in Linked list data structure.
const { Node, LinkedList } = require('../Data Structures/LinkedList');


class AnimalShelter {
  constructor(){
    this.storage = [];
    this.start = 0;
    this.end = 0;
    this.dogList = new LinkedList();
    this.catList = new LinkedList();
  }

  enqueue(animal, type){
    if(type === 'dog'){
      this.dogList.addToTail(animal);
    } else if (type === 'cat'){
      this.catList.addToTail(animal);
    }
    this.storage[this.end++] = [animal, type];
  }

  dequeueAny(){
    let value = this.storage[this.start][0];
    let type = this.storage[this.start][1];
    if(type === 'dog'){
      this.dogList.removeHead();
    } else if (type === 'cat'){
      this.catList.removeHead();
    }
    delete this.storage[this.start];
    this.start++;
    return value;
  }

  dequeueDog(){
    return this.dogList.removeHead();
  }

  dequeueCat(){
    return this.catList.removeHead();
  }

  length(){
    return this.end - this.start;
  }
}


let shelter = new AnimalShelter();
shelter.enqueue('dog1', 'dog');
shelter.enqueue('cat1', 'cat');
shelter.enqueue('dog2', 'dog');
shelter.enqueue('dog3', 'dog');
shelter.enqueue('cat2', 'cat');
let getAny = shelter.dequeueAny();
shelter.enqueue('cat3', 'cat');
let getAny2 = shelter.dequeueAny();
let getDog = shelter.dequeueDog();
let getCat = shelter.dequeueCat();
console.log(shelter);
console.log(getAny);
console.log(getAny2);
console.log(getDog);
console.log(getCat);