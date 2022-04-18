let http = require("http");

// const server = http.createServer( () => {
//     console.log('I am listening....');
// });
// server.listen(3000);

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
    console.log('Request received.');
}).listen(3000);