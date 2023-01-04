function displayer(thing) {
    console.log(thing);
}

// The keyword async before a function makes the function return a promise:
async function myFunction () {
    return "Hello";
}

// same as
function myPromiseFunction () {
    return Promise.resolve("PR Hello");
}

myFunction().then(
    function(value) {displayer(value);},
    function(error) {displayer(error);}
);

myPromiseFunction().then(
    function(value) {displayer(value);},
    function(error) {displayer(error);}
);

// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function myDisplay() {
    let myPromise = new Promise( function(resolve,reject){
        resolve("I love you.");
    });
    await myPromise;
}

myDisplay();