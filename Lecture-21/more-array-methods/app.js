let arr = [10,20,30,40,50];

// foreach => hof => always acccepts cb fn -> doesnot return anything
let returnedVal = arr.forEach( function(item , index){
    console.log(item , index)

} )

// console.log(returnedVal)


// map => hof => always acccepts cb fn -> returns a new array => length is same as the arr over which the operatioon is being applied on

// let newArr = arr.map((item , index)=>{
//     return item*item
// })


// let newArr = arr.map((item , index)=>item*item)
    
// console.log(newArr)


// filter => hof -> accepts cb fn -> returns a new arr -> length is not fixed
let newFilteredArr = arr.filter((item , index)=>{
    if(item > 0){
        return true
    }else{
        return false
    }
})
console.log(newFilteredArr)













