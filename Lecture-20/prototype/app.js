
// let obj = {
//     a:10,
//     fn:function(){
//         console.log("chutki and indumati")
//     }
// }
// console.log(obj)
// console.log(obj.a) //10
// console.log(obj.fn) //fn def

// console.log(obj.a()) // err
// console.log(obj.fn()) //fn run

// console.log(obj.b) //undef
// console.log(obj.b()) // error

// console.log(obj.toString) //fn
// console.log(obj.toString()) // [obj obj]

// ----------------------------------

// let arr = [10,20,30,40,50]



// let obj = {
//     a:10,
//     b:20
// }


function Sam(){
    this.a = "lol";
    this.b = "pani";
    // this.fn = function(){
    //     console.log("chota don")
    // }
}

Sam.prototype.fn = function(){
    console.log("chota don")
}

let obj2 = new Sam()
let obj3 = new Sam()



