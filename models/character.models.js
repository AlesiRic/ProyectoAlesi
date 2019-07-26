const mongoose = require('mongoose');

var charSchema = new mongoose.Schema({
    name:String,
    source:String
});

const messModel = mongoose.model('Mess', charSchema, 'character');

module.exports = messModel;