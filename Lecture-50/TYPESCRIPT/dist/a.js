"use strict";
class User {
    constructor(x, y, z) {
        this.fName = x;
        this.lName = y;
        this.age = z;
    }
    greet(salam) {
        console.log(`${salam} from ${this.fName}`);
    }
}
let p1 = new User("samarth", "vohra", 21);
p1.greet("hello bhai ji");
p1.greet("salam bhai jan");
