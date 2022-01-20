const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    tokens: [{
        type: String,
        required: true,
    }]
});

module.exports = mongoose.model('Token', TokenSchema);