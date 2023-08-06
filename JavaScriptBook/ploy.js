class Rabbit {
    constructor(type) {
        this.type = type;
    }
    
    teeth = 'small';

    speak(line) {
        console.log(`the ${this.type} rabbit says ${line} and I have ${this.teeth} teeth`);
    }

    toString() {
        return `a kick ass ${this.type} rabbit`;
    }
}

blackRabbit = new Rabbit('black');
// console.log(String(blackRabbit));


class Box {
    constructor(size) {
        this.size = size;
    }

    desc(text) {
        return `Box ${text} about ${this.size} size; `
    }

    toString() {
        return `its a box bro`;
    }
}

let smallBox = new Box('2ft');
// console.log(smallBox.desc('Cardboard'));
// console.log(smallBox.toString());


class Car {
    constructor(model) {
        this.model
    }

    toString() {
        return `I love my ${this.model} car.`
    }
}

let camaro = new Car('Camaro');

// console.log(String(camaro));

const ary = [];

ary.push(blackRabbit);
ary.push(smallBox);
ary.push(camaro);

// polymorphic son.
ary.forEach((e)=> console.log(String(e)));




