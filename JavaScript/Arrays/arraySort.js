const cars = ["Subaru", "Mazda", "Chevy", "Ford"];

const trucks = ["Mac", "Kenworth", "Peterbilt"];

const nums = [1,8,4,5,7];

console.log("BASE:" + cars.toString());

cars.sort();

console.log("SORT:" + cars.toString());

cars.reverse();

console.log("REVERSE:" + cars.toString());

console.log(nums);
console.log(nums.sort());

// min max
console.log(Math.min.apply(null,nums));

console.log(Math.max.apply(null,nums));


// sort objects and give it a function
const moreCars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  const showCars = function (){
    for(let car of moreCars)
        console.log(car.type + " " + car.year);
  }

  showCars();
  moreCars.sort((a,b) => a.year - b.year);
  //showCars();
  moreCars.forEach((value) => console.log(value.type + "|" + value.year));

