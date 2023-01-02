// they want us to use recursion, not sure how todo it that way..
// create a recursive function that accepts one positive whole number and returns true if number is even and false if number is odd

function isEven (n) {
    if(n == 0) {
        console.log("zero:" + n);
        return true;
    } else if (n == 1) {
        console.log("1:" + n);
        return false;
    } else {
        console.log("else:" + n);
        isEven(n - 2);
    }
}

if(isEven(3) == true) {
    console.log("even");
} else {
    console.log("odd");
}
