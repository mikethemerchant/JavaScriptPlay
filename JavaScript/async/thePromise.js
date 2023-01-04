function displayer(thing) {
    console.log(thing);
}

let myPromise = new Promise( function(myResolve,myReject) {
// code that takes time
   setTimeout( function(){ myResolve("where is it?"); }, 3000);

 });

myPromise.then (
    function(value) { displayer(value) },
    function(error) { displayer(error) }
);

