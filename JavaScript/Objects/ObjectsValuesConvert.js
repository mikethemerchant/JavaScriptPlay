const player = {
    name:"Magus",
    family:"Highborne",
    level:20
};

const ary = Object.values(player);

console.log(player);
console.log(ary);

ary.forEach(x => console.log(x) );

Object.values(player).forEach((value) => console.log(value) );

let blah = JSON.stringify(player);
console.log(blah);

blah = JSON.stringify(ary);
console.log(blah);

// stringify doesn't convert functions so you have to convert to string then stringify
const person = {
    name: "mike",
    age: function () { return 45; }
}
console.log(JSON.stringify(person));

person.age = person.age.toString();
console.log(JSON.stringify(person));
