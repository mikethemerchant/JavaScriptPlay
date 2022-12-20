const player = {
    name:"Magus",
    family:"Highborne",
    level:20,
    get getLevel() {
        return this.level;
    },
    set setLevel(value) {
        this.level = value;
    }
};

console.log(player.level);
player.level = 30;
console.log(player.level);
