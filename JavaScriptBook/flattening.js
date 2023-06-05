// Q: explain reduce method
// A: reduce method takes two arguments, a function and a starting value. 
// The function is called for each element in the array, passing the current value and the element. 
// The return value of the function is the new value. The function is called with the starting value and the first element of the array. 
// If no starting value is passed, the first element is used as the starting value.
// Q: how is this diffrent than map?

// I just want to play with reduce method

const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrings = ['a', 'b', 'c', 'd', 'e'];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}
);

console.log(sum);

const concat = arrayOfStrings.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}
);

console.log(concat);

// Q: explain concat method
// A: The concat() method is used to merge two or more arrays.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));


const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = arrayOfArrays.reduce((acc,value) => {
    return acc.concat(value);
}
);
console.log(flat);

// one liner
const flat2 = arrayOfArrays.reduce((acc,value) => acc.concat(value));