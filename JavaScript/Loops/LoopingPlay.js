const cars = ["Subaru", "Mazda", "Chevy", "Ford"];
// for i
console.log("--for i--");
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// for in
console.log("--for in--");

for (var car in cars){
    console.log(cars[car]);
}


// array foreach
console.log("--foreach--");

cars.forEach((value,index) => console.log(value + " " + index));

// for of
console.log("--for of--");

for (let x of cars){
    console.log(x);
}

// while
console.log("--while--");

let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}

// do while
console.log("--do while--");

let d = 0;
do {
    console.log(cars[d]);
    d++;
} while (d < cars.length) 

// break
console.log("--break--");

for (var car in cars){
    if(car == 2)
        break; // stops at mazda
    else
        console.log(cars[car]);

}

// continue
console.log("--continue--");

for (var car in cars){
    if(car == 1)
        continue;  // skips mazda
    else
        console.log(cars[car]);

}