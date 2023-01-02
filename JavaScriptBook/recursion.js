// they want us to use recursion, not sure how todo it that way..
// create a recursive function that accepts one positive whole number and returns true if number is even and false if number is odd

function isEven (number) {
    let test = number % 2;
    return (test == 0) ? true : false;
}

console.log(isEven(4));