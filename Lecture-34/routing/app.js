const express = require('express');
const app = express();

// middleware
app.use((req,res,next)=>{
   console.log("mera kaam hogya ab tu aage jaa...");
   next(); //fn
})

// default
app.get('/' , (req,res)=>{
   res.send('<h1>i am default route</h1>')
})
// get
app.get('/hello' , (req,res)=>{
    res.send('<h1>i am hello</h1>')
})
app.get('/bye' , (req,res)=>{
   res.send('<h1>i am bye</h1>')
})
// universal (last)
app.get('*' ,(req,res)=>{
res.send('<h1>is naam se kachu nau haiga</h1>')
} )

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at port: ${PORT}`)
})