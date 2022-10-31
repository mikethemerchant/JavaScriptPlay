let charNames = "Mike, Tom, Jon, Tom";


var newList = charNames.replace(/jon/i,"Roy")  // case insensitive
                .replaceAll(/Tom/g,"Bob")// case sensitive
                .substring(5)
                .toUpperCase()
                .concat(", Chris");

var ding = newList.padStart(30,"Z");

console.log(ding);

let numb = 8;
let werd = numb.toString().padEnd(4,'0');

console.log(werd);

var findBob = newList.charAt("B"); 

console.log(findBob);

// string really treated as a char array, can reference with brackets
let text = 'HELLO';
console.log(text[1]);

// split string into an array
let array = charNames.split(',');

let i = 0;
while(i < array.length)
{
    console.log(array[i].trimStart().trimEnd());
    i++;
}
