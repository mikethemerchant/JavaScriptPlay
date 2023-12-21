let nullsomething = null;
let text = "missing";
let result = nullsomething ?? text;  // return left side if not null else right side;

console.log(result);

nullsomething = "blah";
result = nullsomething ?? text; 

console.log(result);

// returns undefined instead of throwing error

const car = {type:"Fiat", model:"500", color:"white"};

console.log(car?.werd);
