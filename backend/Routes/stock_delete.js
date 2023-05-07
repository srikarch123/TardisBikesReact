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
    console.log(req.body._id)
    stock.deleteOne({_id:req.body._id},(err,response)=>{
        if(err) throw err;
        else{
            console.log('Deleted Succesfully');
        }
    })
});

router.get('/',(req,res)=>{
    res.send('stock-delete');
})

module.exports = router;