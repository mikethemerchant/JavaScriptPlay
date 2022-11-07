let x = 1e4;

console.log(x);

// numbers and strings will convert and do math except for +;
console.log(x + "5000");

console.log(x / "1000");

// but luckly this doesn't work

console.log(x * "werd");  // not a number returned

console.log(typeof(NaN)); // but NaN is of type number...
console.log(typeof(Infinity)); // so is infinity..

console.log(x / 0); // and we can divide by zero just fine.

console.log(0xFF); // we can do hex

// we can do x the number as an object
let y = new Number(10000);

console.log(typeof(x));
console.log(typeof(y));

/*
==	equal to
===	equal value and equal type
*/

console.log(5==5);
console.log(10000==x);
// true


console.log(5===5);
console.log(10000===x);
// true

console.log(x===y);
let z = new Number(10000);
console.log(y===z);   // objects never equal i guess; value same type same
// false
