const express = require('express');
const path = require('path');
const app = express();

//taki views ka folder kahi se bhi access hojaae and view ki jagah koi aur naam dena hai to dedo
app.set("views" , path.join(__dirname, 'views') )
app.set('view engine' , 'ejs'); //setting ejs engine

// root route --> ('/')
app.get('/', function(req,res){
    // res.send('<h1>root pagee nazar agya</h1>'); //data/string
    res.render('homie/home'); 
})

// about route --> ('/about')
app.get('/about', function(req,res){
    res.render('about'); 
})
// lucky 7
app.get('/lucky' , (req,res)=>{
    let rn = Math.floor(Math.random()*11 + 2);
    // res.render('lucky' ,  {rn:rn})
    res.render('lucky' ,  {rn})
})

const PORT = 8080;
app.listen(PORT , function(){
    console.log(`Server connected at port : ${PORT}`);
})