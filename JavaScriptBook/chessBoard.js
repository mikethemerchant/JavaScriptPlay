let boardSize = 15;
let row = "";

for (let y = 1; y <= boardSize; y++){
    for (let x = 1; x <= boardSize; x++){
        if(y % 2){
            if(x % 2){
                row = row + " ";
            } 
            else{
                row = row + "#";
            }
        } 
        else {
            if(x % 2){
                row = row + "#";
            } 
            else{
                row = row + " ";
            }
        }
        //console.log(`(${y},${x})`);
    }
    console.log(row);
    row = "";
}