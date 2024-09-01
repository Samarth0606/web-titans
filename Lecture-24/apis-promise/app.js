let p1 =  new Promise(function(resolve , reject){
    setTimeout(function(){
        reject('promise 1 resolved')
    } , 3000)
})
let p2 =  new Promise(function(resolve , reject){
    setTimeout(function(){ 
        // resolve('promise 2 resolved')
        reject('promise 2 rejected')
    } , 1000)
})
let p3 =  new Promise(function(resolve , reject){
    setTimeout(function(){
        reject('promise 3 resolved')
    } , 2000)
})
// Promise.all([p1,p2,p3]) //all resolve
// Promise.allSettled([p1,p2,p3]) //all settled (either resolve or reject)
// Promise.race([p1,p2,p3]) //1st promise doesnot matter resolve ya reject
Promise.any([p1,p2,p3]) //1st resolved promise 
.then(function(res){
    console.log(res , "res")
})
.catch(function(err){
    console.log(err , "err")
})



// let returnedVal = Promise.all([p1,p2,p3]);
// console.log(returnedVal)


