const cars = ["Subaru", "Mazda", "Chevy", "Ford"];

const trucks = ["Mac", "Kenworth", "Peterbilt"];


console.log(cars.length);
console.log(cars.sort());

for (var car in cars){
    console.log(cars[car]);
}

console.log(typeof(cars));

console.log(cars instanceof Array);

console.log(cars.join());

cars.pop();

console.log(cars.join());

cars.push("JohnDeere");

console.log(cars.join());

console.log(cars.shift());

console.log(cars.join());

console.log(cars.unshift("Kaboda"));

console.log(cars.join());

cars[1] = "Blah";
console.log(cars.join());

delete cars[2]; // leaves undefined in the hole, better to use pop or shift instead
console.log(cars.join());

const together = cars.concat(trucks);
console.log(cars.join());





