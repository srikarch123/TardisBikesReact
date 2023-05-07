const express = require('express');
const app = express();
const port= 4500;
const cors = require('cors');
const dbURI='mongodb+srv://srikarwarrior:Hello@bro1234@cluster0.clegmwi.mongodb.net/?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const user_login = require('./Routes/user_login');
const vendor_login = require('./Routes/vendor_login');
const user_signup = require('./Routes/user_signup');
const vendor_signup = require('./Routes/vendor_signup');
const stock_upload = require('./Routes/stock_upload');
const vendor_stock = require('./Routes/vendor_stock');
const stock_search = require('./Routes/stock_search');
const stock_update = require('./Routes/stock_update');
const stock_delete = require('./Routes/stock_delete');

mongoose.connect(dbURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, 
});

app.use(cors());
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'));

app.use('/user-login',user_login);
app.use('/vendor-login',vendor_login);
app.use('/user-signup',user_signup);
app.use('/vendor-signup',vendor_signup);
app.use('/stock-upload',stock_upload);
app.use('/vendor-stock',vendor_stock);
app.use('/stock-search',stock_search);
app.use('/stock-update',stock_update);
app.use('/delete-stock',stock_delete);

app.listen(port,()=>{
    console.log(`App running localhost ${port}`);
});

