let rolls = 16.24532;


console.log( Math.ceil(rolls) );

console.log( Math.round(rolls) );

console.log( Math.floor(rolls) );

console.log( Math.trunc(rolls) );

console.log( Math.pow(2,2));

console.log( Math.sqrt(rolls) );

console.log( Math.abs(-45.6) );

// sin cos min max

for(let i = 0; i < 10; i++)
    console.log( rollDice(12) );


function rollDice (sides)
{
    let min = 1;
    return Math.floor( Math.random() * (sides - min + 1) ) + min;
}

// log..