const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

let blogs = [
    {id:uuidv4(), comment:"tum mujhe khoon do" , author:"NATHURAM GODSE"} , 
    {id:uuidv4(), comment:"angrezo bharat chodo" , author:"ELIZABETH"} ,  
    {id:uuidv4(), comment:"bhaiyo aur baheno" , author:"RAHUL GANDHI"},
    {id:uuidv4(), comment:"jaan lelenge iske liye" , author:"LAWERANCE BISHNOI"},
    {id:uuidv4(), comment:"pehli fursat mei nikal" , author:"RAJA GUJJAR"},
];

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(methodOverride('_method'));

// app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/' , (req,res)=>{
    res.render("home");
});
// TASK-1 -> DISPLAY ALL THE BLOGS
app.get('/blogs' , (req,res)=>{
    res.render('index' , {blogs})
})

// TASK-2 -> DISPLAY FORM 
app.get('/blog/new' , (req,res)=>{
    res.render('new')
})

// TASK-3 -> ACTUALLY ADD THE BLOG
app.post('/blogs' , (req,res)=>{
    let {comment , author} = req.body;
    blogs.push({ author ,comment , id:uuidv4() });
    res.redirect('/blogs')
})

// TASK-4 -> SHOW PARTICULAR PAGE
app.get('/blogs/:idd' , (req,res)=>{
    let {idd} = req.params;
    let returnedItem = blogs.find( (item) => {
        return item.id == idd
        // return item.id === parseInt(idd)
    });
    res.render('show' , {returnedItem})
})

// TASK-5 -> SHOW UPDATE FORM
app.get('/blogs/:idd/edit' , (req,res)=>{
    let {idd} = req.params;
    let returnedItem = blogs.find( (item) => {
        return item.id == idd
    });
    // console.log(returnedItem);
    res.render('edit' , {returnedItem})
})

// TASK-6 -> ACTUALLY UPDATING FORM 
app.patch('/blogs/:idd' , (req,res)=>{
    let {idd} = req.params;
    let returnedItem = blogs.find( (item) => {
        return item.id == idd
    });
    let {comment , author} = req.body;
    console.log(req.body , "booddyyy");
    // console.log(returnedItem ,comment , author );
    returnedItem.comment = comment;
    returnedItem.author = author;

    res.redirect('/blogs')
})

// TASK-7 -> DELETE THE BLOG
app.delete('/blogs/:idd' , (req,res)=>{
    let {idd} = req.params;
    let filteredArr = blogs.filter((item , index)=>{
        if(idd != item.id){return true}
    })
    blogs = filteredArr
    res.redirect('/blogs')
})

const PORT = 8080;
app.listen(PORT , ()=>{
console.log(`SERVER CONNCETED AT PORT : ${PORT}`);
})





