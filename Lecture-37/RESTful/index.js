const { log } = require('console');
const express = require('express');
const path = require('path');
const app = express();

const blogs = [
    {id:0, comment:"tum mujhe khoon do" , author:"NATHURAM GODSE"} , 
    {id:1, comment:"angrezo bharat chodo" , author:"ELIZABETH"} ,  
    {id:2, comment:"bhaiyo aur baheno" , author:"RAHUL GANDHI"},
    {id:3, comment:"jaan lelenge iske liye" , author:"LAWERANCE BISHNOI"},
    {id:4, comment:"pehli fursat mei nikal" , author:"RAJA GUJJAR"},
];

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));

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
    blogs.push({ author ,comment , id:blogs.length });
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


const PORT = 8080;
app.listen(PORT , ()=>{
console.log(`SERVER CONNCETED AT PORT : ${PORT}`);
})





