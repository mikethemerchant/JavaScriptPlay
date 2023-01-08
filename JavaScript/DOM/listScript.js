
function formLoad () {
    document.getElementById("btnAdd").addEventListener("click", addToList);
    document.getElementById("btnRemove").addEventListener("click", removeFromList);
}

function addToList () {
    const box = document.getElementById("addbox");
    const listElement = document.createElement("li");
    const list = document.getElementById("root");
    let node = document.createTextNode(box.value);

    listElement.appendChild(node);
    list.appendChild(listElement);
    box.value = "";
}

function removeFromList () {
    const list = document.getElementById("root");
    const firstChild = list.firstChild;
    list.removeChild(firstChild);
}
