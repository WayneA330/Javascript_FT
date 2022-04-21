const express = require('express');
const app = express();

const db_pg = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'waynecelestin',
        password: 'root',
        database: 'HollyWood',
        port: 5432
    }
});

app.set('db', db_pg);

app.get('/', (req, res) => {
    db_pg
    .select('first_name', 'last_name').from('actors')
    .then(actors =>
            res.send(actors)
    )
});

app.get('/all', (req, res) => {
    db_pg
    .select().from('actors')
    .then(actors =>
            res.send(actors)
    )
});

app.get('/actors/:firstname', (req, res) => {
    db_pg('actors')
    .where({first_name: req.params.firstname}) // to make it general
    .then(actors => {
        res.send(actors)
    })
});

// can be used on the website 
app.get('/actor_id/:id', (req, res) => {
    console.log(req.params.id);
    db_pg('actors')
    .where({actor_id: req.params.id}) // to make it general
    .then(actors => {
        res.send(actors)
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));