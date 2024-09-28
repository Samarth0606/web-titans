const fs = require('fs');

// console.log(fs , "fs")

let d = "mai apne baccho ko salah dunga ki paido mat ho"
let d2 = "savdhan rahe satark rahe -> POSH se"

// fs.writeFile('file1.txt', d , {} , cb)

// fs.writeFile('file2.txt', d2 , 
// {

// } ,
// ()=>{
// console.log("data added")
// }
// )


// case-2
// fs.writeFile('file3.txt', d2 , 
// {
//   encoding:"utf-8",
//   flag:"w"
// },
// ()=>{
// console.log("data added")
// }
// )


// // read kro

// fs.readFile("file1.txt" ,  
// {
//     flag:"r",
//     encoding:"utf-8" //way-1
// } , (err , data)=>{
//     console.log(data , "data")
// })


// read kro
// fs.readFile("file1.txt" ,  
// {
    
// } , (err , data)=>{
//     console.log(data.toString() , "data") //way-2
// })


// update

// fs.appendFile('file2.txt'  , "baba ji" , 
// {

// } , 
// (err)=>{
//     if(err){ throw err}
//     console.log("data is updated")

// })


// delete
fs.unlink('file2.txt',
(err)=>{
    if(err){ throw err}
    console.log("data is deleted")

})



