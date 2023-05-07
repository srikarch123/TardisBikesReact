const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const vendor = require('../Models/vendor');
const dbURI='mongodb+srv://srikarwarrior:Hello@bro1234@cluster0.clegmwi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
let vendor_data={
    login:false,
    name:'',
    email:'',
    mobile:0,
    company:'',
    password:'',
    address:''
};
router.post('/',async(req,res)=>{
    let entered_password=req.body.password;
    vendor.findOne({email:req.body.email},(err,response)=>{
        if(err) throw err;
        else{
            vendor_data.login=false;
            if(response.password===entered_password){
                vendor_data.login=true;
                vendor_data.name=response.name;
                vendor_data.email=response.email;
                vendor_data.mobile=response.mobile;
                vendor_data.company=response.company;
                vendor_data.password=response.password;
                vendor_data.address=response.address;
            }
            console.log(vendor_data);
            res.send(vendor_data);
        }
    })
});

module.exports = router;