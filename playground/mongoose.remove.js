let { ObjectID } = require('mongodb');

let { mongoose } = require('./../server/db/mongoose');
let { Todo } = require('./../server/models/todo');
let { User } = require('./../server/models/user');

// Todo.remove

    // Todo.remove({}).then((res) => {
    //     console.log(res);
    // }, (err) => console.log(err));

    // Todo.findOneAndRemove 

    Todo.findOneAndRemove({
        _id: '5a33d11ec1cf75807c6dd452'
    }).then((res) => {
        console.log(res);
    }, (err) => console.log(err));

// Todo.findByIdAndRemove

    // Todo.findByIdAndRemove('5a33d0a9c1cf75807c6dd420').then((res) => {
    //         console.log(res);
    // }, (err) => console.log(err));