// PART 1
let getNumber = require('./main.js');

const b = 5;

// console.log(getNumber.number + b);

// PART 2
// let http = require('http');

// const server = http.createServer(function(req, res) {
//     console.log('I am listening');
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end('My Module is:\n' + (getNumber.number + b) + "<h1>Hi there at the frontend</h1>");
// }).listen(3000);

// PART 3
let getDate = require('./main.js');
let http = require('http');

const server2 = http.createServer(function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end("The date and time is currently: " + getDate.date());
}).listen(3000);
