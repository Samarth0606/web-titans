
// let n = process.argv[2]
// console.log(n  , "n")

// for(let item  = 1 ; item<=n ; item++){
//     console.log(item)
// }

// ---------------


let n = process.argv.pop();
// console.log(n)

// // worst way
// for(let i=1;i<=n;i++){

//     if(i%15 === 0){
//         console.log("fizzbuzz")
//     }

//     else if(i%3 === 0){
//         console.log("fizz")
//     }
//     else if(i%5 === 0){
//         console.log("buzz")
//     }
//     else{
//         console.log(i)
//     }

// }


// better way
// for(let i=1;i<=n;i++){

//     let str = "";
//     if(i%3 === 0){
//         str+="fizz";
//     }
//     if(i%5 === 0){
//         str+="buzz";
//     }
//     if(str===""){
//         str+=i;
//     }
//     console.log(str)
// }

// best approach

let cnt3 = 1; 
let cnt5 = 1;
for(let i=1;i<=n;i++){
    let str = "";
    if(cnt3 === 3){
        str+="fizz";
        cnt3=0;
    }
    if(cnt5===5){
        str+="buzz";
        cnt5=0;
    }
    if(str===""){
        str+=i;
    }
    console.log(str)
    cnt3++;  
    cnt5++;
}




