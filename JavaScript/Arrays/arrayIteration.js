const cars = ["Subaru", "Mazda", "Chevy", "Ford"];

const numbers = [5,1,8,4,5,7];

// filter creates a new function with elements that meet criteria passed in with function
const numbersGreaterThan4 = numbers.filter((value) => value > 4);
console.log(numbersGreaterThan4);

// reduce runs a function on each element and puts in total value
// total is the intial value and previously returned value and can accept an intial start IE:10
let sum = numbers.reduce( (total,value) => total + value, 10);
console.log(sum);


// every() checks if all array elements are passes a test
let over2 = numbers.every( (value) => value > 2);
console.log(over2);


// some() checks if some array elements are passes a test
let someOver2 = numbers.some( (value) => value > 2);
console.log(someOver2);


// index of returns the position of the element [zero based]
let pos = numbers.indexOf(5);
console.log(pos);


// or the last pos
let lastPos = numbers.lastIndexOf(5);
console.log(lastPos);

// find first element that matches criteria  [doesn't work in IE new in ES6 2015]
let find7 = numbers.find( (value) => value == 7 );
console.log(find7);

// find INDEX of the first element that matches criteria  [doesn't work in IE new in ES6 2015]
let find8 = numbers.findIndex( (value) => value == 8 );
console.log(find8);

// make an array from a anyh object with a lenth property [string] or iterable object.  only 2015 ES6
const myArr = Array.from("ABCDEFG");

for( let x of myArr)
    console.log(x);

// get a list of keys? i would call this indexes
const keys = cars.keys();

for (let x of keys) {
    console.log(x);
}

// get a list of key value pairs.
const entries = cars.entries();

for (let x of entries) {
    console.log(x);
}

// check if array element exists in array;
if(cars.includes( "Ford" ))
    console.log("it is there mike");
else   
    console.log("not there mike");