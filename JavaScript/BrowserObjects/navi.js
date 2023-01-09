
function pageLoad() {
    document.getElementById("b1").addEventListener("click",displayInfo);
    document.getElementById("b2").addEventListener("click",promptUser);
    document.getElementById("b3").addEventListener("click",confirmUser);
}

function displayInfo() {
    document.getElementById("p1").innerHTML = "navigator.cookieEnabled:" + navigator.cookieEnabled;
    document.getElementById("p2").innerHTML = "navigator.appName:" + navigator.appName;
    document.getElementById("p3").innerHTML = "navigator.appCodeName:" + navigator.appCodeName;
    document.getElementById("p4").innerHTML = "navigator.product:" + navigator.product;
    document.getElementById("p5").innerHTML = "navigator.appVersion:" + navigator.appVersion;
    document.getElementById("p6").innerHTML = "navigator.userAgent:" + navigator.userAgent;
    document.getElementById("p7").innerHTML = "navigator.platform:" + navigator.platform;
}
function promptUser () {
    let person = prompt("who is this?","");
    let text = "";
    if (person == null || person == "") {
        text = "user cancel";
    } else {
        text = "hi" + person;
    }
    document.getElementById("p9").innerHTML = text;
}

function confirmUser () {
    if (window.confirm("got it?")) {
        document.getElementById("p8").innerHTML = "ok clicked";
    } else {
        document.getElementById("p8").innerHTML = "cancel clicked";
    }
}