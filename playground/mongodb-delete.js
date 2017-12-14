const { MongoClient, ObjectID } = require('mongodb');
const URL = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(URL, (err, db) => {
    if(err) console.log('Unable to connect to MongoDb server')
    else console.log('Connected to MongoDb server');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.close();
})