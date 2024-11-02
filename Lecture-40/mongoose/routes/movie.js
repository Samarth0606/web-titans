const express = require('express');
const router = express.Router(); //mini server
const Movie = require('../models/Movie')

// READ
router.get('/movies'  , async(req,res)=>{
    // db Movie add
    let allMovies = await Movie.find();
    // console.log(allMovies, "allMovies");
    res.render('index' , {allMovies})
})

module.exports = router;


