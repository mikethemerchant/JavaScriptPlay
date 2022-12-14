const player = {
    name:"Magus",
    family:"Highborne",
    level:20,
    inventory: [
        {itemName:"robe", itemType:"armor"},
        {itemName:"staff", itemType:"weapon"},
        {itemName:"rations", itemType:"misc"}
    ]
};


let str = "";
for(let item in player){
    if(typeof(player[item]) == "object") {
        for(let inventoryItem in player[item]) {
            console.log(">>" + player[item][inventoryItem].itemName);
        }
    } else {
        console.log(player[item]);
    }
}
    