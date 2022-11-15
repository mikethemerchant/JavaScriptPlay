// create a set from an array.
const words = new Set(['what','it','is']);
let allWords = "";
words.forEach((value) => allWords += " " + value );
console.log(allWords);

// create a set by adding
const trucks = new Set();
trucks.add('Ford');
trucks.add("Chevy");
trucks.add('Mazda');
trucks.add('Toyota')

trucks.delete('Toyota');

if(trucks.has('Mazda'))
{
    trucks.delete('Mazda');
    trucks.add('Mac');
}
else
    trucks.add('Kenworth');

let truckList = "";
trucks.forEach((value) => truckList += " " + value );
console.log(truckList);

console.log(trucks.size);

console.log(trucks.values());

for (var x of trucks.values())  // .values must be the default function because this works without .values()
{
    console.log(x);
}