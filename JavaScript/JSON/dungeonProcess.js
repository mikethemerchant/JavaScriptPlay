// Load players
const fs = require('fs');
const buffer = fs.readFileSync('players.json');
const thing = JSON.parse(buffer);

// List players
console.log(thing);

for (const x in thing) {
    console.log(thing[x]);
}

// do some actions
thing.name = "Mike";
thing.level = 3;

// Save players
fs.writeFileSync('players.json',JSON.stringify(thing));
console.log(JSON.stringify(thing));