class Vec {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

    set X(value) {
        this.x = value;
    }

    set Y(value) {
        this.y = value;
    }

    plus(adder) {
        return new Vec(this.x + adder.x, this.y + adder.y);
    }

    minus(subtract) {
        return new Vec(this.x - subtract.x, this.y - subtract.y);
    }

    get Length() {
        return this.x + this.y
    }
}

let v = new Vec(3,4);

console.log(`x: ${v.X} y: ${v.Y}`);

v.X = 5;
v.Y = 6;

console.log(`x: ${v.X} y: ${v.Y}`);

let toAdd = new Vec(5,4);
let result = v.plus(toAdd);

console.log(`x: ${result.X} y: ${result.Y}`);

let toSubtract = new Vec(2,2);
let sub = result.minus(toSubtract);

console.log(`x: ${sub.X} y: ${sub.Y}`);

console.log(sub.Length);

