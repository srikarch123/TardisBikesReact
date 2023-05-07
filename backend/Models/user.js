const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    password:String,
    address:String,
    dob:String,
    gender:String,
});

const user = mongoose.model('user_credentials',userSchema);

module.exports = user;