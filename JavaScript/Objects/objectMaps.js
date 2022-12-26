// array of key value pairs.
const fruits = new Map([
    [1,"apples"],
    [2, "bananas"],
    [3, "oranges"]
  ]);



  console.log(fruits.get(2));

fruits.delete(1);

for(fruit of fruits){
    console.log(fruit[0]);
  }

console.log(fruits.has(3));

console.log(typeof fruits);

console.log(fruits instanceof Map);

fruits.set(4,"watermelon");
fruits.set(5,"stringbean");

fruits.forEach(fruit => {
    console.log(fruit)
});

for(const fruit of fruits.entries()) {
    console.log(fruit);
}