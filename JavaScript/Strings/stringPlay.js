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