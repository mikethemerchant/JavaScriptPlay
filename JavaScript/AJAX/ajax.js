function loadXml () {
    let xmlObject =  new XMLHttpRequest();
    xmlObject.onload = function () {
        const xmlDoc = xmlObject.responseXML;
        const cd = xmlDoc.getElementsByTagName("CD");
        printTable(cd);
    }
    xmlObject.open("GET", "cd_catalog.xml");
    xmlObject.send();
}

function printTable (cd) {
    let table = "<tr><th>Title</th></tr>";
    for (let i = 0;i < cd.length;i++) {
        table += "<tr><td>" + 
        cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("list").innerHTML = table;
}