const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'alex@example.com',
    password: 'userOnePassword',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'qwerty').toString()
    }]
}, {
    _id: userTwoId,
    email: 'andrew@example.com',
    password: 'userTwoPassword',
}];

const todos = [{
    _id: new ObjectID(),
    text: 'first test dodo'
},{
    _id: new ObjectID(),    
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
}

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
}

module.exports = { todos, populateTodos, users, populateUsers};