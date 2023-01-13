// write a function that takes an array as an argument and products a new array that has the same elements in the inverse order the reverse function cannot be used
// write a function that takes and array as an argment and reverses the order of the elements

// another option
function reverseArray(arr) {
    const reversed = arr.reduceRight( (acc,val)=> {
        acc.push(val);
        return acc;
    },[] );
    const combine = arr.concat(reversed);
    const sliced = combine.slice(arr.length,combine.length);

    console.log(sliced);
}

const ary = ['A','B','C','D','E'];
//console.log("before ary:" + ary);
reverseArray(ary);
//console.log("after ary:" + reversed);

