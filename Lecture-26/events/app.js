
// let h1 = document.querySelector('h1');

// function ramdev(){
//     console.log("yoga se hi hoga")
// }
// function ramrahim(){
//     console.log("you are my love charger")
// }

//problem
// h1.onclick = ramdev;
// h1.onclick = ramrahim;

//solution
// addEventListener()

// h1.addEventListener('click' , ramdev)
// h1.addEventListener('click' , ramrahim)



// let inp = document.querySelector('input');
// console.log(inp.innerText); //❌ nahi bane 
// console.log(inp.value); //❌ nahi bane 

// inp.addEventListener('input' , function(){
//     console.log(inp.value) //getter
// })
// inp.value = "vohra" //setter

// ----------------------------------

let inp = document.querySelector('input');
// inp.addEventListener('input' , function(event){
//     // console.log(inp.value)
//     console.log(event.target.value)
// })


inp.addEventListener('keydown' , function(e){
    // console.log(e.target)
    if(e.which === 13){
        console.log(e.target.value)
    }
})






