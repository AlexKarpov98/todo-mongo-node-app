// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const URL = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(URL, (err, db) => {
    if(err) console.log('Unable to connect to MongoDb server')
    else console.log('Connected to MongoDb server');

    // //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a32513546902d3ec742874a')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    //findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        name: 'Alex Karpov'
    }, {
        $set: {
            name: 'Alex Karpov'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => console.log(res));

    // db.close();
})