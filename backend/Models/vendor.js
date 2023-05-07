const mongoose = require('mongoose');

const vendorSchema = mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    company:String,
    password:String,
    address:String,
});

const vendor = mongoose.model('vendor_credentials',vendorSchema);

module.exports = vendor;