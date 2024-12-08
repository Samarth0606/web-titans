// let sam = 1000; //inference
// let sam:number = 1000; 
// sam = 1000000;
// console.log(sam);



//tuples -> 

// let arr:[number , number , string] = [10,20,"sam"]

// -----------------------


// function sam(x:number , y:string):number{
//     console.log(x);  
//     return x+5 
// }

// sam(10 , "1")

// -------------------

// function chotu(){
//     console.log("i am chotu");  
//     // return true
//     return 12
// }

// // function sam(fn:()=>boolean){
// // function sam(fn:()=>number):()=>number{
// function sam(fn:()=>number):()=>void{
//     return fn;
// }

// sam(chotu)


// -------------------

// let sam = ()=>{
//     console.log("i am don");
// }
// sam()

// let p = 10;
// let d = 9;

// -----------------

// function lol(x:number , y:string){
//     console.log("i am  lol");
    
// }

// lol(100 , "sam")

// ------------------



// let user = {
//     firstName:" Akhri",
//     secondName: "Kilaas",
//     date:8,
//     topic:"TYPESCRIPT"
// }

// function tata(x:{
//     firstName: string,
//     secondName: string,
//     date: number,
//     topic: string
// }):boolean{

//     if(x.date>=5){
//         return true
//     }else{
//         return false
//     }
// }

// console.log( tata(user) );


// ------------------

// let user = {
//     firstName:" Akhri",
//     secondName: "Kilaas",
//     date:8,
//     topic:"TYPESCRIPT"
// }
// interface User{
//     firstName: string,
//     secondName: string,
//     date: number,
//     topic: string
// }
// function tata(x:User):boolean{

//     if(x.date>=5){
//         return true
//     }else{
//         return false
//     }
// }

// console.log( tata(user) );

// ------------------

// let user = {
//     firstName:" Akhri",
//     secondName: "Kilaas",
//     greet:function(){
//         console.log(`Hello from ${this.name}`);
//     }
// }

// interface User1{
//     fName:string;
//     lName:string;
//     age:number;
// }
// interface User2 extends User1{
//     greet(salam:string):void
// }

// class User implements User2{
//     fName:string;
//     lName:string;
//     age:number;
//     constructor(x:string , y:string , z:number){
//         this.fName = x;
//         this.lName = y;
//         this.age = z;
//     }
//     greet(salam:string) {
//         console.log(`${salam} from ${this.fName}`); 
//     }
// }
// let p1 =  new User("samarth" , "vohra" , 21);
// p1.greet("hello bhai ji")
// p1.greet("salam bhai jan")




// type User1 = {
//     fName:string;
//     lName:string;
//     age:number;
// }
// type User2 = User1 & {
//     greet(salam:string):void
// }

// class User implements User2{
//     fName:string;
//     lName:string;
//     age:number;
//     constructor(x:string , y:string , z:number){
//         this.fName = x;
//         this.lName = y;
//         this.age = z;
//     }
//     greet(salam:string) {
//         console.log(`${salam} from ${this.fName}`); 
//     }
// }
// let p1 =  new User("samarth" , "vohra" , 21);
// p1.greet("hello bhai ji")
// p1.greet("salam bhai jan")




// interface WEB{
//     project: string,
//     mentor: string
// }

// type WEB = {
//     project: string,
//     mentor: string
// }
// interface DSA extends WEB{
//     leetcode: number,
//     mentor: string
// }


// interface WEBB{

// }

// type DSAA = WEBB & {

// }



// type

// type N = number;
// type S = string;

// let ans:N[]|S[] = [10 , 20];
// ans = ["sam"]


// -------------

let arr:number[] | string[] = [10,20,30,40,50];
arr= ["lol" , "bol" , "dhol"]



//homework
// emuns
// generics 
