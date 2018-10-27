var mongoose = require("mongoose")
var Schema  = mongoose.Schema;
var bcrypt = require('bcrypt')

var userSchema = new Schema({
    username: String,
    password: String
})

module.exports = mongoose.model("User", userSchema)