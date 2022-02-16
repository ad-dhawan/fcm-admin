const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
    type: {
        type: String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('todo', TodoSchema);