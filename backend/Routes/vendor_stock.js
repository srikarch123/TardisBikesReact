const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const stock = require('../Models/stock');
const dbURI='mongodb+srv://srikarwarrior:Hello@bro1234@cluster0.clegmwi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

router.post('/',async(req,res)=>{
    let search_company = req.body.company;
    console.log(search_company);
    stock.find({company:search_company},(err,response)=>{
        if(err) throw err;
        else{
            console.log(response);
            res.send(response);
        }
    })
});
router.get('/',(req,res)=>{
    res.send('vendor-stock');
})

module.exports = router;