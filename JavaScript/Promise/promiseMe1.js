
function doSomething() {
    setTimeout(()=> {1 + 1}, 2000);
    return "works";
}


let myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve("number over 0.5 resolved");
    } else {
        reject("number under 0.5 rejected");
    }
});

myPromise.then((result)=> {
                console.log(result);
                });