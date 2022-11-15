
// from an array
const players = new Map([
  ["Tordack",1],
  ["Maylark",2],
  ["Shella",3]
]);
console.log(players);


// from scratch
const npcs = new Map();
npcs.set("orc",4);
npcs.set("skeleton",5);
npcs.set("giant",6);

// change value with set
npcs.set("giant",9);
// get something
console.log(npcs.get("orc"));

console.log(npcs.size);

npcs.delete("skeleton");

if(npcs.has("skeleton"))
    console.log("Watchout for the skeletons.");
else
    console.log("No skellys.");

if(npcs.has("orc"))
    console.log("Watchout for the orcs.");
else
    console.log("No orcs.");

console.log(npcs);

let playerList = "";
players.forEach((value,key) => playerList += key + "=" + value + ",");
console.log(playerList);

for(const n of npcs)
    console.log(n.join());





