var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// new Todo({
//     text: 'Create React App'
// }).save().then((doc) => {
//     console.log('Saved todo : \n', doc)
// }, (err) => console.log(err));

module.exports = {
    Todo
};