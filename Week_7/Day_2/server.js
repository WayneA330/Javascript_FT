let http = require('http');

let students = {
    student1: 'Oliver',
    student2: 'Dheeksha',
    student3: 'Wayne',
    student4: 'Henry'
}

// Exercise 
const json_menu =
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}

// for JSON
const server = http.createServer((req, res) => {
    if (req.url == '/student_list') {
        console.log('Welcome Page requested');
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        let json_msg = JSON.stringify(students);
        res.end(json_msg);
    }
    else if (req.url == '/menu') {
        console.log('Menu Page requested');
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        let json_msg = JSON.stringify(json_menu);
        res.end(json_msg);
    }
    else {
        console.log('Request received');
        res.setHeader('Content-Type', 'text/html');
        // res.statusCode = 200; or
        res.writeHead(200);
        res.end('<h1>This is the response</h1>')
    }
})
server.listen(3000);

// const server2 = http.createServer((req, res) => {
//     console.log('Request received');
//     res.setHeader('Content-Type', 'text/html');
//     res.writeHead(200);
//     res.end('<h1>This is the response</h1>')
// })
// server2.listen(3000); // cannot have tow address running on the same port


// For HTML
// const http = require('http');
// const server3 = http.createServer((req, res) => {
//     //check the URL of the current request
//     if (req.url == '/welcome') {
//         // appropriate Content-Type header for an HTML response:
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>Welcome new user</p></body></html>');
//         res.end();
//     } else {
//         res.end('<html><body><p>Another page</p></body></html>');
//     }
// });
// server3.listen(3000);
// console.log('Node.js web server at port 5000 is running..');


