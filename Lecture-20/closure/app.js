


// function outer(){
//     let a = 10;
//     let b = 200;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// let out2 = outer()
// out2();

// let out = function inner(){
//     console.log(a);
// }
// out()



// -----------------------


function counter(){
    let count = 0;
    let ret =  {
        getCount : function(){
            console.log(count)
        },
        increment : function(){
            count+=1;
        },
        decrement : function(){
            count-=1;
        },
        reset : function(){
            count = 0;
        }
    }
    return ret
}

let counting = counter()
console.log(counting)
counting.getCount();
counting.increment()
counting.increment()
counting.increment()
counting.getCount();
counting.decrement()
counting.getCount();
counting.reset()
counting.getCount();







