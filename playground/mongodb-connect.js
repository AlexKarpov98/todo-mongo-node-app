// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const URL = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(URL, (err, db) => {
    if(err) console.log('Unable to connect to MongoDb server')
    else console.log('Connected to MongoDb server');


    db.close();
})