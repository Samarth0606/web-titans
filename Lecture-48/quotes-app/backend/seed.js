const mongoose = require('mongoose');
const Quote = require('./models/Quote');

let dummyArray = [
    {
        text: "kutta palo billo palo vahem na palo",
        author: "SHREE SHREE 555 MAVERICK BABA"
    },
    {
        text: "kis color ki bike kareedi hai",
        author: "SHREE SHREE 420"
    },
    {
        text: "Video delete 15 nov tak",
        author: "THARA BHAI JOGINDER"
    },
    {
        text: "KOI AAPSE PYAAR KYU KREGA",
        author: "POOKIE BABA"
    }
];

async function seedDB(){
    await Quote.insertMany(dummyArray);
    console.log("DB SEEDED");
}

module.exports = seedDB;