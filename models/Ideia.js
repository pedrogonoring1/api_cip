var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var ideia = new Schema({

    name: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    
});

ideia.plugin(mongooseUniqueValidator);

module.exports = Ideia = mongoose.model('ideia', ideia);