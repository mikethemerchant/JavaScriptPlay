let boardSize = 8;
let row = "";

for (let y = 1; y <= boardSize; y++)
{
    for (let x = 1; x <= boardSize; x++)
    {
        if((y + x) % 2 == 0)
            row += " ";
        else 
            row += "#";
    }
    row += "\n";
}
console.log(row);