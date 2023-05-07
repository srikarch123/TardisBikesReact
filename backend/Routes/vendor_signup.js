const express = require('express');
const router = express.Router();
const vendor = require('../Models/vendor');

router.post('/', async(req,res)=>{
    let vendor_ins = {
        name: req.body.name,
        email: req.body.email,
        mobile:req.body.mobile,
        company:req.body.company,
        password:req.body.password,
        address:req.body.address
    }
    console.log(vendor_ins)
    vendor(vendor_ins).save((err,result)=>{
        if (err) console.log(err)
        res.status(201).json(result);
    }) 
});


module.exports = router;