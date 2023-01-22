function startup() {
    document.getElementById("button").addEventListener("click",doSomething);
}

function doSomething() {
    const text = document.getElementById("desc");
    text.innerHTML = "The fox disappears.";
}