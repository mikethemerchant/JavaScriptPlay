const fs = require('fs');

const users = {
    'Tordack': {
        age: 25,
        sex: 'Male'
    },
    'Shiva': {
        age: 36,
        sex: 'Female'
    }
}

fs.writeFile('users.json', JSON.stringify(users), (err) => {  
    // Catch this!
    if (err) throw err;

    console.log('Users saved!');
});