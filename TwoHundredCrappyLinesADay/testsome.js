/*
--Javascript - Drills - 
variables var let const 
data types? 
if && || else ? : 
compare == === != 
arrays push pop slice splice concat join 

array map set reduce filer indexof 
arrow function anonymons 
closure 

for while in of 
strings concat match replace substrc split 
new object events 
class super sub 
class inheritance 
prototype objects 
promises then catch 
fetch json 
async await 
spread 
desructure 
import export module 
call back 
settimeout 
call apply bind 
dom get element 
dom events onclick on mouseover 
error try catch throw
*/

// variables var let const
var word = "word";

let number = 5;

const dontChange = 6;

number++;

// console.log(word + (number + dontChange));

// if && || else ? : 
// if (word === "werd" || number == 6) {
//     console.log("right word");
// } else {
//     console.log("wrong word");
// }

//console.log(word === "werd" ? "right" : "wrong");

// compare == === != 
const num = 1;
const obj = new String("1");
const str = "1";

//console.log(str !== obj); 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

//arrays push pop concat join slice 
let ary = ['dave','chris'];
ary.push("bob"); // add
ary.push("mike");
ary.push("roy");
ary.push("john");
ary.push("mark");
ary.push("ashley");

//console.log(ary);
ary.pop(); // pop off ashley
//console.log(ary);
ary = ary.slice(-4,ary.length); // keep the last 4
//console.log(ary);
ary.splice(2,0,"addme"); //insert
//console.log(ary);
ary.splice(0,1,"michael"); //update
//console.log(ary);
ary.splice(4,1); // delete
//console.log(ary);

const sentance = ['all','play','together'];

newAry = ary.concat(sentance);
//console.log(newAry.join(' ')); // make a string

// Day 2 1hr
//array  map set .reduce .filer .map indexof 
const people = ['dave','chris','ann','mike','jeff'];

//.map
const bigpeople = people.map((e)=> e.toUpperCase());
//console.log(bigpeople);

// set
const cards = new Set(["1","2","3"]);

cards.add("Ace");
cards.add("King");
cards.add("Queen");
cards.add("Jack");
cards.delete("Jack");

// for (const c of cards.keys()) {
//     console.log()
// }

//cards.clear();
// if(cards.size > 1) {
//     cards.forEach((c)=>console.log(c.toUpperCase()));
// }

//cards.add("mike");
// console.log(cards.has("mike") ? "mike here" : "no mike");

// for (const c of cards) {
//     console.log(c.toLowerCase());
// }

// Day 3 much later
// reduce - run function on each element store result in accumulator
const numbers = [1,2,3,4,5];
const startValue = 5;

function reducer (accumulator, currentElement, index) {
    // console.log(
    //     `accumulator: ${accumulator}, currentElement: ${currentElement}, index: ${index}`,
    //   );
    return accumulator + currentElement;
}

const diplayeachstep = numbers.reduce(reducer);

const addemup = numbers.reduce((a,e)=> a + e,5);
// console.log(addemup);

// filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const filterWords = words.filter((w)=> w.startsWith('e'));
const filterWords = words.filter((w)=> w.length > 6);

// console.log(filterWords);


// indexOf
// console.log(words.indexOf('limit'));

// day 4
// arrow function anonymons

function dothis(thing) {
  return `i did the ${thing}`;
}

// console.log(dothis('fun thing'));

const again = thing => thing + ' werd blah';

// console.log(again('more fun thing'));

const more = (thing) => {
  let word = thing + ' werd'
  word += ' more';
  return word;
};

// console.log(more('does this work?'));

class Person {
    constructor(name) {
      this.name = name;
    }
  

  sayHello() {
    // console.log(`Hello, my name is ${this.name}`);
  };
}
const person = new Person('John');
person.sayHello();

// still don't understand a good use for this concept....
// ARROW functions don't have a this; so they use this from whatever scope they are inside..
function sayname(name) {
  this.name = name;

  // console.log(`Hello, my name is ${this.name}`);

}

sayname("roy"); // Outputs: Hello, my name is John

// anonymous functions
// traditional - arrow function above - 
const add = function(x,y) {
  return x + y;
}

console.log(add(2,3));

// IIFE immediately invoked function
(function() {
  var message = "This is an IIFE";
  console.log(message);
})();

//closure 
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

//this is kindof like this and arrow functions.
// variables that were in-scope at the time the closure was created. 

function makeFunc() {
  const name = "funky";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// set a number of functions eqaul to diffent sent in properties
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}
// returns a function that uses size.. then you can bind those 3 sizes to click events
const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

// for while in of

































