

// setTimeout(cb , delay)

// setTimeout(function(){} , 5000);

let iddd = setTimeout(()=>{
    console.log("hello ji ki haal chaal...")
} , 5000);
clearTimeout(iddd);

// setInterval(cb , gap)
let id = setInterval(()=>{
    console.log("2sec...")
} , 2000)
let idd = setInterval(()=>{
    console.log("3sec...")
} , 3000)

setTimeout(()=>{
    clearInterval(id);
} , 10000)





