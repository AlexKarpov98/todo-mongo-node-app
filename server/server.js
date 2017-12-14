const express = require('express');
const bodyParser = require('body-parser');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  new Todo({
    text: req.body.text
  }).save().then((doc) => 
        res.send(doc), 
        (e) => res.status(400).send(e));
});

app.get('/todos', (req, res) => {
    res.send({
        name: 'Alex',
        likes: [
            'Worship',
            'Programming',
            'Sports',
            'Testing'
        ]
    })
})

app.listen(3000, () => {
  console.log('Started on port 3000');
});
