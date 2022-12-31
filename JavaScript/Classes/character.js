class Character {
    constructor(name, type, level) {
        this.name = name;
        this.type =  type;
        this.level = level;
    }
        
}

var tordack = new Character("Tordack","warrior",5);

console.log(tordack.name);





























// create a class car and add a method age that returns how old the car is.

class Car {
    constructor(name, yearMade) {
        this.name = name;
        this.yearMade = yearMade;
    }
    getAge() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.yearMade;
    }
    setName(newName) {
        this.name = newName;
    }
}

let mikeCar = new Car("camaro",1979);
mikeCar.setName("Yellow Camaro");
console.log(`Mike's ${mikeCar.name} is ${mikeCar.getAge()} years old.`);


