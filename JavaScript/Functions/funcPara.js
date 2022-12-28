// parameters are the names listed in the top of the function
// arguments are the actual value passed in 
// no data types...
// no checking..
// no check for number of parameters
// if you don't populate the parameter it sets to undefined...

// set default parameter
function func(x, y = 5) {
    return x * y;
}

// arrow me
const werd = (x = 2, y = 3) => x * y;

console.log(func(4,5));
console.log(func(5));

console.log(werd());

// rest parameter lets you pass in any number of args and it treats as array, kewl

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) 
        total += number;
    return total;
}

console.log(sum(1,2,3,6,8));

const ding = (...ns) => {
    let total = 0;
    ns.forEach(n => total += n);
    return total;
}

console.log(ding(1,2,3,6,8));

x = findMax(34,2,123,44,22,55,333);
y = findMax(4,9,1,0,12,77);

console.log(`x:${x}y:${y}`);

function findMax() {
    let result = -Infinity;
    for (let i = 0; i<arguments.length; i++)
        if (arguments[i] > result) result = arguments[i];
    return result;
}

// arrow 

a = findMax(34,2,123,44,22,55,333);
b = findMax(4,9,1,0,12,77);

console.log(`a:${a}b:${b}`);

function findMax() {
    let result = -Infinity;
    for (let i = 0; i<arguments.length; i++)
        if (arguments[i] > result) result = arguments[i];
    return result;
}