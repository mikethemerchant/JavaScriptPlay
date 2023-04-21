let thePromise = new Promise((resolve,reject)=> {
    let text = "werd";
    if(text == "blah") {
        resolve("resolveMe");
    } else {
        reject("rejectMe");
    }
});

thePromise.then((result)=>console.log(result))
        .catch((reject)=> console.log(reject));

function makeMeApromise() {
    return new Promise((resolve,reject)=> {
        let roll = (Math.floor(Math.random()) + 1) * 10
        if(roll > 5) {
            resolve("highRoller");
        } else {
            reject("youMissed");
        }
    });
}

async function syncMe() {
    let text = await makeMeApromise();
    console.log(text);
}

syncMe();