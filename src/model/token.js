const mongoose = require('mongoose');

const TokenSchema = mongoose.Schema({
    token: [String]
});

module.exports = mongoose.model('tokens', TokenSchema);