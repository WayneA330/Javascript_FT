const user = {
    firstname: 'John',
    lastname: 'Doe'
}

let http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let json_user = JSON.stringify(user);
    res.write(json_user);
    res.end();
})
server.listen(8080);