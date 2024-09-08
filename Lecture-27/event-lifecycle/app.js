let gp = document.querySelector('#grandParent');
let p = document.querySelector('#parent');
let c = document.querySelector('#child');


// gp.addEventListener('click' , function(){
//     console.log("mai hu daadaa")
// } , true)
// p.addEventListener('click' , function(){
//     console.log("mai hu papa")
// } , true)
// c.addEventListener('click' , function(){
//     console.log("mai hu beta")
// } , true)



// gp.addEventListener('click' , function(){
//     console.log("mai hu daadaa")
// } , false)
// p.addEventListener('click' , function(){
//     console.log("mai hu papa")
// } , true)
// c.addEventListener('click' , function(){
//     console.log("mai hu beta")
// } , true)


//useCapture -> default = false

gp.addEventListener('click' , function(){
    console.log("mai hu daadaa")
} , false)
p.addEventListener('click' , function(e){
    e.stopPropagation();
    console.log("mai hu papa")
} , false) 
c.addEventListener('click' , function(e){
    e.stopPropagation()
    console.log("mai hu beta")
} , true)