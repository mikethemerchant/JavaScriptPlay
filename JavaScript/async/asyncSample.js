function displayer(thing) {
    console.log(thing);
}

// The keyword async before a function makes the function return a promise:
async function myFunction () {
    return "Hello";
}
// same as:
function myPromiseFunction() {
    return Promise.resolve("Hello");
  }

// then after the promise is resolved do this;
myFunction().then(
    function(value) {displayer(value);}
);

// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function myDisplay() {
    let myPromise = new Promise( function(resolve) {
        setTimeout(()=> {resolve("I love you.");},2000);
    });
    console.log(await myPromise);
}

myDisplay();

// chatGPT:
// async returns a new promise so you don't have to create a new promise
// put setTimeout directly as the resolve

async function printHiMike() {
    console.log(await new Promise(resolve => setTimeout(resolve, 4000, "Hi Mike")));
}

printHiMike();

  