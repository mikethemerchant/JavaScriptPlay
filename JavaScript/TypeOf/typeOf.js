
console.log( typeof "John" );
console.log( typeof 3.14  );
console.log( typeof NaN  );
console.log( typeof false  );
console.log( typeof [1,2,3,4]);
console.log( typeof {name:'John', age:34} );
console.log( typeof new Date() );
console.log( typeof function () {}  );
console.log( typeof myCar );
console.log( typeof null  );

const ary = [1,2,3,4];
console.log(ary.constructor === Array);

let dt = new Date(10,10,22);
console.log(dt.constructor === Date);

console.log(typeof undefined  )         // undefined
console.log(typeof null    )            // object

console.log(null === undefined    )     // false
console.log(null == undefined  )


const cars = ["Saab", "Volvo", "BMW"];

console.log((cars instanceof Array));
console.log((cars instanceof Object));
console.log((cars instanceof String));
console.log((cars instanceof Number));


