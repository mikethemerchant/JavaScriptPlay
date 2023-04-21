let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Why did you call me again?');
    }, 2000);
});

promise.then((message) => {
    console.log(message);
});

// function that returns a promise
function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Why are we doing this?');
        }, 2000);
    });
}

// call the function that returns a promise with async await    
async function callGetPromise() {
    let message = await getPromise();
    console.log(message);
}

callGetPromise();


