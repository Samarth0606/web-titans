
// let PI = 3.1425;

// let obj = {
//     a:10,
//     b:20
// }

// let sqr = (a)=>{
//     return a*a;
// }

//way-1
// module.exports = { PIII: PI , objjj: obj , sqrrr: sqr }

//way-2
// module.exports = { PI: PI , obj: obj } // js syntax

//way-3
// module.exports = { PI , obj}


// ----------------------------

let abc = 777;
let arr = [10,20,30,40];

function sam(){
    console.log("baba bengali ki jai")
}
console.log(abc)
console.log(arr)
sam()

//way-1
// module.exports = {key: value}
// module.exports = {abccc: abc , arrrr:arr , sammm:sam}

// --------------

// way-2
// module.exports = {abc: abc , arr:arr , sam:sam}

// --------------

// way-3
module.exports = {abc, arr , sam}
