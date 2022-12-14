// the thing
const character = {
    name:"Tordack",
    family:"Blackrocks",
    level:5,
    inventory:["sword","backpack","armor","gloves","boots","rope","tinderbox"],
    fullname: function() { return this.name + " of " + this.family; }
};

console.log(character.name);

console.log("Backpack:");
character.inventory.forEach(x => { console.log(x);});

console.log(character.fullname());

// create new object with new keyword vs curly braces

const person = new Object();
person.firstName = "Mike";
person.lastName = "Bender";
person.age = 40;

console.log(`${person.firstName} ${person.lastName} is ${person.age}.`);

// objects are mutable.
// always used by referance.

// A mutable value is one that can be changed without creating an entirely new value

// constant is immutable - sometimes its better to copy a ref to the immutable value vs creating a copy.

const otherRefToPerson = person; // same object different reference.
otherRefToPerson.age = 50;

console.log(`${person.firstName} ${person.lastName} is now ${person.age}.`);

// add a property
person.size = 5;
person.eyeColor = "blue";
// remove a property
delete person.age;

// loop through properties
let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}
console.log(txt);

// different loop
for (let x in person) {
    console.log(person[x]);
}



