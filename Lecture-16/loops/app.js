// for(let item = 0 ; item < 10 ; item++){
//     console.log(item)
// }


// let item2 = 0;
// while(item2<=10){
//     console.log(item2);
//     item2++
// }

// -----------------------------------------

//for - of => arrays
//for - in => objects

// ---------------

// arrays -> ordered ds -> collection of dissimilar type of data (indexes can be used as string as well)
// let a = 10
// let b = "sam"
// homgenous ❌
// heterogeneous ✅
// let arr = [10,20,30];// homo
// let ar2 = ["sam" , 10 , undefined , true , 30] //heterogenous

// console.log(ar2)
// console.log(ar2[0])
// console.log(ar2['1'])
// console.log(ar2['2'])


// let mat = [10,[200,[300,400,500],400],30];
// console.log(mat)
// console.log( mat[1] )
// console.log( mat[1][1] )
// console.log( mat[1][1][2] )



// ------------------

// object -> unordered -> collection of properties
// properties -> key : value pair

let arr = [10,20,30]
let obj = {
    // propeties => key : value
    naam : "samarth",
    isMale: true,
    age : 26,
    favColor : "black",
}
console.log(obj)
// console.log(obj[naam]) ❌
console.log(obj['naam']) 
console.log(obj.favColor) 
console.log(obj.age) 
console.log(obj.naam)
console.log(obj.isMale)
