class Car {
    constructor(brand) {
        this.brand = brand;
    }
    showBrand() { 
        return this.brand;
    }
}

class Model extends Car {
    constructor(brand,type) {
        super(brand);
        this.type = type;
    }
    showModel() {
        return this.showBrand() + " " + this.type;
    }
}

let truck = new Car("Ford");
let car = new Model("Chevy","Camaro");

console.log(`I have a ${truck.brand} truck.`);
console.log(`I have a ${car.showModel()}.`);