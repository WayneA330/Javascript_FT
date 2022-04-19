// console.log('This is the express framework!!!');

const students = {
    student1: 'Oliver',
    student2: 'Dheeksha',
    student3: 'Wayne',
    student4: 'Henry'
}

const express = require('express');
const app = express();

// Import body parser to read form data
const bodyParser = require("body-parser");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

// if path not specified it will be applied for all the request
app.use((req, res, next) => {
    console.log("Hello Middleware 1");
    console.log(Date());
    next(); // if you dont put next it will stop right there. it wont go to the next middleware
});

app.use((req, res, next) => {
    console.log("Hello Middleware 2");
    next();
});

app.use('/about', (req, res, next) => {
    console.log("Hello Middleware About");
    next();
});

// app.get('/', function(req, res) {
//     // res.send('Hello World!');
// })

app.get('/about', (req, res) => {
    res.send('This is me!');
})
// Parameters
app.get('/tutorial/:notion', (req, res) => {
    console.log("req.params: ", req.params)
    res.send(`Tutorial about ${req.params.notion}!`)
})

// app.get('/products/:product', (req, res) => {
//     console.log('Product requested:', req.params.product);
//     // get product from database
//     if (isNaN(req.params.product)) {
//         res.status(400);
//         res.send('Bad request!'); //error handler
//     }
//     else {
//         res.status(200);
//         res.send('Product requested:', req.params.product)
//     }
// })

app.get('/tutorial/notion/:id', (req, res) => {
    //check if the parameter retrieved is a number
    if (isNaN(req.params.id)) {
        res.status(400).send('Bad request!') //error handler
    } else {
        res.send('Success !')
    }
})

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send('Query received');
});

app.get('/students', (req, res) => {
    res.json(students);
})

// body-parser
app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('Welcome' + req.body.fullname);
})

app.listen(5001);
