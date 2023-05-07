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
    stock.findOneAndUpdate({_id:req.body._id},
        {"$set":{image:req.body.image,category:req.body.category,title:req.body.title,quantity:req.body.quantity,totalStock:req.body.totalStock,units:req.body.units,price:req.body.price,description:req.body.description,origin:req.body.origin}},
        (err,response)=>{
        if(err) throw err;
        else{
            console.log(response)
        }
    })
});

router.get('/',(req,res)=>{
    res.send('stock-update');
})

module.exports = router;