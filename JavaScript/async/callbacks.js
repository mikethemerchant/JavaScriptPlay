function sum(myCallback,...numbers) {
    let result = 0;
    for (let i = 0;i <= numbers.length; i++)
        result += i;
    //return result;
    myCallback(result);
}

function display(thing) {
    console.log(thing);
}

sum(display,1,2,3,4,5); //When you pass a function as an argument, remember not to use parenthesis.

const numbers = [2,3,5,8,-2,-6,-7,1,9];

// keep only positive number with a call back
function remove(list, callback) {
    let newList = [];
    for(let l of list) {
        if(callback(l)) {
            newList.push(l);
        }
    }
    return newList;
}

const newNumber = remove(numbers,(x) => x < 0);

display(newNumber);
