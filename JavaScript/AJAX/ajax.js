let i = 0;
let len;
let cd;

let xmlObject =  new XMLHttpRequest();
xmlObject.onload = function () {
    const xmlDoc = xmlObject.responseXML;
    cd = xmlDoc.getElementsByTagName("CD");
    len = cd.length;
    printTable(i);
}
xmlObject.open("GET", "cd_catalog.xml");
xmlObject.send();

function printTable (i) {
    document.getElementById("show").innerHTML = cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
}

function next() {s
    if(i < len-1) {
        i++;
        printTable(i);
    }
}

function previous() {
    if(i > 0) {
        i--;
        printTable(i);
    }
}