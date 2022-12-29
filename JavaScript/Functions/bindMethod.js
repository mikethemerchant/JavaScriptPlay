// the bind method creates a new function with the same method but new value for this.

const person = {
    firstName: "mike",
    lastName: "bender",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

const bindName = person.fullName.bind(person);

console.log(bindName());

const addNumbers = function(x, y) {
    return x + y;
  }
  
  const addFive = addNumbers.bind(null, 5);
  
  console.log(addFive(15)); 

  // with bind you can "borrow" method for a different object

  const pet = {
    firstName: "jace",
    lastName: "puppy"
  }

  const printDog = person.fullName.bind(pet);

  console.log(printDog());




  