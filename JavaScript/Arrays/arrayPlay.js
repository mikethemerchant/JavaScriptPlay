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

console.log("-- try to combine --");

console.log(cars.join());
console.log(trucks.join());
const together = cars.concat(trucks);
console.log(together.join());

console.log("-- splice and slice --");
together.splice(2,2,"AddMe","andMe");
console.log(together);
// then remove them
together.splice(2,2);
console.log(together);

// cut out a section
const words = together.slice(1,2);
console.log(words);
console.log(together);






