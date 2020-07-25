//Joao
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

var Schema = new Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
});

Schema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

module.exports = mongoose.model('User', Schema);