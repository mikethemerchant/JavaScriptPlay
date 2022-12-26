console.log("what are we going to write today? \n  been slacking lately. \n lets write some javascript.");

// hositing means in Javascript you can call a function before it is defined. YUP.. 
console.log(normalFunc(1,2));


function normalFunc(two, numbers) {
    return two + numbers;
}



// function as a variable 
const x = function (a,b) { return a * b};

console.log(x(2,2));
let z = x(3,3);
console.log(z);
// not sure why we need so many ways todo the same thing =)

const constructFunc = new Function("parameter1","parameter2","return parameter1 / parameter2");
let thisLooksDangerous = constructFunc(10,5);
console.log(thisLooksDangerous);

// self invoking? put the thing inside () and () at the end and it will run without being called.
(function () {
    console.log("odd")
})();

function showArgs(_a,_b) {
    return arguments.length;
}

function cl(txt) {
    console.log(txt);
}

console.log(showArgs(1,2));
console.log(typeof showArgs);
console.log(showArgs.toString());

// now for the arrow functions also known as lamda functions; 

//ES5
var f = function(x,y) {
    return x * y;
}

//ES6
const lamda = (x,y) => x * y;

console.log(f(4,4));
console.log(lamda(5,5));

// arrow fuctions don't have this
// arrows functions are not hosited.
// use const vs var vecause a funcdtion because the func expression is always contant
// you can only omit the return in one line statements so might be could to keep it