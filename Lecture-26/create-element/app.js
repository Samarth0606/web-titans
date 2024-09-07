

let ul = document.querySelector('ul');

// create

let listItem1 = document.createElement('li');
let li = document.createElement('li');
listItem1.innerText = "mai hu gian"
li.innerText = "mai hu suniyo"
// let li = document.createElement('li');

// ul.appendChild(listItem1 , li) // ❌
// ul.appendChild(listItem1) ✅
// ul.appendChild(li)✅ 

// ul.append(listItem1 , li)
ul.prepend(listItem1 , li)


// ul.remove() //target
// ul.removeChild(li) //target -> child
// ul.removeChild(listItem1)

listItem1.remove()
li.remove()



