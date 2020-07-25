var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var problema = new Schema({
    
    name: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    
});

problema.plugin(mongooseUniqueValidator);

module.exports = Problema = mongoose.model('problema', problema);