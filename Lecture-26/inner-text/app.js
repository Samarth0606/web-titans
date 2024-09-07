
// select
// let h1 = document.querySelector('h1');
// console.log(h1.innerText); //brainful
// console.log(h1.textContent); //brainless -> css read ❌
// console.log(h1.innerHTML); //brainful 

// manipulate

// h1.innerText = "<i> happy new year </i>"
// h1.textContent = "<i> happy new year </i>"
// h1.innerHTML = "<i> happy new year </i>"


// --------------------------------------


let el = document.querySelectorAll('a');
let inp = document.querySelector('input');

console.log(el[0].getAttribute('href'))
console.log(el[1].getAttribute('href'))
console.log(el[2].getAttribute('href'))
console.log(inp.getAttribute('type'))

el[0].setAttribute('href' , 'http://instagram.com')
















