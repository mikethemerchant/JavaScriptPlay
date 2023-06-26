// predicate function takes an element and returns true or false usually used inside .some or .every

// takes an array and predicate 
function myEveryFunc( array, predicate) {
    for(let i=0;i<=array.length-1;i++) {
        if(!predicate(array[i]))
            return false;
    }
    return true;
}

console.log(myEveryFunc([1, 3, 5], n => n < 10));
// → true
console.log(myEveryFunc([2, 4, 16], n => n < 10));
// → false
console.log(myEveryFunc([], n => n < 10));
// → true

function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }

  console.log(every2([1, 3, 5], n => n < 10));
  // → true
  console.log(every2([2, 4, 16], n => n < 10));
  // → false
  console.log(every2([], n => n < 10));
  // → true

  // this makes my brain hurt a little... NOT some = every?
  numbers = [2,2,2,2];

  function no(thing) {
    return thing === 2;
  }
  console.log('some: ' + !numbers.some(e => !no(e)));