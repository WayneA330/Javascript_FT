// Question 1
const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const express = require('express');
const app = express();

// const cors = require('cors');
// app.use(cors());

// app.get('/', (req, res) => {
//     res.json(user);
// })

// Question 2
app.get('/:id', (req, res) => {
    res.send(req.params);
    console.log(req.params);
})

app.listen(3000);