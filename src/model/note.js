const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    note: {
        type: String,
        required: true,
    },
},{timestamps:true});

module.exports = mongoose.model('notes', NoteSchema);