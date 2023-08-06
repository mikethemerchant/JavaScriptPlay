let ages = {
    "Peter": 10,
    "John": 20,
    "Mary": 15
};

let moreAges = new Map();

moreAges.set("mike", 105);
moreAges.set("roy", 205);
moreAges.set("jane", 155);

console.log(moreAges.get("mike")); // 10

console.log(moreAges.keys());

// foreach over the keys
moreAges.forEach((value, key) => {
    console.log(key + " " + value);
});

