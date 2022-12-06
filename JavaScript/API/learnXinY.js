function doThis() {
    fetch('https://reqres.in/api/users/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ "name":"mike", "job":"ceo" })
    })
        .then(res => res.json())
        .then(data => console.log(data));
    
}

function thenDoThis() {
    fetch('https://reqres.in/api/unknown')
        .then(res => res.json())
        .then(data => console.log(data));
}

function putThis() {
    fetch('https://reqres.in/api/users/', {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ "name":"mike", "job":"CIO" })
    })
        .then(res => res.json())
        .then(data => console.log(data));
    
}

 