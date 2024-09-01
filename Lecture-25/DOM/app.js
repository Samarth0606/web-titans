// selection (5)
//getElementsByTagName()
// let h1 = document.getElementsByTagName('h1');
// console.log(h1)

//getElementById()
// let sam = document.getElementById('sam');
// console.log(sam)

//getElementsByClassName()
// let vohra = document.getElementsByClassName('vohra');
// console.log(vohra)

// querySelector
// let h1 = document.querySelector('h1');
// let sam = document.querySelector('#sam');
// let vohra = document.querySelector('.vohra');
// console.log(h1 , sam , vohra)

// querySelectorAll
// let h1 = document.querySelectorAll('h1');
// let sam = document.querySelectorAll('#sam');
// let vohra = document.querySelectorAll('.vohra');
// console.log(h1 , sam , vohra)


// ------------------------------------

//change



// let h1 = document.querySelector('h1'); // 1 element
let h1 = document.getElementsByTagName('h1'); //array

// h1.style.color = "red";
// h1.style.backgroundColor = "green";
// h1.style.fontSize = "100px";

// h1.style.cssText = `
//     color:red;
//     background-color:green;
//     font-size:100px
// `

// h1[0].style.cssText = `
//     color:red;
//     background-color:green;
//     font-size:100px
// `
for(let item of h1){
    item.style.cssText = `
    color:red;
    background-color:green;
    font-size:100px
`
}









