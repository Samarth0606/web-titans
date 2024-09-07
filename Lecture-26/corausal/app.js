
let imgEl = document.querySelector('img');

let arr = [
    "https://images.unsplash.com/photo-1725615357444-6123528686cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" , 
    "https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" , 
    "https://images.unsplash.com/photo-1724934956582-aab996f08484?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" , 
    "https://images.unsplash.com/photo-1724599824488-ed1e81e11c1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
]

let n = 0;

let idd = setInterval(function(){
    imgEl.setAttribute('src' , arr[n]);
    n=(n+1)%arr.length;
} , 2000)

setTimeout(function(){
    clearInterval(idd)
} , 30000)







