let boardSize = 8;
let row = "";

for (let y = 1; y <= boardSize; y++){
    for (let x = 1; x <= boardSize; x++){
        if(y % 2 == 0){
            if(x % 2 == 0){
                row += " ";
            } 
            else{
                row += "#";
            }
        } 
        else {
            if(x % 2 == 0){
                row += "#";
            } 
            else{
                row += " ";
            }
        }
        //console.log(`(${y},${x})`);
    }
    console.log(row);
    row = "\n";
}