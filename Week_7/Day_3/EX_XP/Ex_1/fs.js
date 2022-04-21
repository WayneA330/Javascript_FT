let fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) =>{
    if (err) {
        console.error(err);
        return
    }
    console.log(data); 
});