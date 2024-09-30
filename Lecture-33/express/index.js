
const express = require('express') //function
const app = express() // return object -> entire instance of application

// console.log(app , "app")

//middleware -> functions which runs in between the req and res
app.use( (req , res)=>{
  console.log(res, "res");
  res.send('<p>padhle fir</p>')
} )


app.listen(8080 , ()=>{
    console.log("server connected at port 8080");
})













