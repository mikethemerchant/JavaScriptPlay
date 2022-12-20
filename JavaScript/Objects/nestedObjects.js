const player = {
    name:"Magus",
    family:"Highborne",
    level:20,
    inventory: [
        {name:"robe"},
        {name:"staff"},
        {name:"rations"}
    ]
};


let str = "";
for(let item in player){
    if(typeof(player[item]) == "object") {
        for(let inventoryItem in player[item]) {
            console.log(">> " + player[item][inventoryItem].name);
        }
    } else {
        console.log(player[item]);
    }
}
    