let x = 10000000;
let f = 12.3456789

console.log(x.toString() + "noToSTring");

console.log(x.toExponential());

console.log(f.toFixed(3));

console.log(f.toPrecision(4));

var n1 = "4.55";
console.log(typeof(n1));
var n2 = parseFloat(n1); 
console.log(typeof(n2));


var n3 = "55";
console.log(typeof(n3));
var n4 = parseInt(n3); 
console.log(typeof(n4));

console.log(Number("blah"));
console.log(Number("10"));
console.log(Number(true));

