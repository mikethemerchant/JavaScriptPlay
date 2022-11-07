let i = 123456789012345;

let b = 1234567890123456789012345;

let x = BigInt(343434343434);

let z = 2343434343434n;

let y;

try {
    console.log(Number.isInteger(i));
    console.log(Number.isInteger("blah"));
    console.log(Number.isInteger(x));
    console.log(Number.isSafeInteger(122222222222222222222222222222222222222222222));


     x = i * b;

     y = x / 2;

     y = z / 2; //doesn't work

}
catch (err) {
    console.log(err.toString())
}

console.log(typeof(i));
console.log(typeof(b));
console.log(typeof(x));
console.log(typeof(y));

// get max safe from a constant
console.log(Number.MAX_SAFE_INTEGER);

