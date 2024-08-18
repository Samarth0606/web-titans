// functional / direct calling -> window

// function sam(){
//     console.log(this);
// }
// sam();



// method invokation -> object inside which that method is available
// let objjj = {
//     a:10,
//     fn:function(){
//         console.log(this)
//     }
// }

// // fn(); ❌
// objjj.fn(); 


// let obj = {
//     a:100,
//     fun: function(){
//         console.log(this) // 1 obj
//         function vohra(){
//             console.log(this); // 2 window
//         }
//         vohra()
//     }
// }

// obj.fun();



// let obj = {
//     a: 20,
//     fn: function(){
//         console.log(this); //1 window
//         function vohra(){
//             console.log(this); //2  window
//         }
//         vohra();
//     }
// }

// let sam = obj.fn;
// sam()


// let objj = {

//     a:1,
//     fn: function(){
//         console.log(this); // 1 objj
//         let fnn = function(){
//             console.log(this); // 2 window
//         }
//         return fnn
//     }
// }

// let out = objj.fn();
// out();

// 3. constructor fn -> newly created object

// function Sam(){
//     this.naam = "bhaukaal";
// }
// let obj1 = new Sam();
// let obj2 = new Sam();

// let bcd = {
//     a:50
// }
// let abc = {
//     a: 100,
//     fn:function (x , y , z){
//         console.log(this , x , y , z)
//     }
// } 
// abc.fn();// {abc => a: 100}
// abc.fn.call(bcd) //  {bcd = > a: 50}
// abc.fn.apply(bcd) //  {bcd = > a: 50}

// abc.fn.call(bcd , 1 , 2 , 3) //  {bcd = > a: 50}
// abc.fn.apply(bcd ,[1 , 2 , 3]) //  {bcd = > a: 50}

// -----------------

// let bcd = {
//     a:50
// }
// let abc = {
//     a: 100,
//     fn:function (x , y , z){
//         console.log(this , x , y , z)
//     }
// }

// abc.fn.bind(bcd); // creates a copy of that fn
// abc.fn.apply(bcd);
// abc.fn.call(bcd);
// let out = abc.fn.bind(bcd , 12 ,13 , 14);
// console.log(out)
// out()


// 5. this in arrow -> parent ka this

// console.log(this) //window
//window
// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this) //obj
//         let cheen = ()=>{
//             console.log(this) //obj
//         }
//         cheen()
//     }
// }
// obj.fn(); 



// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this) //window
//         function tapak(){
//             console.log(this) // window
//         }
//         tapak()
//     }
// }
// let sam = obj.fn; 
// sam()
