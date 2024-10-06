const express = require('express'); //fn
const app = express(); //obj => instance of your app

// middleware -> mahesh -> reception vali maam
app.use(function(req,res,next){
    console.log("abey aage jaa");
    next(); //next middleware fn
//    res.send("<h1>maine usse itna dekha jitna dekha jaa sakta tha lekin...</h1>")
})

app.get('/aaaah' , function(req,res){
    res.send("raat mei search kriyega...")
})

app.get('/web' , function(req,res){
    res.send("koi fayada nhi hai...")
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at port : ${PORT}`);
})


