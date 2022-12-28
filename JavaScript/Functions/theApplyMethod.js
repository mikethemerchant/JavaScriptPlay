const stats = {
    showStats: function() {
        return `HPS:${this.hps} AC:${this.ac} ATK:${this.atk}`;
    }
}

const character = {
    name: "Tordack",
    hps:30,
    ac:20,
    atk:10
}


// you can apply functions to many objects.
// it functions the same as the call() but the second argument is an array vs a list of parameters
let result = stats.showStats.apply(character);

console.log(result);