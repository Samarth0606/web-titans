const express = require('express');//fn
const path = require('path');//nodejs ke andar hai
const app = express(); //obj

app.set('view engine' , 'ejs') // engine
app.set('views' , path.join(__dirname , 'views') ) // views/template
app.use(express.static(path.join(__dirname, 'public')))
// middleware
app.use((req,res,next)=>{
    console.log("mai to raste se jaa rha tha");
    next();
})
app.get('/' , (req,res)=>{
    res.render('home');
})
app.get('/about' , (req,res)=>{
    res.render('about')
})
const PORT= 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT : ${PORT}`);
})