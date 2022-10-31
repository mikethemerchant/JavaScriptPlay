function onLoad()
{
    var theButton = document.getElementById('button');
    theButton.style.height = '40px';
    theButton.style.width= '120px';
    theButton.style.backgroundColor = '#f44336';
    alert("load");
}

function clickIt()
{
    document.getElementById("test").innerHTML = "what it is";
}

function mouseLeave()
{
    var theButton = document.getElementById('button');
    theButton.style.height = '40px';
    theButton.style.width= '120px';
    theButton.style.backgroundColor = '#f44336';
}

function mouseEnter()
{
    var theButton = document.getElementById('button');
    theButton.style.height = '50px';
    theButton.style.width= '150px';
    theButton.style.backgroundColor = '#008CBA';
}