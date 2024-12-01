require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express(); //instance
const mongoose = require('mongoose');
const seedDB = require('./seed')
const cors = require('cors')
const quoteRoutes = require('./apis/quotesRoutes')
 
 
mongoose.connect(process.env.MONGO_URL)
.then(function(){
    console.log('DB CONNECTED');
})
.catch(function(err){
    console.log(err , 'DB NOT CONNECTED');
})

// body parsing middlewares

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(cors())

// api will run here
app.use(quoteRoutes);

// seedDB()

const PORT = process.env.PORT || 8080;
app.listen(PORT ,  ()=>{
    console.log(`SERVER CONNECTED AT PORT:  ${PORT}`);
})