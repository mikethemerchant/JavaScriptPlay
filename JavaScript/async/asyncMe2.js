function returnPromise () {
    let aPromise = new Promise((resolve)=> { return resolve("resolved")});
    return aPromise;
}

async function callPromise() {
    let result = await returnPromise();
    console.log(result);
}

callPromise();