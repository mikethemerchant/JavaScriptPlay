// this is in code spaces

let a = 0;  // function can access variable outside itself?

function timesMe() {
   //let a = 0;
    
    a += 1;
}

timesMe();
timesMe();
timesMe();

console.log(a);
