// let a = 100;
// console.log(a);


// //block
// if(true){
//    let b = 200; // b -> block
//     const c = 3000; // b -> block
// }


// -------------------------------
// let / const => script / block

// script -> swarg ❌
// block -> swarg ✅

// -------------------------------



// var d = 10;
// function sam(){
//     var e = "sam";
//     var f = true;
// }
// sam()

// -------------------------

// var a = 1; //global
// let b = 2; //script
// const c = 3; //script

// if(true){ 
//     var e = 4; 
//     let f = 5; 
//     const g = 6; 
//     console.log("mittu don")
// }

// -----------------


// var d = 100;
// let s = "sam";

// if(true){
//     var w = "rem"
//     let c = 1;
//     const e = true; 
// }
// -----------------------
// function dam(){
//     var w = "rem"
//     let c = 1;
//     const e = true; 
// }

// dam();

// ----------------------------

// var a = 20;
// {
//     var a = 30;
//     var b = 30;
// }

// ----------

// var a = 20;
// function don(){
//     var a = 30;
//     var b = 30;
// }

// don()

// -----------

// var a = 20;
// function don(){
//     let a = 30;
//     let b = 30;
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(b)
// don()


// var a = 20;
// function don(){
//     let a = 30;
//     let b = 50;
//     console.log(a)
//     console.log(b)
// }
// don()
// console.log(a)
// console.log(b)


// let a = 20;
// function don(){
//     let a = 30;
//     let b = 50;
//     console.log(a)
//     console.log(b)
// }
// don()
// console.log(a)
// console.log(b)



var a = 20;
if(true){
    var a = 30;
    let b = 50;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)


// let a = 20;
// if(true){
//     var a = 30;
//     let b = 50;
//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(b)


// let a = 10;
// function sam(){
//         console.log(a)
// }
// sam()



let a = 10;
function sam(){
    let lol = "lol"
    function sam2(){
        function sam3(){
            console.log(lol)
            console.log(a)
        }
        sam3()
    }
    sam2()
}
sam()





