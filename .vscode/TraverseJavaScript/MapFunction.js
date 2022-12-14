const cars = [
    {   id:1,
        type:"Volvo", 
        year:2016
    },
    {   id:2,
        type:"Saab", 
        year:2001
    },
    {   id:3,
        type:"BMW", 
        year:2010
    }
  ];

  //foreach with arrow function
  cars.forEach(car => console.log(car.type));

  // map
  const carYears = cars.map(car => car.year);

  console.log(carYears);

    // filter then map return
    const carId = cars.filter(car => car.id == 3).map(car => car.id);
    
    console.log(carId);