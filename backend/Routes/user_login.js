const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../Models/user');
const dbURI='mongodb+srv://srikarwarrior:Hello@bro1234@cluster0.clegmwi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
let user_data={
    login:false,
    name:'',
    email:'',
    mobile:0,
    password:'',
    address:'',
    dob:'',
    gender:'',
};
router.post('/',async(req,res)=>{
    let entered_password=req.body.password;
    user.findOne({email:req.body.email},(err,response)=>{
        if(err) throw err;
        else{
            user_data.login=false;
            if(response.password===entered_password){
                user_data.login=true;
                user_data.name=response.name;
                user_data.email=response.email;
                user_data.mobile=response.mobile;
                user_data.password=response.password;
                user_data.address=response.address;
                user_data.dob=response.dob;
                user_data.gender=response.gender;
            }
            console.log(user_data);
            res.send(user_data);
        }
    })
});

router.get('/',async(req,res)=>{
    res.send('userlogin');
})

module.exports = router;