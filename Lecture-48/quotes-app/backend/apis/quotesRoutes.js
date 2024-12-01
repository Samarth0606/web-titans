const express = require('express');
const Quote = require('../models/Quote');
const router = express.Router(); //mini server

// allquotes
router.get('/allquotes' , async(req,res)=>{
    try{
        let allQuotes  = await Quote.find({});
        // res.status(200).json({data:allQuotes})
        res.status(200).json(allQuotes)
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
})

// route to show a form -> react ✅

// add a new quote 
router.post('/allquotes' , async(req,res)=>{
    try{
        let {text , author} = req.body;
        await Quote.create({text , author});
        res.status(201).json({msg:'New quote created successfully'})
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
})

// show a particular quote
router.get('/quotes/:id' , async(req,res)=>{
    try{
        let quote = await Quote.findById(req.params.id);
        res.status(200).json(quote)
    }
    catch(e){
        res.status(400).json({msg:'Something went wrong'})
    }
})


module.exports = router;

