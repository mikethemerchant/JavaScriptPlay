let promise = new Promise((resolve, reject) => {
    let i = 1+2;
    if (i == 2) {
        resolve("I am resolved");
    }
    else {
        reject("I am rejected");
    }
    
});

promise.then((value)=> {console.log(value)})
        .catch((value)=> {console.log(value)});