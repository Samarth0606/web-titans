require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed')

mongoose.connect(process.env.MONGO_URL)
.then(function(){
    console.log('DB CONNECTED');
})
.catch(function(err){
    console.log(err , 'DB NOT CONNECTED');
})

// seedDB()

const PORT = process.env.PORT || 8080;
app.listen(PORT ,  ()=>{
    console.log(`SERVER CONNECTED AT PORT:  ${PORT}`);
})