class Animal {
    _name;

    constructor(name){
        this._name = name;
    }

    speak(){
        console.log(`${this._name} makes a noise.`);
    }
}

class Dog extends Animal {

    constructor(name){
        super(name);
    }

    speak(){
        console.log(`${this._name} barks.`);
    }
}

const a = new Animal("Mamal");
a.speak();
const d = new Dog("Jace");
d.speak();
