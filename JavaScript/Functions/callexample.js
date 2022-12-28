const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }

  let blah = person.fullName.call(person2);
  
  console.log(blah); 

// chat gpt
  let obj1 = {
    greeting: 'Hello'
  };
  
  let obj2 = {
    greeting: 'Hi'
  };
  
  function sayHello() {
    console.log(this.greeting);
  }
  
  sayHello.call(obj1); // Output: 'Hello'
  sayHello.call(obj2); // Output: 'Hi'
  

  let werd = "werd";

  console.log(werd);
