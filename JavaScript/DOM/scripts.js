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

function disableButton() {
    document.getElementById("changeTest").setAttribute("disabled","disabled");
}

function enableButton() {
    document.getElementById("changeTest").removeAttribute("disabled");
}

function changeStyle() {
    const test = document.getElementById("test"); 
    test.style.color = "red";
}

function querySelect() {
    const x = document.querySelectorAll("p.bye");
    for (let i = 0; i < x.length; i++) {
        x[i].style.color = "blue";
    }
}

function putBelow() {
    const f = document.forms["inputForm"];
    const y = document.getElementById("below");
    let text = "";
    for (let i = 0; i < f.length ;i++) {
        text += f.elements[i].value + "<br>";
      }
    y.innerHTML = text;
}

function opps() {
    document.write("opps.");
}