class knight {
    constructor (vigor, strength, endurance) {
        this.vigor = vigor;
        this.strength = strength;
        this.endurance = endurance;
    }
    display  () {
        return `${this.vigor}:${this.strength}:${this.endurance}`;
    }
    static printNameClass (toonName) {  // add static to make it so you don't have to instanciate to call it.
        return "I am a knight by the name of " + toonName;
    }
}

let lvl50 = new knight(35,31,20);

var toPass = JSON.stringify(lvl50);

console.log(toPass);

console.log(knight.printNameClass("Tordack"));