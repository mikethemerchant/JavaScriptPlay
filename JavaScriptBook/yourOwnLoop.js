function loop( avalue, test, update, body ) {
    for(let value = avalue; test(value); value = update(value)) {
        body(value);
    }
}

function test(current, condition) {
    if ( current === condition ) {
        return true;
    } else {
        return false;
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

// didn't get this one...