class knight {
    constructor (vigor, strength, endurance) {
        this.vigor = vigor;
        this.strength = strength;
        this.endurance = endurance;
    }
    display  () {
        return `${this.vigor}:${this.strength}:${this.endurance}`;
    }
}

let lvl50 = new knight(35,31,20);

var toPass = JSON.stringify(lvl50);

console.log(toPass);