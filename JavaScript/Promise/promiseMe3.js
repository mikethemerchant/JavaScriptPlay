let promise = new Promise((resolve,reject)=> {
    let blah = "blah";
    if (blah == "blah") {
        resolve("blah is blah");
    }
    else {
        reject("werd");
    }
})

// chaining exmaple
promise.then((result)=> "first one:" + result)
        .then((nextResult)=> "secondone:" + nextResult )
        .then((finalResult)=> console.log(finalResult))
        .catch((result)=> console.log(result) );