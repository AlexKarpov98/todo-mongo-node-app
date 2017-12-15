const express = require('express');
const bodyParser = require('body-parser');
let { ObjectID } = require('mongodb');
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
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => res.status(400).send(e));
})

app.get('/todos/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        res.status(400).send({error: 'Invalid ID'});
    } else {
        Todo.findById(req.params.id).then((todo) => {
            if(!todo) {
                return res.status(400).send({error: 'ID not found..'});
            } else {
                res.status(200).send({todo});             
            }
        }, (e) => res.status(400).send(e));
    }
})

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};