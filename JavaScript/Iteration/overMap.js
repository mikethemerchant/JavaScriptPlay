
// normal array
const letters = ['a','b','c','d'];
for(let x of letters)
    console.log(x);

// set 
const moreLetters = new Set(['e','f','g','h']);
for(let x of moreLetters)
    console.log(x);

// map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  for (const x of fruits) {
        console.log(x[0]);
  }