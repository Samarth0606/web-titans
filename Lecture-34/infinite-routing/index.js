const express = require('express');
const app =  express();

// infinite routing
app.get('/mav/:polo' , (req,res)=>{
    console.log(req , "req");
    // console.log(req.params.polo,"req");
    let {polo} = req.params; //destructing
    console.log(polo , "polo");
    res.send(polo)
})

app.get('/search' , (req,res)=>{
   let {naam , umar} = req.query;
   res.send({naam,umar})
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server ji chal gye ${PORT} par`)
})