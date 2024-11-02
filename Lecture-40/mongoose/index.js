const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const movieRoutes = require('./routes/movie');


mongoose.connect('mongodb://127.0.0.1:27017/web-titans')
.then(()=>{console.log("DB connected");})
.catch((err)=>{console.log("error in connection",err);})

app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))

app.use(movieRoutes);


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT " ${PORT}`);  
})