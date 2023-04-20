async function boom() {
    let thePromise = new Promise(function(resolve) {
            setTimeout(function() { resolve("BOOM");}, 3000);
            
    });
    console.log(await thePromise);
}

boom();