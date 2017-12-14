// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const URL = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(URL, (err, db) => {
    if(err) console.log('Unable to connect to MongoDb server')
    else console.log('Connected to MongoDb server');

    db.collection('Users').find({
        name: 'Alex Karpov'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => console.log('unable to fetch todos', err))

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count : ${count}`);
    }, (err) => console.log('unable to fetch todos', err))

    db.close();
})