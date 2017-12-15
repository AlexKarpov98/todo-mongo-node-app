let { ObjectID } = require('mongodb');

let { mongoose } = require('./../server/db/mongoose');
let { Todo } = require('./../server/models/todo');
let { User } = require('./../server/models/user');

// var id = '5a33b0b994f6fb770891de13';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is not valid!');
// }

// Todo.find({
//     _id: id
// }).then((todos) => console.log('\n Todos : ', todos));

// Todo.findOne({
//     _id: id
// }).then((todo) => console.log('\n Todo : ', todo));

// Todo.findById(id)
//     .then((todo) => {
//         if(!todo) return console.log('\n ID is not found..');
//         console.log('\n Todo By ID : ', todo)
//     }).catch((e) => console.log(err));

var id = '5a328edd0cd94d2b366d1c4a';

User.findById(id)
    .then((user) => {
        if(!user) return console.log('User not found!');
        console.log('\n User', user);
    }).catch((e) => console.log(e));