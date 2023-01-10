// write a function that takes an array as an argument and productes a new array that has the same elements in the inverse order
// write a function that takes and array as an argment and reverses the order of the elements
// the reverse method can not be used.

function reverseAry(ary) {
    let newAry = [];
    for(let i=ary.length;i > 0;i--) {
        newAry.push(i);
    }
    return newAry;
}

const ary1 = [1,2,3,4];
const reversed = reverseAry(ary1);

console.log(reversed);

