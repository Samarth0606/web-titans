const mongoose = require('mongoose');

// const movieSchema = new mongoose.Schema({})
// const movieSchema = new mongoose.Schema({
//     name:String,
//     actor:String,
//     imdb:Number,
//     year:Number,
//     isWatched:Boolean
// })

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    actor:{
        type:String,
        trim:true
    },
    imdb:{
        type:Number,
        min:0,
        max:10,
        required:true
    },
    year:{
        type:Number
    },
    isWatched:{
        type:Boolean,
        default:false
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
