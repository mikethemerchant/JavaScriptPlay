const fs = require('fs');

fs.readFile('users.json', (err, data) => {
    // Catch this!
    if (err) throw err;
  
    const loadedUsers = JSON.parse(data);
    console.log(loadedUsers);
});