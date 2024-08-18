

// function Samarth(naam , umar){
//     this.name = naam;
//     this.age = umar;
//     // this.greet = function(){
//     //     console.log(`hello from ${this.name}`)
//     // }
// }

// Samarth.prototype.greet = function(){
//     console.log(`hello from ${this.name}`)
// }

// let person1 = new Samarth("maverick" , 2)
// let person2 = new Samarth("sam" , 25)

// console.log(person1 , person2)



// ----------------------------


class Samarth{
    constructor(naam , umar){
        this.name = naam;
        this.age = umar;
    }
    greet(){
        console.log(`hello from ${this.name}`)
    }
}
class Camera extends Samarth{
    constructor(naam , umar , rollNo){
        super(naam , umar);
        this.roll = rollNo;
    }
    greet(){
        console.log("hello")
    }
}

let person1 = new Samarth("maverick" , 2)
let person2 = new Camera("sam" , 25 , 420)
console.log(person1 , person2)
