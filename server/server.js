require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');
let { authenticate } = require('./middleware/auth');

let app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    var body = _.pick(req.body, ['text', 'completed']);
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    new Todo(body).save()
        .then((doc) => res.send(doc))
        .catch((e)  => res.status(400).send(e));
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => res.status(400).send(e));
});

app.get('/todos/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        res.status(404).send({error: 'Invalid ID'});
    } else {
        Todo.findById(req.params.id).then((todo) => {
            if(!todo) {
                return res.status(404).send({error: 'ID not found..'});
            } else {
                res.status(200).send({todo});             
            }
        }, (e) => res.status(400).send(e));
    }
});

app.delete('/todos/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        res.status(404).send({error: 'Invalid ID'});
    } else {
        Todo.findByIdAndRemove(req.params.id).then((todo) => {
            if(!todo) {
                return res.status(404).send({error: 'ID not found..'});
            } else {
                res.status(200).send({todo});             
            }
        }, (e) => res.status(404).send(e));
    }
});

app.patch('/todos/:id', (req, res) => {
    var body = _.pick(req.body, ['text', 'completed']);
    if(!ObjectID.isValid(req.params.id)) {
        res.status(404).send({error: 'Invalid ID'});
    } else {
        if(_.isBoolean(body.completed) && body.completed){
            body.completedAt = new Date().getTime();
        } else {
            body.completed = false;
            body.completedAt = null;
        }
        Todo.findByIdAndUpdate(req.params.id, {$set: body}, {new: true})
            .then((todo) => {
                if(!todo) return res.status(400).send();
                res.send({todo});
            }).catch((e) => res.status(400).send())
    }
});

// POST /users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    let user = new User(body);

    user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => res.status(400).send(e));
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};