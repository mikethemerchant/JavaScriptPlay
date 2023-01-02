function returnResult (testFunc,a,b) {
    return(testFunc(a,b));
}

result = returnResult((a,b) => a < b ? a : b, 6,5)
console.log(result);