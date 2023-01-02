function doTest (test,a,b) {
    return test(a,b);
}

console.log( doTest( (a,b) => a < b ? a : b,2,3) );