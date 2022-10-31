let text = "Let the ball be found in The lawn.";

console.log(text.indexOf('the',10));

// zero based; can be givin a start position

let result = text.search(/fou/);
console.log(result);  

// search can use reg expression

const array = text.match(/the/g);

console.log(array);

// match returns an array; got to use "/gi for case insenstive"

const matchall = text.match(/the/gi);

console.log(matchall);

if(text.includes("Let"))
    console.log("text included.");
else
    console.log("text not included.");

