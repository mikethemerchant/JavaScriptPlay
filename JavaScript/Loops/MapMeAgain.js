// it is hot out here
// I can't see anything

//create list of objects in an array of fruits
var fruits = [
    {name: "apple", color: "red", shape: "round"},
    {name: "banana", color: "yellow", shape: "long"},
    {name: "grape", color: "purple", shape: "round"},
    {name: "pear", color: "green", shape: "round"}
];

//loop through the array of fruits with map and print out the name of each fruit
fruits.map((fruit) => {console.log(fruit.name)});
