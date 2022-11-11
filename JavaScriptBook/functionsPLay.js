// a few ways to do functions
// 1
function printOut (str){
    console.log(str);
}

printOut("blah");

// 2
let dothis = function (str){
    console.log(str);
}

dothis("werd");

const squareThis = function (x){
    return x * x;
}

console.log(squareThis(3));

// 3   Lamdas..

const mult1 = (x,y) => {return x * y}
const mult2 = (x,y) =>  x * y;
const mult3 = (y) =>  x * y;


console.log(mult1(5,5));
console.log(mult2(2,4));

// 4 variable that ref function with different para () 
// to be honest I don't understand this...

function multiplyBy (num){
    return result => result * num;
}

let timesTwo = multiplyBy(2);
let timesThree = multiplyBy(3);

console.log(timesTwo(5));
console.log(timesThree(5));

