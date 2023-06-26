//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const numbers = [3, 2, 1];
const numbers = [3, 3, 3];

// predicate function takes an element and returns true or false usually used inside .some or .every

// takes an array and predicate 
function myEveryFunc( array, predicate) {
    let allequal = false;
    for(let i=0;i<=array.length-1;i++) {
        console.log(array[i]);
        if( predicate(array[i]) == false )
        {
            break;
        }
        if( i === array.length-1 )
        {
            allequal = true;
        }
    }
    return allequal;
}

console.log( myEveryFunc(numbers,(p) => p === 3) );