function changeAllps() {
    let pTagList = document.getElementsByTagName("p");
    for (let i=0;i<pTagList.length;i++) {
        pTagList[i].innerHTML = "order:" + i; 
    }
}

function changeTest() {
    document.getElementById("test").innerHTML = "hello world";
}

function changeByClass() {
    let classList = document.getElementsByClassName("bye");
    for (let i=0;i<classList.length;i++) {
        classList[i].innerHTML = "changed with class";
    }
}
