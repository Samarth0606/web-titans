


let arr1 = [10,20,30];
let arr2 = [40,50,60,70];


let ar3 = arr1.concat(arr2);
console.log(ar3)


// spread operator
// object ✅
// array ✅


let ar4 = [...arr1 , ...arr2]
console.log(ar4)


let obj1 = {a:10,b:20 };
let obj2 = {c:30}

let obj3 = {...obj1 , ...obj2 , d:300}
console.log(obj3);


